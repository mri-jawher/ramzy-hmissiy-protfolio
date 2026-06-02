# HMISSI RAMZY - Portfolio Website

A modern, multilingual portfolio website for Hmissi Ramzy, Computer Science and Business Intelligence Educator.

## 🌍 Features

- **Multi-language Support**: English, French, and Arabic with RTL support
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **Modern UI**: Dark theme with glassmorphism effects and smooth animations
- **Project Showcase**: Display your teaching materials and professional work
- **Language Persistence**: Saves user's language preference
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📋 Sections

- **Hero**: Engaging introduction with statistics
- **About**: Professional background and skills
- **Teaching Experience**: Current and past teaching positions
- **Professional Experience**: Industry work and projects
- **Projects & Portfolio**: Teaching materials and platform showcases
- **Participations & Rewards**: Community engagement and recognition
- **Education**: Academic degrees and certifications
- **Communities**: Technical leadership and involvement

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies (if needed)
npm install

# Start development server
npm start

# Server runs on http://localhost:4173
```

### Multi-Language System

The website supports 3 languages:
- **EN** - English (default)
- **FR** - Français
- **AR** - العربية (Arabic with RTL layout)

Language preference is saved to browser localStorage.

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── server.js               # Node.js development server
├── i18n.json              # Translation strings (EN, FR, AR)
├── i18n.js                # Translation system
├── package.json           # Dependencies
├── icons/                 # Company logos (4 images)
├── profile/               # Profile photos
├── teaching/              # Teaching experience images
├── experience/            # Professional work screenshots
├── projects/              # Project portfolio images
├── participations/        # Event and award photos
├── communities/           # Community involvement photos
└── education/             # Education images
```

## 🖼️ Required Images

See `IMAGE_LIST.md` for complete list of image placeholders and specifications.

## 🌐 Deployment on Render

### Steps to Deploy

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Push to GitHub**
   - Go to [github.com](https://github.com)
   - Create a new repository
   - Follow the instructions to push your code

3. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub account
   - Create a new "Web Service"
   - Connect your GitHub repository
   - Choose the branch (main)
   - Render will auto-detect the configuration from `render.yaml`
   - Click "Create Web Service"

4. **Configure Environment**
   - Render will use settings from `render.yaml`
   - Node.js runtime will be auto-detected
   - Build and deploy will happen automatically

### Alternative: Without render.yaml

If `render.yaml` doesn't work, manually configure:
- **Name**: `hmissi-ramzy-portfolio`
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Node Version**: 18+ (recommended)

## 🔧 Environment Variables

The application uses:
- `PORT` (default: 4173) - Set automatically by Render
- `NODE_ENV` (production) - Set automatically

## 📝 Translations

All content is in `/i18n.json` organized by language:
- English (en)
- French (fr)
- Arabic (ar)

To add more content:
1. Edit `i18n.json`
2. Add the key-value pairs for each language
3. Add `data-i18n="key.path"` attribute to HTML element
4. Update `i18n.js` to translate the element

## 🎨 Customization

### Colors
Edit CSS variables in `index.html` `<style>` tag:
```css
:root {
  --bg: #070a0f;
  --panel: rgba(13, 20, 31, 0.78);
  --green: #20e0b4;
  --blue: #48b7ff;
  --gold: #f4c430;
}
```

### Fonts
Currently uses Inter font via system fonts. To use custom fonts, add Google Fonts link to `<head>`.

## 🖼️ Adding Images

1. Create the appropriate folder under `portfolio2/`
2. Add your image file (JPG recommended for photos)
3. Images will automatically load from their paths

Recommended image sizes:
- Company logos: 200x100px (PNG)
- Photo cards: 400x300px (JPG)
- Hero images: 1200x800px (JPG)
- Certificate images: 400x250px (JPG)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+ (3-column grids)
- **Tablet**: 980px (2-column grids)
- **Mobile**: 640px (1-column layout)

## 🔗 Social Links

Update in the HTML `<aside class="rail">` section with your:
- CV/Resume PDF
- LinkedIn profile
- GitHub profile
- Email address
- Phone number

## 📦 Dependencies

- **Node.js**: v18+ recommended
- **No external dependencies** - Uses vanilla JavaScript

## 📄 License

This portfolio is personal and all rights reserved.

## 🤝 Support

For issues or questions about the deployment:
1. Check Render deployment logs
2. Ensure all image files are in correct directories
3. Verify `server.js` is working on localhost first
4. Check console for JavaScript errors

## 🎯 Next Steps

1. Add your actual images to the appropriate folders
2. Update social links in the HTML
3. Customize color scheme if desired
4. Deploy to Render following the steps above

---

**Live Portfolio**: Coming soon on Render.com
**Last Updated**: June 2, 2026
