"use client"

import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import { QuestTypeIcon } from "@/components/shared"
import { formatTimeRemaining, getTimeVariantClass } from "@/lib/utils/time-format"
import { formatParticipants, getParticipantsVariantClass } from "@/lib/utils/participants-format"
import { Users, Clock, ChevronRight } from "lucide-react"
import type { Quest } from "@/lib/types"

interface QuestRowProps {
  quest: Quest & { progress?: number }
}

export function QuestRow({ quest }: QuestRowProps) {
  const timeDisplay = formatTimeRemaining(quest.deadline)
  const participantsDisplay = formatParticipants(quest.participants.current, quest.participants.max)
  
  return (
    <Link
      href={`/user/quests/${quest.id}`}
      className="group block py-3 border-b border-border/40 sm:rounded-lg sm:border sm:bg-card sm:p-4 transition-all hover:bg-muted/50 sm:hover:bg-muted"
    >
      <div className="flex items-start gap-2.5 sm:gap-3">
        {/* Left: Icon */}
        <QuestTypeIcon type={quest.questType} size="md" className="shrink-0" />
        
        {/* Right: Content + Reward */}
        <div className="flex-1 min-w-0 space-y-2">
          {/* Top Row: Title + Reward + Arrow */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold text-sm sm:text-base leading-tight group-hover:text-primary transition-colors flex-1">
              {quest.title}
            </h3>
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <div className="text-sm sm:text-lg font-bold tabular-nums">
                ${quest.reward.twin3.toFixed(2)}
              </div>
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </div>
          </div>
          
          {/* Meta Info */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Users className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${getParticipantsVariantClass(participantsDisplay.variant)}`} />
              <span className={`font-medium ${getParticipantsVariantClass(participantsDisplay.variant)}`}>
                {participantsDisplay.text}
              </span>
            </div>
            
            <div className="hidden sm:block h-3 w-px bg-border" />
            
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Clock className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${getTimeVariantClass(timeDisplay.variant)}`} />
              <span className={`font-medium ${getTimeVariantClass(timeDisplay.variant)}`}>
                {timeDisplay.text}
              </span>
            </div>
          </div>
          
          {/* Progress Bar - Extends from icon right side to end */}
          {quest.status === 'in-progress' && quest.progress !== undefined && (
            <div className="flex items-center gap-2">
              <Progress value={quest.progress} className="h-1.5 flex-1" />
              <span className="text-xs font-medium text-muted-foreground tabular-nums">
                {quest.progress}%
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
