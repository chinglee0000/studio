import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <Card className="rounded-lg text-card-foreground border bg-card shadow-sm overflow-hidden w-full max-w-md">
        <CardHeader className="items-center">
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">
            View your quest analytics, track submissions, and monitor performance here. This section is currently under development.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
