import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricBadgeProps {
  icon: LucideIcon
  value: string
  variant?: "default" | "success" | "warning" | "danger" | "info"
  className?: string
}

const variantClasses = {
  default: "text-muted-foreground",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  danger: "text-red-600 dark:text-red-400",
  info: "text-blue-600 dark:text-blue-400",
}

export function MetricBadge({
  icon: Icon,
  value,
  variant = "default",
  className,
}: MetricBadgeProps) {
  const colorClass = variantClasses[variant]

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <Icon className={cn("h-3.5 w-3.5", colorClass)} />
      <span className={cn("text-xs font-medium", colorClass)}>
        {value}
      </span>
    </div>
  )
}
