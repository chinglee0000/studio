# Button 快速參考

## 🎯 何時使用哪個 Variant

### Filled (主要操作)
```tsx
<Button variant="filled">Save</Button>
<Button variant="filled">Create Quest</Button>
<Button variant="filled">Submit</Button>
```
✅ 用於：頁面最重要的操作
❌ 避免：一個區域有多個 filled 按鈕

### Tonal (次要操作)
```tsx
<Button variant="tonal">Edit</Button>
<Button variant="tonal">Ask AI to Edit</Button>
<Button variant="tonal">Duplicate</Button>
```
✅ 用於：重要但不是主要的操作
❌ 避免：與 filled 按鈕混淆

### Outlined (中等強調)
```tsx
<Button variant="outlined">Cancel</Button>
<Button variant="outlined">Back to Dashboard</Button>
<Button variant="outlined">Filter</Button>
```
✅ 用於：取消、返回、篩選等操作
❌ 避免：用於主要操作

### Text (低強調)
```tsx
<Button variant="text">Skip</Button>
<Button variant="text">Learn More</Button>
<Button variant="text">Cancel</Button>
```
✅ 用於：最低優先級的操作、返回按鈕
❌ 避免：用於重要操作

### Elevated (需要分離)
```tsx
<Button variant="elevated">View Details</Button>
```
✅ 用於：在圖片或複雜背景上
❌ 避免：在普通背景上過度使用

### FAB (浮動操作)
```tsx
<Button variant="fab" size="fab">
  <Plus />
</Button>
```
✅ 用於：頁面的主要浮動操作
❌ 避免：多個 FAB 在同一頁面

### Destructive (危險操作)
```tsx
<Button variant="destructive">Delete</Button>
<Button variant="destructive">Remove</Button>
```
✅ 用於：刪除、移除等危險操作
❌ 避免：用於普通操作

## 📏 Sizes

```tsx
<Button size="sm">Small</Button>        // h-9
<Button size="default">Default</Button> // h-10
<Button size="lg">Large</Button>        // h-14
<Button size="icon">Icon</Button>       // h-10 w-10
<Button size="fab">FAB</Button>         // h-14 w-14
```

## 🎨 常見組合

### 表單操作
```tsx
<div className="flex gap-2">
  <Button variant="filled">Save</Button>
  <Button variant="outlined">Cancel</Button>
</div>
```

### 對話框
```tsx
<DialogFooter>
  <Button variant="text">Cancel</Button>
  <Button variant="filled">Confirm</Button>
</DialogFooter>
```

### 頁面標題
```tsx
<PageHeader
  title="Dashboard"
  action={
    <Button variant="filled" size="lg">
      <Plus />
      Create Quest
    </Button>
  }
/>
```

### 返回按鈕
```tsx
<Button variant="text" size="icon" asChild>
  <Link href="/back">
    <ArrowLeft />
  </Link>
</Button>
```

### 帶圖示的按鈕
```tsx
<Button variant="filled">
  <Plus />
  Create
</Button>
```
注意：圖示會自動調整為 18px，不需要手動設定 className

## ⚠️ 常見錯誤

### ❌ 錯誤
```tsx
// 圖示尺寸不需要手動設定
<Button>
  <Plus className="h-5 w-5 mr-2" />
  Create
</Button>

// 不要使用舊的 variant 名稱
<Button variant="default">Save</Button>
<Button variant="secondary">Edit</Button>
<Button variant="ghost">Cancel</Button>
```

### ✅ 正確
```tsx
// 圖示會自動處理
<Button variant="filled">
  <Plus />
  Create
</Button>

// 使用新的 Material Design variant
<Button variant="filled">Save</Button>
<Button variant="tonal">Edit</Button>
<Button variant="text">Cancel</Button>
```

## 🔍 檢查清單

在提交程式碼前檢查：
- [ ] 所有按鈕都使用 `<Button>` 元件
- [ ] 使用正確的 Material Design variant
- [ ] 圖示沒有手動設定尺寸
- [ ] 視覺層級清晰（一個主要操作）
- [ ] 在深色和淺色模式下都測試過
