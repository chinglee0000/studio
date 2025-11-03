# Twin Matrix 完整實作規格

## 👤 User Persona: Alex Mercer

**基本資料**:
- 年齡: 35 歲
- 職業: Web3 工程師
- 經驗: 區塊鏈產業 5 年
- 地點: 台北

**生活特徵**:
- 💻 **Digital (高)**: Web3 專業技能強，熟悉區塊鏈技術，持續學習新技術
- 🏃 **Physical (中高)**: 重視健康，有規律運動習慣，但工作繁忙
- 👥 **Social (中)**: 活躍於開發者社群，線上互動多於線下
- 🧘 **Spiritual (中低)**: 開始探索內在成長，嘗試冥想和正念練習

**Twin Matrix 狀態**:
- 總共解鎖: 92/256 traits (36%)
- Physical: 21/64 (63% 平均強度)
- Social: 26/64 (56% 平均強度)
- Digital: 21/64 (55% 平均強度，但個別 trait 強度最高)
- Spiritual: 24/64 (54% 平均強度)
- 最近解鎖: Physical trait `14` (通過健身 quest 解鎖)

---

## 🎯 Twin Matrix 概念

### 基本結構
- **16x16 Hex Grid** = 256 個格子
- 每個格子 = 一個 **DNA Trait**
- Hex ID 範圍: `00` - `FF`
- 通過完成 Quest 解鎖 Traits

### 4 個維度及其範圍

| 維度 | Hex 範圍 | Decimal 範圍 | Traits 數量 | 代表意義 |
|------|----------|--------------|-------------|----------|
| **Physical** | 00-3F | 0-63 | 64 | 身體健康、運動、飲食、睡眠 |
| **Social** | 40-7F | 64-127 | 64 | 社交互動、溝通、協作、關係 |
| **Digital** | 80-BF | 128-191 | 64 | 數位技能、科技應用、線上行為 |
| **Spiritual** | C0-FF | 192-255 | 64 | 內在成長、價值觀、人生意義 |

### Hex Grid 座標系統

```
     0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F
  ┌──────────────────────────────────────────────────┐
0 │ 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F │ Physical
1 │ 10 11 12 13 14 15 16 17 18 19 1A 1B 1C 1D 1E 1F │
2 │ 20 21 22 23 24 25 26 27 28 29 2A 2B 2C 2D 2E 2F │
3 │ 30 31 32 33 34 35 36 37 38 39 3A 3B 3C 3D 3E 3F │
  ├──────────────────────────────────────────────────┤
4 │ 40 41 42 43 44 45 46 47 48 49 4A 4B 4C 4D 4E 4F │ Social
5 │ 50 51 52 53 54 55 56 57 58 59 5A 5B 5C 5D 5E 5F │
6 │ 60 61 62 63 64 65 66 67 68 69 6A 6B 6C 6D 6E 6F │
7 │ 70 71 72 73 74 75 76 77 78 79 7A 7B 7C 7D 7E 7F │
  ├──────────────────────────────────────────────────┤
8 │ 80 81 82 83 84 85 86 87 88 89 8A 8B 8C 8D 8E 8F │ Digital
9 │ 90 91 92 93 94 95 96 97 98 99 9A 9B 9C 9D 9E 9F │
A │ A0 A1 A2 A3 A4 A5 A6 A7 A8 A9 AA AB AC AD AE AF │
B │ B0 B1 B2 B3 B4 B5 B6 B7 B8 B9 BA BB BC BD BE BF │
  ├──────────────────────────────────────────────────┤
C │ C0 C1 C2 C3 C4 C5 C6 C7 C8 C9 CA CB CC CD CE CF │ Spiritual
D │ D0 D1 D2 D3 D4 D5 D6 D7 D8 D9 DA DB DC DD DE DF │
E │ E0 E1 E2 E3 E4 E5 E6 E7 E8 E9 EA EB EC ED EE EF │
F │ F0 F1 F2 F3 F4 F5 F6 F7 F8 F9 FA FB FC FD FE FF │
  └──────────────────────────────────────────────────┘
```

---

## 🎨 色彩系統

### CSS 變數定義

已在 `src/app/globals.css` 定義：

