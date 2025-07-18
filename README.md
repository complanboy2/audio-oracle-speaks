
# Audio Discovery Web Application

A clean, minimal web application for hosting and serving a collection of pre-recorded audio files. Each audio file is uniquely associated with a natural number ID and can be discovered through text input hashing.

## Features

- **Text-to-Audio Mapping**: Enter any text to discover unique audio content through cryptographic hashing
- **Audio Player**: Custom-built audio player with play/pause, seek, and download functionality
- **Transcript Display**: AI-generated transcripts for each audio file
- **Responsive Design**: Modern, clean interface that works on all devices
- **Hash-based Selection**: Combines user input with timestamp for deterministic audio selection

## How It Works

1. User enters text in the input field
2. Text is combined with current timestamp and hashed
3. Hash value determines which audio file to play (hash % totalAudioFiles)
4. Selected audio plays with corresponding transcript displayed

## Project Structure

```
src/
├── components/
│   ├── AudioPlayer.tsx       # Custom audio player component
│   └── TranscriptDisplay.tsx # Transcript display component
├── data/
│   └── audioData.ts         # Audio files and transcripts data
├── utils/
│   ├── audioUtils.ts        # Audio file management utilities
│   └── hashUtils.ts         # Text hashing functionality
└── pages/
    └── Index.tsx            # Main application page
```

## Adding Your Audio Files

### Step 1: Prepare Your Audio Files

1. Create a `public/audio/` directory in your project
2. Place your audio files (MP3, WAV, etc.) in this directory
3. Name them sequentially: `audio1.mp3`, `audio2.mp3`, etc.

### Step 2: Update Audio Data

Edit `src/data/audioData.ts`:

```typescript
export const audioFiles: AudioFile[] = [
  {
    id: 1,
    filename: "audio1.mp3",
    url: "/audio/audio1.mp3",
    title: "Your Audio Title"
  },
  // Add more audio files...
];
```

### Step 3: Add Transcripts

Update the transcripts object in the same file:

```typescript
export const transcripts: Record<number, string> = {
  1: "Your AI-generated transcript for audio 1...",
  2: "Your AI-generated transcript for audio 2...",
  // Add more transcripts...
};
```

## Deployment Instructions

### Option 1: Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Option 2: Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## Cloud Storage Integration

For larger audio collections, consider using cloud storage:

### AWS S3
```typescript
const audioUrl = `https://your-bucket.s3.region.amazonaws.com/audio/audio${audioId}.mp3`;
```

### Google Cloud Storage
```typescript
const audioUrl = `https://storage.googleapis.com/your-bucket/audio/audio${audioId}.mp3`;
```

### Cloudinary
```typescript
const audioUrl = `https://res.cloudinary.com/your-cloud/video/upload/audio${audioId}.mp3`;
```

## Generating Transcripts

Use AI transcription services to generate transcripts:

1. **OpenAI Whisper API**
2. **Google Speech-to-Text**
3. **Assembly AI**
4. **Rev.ai**

Example with Whisper:
```bash
whisper audio1.mp3 --output_format txt
```

## Sample Data

The application comes with 20 sample audio entries and corresponding transcripts. Replace these with your actual audio files and transcripts.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn/ui components
- Lucide React icons

## Security Note

The current implementation uses a simple hash function for demonstration. For production use, consider implementing the secure SHA-256 version using the Web Crypto API (see `hashTextToAudioIdSecure` in `hashUtils.ts`).

## License

MIT License - feel free to modify and use for your projects.
