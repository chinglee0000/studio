/**
 * Design Tokens - 統一的樣式常數
 * 
 * 這個文件定義了整個應用程式的設計 tokens，
 * 確保所有元件使用一致的樣式。
 */

/**
 * Interactive States - 互動狀態樣式
 */
export const interactiveStates = {
  // Hover 狀態 - 所有可點擊元素的 hover 效果
  hover: 'hover:bg-muted',
  
  // Active/Selected 狀態
  active: 'bg-muted text-primary',
  
  // Focus 狀態
  focus: 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  
  // Disabled 狀態
  disabled: 'disabled:pointer-events-none disabled:opacity-50',
} as const

/**
 * Card Styles - 卡片樣式
 */
export const cardStyles = {
  // 白色背景卡片（用於 light mode）
  white: 'bg-white dark:bg-card',
  
  // 標準卡片
  default: 'bg-card',
  
  // 帶邊框的卡片
  outlined: 'border bg-card',
} as const

/**
 * List Item Styles - 列表項目樣式
 */
export const listItemStyles = {
  // 標準列表項目
  default: `flex items-center gap-4 rounded-lg p-3 transition-colors ${interactiveStates.hover}`,
  
  // 通知項目
  notification: `flex flex-col items-start p-3 cursor-pointer transition-colors ${interactiveStates.hover}`,
  
  // 未讀通知項目（有背景色）
  notificationUnread: `flex flex-col items-start p-3 cursor-pointer transition-colors bg-muted/30 ${interactiveStates.hover}`,
} as const

/**
 * Button Styles - 按鈕樣式
 */
export const buttonStyles = {
  // 主要按鈕
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  
  // 次要按鈕
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  
  // Ghost 按鈕（統一使用 muted hover）
  ghost: 'hover:bg-muted hover:text-foreground',
  
  // Outline 按鈕（統一使用 muted hover）
  outline: 'border border-input bg-background hover:bg-muted hover:text-foreground',
  
  // 連結樣式按鈕
  link: 'text-primary underline-offset-4 hover:underline',
} as const

/**
 * Spacing - 間距
 */
export const spacing = {
  // 卡片內部間距
  cardPadding: 'p-6',
  
  // 列表項目間距
  listGap: 'space-y-2',
  
  // Section 間距
  sectionGap: 'space-y-4',
} as const

/**
 * Typography - 字體樣式
 */
export const typography = {
  // 標題
  h1: 'text-2xl font-semibold',
  h2: 'text-xl font-semibold',
  h3: 'text-lg font-semibold',
  
  // 正文
  body: 'text-sm font-normal',
  bodyMuted: 'text-sm font-normal text-muted-foreground',
  
  // 小字
  caption: 'text-xs font-normal text-muted-foreground',
  
  // 標籤
  label: 'text-xs font-medium',
} as const

/**
 * Helper function - 組合多個樣式類別
 */
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ')
}
