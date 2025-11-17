# 元件標準化審查報告

## 📊 審查摘要

**審查日期**: 2024-11-03
**審查範圍**: 所有 UI 元件、共用元件、頁面元件

---

## ⚠️ 發現的問題

### 1. 重複的統計卡片模式 (Stat Card)

**問題**: 在多個地方重複實作相同的統計卡片樣式

**重複位置**:
- `src/components/user/user-status-card.tsx` - 4 個統計卡片
- `src/app/business/dashboard/page.tsx` - 可能需要類似的統計卡片
- 未來其他頁面也可能需要

**重複的程式碼模式**:
```tsx
<div className="flex items-center gap-2">
  <DollarSign className="h-6 w-6 text-green-500" />
  <div>
    <p className="text-xs font-normal text-muted-foreground">Earned</p>
    <p className="text-lg font-semibold">${stats.earned.toFixed(2)}</p>
  </div>
</div>
```

**建議**: 創建統一的 `StatCard` 元件

---

### 2. Quest Type 圖示和顏色不統一

**問題**: Quest Type 的圖示和顏色在不同地方有不同的定義

**不統一的地方**:

**A. `src/lib/utils/quest-icons.tsx`** (User Mode):
```typescript
'Sensory Feedback': { 
  icon: Eye, 
  color: 'text-blue-600 dark:text-blue-400' 
}
```

**B. `src/app/user/quests/page.tsx`** (Quest Type Cards):
```typescript
{
  type: "Sensory Feedback",
  icon: BrainCircuit,  // ❌ 不同的圖示！
  iconBgColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
}
```

**C. `src/components/shared/quest-card.tsx`**:
- 沒有使用統一的圖示系統
- 只顯示 type 文字，沒有圖示

**建議**: 
1. 統一使用 `quest-icons.tsx` 的圖示定義
2. 添加背景顏色到 `quest-icons.tsx`
3. 所有地方都使用同一個映射

---

### 3. 頁面標題 (Page Header) 樣式不統一

**問題**: 有些頁面使用 `PageHeader` 元件，有些直接寫 HTML

**使用 PageHeader 元件**:
- ✅ `src/app/business/dashboard/page.tsx`
- ✅ `src/app/business/quests/page.tsx`

**沒有使用 PageHeader 元件**:
- ❌ `src/app/user/quests/page.tsx` - 直接寫 `<h1>` 和 `<p>`
- ❌ `src/app/user/dashboard/page.tsx` - 沒有頁面標題

**不統一的樣式**:
```tsx
// user/quests/page.tsx
<div className="space-y-2">
  <h1 className="text-3xl font-bold tracking-tight">Discover Quests</h1>
  <p className="text-muted-foreground">Select a quest type...</p>
</div>

// PageHeader 元件
<h1 className="text-3xl font-bold tracking-tight">{title}</h1>
<p className="text-muted-foreground">{description}</p>
```

**建議**: 所有頁面都使用 `PageHeader` 元件

---

### 4. Quest 列表顯示方式不統一

**問題**: Quest 在不同地方有不同的顯示方式

**A. Business Dashboard** - 使用 Table:
```tsx
<Table>
  <TableHeader>...</TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>{quest.title}</TableCell>
      <TableCell>{quest.type}</TableCell>
      ...
    </TableRow>
  </TableBody>
</Table>
```

**B. User Dashboard** - 使用 QuestRow 元件:
```tsx
<QuestRow quest={quest} />
```

**C. Shared QuestCard** - 卡片式:
```tsx
<QuestCard {...quest} />
```

**建議**: 
- Business Mode: 使用 Table (適合管理介面)
- User Mode: 使用 QuestRow (適合瀏覽介面)
- 共用: QuestCard 用於 Grid 佈局

但需要確保樣式一致性

---

### 5. 空狀態 (Empty State) 使用不一致

**問題**: 有些地方使用 `EmptyState` 元件，有些自己寫

**使用 EmptyState 元件**:
- ✅ `src/app/business/dashboard/page.tsx`
- ✅ `src/app/business/quests/page.tsx`

**自己寫空狀態**:
- ❌ `src/components/user/quest-overview.tsx`:
```tsx
<div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 p-8 text-center h-48">
  <p className="text-sm font-normal text-muted-foreground">No quests in this category.</p>
</div>
```

**建議**: 統一使用 `EmptyState` 元件

---

### 6. 字體權重 (Font Weight) 使用不一致

