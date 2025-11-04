/**
 * Responsive Utilities
 * 
 * Helper functions for responsive design and breakpoint management.
 */

/**
 * Breakpoint values (matching Tailwind defaults)
 */
export const breakpoints = {
  sm: 640,   // Small devices (landscape phones)
  md: 768,   // Medium devices (tablets)
  lg: 1024,  // Large devices (desktops)
  xl: 1280,  // Extra large devices (large desktops)
  '2xl': 1536, // 2x extra large devices
} as const

/**
 * Breakpoint prefixes for Tailwind classes
 */
export const breakpointPrefixes = {
  sm: 'sm:',
  md: 'md:',
  lg: 'lg:',
  xl: 'xl:',
  '2xl': '2xl:',
} as const

/**
 * Generate responsive classes
 * 
 * @param baseClass - Base class without breakpoint prefix
 * @param breakpoints - Object mapping breakpoints to class values
 * @returns Space-separated responsive classes
 * 
 * @example
 * responsive('grid-cols-1', { md: 'grid-cols-2', lg: 'grid-cols-3' })
 * // => 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
 */
export function responsive(
  baseClass: string,
  breakpoints?: Partial<Record<keyof typeof breakpointPrefixes, string>>
): string {
  if (!breakpoints) return baseClass
  
  const classes = [baseClass]
  
  Object.entries(breakpoints).forEach(([bp, value]) => {
    if (value) {
      classes.push(`${breakpointPrefixes[bp as keyof typeof breakpointPrefixes]}${value}`)
    }
  })
  
  return classes.join(' ')
}

/**
 * Hide at breakpoint
 * 
 * @param breakpoint - Breakpoint to hide at
 * @returns Hidden class
 * 
 * @example
 * hideAt('md') // => 'md:hidden'
 */
export function hideAt(breakpoint: keyof typeof breakpointPrefixes): string {
  return `${breakpointPrefixes[breakpoint]}hidden`
}

/**
 * Show at breakpoint
 * 
 * @param breakpoint - Breakpoint to show at
 * @returns Block class
 * 
 * @example
 * showAt('md') // => 'hidden md:block'
 */
export function showAt(breakpoint: keyof typeof breakpointPrefixes): string {
  return `hidden ${breakpointPrefixes[breakpoint]}block`
}

/**
 * Mobile-first responsive sizing
 * 
 * @param mobile - Mobile size
 * @param tablet - Tablet size (optional)
 * @param desktop - Desktop size (optional)
 * @returns Responsive size classes
 * 
 * @example
 * responsiveSize('text-sm', 'text-base', 'text-lg')
 * // => 'text-sm md:text-base lg:text-lg'
 */
export function responsiveSize(
  mobile: string,
  tablet?: string,
  desktop?: string
): string {
  const classes = [mobile]
  if (tablet) classes.push(`md:${tablet}`)
  if (desktop) classes.push(`lg:${desktop}`)
  return classes.join(' ')
}

/**
 * Container responsive padding
 * 
 * @returns Responsive padding classes
 * 
 * @example
 * containerPadding() // => 'px-4 sm:px-6 lg:px-8'
 */
export function containerPadding(): string {
  return 'px-4 sm:px-6 lg:px-8'
}

/**
 * Responsive grid columns
 * 
 * @param mobile - Mobile columns
 * @param tablet - Tablet columns
 * @param desktop - Desktop columns
 * @returns Grid column classes
 * 
 * @example
 * responsiveGrid(1, 2, 3) // => 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
 */
export function responsiveGrid(
  mobile: number,
  tablet?: number,
  desktop?: number
): string {
  const classes = [`grid-cols-${mobile}`]
  if (tablet) classes.push(`md:grid-cols-${tablet}`)
  if (desktop) classes.push(`lg:grid-cols-${desktop}`)
  return classes.join(' ')
}

/**
 * TypeScript types
 */
export type Breakpoint = keyof typeof breakpoints
export type BreakpointPrefix = keyof typeof breakpointPrefixes
