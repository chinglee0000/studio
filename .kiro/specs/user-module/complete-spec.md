# User Module - Complete Specification

> 這是一個整合文件，包含專案架構、需求、設計和實作任務的完整資訊。

---

# Part 1: Project Context

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
- **Fonts**: Kanit (標題) + Montserrat (內文)

### 表單和驗證
- **Form Handling**: React Hook Form 7.54
- **Validation**: Zod 3.24

### AI 功能
- **AI Framework**: Google Genkit 1.20

## 📁 專案結構

```
src/
├── app/
│   ├── actions/              # Server Actions
│   ├── business/             # Business Module (已存在)
│   ├── user/                 # User Module (待建立)
│   └── components/           # App 專用元件
├── components/
│   ├── ui/                   # 基礎 UI 元件 (shadcn/ui)
│   └── shared/               # 共用業務元件
├── hooks/                    # 自訂 Hooks
├── lib/
│   ├── constants/            # 常數定義
│   ├── types.ts              # TypeScript 類型
│   └── utils.ts              # 工具函數
└── ai/                       # AI 相關功能
```


## 🎨 設計系統

### Material Design 3 原則
- **Elevation**: 使用 shadow 和 border
- **State Layers**: hover, active, focus 狀態
- **Motion**: transition 和 animation
- **Accessibility**: WCAG 2.1 AA 標準

### 按鈕變體
```typescript
variant: "filled" | "tonal" | "outlined" | "text" | "elevated" | "fab" | "destructive"
size: "default" | "sm" | "lg" | "icon"
```

### 響應式斷點
```
sm: 640px   // 平板
md: 768px   // 桌面切換點
lg: 1024px  // 桌面
xl: 1280px  // 大型桌面
```

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
  reward: { amount: number; currency: 'USD' };
  status: QuestStatus;
  targetAudience: {
    ageRange: [number, number];
    location: string[];
    interests: string[];
  };
  creatorId: string;
};

type QuestType = 'Sensory Feedback' | 'Dine & Review' | 'Ad Campaign' 
  | 'App UX' | 'In-Store Experience' | 'Survey';

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


## 🧩 核心共用元件

### BottomNav - 底部導航
```typescript
<BottomNav>
  <BottomNavItem href="/path" isActive={boolean}>
    <Icon />
    <span>Label</span>
  </BottomNavItem>
</BottomNav>
```

### PageHeader - 頁面標題
```typescript
<PageHeader
  title="Page Title"
  description="Optional description"
  action={<Button>Action</Button>}
/>
```

### EmptyState - 空狀態
```typescript
<EmptyState
  icon={Icon}
  title="No items"
  description="Description"
  action={<Button>Create</Button>}
/>
```

### StatusBadge - 狀態標籤
```typescript
<StatusBadge status="matching" | "in-progress" | "completed" />
```

## 🔄 Server Actions 模式

```typescript
"use server";

import { z } from "zod";
import { redirect } from "next/navigation";

const schema = z.object({
  title: z.string().min(5),
  // ... 其他欄位
});

export async function actionName(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
  });
  
  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  // 處理邏輯...
  redirect(`/path`);
}
```


---

# Part 2: Requirements

## Introduction

User Module 提供使用者介面，讓使用者可以發現、參與和追蹤企業建立的任務。

## Glossary

- **User Module**: 使用者介面
- **Quest**: 企業建立的任務或調查
- **User Dashboard**: 使用者主頁，顯示可用任務和活動
- **Quest Discovery**: 瀏覽和搜尋任務的介面
- **Quest Participation**: 參與和完成任務的流程
- **Mode Switcher**: Business/User 模式切換元件

## 核心需求

### 1. 模組架構
- User Module 必須實作與 Business Module 相同的目錄結構模式
- 必須提供專用的 layout 元件
- 必須包含響應式導航（桌面 sidebar + 行動 bottom nav）
- 必須整合現有的 theme provider 和共用元件系統

### 2. 使用者儀表板 (`/user/dashboard`)
- 顯示可用的任務列表
- 顯示使用者的進行中和已完成任務
- 顯示統計資訊（完成數量、獲得獎勵）
- 提供快速存取任務探索和個人資料的連結