```css
/* Light Mode */
--matrix-physical: 211 85% 50%;        /* 藍色 #1E90FF */
--matrix-physical-light: 211 85% 95%;  /* 淺藍色背景 */
--matrix-social: 142 71% 45%;          /* 綠色 #2ECC71 */
--matrix-social-light: 142 71% 95%;    /* 淺綠色背景 */
--matrix-digital: 271 76% 53%;         /* 紫色 #9B59B6 */
--matrix-digital-light: 271 76% 95%;   /* 淺紫色背景 */
--matrix-spiritual: 27 87% 55%;        /* 橘色 #E67E22 */
--matrix-spiritual-light: 27 87% 95%;  /* 淺橘色背景 */
--matrix-undiscovered: 220 9% 88%;     /* 灰色 */

/* Dark Mode */
--matrix-physical: 211 85% 60%;        /* 亮藍色 */
--matrix-physical-light: 211 85% 20%;  /* 深藍色背景 */
--matrix-social: 142 71% 55%;          /* 亮綠色 */
--matrix-social-light: 142 71% 20%;    /* 深綠色背景 */
--matrix-digital: 271 76% 63%;         /* 亮紫色 */
--matrix-digital-light: 271 76% 20%;   /* 深紫色背景 */
--matrix-spiritual: 27 87% 65%;        /* 亮橘色 */
--matrix-spiritual-light: 27 87% 20%;  /* 深橘色背景 */
--matrix-undiscovered: 220 9% 56%;     /* 深灰色 */
```

### 使用方式

```tsx
// 格子顏色（已解鎖）
<div style={{ backgroundColor: 'hsl(var(--matrix-physical))' }} />

// 格子背景（淺色版本）
<div style={{ backgroundColor: 'hsl(var(--matrix-physical-light))' }} />

// 未解鎖格子
<div style={{ backgroundColor: 'hsl(var(--matrix-undiscovered))' }} />
```

---

## 📊 資料結構

### TypeScript 類型定義

```typescript
export interface MatrixTrait {
  id: string                    // Hex code: "00", "4E", "FF" 等
  dimension: 'physical' | 'social' | 'digital' | 'spiritual'
  discovered: boolean           // 是否已解鎖
  strength?: number             // 0-100，trait 的強度
  position: {
    row: number                 // 0-15
    col: number                 // 0-15
  }
}

export interface MatrixDimension {
  discovered: number            // 已解鎖數量
  total: number                 // 總數量 (64)
  percentage: number            // 平均強度百分比
}

export interface TwinMatrixData {
  totalTraits: number           // 256
  discoveredTraits: number      // 已解鎖總數
  journeyProgress: number       // 整體進度百分比
  avgStrength: number           // 平均強度
  humanityIndex: number         // 人性指數
  dimensions: {
    physical: MatrixDimension
    social: MatrixDimension
    digital: MatrixDimension
    spiritual: MatrixDimension
  }
  traits: MatrixTrait[]         // 完整 256 個 traits
  recentlyUnlockedTrait?: string // 最近解鎖的 trait ID
}
```

### Alex Mercer 的 Mock Data

已創建在 `src/lib/mock-data/twin-matrix-persona.ts`：

```typescript
export const web3EngineerMatrixData: TwinMatrixData = {
  totalTraits: 256,
  discoveredTraits: 92,
  journeyProgress: 36,
  avgStrength: 57,
  humanityIndex: 78.3,
  dimensions: {
    physical: { discovered: 21, total: 64, percentage: 63 },
    social: { discovered: 26, total: 64, percentage: 56 },
    digital: { discovered: 21, total: 64, percentage: 55 },
    spiritual: { discovered: 24, total: 64, percentage: 54 },
  },
  traits: [...], // 完整 256 個 traits
  recentlyUnlockedTrait: '14', // Physical trait
}
```

---

## 🖼️ Dashboard 版本的 Hex Grid

### 顯示邏輯：智能定位 8x8

**需求**:
- 顯示 **8x8 格子**（64 個格子的子集）
- 根據 **最近解鎖的 trait** 智能定位顯示範圍
- 以最近解鎖的 trait 為中心（或接近中心）

**實作邏輯**:

