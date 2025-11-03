# 樣式一致性指南

## 🎯 問題解決

### 原始問題
Notification 和其他元件的 hover 顏色不一致：
- Navigation: `hover:bg-muted`
- Quest Row: `hover:bg-muted/50`
- Notification: `hover:bg-muted/30`
- User Status: `hover:bg-secondary`

### 解決方案
創建統一的 Design Tokens 系統

## 📁 新增文件

### 1. `src/lib/styles/design-tokens.ts`
集中管理所有設計決策的文件

**包含內容：**
- `interactiveStates` - 互動狀態（hover, active, focus）
- `cardStyles` - 卡片樣式
- `listItemStyles` - 列表項目樣式
- `buttonStyles` - 按鈕樣式
- `spacing` - 間距
- `typography` - 字體樣式

### 2. `src/lib/styles/README.md`
使用指南和最佳實踐

## ✅ 已統一的樣式

### Hover 效果
**統一使用：** `hover:bg-muted`

**已更新的元件：**
- ✅ Navigation (sidebar)
- ✅ Quest Row
- ✅ Notification 項目
- ✅ Notification "View all" 按鈕
- ✅ User Status Card

### 未讀通知背景
**統一使用：** `bg-muted/30`

這確保：
- 未讀項目有視覺區別
- Hover 時使用統一的 `hover:bg-muted`
- 不會太深或太淺

## 🔧 使用方式

### 基本用法

```tsx
import { interactiveStates, listItemStyles } from '@/lib/styles/design-tokens'

// 簡單的 hover 效果
<button className={interactiveStates.hover}>
  Click me
</button>

// 列表項目
<div className={listItemStyles.default}>
  Item
</div>

// 未讀通知
<div className={listItemStyles.notificationUnread}>
  Unread notification
</div>
```

### 實際範例

**Notification 元件：**
```tsx
<DropdownMenuItem
  className={
    !notification.read 
      ? listItemStyles.notificationUnread 
      : listItemStyles.notification
  }
>
  {/* content */}
</DropdownMenuItem>
```

**Quest Row：**
```tsx
<Link
  href={`/user/quests/${quest.id}`}
  className={listItemStyles.default}
>
  {/* content */}
</Link>
```

## 📋 檢查清單

創建新元件時：

- [ ] 使用 `interactiveStates.hover` 而不是自定義 hover
- [ ] 使用 `listItemStyles` 而不是重複定義列表樣式
- [ ] 使用 `typography` 常數而不是內聯字體樣式
- [ ] 使用 `cardStyles` 確保卡片樣式一致

## 🎨 設計原則

### 1. 單一真相來源
所有設計決策都在 `design-tokens.ts` 中定義

### 2. 語義化命名
使用描述性的名稱（如 `notificationUnread` 而不是 `lightGray`）

### 3. 可組合性
Design tokens 可以組合使用

### 4. 主題支援
所有樣式都支援 Light/Dark mode

## 🔄 維護流程

### 添加新樣式

1. 在 `design-tokens.ts` 中定義
2. 更新 `src/lib/styles/README.md`
3. 在元件中使用
4. 更新這個指南

### 修改現有樣式

1. 只在 `design-tokens.ts` 中修改
2. 所有使用該 token 的元件自動更新
3. 測試 Light/Dark mode

## 📊 影響範圍

### 已更新的元件
- `src/components/shared/notifications.tsx`
- `src/components/user/quest-row.tsx`
- `src/components/user/user-status-card.tsx`
- `src/components/user/quest-overview.tsx`
- `src/components/user/twin-matrix-card.tsx`

### 統一的樣式
- Hover 顏色: `hover:bg-muted`
- 卡片背景: `bg-white dark:bg-card`
- 未讀狀態: `bg-muted/30`

## 🎯 下一步

### 建議改進

1. **逐步遷移**
   - 將更多元件遷移到使用 design tokens
   - 移除重複的樣式定義

2. **擴展 tokens**
   - 添加更多常用的樣式組合
   - 定義動畫和過渡效果

3. **文檔化**
   - 為每個 token 添加使用範例
   - 創建視覺化的 style guide

4. **自動化**
   - 添加 ESLint 規則檢查樣式一致性
   - 創建 Storybook 展示所有 design tokens

## 📚 參考資料

- [Material Design 3](https://m3.material.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Design Tokens Community Group](https://www.w3.org/community/design-tokens/)

---

**維護者：** Kiro AI
**最後更新：** 2024-11-04
