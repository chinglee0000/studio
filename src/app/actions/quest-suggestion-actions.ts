
'use server';
/**
 * @fileOverview A server action for quest suggestions.
 * 
 * - suggestQuestAction - A function that calls the AI flow to suggest quest details.
 * - QuestSuggestionInput - The input type for the suggestQuestAction function.
 * - QuestSuggestionOutput - The return type for the suggestQuestAction function.
 */

import { suggestQuestFlowRunner } from '@/ai/flows/quest-suggestion-flow';
import type { QuestSuggestionInput, QuestSuggestionOutput } from '@/ai/flows/quest-suggestion-types';

// Re-exporting types for client-side usage
export type { QuestSuggestionInput, QuestSuggestionOutput };

export async function suggestQuestAction(input: QuestSuggestionInput): Promise<QuestSuggestionOutput> {
  const result = await suggestQuestFlowRunner(input);
  return result;
}
