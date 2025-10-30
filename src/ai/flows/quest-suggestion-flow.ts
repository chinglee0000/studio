
'use server';
/**
 * @fileOverview An AI flow to suggest quest details based on a user's prompt.
 *
 * - suggestQuestFlowRunner - A function that calls the AI flow to suggest quest details.
 */

import { ai } from '@/ai/genkit';
import { 
  QuestSuggestionInputSchema,
  QuestSuggestionOutputSchema,
  type QuestSuggestionInput,
  type QuestSuggestionOutput
} from './quest-suggestion-types';


export async function suggestQuestFlowRunner(input: QuestSuggestionInput): Promise<QuestSuggestionOutput> {
  const result = await suggestQuestFlow(input);
  if (!result) {
    throw new Error('Failed to get a response from the AI model.');
  }
  return result;
}

const questSuggestionPrompt = ai.definePrompt({
  name: 'questSuggestionPrompt',
  input: { schema: QuestSuggestionInputSchema },
  output: { schema: QuestSuggestionOutputSchema },
  prompt: `
    You are an expert at creating engaging quests for market research and user feedback.
    You are in a conversation with a user to build a quest.
    Analyze the conversation history provided in the prompt.

    Your task is to determine if you have enough information to create a full quest draft.
    A full draft requires a clear objective, a title, a description, a quest type, a budget, and a target audience.

    - IF you have enough information, generate a suitable quest title, a detailed description, select the most appropriate quest type, and determine a budget and target audience. The title, description, budget, and audience should be fully fleshed out.
    - IF NOT, ask a clarifying question to get the missing information. For example, if the budget is missing, ask "What is the budget for this quest?". Return the question in the 'description' field and leave other fields empty.

    Analyze the user's answers:
    {{{prompt}}}

    Available Quest Types:
    - Sensory Feedback: For opinions on the look, feel, taste, or sound of a product.
    - Dine & Review: For feedback on a restaurant, cafe, or food/beverage product.
    - Ad Campaign: To test the effectiveness of an advertisement.
    - App UX: For feedback on a mobile app or website's user experience.
    - In-Store Experience: To evaluate the customer journey in a physical retail location.
    - Survey: For general questionnaires and data collection.
    
    Available Target Audiences:
    - tech-enthusiasts
    - online-shoppers
    - social-media-users
    - gamers
    - foodies
    - local-explorers

    Generate the output in the specified JSON format.
  `,
});

const suggestQuestFlow = ai.defineFlow(
  {
    name: 'suggestQuestFlow',
    inputSchema: QuestSuggestionInputSchema,
    outputSchema: QuestSuggestionOutputSchema,
  },
  async (input) => {
    const { output } = await questSuggestionPrompt(input);
    if (!output) {
      throw new Error('Failed to get a response from the AI model.');
    }
    return output;
  }
);
