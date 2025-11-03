import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BillingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <Card className="rounded-lg text-card-foreground border bg-card shadow-sm overflow-hidden w-full max-w-md">
        <CardHeader className="items-center">
          <CardTitle>Billing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">
            Manage your payment methods and view your transaction history here. This section is currently under development.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
