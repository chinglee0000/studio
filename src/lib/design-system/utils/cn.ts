/**
 * Class Name Utility
 * 
 * Enhanced cn() function for merging Tailwind CSS classes.
 * Uses clsx for conditional classes and tailwind-merge for deduplication.
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge class names with Tailwind CSS conflict resolution
 * 
 * @param inputs - Class names to merge
 * @returns Merged class string
 * 
 * @example
 * cn('px-2 py-1', 'px-4') // => 'py-1 px-4'
 * cn('text-red-500', condition && 'text-blue-500') // => 'text-blue-500' (if condition is true)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Conditional class name helper
 * 
 * @param condition - Boolean condition
 * @param trueClass - Class to apply if condition is true
 * @param falseClass - Class to apply if condition is false
 * @returns Class string based on condition
 * 
 * @example
 * conditionalClass(isActive, 'bg-primary', 'bg-secondary')
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ''
): string {
  return condition ? trueClass : falseClass
}

/**
 * Variant class helper
 * Combines base classes with variant-specific classes
 * 
 * @param base - Base classes
 * @param variants - Variant classes
 * @returns Merged class string
 * 
 * @example
 * variantClass('btn', { primary: 'bg-blue-500', large: 'px-6 py-3' })
 */
export function variantClass(
  base: string,
  variants: Record<string, string | boolean>
): string {
  const variantClasses = Object.entries(variants)
    .filter(([_, value]) => value !== false)
    .map(([key, value]) => (typeof value === 'string' ? value : key))
  
  return cn(base, ...variantClasses)
}
