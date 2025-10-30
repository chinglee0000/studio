import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

export const ai = genkit({
  plugins: [
    googleAI({
      clientOptions: {
        maxRetries: 3, // Retry up to 3 times on 5xx errors
      },
    }),
  ],
  model: 'googleai/gemini-2.5-flash',
});
