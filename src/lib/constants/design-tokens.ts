/**
 * Design Tokens
 * 
 * 統一的設計規範，確保整個應用程式的視覺一致性
 */

/**
 * Typography
 */
export const TYPOGRAPHY = {
  // Font Sizes
  fontSize: {
    xs: 'text-xs',        // 12px - 輔助文字
    sm: 'text-sm',        // 14px - 次要文字
    base: 'text-base',    // 16px - 主要文字
    lg: 'text-lg',        // 18px - 標題
    xl: 'text-xl',        // 20px - 大標題
    '2xl': 'text-2xl',    // 24px - 頁面標題
    '10pt': 'text-[10pt]', // 10pt - Filter 按鈕
    '9pt': 'text-[9pt]',   // 9pt - Badge 數字
  },
  
  // Font Weights
  fontWeight: {
    normal: 'font-normal',     // 400
    medium: 'font-medium',     // 500
    semibold: 'font-semibold', // 600
    bold: 'font-bold',         // 700
  },
} as const

/**
 * Spacing
 */
export const SPACING = {
  // Icon to Text spacing
  iconText: {
    tight: 'gap-0.5',   // 2px - 非常緊湊
    compact: 'gap-1',   // 4px - 緊湊（標準）
    normal: 'gap-2',    // 8px - 正常
    relaxed: 'gap-3',   // 12px - 寬鬆
  },
  
  // Margin spacing
  margin: {
    xs: 'ml-0.5',  // 2px
    sm: 'ml-1',    // 4px
    md: 'ml-1.5',  // 6px
    lg: 'ml-2',    // 8px
  },
} as const

/**
 * Component Sizes
 */
export const COMPONENT_SIZES = {
  // Button heights
  button: {
    sm: 'h-8',   // 32px - Filter 按鈕
    md: 'h-10',  // 40px - 標準按鈕
    lg: 'h-12',  // 48px - 大按鈕
  },
  
  // Icon sizes
  icon: {
    xs: 'h-3 w-3',       // 12px - ChevronDown
    sm: 'h-3.5 w-3.5',   // 14px - Status icons
    md: 'h-4 w-4',       // 16px
    lg: 'h-5 w-5',       // 20px
    xl: 'h-6 w-6',       // 24px - Quest type icons
  },
  
  // Badge sizes
  badge: {
    sm: 'h-4 min-w-4 px-1',  // Filter count badge
    md: 'h-5 min-w-5 px-1.5', // Tab count badge
  },
} as const

/**
 * Filter Component Standards
 */
export const FILTER_STANDARDS = {
  // Filter Button
  button: {
    height: COMPONENT_SIZES.button.sm,
    fontSize: TYPOGRAPHY.fontSize['10pt'],
    iconSpacing: SPACING.margin.xs,      // 2px between elements
    chevronSize: COMPONENT_SIZES.icon.xs,
  },
  
  // Filter Badge
  badge: {
    size: COMPONENT_SIZES.badge.sm,
    fontSize: TYPOGRAPHY.fontSize['9pt'],
    spacing: SPACING.margin.xs,
  },
  
  // Dropdown Item
  dropdownItem: {
    fontSize: TYPOGRAPHY.fontSize['10pt'],
    iconSize: COMPONENT_SIZES.icon.sm,
    iconSpacing: SPACING.iconText.compact, // 4px
  },
} as const

/**
 * Quest Row Standards
 */
export const QUEST_ROW_STANDARDS = {
  // Icon
  icon: {
    size: 'h-12 w-12',
    borderRadius: 'rounded-lg',
  },
  
  // Title
  title: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: TYPOGRAPHY.fontWeight.semibold,
  },
  
  // Meta Info
  meta: {
    fontSize: TYPOGRAPHY.fontSize.xs,
    iconSize: COMPONENT_SIZES.icon.sm,
    iconSpacing: SPACING.iconText.compact,
  },
  
  // Progress Bar
  progress: {
    height: 'h-1.5',
  },
} as const

/**
 * Helper function to get filter button classes
 */
export function getFilterButtonClasses(): string {
  return `${FILTER_STANDARDS.button.height} ${FILTER_STANDARDS.button.fontSize}`
}

/**
 * Helper function to get filter badge classes
 */
export function getFilterBadgeClasses(): string {
  return `${FILTER_STANDARDS.badge.size} ${FILTER_STANDARDS.badge.fontSize}`
}

/**
 * Helper function to get dropdown item classes
 */
export function getDropdownItemClasses(): string {
  return FILTER_STANDARDS.dropdownItem.fontSize
}

/**
 * Helper function to get icon spacing
 */
export function getIconTextSpacing(): string {
  return SPACING.iconText.compact
}
