import { PageHeader } from "@/components/shared"

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Quest History"
        description="View all your completed and expired quests."
      />
      
      <div className="rounded-lg border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Quest history content will be implemented in the next phase.
        </p>
      </div>
    </div>
  )
}
