
# Sadguru Vaakku v2.0 🙏

A beautiful Telugu/English bilingual audio discovery web application featuring spiritual guidance and peaceful sounds.

## ✨ Features

- **Bilingual Support**: Complete Telugu/English language toggle
- **Audio Discovery**: Text-to-audio mapping using secure hashing
- **Spiritual Theme**: Sai Baba integration with peaceful lime green design
- **20 Audio Files**: Pre-configured with sample audio and bilingual transcripts
- **Responsive Design**: Works on desktop, tablet, and mobile
- **GitHub Pages Ready**: Automatic deployment with CI/CD

## 🚀 Quick Start

### Option 1: Direct Deployment to GitHub Pages

1. **Fork or Clone this repository**
   ```bash
   git clone https://github.com/yourusername/sadguru-vaakku.git
   cd sadguru-vaakku
   ```

2. **Create GitHub Repository named "sadguru-vaakku"**
   - Repository name MUST be exactly "sadguru-vaakku"
   - Push your code to the repository

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
   - Automatic deployment will start

4. **Access your app**
   - URL: `https://yourusername.github.io/sadguru-vaakku/`

### Option 2: Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── AudioPlayer.tsx      # Audio playback component
│   ├── LanguageToggle.tsx   # Telugu/English toggle
│   ├── TranscriptDisplay.tsx # Bilingual transcript display
│   └── ui/                  # Shadcn UI components
├── contexts/
│   └── LanguageContext.tsx  # Language state management
├── data/
│   └── audioData.ts         # Audio files and transcripts
├── pages/
│   └── Index.tsx            # Main application page
├── assets/
│   ├── sai-baba-logo.jpg    # Spiritual logo
│   └── peaceful-background.jpg # Background image
└── utils/
    ├── audioUtils.ts        # Audio helper functions
    └── hashUtils.ts         # Text hashing for audio selection
```

## 🎵 Adding Audio Files

### Step 1: Add Audio File
Place your audio file in `public/audio/` directory:
```
public/audio/sample21.mp3
```

### Step 2: Update Audio Data
Add entry to `src/data/audioData.ts`:
```typescript
{
  id: 21,
  filename: "sample21.mp3",
  url: "./audio/sample21.mp3",
  title: "Your Audio Title"
}
```

### Step 3: Add Bilingual Transcripts
```typescript
21: {
  en: "English transcript here...",
  te: "Telugu transcript here..."
}
```

### Step 4: Commit and Deploy
```bash
git add .
git commit -m "Add new audio file"
git push origin main
```

## 🌐 Deployment Options

### GitHub Pages (Recommended)
- ✅ Free hosting
- ✅ Automatic CI/CD
- ✅ Custom domain support
- ✅ 1GB repository limit

### Alternative Platforms
- **Vercel**: `vercel --prod`
- **Netlify**: Upload `dist/` folder
- **Firebase**: `firebase deploy`

## 🎨 Customization

### Colors and Theme
Edit `src/index.css` for design tokens:
```css
:root {
  --primary: 84 85% 35%;     /* Lime green */
  --background: 0 0% 100%;   /* White */
  /* ... more theme variables */
}
```

### Logo and Branding
Replace `src/assets/sai-baba-logo.jpg` with your logo

### Language Content
Update translations in `src/contexts/LanguageContext.tsx`

## 🔧 Technical Details

### Built With
- **React 18** + TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Shadcn/ui** for components
- **React Router** for navigation

### Audio Requirements
- **Formats**: MP3, WAV, OGG
- **Size limit**: 100MB per file
- **Total limit**: 1GB for GitHub Pages

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## 📝 License

MIT License - feel free to use for personal or commercial projects.

## 🙏 Credits

- **Spiritual Inspiration**: Sadguru Sai Baba
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🐛 Troubleshooting

### Audio Not Playing
- Check audio files are in `public/audio/` directory
- Verify files are committed to Git
- Ensure file paths use `./audio/` prefix

### Deployment Issues
- Repository name must be "sadguru-vaakku"
- Check GitHub Actions tab for build logs
- Verify base path in `vite.config.ts`

### Routing Problems
- Ensure single BrowserRouter in `main.tsx`
- Check basename matches repository name

---

**May this application bring peace and spiritual guidance to all users** 🕉️

For support or questions, please open an issue on GitHub.
