
import { audioFiles, transcripts } from '@/data/audioData';

export interface AudioFile {
  id: number;
  filename: string;
  url: string;
  title: string;
}

export const getAudioFile = (audioId: number): AudioFile => {
  const audio = audioFiles.find(file => file.id === audioId);
  
  if (!audio) {
    // Fallback to first audio if ID not found
    return audioFiles[0];
  }
  
  return audio;
};

export const getTranscript = (audioId: number, language: 'en' | 'te' = 'en'): string => {
  const transcript = transcripts[audioId];
  
  if (!transcript) {
    return language === 'te' 
      ? "ఈ ఆడియో ఫైల్‌కు ట్రాన్స్‌క్రిప్ట్ అందుబాటులో లేదు."
      : "Transcript not available for this audio file.";
  }
  
  return transcript[language] || transcript['en'];
};

export const getTotalAudioFiles = (): number => {
  return audioFiles.length;
};
