import React from 'react';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-3 p-3 bg-card/50 backdrop-blur-sm rounded-lg">
      <span className={`text-sm font-medium transition-colors ${
        language === 'en' ? 'text-primary' : 'text-muted-foreground'
      }`}>
        English
      </span>
      <Switch
        checked={language === 'te'}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-primary"
      />
      <span className={`text-sm font-medium transition-colors ${
        language === 'te' ? 'text-primary' : 'text-muted-foreground'
      }`}>
        తెలుగు
      </span>
    </div>
  );
};