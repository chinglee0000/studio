# Design Tokens 使用指南

## 概述

`design-tokens.ts` 定義了整個應用程式的統一樣式常數，確保所有元件使用一致的設計語言。

## 為什麼需要 Design Tokens？

### 問題
- 不同元件使用不同的 hover 顏色（`hover:bg-muted/50`, `hover:bg-muted/30`, `hover:bg-secondary`）
- 樣式分散在各個元件中，難以維護
- 修改設計時需要更新多個文件

### 解決方案
- 集中管理所有設計決策
- 確保一致性
- 易於維護和更新

## 使用方式

### 1. Interactive States（互動狀態）

所有可點擊元素應使用統一的 hover 效果：

```tsx
import { interactiveStates } from '@/lib/styles/design-tokens'

// ✅ 正確
<button className={interactiveStates.hover}>
  Click me
</button>

// ❌ 錯誤 - 不要自定義 hover 顏色
<button className="hover:bg-muted/50">
  Click me
</button>
```

### 2. List Item Styles（列表項目樣式）

使用預定義的列表項目樣式：

```tsx
import { listItemStyles } from '@/lib/styles/design-tokens'

// 標準列表項目
<div className={listItemStyles.default}>
  <span>Item</span>
</div>

// 通知項目
<div className={listItemStyles.notification}>
  <span>Notification</span>
</div>

// 未讀通知項目
<div className={listItemStyles.notificationUnread}>
  <span>Unread Notification</span>
</div>
```

### 3. Card Styles（卡片樣式）

```tsx
import { cardStyles } from '@/lib/styles/design-tokens'

// 白色背景卡片
<Card className={cardStyles.white}>
  <CardContent>...</CardContent>
</Card>
```

### 4. Typography（字體樣式）

```tsx
import { typography } from '@/lib/styles/design-tokens'

<h1 className={typography.h1}>Title</h1>
<p className={typography.body}>Body text</p>
<span className={typography.caption}>Caption</span>
```

## 當前統一的樣式

### Hover 效果
所有互動元素使用：`hover:bg-muted`

這包括：
- Navigation 項目
- Quest Row
- Notification 項目
- User Status Card
- 所有可點擊的列表項目

### 未讀狀態
未讀通知使用：`bg-muted/30` + `hover:bg-muted`

這確保：
- 未讀項目有視覺區別（淺背景）
- Hover 時使用統一的顏色
- Light/Dark mode 都正常顯示

## 添加新樣式

如果需要添加新的設計 token：

1. 在 `design-tokens.ts` 中定義
2. 更新這個 README
3. 在相關元件中使用

```typescript
// design-tokens.ts
export const newStyles = {
  example: 'your-classes-here',
} as const
```

## 檢查清單

在創建新元件時，確保：

- [ ] 使用 `interactiveStates.hover` 而不是自定義 hover 顏色
- [ ] 使用預定義的 `listItemStyles` 而不是重複定義
- [ ] 使用 `typography` 常數而不是內聯字體樣式
- [ ] 使用 `spacing` 常數確保一致的間距

## 相關文件

- `src/lib/styles/design-tokens.ts` - Design tokens 定義
- `src/components/ui/sidebar.tsx` - Navigation hover 參考實作
- `src/components/shared/notifications.tsx` - Notification 樣式參考實作
