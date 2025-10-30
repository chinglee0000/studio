# Material Design 3 遷移指南

## 🎯 目標

將專案中所有按鈕統一使用 Material Design 3 的共用 Button 元件。

## 📋 Button Variant 對照表

### 舊的 variants → 新的 Material Design 3 variants

| 舊名稱 | 新名稱 | 用途 |
|--------|--------|------|
| `default` | `filled` | 主要操作按鈕 |
| `secondary` | `tonal` | 次要操作按鈕 |
| `outline` | `outlined` | 中等強調操作 |
| `ghost` | `text` | 低強調操作 |
| `link` | `text` | 文字連結樣式 |
| `destructive` | `destructive` | 危險操作（保持不變）|
| - | `elevated` | 需要分離的操作（新增）|
| - | `fab` | 浮動操作按鈕（新增）|

## 🔄 遷移步驟

### 1. 搜尋所有 Button 使用

```bash
# 搜尋所有使用 Button 的檔案
grep -r "Button" src/app --include="*.tsx"
```

### 2. 更新 variant 名稱

**之前：**
```tsx
<Button variant="default">Submit</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="outline">Back</Button>
<Button variant="ghost">Skip</Button>
```

**之後：**
```tsx
<Button variant="filled">Submit</Button>
<Button variant="tonal">Cancel</Button>
<Button variant="outlined">Back</Button>
<Button variant="text">Skip</Button>
```

### 3. 移除不必要的 className

Material Design 3 的按鈕已經有完整的樣式，通常不需要額外的 className。

**之前：**
```tsx
<Button variant="default" className="h-14 w-14 rounded-full">
  <Plus className="h-6 w-6" />
</Button>
```

**之後：**
```tsx
<Button variant="fab" size="fab">
  <Plus />
</Button>
```

### 4. 統一圖示尺寸

Material Design 3 的按鈕會自動處理圖示尺寸（18px），不需要手動設定。

**之前：**
```tsx
<Button>
  <Plus className="h-5 w-5 mr-2" />
  Create
</Button>
```

**之後：**
```tsx
<Button variant="filled">
  <Plus />
  Create
</Button>
```

## 📝 檢查清單

- [ ] 更新所有 `variant="default"` → `variant="filled"`
- [ ] 更新所有 `variant="secondary"` → `variant="tonal"`
- [ ] 更新所有 `variant="outline"` → `variant="outlined"`
- [ ] 更新所有 `variant="ghost"` → `variant="text"`
- [ ] 移除圖示的手動尺寸設定
- [ ] 檢查按鈕的視覺層級是否正確
- [ ] 測試深色和淺色模式
- [ ] 測試響應式佈局

## 🎨 視覺層級建議

每個頁面應該有清晰的操作優先級：

```tsx
// ✅ 好的範例：清晰的視覺層級
<div className="flex gap-2">
  <Button variant="filled">Save</Button>      {/* 主要操作 */}
  <Button variant="outlined">Cancel</Button>  {/* 次要操作 */}
  <Button variant="text">Reset</Button>       {/* 低優先級 */}
</div>

// ❌ 不好的範例：多個主要操作
<div className="flex gap-2">
  <Button variant="filled">Save</Button>
  <Button variant="filled">Submit</Button>
  <Button variant="filled">Publish</Button>
</div>
```

## 🔍 需要檢查的檔案

根據專案結構，以下檔案可能需要更新：

- [x] `src/app/business/dashboard/page.tsx` ✅ 已更新
- [x] `src/app/business/layout.tsx` ✅ 已更新
- [x] `src/app/business/components-demo/page.tsx` ✅ 已更新
- [ ] `src/app/business/quests/new/ai-builder/` 目錄下的檔案
- [ ] `src/app/business/quests/new/configure/` 目錄下的檔案
- [ ] `src/app/business/quests/new/review/` 目錄下的檔案
- [ ] `src/app/components/` 目錄下的元件

## 🚀 下一步

1. 訪問 `http://localhost:9002/business/components-demo` 查看所有新的按鈕樣式
2. 閱讀 `src/components/MATERIAL_DESIGN_GUIDE.md` 了解完整的設計指南
3. 逐步更新專案中的其他頁面
4. 確保所有按鈕都使用共用的 Button 元件

## 💡 提示

- 使用 IDE 的搜尋和替換功能批量更新
- 一次更新一個頁面，並測試功能是否正常
- 如果不確定使用哪個 variant，參考 Material Design 指南
- 保持一致性比完美更重要
