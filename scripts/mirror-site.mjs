import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const origin = "https://ghaythkhezami-aqfy.onrender.com";
const root = process.cwd();
const queue = ["/"];
const seen = new Set();

const textExtensions = /\.(css|html|js|json|webmanifest)(?:$|\?)/i;
const textTypes = /(?:text|javascript|json|manifest)/i;

function localPathFor(url) {
  const parsed = new URL(url, origin);
  const pathname = parsed.pathname === "/" ? "/index.html" : parsed.pathname;
  return join(root, pathname.replace(/^\/+/, ""));
}

function enqueue(candidate, baseUrl) {
  if (!candidate || candidate.startsWith("#") || candidate.startsWith("data:")) return;

  let parsed;
  try {
    parsed = new URL(candidate, baseUrl);
  } catch {
    return;
  }

  if (parsed.origin !== origin) return;
  if (parsed.pathname !== "/" && !/\.[a-z0-9][a-z0-9~_-]*$/i.test(parsed.pathname)) return;
  queue.push(`${parsed.pathname}${parsed.search}`);
}

function extractAssets(text, baseUrl) {
  const patterns = [
    /\b(?:href|src)=["']([^"']+)["']/gi,
    /\bsrcset=["']([^"']+)["']/gi,
    /url\(([^)]+)\)/gi,
    /["'`]((?:\/|\.\/|\.\.\/)(?:_next|profile|icons|edu|startups|favicon|manifest|Ghayth)[^"'`<>\s)]*)["'`]/gi
  ];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const value = match[1].trim().replace(/^["']|["']$/g, "");
      if (!value) continue;

      if (pattern.source.includes("srcset")) {
        for (const part of value.split(",")) {
          enqueue(part.trim().split(/\s+/)[0], baseUrl);
        }
      } else {
        enqueue(value, baseUrl);
      }
    }
  }
}

async function download(pathname) {
  const url = new URL(pathname, origin).toString();
  if (seen.has(url)) return;
  seen.add(url);

  const response = await fetch(url);
  if (!response.ok) {
    console.warn(`Skipped ${url}: ${response.status}`);
    return;
  }

  const filePath = localPathFor(url);
  await mkdir(dirname(filePath), { recursive: true });

  const contentType = response.headers.get("content-type") || "";
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(filePath, buffer);
  console.log(`Saved ${new URL(url).pathname}`);

  if (textTypes.test(contentType) || textExtensions.test(url)) {
    extractAssets(buffer.toString("utf8"), url);
  }
}

while (queue.length) {
  const next = queue.shift();
  await download(next);
}

console.log(`Mirrored ${seen.size} local URLs from ${origin}`);
