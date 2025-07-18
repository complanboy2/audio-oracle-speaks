
import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AudioPlayerProps {
  audioId: number;
  audioUrl: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioId, audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioUrl]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-primary" />
            <span className="text-foreground">{t('audioFile')}{audioId}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(audioUrl, '_blank')}
            className="text-muted-foreground hover:text-foreground"
          >
            <Download className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <audio ref={audioRef} src={audioUrl} preload="metadata" />
        
        {/* Controls */}
        <div className="flex items-center gap-4">
          <Button
            onClick={togglePlayPause}
            size="lg"
            className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-primary-foreground" />
            ) : (
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
            )}
          </Button>
          
          <div className="flex-1 space-y-2">
            {/* Progress Bar */}
            <div 
              className="h-2 bg-muted rounded-full cursor-pointer relative overflow-hidden"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-primary rounded-full transition-all duration-150"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            
            {/* Time Display */}
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
