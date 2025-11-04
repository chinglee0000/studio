/**
 * Theme Utilities
 * 
 * Helper functions for theme-aware colors and dark mode support.
 */

/**
 * Theme-aware color helper
 * 
 * @param lightColor - Color for light mode
 * @param darkColor - Color for dark mode
 * @returns Combined class string
 * 
 * @example
 * themeColor('text-gray-900', 'text-gray-100')
 * // => 'text-gray-900 dark:text-gray-100'
 */
export function themeColor(lightColor: string, darkColor: string): string {
  return `${lightColor} dark:${darkColor}`
}

/**
 * Theme-aware background
 * 
 * @param lightBg - Background for light mode
 * @param darkBg - Background for dark mode
 * @returns Combined class string
 * 
 * @example
 * themeBg('bg-white', 'bg-gray-900')
 * // => 'bg-white dark:bg-gray-900'
 */
export function themeBg(lightBg: string, darkBg: string): string {
  return `${lightBg} dark:${darkBg}`
}

/**
 * Theme-aware border
 * 
 * @param lightBorder - Border for light mode
 * @param darkBorder - Border for dark mode
 * @returns Combined class string
 * 
 * @example
 * themeBorder('border-gray-200', 'border-gray-700')
 * // => 'border-gray-200 dark:border-gray-700'
 */
export function themeBorder(lightBorder: string, darkBorder: string): string {
  return `${lightBorder} dark:${darkBorder}`
}

/**
 * Semantic color with theme support
 * 
 * @param variant - Semantic color variant
 * @returns Theme-aware color classes
 * 
 * @example
 * semanticColor('success')
 * // => 'text-green-600 dark:text-green-400'
 */
export function semanticColor(
  variant: 'success' | 'warning' | 'danger' | 'info'
): string {
  const colors = {
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    danger: 'text-red-600 dark:text-red-400',
    info: 'text-blue-600 dark:text-blue-400',
  }
  return colors[variant]
}

/**
 * Semantic background with theme support
 * 
 * @param variant - Semantic color variant
 * @returns Theme-aware background classes
 * 
 * @example
 * semanticBg('success')
 * // => 'bg-green-100 dark:bg-green-900/50'
 */
export function semanticBg(
  variant: 'success' | 'warning' | 'danger' | 'info'
): string {
  const backgrounds = {
    success: 'bg-green-100 dark:bg-green-900/50',
    warning: 'bg-yellow-100 dark:bg-yellow-900/50',
    danger: 'bg-red-100 dark:bg-red-900/50',
    info: 'bg-blue-100 dark:bg-blue-900/50',
  }
  return backgrounds[variant]
}

/**
 * Combined semantic color (text + background)
 * 
 * @param variant - Semantic color variant
 * @returns Combined theme-aware classes
 * 
 * @example
 * semanticCombined('success')
 * // => 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
 */
export function semanticCombined(
  variant: 'success' | 'warning' | 'danger' | 'info'
): string {
  return `${semanticBg(variant)} ${semanticColor(variant)}`
}

/**
 * CSS variable color helper
 * 
 * @param variable - CSS variable name (without var() wrapper)
 * @returns HSL color string
 * 
 * @example
 * cssVar('--primary') // => 'hsl(var(--primary))'
 */
export function cssVar(variable: string): string {
  return `hsl(var(${variable}))`
}

/**
 * Get theme-aware opacity
 * 
 * @param lightOpacity - Opacity for light mode
 * @param darkOpacity - Opacity for dark mode
 * @returns Combined opacity classes
 * 
 * @example
 * themeOpacity('opacity-100', 'opacity-80')
 * // => 'opacity-100 dark:opacity-80'
 */
export function themeOpacity(lightOpacity: string, darkOpacity: string): string {
  return `${lightOpacity} dark:${darkOpacity}`
}

/**
 * TypeScript types
 */
export type SemanticVariant = 'success' | 'warning' | 'danger' | 'info'
