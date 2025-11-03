# Quest Type 設計規範

本文件定義了所有 Quest Type 的視覺設計標準，確保整個應用程式的一致性。

## 設計系統位置

**主要檔案**: `src/lib/constants/quest-design-system.ts`

所有使用 quest type 視覺元素的地方都應該引用這個檔案。

## Quest Types 視覺規範

### 1. Sensory Feedback (感官回饋)
- **Icon**: 🧠 BrainCircuit
- **顏色**: Blue (藍色)
- **Light Mode**: `text-blue-600` / `bg-blue-100`
- **Dark Mode**: `text-blue-400` / `bg-blue-900/50`
- **語意**: 代表感知、思考和認知過程

### 2. Dine & Review (餐飲評論)
- **Icon**: 🍴 UtensilsCrossed
- **顏色**: Yellow (黃色)
- **Light Mode**: `text-yellow-600` / `bg-yellow-100`
- **Dark Mode**: `text-yellow-400` / `bg-yellow-900/50`
- **語意**: 代表美食、溫暖和用餐體驗

### 3. Ad Campaign (廣告活動)
- **Icon**: 📢 Megaphone
- **顏色**: Pink (粉色)
- **Light Mode**: `text-pink-600` / `bg-pink-100`
- **Dark Mode**: `text-pink-400` / `bg-pink-900/50`
- **語意**: 代表創意、行銷和傳播

### 4. App UX (應用程式體驗)
- **Icon**: 📱 Smartphone
- **顏色**: Cyan (青色)
- **Light Mode**: `text-cyan-600` / `bg-cyan-100`
- **Dark Mode**: `text-cyan-400` / `bg-cyan-900/50`
- **語意**: 代表科技、數位和使用者介面

### 5. In-Store Experience (實體店面體驗)
- **Icon**: 🏪 Store
- **顏色**: Green (綠色)
- **Light Mode**: `text-green-600` / `bg-green-100`
- **Dark Mode**: `text-green-400` / `bg-green-900/50`
- **語意**: 代表實體空間、環境和零售

### 6. Survey (問卷調查)
- **Icon**: 📋 ClipboardList
- **顏色**: Purple (紫色)
- **Light Mode**: `text-purple-600` / `bg-purple-100`
- **Dark Mode**: `text-purple-400` / `bg-purple-900/50`
- **語意**: 代表數據收集、分析和研究

## 使用方式

### 基本使用

```typescript
import { getQuestTypeDesign } from '@/lib/constants/quest-design-system'

const design = getQuestTypeDesign('App UX')
const Icon = design.icon

// 在 JSX 中使用
<div className={design.combinedClass}>
  <Icon className="h-6 w-6" />
</div>
```

### 獲取特定元素

```typescript
import { 
  getQuestTypeIcon, 
  getQuestTypeColorClasses 
} from '@/lib/constants/quest-design-system'

// 只獲取 icon
const Icon = getQuestTypeIcon('Survey')

// 只獲取顏色類別
const colors = getQuestTypeColorClasses('Ad Campaign')
// colors.text = 'text-pink-600 dark:text-pink-400'
// colors.bg = 'bg-pink-100 dark:bg-pink-500/20'
// colors.combined = 'bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400'
```

### 生成列表

```typescript
import { getAllQuestTypeDesigns } from '@/lib/constants/quest-design-system'

const allDesigns = getAllQuestTypeDesigns()
// 返回所有 quest types 及其設計配置的陣列
```

## 設計原則

### 1. 一致性
- 所有 quest type 的視覺元素必須使用統一的設計系統
- 不要在不同頁面使用不同的 icon 或顏色

### 2. 可訪問性
- 顏色對比度符合 WCAG AA 標準
- Dark mode 使用較淺的顏色以確保可讀性
- Icon 大小至少 16x16px 以確保清晰度

### 3. 語意化
- 每個 quest type 的顏色和 icon 都有其語意
- 選擇能直觀表達任務類型的視覺元素

### 4. 響應式
- 設計支援 light/dark mode
- 顏色在不同背景下都保持良好的對比度

## 遷移指南

如果你的程式碼還在使用舊的 `quest-icons.tsx`：

### 舊寫法
```typescript
import { getQuestIcon } from '@/lib/utils/quest-icons'

const { icon: Icon, color, bgColor } = getQuestIcon(questType)
```

### 新寫法
```typescript
import { getQuestTypeDesign } from '@/lib/constants/quest-design-system'

const design = getQuestTypeDesign(questType)
const Icon = design.icon
const textClass = design.textClass
const bgClass = design.bgClass
```

## 維護注意事項

1. **新增 Quest Type**: 必須在 `quest-design-system.ts` 中定義完整的設計配置
2. **修改顏色**: 確保同時更新 light 和 dark mode 的顏色
3. **更換 Icon**: 確保新 icon 的語意與 quest type 相符
4. **測試**: 在 light/dark mode 下都要測試視覺效果

## 相關檔案

- `src/lib/constants/quest-design-system.ts` - 設計系統主檔案
- `src/lib/constants/quest-types.ts` - Quest type 類型定義
- `src/lib/utils/quest-icons.tsx` - 舊版 API (已棄用)
- `src/components/user/quest-row.tsx` - Quest 列表項目組件
- `src/app/user/quests/page.tsx` - Quest 類型選擇頁面
- `src/app/business/quests/new/page.tsx` - 建立 Quest 頁面
