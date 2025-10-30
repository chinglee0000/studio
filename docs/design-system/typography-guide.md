# 字體系統指南

## 🎨 字體配置

專案使用 Google Fonts 的三種字體：

### 1. Kanit（標題字體）
- **用途**: 所有標題（h1-h6）
- **特點**: 現代、清晰、具有泰式風格
- **權重**: 100-900（支援所有粗細）
- **支援斜體**: 是

### 2. Montserrat（內文字體）
- **用途**: 內文、按鈕、一般文字
- **特點**: 幾何、現代、易讀
- **權重**: 100-900（可變字體）
- **支援斜體**: 是

### 3. Sansation（備用）
- **用途**: 特殊用途（目前未使用）
- **權重**: 300, 400, 700
- **支援斜體**: 是

## 📝 使用方式

### 自動應用
字體會自動應用到對應的元素：

```tsx
// 標題自動使用 Kanit
<h1>Dashboard</h1>
<h2>Quest Details</h2>

// 內文自動使用 Montserrat
<p>This is body text</p>
<Button>Click me</Button>
```

### 手動指定字體

使用 Tailwind 的 font-family 類別：

```tsx
// 使用 Kanit（標題字體）
<div className="font-headline">Kanit Font</div>
<div className="font-display">Kanit Font</div>

// 使用 Montserrat（內文字體）
<div className="font-body">Montserrat Font</div>
<div className="font-sans">Montserrat Font</div>

// 使用等寬字體（程式碼）
<code className="font-code">Code Font</code>
```

## 🎯 字重（Font Weight）

### Kanit 標題建議字重
```tsx
<h1 className="font-semibold">主標題 (600)</h1>
<h2 className="font-medium">次標題 (500)</h2>
<h3 className="font-medium">小標題 (500)</h3>
```

### Montserrat 內文建議字重
```tsx
<p className="font-normal">一般文字 (400)</p>
<p className="font-medium">強調文字 (500)</p>
<p className="font-semibold">重要文字 (600)</p>
<p className="font-bold">非常重要 (700)</p>
```

## 📐 字體大小建議

### 標題尺寸
```tsx
<h1 className="text-3xl">Dashboard</h1>        // 30px
<h2 className="text-2xl">Section Title</h2>    // 24px
<h3 className="text-xl">Subsection</h3>        // 20px
<h4 className="text-lg">Card Title</h4>        // 18px
```

### 內文尺寸
```tsx
<p className="text-base">Normal text</p>       // 16px
<p className="text-sm">Small text</p>          // 14px
<p className="text-xs">Extra small</p>         // 12px
```

## 🎨 完整範例

### 頁面標題
```tsx
<div className="space-y-2">
  <h1 className="text-3xl font-semibold">Dashboard</h1>
  <p className="text-muted-foreground">Manage your quests and track submissions</p>
</div>
```

### Card 標題
```tsx
<Card>
  <CardHeader>
    <CardTitle className="text-xl font-semibold">Quest Details</CardTitle>
    <CardDescription className="text-sm">Configure your quest settings</CardDescription>
  </CardHeader>
</Card>
```

### 按鈕文字
```tsx
<Button variant="filled" className="font-medium">
  Create Quest
</Button>
```

## 🔧 技術細節

### CSS 變數
字體透過 Tailwind 配置定義：

```typescript
fontFamily: {
  sans: ['Montserrat', 'sans-serif'],      // 預設字體
  body: ['Montserrat', 'sans-serif'],      // 內文字體
  headline: ['Kanit', 'sans-serif'],       // 標題字體
  display: ['Kanit', 'sans-serif'],        // 展示字體
  code: ['monospace'],                     // 程式碼字體
}
```

### Google Fonts 載入
字體從 Google Fonts CDN 載入：

```css
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
```

## 🌐 語言支援

### Kanit
- ✅ 拉丁字母
- ✅ 泰文
- ✅ 數字和符號

### Montserrat
- ✅ 拉丁字母（擴展）
- ✅ 西里爾字母
- ✅ 越南文
- ✅ 數字和符號

## 💡 最佳實踐

### ✅ 建議
- 標題使用 Kanit，保持 font-semibold 或 font-medium
- 內文使用 Montserrat，保持 font-normal
- 重要資訊可以使用 font-medium 或 font-semibold
- 保持一致的字重層級

### ❌ 避免
- 不要在同一個元素混用多種字體
- 避免使用過多不同的字重
- 不要讓標題使用內文字體
- 避免字體大小跳躍太大

## 🎯 字體層級系統

```
標題層級（Kanit）:
├─ h1: text-3xl font-semibold (30px, 600)
├─ h2: text-2xl font-semibold (24px, 600)
├─ h3: text-xl font-medium (20px, 500)
└─ h4: text-lg font-medium (18px, 500)

內文層級（Montserrat）:
├─ 一般文字: text-base font-normal (16px, 400)
├─ 小文字: text-sm font-normal (14px, 400)
├─ 極小文字: text-xs font-normal (12px, 400)
└─ 強調文字: text-base font-medium (16px, 500)
```

## 🔍 檢查字體載入

在瀏覽器開發者工具中：
1. 打開 Network 標籤
2. 篩選 "Font"
3. 應該看到 Kanit 和 Montserrat 字體檔案載入

或在 Console 執行：
```javascript
document.fonts.check('1em Kanit')      // 檢查 Kanit
document.fonts.check('1em Montserrat') // 檢查 Montserrat
```

## 📱 響應式字體

在不同螢幕尺寸使用不同字體大小：

```tsx
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Responsive Heading
</h1>
```

## 🎉 總結

- ✅ **Kanit** 用於所有標題 - 現代、清晰
- ✅ **Montserrat** 用於內文 - 易讀、專業
- ✅ 自動應用到對應元素
- ✅ 支援完整的字重範圍
- ✅ 支援斜體
- ✅ 從 Google Fonts CDN 載入
