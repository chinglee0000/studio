import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  PageHeader,
  EmptyState,
  StatusBadge,
  LoadingSpinner,
  DataTable,
} from "@/components/shared"
import { Plus, Inbox, Settings } from "lucide-react"
import Link from "next/link"

export default function ComponentsDemoPage() {
  const sampleData = [
    { id: "1", title: "Quest 1", type: "Survey", status: "in-progress" as const },
    { id: "2", title: "Quest 2", type: "Review", status: "completed" as const },
    { id: "3", title: "Quest 3", type: "Feedback", status: "draft" as const },
  ]

  return (
    <div className="space-y-8">
      <PageHeader
        title="元件展示"
        description="查看所有共用元件的使用範例"
        action={
          <Button asChild variant="outlined">
            <Link href="/business/dashboard">
              返回 Dashboard
            </Link>
          </Button>
        }
      />

      {/* Button Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Button Variants (Material Design 3)</CardTitle>
          <CardDescription>不同樣式的按鈕 - 遵循 Material Design 3 規範</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="filled">Filled (主要)</Button>
          <Button variant="tonal">Tonal (次要)</Button>
          <Button variant="outlined">Outlined (中等)</Button>
          <Button variant="text">Text (低強調)</Button>
          <Button variant="elevated">Elevated (分離)</Button>
          <Button variant="destructive">Destructive (危險)</Button>
        </CardContent>
      </Card>

      {/* Button Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>Button Sizes</CardTitle>
          <CardDescription>不同尺寸的按鈕</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-4">
          <Button variant="filled" size="sm">Small</Button>
          <Button variant="filled" size="default">Default</Button>
          <Button variant="filled" size="lg">Large</Button>
          <Button variant="filled" size="icon">
            <Settings />
          </Button>
          <Button variant="fab" size="fab">
            <Plus />
          </Button>
        </CardContent>
      </Card>

      {/* Status Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Status Badges</CardTitle>
          <CardDescription>不同狀態的標籤</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <StatusBadge status="in-progress" />
          <StatusBadge status="completed" />
          <StatusBadge status="draft" />
          <StatusBadge status="cancelled" />
        </CardContent>
      </Card>

      {/* Loading States */}
      <Card>
        <CardHeader>
          <CardTitle>Loading States</CardTitle>
          <CardDescription>載入中狀態</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 items-center">
            <LoadingSpinner size="sm" />
            <LoadingSpinner size="md" />
            <LoadingSpinner size="lg" />
          </div>
        </CardContent>
      </Card>

      {/* Empty State */}
      <Card>
        <CardHeader>
          <CardTitle>Empty State</CardTitle>
          <CardDescription>無資料時的顯示</CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={Inbox}
            title="沒有找到任何項目"
            description="開始建立你的第一個 Quest 來收集使用者回饋"
            actionLabel="建立 Quest"
            actionHref="/business/quests/new"
          />
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>Data Table</CardTitle>
          <CardDescription>資料表格元件</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={sampleData}
            columns={[
              { header: "標題", accessor: "title", className: "font-medium" },
              { header: "類型", accessor: "type" },
              {
                header: "狀態",
                accessor: (row) => <StatusBadge status={row.status} />,
              },
            ]}
            getRowKey={(row) => row.id}
            emptyState={{
              title: "沒有資料",
              description: "目前沒有任何項目",
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
