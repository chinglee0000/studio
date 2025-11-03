# Agent Instructions

## 任務概述

請根據這份規格文件實作 Twin Matrix Card 的完整功能。

## 重要資訊

### Mock Data 已準備完成

所有 Mock Data 已經準備好在 `src/lib/mock-data/twin-matrix-persona.ts`，包含：

- **完整的 256 個 traits** (基於 16x16 Hex Grid)
- **92 個已解鎖的 traits** (基於 35 歲 Web3 工程師 Alex Mercer 的 persona)
- **四個維度的詳細資料**:
  - Physical: 21/64 traits (63% 平均強度)
  - Social: 26/64 traits (56% 平均強度)
  - Digital: 21/64 traits (55% 平均強度)
  - Spiritual: 24/64 traits (54% 平均強度)
- **最近解鎖的 trait**: '14' (Physical 維度)

### 輔助函數已實作

以下函數已在 `src/lib/mock-data/twin-matrix-persona.ts` 實作完成：

1. **`getDisplayRange()`** - 智能計算 8x8 顯示範圍
2. **`getTraitColor()`** - 根據維度返回正確的顏色
3. **`getTraitBackgroundColor()`** - 返回淺色背景版本

你可以直接導入使用：
```typescript
import { 
  web3EngineerMatrixData, 
  getDisplayRange, 
  getTraitColor 
} from '@/lib/mock-data/twin-matrix-persona'
```

### CSS 變數已定義

所有顏色的 CSS 變數已在 `src/app/globals.css` 定義完成，支援 Light/Dark Mode：

- `--matrix-physical` (藍色)
- `--matrix-social` (綠色)
- `--matrix-digital` (紫色)
- `--matrix-spiritual` (橘色)
- `--matrix-undiscovered` (灰色)

## 實作重點

### 1. 智能 8x8 Grid 顯示

使用 `getDisplayRange()` 函數計算顯示範圍：

```typescript
const displayTraits = data.recentlyUnlockedTrait
  ? getDisplayRange(data.recentlyUnlockedTrait, data.traits)
  : data.traits.slice(0, 64)
```

這會以最近解鎖的 trait ('14') 為中心，顯示 row 0-7, col 0-7 的範圍。

### 2. 添加所有缺少的統計資訊

當前 TwinMatrixCard 缺少以下元素，需要全部添加：

- ✅ "92 / 256 Traits Discovered" 描述
- ✅ Journey Progress 進度條和百分比
- ✅ Avg Strength 和 Humanity Index
- ✅ 每個維度的 "X/64 traits" 數量顯示

### 3. 確保符合設計規範

- 使用 Material Design 3 字體規範
- 正確的間距 (`space-y-4`, `gap-1` 等)
- 格子尺寸: 16px × 16px
- Hover 效果: scale 1.1x
- 響應式設計

## 參考文件

### 主要規格文件

**`docs/twin-matrix-implementation-spec.md`** - 包含完整的：
- Hex Grid 座標系統圖
- 色彩系統定義
- 視覺設計規範
- Alex Mercer persona 詳細資料

### Spec 文件

1. **`requirements.md`** - 8 個需求，每個包含詳細的 acceptance criteria
2. **`design.md`** - 完整的架構設計、元件結構、資料流程
3. **`tasks.md`** - 實作任務清單（你現在要執行的）

## 開始實作

請按照 `tasks.md` 中的任務順序執行：

1. 更新 TwinMatrixCard 元件結構
2. 實作統計資訊顯示區域
3. 實作智能 8x8 Grid 顯示
4. 實作四個維度的進度顯示
5. 添加導航功能
6. 更新 Dashboard 頁面整合
7. 響應式設計和樣式優化
8. 測試和驗證

## 成功標準

完成後，Twin Matrix Card 應該：

- 顯示完整的統計資訊（92/256, 36%, 57%, 78.3）
- 8x8 Grid 以 trait '14' 為中心正確顯示
- 格子顏色正確（藍綠紫橘 + 灰色）
- Hover 效果和 Tooltip 正常工作
- 四個維度的進度條正確顯示
- 響應式設計和 Dark Mode 正常
- 可以導航到 /user/matrix 頁面

## 問題排查

如果遇到問題：

1. 檢查 Mock Data 是否正確導入
2. 檢查 CSS 變數是否正確使用
3. 檢查 `getDisplayRange()` 返回的 traits 數量（應該是 64）
4. 參考 `docs/twin-matrix-implementation-spec.md` 的詳細說明

---

**準備好了嗎？開始實作吧！** 🚀
