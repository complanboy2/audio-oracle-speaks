# Audio Files Directory

This directory should contain all the audio files for the Sadguru Vaakku application.

## File Structure

Place your MP3 audio files in this directory with the following naming convention:
- sample1.mp3
- sample2.mp3
- sample3.mp3
- ...
- sample20.mp3

## Adding New Audio Files

1. Place your audio files in this `public/audio/` directory
2. Update the `src/data/audioData.ts` file to include the new audio file information
3. Add corresponding transcripts in both English and Telugu languages

## Supported Formats

- MP3 (recommended)
- WAV
- OGG
- M4A

## File Size Recommendations

For better performance and faster loading:
- Keep individual files under 10MB
- Use MP3 format with 128kbps or 192kbps quality
- Consider compressing audio files if they're too large

## GitHub Deployment

When deploying to GitHub Pages, all files in this directory will be publicly accessible at:
`https://yourusername.github.io/your-repo-name/audio/filename.mp3`

## Sample Audio Files

For development and testing, you can use any audio files. The current configuration expects 20 audio files (sample1.mp3 through sample20.mp3).

If you have fewer files, update the `audioFiles` array in `src/data/audioData.ts` accordingly.