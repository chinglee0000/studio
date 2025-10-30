# Navigation 元件分析

## 📊 目前狀況

### ✅ 已使用共用元件

| 元件 | 位置 | 狀態 |
|------|------|------|
| Sidebar | `src/components/ui/sidebar.tsx` | ✅ 共用元件 |
| Button | `src/components/ui/button.tsx` | ✅ 共用元件 |
| DropdownMenu | `src/components/ui/dropdown-menu.tsx` | ✅ 共用元件 |
| Avatar | `src/components/ui/avatar.tsx` | ✅ 共用元件 |

### ⚠️ 應該改為共用元件

| 元件 | 目前位置 | 建議位置 | 原因 |
|------|---------|---------|------|
| BottomNav | `src/app/components/` | `src/components/shared/` | 可在其他地方重用 |
| UserNav | `src/app/components/` | `src/components/shared/` | 可在其他地方重用 |
| ModeToggle | `src/app/components/` | `src/components/shared/` | 可在其他地方重用 |

## 🎯 建議改進

### 1. 移動到共用元件目錄

將這些元件移到 `src/components/shared/` 以便在整個專案中重用：

```
src/components/shared/
├── bottom-nav.tsx      (從 src/app/components/ 移過來)
├── user-nav.tsx        (從 src/app/components/ 移過來)
├── mode-toggle.tsx     (從 src/app/components/ 移過來)
├── page-header.tsx     (已存在)
├── empty-state.tsx     (已存在)
└── ...
```

### 2. 統一 Navigation 元件

建立一個統一的 Navigation 系統：

#### Desktop Navigation (Sidebar)
- ✅ 已使用共用的 `Sidebar` 元件
- ✅ 使用 Material Design 風格
- ✅ 支援收合/展開

#### Mobile Navigation (BottomNav)
- ⚠️ 應該移到共用元件
- 建議加入 Material Design 風格
- 建議加入動畫效果

#### Header Navigation
- ⚠️ 目前直接寫在 layout 中
- 建議抽出為獨立元件

## 📝 目前的元件結構

### BottomNav (移動端導航)
```tsx
// src/app/components/bottom-nav.tsx
export function BottomNav({ children, className }) {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t bg-background">
      <div className="grid h-16 grid-cols-4">{children}</div>
    </nav>
  )
}

export function BottomNavItem({ children, href, isActive }) {
  return (
    <Link href={href} className={cn(
      "flex flex-col items-center justify-center gap-1 text-xs",
      isActive && "text-primary"
    )}>
      {children}
    </Link>
  )
}
```

**使用方式：**
```tsx
<BottomNav>
  {navItems.map((item) => (
    <BottomNavItem
      key={item.href}
      href={item.href}
      isActive={pathname.startsWith(item.href)}
    >
      <item.icon />
      <span>{item.label}</span>
    </BottomNavItem>
  ))}
</BottomNav>
```

### UserNav (使用者選單)
```tsx
// src/app/components/user-nav.tsx
export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="..." />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* 選單項目 */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### ModeToggle (主題切換)
```tsx
// src/app/components/mode-toggle.tsx
export function ModeToggle() {
  const { setTheme } = useTheme()
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## 🎨 Material Design 改進建議

### 1. BottomNav 加入 Material Design 風格

```tsx
// 建議的改進版本
export function BottomNavItem({ children, href, isActive }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center gap-1 text-xs",
        "transition-all relative",
        "hover:bg-primary/8 active:bg-primary/12",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
    >
      {/* Material Design 3 的 Active Indicator */}
      {isActive && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
      )}
      {children}
    </Link>
  )
}
```

### 2. 統一按鈕樣式

確保所有導航元件都使用統一的 Button 元件：

```tsx
// UserNav 和 ModeToggle 已經使用 Button 元件 ✅
<Button variant="ghost" size="icon">
  <Sun />
</Button>
```

### 3. 加入 Ripple 效果（選用）

可以考慮加入 Material Design 的 ripple 效果來增強互動體驗。

## 🔄 遷移步驟

### 步驟 1: 移動元件到共用目錄
```bash
# 移動檔案
mv src/app/components/bottom-nav.tsx src/components/shared/
mv src/app/components/user-nav.tsx src/components/shared/
mv src/app/components/mode-toggle.tsx src/components/shared/
```

### 步驟 2: 更新 import 路徑
```tsx
// 之前
import { BottomNav } from "../components/bottom-nav"

// 之後
import { BottomNav } from "@/components/shared"
```

### 步驟 3: 更新 shared/index.ts
```tsx
export { BottomNav, BottomNavItem } from "./bottom-nav"
export { UserNav } from "./user-nav"
export { ModeToggle } from "./mode-toggle"
export { PageHeader } from "./page-header"
export { EmptyState } from "./empty-state"
// ... 其他共用元件
```

## ✅ 優點

移動到共用元件後的好處：

1. **可重用性** - 可以在其他 layout 中使用
2. **一致性** - 統一的導航體驗
3. **易維護** - 修改一個地方，全部更新
4. **更好的組織** - 清楚的檔案結構

## 📋 檢查清單

- [x] Sidebar 使用共用元件
- [x] Button 使用共用元件
- [x] DropdownMenu 使用共用元件
- [x] Avatar 使用共用元件
- [ ] BottomNav 移到共用元件
- [ ] UserNav 移到共用元件
- [ ] ModeToggle 移到共用元件
- [ ] 加入 Material Design 風格到 BottomNav
- [ ] 統一所有導航元件的樣式

## 🎯 總結

**目前狀況：**
- ✅ 大部分 UI 元件（Sidebar, Button, DropdownMenu）已經是共用的
- ⚠️ 導航相關的業務元件（BottomNav, UserNav, ModeToggle）還在 `src/app/components/`

**建議：**
- 將 BottomNav, UserNav, ModeToggle 移到 `src/components/shared/`
- 加入 Material Design 3 風格
- 統一所有導航元件的樣式和行為

這樣可以確保整個專案的導航系統都是統一且可重用的！
