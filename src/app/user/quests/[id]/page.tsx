import { PageHeader } from "@/components/shared"

export default function QuestDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Quest Details"
        description={`Viewing quest ${params.id}`}
      />
      
      <div className="rounded-lg border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Quest detail content will be implemented in the next phase.
        </p>
      </div>
    </div>
  )
}
