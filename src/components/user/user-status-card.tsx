"use client"

import Link from "next/link"
import { ArrowRight, BarChart2, DollarSign, Eye } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useUser } from "@/contexts/user-context"

export function UserStatusCard() {
  const { user } = useUser()
  
  if (!user) return null

  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <Card className="bg-transparent border-0 shadow-none sm:rounded-lg sm:border sm:bg-card sm:shadow-sm overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4 bg-muted/30 sm:bg-muted/30 p-4 sm:p-4">
        <Avatar className="h-16 w-16 border-2 border-primary">
          {user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
          <AvatarFallback className="text-lg font-semibold">{initials}</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-normal text-muted-foreground">Welcome back,</p>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          {user.level && (
            <div className="flex items-center gap-2 mt-0.5">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                <span className="text-xs font-semibold">Level {user.level}</span>
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <DollarSign className="h-6 w-6 shrink-0 text-green-500" />
          <div>
            <p className="text-xs font-normal text-muted-foreground">Earned</p>
            <p className="text-lg font-semibold">${(user.earned || 0).toFixed(2)}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <DollarSign className="h-6 w-6 shrink-0 text-yellow-500" />
          <div>
            <p className="text-xs font-normal text-muted-foreground">Potential</p>
            <p className="text-lg font-semibold">${(user.potential || 0).toFixed(2)}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <BarChart2 className="h-6 w-6 shrink-0 text-blue-500" />
          <div>
            <p className="text-xs font-normal text-muted-foreground">Humanity Index</p>
            <p className="text-lg font-semibold">{user.humanityIndex || 0}%</p>
          </div>
        </div>
        <Link
          href="/user/profile"
          className="group flex items-center gap-3 rounded-lg bg-secondary/50 p-3 transition-colors hover:bg-muted"
        >
          <Eye className="h-6 w-6 shrink-0 text-purple-500" />
          <div className="flex-1">
            <p className="text-xs font-normal text-muted-foreground">Profile Views</p>
            <p className="text-lg font-semibold">{user.profileViews || 0}</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
