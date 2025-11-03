"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, X, Clock, AlertCircle, CheckCircle, ArrowDown01, ArrowUp10 } from "lucide-react"
import { QUEST_TYPES } from "@/lib/constants/quest-types"
import type { QuestType } from "@/lib/types"

export type QuestFilters = {
  types: QuestType[]
  rewardRange: string[]
  urgency: string[]
  availability: string[]
  sortBy: string
}

interface QuestFiltersBarProps {
  filters: QuestFilters
  onFiltersChange: (filters: QuestFilters) => void
  activeFilterCount: number
}

const REWARD_RANGES = [
  { label: "$0-50", value: "0-50" },
  { label: "$51-100", value: "51-100" },
  { label: "$101-200", value: "101-200" },
  { label: "$200+", value: "200+" },
]

const STATUS_OPTIONS = [
  { 
    label: "Time",
    options: [
      { label: "Urgent", value: "urgent", icon: AlertCircle, color: "text-red-600" },
      { label: "Soon", value: "soon", icon: Clock, color: "text-yellow-600" },
      { label: "Normal", value: "normal", icon: CheckCircle, color: "text-muted-foreground" },
    ]
  },
  {
    label: "Availability",
    options: [
      { label: "Almost Full", value: "almost-full", icon: AlertCircle, color: "text-red-600" },
      { label: "Limited", value: "limited", icon: AlertCircle, color: "text-yellow-600" },
      { label: "Available", value: "available", icon: CheckCircle, color: "text-muted-foreground" },
    ]
  }
]

const SORT_OPTIONS = [
  { 
    label: "Deadline", 
    field: "deadline",
    asc: "deadline-asc", 
    desc: "deadline-desc",
  },
  { 
    label: "Reward", 
    field: "reward",
    asc: "reward-asc", 
    desc: "reward-desc",
  },
  { 
    label: "Participants", 
    field: "spots",
    asc: "spots-asc", 
    desc: "spots-desc",
  },
]

