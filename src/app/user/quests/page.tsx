"use client"

import Link from "next/link"
import { QUEST_TYPES } from "@/lib/constants/quest-types"
import { PageHeader, QuestTypeIcon } from "@/components/shared"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const questTypeDescriptions: Record<string, string> = {
  "Sensory Feedback": "Gather detailed consumer opinions on the look, feel, and sound of your product.",
  "Dine & Review": "Get authentic reviews of your restaurant or food product from real customers.",
  "Ad Campaign": "Test the effectiveness and recall of your marketing campaigns.",
  "App UX": "Understand product usability by observing real user interactions and feedback.",
  "In-Store Experience": "Evaluate the customer journey within a physical retail space.",
  "Survey": "Collect quantitative and qualitative data through targeted questionnaires.",
}

export default function QuestsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Discover Quests"
        description="Select a quest type to explore available opportunities."
      />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {QUEST_TYPES.map((questType) => {
          const description = questTypeDescriptions[questType]
          
          return (
            <Link
              href={`/user/quests?type=${encodeURIComponent(questType)}`}
              key={questType}
            >
              <Card className="rounded-lg text-card-foreground border bg-card shadow-sm overflow-hidden flex h-full flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <QuestTypeIcon type={questType} size="md" className="mb-4" />
                  <CardTitle className="text-base font-semibold">{questType}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-xs font-normal">{description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
