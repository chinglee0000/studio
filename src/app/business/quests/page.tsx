import Link from "next/link"
import { Plus, Inbox } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PageHeader, EmptyState, StatusBadge } from "@/components/shared"

// Mock data - 之後會從 API 取得
const mockQuests = [
  {
    id: "1",
    title: "Share Your Morning Routine",
    type: "Survey",
    status: "in-progress",
    submissions: 234,
    target: 500,
  },
  {
    id: "2",
    title: "Test New Mobile App",
    type: "User Testing",
    status: "in-progress",
    submissions: 89,
    target: 100,
  },
  {
    id: "3",
    title: "Voice Your Opinion on AI",
    type: "Interview",
    status: "completed",
    submissions: 45,
    target: 45,
  },
  {
    id: "4",
    title: "Product Preference Study",
    type: "Survey",
    status: "in-progress",
    submissions: 156,
    target: 200,
  },
]

export default function QuestsPage() {
  const activeQuests = mockQuests.filter((q) => q.status === "in-progress")
  const completedQuests = mockQuests.filter((q) => q.status === "completed")

  return (
    <div className="grid flex-1 items-start gap-4">
      <PageHeader
        title="New Quests"
        description="Manage and monitor your created quests"
        action={
          <Button asChild variant="filled" size="lg">
            <Link href="/business/quests/new">
              <Plus />
              Create Quest
            </Link>
          </Button>
        }
      />

      <Card>
        <CardHeader>
          <CardTitle>Active Quests</CardTitle>
          <CardDescription>
            These quests are currently active and gathering submissions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {activeQuests.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Submissions</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeQuests.map((quest) => (
                  <TableRow key={quest.id}>
                    <TableCell className="font-medium">
                      <Link href={`/business/quests/${quest.id}`} className="hover:underline">
                        {quest.title}
                      </Link>
                    </TableCell>
                    <TableCell>{quest.type}</TableCell>
                    <TableCell>
                      {quest.submissions} / {quest.target}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status="in-progress" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <EmptyState
              icon={Inbox}
              title="You have no active quests."
              description="Start by creating a quest to connect with real humans and gather insights."
              actionLabel="Create Your First Quest"
              actionHref="/business/quests/new"
            />
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Completed Quests</CardTitle>
          <CardDescription>These quests have been completed.</CardDescription>
        </CardHeader>
        <CardContent>
          {completedQuests.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Submissions</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {completedQuests.map((quest) => (
                  <TableRow key={quest.id}>
                    <TableCell className="font-medium">
                      <Link href={`/business/quests/${quest.id}`} className="hover:underline">
                        {quest.title}
                      </Link>
                    </TableCell>
                    <TableCell>{quest.type}</TableCell>
                    <TableCell>
                      {quest.submissions} / {quest.target}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status="completed" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <EmptyState
              icon={Inbox}
              title="No completed quests yet."
              description="Completed quests will appear here."
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
