# Twin3 Quest Platform - 專案架構總覽

## 🎯 專案簡介

Twin3 是一個雙邊市場平台，連接企業（Business）和使用者（User）：
- **Business Module**：企業建立和管理任務（Quests）
- **User Module**：使用者發現、參與任務並獲得獎勵

## 🛠️ 技術棧

### 核心框架
- **Framework**: Next.js 15.3 (App Router)
- **Language**: TypeScript 5
- **Runtime**: Node.js (ES2017+)

### UI 和樣式
- **Styling**: Tailwind CSS 3.4
- **Design System**: Material Design 3
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Fonts**: 
  - Kanit (標題)
  - Montserrat (內文)

### 表單和驗證
- **Form Handling**: React Hook Form 7.54
- **Validation**: Zod 3.24
- **Resolvers**: @hookform/resolvers 4.1

### AI 功能
- **AI Framework**: Google Genkit 1.20
- **AI Provider**: @genkit-ai/google-genai
- **Integration**: @genkit-ai/next

### 其他工具
- **Theme**: next-themes 0.3
- **Date Handling**: date-fns 3.6
- **Carousel**: embla-carousel-react 8.6
- **Charts**: recharts 2.15
- **Class Management**: clsx 2.1, class-variance-authority 0.7, tailwind-merge 3.0

## 📁 專案結構

```
twin3-quest-platform/
├── .kiro/                          # Kiro 配置和 specs
│   └── specs/
│       └── user-module/            # User Module 規格文件
├── docs/                           # 專案文件
│   ├── design-system/              # 設計系統文件
│   ├── architecture/               # 架構文件
│   └── migration/                  # 遷移指南
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── actions/                # Server Actions
│   │   │   ├── quest-actions.ts
│   │   │   └── quest-suggestion-actions.ts
│   │   ├── business/               # Business Module
│   │   │   ├── layout.tsx          # Business 佈局
│   │   │   ├── dashboard/          # 儀表板
│   │   │   ├── quests/             # 任務管理
│   │   │   ├── results/            # 結果分析
│   │   │   └── billing/            # 帳單管理
│   │   ├── components/             # App 專用元件
│   │   │   ├── icons.tsx
│   │   │   └── providers.tsx
│   │   ├── layout.tsx              # 根佈局
│   │   ├── page.tsx                # 首頁
│   │   └── globals.css             # 全域樣式
│   ├── components/                 # 共用元件
│   │   ├── ui/                     # 基礎 UI 元件 (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── ... (30+ 元件)
│   │   └── shared/                 # 共用業務元件
│   │       ├── bottom-nav.tsx      # 底部導航
│   │       ├── user-nav.tsx        # 使用者選單
│   │       ├── mode-toggle.tsx     # 主題切換
│   │       ├── page-header.tsx     # 頁面標題
│   │       ├── empty-state.tsx     # 空狀態
│   │       ├── status-badge.tsx    # 狀態標籤
│   │       ├── data-table.tsx      # 資料表格
│   │       └── loading-spinner.tsx # 載入動畫
│   ├── hooks/                      # 自訂 Hooks
│   │   ├── use-mobile.tsx          # 行動裝置偵測
│   │   └── use-toast.ts            # Toast 通知
│   ├── lib/                        # 工具函數和配置
│   │   ├── constants/              # 常數定義
│   │   │   ├── index.ts
│   │   │   ├── quest-types.ts      # Quest 類型常數
│   │   │   └── routes.ts           # 路由常數
│   │   ├── types.ts                # TypeScript 類型定義
│   │   └── utils.ts                # 工具函數 (cn, etc.)
│   └── ai/                         # AI 相關功能
│       ├── genkit.ts               # Genkit 配置
│       ├── dev.ts                  # 開發伺服器
│       └── flows/                  # AI Flows
│           ├── quest-suggestion-flow.ts
│           └── quest-suggestion-types.ts
├── public/                         # 靜態資源
│   └── logo_dark.svg
├── .env.example                    # 環境變數範例
├── next.config.ts                  # Next.js 配置
├── tailwind.config.ts              # Tailwind 配置
├── tsconfig.json                   # TypeScript 配置
├── components.json                 # shadcn/ui 配置
└── package.json                    # 專案依賴
```

## 🎨 設計系統

### Material Design 3 原則
- **Elevation**: 使用 shadow 和 border 表現層次
- **State Layers**: hover, active, focus 狀態
- **Motion**: 使用 transition 和 animation
- **Accessibility**: 符合 WCAG 2.1 AA 標準

