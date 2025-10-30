import { Badge } from "@/components/ui/badge"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const statusBadgeVariants = cva("capitalize", {
  variants: {
    status: {
      "in-progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      draft: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
      cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    },
  },
  defaultVariants: {
    status: "draft",
  },
})

interface StatusBadgeProps extends VariantProps<typeof statusBadgeVariants> {
  className?: string
  children?: React.ReactNode
}

export function StatusBadge({ status, className, children }: StatusBadgeProps) {
  return (
    <Badge className={cn(statusBadgeVariants({ status }), className)}>
      {children || status}
    </Badge>
  )
}
