"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { summarizeCaseStudy, type SummarizeCaseStudyInput } from '@/ai/flows/summarize-case-study';
import { Loader2, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CaseStudySummarizer() {
  const [caseStudyText, setCaseStudyText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!caseStudyText.trim()) {
      setError("Please enter some text for the case study.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setSummary('');

    try {
      const input: SummarizeCaseStudyInput = { caseStudyText };
      const result = await summarizeCaseStudy(input);
      setSummary(result.summary);
    } catch (e) {
      console.error("Error summarizing case study:", e);
      setError("Failed to summarize the case study. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-xl border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl text-foreground">AI Case Study Summarizer</CardTitle>
        </div>
        <CardDescription>
          Paste your case study text below to generate a concise summary using AI. This tool helps accelerate content creation for new success stories.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Textarea
            placeholder="Enter the full text of your case study here..."
            value={caseStudyText}
            onChange={(e) => setCaseStudyText(e.target.value)}
            rows={10}
            className="border-input focus:border-primary"
          />
        </div>
        <Button onClick={handleSubmit} disabled={isLoading || !caseStudyText.trim()} className="w-full bg-accent hover:bg-accent/90">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Summarizing...
            </>
          ) : (
            'Generate Summary'
          )}
        </Button>
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {summary && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Generated Summary:</h3>
            <Card className="bg-secondary/50 p-4">
              <p className="text-muted-foreground whitespace-pre-wrap">{summary}</p>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
