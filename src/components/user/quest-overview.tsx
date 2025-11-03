"use client"

import { useState } from "react"
import { Inbox } from "lucide-react"
import type { Quest } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { EmptyState } from "@/components/shared"
import { QuestRow } from "./quest-row"
import { QuestFiltersBar, type QuestFilters } from "./quest-filters"
import { filterAndSortQuests, getActiveFilterCount } from "@/lib/utils/quest-filter"

interface QuestOverviewProps {
  quests: (Quest & { progress?: number })[]
}

function QuestList({ quests }: { quests: (Quest & { progress?: number })[] }) {
  if (quests.length === 0) {
    return (
      <EmptyState
        icon={Inbox}
        title="No quests in this category"
        description="Check back later for new opportunities or explore other quest types."
      />
    )
  }

  // 計算 6 個 quests 的高度：每個 quest 約 76px (h-12 icon + padding + gap)
  // 6 * 76 + gaps = 約 480px
  return (
    <div className="max-h-[480px] overflow-y-auto space-y-2 pr-1 scrollbar-thin">
      {quests.map((quest) => (
        <QuestRow key={quest.id} quest={quest} />
      ))}
    </div>
  )
}

export function QuestOverview({ quests }: QuestOverviewProps) {
  const [filters, setFilters] = useState<QuestFilters>({
    types: [],
    rewardRange: [],
    urgency: [],
    availability: [],
    sortBy: "deadline-asc",
  })

  // Apply filters to each status category
  const inProgressQuests = filterAndSortQuests(
    quests.filter((q) => q.status === "in-progress"),
    filters
  )
  const inReviewQuests = filterAndSortQuests(
    quests.filter((q) => q.status === "in-review"),
    filters
  )
  const completedQuests = filterAndSortQuests(
    quests.filter((q) => q.status === "completed"),
    filters
  )

  const activeFilterCount = getActiveFilterCount(filters)

  return (
    <Card className="bg-transparent border-0 shadow-none sm:rounded-lg sm:border sm:bg-card sm:shadow-sm overflow-hidden h-full flex flex-col">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-xl sm:text-2xl font-semibold">Quest Hub</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col px-4 sm:px-6">
        <Tabs defaultValue="in-progress" className="flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="in-progress" className="font-medium">
              <span>In Progress</span>
              {inProgressQuests.length > 0 && (
                <Badge variant="outline" className="ml-2 h-5 min-w-5 px-1.5">
                  {inProgressQuests.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="in-review" className="font-medium">
              <span>In Review</span>
              {inReviewQuests.length > 0 && (
                <Badge variant="outline" className="ml-2 h-5 min-w-5 px-1.5">
                  {inReviewQuests.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="completed" className="font-medium">
              Completed
            </TabsTrigger>
          </TabsList>

          {/* Filter Bar */}
          <div className="mt-3">
            <QuestFiltersBar
              filters={filters}
              onFiltersChange={setFilters}
              activeFilterCount={activeFilterCount}
            />
          </div>

          <TabsContent value="in-progress" className="mt-4 flex-1">
            <QuestList quests={inProgressQuests} />
          </TabsContent>
          <TabsContent value="in-review" className="mt-4 flex-1">
            <QuestList quests={inReviewQuests} />
          </TabsContent>
          <TabsContent value="completed" className="mt-4 flex-1">
            <QuestList quests={completedQuests} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
