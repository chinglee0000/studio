# Design Tokens 設計規範

本文件定義了整個應用程式的設計標準，確保視覺一致性。

## 📐 Typography (字體)

### Font Sizes
| Token | Class | Size | 用途 |
|-------|-------|------|------|
| xs | `text-xs` | 12px | 輔助文字 |
| sm | `text-sm` | 14px | 次要文字 |
| base | `text-base` | 16px | 主要文字 |
| lg | `text-lg` | 18px | 標題 |
| xl | `text-xl` | 20px | 大標題 |
| 2xl | `text-2xl` | 24px | 頁面標題 |
| **10pt** | `text-[10pt]` | 10pt | **Filter 按鈕文字** |
| **9pt** | `text-[9pt]` | 9pt | **Badge 數字** |

### Font Weights
- Normal: `font-normal` (400)
- Medium: `font-medium` (500)
- Semibold: `font-semibold` (600)
- Bold: `font-bold` (700)

## 📏 Spacing (間距)

### Icon to Text Spacing
| Token | Class | Size | 用途 |
|-------|-------|------|------|
| tight | `gap-0.5` | 2px | 非常緊湊 |
| **compact** | `gap-1` | **4px** | **標準間距（推薦）** |
| normal | `gap-2` | 8px | 正常間距 |
| relaxed | `gap-3` | 12px | 寬鬆間距 |

### Margin Spacing
| Token | Class | Size |
|-------|-------|------|
| xs | `ml-0.5` | 2px |
| sm | `ml-1` | 4px |
| md | `ml-1.5` | 6px |
| lg | `ml-2` | 8px |

## 🎨 Component Sizes (組件尺寸)

### Button Heights
- Small: `h-8` (32px) - Filter 按鈕
- Medium: `h-10` (40px) - 標準按鈕
- Large: `h-12` (48px) - 大按鈕

### Icon Sizes
- XS: `h-3 w-3` (12px) - ChevronDown
- SM: `h-3.5 w-3.5` (14px) - Status icons
- MD: `h-4 w-4` (16px)
- LG: `h-5 w-5` (20px)
- XL: `h-6 w-6` (24px) - Quest type icons

### Badge Sizes
- Small: `h-4 min-w-4 px-1` - Filter count
- Medium: `h-5 min-w-5 px-1.5` - Tab count

## 🔧 Component Standards (組件標準)

### Filter Button
```tsx
<Button className="h-8 text-[10pt]">
  Type
  <Badge className="ml-0.5 h-4 min-w-4 px-1 text-[9pt]">1</Badge>
  <ChevronDown className="ml-0.5 h-3 w-3" />
</Button>
```

**規範：**
- Height: `h-8` (32px)
- Font Size: `text-[10pt]`
- Element Spacing: `ml-0.5` (2px)
- ChevronDown Size: `h-3 w-3` (12px)

### Filter Badge
```tsx
<Badge variant="secondary" className="h-4 min-w-4 px-1 text-[9pt]">
  {count}
</Badge>
```

**規範：**
- Height: `h-4` (16px)
- Min Width: `min-w-4` (16px)
- Padding: `px-1` (4px)
- Font Size: `text-[9pt]`

### Dropdown Item
```tsx
<DropdownMenuItem className="text-[10pt]">
  <Icon className="h-3.5 w-3.5 mr-1" />
  <span>Label</span>
</DropdownMenuItem>
```

**規範：**
- Font Size: `text-[10pt]`
- Icon Size: `h-3.5 w-3.5` (14px)
- Icon Spacing: `mr-1` (4px)

### Quest Row
```tsx
<div className="flex items-center gap-4">
  <div className="h-12 w-12 rounded-lg">
    <Icon className="h-6 w-6" />
  </div>
  <h3 className="text-base font-semibold">{title}</h3>
  <div className="flex items-center gap-1">
    <Users className="h-3.5 w-3.5" />
    <span className="text-xs">{participants}</span>
  </div>
</div>
```

**規範：**
- Icon Container: `h-12 w-12 rounded-lg`
- Icon Size: `h-6 w-6` (24px)
- Title: `text-base font-semibold`
- Meta Icon: `h-3.5 w-3.5` (14px)
- Meta Text: `text-xs`
- Icon to Text: `gap-1` (4px)

## 📦 使用方式

### Import Design Tokens
```typescript
import {
  TYPOGRAPHY,
  SPACING,
  COMPONENT_SIZES,
  FILTER_STANDARDS,
  getFilterButtonClasses,
  getFilterBadgeClasses,
} from '@/lib/constants/design-tokens'
```

### 使用 Helper Functions
```tsx
// Filter Button
<Button className={getFilterButtonClasses()}>
  Type
</Button>

// Filter Badge
<Badge className={getFilterBadgeClasses()}>
  {count}
</Badge>
```

## ✅ Checklist

建立新組件時，請確認：

- [ ] 文字大小符合規範
- [ ] Icon 大小符合規範
- [ ] Icon 到 Text 間距為 4px (`gap-1` 或 `mr-1`)
- [ ] 按鈕高度符合規範
- [ ] Badge 樣式統一
- [ ] 使用 Design Tokens 而非硬編碼值

## 🎯 核心原則

1. **一致性優先**: 所有相同類型的組件必須使用相同的樣式
2. **4px 標準間距**: Icon 和 Text 之間統一使用 4px 間距
3. **10pt 標準文字**: Filter 相關組件統一使用 10pt 文字
4. **使用 Tokens**: 避免硬編碼，使用 Design Tokens
5. **文檔化**: 新增組件時更新此文檔

## 📝 維護

- 新增設計標準時，同時更新 `design-tokens.ts` 和此文檔
- 修改現有標準時，確保所有使用該標準的組件都更新
- 定期 review 確保一致性