### 3. 任務探索 (`/user/quests`)
- 列出所有可用任務及關鍵資訊
- 提供按類別、獎勵、時長篩選功能
- 提供搜尋功能
- 點擊任務導航到詳情頁

### 4. 任務詳情 (`/user/quests/[id]`)
- 顯示任務描述、需求和獎勵資訊
- 顯示預估完成時間
- 提供明確的「開始任務」按鈕
- 如已完成則顯示完成狀態

### 5. 任務參與 (`/user/quests/[id]/participate`)
- 按順序呈現任務步驟或問題
- 允許使用者提交每個步驟的回應
- 提供進度指示器顯示完成百分比
- 完成所有步驟後提交並顯示完成確認

### 6. 使用者資料 (`/user/profile`)
- 顯示使用者資訊（姓名、email、加入日期）
- 顯示任務完成歷史（日期和獎勵）
- 顯示總獎勵和當前餘額
- 提供編輯個人資料選項

### 7. 模式切換
- Mode Switcher 必須在 Business 和 User 模組的 header 中可存取
- 從 Business 切換到 User 時導航到 `/user/dashboard`
- 從 User 切換到 Business 時導航到 `/business/dashboard`
- 必須清楚指示當前模式
- 必須維持跨模式切換的使用者 session

### 8. 響應式設計
- 支援 mobile、tablet、desktop 視窗
- 當視窗寬度 < 768px 時顯示行動版導航
- 行動版使用底部導航列
- 所有互動元素最小觸控目標 44x44px

### 9. 開發規範
- 使用 Next.js App Router 慣例組織頁面
- Server Actions 放在 `/src/app/actions`
- 使用 `/src/components/shared` 和 `/src/components/ui` 的共用元件
- 遵循與 Business Module 相同的 TypeScript 類型模式
- 實作相同的錯誤處理和載入狀態模式

### 10. 根路由
- 當使用者導航到 `/` 時決定適當的預設模組
- 如有儲存的偏好則導向偏好的模組
- 如無偏好則預設導向 `/user/dashboard`
- 維持使用者最後訪問的模組供未來 session 使用


---

# Part 3: Design

## 架構設計

### 目錄結構
```
src/app/user/
├── layout.tsx                      # User Module layout (Client Component)
├── page.tsx                        # Redirect to dashboard
├── dashboard/
│   └── page.tsx                    # User dashboard (Server Component)
├── quests/
│   ├── page.tsx                    # Quest discovery (Server Component)
│   └── [id]/
│       ├── page.tsx                # Quest detail (Server Component)
│       └── participate/
│           └── page.tsx            # Participation (Client Component)
└── profile/
    └── page.tsx                    # User profile (Server Component)
```

### 路由策略

| Route | Component Type | Purpose |
|-------|---------------|---------|
| `/user` | Redirect | 導向 `/user/dashboard` |
| `/user/dashboard` | Server | 顯示可用和進行中任務 |
| `/user/quests` | Server | 任務探索和搜尋 |
| `/user/quests/[id]` | Server | 任務詳情 |
| `/user/quests/[id]/participate` | Client | 互動式任務參與 |
| `/user/profile` | Server | 使用者資料和歷史 |

## 核心元件設計

### 1. User Layout Component

**檔案**: `src/app/user/layout.tsx`  
**類型**: Client Component (`"use client"`)

**導航項目**:
```typescript
const navItems = [
  { href: "/user/dashboard", icon: Home, label: "Dashboard" },
  { href: "/user/quests", icon: Search, label: "Discover" },
  { href: "/user/profile", icon: User, label: "Profile" },
];
```

**佈局結構**:
- **桌面** (≥768px): 左側 Sidebar + Header + Main content
- **行動** (<768px): Top header + Main content + Bottom nav

**關鍵功能**:
- 使用 `useIsMobile()` hook 偵測裝置
- 載入時顯示 skeleton
- 整合 ThemeProvider 和 SidebarProvider


### 2. Dashboard Page

**檔案**: `src/app/user/dashboard/page.tsx`  
**類型**: Server Component

**區塊**:
1. Welcome Header - 個人化問候和統計
2. Available Quests - 可參與的任務網格
3. Active Quests - 進行中的任務
4. Completed Quests - 最近完成的任務

