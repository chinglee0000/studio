# Button Variants 說明

## 🎯 設計理念

為了保持**向後兼容**並採用 **Material Design 3** 標準，Button 元件現在支援兩套命名：

### 原本的 Variants（保持不變）
這些是專案原本使用的 variant 名稱，**顏色和行為完全保持不變**：

| Variant | 說明 | 樣式 |
|---------|------|------|
| `default` | 主要操作按鈕 | 藍色實心，圓角 |
| `secondary` | 次要操作按鈕 | 灰色實心，圓角 |
| `outline` | 邊框按鈕 | 透明背景，邊框 |
| `ghost` | 幽靈按鈕 | 透明背景，懸停顯示 |
| `link` | 連結樣式 | 文字加底線 |
| `destructive` | 危險操作 | 紅色實心 |

### Material Design 3 Variants（新增）
這些是 Material Design 3 的標準命名，**指向相同的樣式**：

| MD3 Variant | 對應原本的 | 說明 |
|-------------|-----------|------|
| `filled` | `default` | 主要操作（Filled Button）|
| `tonal` | `secondary` | 次要操作（Filled Tonal Button）|
| `outlined` | `outline` | 中等強調（Outlined Button）|
| `text` | `ghost` | 低強調（Text Button）|
| `elevated` | 新增 | 需要分離的操作（Elevated Button）|
| `fab` | 新增 | 浮動操作按鈕（FAB）|

## 💡 使用方式

### 兩種寫法都可以，效果完全相同：

```tsx
// 使用原本的命名
<Button variant="default">Save</Button>
<Button variant="secondary">Edit</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Skip</Button>

// 使用 Material Design 3 命名（推薦）
<Button variant="filled">Save</Button>
<Button variant="tonal">Edit</Button>
<Button variant="outlined">Cancel</Button>
<Button variant="text">Skip</Button>
```

## ✨ 主要改進

### 1. 統一的共用元件
- ✅ 所有按鈕都使用 `<Button>` 元件
- ✅ 修改 `src/components/ui/button.tsx` 會影響所有按鈕
- ✅ 不需要在每個地方重複寫樣式

### 2. Material Design 3 形狀
- ✅ 按鈕改用 `rounded-full`（膠囊形狀）
- ✅ FAB 使用 `rounded-2xl`
- ✅ 符合 Google Material Design 3 規範

### 3. 保持原本顏色
- ✅ Primary 藍色保持不變
- ✅ Secondary 灰色保持不變
- ✅ Destructive 紅色保持不變
- ✅ 所有顏色變數都恢復原本的值

### 4. 改進的圖示處理
- ✅ 圖示自動調整為 18px
- ✅ 不需要手動設定 `className`
- ✅ 間距自動處理

## 📋 遷移建議

### 選項 1：保持原本的命名（最簡單）
如果你不想改任何程式碼，完全沒問題！原本的 `variant="default"` 等都還能用。

### 選項 2：逐步遷移到 Material Design 3 命名（推薦）
當你編輯某個檔案時，可以順便更新：
- `default` → `filled`
- `secondary` → `tonal`
- `outline` → `outlined`
- `ghost` → `text`

這樣做的好處：
- 更符合業界標準（Google Material Design）
- 語意更清楚（filled 比 default 更明確）
- 未來更容易維護

## 🎨 視覺變化

唯一的視覺變化是**形狀**：
- **之前**：`rounded-md`（小圓角）
- **現在**：`rounded-full`（膠囊形狀）

這是 Material Design 3 的標準形狀，讓按鈕看起來更現代。

## 📝 範例對照

### 之前的寫法（仍然有效）
```tsx
<Button variant="default" className="h-10 px-4">
  <Plus className="h-4 w-4 mr-2" />
  Create Quest
</Button>
```

### 現在推薦的寫法
```tsx
<Button variant="filled">
  <Plus />
  Create Quest
</Button>
```

改進：
- ✅ 不需要手動設定高度和 padding
- ✅ 圖示自動調整尺寸
- ✅ 間距自動處理
- ✅ 程式碼更簡潔

## 🔍 檢查你的專案

已更新使用新 variants 的檔案：
- ✅ `src/app/business/dashboard/page.tsx`
- ✅ `src/app/business/layout.tsx`
- ✅ `src/app/business/components-demo/page.tsx`
- ✅ `src/app/business/quests/new/configure/page.tsx`
- ✅ `src/app/business/quests/new/review/page.tsx`

其他檔案可以：
- 保持原樣（使用 `default`, `secondary` 等）
- 或逐步更新為 Material Design 3 命名

## 🎉 總結

- ✅ **顏色完全不變** - 保持原本的藍色、灰色、紅色
- ✅ **向後兼容** - 原本的 variant 名稱都還能用
- ✅ **統一元件** - 所有按鈕都用同一個 Button 元件
- ✅ **Material Design 3** - 採用 Google 的設計標準
- ✅ **更易維護** - 修改一個地方，全部更新

現在你可以放心使用，顏色不會跑掉，而且所有按鈕都是統一管理的！