```typescript
function getDisplayRange(
  recentTraitId: string,
  allTraits: MatrixTrait[],
  gridSize: number = 8
): MatrixTrait[] {
  // 1. 找到最近解鎖的 trait
  const recentTrait = allTraits.find(t => t.id === recentTraitId)
  if (!recentTrait) {
    // 如果找不到，默認顯示左上角
    return allTraits.slice(0, 64)
  }
  
  const { row, col } = recentTrait.position
  
  // 2. 計算顯示範圍的起始位置（以 recent trait 為中心）
  let startRow = row - Math.floor(gridSize / 2)
  let startCol = col - Math.floor(gridSize / 2)
  
  // 3. 確保不超出邊界
  startRow = Math.max(0, Math.min(16 - gridSize, startRow))
  startCol = Math.max(0, Math.min(16 - gridSize, startCol))
  
  // 4. 提取 8x8 範圍的 traits
  const displayTraits: MatrixTrait[] = []
  for (let r = startRow; r < startRow + gridSize; r++) {
    for (let c = startCol; c < startCol + gridSize; c++) {
      const trait = allTraits.find(
        t => t.position.row === r && t.position.col === c
      )
      if (trait) displayTraits.push(trait)
    }
  }
  
  return displayTraits
}
```

**範例**:

Alex 最近解鎖 trait `14` (row=1, col=4)：

```
完整 Matrix (16x16):
     0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F
  ┌──────────────────────────────────────────────────┐
0 │ 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F │
1 │ 10 11 12 13[14]15 16 17 18 19 1A 1B 1C 1D 1E 1F │ ← 最近解鎖
2 │ 20 21 22 23 24 25 26 27 28 29 2A 2B 2C 2D 2E 2F │
3 │ 30 31 32 33 34 35 36 37 38 39 3A 3B 3C 3D 3E 3F │
  └──────────────────────────────────────────────────┘

Dashboard 顯示 (8x8):
以 trait 14 為中心，顯示範圍 row 0-7, col 0-7
     0  1  2  3  4  5  6  7
  ┌────────────────────────┐
0 │ 00 01 02 03 04 05 06 07 │
1 │ 10 11 12 13[14]15 16 17 │ ← 最近解鎖在這裡
2 │ 20 21 22 23 24 25 26 27 │
3 │ 30 31 32 33 34 35 36 37 │
4 │ 40 41 42 43 44 45 46 47 │
5 │ 50 51 52 53 54 55 56 57 │
6 │ 60 61 62 63 64 65 66 67 │
7 │ 70 71 72 73 74 75 76 77 │
  └────────────────────────┘
```

### 格子視覺設計

**尺寸**:
- 每個格子: **16px x 16px**
- 格子間距: `gap-1` (4px)
- 總尺寸: 約 **140px x 140px** (8 * 16 + 7 * 4)

**樣式**:
```tsx
<div className="grid grid-cols-8 gap-1">
  {displayTraits.map((trait) => (
    <div
      key={trait.id}
      className="aspect-square rounded-sm transition-all hover:scale-110"
      style={{
        backgroundColor: trait.discovered
          ? getTraitColor(trait)
          : 'hsl(var(--matrix-undiscovered))',
        opacity: trait.discovered ? 1 : 0.3,
      }}
      title={`${trait.id} - ${trait.dimension} ${trait.discovered ? `(${trait.strength}%)` : '(locked)'}`}
    />
  ))}
</div>
```

**互動**:
- Hover: 放大 1.1 倍
- Tooltip: 顯示 Hex ID、維度、強度
- 點擊整個 Card 導航到完整 Matrix 頁面

---

## 📱 Twin Matrix Card 完整內容

### 當前缺少的元素

根據你的需求和截圖，需要添加：

1. **Traits Discovered 數量**
```tsx
<CardDescription className="text-sm font-normal">
  {data.discoveredTraits} / {data.totalTraits} Traits Discovered
</CardDescription>
```

2. **Journey Progress**
```tsx
<div>
  <div className="flex justify-between text-sm mb-2">
    <span className="font-normal text-muted-foreground">Journey Progress</span>
    <span className="font-medium">{data.journeyProgress}%</span>
  </div>
  <Progress value={data.journeyProgress} className="h-2" />
</div>
```

3. **Avg Strength & Humanity Index**
```tsx
<div className="flex justify-between text-xs font-normal text-muted-foreground">
  <span>Avg Strength: {data.avgStrength}%</span>
  <span>Humanity Index: {data.humanityIndex}</span>
</div>
```

