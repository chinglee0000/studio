# Requirements Document

## Introduction

本規格定義 Twin Matrix Card 元件的完整實作需求。Twin Matrix 是一個 16x16 的 Hex Grid 系統（256 個 traits），分為四個維度：Physical、Social、Digital、Spiritual。Dashboard 版本需要顯示智能定位的 8x8 子集，並展示完整的統計資訊。

所有 Mock Data 已準備好在 `src/lib/mock-data/twin-matrix-persona.ts`，基於 35 歲 Web3 工程師 Alex Mercer 的 persona，包含 92 個已解鎖的 traits。

## Glossary

- **Twin Matrix**: 16x16 Hex Grid 系統，共 256 個 DNA traits
- **Trait**: DNA 特質，用 Hex ID (00-FF) 標識
- **Dimension**: 四個維度 - Physical (00-3F)、Social (40-7F)、Digital (80-BF)、Spiritual (C0-FF)
- **Dashboard Card**: 顯示 8x8 智能定位子集的卡片元件
- **TwinMatrixCard**: React 元件名稱
- **Hex Grid**: 十六進制網格系統
- **Smart Positioning**: 根據最近解鎖的 trait 智能定位顯示範圍

## Requirements

### Requirement 1: 顯示完整統計資訊

**User Story:** 作為用戶，我想要在 Dashboard 上看到我的 Twin Matrix 完整統計資訊，以便了解我的整體成長進度

#### Acceptance Criteria

1. WHEN TwinMatrixCard 渲染時，THE Card SHALL 顯示 "X / 256 Traits Discovered" 在標題下方
2. WHEN TwinMatrixCard 渲染時，THE Card SHALL 顯示 Journey Progress 進度條和百分比
3. WHEN TwinMatrixCard 渲染時，THE Card SHALL 顯示 Avg Strength 和 Humanity Index 數值
4. WHEN 用戶查看統計資訊時，THE 數值 SHALL 與 `web3EngineerMatrixData` 中的資料一致
5. WHEN 統計資訊顯示時，THE 格式 SHALL 符合設計規範（字體大小、顏色、間距）

### Requirement 2: 實作智能 8x8 Grid 顯示

**User Story:** 作為用戶，我想要看到以我最近解鎖的 trait 為中心的 8x8 Grid，以便快速查看相關區域的進度

#### Acceptance Criteria

1. WHEN TwinMatrixCard 渲染時，THE Grid SHALL 顯示 8x8 格子（64 個 traits）
2. WHEN `recentlyUnlockedTrait` 存在時，THE Grid SHALL 以該 trait 為中心定位顯示範圍
3. WHEN 計算顯示範圍時，THE 系統 SHALL 確保不超出 16x16 邊界
4. WHEN `recentlyUnlockedTrait` 不存在時，THE Grid SHALL 默認顯示左上角 8x8 區域
5. WHEN Grid 顯示時，THE 格子 SHALL 按照正確的 row/col 順序排列

### Requirement 3: 正確顯示 Trait 顏色和狀態

**User Story:** 作為用戶，我想要通過顏色快速識別不同維度的 traits 和它們的解鎖狀態

#### Acceptance Criteria

1. WHEN trait 已解鎖且為 Physical 維度時，THE 格子 SHALL 顯示藍色 `hsl(var(--matrix-physical))`
2. WHEN trait 已解鎖且為 Social 維度時，THE 格子 SHALL 顯示綠色 `hsl(var(--matrix-social))`
3. WHEN trait 已解鎖且為 Digital 維度時，THE 格子 SHALL 顯示紫色 `hsl(var(--matrix-digital))`
4. WHEN trait 已解鎖且為 Spiritual 維度時，THE 格子 SHALL 顯示橘色 `hsl(var(--matrix-spiritual))`
5. WHEN trait 未解鎖時，THE 格子 SHALL 顯示灰色 `hsl(var(--matrix-undiscovered))` 且 opacity 為 0.3
6. WHEN trait 已解鎖時，THE 格子 SHALL 顯示 opacity 為 1