### 按鈕變體 (7 種)
```typescript
// src/components/ui/button.tsx
variant: "filled" | "tonal" | "outlined" | "text" | "elevated" | "fab" | "destructive"
size: "default" | "sm" | "lg" | "icon"
```

### 顏色系統
```css
/* Tailwind CSS 變數 */
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 221.2 83.2% 53.3%;
--primary-foreground: 210 40% 98%;
--secondary: 210 40% 96.1%;
--muted: 210 40% 96.1%;
--accent: 210 40% 96.1%;
--destructive: 0 84.2% 60.2%;
--border: 214.3 31.8% 91.4%;
--ring: 221.2 83.2% 53.3%;
```

### 字體系統
```css
/* 標題 */
font-family: 'Kanit', sans-serif;
font-weight: 400, 500, 600, 700;

/* 內文 */
font-family: 'Montserrat', sans-serif;
font-weight: 300, 400, 500, 600, 700;
```

### 響應式斷點
```typescript
// Tailwind 預設斷點
sm: '640px'   // 平板
md: '768px'   // 小型桌面
lg: '1024px'  // 桌面
xl: '1280px'  // 大型桌面
2xl: '1536px' // 超大桌面

// 行動裝置偵測
const { isMobile } = useIsMobile() // < 768px
```

## 🧩 核心元件

### 共用業務元件 (src/components/shared/)

#### 1. BottomNav - 底部導航
```typescript
<BottomNav>
  <BottomNavItem href="/path" isActive={boolean}>
    <Icon />
    <span>Label</span>
  </BottomNavItem>
</BottomNav>
```

#### 2. PageHeader - 頁面標題
```typescript
<PageHeader
  title="Page Title"
  description="Optional description"
  action={<Button>Action</Button>}
/>
```

#### 3. EmptyState - 空狀態
```typescript
<EmptyState
  icon={Icon}
  title="No items"
  description="Description"
  action={<Button>Create</Button>}
/>
```

#### 4. StatusBadge - 狀態標籤
```typescript
<StatusBadge status="matching" | "in-progress" | "completed" />
```

#### 5. DataTable - 資料表格
```typescript
<DataTable
  columns={columns}
  data={data}
  searchKey="title"
/>
```

### UI 元件 (src/components/ui/)
完整的 shadcn/ui 元件庫，包含：
- Button, Card, Dialog, Form, Input, Select
- Sidebar, Tabs, Toast, Tooltip
- Accordion, Alert, Avatar, Badge, Calendar
- Checkbox, Dropdown, Label, Popover, Progress
- Radio, Scroll Area, Separator, Sheet, Skeleton
- Slider, Switch, Table, Textarea

## 📊 資料模型

### User 類型
```typescript
type User = {
  id: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  humanityIndex: number;
  twinMatrixSummary: Record<string, any>;
};
```

### Quest 類型
```typescript
type Quest = {
  id: string;
  title: string;
  description: string;
  questType: QuestType;
  reward: {
    amount: number;
    currency: 'USD';
  };
  status: QuestStatus;
  targetAudience: {
    ageRange: [number, number];
    location: string[];
    interests: string[];
  };
  creatorId: string;
};

type QuestType = 
  | 'Sensory Feedback'
  | 'Dine & Review'
  | 'Ad Campaign'
  | 'App UX'
  | 'In-Store Experience'
  | 'Survey';

type QuestStatus = 'matching' | 'in-progress' | 'completed';
```

### Submission 類型
```typescript
type Submission = {
  id: string;
  questId: string;
  userId: string;
  status: SubmissionStatus;
  content: Record<string, any>;
  submittedAt: Date;
};

type SubmissionStatus = 'pending-review' | 'approved';
```

## 🔄 Server Actions 模式

### 範例：Quest Actions
```typescript
// src/app/actions/quest-actions.ts
"use server";

import { z } from "zod";
import { redirect } from "next/navigation";

const questSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(20),
  questType: z.string(),
  budget: z.coerce.number().min(1),
  targetAudience: z.string(),
});

export async function reviewQuest(prevState: any, formData: FormData) {
  const validatedFields = questSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    questType: formData.get("questType"),
    budget: formData.get("budget"),
    targetAudience: formData.get("targetAudience"),
  });
  
  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // 處理邏輯...
  redirect(`/business/quests/new/review`);
}
```

## 🎯 Business Module 架構參考

### 佈局結構 (src/app/business/layout.tsx)

#### 桌面版
- **Sidebar**: 左側固定側邊欄
  - Logo 和品牌名稱
  - 導航選單 (Dashboard, New Quests, Results, Billing)
  - 可收合 (collapsed state)
- **Header**: 頂部標題列
  - Mode Switcher (Business/User 切換)
  - Theme Toggle (深色/淺色模式)
  - User Nav (使用者選單)
