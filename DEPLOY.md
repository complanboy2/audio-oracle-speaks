# Deployment Guide - Sadguru Vaakku v2.0

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Create GitHub Repository**
   ```bash
   # Create a new repository on GitHub
   # Then clone it locally or push existing code
   git init
   git add .
   git commit -m "Initial commit - Sadguru Vaakku v2.0"
   git branch -M main
   git remote add origin https://github.com/yourusername/sadguru-vaakku.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Select "GitHub Actions" as the source
   - The deployment workflow will automatically trigger

3. **Add Audio Files**
   - Create audio files and place them in `public/audio/` directory
   - Name them: `sample1.mp3`, `sample2.mp3`, etc.
   - Commit and push the changes

### Audio File Management

#### Local Development
- Place audio files in `public/audio/` directory
- Files will be served from `http://localhost:8080/audio/filename.mp3`

#### Production (GitHub Pages)
- Files will be served from `https://yourusername.github.io/repository-name/audio/filename.mp3`
- Maximum file size per repository: 1GB
- Individual file size limit: 100MB

#### Adding New Audio Files

1. **Add audio file to `public/audio/` directory**
   ```
   public/audio/sample21.mp3
   ```

2. **Update `src/data/audioData.ts`**
   ```typescript
   {
     id: 21,
     filename: "sample21.mp3",
     url: "/audio/sample21.mp3",
     title: "Your Audio Title"
   }
   ```

3. **Add transcripts**
   ```typescript
   21: {
     en: "English transcript here...",
     te: "Telugu transcript here..."
   }
   ```

### Deployment Status

Your app will be available at:
`https://yourusername.github.io/repository-name/`

### Alternative Hosting Options

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

#### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

### Audio Storage Alternatives

For large audio collections, consider:

1. **External CDN** (Cloudinary, AWS S3)
2. **Git LFS** for large files
3. **Separate audio hosting** service

### Environment Configuration

The app is configured to work with:
- Local development: `http://localhost:8080`
- GitHub Pages: automatic base URL detection
- Custom domains: update `vite.config.ts` base URL

### Version 2.0 Features

- ✅ Local audio file support
- ✅ GitHub Pages deployment
- ✅ Automatic CI/CD pipeline
- ✅ Telugu/English language toggle
- ✅ Responsive design
- ✅ Lime green theme
- ✅ Sai Baba logo integration