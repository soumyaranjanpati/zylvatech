'use server';

/**
 * @fileOverview A case study summarization AI agent.
 *
 * - summarizeCaseStudy - A function that handles the case study summarization process.
 * - SummarizeCaseStudyInput - The input type for the summarizeCaseStudy function.
 * - SummarizeCaseStudyOutput - The return type for the summarizeCaseStudy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCaseStudyInputSchema = z.object({
  caseStudyText: z
    .string()
    .describe('The text content of the case study to be summarized.'),
});
export type SummarizeCaseStudyInput = z.infer<typeof SummarizeCaseStudyInputSchema>;

const SummarizeCaseStudyOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the case study.'),
});
export type SummarizeCaseStudyOutput = z.infer<typeof SummarizeCaseStudyOutputSchema>;

export async function summarizeCaseStudy(
  input: SummarizeCaseStudyInput
): Promise<SummarizeCaseStudyOutput> {
  return summarizeCaseStudyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCaseStudyPrompt',
  input: {schema: SummarizeCaseStudyInputSchema},
  output: {schema: SummarizeCaseStudyOutputSchema},
  prompt: `You are an expert marketing assistant. Your job is to summarize case studies in a concise and engaging manner.

  Summarize the following case study text:

  {{{caseStudyText}}}
  `,
});

const summarizeCaseStudyFlow = ai.defineFlow(
  {
    name: 'summarizeCaseStudyFlow',
    inputSchema: SummarizeCaseStudyInputSchema,
    outputSchema: SummarizeCaseStudyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
