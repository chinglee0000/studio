import { PageHeader } from "@/components/shared"

export default function MatrixPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Twin Matrix"
        description="Explore your digital DNA and personality traits."
      />
      
      <div className="rounded-lg border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Twin Matrix visualization will be implemented in the next phase.
        </p>
      </div>
    </div>
  )
}