**使用元件**: PageHeader, Card, StatusBadge, Button, EmptyState

### 3. Quest Discovery Page

**檔案**: `src/app/user/quests/page.tsx`  
**類型**: Server Component

**功能**:
- 搜尋列（任務標題）
- 篩選器（類型、獎勵範圍、時長）
- 排序（最新、最高獎勵）
- 網格/列表檢視

**使用元件**: PageHeader, Input, Select, Card, Badge, EmptyState

### 4. Quest Detail Page

**檔案**: `src/app/user/quests/[id]/page.tsx`  
**類型**: Server Component

**區塊**:
1. Quest Header - 標題、類型、狀態
2. Quest Information - 完整描述、需求
3. Reward Details - 金額、幣別
4. Target Audience - 年齡、地點、興趣
5. Time Estimate - 預估完成時間
6. Action Button - 開始任務或已完成狀態

**條件渲染**:
```typescript
// 未開始
<Button href={`/user/quests/${id}/participate`}>Start Quest</Button>

// 已完成
<StatusBadge status="completed" />

// 不可用
<EmptyState title="Quest Unavailable" />
```

### 5. Quest Participation Page

**檔案**: `src/app/user/quests/[id]/participate/page.tsx`  
**類型**: Client Component

**功能**:
- 步驟式任務流程
- 進度指示器
- 表單輸入（React Hook Form）
- Zod 驗證
- Server Actions 提交

**使用元件**: Progress, Form, Input, Textarea, Select, RadioGroup, Button, Card

**狀態管理**:
```typescript
interface ParticipationState {
  currentStep: number;
  totalSteps: number;
  responses: Record<string, any>;
  isSubmitting: boolean;
}
```

### 6. User Profile Page

**檔案**: `src/app/user/profile/page.tsx`  
**類型**: Server Component

**區塊**:
1. Profile Header - 頭像、姓名、email、加入日期
2. Statistics - 總任務數、獎勵、完成率
3. Quest History - 已完成任務表格
4. Rewards Summary - 總收入、待領獎勵
5. Edit Profile - 編輯按鈕

**使用元件**: PageHeader, Avatar, Card, DataTable, Button, Badge


## 資料模型擴展

### QuestWithUserStatus
```typescript
export type QuestWithUserStatus = Quest & {
  userStatus?: 'not-started' | 'in-progress' | 'completed';
  userSubmission?: Submission;
  estimatedTime?: number; // 分鐘
  participantCount?: number;
};
```

### QuestStep
```typescript
export type QuestStep = {
  id: string;
  questId: string;
  order: number;
  title: string;
  description: string;
  type: 'text' | 'multiple-choice' | 'rating' | 'file-upload';
  required: boolean;
  options?: string[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
};
```

### UserStats
```typescript
export type UserStats = {
  userId: string;
  totalQuestsCompleted: number;
  totalRewardsEarned: number;
  activeQuests: number;
  completionRate: number;
  lastActivityDate: Date;
};
```

## Server Actions

### user-actions.ts

```typescript
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// 開始任務
export async function startQuest(questId: string) {
  // 驗證使用者資格
  // 建立 submission 記錄
  redirect(`/user/quests/${questId}/participate`);
}

// 提交任務回應
const responseSchema = z.object({
  questId: z.string(),
  stepId: z.string(),
  response: z.any(),
});

export async function submitQuestResponse(
  prevState: any,
  formData: FormData
) {
  const validatedFields = responseSchema.safeParse({
    questId: formData.get("questId"),
    stepId: formData.get("stepId"),
    response: formData.get("response"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 儲存回應
  revalidatePath(`/user/quests/${validatedFields.data.questId}/participate`);
  return { success: true };
}

// 完成任務
export async function completeQuest(questId: string, submissionId: string) {
  // 標記為完成
  // 計算獎勵
  // 更新統計
  revalidatePath("/user/dashboard");
  redirect("/user/dashboard");
}

// 更新個人資料
const profileSchema = z.object({
  displayName: z.string().min(2),
  email: z.string().email(),
});

export async function updateProfile(prevState: any, formData: FormData) {
  const validatedFields = profileSchema.safeParse({
    displayName: formData.get("displayName"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 更新資料
  revalidatePath("/user/profile");
  return { success: true, message: "Profile updated" };
}
```


