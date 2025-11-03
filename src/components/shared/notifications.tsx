"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { listItemStyles } from "@/lib/styles/design-tokens"
import { useUser } from "@/contexts/user-context"

interface Notification {
  id: string
  title: string
  description: string
  time: string
  read: boolean
  type: 'info' | 'success' | 'warning'
}

// Mock notifications for user mode
const userNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Quest Available',
    description: 'A new quest matching your profile is now available',
    time: '5 min ago',
    read: false,
    type: 'info',
  },
  {
    id: '2',
    title: 'Quest Completed',
    description: 'You have successfully completed "Master Tailwind CSS"',
    time: '1 hour ago',
    read: false,
    type: 'success',
  },
  {
    id: '3',
    title: 'Payment Received',
    description: 'You received $150 for completing a quest',
    time: '2 hours ago',
    read: true,
    type: 'success',
  },
  {
    id: '4',
    title: 'Profile Update',
    description: 'Your Twin Matrix has been updated',
    time: '1 day ago',
    read: true,
    type: 'info',
  },
]

// Mock notifications for business mode
const businessNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Quest Submission',
    description: '5 users have applied to your "UX Designer" quest',
    time: '10 min ago',
    read: false,
    type: 'info',
  },
  {
    id: '2',
    title: 'Quest Completed',
    description: 'Your quest "Mobile App Testing" has been completed',
    time: '2 hours ago',
    read: false,
    type: 'success',
  },
  {
    id: '3',
    title: 'Payment Processed',
    description: 'Payment of $500 has been processed for completed quest',
    time: '5 hours ago',
    read: true,
    type: 'success',
  },
  {
    id: '4',
    title: 'Subscription Renewal',
    description: 'Your Pro subscription will renew in 7 days',
    time: '1 day ago',
    read: true,
    type: 'warning',
  },
]

export function Notifications() {
  const { isBusinessMode } = useUser()
  const mockNotifications = isBusinessMode ? businessNotifications : userNotifications
  const unreadCount = mockNotifications.filter(n => !n.read).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {unreadCount} new
            </Badge>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[300px]">
          {mockNotifications.length > 0 ? (
            mockNotifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={!notification.read ? listItemStyles.notificationUnread : listItemStyles.notification}
              >
                <div className="flex items-start justify-between w-full">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {notification.description}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="h-2 w-2 rounded-full bg-primary ml-2 mt-1" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {notification.time}
                </p>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Bell className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">No notifications</p>
            </div>
          )}
        </ScrollArea>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-center justify-center cursor-pointer p-3 transition-colors hover:bg-muted">
          <span className="text-sm">View all notifications</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