**問題**: 相同類型的文字使用不同的字重

**標題字重**:
- `font-bold` - business/dashboard, user/quests
- `font-semibold` - user-status-card, quest-row
- 沒有統一標準

**內文字重**:
- 有些地方明確寫 `font-normal`
- 有些地方沒寫（依賴預設）

**建議**: 
- 標題統一使用 `font-semibold` (600)
- 內文統一使用 `font-normal` (400)
- 強調文字使用 `font-medium` (500)

---

### 7. 間距 (Spacing) 不統一

**問題**: 相似的佈局使用不同的間距

**頁面容器間距**:
- `space-y-6` - user/dashboard
- `space-y-4` - user/quests  
- `gap-4` - business/dashboard

**卡片內間距**:
- `p-4` - 某些卡片
- `p-6` - 某些卡片
- `p-3` - quest-row

**建議**: 
- 頁面容器: `space-y-6`
- 卡片內: `p-6` (header/content), `p-4` (compact)
- 列表項: `p-3`

---

### 8. 顏色使用不統一

**問題**: 相同意義的顏色使用不同的值

**成功/收益顏色**:
- `text-green-500` - user-status-card
- `text-green-600` - 其他地方
- 沒有使用 CSS 變數

**警告/潛力顏色**:
- `text-yellow-500` - user-status-card
- `text-yellow-600` - 其他地方

**建議**: 
- 定義語義化的 CSS 變數
- 例如: `--color-success`, `--color-warning`, `--color-info`

---

### 9. Button Variant 使用不一致

**問題**: 相同優先級的操作使用不同的 Button variant

**主要操作 (Primary Action)**:
- ✅ `variant="filled"` - business/dashboard, business/quests
- ❌ `variant="default"` - 某些舊頁面（如果有）

**次要操作 (Secondary Action)**:
- `variant="outline"` - 大部分地方
- `variant="ghost"` - 某些地方

**建議**: 
- 主要操作: `variant="filled"`
- 次要操作: `variant="outlined"`
- 低優先級: `variant="text"`

---

### 10. 響應式斷點不統一

**問題**: 不同元件使用不同的響應式斷點

**Grid 佈局**:
- `grid-cols-2 md:grid-cols-3` - user/quests
- `grid-cols-2 md:grid-cols-4` - user-status-card
- `grid-cols-1 lg:grid-cols-3` - user/dashboard

**建議**: 
- 統一使用 `sm:`, `md:`, `lg:`, `xl:` 斷點
- 文檔化常用的響應式模式

---

## ✅ 需要創建的共用元件

### 1. StatCard 元件

**用途**: 顯示統計數據（數字 + 標籤 + 圖示）

**Props**:
```typescript
interface StatCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  iconColor?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  href?: string
}
```

**使用場景**:
- User Status Card
- Business Dashboard
- Analytics 頁面

---

### 2. QuestTypeIcon 元件

**用途**: 統一顯示 Quest Type 圖示和顏色

**Props**:
```typescript
interface QuestTypeIconProps {
  type: QuestType
  size?: 'sm' | 'md' | 'lg'
  showBackground?: boolean
}
```

**使用場景**:
- Quest Row
- Quest Card
- Quest Type 選擇頁面

---

### 3. MetricBadge 元件

**用途**: 顯示帶圖示的小型指標（時間、參與者等）

**Props**:
```typescript
interface MetricBadgeProps {
  icon: LucideIcon
  value: string
  variant?: 'default' | 'success' | 'warning' | 'danger'
}
```

**使用場景**:
- Quest Row (時間、參與者)
- Quest Card
- 任何需要顯示指標的地方

---

### 4. SectionHeader 元件

**用途**: 區塊標題（比 PageHeader 小一級）

**Props**:
```typescript
interface SectionHeaderProps {
  title: string
  description?: string
  action?: ReactNode
}
```

**使用場景**:
- Dashboard 的各個區塊
- Quest Overview 的 "Active Sprints"

---

### 5. DataCard 元件

**用途**: 統一的資料卡片佈局

**Props**:
```typescript
interface DataCardProps {
  title: string
  description?: string
  children: ReactNode
  action?: ReactNode
  isEmpty?: boolean
  emptyState?: EmptyStateProps
}
```

**使用場景**:
- Dashboard 的各種卡片
- 替代重複的 Card + CardHeader + CardContent 模式

---

## 📋 標準化建議

### 1. 創建設計 Token 文件

**檔案**: `src/lib/design-tokens.ts`

