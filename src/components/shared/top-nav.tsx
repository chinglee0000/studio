import { ModeToggle, UserNav, Notifications } from "@/components/shared"

interface TopNavProps {
  showNotifications?: boolean
}

export function TopNav({ showNotifications = false }: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-center bg-gradient-to-b from-background to-transparent px-4">
      <div className="flex-1"></div>

      <div className="flex items-center gap-2">
        {showNotifications && <Notifications />}
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  )
}
