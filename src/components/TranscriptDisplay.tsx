
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface TranscriptDisplayProps {
  audioId: number;
  transcript: string;
}

export const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({ audioId, transcript }) => {
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(transcript);
      toast({
        title: "Copied!",
        description: "Transcript copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy transcript",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-slate-600" />
            <span className="text-slate-700">Transcript</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="text-slate-500 hover:text-slate-700"
          >
            <Copy className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
            {transcript}
          </p>
        </div>
        <p className="text-xs text-slate-500 mt-2">
          AI-generated transcript for audio #{audioId}
        </p>
      </CardContent>
    </Card>
  );
};
