"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export function BottomNav({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className
      )}
    >
      <div className="grid h-16 grid-cols-4">{children}</div>
    </nav>
  )
}

export function BottomNavItem({
  children,
  href,
  isActive = false,
}: {
  children: React.ReactNode
  href: string
  isActive?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center gap-1 text-xs relative",
        "transition-all duration-200",
        "hover:bg-primary/8 active:bg-primary/12",
        isActive ? "text-primary font-medium" : "text-muted-foreground"
      )}
    >
      {/* Material Design 3 Active Indicator */}
      {isActive && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full transition-all" />
      )}
      <div className={cn(
        "flex flex-col items-center justify-center gap-1 transition-transform",
        isActive && "scale-110"
      )}>
        {children}
      </div>
    </Link>
  )
}
