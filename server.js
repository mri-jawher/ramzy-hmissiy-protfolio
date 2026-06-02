import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.cwd());
const port = Number(process.env.PORT || 4173);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".woff2": "font/woff2"
};

function fileForRequest(rawUrl) {
  const url = new URL(rawUrl, `http://localhost:${port}`);
  let pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  pathname = normalize(pathname).replace(/^([/\\])+/, "");

  const filePath = resolve(join(root, pathname));
  if (!filePath.startsWith(root)) return null;
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    return resolve(join(filePath, "index.html"));
  }
  return filePath;
}

createServer((request, response) => {
  const filePath = fileForRequest(request.url || "/");

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type": types[extname(filePath).toLowerCase()] || "application/octet-stream"
  });
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Portfolio mirror running at http://localhost:${port}`);
});
