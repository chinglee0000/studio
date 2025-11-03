import { getQuestTypeDesign } from "@/lib/constants/quest-design-system"
import type { QuestType } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface QuestTypeIconProps {
  type: QuestType
  size?: "sm" | "md" | "lg"
  showBackground?: boolean
  className?: string
}

const sizeClasses = {
  sm: {
    container: "h-8 w-8",
    icon: "h-4 w-4",
  },
  md: {
    container: "h-12 w-12",
    icon: "h-6 w-6",
  },
  lg: {
    container: "h-16 w-16",
    icon: "h-8 w-8",
  },
}

export function QuestTypeIcon({
  type,
  size = "md",
  showBackground = true,
  className,
}: QuestTypeIconProps) {
  const design = getQuestTypeDesign(type)
  const Icon = design.icon
  const sizes = sizeClasses[size]

  if (!showBackground) {
    return <Icon className={cn(sizes.icon, design.textClass, className)} />
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg",
        sizes.container,
        design.combinedClass,
        className
      )}
    >
      <Icon className={sizes.icon} />
    </div>
  )
}