export function QuestFiltersBar({ filters, onFiltersChange, activeFilterCount }: QuestFiltersBarProps) {
  const handleTypeToggle = (type: QuestType) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type]
    onFiltersChange({ ...filters, types: newTypes })
  }

  const handleRewardToggle = (range: string) => {
    const newRanges = filters.rewardRange.includes(range)
      ? filters.rewardRange.filter((r) => r !== range)
      : [...filters.rewardRange, range]
    onFiltersChange({ ...filters, rewardRange: newRanges })
  }

  const handleUrgencyToggle = (urgency: string) => {
    const newUrgency = filters.urgency.includes(urgency)
      ? filters.urgency.filter((u) => u !== urgency)
      : [...filters.urgency, urgency]
    onFiltersChange({ ...filters, urgency: newUrgency })
  }

  const handleAvailabilityToggle = (availability: string) => {
    const newAvailability = filters.availability.includes(availability)
      ? filters.availability.filter((a) => a !== availability)
      : [...filters.availability, availability]
    onFiltersChange({ ...filters, availability: newAvailability })
  }

  const handleSortChange = (sortBy: string) => {
    onFiltersChange({ ...filters, sortBy })
  }

  const getCurrentSortLabel = () => {
    const option = SORT_OPTIONS.find(opt => 
      filters.sortBy === opt.asc || filters.sortBy === opt.desc
    )
    if (!option) return "Sort"
    
    return option.label
  }

  const getCurrentSortIcon = () => {
    const option = SORT_OPTIONS.find(opt => 
      filters.sortBy === opt.asc || filters.sortBy === opt.desc
    )
    if (!option) return null
    
    const isAsc = filters.sortBy === option.asc
    return isAsc ? ArrowDown01 : ArrowUp10
  }

  const handleClearAll = () => {
    onFiltersChange({
      types: [],
      rewardRange: [],
      urgency: [],
      availability: [],
      sortBy: "deadline-asc",
    })
  }

  return (
    <div className="flex items-center gap-2 pb-3 border-b flex-wrap">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 text-[10pt]">
            Type
            {filters.types.length > 0 && (
              <Badge variant="secondary" className="ml-0.5 h-4 min-w-4 px-1 text-[9pt]">
                {filters.types.length}
              </Badge>
            )}
            <ChevronDown className="ml-0.5 h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {QUEST_TYPES.map((type) => (
            <DropdownMenuCheckboxItem
              key={type}
              checked={filters.types.includes(type)}
              onCheckedChange={() => handleTypeToggle(type)}
            >
              {type}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 text-[10pt]">
            Reward
            {filters.rewardRange.length > 0 && (
              <Badge variant="secondary" className="ml-0.5 h-4 min-w-4 px-1 text-[9pt]">
                {filters.rewardRange.length}
              </Badge>
            )}
            <ChevronDown className="ml-0.5 h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-40">
          {REWARD_RANGES.map((range) => (
            <DropdownMenuCheckboxItem
              key={range.value}
              checked={filters.rewardRange.includes(range.value)}
              onCheckedChange={() => handleRewardToggle(range.value)}
            >
              {range.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 text-[10pt]">
            Status
            {(filters.urgency.length + filters.availability.length) > 0 && (
              <Badge variant="secondary" className="ml-0.5 h-4 min-w-4 px-1 text-[9pt]">
                {filters.urgency.length + filters.availability.length}
              </Badge>
            )}
            <ChevronDown className="ml-0.5 h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          {STATUS_OPTIONS.map((group) => (
            <div key={group.label}>
              <DropdownMenuLabel className="text-xs">{group.label}</DropdownMenuLabel>
              {group.options.map((option) => {
                const Icon = option.icon
                const isUrgency = ['urgent', 'soon', 'normal'].includes(option.value)
                const isChecked = isUrgency 
                  ? filters.urgency.includes(option.value)
                  : filters.availability.includes(option.value)
                const handleToggle = isUrgency ? handleUrgencyToggle : handleAvailabilityToggle
                
                return (
                  <DropdownMenuCheckboxItem
                    key={option.value}
                    checked={isChecked}
                    onCheckedChange={() => handleToggle(option.value)}
                    className="text-[10pt]"
                  >
                    <Icon className={`h-3.5 w-3.5 mr-1 ${option.color}`} />
                    {option.label}
                  </DropdownMenuCheckboxItem>
                )
              })}
              <DropdownMenuSeparator />
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="h-4 w-px bg-border" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 text-[10pt]">
            {getCurrentSortIcon() && (() => {
              const SortIcon = getCurrentSortIcon()
              return SortIcon ? <SortIcon className="mr-0.5 h-3 w-3" /> : null
            })()}
            {getCurrentSortLabel()}
            <ChevronDown className="ml-0.5 h-3 w-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-44">
          {SORT_OPTIONS.map((option) => {
            const isActive = filters.sortBy === option.asc || filters.sortBy === option.desc
            const isAsc = filters.sortBy === option.asc
            const LeftIcon = isActive ? (isAsc ? ArrowDown01 : ArrowUp10) : null
            
            return (
              <DropdownMenuItem
                key={option.field}
                onClick={() => {
                  // 如果當前是升序，切換到降序；否則設為升序
                  const newSort = filters.sortBy === option.asc ? option.desc : option.asc
                  handleSortChange(newSort)
                }}
                className="flex items-center justify-between text-[10pt]"
              >
                <div className="flex items-center gap-1">
                  {LeftIcon ? (
                    <LeftIcon className="h-3.5 w-3.5 text-muted-foreground" />
                  ) : (
                    <div className="h-3.5 w-3.5" />
                  )}
                  <span>{option.label}</span>
                </div>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      {activeFilterCount > 0 && (
        <>
          <div className="h-4 w-px bg-border" />
          <Button
            variant="ghost"
            size="sm"
            className="h-8"
            onClick={handleClearAll}
          >
            <X className="h-3 w-3 mr-1" />
            Clear
          </Button>
        </>
      )}
    </div>
  )
}
