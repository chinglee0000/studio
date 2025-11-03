# Design Document

## Overview

Twin Matrix Card 是 Dashboard 上的核心元件，用於顯示用戶的 DNA traits 成長進度。本設計基於 Material Design 3 原則，使用 shadcn/ui 元件庫，並整合完整的統計資訊和智能 8x8 Grid 顯示系統。

完整的實作規格文件位於 `docs/twin-matrix-implementation-spec.md`，包含詳細的 Hex Grid 座標系統、色彩定義和 persona 資料。

## Architecture

### Component Structure

```
TwinMatrixCard (src/components/user/twin-matrix-card.tsx)
├── Card (shadcn/ui)
│   ├── CardHeader
│   │   ├── CardTitle: "Twin Matrix Growth"
│   │   ├── Info Icon (Tooltip)
│   │   └── CardDescription: "X / 256 Traits Discovered"
│   │
│   ├── CardContent
│   │   ├── Journey Progress Section
│   │   │   ├── Label + Percentage
│   │   │   └── Progress Bar
│   │   │
│   │   ├── Stats Row (Avg Strength + Humanity Index)
│   │   │
│   │   ├── Grid + Dimensions Layout
│   │   │   ├── 8x8 Hex Grid (Left)
│   │   │   └── Dimensions List (Right)
│   │   │       ├── Physical Progress
│   │   │       ├── Social Progress
│   │   │       ├── Digital Progress
│   │   │       └── Spiritual Progress
│   │   │
│   │   └── Explore Button
│   │       └── Link to /user/matrix
```

### Data Flow

```
web3EngineerMatrixData (Mock Data)
    ↓
Dashboard Page
    ↓
TwinMatrixCard Component
    ↓
├── getDisplayRange() → 8x8 Traits Array
├── getTraitColor() → CSS Color String
└── Render Grid + Stats
```

## Components and Interfaces

### TwinMatrixCard Props

```typescript
interface TwinMatrixCardProps {
  data: TwinMatrixData
  className?: string
}
```

### Key Functions

#### 1. getDisplayRange()

已在 `src/lib/mock-data/twin-matrix-persona.ts` 實作

```typescript
export function getDisplayRange(
  recentTraitId: string,
  allTraits: MatrixTrait[],
  gridSize: number = 8
): MatrixTrait[]
```

**邏輯**:
1. 找到 `recentTraitId` 對應的 trait
2. 計算以該 trait 為中心的 8x8 範圍
3. 確保不超出 16x16 邊界
4. 返回 64 個 traits 的陣列

**範例**: 
- Recent trait: '14' (row=1, col=4)
- 顯示範圍: row 0-7, col 0-7
- 結果: trait '14' 位於顯示區域的 (1, 4) 位置

#### 2. getTraitColor()

已在 `src/lib/mock-data/twin-matrix-persona.ts` 實作

```typescript
export function getTraitColor(trait: MatrixTrait): string
```

**邏輯**:
- 未解鎖: `hsl(var(--matrix-undiscovered))`
- Physical: `hsl(var(--matrix-physical))`
- Social: `hsl(var(--matrix-social))`
- Digital: `hsl(var(--matrix-digital))`
- Spiritual: `hsl(var(--matrix-spiritual))`

## Data Models

### TwinMatrixData

```typescript
interface TwinMatrixData {
  totalTraits: 256
  discoveredTraits: number        // 92 for Alex Mercer
  journeyProgress: number          // 36%
  avgStrength: number              // 57%
  humanityIndex: number            // 78.3
  dimensions: {
    physical: MatrixDimension      // 21/64, 63%
    social: MatrixDimension        // 26/64, 56%
    digital: MatrixDimension       // 21/64, 55%
    spiritual: MatrixDimension     // 24/64, 54%
  }
  traits: MatrixTrait[]            // 256 個完整 traits
  recentlyUnlockedTrait?: string   // '14'
}
```

### MatrixTrait

```typescript
interface MatrixTrait {
  id: string                       // Hex: "00" to "FF"
  dimension: 'physical' | 'social' | 'digital' | 'spiritual'
  discovered: boolean
  strength?: number                // 0-100
  position: {
    row: number                    // 0-15
    col: number                    // 0-15
  }
}
```

## Visual Design

### Layout Structure

```
┌─────────────────────────────────────────────────────┐
│ Twin Matrix Growth                              ℹ️  │
│ 92 / 256 Traits Discovered                          │
│                                                     │
│ Journey Progress                              36%   │
│ ████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░      │
│                                                     │
│ Avg Strength: 57%          Humanity Index: 78.3    │
│                                                     │
│ ┌─────────────────┐                                │
│ │                 │  Physical    21/64        63%  │
│ │   8x8 Grid      │  ████████████████░░░░░░░░      │
│ │                 │                                │
│ │  [14] 最近解鎖   │  Social      26/64        56%  │
│ │   在這個區域     │  ████████████████░░░░░░░░      │
│ │                 │                                │
│ │                 │  Digital     21/64        55%  │
│ │                 │  ████████████████░░░░░░░░      │
│ │                 │                                │
│ │                 │  Spiritual   24/64        54%  │
│ └─────────────────┘  ████████████████░░░░░░░░      │
│                                                     │
│              [Explore Your Matrix →]                │
└─────────────────────────────────────────────────────┘
```

### Grid Specifications

- **Grid Size**: 8x8 (64 格子)
- **Cell Size**: 16px × 16px
- **Gap**: 4px (`gap-1`)
- **Total Dimensions**: ~140px × 140px
- **Border Radius**: `rounded-sm` (2px)
- **Hover Scale**: 1.1x
- **Transition**: `transition-all`

### Color System

已在 `src/app/globals.css` 定義完整的 CSS 變數：