## 錯誤處理

### Error Boundary
```typescript
// src/app/user/error.tsx
"use client";

export default function UserError({ error, reset }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Something went wrong</CardTitle>
        <CardDescription>{error.message}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={reset}>Try again</Button>
      </CardFooter>
    </Card>
  );
}
```

### Loading States
```typescript
// src/app/user/loading.tsx
export default function UserLoading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}
```

### Not Found
```typescript
// src/app/user/quests/[id]/not-found.tsx
export default function QuestNotFound() {
  return (
    <EmptyState
      icon={Search}
      title="Quest Not Found"
      description="The quest doesn't exist or is no longer available."
      action={<Button href="/user/quests">Browse Quests</Button>}
    />
  );
}
```

## 樣式規範

### 一致性樣式
- Background: `bg-muted/40`
- Cards: 使用 `Card` 元件
- Spacing: 一致的 padding 和 gaps
- Typography: Kanit (標題) + Montserrat (內文)
- Colors: 使用 CSS 變數

### 響應式設計
```typescript
// Mobile-first approach
<div className="p-4 sm:p-6 lg:p-8">
  {/* Content */}
</div>
```

### Material Design 3
- 使用 elevation (shadows, borders)
- 實作 state layers (hover, active, focus)
- 遵循顏色系統
- 使用適當的按鈕變體
- 確保 44x44px 最小觸控目標


---

# Part 4: Implementation Tasks

## 實作順序

1. Foundation (Task 1) - 基礎架構
2. Core Pages (Tasks 2-4) - 核心頁面
3. Participation (Task 5) - 任務參與流程
4. Profile (Task 6) - 使用者資料
5. Actions (Task 7) - Server Actions
6. Types (Task 8) - 資料模型
7. Routing (Task 9) - 根路由
8. Error Handling (Task 10) - 錯誤處理
9. Responsive (Task 11) - 響應式優化
10. Polish (Task 12) - 無障礙和最終調整

## 任務清單

### Task 1: 建立 User Module 基礎和佈局
- 建立 `/src/app/user` 目錄結構
- 實作 User Module layout 元件（響應式導航）
- 設定 ThemeProvider 和 SidebarProvider
- 配置導航項目（Dashboard, Discover, Profile）
- 實作 Mode Switcher（Business/User 切換）
- 加入載入狀態和行動裝置偵測

### Task 2: 實作 User Dashboard 頁面

**2.1 建立 dashboard 頁面結構**
- 建立 `/src/app/user/dashboard/page.tsx` (Server Component)
- 實作 PageHeader
- 設定網格佈局
- 加入響應式設計

**2.2 實作可用任務區塊**
- 建立任務卡片元件
- 取得並顯示可用任務
- 加入「查看詳情」和「開始任務」按鈕
- 實作空狀態

**2.3 實作進行中任務區塊**
- 顯示使用者已開始但未完成的任務
- 顯示進度指示器
- 加入「繼續」按鈕

**2.4 實作使用者統計顯示**
- 建立統計卡片（完成數、獎勵）
- 顯示進行中任務數量
- 加入視覺指示器

**2.5 加入已完成任務區塊**
- 顯示最近完成的任務
- 顯示完成日期和獎勵
- 實作「查看全部」連結

### Task 3: 實作 Quest Discovery 頁面

**3.1 建立任務列表頁面結構**
- 建立 `/src/app/user/quests/page.tsx` (Server Component)
- 實作 PageHeader
- 設定網格/列表佈局

**3.2 實作搜尋功能**
- 加入搜尋輸入欄位
- 實作按標題搜尋
- 加入 debouncing
- 顯示搜尋結果數量

**3.3 實作篩選功能**
- 加入任務類型篩選下拉選單
- 加入獎勵範圍篩選
- 加入預估時長篩選
- 實作篩選組合邏輯

**3.4 建立任務卡片元件**
- 顯示任務標題、類型徽章、獎勵
- 顯示簡短描述（截斷）
- 加入「查看詳情」按鈕
- 實作 hover 狀態