```typescript
export const DESIGN_TOKENS = {
  // 字體權重
  fontWeight: {
    normal: 'font-normal',    // 400
    medium: 'font-medium',    // 500
    semibold: 'font-semibold', // 600
  },
  
  // 間距
  spacing: {
    page: 'space-y-6',
    section: 'space-y-4',
    card: 'p-6',
    cardCompact: 'p-4',
    listItem: 'p-3',
  },
  
  // 圓角
  borderRadius: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  },
  
  // 響應式斷點
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}
```

---

### 2. 更新 quest-icons.tsx

**檔案**: `src/lib/utils/quest-icons.tsx`

```typescript
export const questIconMap: Record<QuestType, QuestIconData> = {
  'Sensory Feedback': { 
    icon: Eye,  // 統一使用 Eye，不是 BrainCircuit
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/50',
    lightBgColor: 'bg-blue-50 dark:bg-blue-950/30',
  },
  // ... 其他 types
}
```

---

### 3. 創建語義化顏色變數

**檔案**: `src/app/globals.css`

```css
:root {
  /* 現有變數... */
  
  /* 語義化顏色 */
  --color-success: 142 71% 45%;      /* 綠色 */
  --color-warning: 43 74% 66%;       /* 黃色 */
  --color-danger: 0 84.2% 60.2%;     /* 紅色 */
  --color-info: 211 85% 50%;         /* 藍色 */
}
```

---

### 4. 統一 Empty State 使用

**所有空狀態都使用 EmptyState 元件**:

```tsx
// ❌ 不要這樣
<div className="flex flex-col items-center...">
  <p>No quests in this category.</p>
</div>

// ✅ 要這樣
<EmptyState
  title="No quests in this category"
  description="Check back later for new opportunities"
/>
```

---

### 5. 統一 Page Header 使用

**所有頁面都使用 PageHeader 元件**:

```tsx
// ❌ 不要這樣
<div className="space-y-2">
  <h1 className="text-3xl font-bold">Title</h1>
  <p className="text-muted-foreground">Description</p>
</div>

// ✅ 要這樣
<PageHeader
  title="Title"
  description="Description"
  action={<Button>Action</Button>}
/>
```

---

## 🎯 優先級排序

### 高優先級 (立即處理)

1. **統一 Quest Type 圖示和顏色**
   - 影響範圍大
   - 容易造成混淆
   - 修正成本低

2. **創建 StatCard 元件**
   - 重複程度高
   - 未來會大量使用

3. **統一字體權重**
   - 影響整體視覺一致性
   - 修正成本低

### 中優先級 (近期處理)

4. **統一 Page Header 使用**
5. **統一 Empty State 使用**
6. **創建 QuestTypeIcon 元件**
7. **創建 MetricBadge 元件**

### 低優先級 (逐步優化)

8. **創建 SectionHeader 元件**
9. **創建 DataCard 元件**
10. **統一間距和響應式斷點**

---

## 📝 實作計劃

### Phase 1: 基礎標準化 (1-2 天)

1. 更新 `quest-icons.tsx` 統一圖示
2. 創建 `design-tokens.ts`
3. 統一所有頁面使用 `PageHeader`
4. 統一所有空狀態使用 `EmptyState`

### Phase 2: 共用元件 (2-3 天)

5. 創建 `StatCard` 元件
6. 創建 `QuestTypeIcon` 元件
7. 創建 `MetricBadge` 元件
8. 更新現有頁面使用新元件

### Phase 3: 細節優化 (1-2 天)

9. 統一字體權重
10. 統一間距
11. 添加語義化顏色變數
12. 文檔化設計規範

---

## ✅ 成功標準

完成後應該：
1. ✅ 所有 Quest Type 使用統一的圖示和顏色
2. ✅ 所有統計卡片使用 StatCard 元件
3. ✅ 所有頁面使用 PageHeader 元件
4. ✅ 所有空狀態使用 EmptyState 元件
5. ✅ 字體權重統一（semibold for titles, normal for body）
6. ✅ 間距統一（space-y-6 for pages, p-6 for cards）
7. ✅ Button variants 統一（filled for primary, outlined for secondary）
8. ✅ 有完整的設計 token 文件
9. ✅ 有共用元件使用文檔
10. ✅ 無重複的樣式程式碼

---

**總結**: 發現 10 個主要的不統一問題，需要創建 5 個新的共用元件，並進行 3 個階段的標準化工作。
