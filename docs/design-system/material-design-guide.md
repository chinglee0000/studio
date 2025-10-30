# Material Design 3 設計指南

本專案採用 Google Material Design 3 (Material You) 設計系統。

## 🎨 設計原則

Material Design 3 強調：
- **個人化**: 動態色彩和適應性設計
- **可訪問性**: 符合 WCAG 標準
- **表達性**: 更圓潤的形狀和更豐富的動畫
- **一致性**: 跨平台的統一體驗

## 🔘 Button 元件

### Variants（按優先級排序）

#### 1. Filled Button (filled)
- **用途**: 最重要的主要操作
- **範例**: "Create Quest"、"Submit"、"Save"
```tsx
<Button variant="filled">Create Quest</Button>
```

#### 2. Filled Tonal Button (tonal)
- **用途**: 次要但仍重要的操作
- **範例**: "Edit"、"Duplicate"
```tsx
<Button variant="tonal">Edit Quest</Button>
```

#### 3. Outlined Button (outlined)
- **用途**: 中等強調的操作
- **範例**: "Cancel"、"Back"、"Filter"
```tsx
<Button variant="outlined">Cancel</Button>
```

#### 4. Text Button (text)
- **用途**: 最低優先級的操作
- **範例**: "Learn More"、"Skip"
```tsx
<Button variant="text">Learn More</Button>
```

#### 5. Elevated Button (elevated)
- **用途**: 需要從背景中分離的操作
- **範例**: 在圖片或複雜背景上的按鈕
```tsx
<Button variant="elevated">View Details</Button>
```

#### 6. FAB (Floating Action Button)
- **用途**: 頁面的主要浮動操作
- **範例**: 新增、建立等主要操作
```tsx
<Button variant="fab" size="fab">
  <Plus />
</Button>
```

### Sizes
- `sm`: 小尺寸 (h-9)
- `default`: 標準尺寸 (h-10)
- `lg`: 大尺寸 (h-14)
- `icon`: 圖示按鈕 (h-10 w-10)
- `fab`: FAB 按鈕 (h-14 w-14)

### 使用建議

**每個頁面應該有明確的視覺層級：**
1. 一個主要操作 (filled)
2. 1-2 個次要操作 (tonal 或 outlined)
3. 其他低優先級操作 (text)

**範例：**
```tsx
<div className="flex gap-2">
  <Button variant="filled">Save Changes</Button>
  <Button variant="outlined">Cancel</Button>
  <Button variant="text">Reset to Default</Button>
</div>
```

## 🎴 Card 元件

Material Design 3 的 Card 特點：
- 圓角更大 (rounded-2xl)
- 使用 surface 顏色
- 懸停時有陰影變化
- 邊框使用 outline-variant

```tsx
<Card>
  <CardHeader>
    <CardTitle>標題</CardTitle>
    <CardDescription>描述文字</CardDescription>
  </CardHeader>
  <CardContent>
    內容
  </CardContent>
</Card>
```

## 🎨 顏色系統

### Light Mode
- **Primary**: 品牌主色 (藍色)
- **Secondary**: 次要色 (青色)
- **Tertiary**: 第三色 (紫色)
- **Surface**: 表面顏色
- **Outline**: 邊框顏色

### Dark Mode
- 自動調整為適合深色模式的色調
- Primary 變亮以提高對比度
- Surface 使用深色調

## 📐 間距和圓角

- **圓角**: 使用 `rounded-2xl` (12px) 作為主要圓角
- **按鈕**: 使用 `rounded-full` 實現膠囊形狀
- **間距**: 使用 Tailwind 的標準間距系統

## ♿ 可訪問性

- 所有按鈕都有適當的對比度
- 支援鍵盤導航
- 使用語義化的 HTML
- 提供適當的 focus 狀態

## 🔄 動畫和過渡

- 使用 `transition-all` 實現流暢過渡
- 懸停時有陰影和亮度變化
- 點擊時有視覺反饋

## 📱 響應式設計

- 在小螢幕上使用較小的按鈕尺寸
- FAB 在移動端固定在右下角
- Card 在移動端佔滿寬度

## 🚫 避免的做法

❌ 不要在同一個區域使用多個 filled 按鈕
❌ 不要混用舊的 variant 名稱 (default, secondary, ghost)
❌ 不要忽略視覺層級
❌ 不要使用過多的顏色變化

## ✅ 最佳實踐

✅ 保持一致的按鈕樣式
✅ 使用適當的 variant 表達操作優先級
✅ 在整個應用中使用相同的共用元件
✅ 遵循 Material Design 的間距指南
✅ 測試深色和淺色模式

## 📚 參考資源

- [Material Design 3 官方文件](https://m3.material.io/)
- [Material Design 按鈕指南](https://m3.material.io/components/buttons/overview)
- [Material Design 顏色系統](https://m3.material.io/styles/color/overview)
