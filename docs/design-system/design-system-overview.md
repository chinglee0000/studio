# 設計系統文件

## 顏色系統
使用 Tailwind CSS 的主題變數，定義在 `globals.css` 中：
- `primary`: 主要品牌色
- `secondary`: 次要色
- `destructive`: 危險/刪除操作
- `muted`: 柔和背景色
- `accent`: 強調色

## 元件 Variants

### Button Variants
- `default`: 主要操作按鈕（實心、品牌色）
- `destructive`: 危險操作（刪除、取消等）
- `outline`: 次要操作（邊框樣式）
- `secondary`: 輔助操作
- `ghost`: 最低視覺權重的操作
- `link`: 文字連結樣式

### Button Sizes
- `default`: 標準尺寸 (h-10)
- `sm`: 小尺寸 (h-9)
- `lg`: 大尺寸 (h-11)
- `icon`: 圖示按鈕 (h-10 w-10)

## 使用原則
1. 主要操作使用 `default` variant
2. 次要操作使用 `outline` 或 `secondary`
3. 危險操作使用 `destructive`
4. 保持一致的間距和尺寸
