import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResultsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <Card className="w-full max-w-md">
        <CardHeader className="items-center">
          <CardTitle>Quest Results</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">
            Quest results and data visualizations will be available here once your quests are completed. This feature is currently under development.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
