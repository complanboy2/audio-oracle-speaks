
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

export const getTranscript = (audioId: number): string => {
  const transcript = transcripts[audioId];
  
  if (!transcript) {
    return "Transcript not available for this audio file.";
  }
  
  return transcript;
};

export const getTotalAudioFiles = (): number => {
  return audioFiles.length;
};
