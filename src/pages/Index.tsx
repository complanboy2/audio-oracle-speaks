
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AudioPlayer } from '@/components/AudioPlayer';
import { TranscriptDisplay } from '@/components/TranscriptDisplay';
import { hashTextToAudioId } from '@/utils/hashUtils';
import { getAudioFile, getTranscript } from '@/utils/audioUtils';
import { Music, Hash } from 'lucide-react';

const Index = () => {
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
    const transcriptText = getTranscript(audioId);
    
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <Music className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2">Audio Discovery</h1>
            <p className="text-slate-600 text-lg">Enter text to discover unique audio content</p>
          </div>
        </div>

        {/* Input Form */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-700">
              <Hash className="w-5 h-5" />
              Text Input
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="textInput" className="text-slate-600">
                  Enter your text
                </Label>
                <Input
                  id="textInput"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type anything here..."
                  className="text-lg py-3 border-slate-200 focus:border-blue-400 focus:ring-blue-400/20"
                  disabled={isLoading}
                />
              </div>
              <div className="flex gap-3">
                <Button 
                  type="submit" 
                  disabled={!inputText.trim() || isLoading}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isLoading ? 'Processing...' : 'Discover Audio'}
                </Button>
                {selectedAudioId && (
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={handleReset}
                    className="px-6 py-3 border-slate-300 hover:bg-slate-50"
                  >
                    Reset
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
        <Card className="bg-slate-800 text-white border-0 shadow-lg">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3 text-slate-200">How it works:</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Enter any text in the input field above
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Your text is combined with a timestamp and hashed
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                The hash determines which audio file to play
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Each audio comes with its AI-generated transcript
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