**3.5 加入空狀態和載入狀態**
- 實作無結果空狀態
- 加入載入 skeleton
- 處理錯誤狀態

### Task 4: 實作 Quest Detail 頁面

**4.1 建立任務詳情頁面結構**
- 建立 `/src/app/user/quests/[id]/page.tsx` (Server Component)
- 按 ID 取得任務詳情
- 實作 PageHeader
- 設定區塊佈局

**4.2 顯示任務資訊**
- 顯示完整任務描述
- 顯示任務類型徽章和狀態
- 顯示獎勵詳情
- 顯示目標受眾資訊
- 顯示預估完成時間

**4.3 實作條件式動作按鈕**
- 未開始時顯示「開始任務」按鈕
- 已完成時顯示完成狀態
- 進行中時顯示「繼續」按鈕
- 不可用時停用按鈕

**4.4 加入任務需求區塊**
- 顯示資格條件
- 顯示任何先決條件
- 加入參與人數（如有）

**4.5 實作 not-found 處理**
- 建立無效 ID 的 not-found 頁面
- 加入「瀏覽任務」按鈕


### Task 5: 實作 Quest Participation 流程

**5.1 建立參與頁面結構**
- 建立 `/src/app/user/quests/[id]/participate/page.tsx` (Client Component)
- 取得任務步驟和當前進度
- 設定 React Hook Form
- 實作步驟導航

**5.2 實作進度指示器**
- 加入進度條顯示完成百分比
- 顯示當前步驟數和總步驟數
- 隨使用者完成步驟更新進度

**5.3 建立動態表單欄位**
- 實作文字輸入欄位
- 加入多選 radio/checkbox 群組
- 建立評分輸入元件
- 加入檔案上傳功能（如需要）
- 使用 Zod 實作欄位驗證

**5.4 實作步驟導航**
- 加入「下一步」和「上一步」按鈕
- 步驟變更時儲存回應
- 前進前驗證當前步驟
- 處理導航狀態

**5.5 實作任務提交**
- 在最後步驟建立提交按鈕
- 提交前驗證所有回應
- 呼叫 Server Action 提交任務
- 提交期間顯示載入狀態
- 顯示完成確認
- 完成後導向 dashboard

### Task 6: 實作 User Profile 頁面

**6.1 建立個人資料頁面結構**
- 建立 `/src/app/user/profile/page.tsx` (Server Component)
- 取得使用者資料和統計
- 實作 PageHeader
- 設定區塊佈局

**6.2 顯示使用者資訊**
- 顯示使用者頭像（或佔位符）
- 顯示姓名、email 和加入日期
- 加入「編輯個人資料」按鈕

**6.3 實作統計區塊**
- 顯示完成任務總數
- 顯示總獎勵和當前餘額
- 計算並顯示完成率
- 加入視覺指示器（進度條、圖表）

**6.4 建立任務歷史表格**
- 在表格中顯示已完成任務
- 顯示任務標題、完成日期和獎勵
- 加入排序功能
- 如需要實作分頁

**6.5 實作個人資料編輯功能**
- 建立編輯個人資料 dialog/modal
- 加入姓名和 email 表單欄位
- 使用 Zod 實作驗證
- 建立更新個人資料的 Server Action
- 顯示成功/錯誤訊息

### Task 7: 實作 Server Actions

**7.1 建立 user-actions.ts 檔案**
- 建立 `/src/app/actions/user-actions.ts`
- 加入 "use server" 指令
- 設定 Zod schemas 驗證

**7.2 實作 startQuest action**
- 驗證使用者資格
- 建立 submission 記錄
- 適當處理錯誤
- 導向參與頁面

**7.3 實作 submitQuestResponse action**
- 使用 Zod 驗證回應資料
- 儲存回應到資料庫
- 更新 submission 進度
- Revalidate 參與頁面
- 回傳成功/錯誤狀態

**7.4 實作 completeQuest action**
- 標記 submission 為完成
- 計算並分配獎勵
- 更新使用者統計
- Revalidate dashboard
- 導向 dashboard 並顯示成功訊息

**7.5 實作 updateProfile action**
- 使用 Zod 驗證個人資料資料
- 更新使用者資訊
- Revalidate profile 頁面
- 回傳成功/錯誤訊息

