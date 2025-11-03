import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  iconColor?: string
  href?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatCard({
  label,
  value,
  icon: Icon,
  iconColor = "text-primary",
  href,
  trend,
  className,
}: StatCardProps) {
  const content = (
    <div className={cn(
      "flex items-center gap-2 rounded-lg p-3 transition-colors",
      href && "hover:bg-muted cursor-pointer",
      className
    )}>
      <Icon className={cn("h-6 w-6 flex-shrink-0", iconColor)} />
      <div className="flex-1 min-w-0">
        <p className="text-xs font-normal text-muted-foreground truncate">{label}</p>
        <p className="text-lg font-semibold truncate">{value}</p>
        {trend && (
          <p className={cn(
            "text-xs font-medium",
            trend.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          )}>
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
          </p>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return content
}
