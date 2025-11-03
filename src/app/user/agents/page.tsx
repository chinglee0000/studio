import { PageHeader } from "@/components/shared"

export default function AgentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="My Agents"
        description="Manage your personalized AI agents."
      />
      
      <div className="rounded-lg border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Agents management content will be implemented in the next phase.
        </p>
      </div>
    </div>
  )
}
