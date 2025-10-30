
"use client";

import Link from "next/link";
import {
  BrainCircuit,
  ClipboardList,
  Megaphone,
  Smartphone,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import type { Quest } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const questTypes: {
  type: Quest["questType"];
  title: string;
  description: string;
  icon: React.ElementType;
  iconBgColor: string;
}[] = [
  { type: "Sensory Feedback", title: "Sensory Feedback", description: "Gather detailed consumer opinions on the look, feel, and sound of your product.", icon: BrainCircuit, iconBgColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400" },
  { type: "Dine & Review", title: "Dine & Review", description: "Get authentic reviews of your restaurant or food product from real customers.", icon: UtensilsCrossed, iconBgColor: "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400" },
  { type: "Ad Campaign", title: "Ad Campaign", description: "Test the effectiveness and recall of your marketing campaigns.", icon: Megaphone, iconBgColor: "bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400" },
  { type: "App UX", title: "App UX", description: "Understand product usability by observing real user interactions and feedback.", icon: Smartphone, iconBgColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400" },
  { type: "In-Store Experience", title: "In-Store Experience", description: "Evaluate the customer journey within a physical retail space.", icon: Store, iconBgColor: "bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400" },
  { type: "Survey", title: "Survey", description: "Collect quantitative and qualitative data through targeted questionnaires.", icon: ClipboardList, iconBgColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400" },
];

export default function CreateNewQuestPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Create a New Quest</h1>
          <p className="text-muted-foreground">
            Select a quest type to begin.
          </p>
        </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {questTypes.map((quest) => {
          const Icon = quest.icon;
          return (
            <Link href={`/business/quests/new/configure?type=${encodeURIComponent(quest.type)}`} key={quest.type}>
              <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 border-border/30 dark:border-border/50">
                <CardHeader>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${quest.iconBgColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                   <CardTitle className="text-base font-bold">{quest.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-xs">{quest.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
