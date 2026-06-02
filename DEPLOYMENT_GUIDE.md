# 🚀 Deployment Guide - Render.com

## Prerequisites

- GitHub account (free)
- Render.com account (free)
- Git installed on your computer

---

## Step 1: Initialize Git Repository

Open PowerShell in your project folder and run:

```powershell
cd c:\Users\admin\Desktop\portfolio2
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
git add .
git commit -m "Initial portfolio commit"
```

---

## Step 2: Create GitHub Repository

1. Go to **[github.com/new](https://github.com/new)**
2. Create a new repository:
   - **Repository name**: `portfolio` (or any name)
   - **Description**: `HMISSI RAMZY - Computer Science and BI Educator Portfolio`
   - **Visibility**: Public (required for Render free tier)
   - **DO NOT initialize with README** (we already have one)
3. Click **Create repository**

---

## Step 3: Push to GitHub

In PowerShell, run these commands:

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

**Note**: You may be asked to authenticate. Use a **Personal Access Token** if 2FA is enabled:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Create a new token with `repo` scope
3. Use token as password when prompted

---

## Step 4: Deploy on Render

### Method 1: Using render.yaml (Recommended)

1. Go to **[render.com](https://render.com)**
2. Sign up or log in with your GitHub account
3. Click **+ New** → **Web Service**
4. Select your GitHub repository from the list
5. Render will auto-detect `render.yaml` configuration
6. Review the auto-filled settings:
   - **Name**: `hmissi-ramzy-portfolio`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
7. Click **Create Web Service**

### Method 2: Manual Configuration

If auto-detection doesn't work:

1. Go to **[render.com](https://render.com)**
2. Click **+ New** → **Web Service**
3. Select your repository
4. Fill in manually:
   - **Name**: `hmissi-ramzy-portfolio`
   - **Environment**: Node
   - **Region**: Ohio (or closest to you)
   - **Branch**: main
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. **Environment Variables**:
   - Add if needed (usually not required)
6. **Plan**: Free (recommended for portfolio)
7. Click **Create Web Service**

---

## Step 5: Wait for Deployment

Render will:
1. Clone your repository
2. Install dependencies (`npm install`)
3. Start the server (`npm start`)
4. Provide you with a live URL

**First deployment takes 2-3 minutes.**

Your site will be available at: `https://hmissi-ramzy-portfolio.onrender.com` (or similar)

---

## Step 6: Custom Domain (Optional)

To use your own domain:

1. In Render dashboard, go to your Web Service
2. Click **Settings** → **Custom Domain**
3. Enter your domain name
4. Follow DNS setup instructions
5. Wait for SSL certificate (5-15 minutes)

**Popular domain providers:**
- Namecheap
- GoDaddy
- Google Domains

---

## 🔄 Updating Your Portfolio

After making changes locally:

```powershell
# Stage changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main
```

Render will automatically redeploy within 1-2 minutes!

---

## ✅ Verification Checklist

- [ ] `.gitignore` is in place
- [ ] `render.yaml` is configured
- [ ] `package.json` has correct scripts
- [ ] `server.js` is executable
- [ ] All images are in correct directories
- [ ] GitHub repository is public
- [ ] Git remote is set to your repo
- [ ] Code is pushed to GitHub main branch
- [ ] Render deployment shows "Live"

---

## 🐛 Troubleshooting

### "Build Failed" Error

**Check logs:**
1. Go to Render dashboard
2. Click your Web Service
3. Click **Logs** tab
4. Look for error messages

**Common issues:**
- Missing `render.yaml` → Add it to root directory
- Incorrect `start` command → Check it matches `server.js`
- Port hardcoded → Should use `process.env.PORT`

**Solution:** Push fixes to GitHub, and Render will auto-redeploy.

### "Deployment Spinning"

If deployment takes > 5 minutes:
1. Check Render logs for stuck processes
2. Click **Manual Deploy** → **Latest Commit**
3. Check GitHub push was successful: `git log --oneline -5`

### Site Shows 404

- Ensure `server.js` is correctly serving files
- Check all image paths start with `/` (absolute paths)
- Verify `index.html` is in project root

**Test locally first:**
```powershell
npm start
# Visit http://localhost:4173
```

### Images Not Loading

- Check image paths in HTML (must start with `/`)
- Verify image files exist in correct folders
- Check file names match exactly (case-sensitive)
- Use JPG for photos, PNG for logos

---

## 📊 Monitoring

Once deployed:

1. **View Logs**: Click **Logs** tab in Render dashboard
2. **Check Status**: Status should show "Live" (green)
3. **Monitor Activity**: View deploy history and rebuild times

---

## 💰 Pricing

**Render Free Tier:**
- ✅ Static sites: Free
- ✅ Web services: Free (with limitations)
- ✅ SSL certificate: Free
- ✅ Monthly hours: 750 hours (~31 days)
- ⚠️ Spins down after 15 minutes of inactivity
- ⚠️ Restarts take 30 seconds

**Upgrade to Starter ($7/month) to:**
- Remove spin-down behavior
- Guaranteed availability
- Priority support

---

## 🔒 Security Tips

1. **Never commit secrets** (API keys, passwords)
2. **Use `.gitignore`** for sensitive files
3. **Review public repository** - portfolio is public by nature
4. **Update dependencies** regularly
5. **Enable branch protection** on GitHub (optional)

---

## 📞 Support Resources

- **Render Docs**: https://render.com/docs
- **GitHub Help**: https://docs.github.com/en
- **Node.js Docs**: https://nodejs.org/en/docs/
- **Project Issues**: Check console logs and error messages

---

## ✨ Final Steps

After deployment:

1. ✅ Test all language switching (EN/FR/AR)
2. ✅ Verify all links work
3. ✅ Test on mobile devices
4. ✅ Share your portfolio URL!

**Your live portfolio is now online! 🎉**

---

**Questions?** Check the logs tab in Render dashboard or review this guide again.
