/**
 * Shadow Tokens
 * 
 * Elevation and shadow tokens for depth and hierarchy.
 */

/**
 * Shadow Levels
 * Elevation shadows from subtle to prominent
 */
export const shadows = {
  none: 'shadow-none',
  sm: 'shadow-sm',       // Subtle shadow
  base: 'shadow',        // Default shadow
  md: 'shadow-md',       // Medium shadow
  lg: 'shadow-lg',       // Large shadow
  xl: 'shadow-xl',       // Extra large shadow
  '2xl': 'shadow-2xl',   // 2x large shadow
  inner: 'shadow-inner', // Inner shadow
} as const

/**
 * Elevation Levels
 * Semantic elevation for UI hierarchy
 */
export const elevations = {
  flat: 'shadow-none',           // Level 0 - No elevation
  raised: 'shadow-sm',           // Level 1 - Slightly raised
  floating: 'shadow-md',         // Level 2 - Floating elements
  overlay: 'shadow-lg',          // Level 3 - Overlays, modals
  modal: 'shadow-xl',            // Level 4 - Modal dialogs
  popover: 'shadow-2xl',         // Level 5 - Popovers, tooltips
} as const

/**
 * Drop Shadow Utilities
 * For use with filter: drop-shadow
 */
export const dropShadows = {
  none: 'drop-shadow-none',
  sm: 'drop-shadow-sm',
  base: 'drop-shadow',
  md: 'drop-shadow-md',
  lg: 'drop-shadow-lg',
  xl: 'drop-shadow-xl',
  '2xl': 'drop-shadow-2xl',
} as const

/**
 * TypeScript types
 */
export type Shadow = keyof typeof shadows
export type Elevation = keyof typeof elevations
export type DropShadow = keyof typeof dropShadows