**Light Mode**:
```css
--matrix-physical: 211 85% 50%        /* 藍色 */
--matrix-social: 142 71% 45%          /* 綠色 */
--matrix-digital: 271 76% 53%         /* 紫色 */
--matrix-spiritual: 27 87% 55%        /* 橘色 */
--matrix-undiscovered: 220 9% 88%     /* 灰色 */
```

**Dark Mode**:
```css
--matrix-physical: 211 85% 60%        /* 亮藍色 */
--matrix-social: 142 71% 55%          /* 亮綠色 */
--matrix-digital: 271 76% 63%         /* 亮紫色 */
--matrix-spiritual: 27 87% 65%        /* 亮橘色 */
--matrix-undiscovered: 220 9% 56%     /* 深灰色 */
```

### Typography

遵循 Material Design 3 規範：

- **Card Title**: `text-lg font-semibold` (18px, 600)
- **Card Description**: `text-sm font-normal` (14px, 400)
- **Section Labels**: `text-sm font-normal text-muted-foreground`
- **Percentages**: `text-sm font-medium`
- **Dimension Names**: `text-xs font-semibold capitalize`
- **Trait Counts**: `text-xs font-normal text-muted-foreground`
- **Stats**: `text-xs font-normal text-muted-foreground`

### Spacing

- **Card Padding**: `p-6` (24px)
- **Section Spacing**: `space-y-4` (16px)
- **Grid Gap**: `gap-1` (4px)
- **Progress Bar Height**: `h-2` (8px) for main, `h-1.5` (6px) for dimensions

## Error Handling

### Missing Data

```typescript
// 如果沒有 recentlyUnlockedTrait，使用默認範圍
const displayTraits = data.recentlyUnlockedTrait
  ? getDisplayRange(data.recentlyUnlockedTrait, data.traits)
  : data.traits.slice(0, 64)
```

### Invalid Trait ID

```typescript
// getDisplayRange 內部處理
if (!recentTrait) {
  return allTraits.slice(0, 64) // 返回左上角
}
```

### Missing Strength

```typescript
// Tooltip 顯示邏輯
{trait.discovered && trait.strength && (
  <span>Strength: {trait.strength}%</span>
)}
```

## Testing Strategy

### Unit Tests

1. **getDisplayRange() 測試**
   - 測試中心定位邏輯
   - 測試邊界情況（角落的 traits）
   - 測試無效 trait ID

2. **getTraitColor() 測試**
   - 測試每個維度的顏色
   - 測試未解鎖狀態

3. **Component 渲染測試**
   - 測試所有統計資訊正確顯示
   - 測試 Grid 正確渲染 64 個格子
   - 測試維度資訊正確顯示

### Integration Tests

1. **Dashboard 整合測試**
   - 測試 TwinMatrixCard 在 Dashboard 正確顯示
   - 測試 Mock Data 正確傳遞
   - 測試導航功能

### Visual Tests

1. **響應式測試**
   - Desktop (1920px)
   - Tablet (768px)
   - Mobile (375px)

2. **主題測試**
   - Light Mode
   - Dark Mode

3. **互動測試**
   - Hover 效果
   - Tooltip 顯示
   - 按鈕點擊

## Performance Considerations

### Optimization

1. **Memoization**
   ```typescript
   const displayTraits = useMemo(
     () => getDisplayRange(data.recentlyUnlockedTrait, data.traits),
     [data.recentlyUnlockedTrait, data.traits]
   )
   ```

2. **Lazy Loading**
   - Tooltip 內容按需載入
   - 圖示按需載入

3. **CSS Optimization**
   - 使用 CSS 變數避免重複計算
   - 使用 transform 而非 width/height 做動畫

## Accessibility

1. **Semantic HTML**
   - 使用正確的 heading 層級
   - 使用 `<button>` 而非 `<div>` 做按鈕

2. **ARIA Labels**
   ```tsx
   <div role="grid" aria-label="Twin Matrix 8x8 Grid">
   ```

3. **Keyboard Navigation**
   - Tab 可以聚焦到按鈕
   - Enter/Space 可以觸發按鈕

4. **Color Contrast**
   - 確保文字和背景對比度 ≥ 4.5:1
   - 不僅依賴顏色傳達資訊（使用文字標籤）

## Implementation Notes

### File Locations

- **Component**: `src/components/user/twin-matrix-card.tsx`
- **Mock Data**: `src/lib/mock-data/twin-matrix-persona.ts`
- **Types**: `src/lib/mock-data/dashboard.ts` (已定義)
- **CSS Variables**: `src/app/globals.css` (已定義)
- **Spec Document**: `docs/twin-matrix-implementation-spec.md`

### Dependencies

- `@/components/ui/card` - shadcn/ui Card 元件
- `@/components/ui/progress` - shadcn/ui Progress 元件
- `@/components/ui/tooltip` - shadcn/ui Tooltip 元件
- `lucide-react` - 圖示庫
- `next/link` - Next.js 路由

### Key Design Decisions

1. **為什麼使用 8x8 而非 16x16？**
   - Dashboard 空間有限
   - 8x8 提供足夠的視覺資訊
   - 智能定位確保顯示最相關的區域

2. **為什麼以最近解鎖的 trait 為中心？**
   - 用戶最關心最新的進展
   - 提供上下文（周圍的 traits）
   - 鼓勵探索相鄰區域

3. **為什麼使用 CSS 變數而非 Tailwind 顏色？**
   - 支援 Dark Mode 自動切換
   - 保持顏色一致性
   - 易於維護和更新

4. **為什麼將輔助函數放在 Mock Data 文件？**
   - 函數與資料緊密相關
   - 避免循環依賴
   - 便於測試和重用
