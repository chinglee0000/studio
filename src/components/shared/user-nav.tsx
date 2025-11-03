"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { CreditCard, LogOut, Settings, User as UserIcon, ArrowLeftRight, Building2, UserCircle } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useUser } from "@/contexts/user-context"

export function UserNav() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, isBusinessMode, isUserMode } = useUser()
  
  if (!user) return null

  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  // Determine switch mode link and label
  const switchModeLink = isBusinessMode ? '/user/dashboard' : '/business/dashboard'
  const switchModeLabel = isBusinessMode ? 'Switch to User Mode' : 'Switch to Business Mode'
  // Always show mode switch if user has 'both' role
  const showModeSwitch = user.role === 'both'

  const handleModeSwitch = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(switchModeLink)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-8 w-8">
            {user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              {isBusinessMode && (
                <Badge variant="secondary" className="text-xs">
                  <Building2 className="h-3 w-3 mr-1" />
                  Business
                </Badge>
              )}
              {isUserMode && (
                <Badge variant="secondary" className="text-xs">
                  <UserCircle className="h-3 w-3 mr-1" />
                  User
                </Badge>
              )}
            </div>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
            {isBusinessMode && user.companyName && (
              <p className="text-xs leading-none text-muted-foreground">
                {user.companyName}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {showModeSwitch && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={handleModeSwitch}
              onSelect={(e) => e.preventDefault()}
            >
              <ArrowLeftRight />
              <span>{switchModeLabel}</span>
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
