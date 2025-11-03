# Implementation Plan

## Overview

本實作計畫將完整實作 Twin Matrix Card 元件，包含智能 8x8 Grid 顯示、完整統計資訊、四個維度的進度條，以及響應式設計。所有 Mock Data 已準備好在 `src/lib/mock-data/twin-matrix-persona.ts`。

## Tasks

- [x] 1. 更新 TwinMatrixCard 元件結構
  - 更新 props 接受完整的 `TwinMatrixData` 類型
  - 添加必要的 imports (Tooltip, Progress, Link 等)
  - 設置基本的 Card 結構
  - _Requirements: 1.1, 1.5, 8.1_

- [x] 2. 實作統計資訊顯示區域
  - [x] 2.1 添加 Traits Discovered 描述
    - 在 CardDescription 顯示 "X / 256 Traits Discovered"
    - 使用正確的字體樣式 (`text-sm font-normal`)
    - _Requirements: 1.1, 8.2_

  - [x] 2.2 實作 Journey Progress 區域
    - 添加 label 和百分比顯示
    - 添加 Progress 元件
    - 設置正確的樣式和間距
    - _Requirements: 1.2, 8.2_

  - [x] 2.3 添加 Avg Strength 和 Humanity Index
    - 創建橫向排列的統計行
    - 使用正確的字體樣式 (`text-xs text-muted-foreground`)
    - _Requirements: 1.3, 8.2_

- [x] 3. 實作智能 8x8 Grid 顯示
  - [x] 3.1 整合 getDisplayRange 函數
    - 從 `twin-matrix-persona.ts` 導入 `getDisplayRange`
    - 使用 `recentlyUnlockedTrait` 計算顯示範圍
    - 處理無 recent trait 的情況（默認左上角）
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 8.7_

  - [x] 3.2 渲染 8x8 Grid
    - 創建 `grid grid-cols-8 gap-1` 容器
    - 遍歷 displayTraits 渲染 64 個格子
    - 設置格子尺寸 (`aspect-square`)
    - _Requirements: 2.1, 2.5_

  - [x] 3.3 實作格子顏色邏輯
    - 從 `twin-matrix-persona.ts` 導入 `getTraitColor`
    - 根據 discovered 狀態設置 opacity
    - 已解鎖: opacity 1, 未解鎖: opacity 0.3
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [x] 3.4 添加 Hover 效果和 Tooltip
    - 添加 `hover:scale-110` 和 `transition-all`
    - 整合 Tooltip 元件顯示詳細資訊
    - Tooltip 內容: Hex ID, 維度, 強度/locked 狀態
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 4. 實作四個維度的進度顯示
  - [x] 4.1 創建維度列表佈局
    - 設置 Grid/Dimensions 的橫向排列
    - Grid 在左側，Dimensions 在右側
    - 使用適當的間距
    - _Requirements: 4.1_

  - [x] 4.2 渲染每個維度的資訊
    - 遍歷 `data.dimensions` 渲染四個維度
    - 顯示維度名稱（capitalize）
    - 顯示 "X/64 traits" 格式
    - 顯示百分比
    - _Requirements: 4.1, 4.2, 4.3, 8.3, 8.4, 8.5, 8.6_

  - [x] 4.3 添加維度進度條
    - 為每個維度添加 Progress 元件
    - 設置高度 `h-1.5`
    - 傳入正確的 percentage 值
    - _Requirements: 4.4, 4.5_

- [x] 5. 添加導航功能
  - [x] 5.1 創建 Explore Button
    - 使用 Next.js Link 元件
    - 導航到 `/user/matrix`
    - 添加 "Explore Your Matrix" 文字
    - 添加向右箭頭圖示 (ArrowRight from lucide-react)
    - _Requirements: 7.1, 7.2, 7.3_

  - [x] 5.2 設置按鈕樣式
    - 使用 Button variant 或自定義樣式
    - 添加 hover 效果
    - 符合設計規範
    - _Requirements: 7.4, 7.5_

- [x] 6. 更新 Dashboard 頁面整合
  - [x] 6.1 更新 Mock Data 導入
    - 在 `src/lib/mock-data/dashboard.ts` 導入 `web3EngineerMatrixData`
    - 更新或創建 `mockMatrixData` export
    - _Requirements: 8.1_

  - [x] 6.2 更新 Dashboard 頁面
    - 確認 `src/app/user/dashboard/page.tsx` 使用正確的 data
    - 傳遞完整的 `web3EngineerMatrixData` 到 TwinMatrixCard
    - _Requirements: 8.1_

- [x] 7. 響應式設計和樣式優化
  - [x] 7.1 實作響應式佈局
    - 添加 breakpoint 相關的 Tailwind classes
    - 確保在不同螢幕尺寸下正常顯示
    - 測試 Desktop, Tablet, Mobile
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 7.2 優化間距和對齊
    - 檢查所有 section 的 spacing
    - 確保視覺層次清晰
    - 符合 Material Design 3 規範
    - _Requirements: 1.5_

  - [x] 7.3 驗證 Dark Mode 支援
    - 測試 Dark Mode 下的顏色顯示
    - 確保使用正確的 CSS 變數
    - 檢查對比度
    - _Requirements: 6.4, 6.5_

- [x] 8. 測試和驗證
  - [x] 8.1 功能測試
    - 驗證所有統計資訊正確顯示
    - 驗證 8x8 Grid 正確定位（以 trait '14' 為中心）
    - 驗證格子顏色正確
    - 驗證 Hover 和 Tooltip 正常工作
    - _Requirements: 1.4, 2.2, 3.1-3.6, 5.1-5.5_

  - [x] 8.2 視覺測試
    - 檢查響應式設計
    - 檢查 Dark/Light Mode
    - 檢查字體和間距
    - 對比設計規範
    - _Requirements: 6.1-6.5, 1.5_

  - [x] 8.3 互動測試
    - 測試導航功能
    - 測試 Hover 效果
    - 測試 Tooltip 顯示
    - _Requirements: 7.1-7.5, 5.1-5.5_

  - [x] 8.4 數據驗證
    - 確認顯示的數值與 Mock Data 一致
    - 92/256 traits, 36% progress
    - Physical: 21/64 (63%), Social: 26/64 (56%)
    - Digital: 21/64 (55%), Spiritual: 24/64 (54%)
    - _Requirements: 8.2-8.7_

## Success Criteria

完成後應該：
- ✅ 顯示 "92 / 256 Traits Discovered"
- ✅ 顯示 Journey Progress 進度條 (36%)
- ✅ 顯示 Avg Strength (57%) 和 Humanity Index (78.3)
- ✅ 8x8 Grid 以 trait '14' 為中心顯示（row 0-7, col 0-7）
- ✅ 格子顏色正確（Physical=藍, Social=綠, Digital=紫, Spiritual=橘）
- ✅ 未解鎖格子顯示灰色且半透明 (opacity 0.3)
- ✅ 每個維度顯示 "X/64 traits" 和百分比
- ✅ Hover 效果正常（放大 1.1x + Tooltip）
- ✅ 點擊按鈕導航到 /user/matrix
- ✅ 響應式設計正常
- ✅ Dark Mode 正常顯示

## Reference Files

- **Spec Document**: `docs/twin-matrix-implementation-spec.md`
- **Mock Data**: `src/lib/mock-data/twin-matrix-persona.ts`
- **Component**: `src/components/user/twin-matrix-card.tsx`
- **Dashboard**: `src/app/user/dashboard/page.tsx`
- **CSS Variables**: `src/app/globals.css`
- **Types**: `src/lib/mock-data/dashboard.ts`
