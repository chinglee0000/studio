import type { Quest } from "@/lib/types"
import type { QuestFilters } from "@/components/user/quest-filters"

/**
 * 篩選和排序 quests
 */
export function filterAndSortQuests(
  quests: (Quest & { progress?: number })[],
  filters: QuestFilters
): (Quest & { progress?: number })[] {
  let filtered = [...quests]

  // Filter by quest type
  if (filters.types.length > 0) {
    filtered = filtered.filter((q) => filters.types.includes(q.questType))
  }

  // Filter by reward range
  if (filters.rewardRange.length > 0) {
    filtered = filtered.filter((q) => {
      const reward = q.reward.twin3
      return filters.rewardRange.some((range) => {
        switch (range) {
          case "0-50":
            return reward >= 0 && reward <= 50
          case "51-100":
            return reward >= 51 && reward <= 100
          case "101-200":
            return reward >= 101 && reward <= 200
          case "200+":
            return reward > 200
          default:
            return false
        }
      })
    })
  }

  // Filter by urgency
  if (filters.urgency.length > 0) {
    filtered = filtered.filter((q) => {
      const now = new Date()
      const diffMs = q.deadline.getTime() - now.getTime()
      const diffHours = diffMs / (1000 * 60 * 60)
      const diffDays = diffMs / (1000 * 60 * 60 * 24)

      return filters.urgency.some((urgency) => {
        switch (urgency) {
          case "urgent":
            return diffHours < 24 && diffHours > 0
          case "soon":
            return diffDays >= 1 && diffDays <= 3
          case "normal":
            return diffDays > 3
          default:
            return false
        }
      })
    })
  }

  // Filter by availability
  if (filters.availability.length > 0) {
    filtered = filtered.filter((q) => {
      const filledPercentage = (q.participants.current / q.participants.max) * 100
      const remaining = q.participants.max - q.participants.current

      return filters.availability.some((availability) => {
        switch (availability) {
          case "almost-full":
            return filledPercentage >= 90 || remaining <= 5
          case "limited":
            return (filledPercentage >= 70 && filledPercentage < 90) || (remaining > 5 && remaining <= 20)
          case "available":
            return filledPercentage < 70 && remaining > 20
          default:
            return false
        }
      })
    })
  }

  // Sort
  switch (filters.sortBy) {
    case "deadline-asc":
      filtered.sort((a, b) => a.deadline.getTime() - b.deadline.getTime())
      break
    case "deadline-desc":
      filtered.sort((a, b) => b.deadline.getTime() - a.deadline.getTime())
      break
    case "reward-asc":
      filtered.sort((a, b) => a.reward.twin3 - b.reward.twin3)
      break
    case "reward-desc":
      filtered.sort((a, b) => b.reward.twin3 - a.reward.twin3)
      break
    case "spots-asc":
      filtered.sort((a, b) => {
        const remainingA = a.participants.max - a.participants.current
        const remainingB = b.participants.max - b.participants.current
        return remainingA - remainingB
      })
      break
    case "spots-desc":
      filtered.sort((a, b) => {
        const remainingA = a.participants.max - a.participants.current
        const remainingB = b.participants.max - b.participants.current
        return remainingB - remainingA
      })
      break
  }

  return filtered
}

/**
 * 計算活躍的 filter 數量
 */
export function getActiveFilterCount(filters: QuestFilters): number {
  let count = 0
  if (filters.types.length > 0) count += filters.types.length
  if (filters.rewardRange.length > 0) count += filters.rewardRange.length
  if (filters.urgency.length > 0) count += filters.urgency.length
  if (filters.availability.length > 0) count += filters.availability.length
  return count
}
