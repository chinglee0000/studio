
"use server";

import { z } from "zod";
import { redirect } from "next/navigation";

const questSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  questType: z.string(),
  budget: z.coerce.number().min(1, "Budget must be at least $1"),
  targetAudience: z.string(),
});

export async function reviewQuest(prevState: any, formData: FormData) {
  const validatedFields = questSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    questType: formData.get("questType"),
    budget: formData.get("budget"),
    targetAudience: formData.get("targetAudience"),
  });
  
  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // Pass the form data to the review page via URL parameters
  const params = new URLSearchParams();
  Object.entries(validatedFields.data).forEach(([key, value]) => {
    params.set(key, String(value));
  });

  redirect(`/business/quests/new/review?${params.toString()}`);
}
