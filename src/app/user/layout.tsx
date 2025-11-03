"use client"

import React from "react"
import "../globals.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Bot, LayoutDashboard, ClipboardList, User } from "lucide-react"
import { ThemeProvider } from "../components/providers"
import { TopNav, BottomNav, BottomNavItem, Notifications, ModeToggle, UserNav } from "@/components/shared"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  useSidebar
} from "@/components/ui/sidebar"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { Skeleton } from "@/components/ui/skeleton"

const navItems = [
  { href: "/user/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/user/quests", icon: ClipboardList, label: "Quests" },
  { href: "/user/agents", icon: Bot, label: "Agents" },
  { href: "/user/profile", icon: User, label: "Profile" },
]

function UserLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { isCollapsed } = useSidebar()
  const { isMobile, isReady } = useIsMobile()
  const { theme, resolvedTheme } = useTheme()
  
  // Determine which logo to use based on theme
  const logoSrc = resolvedTheme === 'dark' ? '/logo_dark.svg' : '/logo_light.svg'

  if (!isReady) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Skeleton className="h-8 w-24" />
          <div className="flex flex-1 items-center justify-end gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </header>
        <main className="flex-1 p-4">
          <Skeleton className="h-[50vh] w-full" />
        </main>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4">
          <div className="flex-1">
             <Link href="/user/dashboard" className="flex items-center gap-2 font-semibold">
              <img src={logoSrc} alt="Twin3" className="h-6 w-6" />
              <span className="text-lg">twin3</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Notifications />
            <ModeToggle />
            <UserNav />
          </div>
        </header>
        <main className="flex-1 flex flex-col p-4 pb-20">{children}</main>
        <BottomNav>
          {navItems.map((item) => (
            <BottomNavItem
              key={item.href}
              href={item.href}
              isActive={pathname.startsWith(item.href)}
            >
              <item.icon />
              <span>{item.label}</span>
            </BottomNavItem>
          ))}
        </BottomNav>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Sidebar>
        <SidebarHeader>
          <img src={logoSrc} alt="Twin3" className="h-6 w-6" />
          <span className="text-lg font-semibold">twin3</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <div className={cn("flex flex-col transition-all min-h-screen", isCollapsed ? "sm:pl-14" : "sm:pl-64")}>
        <TopNav showNotifications={true} />
        <main className="flex-1 flex flex-col p-4 sm:px-6 sm:py-0">
          <div className="mx-auto w-full sm:max-w-4xl flex-1 flex flex-col">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

import { UserProvider } from "@/contexts/user-context"

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <UserProvider mode="user">
        <SidebarProvider>
          <UserLayoutContent>{children}</UserLayoutContent>
        </SidebarProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