### Requirement 4: 顯示四個維度的詳細資訊

**User Story:** 作為用戶，我想要看到每個維度的詳細進度，包括已解鎖數量和平均強度

#### Acceptance Criteria

1. WHEN TwinMatrixCard 渲染時，THE Card SHALL 顯示四個維度的名稱（Physical、Social、Digital、Spiritual）
2. WHEN 顯示維度資訊時，THE Card SHALL 顯示 "X/64 traits" 格式的已解鎖數量
3. WHEN 顯示維度資訊時，THE Card SHALL 顯示平均強度百分比
4. WHEN 顯示維度資訊時，THE Card SHALL 顯示對應的進度條
5. WHEN 進度條顯示時，THE 進度條 SHALL 使用正確的顏色（根據維度）

### Requirement 5: 實作 Hover 互動效果

**User Story:** 作為用戶，我想要在 hover 格子時看到放大效果和詳細資訊

#### Acceptance Criteria

1. WHEN 用戶 hover 在格子上時，THE 格子 SHALL 放大至 1.1 倍
2. WHEN 用戶 hover 在格子上時，THE Tooltip SHALL 顯示 Hex ID
3. WHEN 用戶 hover 在格子上時，THE Tooltip SHALL 顯示維度名稱
4. WHEN trait 已解鎖時，THE Tooltip SHALL 顯示強度百分比
5. WHEN trait 未解鎖時，THE Tooltip SHALL 顯示 "locked" 狀態

### Requirement 6: 響應式設計和 Dark Mode 支援

**User Story:** 作為用戶，我想要在不同螢幕尺寸和主題下都能正常查看 Twin Matrix Card

#### Acceptance Criteria

1. WHEN 在桌面螢幕查看時，THE Card SHALL 正確顯示所有元素
2. WHEN 在平板螢幕查看時，THE Card SHALL 調整佈局以適應螢幕寬度
3. WHEN 在手機螢幕查看時，THE Card SHALL 調整佈局以適應螢幕寬度
4. WHEN 切換到 Dark Mode 時，THE 顏色 SHALL 使用 Dark Mode 的 CSS 變數
5. WHEN 切換到 Light Mode 時，THE 顏色 SHALL 使用 Light Mode 的 CSS 變數

### Requirement 7: 導航到完整 Matrix 頁面

**User Story:** 作為用戶，我想要點擊 Card 導航到完整的 Twin Matrix 頁面，以便查看所有 256 個 traits

#### Acceptance Criteria

1. WHEN Card 底部顯示時，THE Card SHALL 顯示 "Explore Your Matrix" 按鈕或連結
2. WHEN 用戶點擊按鈕時，THE 系統 SHALL 導航到 `/user/matrix` 頁面
3. WHEN 按鈕顯示時，THE 按鈕 SHALL 包含向右箭頭圖示
4. WHEN hover 在按鈕上時，THE 按鈕 SHALL 顯示 hover 效果
5. WHEN 按鈕顯示時，THE 按鈕樣式 SHALL 符合設計規範

### Requirement 8: 使用正確的 Mock Data

**User Story:** 作為開發者，我需要使用正確的 Mock Data 來測試元件功能

#### Acceptance Criteria

1. WHEN TwinMatrixCard 接收 data prop 時，THE data SHALL 來自 `web3EngineerMatrixData`
2. WHEN 顯示統計資訊時，THE 數值 SHALL 為：92/256 traits, 36% progress, 57% avg strength, 78.3 humanity index
3. WHEN 顯示維度資訊時，THE Physical SHALL 為 21/64 (63%)
4. WHEN 顯示維度資訊時，THE Social SHALL 為 26/64 (56%)
5. WHEN 顯示維度資訊時，THE Digital SHALL 為 21/64 (55%)
6. WHEN 顯示維度資訊時，THE Spiritual SHALL 為 24/64 (54%)
7. WHEN 顯示 Grid 時，THE 最近解鎖的 trait SHALL 為 '14' (Physical)
