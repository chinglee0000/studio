/**
 * Variant Composition Utilities
 * 
 * Helper functions for composing and managing component variants.
 */

import { cn } from './cn'

/**
 * Compose variant classes
 * Combines multiple variant objects into a single class string
 * 
 * @param variants - Array of variant class strings
 * @returns Merged class string
 * 
 * @example
 * composeVariants(['text-sm', 'font-medium', 'text-primary'])
 * // => 'text-sm font-medium text-primary'
 */
export function composeVariants(...variants: (string | undefined | false)[]): string {
  return cn(...variants)
}

/**
 * Apply size variant
 * Helper for applying size-based classes
 * 
 * @param size - Size variant
 * @param sizeMap - Map of size to classes
 * @returns Size classes
 * 
 * @example
 * applySize('md', { sm: 'h-8', md: 'h-10', lg: 'h-12' })
 * // => 'h-10'
 */
export function applySize<T extends string>(
  size: T,
  sizeMap: Record<T, string>
): string {
  return sizeMap[size] || ''
}

/**
 * Apply color variant
 * Helper for applying color-based classes
 * 
 * @param color - Color variant
 * @param colorMap - Map of color to classes
 * @returns Color classes
 * 
 * @example
 * applyColor('primary', { primary: 'bg-primary text-primary-foreground' })
 * // => 'bg-primary text-primary-foreground'
 */
export function applyColor<T extends string>(
  color: T,
  colorMap: Record<T, string>
): string {
  return colorMap[color] || ''
}

/**
 * Conditional variant
 * Apply variant based on condition
 * 
 * @param condition - Boolean condition
 * @param variant - Variant to apply if true
 * @param fallback - Fallback variant if false
 * @returns Variant classes
 * 
 * @example
 * conditionalVariant(isActive, 'bg-primary', 'bg-secondary')
 * // => 'bg-primary' (if isActive is true)
 */
export function conditionalVariant(
  condition: boolean,
  variant: string,
  fallback: string = ''
): string {
  return condition ? variant : fallback
}

/**
 * Merge variant props
 * Combines default variants with user-provided variants
 * 
 * @param defaults - Default variant values
 * @param overrides - User-provided overrides
 * @returns Merged variant object
 * 
 * @example
 * mergeVariants({ size: 'md', variant: 'default' }, { size: 'lg' })
 * // => { size: 'lg', variant: 'default' }
 */
export function mergeVariants<T extends Record<string, any>>(
  defaults: T,
  overrides?: Partial<T>
): T {
  return { ...defaults, ...overrides }
}

/**
 * Extract variant classes
 * Extracts specific variant classes from a variant object
 * 
 * @param variants - Variant object
 * @param keys - Keys to extract
 * @returns Array of variant classes
 * 
 * @example
 * extractVariants({ size: 'h-10', color: 'bg-primary' }, ['size'])
 * // => ['h-10']
 */
export function extractVariants<T extends Record<string, string>>(
  variants: T,
  keys: (keyof T)[]
): string[] {
  return keys.map(key => variants[key]).filter(Boolean)
}

/**
 * Variant builder
 * Fluent API for building variant classes
 * 
 * @example
 * variantBuilder()
 *   .add('text-sm')
 *   .addIf(isActive, 'bg-primary')
 *   .build()
 * // => 'text-sm bg-primary' (if isActive is true)
 */
export class VariantBuilder {
  private classes: (string | undefined | false)[] = []

  add(className: string): this {
    this.classes.push(className)
    return this
  }

  addIf(condition: boolean, className: string): this {
    if (condition) {
      this.classes.push(className)
    }
    return this
  }

  addVariant<T extends string>(
    variant: T,
    variantMap: Record<T, string>
  ): this {
    this.classes.push(variantMap[variant])
    return this
  }

  build(): string {
    return cn(...this.classes)
  }
}

/**
 * Create variant builder instance
 * 
 * @returns New VariantBuilder instance
 * 
 * @example
 * variantBuilder().add('text-sm').build()
 */
export function variantBuilder(): VariantBuilder {
  return new VariantBuilder()
}