4. **維度 Traits 數量**
```tsx
{Object.entries(data.dimensions).map(([name, dim]) => (
  <div key={name}>
    <div className="flex justify-between text-xs mb-1">
      <span className="font-semibold capitalize">{name}</span>
      <span className="font-normal text-muted-foreground">
        {dim.discovered}/{dim.total} traits
      </span>
      <span className="font-medium">{dim.percentage}%</span>
    </div>
    <Progress value={dim.percentage} className="h-1.5" />
  </div>
))}
```

### 完整佈局

```
┌─────────────────────────────────────────┐
│ Twin Matrix Growth                  ℹ️  │
│ 92 / 256 Traits Discovered              │
│                                         │
│ Journey Progress                  36%   │
│ ████████░░░░░░░░░░░░░░░░░░░░           │
│                                         │
│ Avg Strength: 57%    Humanity: 78.3    │
│                                         │
│ ┌─────────────┐                        │
│ │   8x8 Grid  │  Physical  21/64  63%  │
│ │  (智能定位)  │  ████████████░░░░      │
│ │             │                        │
│ │  以最近解鎖  │  Social    26/64  56%  │
│ │  為中心顯示  │  ████████████░░░░      │
│ │             │                        │
│ │             │  Digital   21/64  55%  │
│ │             │  ████████████░░░░      │
│ │             │                        │
│ │             │  Spiritual 24/64  54%  │
│ └─────────────┘  ████████████░░░░      │
│                                         │
│ [Explore Your Matrix →]                │
└─────────────────────────────────────────┘
```

---

## 🎯 實作任務

### Task 1: 更新 TwinMatrixCard 元件

**檔案**: `src/components/user/twin-matrix-card.tsx`

**需要修改**:
1. 更新 props 接受完整的 `TwinMatrixData`
2. 添加 Traits Discovered 描述
3. 添加 Journey Progress 進度條
4. 添加 Avg Strength & Humanity Index
5. 更新維度顯示（添加 traits 數量）
6. 實作智能 8x8 Grid 顯示

### Task 2: 更新 Mock Data

**檔案**: `src/lib/mock-data/dashboard.ts`

**需要修改**:
1. 導入 `web3EngineerMatrixData`
2. 更新 `mockMatrixData` 使用完整資料結構

```typescript
import { web3EngineerMatrixData } from './twin-matrix-persona'

export const mockMatrixData = web3EngineerMatrixData
```

### Task 3: 更新 Dashboard 頁面

**檔案**: `src/app/user/dashboard/page.tsx`

**確認**:
- TwinMatrixCard 接收正確的 data prop
- 資料正確傳遞

### Task 4: 測試

**測試項目**:
- [ ] 所有統計資訊正確顯示
- [ ] 8x8 Grid 根據最近解鎖的 trait 正確定位
- [ ] 格子顏色正確（根據維度和是否解鎖）
- [ ] Hover 效果正常
- [ ] Tooltip 顯示正確資訊
- [ ] 點擊 Card 導航到 Matrix 頁面
- [ ] 響應式設計正常
- [ ] Dark Mode 正常顯示

---

## 📚 參考資料

1. **Twin Matrix 編碼 PDF**: `docs/Twin Matrix 編碼.pdf`
2. **Persona Mock Data**: `src/lib/mock-data/twin-matrix-persona.ts`
3. **設計規範**: `docs/design-system/material-design-guide.md`
4. **當前實作**: `src/components/user/twin-matrix-card.tsx`
5. **CSS 變數**: `src/app/globals.css`

---

## ✅ 成功標準

完成後應該：
1. ✅ 顯示 "92 / 256 Traits Discovered"
2. ✅ 顯示 Journey Progress 進度條 (36%)
3. ✅ 顯示 Avg Strength (57%) 和 Humanity Index (78.3)
4. ✅ 8x8 Grid 以 trait `14` 為中心顯示
5. ✅ 格子顏色正確（Physical=藍, Social=綠, Digital=紫, Spiritual=橘）
6. ✅ 未解鎖格子顯示灰色且半透明
7. ✅ 每個維度顯示 "X/64 traits" 和百分比
8. ✅ 符合設計規範（字體、間距、M3 variants）
9. ✅ 響應式設計正常
10. ✅ Dark Mode 正常顯示

---

**這份規格基於 35 歲 Web3 工程師 Alex Mercer 的真實 persona，包含完整的 92 個已解鎖 traits 資料！**
