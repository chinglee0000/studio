/**
 * Sizing Tokens
 * 
 * Component sizing tokens for consistent dimensions across the application.
 * Includes sizes for buttons, icons, avatars, badges, and other components.
 */

/**
 * Button Sizes
 * Height values for different button sizes
 */
export const buttonSizes = {
  sm: 'h-8',   // 32px - Filter buttons, compact buttons
  md: 'h-10',  // 40px - Standard buttons
  lg: 'h-12',  // 48px - Large buttons
  xl: 'h-14',  // 56px - Extra large buttons
} as const

/**
 * Icon Sizes
 * Width and height values for icons
 */
export const iconSizes = {
  xs: 'h-3 w-3',       // 12px - ChevronDown, small indicators
  sm: 'h-3.5 w-3.5',   // 14px - Status icons
  md: 'h-4 w-4',       // 16px - Standard icons
  lg: 'h-5 w-5',       // 20px - Larger icons
  xl: 'h-6 w-6',       // 24px - Quest type icons, prominent icons
  '2xl': 'h-8 w-8',    // 32px - Large feature icons
  '3xl': 'h-12 w-12',  // 48px - Quest row icons
} as const

/**
 * Avatar Sizes
 * Dimensions for user avatars
 */
export const avatarSizes = {
  xs: 'h-6 w-6',   // 24px
  sm: 'h-8 w-8',   // 32px
  md: 'h-10 w-10', // 40px
  lg: 'h-12 w-12', // 48px
  xl: 'h-16 w-16', // 64px
  '2xl': 'h-20 w-20', // 80px
} as const

/**
 * Badge Sizes
 * Dimensions for badges and count indicators
 */
export const badgeSizes = {
  sm: 'h-4 min-w-4 px-1',      // Filter count badge
  md: 'h-5 min-w-5 px-1.5',    // Tab count badge
  lg: 'h-6 min-w-6 px-2',      // Standard badge
} as const

/**
 * Input Sizes
 * Height values for form inputs
 */
export const inputSizes = {
  sm: 'h-8',   // 32px
  md: 'h-10',  // 40px
  lg: 'h-12',  // 48px
} as const

/**
 * Progress Bar Sizes
 * Height values for progress bars
 */
export const progressSizes = {
  xs: 'h-1',     // 4px
  sm: 'h-1.5',   // 6px - Quest progress bars
  md: 'h-2',     // 8px
  lg: 'h-3',     // 12px
  xl: 'h-4',     // 16px
} as const

/**
 * Card Sizes
 * Predefined card dimensions
 */
export const cardSizes = {
  sm: 'w-64',   // 256px
  md: 'w-80',   // 320px
  lg: 'w-96',   // 384px
  xl: 'w-[28rem]', // 448px
  full: 'w-full',
} as const

/**
 * Container Max Widths
 * Maximum widths for content containers
 */
export const containerMaxWidths = {
  sm: 'max-w-screen-sm',   // 640px
  md: 'max-w-screen-md',   // 768px
  lg: 'max-w-screen-lg',   // 1024px
  xl: 'max-w-screen-xl',   // 1280px
  '2xl': 'max-w-screen-2xl', // 1536px
  '7xl': 'max-w-7xl',      // 1280px (80rem)
} as const

/**
 * Quest Row Specific Sizes
 * Sizes specific to quest row components
 */
export const questRowSizes = {
  icon: 'h-12 w-12',
  iconBorderRadius: 'rounded-lg',
  progressHeight: 'h-1.5',
} as const

/**
 * TypeScript types
 */
export type ButtonSize = keyof typeof buttonSizes
export type IconSize = keyof typeof iconSizes
export type AvatarSize = keyof typeof avatarSizes
export type BadgeSize = keyof typeof badgeSizes
export type InputSize = keyof typeof inputSizes
export type ProgressSize = keyof typeof progressSizes
export type CardSize = keyof typeof cardSizes
