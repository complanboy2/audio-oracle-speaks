
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AudioPlayer } from '@/components/AudioPlayer';
import { TranscriptDisplay } from '@/components/TranscriptDisplay';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { hashTextToAudioId } from '@/utils/hashUtils';
import { getAudioFile, getTranscript } from '@/utils/audioUtils';
import { Hash } from 'lucide-react';
import saiBabaLogo from '@/assets/sai-baba-logo.jpg';
import peacefulBackground from '@/assets/peaceful-background.jpg';

const Index = () => {
  const { t, language } = useLanguage();
  const [inputText, setInputText] = useState('');
  const [selectedAudioId, setSelectedAudioId] = useState<number | null>(null);
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [transcript, setTranscript] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsLoading(true);
    
    // Combine text with current timestamp and hash
    const audioId = hashTextToAudioId(inputText);
    const audio = getAudioFile(audioId);
    const transcriptText = getTranscript(audioId, language);
    
    setSelectedAudioId(audioId);
    setAudioUrl(audio.url);
    setTranscript(transcriptText);
    setIsLoading(false);
  };

  const handleReset = () => {
    setInputText('');
    setSelectedAudioId(null);
    setAudioUrl('');
    setTranscript('');
  };

  return (
    <div 
      className="min-h-screen bg-background bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${peacefulBackground})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      
      <div className="relative z-10 min-h-screen py-8 px-4">
        {/* Language Toggle */}
        <div className="flex justify-end mb-6 max-w-4xl mx-auto">
          <LanguageToggle />
        </div>
        
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-primary/20">
              <img 
                src={saiBabaLogo} 
                alt="Sai Baba" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{t('title')}</h1>
              <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
            </div>
          </div>

          {/* Input Form */}
          <Card className="shadow-lg border-0 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Hash className="w-5 h-5 text-primary" />
                {t('textInput')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="textInput" className="text-muted-foreground">
                    {t('enterText')}
                  </Label>
                  <Input
                    id="textInput"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder={t('placeholder')}
                    className="text-lg py-3"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex gap-3">
                  <Button 
                    type="submit" 
                    disabled={!inputText.trim() || isLoading}
                    className="flex-1 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {isLoading ? t('processing') : t('discoverAudio')}
                  </Button>
                  {selectedAudioId && (
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={handleReset}
                      className="px-6 py-3"
                    >
                      {t('reset')}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Audio Player */}
          {selectedAudioId && audioUrl && (
            <div className="space-y-6 animate-fade-in">
              <AudioPlayer 
                audioId={selectedAudioId}
                audioUrl={audioUrl}
              />
              
              <TranscriptDisplay 
                audioId={selectedAudioId}
                transcript={transcript}
              />
            </div>
          )}

          {/* Instructions */}
          <Card className="bg-secondary/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3 text-secondary-foreground">{t('howItWorks')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {t('step1')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {t('step2')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {t('step3')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {t('step4')}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
