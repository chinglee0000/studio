
"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { useTheme } from "next-themes"
import { ChevronLeft, ChevronRight, Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"
import { Button } from "./button"

const sidebarButtonVariants = cva(
  "group/button relative flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all [&>span]:w-full [&>span]:text-left [&>span]:transition-all [&>span]:group-data-[collapsed=true]/sidebar:hidden [&_svg]:size-[18px] [&_svg]:shrink-0",
  {
    variants: {
      isActive: {
        true: "bg-muted text-primary",
        false: "hover:bg-muted hover:text-foreground",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
)

type SidebarContextProps = {
  isCollapsed: boolean
  isMobile: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | undefined>(
  undefined
)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

function SidebarProvider({ children }: { children: React.ReactNode }) {
  const { isMobile: isMobileQuery } = useIsMobile()
  const [isCollapsed, setIsCollapsed] = React.useState(isMobileQuery)

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev)
  }

  const closeSidebar = () => {
    if (isMobileQuery) {
      setIsCollapsed(true)
    }
  }

  React.useEffect(() => {
    setIsCollapsed(isMobileQuery)
  }, [isMobileQuery])

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, isMobile: isMobileQuery, toggleSidebar, closeSidebar }}
    >
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { isCollapsed, isMobile, closeSidebar } = useSidebar()

  return (
    <>
      <aside
        data-collapsed={isCollapsed}
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full flex-col border-r bg-background transition-all duration-300 ease-in-out group/sidebar",
          isMobile ? "w-64" : "data-[collapsed=true]:w-14 w-64",
          isMobile && isCollapsed && "w-0 -translate-x-full border-none",
          className
        )}
      >
        <div className="relative flex h-full flex-col">{children}</div>
      </aside>
      {isMobile && !isCollapsed && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/50"
          aria-hidden="true"
        />
      )}
    </>
  )
}

function SidebarHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { isCollapsed, toggleSidebar, isMobile } = useSidebar()
  const { resolvedTheme } = useTheme()
  const [isHovered, setIsHovered] = React.useState(false)
  
  // Determine which logo to use based on theme
  const logoSrc = resolvedTheme === 'dark' ? '/logo_dark.svg' : '/logo_light.svg'
  
  return (
    <div
      className={cn(
        "relative flex h-16 items-center justify-center border-b",
        isCollapsed ? "px-2" : "px-4",
        className
      )}
    >
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="mr-2"
        >
          <Menu />
        </Button>
      )}
      
      {!isMobile && isCollapsed ? (
        <Tooltip open={isHovered}>
          <TooltipTrigger asChild>
            <button
              onClick={() => {
                setIsHovered(false)
                toggleSidebar()
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:bg-muted"
            >
              {isHovered ? (
                <PanelLeftOpen className="h-[18px] w-[18px]" />
              ) : (
                <img src={logoSrc} alt="Twin3" className="h-6 w-6" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Open sidebar</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <div className="flex flex-1 items-center justify-between overflow-hidden">
          <div className="flex items-center gap-2">
            {children}
          </div>
          {!isMobile && (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleSidebar}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  <PanelLeftClose className="h-[18px] w-[18px]" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Close sidebar</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      )}
    </div>
  )
}

function SidebarContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-1 flex-col overflow-y-auto", className)}>
      {children}
    </div>
  )
}

function SidebarFooter({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("border-t p-2", className)}>
      {children}
    </div>
  )
}

function SidebarMenu({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <nav className={cn("grid gap-2 p-2", className)}>{children}</nav>
}

function SidebarMenuItem({ children }: { children: React.ReactNode }) {
  const { closeSidebar } = useSidebar()
  return <div onClick={closeSidebar}>{children}</div>
}

function SidebarMenuButton({
  children,
  isActive = false,
  tooltip,
}: {
  children: React.ReactNode
  isActive?: boolean
  tooltip?: string
}) {
  const { isCollapsed } = useSidebar()
  const content = <div className={cn(sidebarButtonVariants({ isActive }))}>{children}</div>

  if (isCollapsed && tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent side="right">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    )
  }

  return content
}

export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  sidebarButtonVariants,
  useSidebar,
}
