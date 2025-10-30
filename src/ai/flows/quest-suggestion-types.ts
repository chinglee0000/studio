
import { z } from 'zod';
import { QUEST_TYPES } from '@/lib/constants';

// Input schema for the quest suggestion flow
export const QuestSuggestionInputSchema = z.object({
  prompt: z.string().describe('A structured prompt compiling user answers from a conversational builder.'),
});
export type QuestSuggestionInput = z.infer<typeof QuestSuggestionInputSchema>;

const targetAudiences = [
  "tech-enthusiasts",
  "online-shoppers",
  "social-media-users",
  "gamers",
  "foodies",
  "local-explorers",
] as const;

// Output schema for the quest suggestion flow
export const QuestSuggestionOutputSchema = z.object({
  title: z.string().describe("A concise and engaging title for the quest, under 10 words. Can be empty if not enough info.").optional(),
  description: z.string().describe("A detailed description for the quest participants, or a follow-up question if more information is needed."),
  questType: z.enum(QUEST_TYPES).describe("The most fitting quest type based on the prompt. Can be empty if not enough info.").optional(),
  budget: z.number().describe("An estimated budget for the quest based on the conversation. Can be empty if not enough info.").optional(),
  targetAudience: z.enum(targetAudiences).describe("The most fitting target audience for the quest. Can be empty if not enough info.").optional(),
});
export type QuestSuggestionOutput = z.infer<typeof QuestSuggestionOutputSchema>;
