import { PageHeader } from "@/components/shared"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wallet, Grid3x3, History, Settings } from "lucide-react"

export default function ProfilePage() {
  const profileSections = [
    {
      title: "My Wallet",
      description: "View transaction history and manage rewards",
      icon: Wallet,
      href: "/user/profile/wallet",
    },
    {
      title: "Twin Matrix",
      description: "Explore your digital DNA and traits",
      icon: Grid3x3,
      href: "/user/profile/matrix",
    },
    {
      title: "Quest History",
      description: "View completed and expired quests",
      icon: History,
      href: "/user/profile/history",
    },
    {
      title: "Settings",
      description: "Manage account and preferences",
      icon: Settings,
      href: "/user/profile/settings",
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        title="My Profile"
        description="Manage your account and view your activity."
      />
      
      <div className="grid gap-4 md:grid-cols-2">
        {profileSections.map((section) => (
          <Card key={section.href}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </div>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href={section.href}>View {section.title}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