### Task 8: 實作資料模型和類型

**8.1 擴展 Quest 類型加入使用者狀態**
- 加入 `QuestWithUserStatus` 類型到 `/src/lib/types.ts`
- 包含使用者參與狀態
- 加入預估時間和參與人數

**8.2 建立 QuestStep 類型**
- 定義任務參與的步驟結構
- 包含驗證規則
- 支援多種欄位類型

**8.3 建立 UserStats 類型**
- 定義使用者統計結構
- 包含完成指標
- 加入獎勵追蹤

### Task 9: 實作根頁面路由

**9.1 更新根頁面導向邏輯**
- 修改 `/src/app/page.tsx` 檢查使用者偏好
- 實作預設導向到 `/user/dashboard`
- 加入儲存最後訪問模組的邏輯

**9.2 建立使用者偏好儲存**
- 實作 localStorage 或 cookie 為基礎的偏好儲存
- 加入 helper 函數 get/set 偏好

### Task 10: 加入錯誤處理和載入狀態

**10.1 建立 error boundary**
- 建立 `/src/app/user/error.tsx`
- 顯示使用者友善的錯誤訊息
- 加入「重試」功能

**10.2 建立 loading 元件**
- 建立 `/src/app/user/loading.tsx`
- 實作 skeleton loaders
- 符合佈局結構

**10.3 加入頁面特定載入狀態**
- 加入 dashboard 載入狀態
- 加入任務列表載入狀態
- 加入任務詳情載入狀態

### Task 11: 實作響應式設計優化

**11.1 測試和優化行動版佈局**
- 驗證行動版底部導航
- 測試觸控目標（最小 44x44px）
- 確保適當的間距和 padding

**11.2 測試和優化桌面版佈局**
- 驗證 sidebar 導航
- 測試可收合 sidebar
- 確保適當的內容寬度限制

**11.3 測試平板斷點**
- 驗證 768px 斷點的佈局
- 測試導航轉換

### Task 12: 優化和無障礙

**12.1 加入鍵盤導航支援**
- 確保所有互動元素可用鍵盤存取
- 加入適當的 focus 指示器
- 測試 tab 順序

**12.2 加入 ARIA labels 和 roles**
- 加入螢幕閱讀器的描述性 labels
- 實作適當的標題階層
- 在需要的地方加入 role 屬性

**12.3 驗證顏色對比**
- 檢查所有文字符合 WCAG AA 標準
- 在淺色和深色模式下測試


---

# Part 5: Reference Code Examples

## Business Module Layout 參考

```typescript
// src/app/business/layout.tsx (參考範例)
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ClipboardList, BarChart3, CreditCard } from "lucide-react"
import { ModeToggle, UserNav, BottomNav, BottomNavItem } from "@/components/shared"
import { Sidebar, SidebarProvider, useSidebar } from "@/components/ui/sidebar"
import { ThemeProvider } from "../components/providers"
import { useIsMobile } from "@/hooks/use-mobile"

const navItems = [
  { href: "/business/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/business/quests/new", icon: ClipboardList, label: "New Quests" },
  { href: "/business/results", icon: BarChart3, label: "Results" },
  { href: "/business/billing", icon: CreditCard, label: "Billing" },
]

function BusinessLayoutContent({ children }) {
  const pathname = usePathname()
  const { isCollapsed } = useSidebar()
  const { isMobile, isReady } = useIsMobile()

  if (!isReady) {
    return <LoadingSkeleton />
  }

  if (isMobile) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4">
          <Link href="/business/dashboard">
            <span className="text-lg">twin3</span>
          </Link>
          <div className="flex items-center gap-2 ml-auto">
            <ModeToggle />
            <UserNav />
          </div>
        </header>
        <main className="flex-1 flex flex-col p-4 pb-20">{children}</main>
        <BottomNav>
          {navItems.map((item) => (
            <BottomNavItem
              key={item.href}
              href={item.href}
              isActive={pathname.startsWith(item.href)}
            >
              <item.icon />
              <span>{item.label}</span>
            </BottomNavItem>
          ))}
        </BottomNav>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar>
        {/* Sidebar content */}
      </Sidebar>
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4">
          {/* Mode Switcher, Theme Toggle, User Nav */}
        </header>
        <main className="flex-1 flex flex-col p-4 sm:px-6">
          <div className="mx-auto w-full sm:max-w-2xl flex-1 flex flex-col">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default function BusinessLayout({ children }) {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <BusinessLayoutContent>{children}</BusinessLayoutContent>
      </SidebarProvider>
    </ThemeProvider>
  )
}
```

