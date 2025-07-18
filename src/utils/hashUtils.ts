
import { audioFiles } from '@/data/audioData';

// Simple hash function for demonstration (in production, use crypto.subtle.digest for SHA-256)
const simpleHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
};

export const hashTextToAudioId = (text: string): number => {
  // Combine text with current timestamp for uniqueness
  const timestamp = Date.now().toString();
  const combinedString = `${text}_${timestamp}`;
  
  // Hash the combined string
  const hash = simpleHash(combinedString);
  
  // Map hash to available audio IDs (1 to totalAudioFiles)
  const totalAudioFiles = audioFiles.length;
  const audioId = (hash % totalAudioFiles) + 1;
  
  console.log(`Text: "${text}" -> Hash: ${hash} -> Audio ID: ${audioId}`);
  
  return audioId;
};

// For production use with Web Crypto API:
export const hashTextToAudioIdSecure = async (text: string): Promise<number> => {
  const timestamp = Date.now().toString();
  const combinedString = `${text}_${timestamp}`;
  
  const encoder = new TextEncoder();
  const data = encoder.encode(combinedString);
  
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = new Uint8Array(hashBuffer);
  
  // Convert first 4 bytes to a number
  let hash = 0;
  for (let i = 0; i < 4; i++) {
    hash = (hash << 8) + hashArray[i];
  }
  
  const totalAudioFiles = audioFiles.length;
  const audioId = (Math.abs(hash) % totalAudioFiles) + 1;
  
  return audioId;
};
