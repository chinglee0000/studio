# 文件清理分析報告

## 目前狀況

### 設計系統相關文件（重複/分散）

1. **`src/lib/constants/design-tokens.ts`**
   - 內容：Typography, Spacing, Component Sizes, Filter Standards, Quest Row Standards
   - 使用情況：僅在文檔中被引用，實際程式碼中**未使用**
   - 建議：**保留**（作為向後兼容層，未來會重構）

2. **`src/lib/styles/design-tokens.ts`**
   - 內容：Interactive States, Card Styles, List Item Styles, Button Styles, Spacing, Typography
   - 使用情況：
     - `listItemStyles` - 被 `notifications.tsx` 使用 ✅
     - `interactiveStates` - 僅在文檔中被引用
   - 建議：**保留**（有實際使用，未來會重構）

3. **`src/lib/constants/quest-design-system.ts`**
   - 內容：Quest Type 視覺設計（圖示、顏色）
   - 使用情況：
     - 被 `quest-type-icon.tsx` 使用 ✅
     - 被 `quest-icons.tsx` 使用（deprecated 文件）
   - 建議：**保留**（有實際使用，未來會重構）

### 已廢棄的文件

4. **`src/lib/utils/quest-icons.tsx`** ⚠️
   - 狀態：已標記為 @deprecated
   - 內容：`questIconMap`, `getQuestIcon()` - 只是 quest-design-system 的包裝
   - 使用情況：**無實際程式碼使用**（只在文檔中被引用）
   - 建議：**可以刪除**

### 文檔文件

5. **`src/lib/styles/README.md`**
   - 內容：Design Tokens 使用指南
   - 建議：**保留**（有用的文檔）

6. **`docs/` 下的各種文檔**
   - 建議：**保留**（歷史記錄和參考）

## 清理建議

### 🗑️ 可以刪除的文件

1. **`src/lib/utils/quest-icons.tsx`**
   - 原因：已 deprecated，無實際使用，只是包裝層
   - 影響：無（沒有程式碼依賴）
   - 遷移：已經遷移到 `quest-design-system.ts`

### 📦 可以合併的文件

目前**不建議立即合併**，原因：
- 我們即將實作新的設計系統（`.kiro/specs/design-system-standardization/`）
- 新設計系統會統一整合這些文件
- 現在合併會造成重複工作

建議：**等新設計系統實作完成後，這些文件會自動被整合**

### ✅ 需要保留的文件

1. **`src/lib/constants/design-tokens.ts`** - 未來作為向後兼容層
2. **`src/lib/styles/design-tokens.ts`** - 有實際使用（notifications.tsx）
3. **`src/lib/constants/quest-design-system.ts`** - 有實際使用（quest-type-icon.tsx）
4. **`src/lib/styles/README.md`** - 有用的文檔

## 清理步驟

### Step 1: 刪除 deprecated 文件

```bash
# 刪除已廢棄的 quest-icons.tsx
rm src/lib/utils/quest-icons.tsx
```

### Step 2: 更新文檔引用（可選）

如果想要保持文檔準確性，可以更新以下文檔：
- `docs/quest-type-icon-unification-complete.md`
- `docs/design-system/quest-types.md`
- `docs/standardization-phase1-complete.md`

但這些是歷史文檔，可以保留原樣作為記錄。

### Step 3: 驗證沒有破壞

```bash
# 檢查 TypeScript 編譯
npm run build

# 或
pnpm build
```

## 未來規劃

根據 `.kiro/specs/design-system-standardization/` 的規劃：

### 新的文件結構
```
src/lib/design-system/
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── sizing.ts
├── variants/
│   ├── button.ts
│   ├── card.ts
│   └── badge.ts
├── utils/
│   └── cn.ts
├── presets/
│   ├── typography.ts
│   ├── layout.ts
│   └── quest.ts
└── index.ts
```

### 舊文件的未來
實作新設計系統後：
1. `src/lib/constants/design-tokens.ts` → 重新導出新系統
2. `src/lib/styles/design-tokens.ts` → 重新導出新系統
3. `src/lib/constants/quest-design-system.ts` → 遷移到 `presets/quest.ts`

## 總結

### 立即行動
- ✅ 刪除 `src/lib/utils/quest-icons.tsx`（已 deprecated，無使用）

### 暫緩行動
- ⏸️ 不要合併現有的 design token 文件
- ⏸️ 等待新設計系統實作完成

### 原因
- 新設計系統會統一整合所有設計相關文件
- 現在合併會造成重複工作
- 保持現狀直到新系統就緒，然後一次性遷移

## 風險評估

### 刪除 quest-icons.tsx 的風險
- **風險等級**：極低 ⭐
- **原因**：
  - 已標記為 deprecated
  - 無實際程式碼依賴
  - 只是包裝層，功能已在 quest-design-system.ts
- **驗證方法**：TypeScript 編譯 + 搜尋引用

### 不立即合併的風險
- **風險等級**：無 ✅
- **原因**：
  - 現有文件都有明確用途
  - 新設計系統會處理整合
  - 保持現狀不會造成問題
