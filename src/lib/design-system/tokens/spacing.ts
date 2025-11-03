/**
 * Spacing Tokens
 * 
 * Consolidated spacing system for the application.
 * Includes gaps, margins, padding, and semantic spacing.
 */

/**
 * Foundation Spacing Scale
 * Based on Tailwind's spacing scale (4px base unit)
 */
export const spacingScale = {
  0: '0',
  px: '1px',
  0.5: '0.125rem', // 2px
  1: '0.25rem',    // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem',     // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem',    // 12px
  3.5: '0.875rem', // 14px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  7: '1.75rem',    // 28px
  8: '2rem',       // 32px
  9: '2.25rem',    // 36px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
} as const

/**
 * Icon to Text Spacing
 * Spacing between icons and adjacent text
 */
export const iconTextSpacing = {
  tight: 'gap-0.5',   // 2px - Very compact
  compact: 'gap-1',   // 4px - Compact (standard)
  normal: 'gap-2',    // 8px - Normal
  relaxed: 'gap-3',   // 12px - Relaxed
} as const

/**
 * Margin Spacing
 * Common margin values
 */
export const marginSpacing = {
  xs: 'ml-0.5',  // 2px
  sm: 'ml-1',    // 4px
  md: 'ml-1.5',  // 6px
  lg: 'ml-2',    // 8px
  xl: 'ml-3',    // 12px
} as const

/**
 * Component Spacing
 * Spacing within and between components
 */
export const componentSpacing = {
  // Card padding
  cardPadding: 'p-6',
  cardPaddingSmall: 'p-4',
  cardPaddingLarge: 'p-8',
  
  // List gaps
  listGap: 'space-y-2',
  listGapSmall: 'space-y-1',
  listGapLarge: 'space-y-4',
  
  // Section gaps
  sectionGap: 'space-y-4',
  sectionGapSmall: 'space-y-2',
  sectionGapLarge: 'space-y-6',
  
  // Grid gaps
  gridGap: 'gap-4',
  gridGapSmall: 'gap-2',
  gridGapLarge: 'gap-6',
} as const

/**
 * Layout Spacing
 * Page-level spacing
 */
export const layoutSpacing = {
  pageMargin: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  containerPadding: 'px-4 py-6',
  sectionPadding: 'py-8',
  sectionPaddingLarge: 'py-12',
} as const

/**
 * Gap Utilities
 * Flexbox and Grid gaps
 */
export const gaps = {
  0: 'gap-0',
  0.5: 'gap-0.5',
  1: 'gap-1',
  1.5: 'gap-1.5',
  2: 'gap-2',
  2.5: 'gap-2.5',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
} as const

/**
 * Padding Utilities
 */
export const padding = {
  0: 'p-0',
  1: 'p-1',
  2: 'p-2',
  3: 'p-3',
  4: 'p-4',
  5: 'p-5',
  6: 'p-6',
  8: 'p-8',
  10: 'p-10',
  12: 'p-12',
} as const

/**
 * Margin Utilities
 */
export const margin = {
  0: 'm-0',
  1: 'm-1',
  2: 'm-2',
  3: 'm-3',
  4: 'm-4',
  5: 'm-5',
  6: 'm-6',
  8: 'm-8',
  10: 'm-10',
  12: 'm-12',
  auto: 'm-auto',
} as const

/**
 * TypeScript types
 */
export type IconTextSpacingSize = keyof typeof iconTextSpacing
export type ComponentSpacingKey = keyof typeof componentSpacing
export type LayoutSpacingKey = keyof typeof layoutSpacing
