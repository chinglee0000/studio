# 共用元件庫

這個目錄包含專案中可重複使用的共用元件。

## 元件列表

### Navigation 元件

#### BottomNav
移動端底部導航欄，採用 Material Design 3 風格。

```tsx
import { BottomNav, BottomNavItem } from "@/components/shared"
import { Home, Search, Settings } from "lucide-react"

<BottomNav>
  <BottomNavItem href="/home" isActive={true}>
    <Home />
    <span>Home</span>
  </BottomNavItem>
  <BottomNavItem href="/search">
    <Search />
    <span>Search</span>
  </BottomNavItem>
</BottomNav>
```

特點：
- Material Design 3 active indicator（頂部藍色線條）
- 懸停和點擊效果
- 自動縮放 active 項目
- 背景模糊效果

#### UserNav
使用者選單下拉元件。

```tsx
import { UserNav } from "@/components/shared"

<UserNav 
  user={{
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://..."
  }}
/>
```

#### ModeToggle
主題切換元件（淺色/深色/系統）。

```tsx
import { ModeToggle } from "@/components/shared"

<ModeToggle />
```

### PageHeader
頁面標題元件，包含標題、描述和操作按鈕。

```tsx
import { PageHeader } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

<PageHeader
  title="Dashboard"
  description="Manage your quests"
  action={
    <Button>
      <Plus className="h-5 w-5" />
      Create Quest
    </Button>
  }
/>
```

### EmptyState
空狀態元件，用於顯示無資料時的提示。

```tsx
import { EmptyState } from "@/components/shared"
import { Inbox } from "lucide-react"

<EmptyState
  icon={Inbox}
  title="No quests found"
  description="Start by creating your first quest"
  actionLabel="Create Quest"
  actionHref="/quests/new"
/>
```

### StatusBadge
狀態標籤元件，支援不同的狀態樣式。

```tsx
import { StatusBadge } from "@/components/shared"

<StatusBadge status="in-progress" />
<StatusBadge status="completed" />
<StatusBadge status="draft" />
<StatusBadge status="cancelled" />
```

### LoadingSpinner & LoadingState
載入中元件。

```tsx
import { LoadingSpinner, LoadingState } from "@/components/shared"

// 小型 spinner
<LoadingSpinner size="sm" />

// 完整載入狀態
<LoadingState message="Loading quests..." />
```

### DataTable
通用資料表格元件。

```tsx
import { DataTable } from "@/components/shared"
import { StatusBadge } from "@/components/shared"

const columns = [
  { header: "Title", accessor: "title" },
  { header: "Type", accessor: "type" },
  { 
    header: "Status", 
    accessor: (row) => <StatusBadge status={row.status} />
  },
]

<DataTable
  data={quests}
  columns={columns}
  getRowKey={(row) => row.id}
  emptyState={{
    title: "No quests found",
    description: "Create your first quest",
    actionLabel: "Create Quest",
    actionHref: "/quests/new"
  }}
/>
```

## 設計原則

1. **可重用性**: 所有元件都應該是通用的，可以在不同頁面中使用
2. **一致性**: 使用統一的樣式和行為模式
3. **可組合性**: 元件應該可以組合使用
4. **類型安全**: 使用 TypeScript 確保類型安全
5. **可訪問性**: 遵循 WCAG 標準

## 新增元件

新增共用元件時：
1. 在 `src/components/shared/` 建立新檔案
2. 在 `index.ts` 中 export
3. 在此 README 中新增使用範例
4. 確保元件有適當的 TypeScript 類型定義
