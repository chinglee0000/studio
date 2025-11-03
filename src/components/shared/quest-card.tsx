import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, DollarSign, Users } from "lucide-react"

export interface QuestCardProps {
  id: string
  title: string
  description: string
  type: string
  reward: number
  estimatedTime?: number
  participantCount?: number
  status?: string
  mode: "business" | "user"
}

export function QuestCard({
  id,
  title,
  description,
  type,
  reward,
  estimatedTime,
  participantCount,
  status,
  mode,
}: QuestCardProps) {
  const detailHref = mode === "business" ? `/business/quests/${id}` : `/user/quests/${id}`
  
  return (
    <Card className="rounded-lg text-card-foreground border bg-card shadow-sm overflow-hidden flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="secondary">{type}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span className="font-medium">${reward}</span>
          </div>
          
          {estimatedTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{estimatedTime} min</span>
            </div>
          )}
          
          {participantCount !== undefined && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{participantCount} participants</span>
            </div>
          )}
        </div>
        
        {status && (
          <div className="mt-3">
            <Badge variant={status === "active" ? "default" : "outline"}>
              {status}
            </Badge>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={detailHref}>
            {mode === "business" ? "View Details" : "View Quest"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
