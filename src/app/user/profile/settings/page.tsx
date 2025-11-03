import { PageHeader } from "@/components/shared"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Manage your account settings and preferences."
      />
      
      <div className="rounded-lg border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Settings content will be implemented in the next phase.
        </p>
      </div>
    </div>
  )
}