- **Main Content**: 主要內容區
  - 最大寬度: sm:max-w-2xl
  - 置中對齊

#### 行動版
- **Header**: 頂部標題列
  - Logo
  - Theme Toggle
  - User Nav
- **Main Content**: 主要內容區
  - 全寬顯示
  - 底部留白 (pb-20) 給 BottomNav
- **BottomNav**: 底部導航列
  - 4 個主要導航項目
  - 固定在底部 (fixed bottom-0)
  - 顯示當前頁面指示器

### 導航項目
```typescript
const navItems = [
  { href: "/business/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/business/quests/new", icon: ClipboardList, label: "New Quests" },
  { href: "/business/results", icon: BarChart3, label: "Results" },
  { href: "/business/billing", icon: CreditCard, label: "Billing" },
];
```

### 響應式處理
```typescript
const { isMobile, isReady } = useIsMobile();

// 載入狀態
if (!isReady) {
  return <Skeleton />;
}

// 行動版佈局
if (isMobile) {
  return <MobileLayout />;
}

// 桌面版佈局
return <DesktopLayout />;
```

## 🚀 開發工作流程

### 環境設定
```bash
# 安裝依賴
npm install

# 複製環境變數
cp .env.example .env.local

# 填寫環境變數
GOOGLE_GENAI_API_KEY=your_api_key
NEXT_PUBLIC_APP_URL=http://localhost:9002
```

### 開發指令
```bash
# 啟動開發伺服器 (port 9002)
npm run dev

# 啟動 Genkit 開發 UI
npm run genkit:dev

# 型別檢查
npm run typecheck

# Linting
npm run lint

# 建置生產版本
npm run build
```

## 📝 編碼規範

### TypeScript
- 使用嚴格模式 (`strict: true`)
- 所有元件和函數都要有型別定義
- 使用 `type` 而非 `interface` (除非需要擴展)
- 使用 `const` assertions 定義常數陣列

### React
- 使用 Server Components 作為預設
- 只在需要時使用 `"use client"`
- 使用 Server Actions 處理資料變更
- 使用 React Hook Form + Zod 處理表單

### 樣式
- 使用 Tailwind CSS utility classes
- 使用 `cn()` 函數合併 class names
- 遵循 Material Design 3 規範
- 使用 CSS 變數定義顏色

### 檔案命名
- 元件: `kebab-case.tsx` (例如: `page-header.tsx`)
- 類型: `kebab-case.ts` (例如: `quest-types.ts`)
- Actions: `kebab-case.ts` (例如: `quest-actions.ts`)

## 🎯 User Module 開發指引

### 目標
建立一個與 Business Module 平行的 User Module，讓使用者可以：
1. 瀏覽和搜尋可用的 Quests
2. 參與 Quests 並提交回應
3. 追蹤完成歷史和獲得的獎勵
4. 管理個人資料

### 架構要求
- 遵循 Business Module 的架構模式
- 使用相同的元件系統和設計語言
- 實作響應式設計 (桌面 + 行動版)
- 使用 Server Actions 處理資料操作
- 整合現有的共用元件

### 路由結構
```
/user
├── /dashboard          # 使用者儀表板
├── /quests            # Quest 探索
│   ├── /[id]          # Quest 詳情
│   └── /[id]/participate  # 參與 Quest
└── /profile           # 使用者資料
```

### 需要建立的檔案
```
src/app/user/
├── layout.tsx              # User Module 佈局
├── page.tsx                # 重導向到 dashboard
├── dashboard/
│   └── page.tsx            # 使用者儀表板
├── quests/
│   ├── page.tsx            # Quest 列表
│   ├── [id]/
│   │   ├── page.tsx        # Quest 詳情
│   │   └── participate/
│   │       └── page.tsx    # 參與 Quest
└── profile/
    └── page.tsx            # 使用者資料
```

## 📚 參考文件

### 設計系統
- [Material Design Guide](../../docs/design-system/material-design-guide.md)
- [Button Variants](../../docs/design-system/button-variants-explained.md)
- [Typography Guide](../../docs/design-system/typography-guide.md)

### 架構
- [Project Architecture](../../docs/architecture/project-architecture-analysis.md)
- [Navigation Components](../../docs/architecture/navigation-components-analysis.md)

### 遷移指南
- [Migration Guide](../../docs/migration/migration-guide.md)
- [Navigation Migration](../../docs/migration/navigation-migration-complete.md)

## 🔗 重要連結

- [Next.js 15 文件](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Material Design 3](https://m3.material.io/)
- [Google Genkit](https://firebase.google.com/docs/genkit)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
