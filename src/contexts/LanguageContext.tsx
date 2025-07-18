import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    title: "Sadguru Vaakku",
    subtitle: "Enter text to discover unique audio content",
    textInput: "Text Input",
    enterText: "Enter your text",
    placeholder: "Type anything here...",
    discoverAudio: "Discover Audio",
    processing: "Processing...",
    reset: "Reset",
    transcript: "Transcript",
    howItWorks: "How it works:",
    step1: "Enter any text in the input field above",
    step2: "Your text is combined with a timestamp and hashed",
    step3: "The hash determines which audio file to play",
    step4: "Each audio comes with its AI-generated transcript",
    audioFile: "Audio #",
    transcriptNotAvailable: "Transcript not available for this audio file.",
    copyToClipboard: "Copied!",
    transcriptCopied: "Transcript copied to clipboard",
    copyError: "Failed to copy transcript"
  },
  te: {
    title: "సద్గురు వాక్కు",
    subtitle: "ప్రత్యేకమైన ఆడియో కంటెంట్ కనుగొనడానికి టెక్స్ట్ ఎంటర్ చేయండి",
    textInput: "టెక్స్ట్ ఇన్‌పుట్",
    enterText: "మీ టెక్స్ట్ ఎంటర్ చేయండి",
    placeholder: "ఇక్కడ ఏదైనా టైప్ చేయండి...",
    discoverAudio: "ఆడియో కనుగొనండి",
    processing: "ప్రాసెసింగ్...",
    reset: "రీసెట్",
    transcript: "ట్రాన్స్‌క్రిప్ట్",
    howItWorks: "ఇది ఎలా పని చేస్తుంది:",
    step1: "పైన ఉన్న ఇన్‌పుట్ ఫీల్డ్‌లో ఏదైనా టెక్స్ట్ ఎంటర్ చేయండి",
    step2: "మీ టెక్స్ట్ టైమ్‌స్టాంప్‌తో కలిపి హ్యాష్ చేయబడుతుంది",
    step3: "హ్యాష్ ఏ ఆడియో ఫైల్ ప్లే చేయాలో నిర్ణయిస్తుంది",
    step4: "ప్రతి ఆడియోకు AI-జనరేటెడ్ ట్రాన్స్‌క్రిప్ట్ ఉంటుంది",
    audioFile: "ఆడియో #",
    transcriptNotAvailable: "ఈ ఆడియో ఫైల్‌కు ట్రాన్స్‌క్రిప్ట్ అందుబాటులో లేదు.",
    copyToClipboard: "కాపీ అయింది!",
    transcriptCopied: "ట్రాన్స్‌క్రిప్ట్ క్లిప్‌బోర్డ్‌కు కాపీ చేయబడింది",
    copyError: "ట్రాన్స్‌క్రిప్ట్ కాపీ చేయడంలో విఫలమైంది"
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'te' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};