## 表單處理範例

```typescript
// 使用 React Hook Form + Zod
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  displayName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
})

export function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayName: "",
      email: "",
    },
  })

  async function onSubmit(values) {
    // Call Server Action
    const result = await updateProfile(values)
    if (result.success) {
      // Show success message
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save Changes</Button>
      </form>
    </Form>
  )
}
```

## 資料取得範例

```typescript
// Server Component 資料取得
// src/app/user/dashboard/page.tsx

import { PageHeader } from "@/components/shared"
import { Card } from "@/components/ui/card"

async function getAvailableQuests() {
  // Fetch from API/database
  return quests
}

async function getUserStats(userId: string) {
  // Fetch user statistics
  return stats
}

export default async function DashboardPage() {
  const quests = await getAvailableQuests()
  const stats = await getUserStats("user-id")

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here are your available quests."
      />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {quests.map((quest) => (
          <Card key={quest.id}>
            {/* Quest card content */}
          </Card>
        ))}
      </div>
    </div>
  )
}
```

---

# Part 6: Implementation Checklist

## 開始前檢查

- [ ] 確認已安裝所有依賴（package.json）
- [ ] 確認環境變數已設定（.env.local）
- [ ] 確認開發伺服器可以運行（npm run dev）
- [ ] 確認 Business Module 正常運作
- [ ] 確認共用元件可用

## 實作檢查清單

### Phase 1: Foundation
- [ ] User Module 目錄結構已建立
- [ ] Layout 元件已實作
- [ ] 響應式導航正常運作
- [ ] Mode Switcher 功能正常

### Phase 2: Core Pages
- [ ] Dashboard 頁面已完成
- [ ] Quest Discovery 頁面已完成
- [ ] Quest Detail 頁面已完成
- [ ] 所有頁面響應式設計正常

### Phase 3: Participation
- [ ] Participation 頁面已完成
- [ ] 表單驗證正常運作
- [ ] 步驟導航功能正常
- [ ] 提交流程完整

### Phase 4: Profile
- [ ] Profile 頁面已完成
- [ ] 統計顯示正確
- [ ] 編輯功能正常
- [ ] 歷史記錄顯示正確

### Phase 5: Actions & Types
- [ ] 所有 Server Actions 已實作
- [ ] 資料模型已定義
- [ ] 類型定義完整
- [ ] 驗證 schemas 正確

### Phase 6: Polish
- [ ] 錯誤處理已加入
- [ ] 載入狀態已實作
- [ ] 響應式設計已優化
- [ ] 無障礙標準已達成

## 測試檢查清單

- [ ] 所有頁面可正常訪問
- [ ] 導航功能正常（桌面和行動版）
- [ ] 表單驗證正確運作
- [ ] Server Actions 正常執行
- [ ] 錯誤狀態正確顯示
- [ ] 載入狀態正確顯示
- [ ] 響應式設計在所有斷點正常
- [ ] 鍵盤導航正常
- [ ] 顏色對比符合標準

## 成功標準

✅ User Module 完全功能正常  
✅ 與 Business Module 架構一致  
✅ 響應式設計完整  
✅ 所有表單驗證正確  
✅ 錯誤處理完善  
✅ 無障礙標準達成  
✅ 程式碼品質良好  
✅ TypeScript 類型完整  

---

# 結語

這份完整規格文件提供了實作 User Module 所需的所有資訊：

1. **專案架構** - 了解整體技術棧和結構
2. **需求** - 明確的功能需求
3. **設計** - 詳細的技術設計
4. **任務** - 具體的實作步驟
5. **範例** - 參考程式碼
6. **檢查清單** - 確保完整性

按照這份文件，你可以系統性地建立一個與 Business Module 一致、功能完整的 User Module。

祝實作順利！🚀
