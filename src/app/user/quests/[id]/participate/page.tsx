"use client"

import { PageHeader } from "@/components/shared"

export default function QuestParticipatePage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Participate in Quest"
        description={`Complete quest ${params.id}`}
      />
      
      <div className="rounded-lg border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Quest participation flow will be implemented in the next phase.
        </p>
      </div>
    </div>
  )
}
