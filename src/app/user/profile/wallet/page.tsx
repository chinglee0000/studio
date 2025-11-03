import { PageHeader } from "@/components/shared"

export default function WalletPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="My Wallet"
        description="View your transaction history, rewards, and balance."
      />
      
      <div className="rounded-lg border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          Wallet content will be implemented in the next phase.
        </p>
      </div>
    </div>
  )
}
