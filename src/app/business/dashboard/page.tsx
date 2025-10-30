import Link from "next/link";
import { Plus, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PageHeader, EmptyState, StatusBadge } from "@/components/shared";

const sampleQuests = [
  {
    title: "New Coffee Shop Feedback",
    type: "Dine & Review",
    status: "in-progress",
    submissions: 24,
    target: 50,
  },
  {
    title: "Mobile App Usability",
    type: "App UX",
    status: "in-progress",
    submissions: 45,
    target: 100,
  },
  {
    title: "Summer Ad Campaign Recall",
    type: "Ad Campaign",
    status: "completed",
    submissions: 200,
    target: 200,
  },
  {
    title: "In-Store Holiday Display Feedback",
    type: "In-Store Experience",
    status: "completed",
    submissions: 75,
    target: 75,
  },
];


export default function DashboardPage() {
  const activeQuests = sampleQuests.filter(q => q.status === 'in-progress');
  const completedQuests = sampleQuests.filter(q => q.status === 'completed');

  return (
    <div className="grid flex-1 items-start gap-4">
      <PageHeader
        title="Dashboard"
        description="Manage your quests and track submissions"
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
                  <TableRow key={quest.title}>
                    <TableCell className="font-medium">{quest.title}</TableCell>
                    <TableCell>{quest.type}</TableCell>
                    <TableCell>{quest.submissions} / {quest.target}</TableCell>
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
          <CardDescription>
            These quests have been completed.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
                <TableRow key={quest.title}>
                  <TableCell className="font-medium">{quest.title}</TableCell>
                  <TableCell>{quest.type}</TableCell>
                  <TableCell>{quest.submissions} / {quest.target}</TableCell>
                  <TableCell>
                    <StatusBadge status="completed" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

    </div>
  );
}
