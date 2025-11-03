# Implementation Plan

## Overview

This implementation plan breaks down the design system standardization into discrete, manageable coding tasks. Each task builds incrementally on previous tasks, following the phased migration strategy outlined in the design document.

## Task List

- [ ] 1. Set up design system directory structure
  - Create `src/lib/design-system/` directory with subdirectories: `tokens/`, `variants/`, `utils/`, `presets/`
  - Create index files for each subdirectory
  - Create main `src/lib/design-system/index.ts` export file
  - _Requirements: 1.1, 1.2, 1.3_

- [ ] 2. Implement foundation token system
- [ ] 2.1 Create color tokens
  - Implement `src/lib/design-system/tokens/colors.ts` with foundation colors, semantic colors, and interactive state colors
  - Export TypeScript types for color scales and semantic color variants
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [ ] 2.2 Create typography tokens
  - Implement `src/lib/design-system/tokens/typography.ts` with font sizes, weights, line heights, and font families
  - Export TypeScript types for typography scales
  - _Requirements: 3.1, 3.2_

- [ ] 2.3 Create spacing tokens
  - Implement `src/lib/design-system/tokens/spacing.ts` with foundation spacing scale and semantic spacing (iconText, component, layout)
  - Export TypeScript types for spacing scales
  - _Requirements: 4.1, 4.3_

- [ ] 2.4 Create sizing tokens
  - Implement `src/lib/design-system/tokens/sizing.ts` with component sizing for icons, buttons, avatars, and badges
  - Export TypeScript types for component sizes
  - _Requirements: 4.2, 4.4_

- [ ] 2.5 Create border and shadow tokens
  - Implement `src/lib/design-system/tokens/borders.ts` with border radius and width values
  - Implement `src/lib/design-system/tokens/shadows.ts` with elevation levels
  - _Requirements: 1.2_

- [ ] 2.6 Create animation tokens
  - Implement `src/lib/design-system/tokens/animations.ts` with transition durations and easing functions
  - _Requirements: 1.2_

- [ ] 2.7 Create tokens index file
  - Implement `src/lib/design-system/tokens/index.ts` to re-export all token modules
  - _Requirements: 1.3_

- [ ] 3. Implement component variant system
- [ ] 3.1 Create button variants
  - Implement `src/lib/design-system/variants/button.ts` using CVA with variants for style and size
  - Migrate existing button variants from `src/components/ui/button.tsx`
  - Export TypeScript types for button variant props
  - _Requirements: 5.1, 5.2, 5.4_

- [ ] 3.2 Create card variants
  - Implement `src/lib/design-system/variants/card.ts` using CVA
  - Migrate existing card variants from `src/components/ui/card.tsx`
  - _Requirements: 5.1, 5.2_

- [ ] 3.3 Create badge variants
  - Implement `src/lib/design-system/variants/badge.ts` using CVA with semantic color variants
  - _Requirements: 5.1, 5.2_

- [ ] 3.4 Create interactive state variants
  - Implement `src/lib/design-system/variants/interactive.ts` with hover, active, focus, and disabled state variants
  - _Requirements: 6.1, 6.2, 6.3_

- [ ] 3.5 Create variants index file
  - Implement `src/lib/design-system/variants/index.ts` to re-export all variant modules
  - _Requirements: 5.4_

- [ ] 4. Implement utility functions
- [ ] 4.1 Create class name utility
  - Implement `src/lib/design-system/utils/cn.ts` with enhanced cn() function
  - _Requirements: 9.1, 9.3_

- [ ] 4.2 Create responsive utilities
  - Implement `src/lib/design-system/utils/responsive.ts` with helpers for responsive sizing and breakpoints
  - _Requirements: 9.2_

- [ ] 4.3 Create theme utilities
  - Implement `src/lib/design-system/utils/theme.ts` with helpers for theme-aware colors and dark mode
  - _Requirements: 9.2_

- [ ] 4.4 Create variant composition utilities
  - Add helper functions in `src/lib/design-system/utils/variants.ts` for composing variant classes
  - _Requirements: 9.1, 9.2_

- [ ] 4.5 Create utils index file
  - Implement `src/lib/design-system/utils/index.ts` to re-export all utility modules
  - _Requirements: 9.3, 9.5_

- [ ] 5. Implement preset system
- [ ] 5.1 Create typography presets
  - Implement `src/lib/design-system/presets/typography.ts` with ready-to-use heading, body, and special text combinations
  - Create `getTypographyClasses()` utility function
  - _Requirements: 3.2, 3.3, 3.5_

- [ ] 5.2 Create layout presets
  - Implement `src/lib/design-system/presets/layout.ts` with common layout patterns for cards, lists, and sections
  - _Requirements: 4.3_

- [ ] 5.3 Create quest-specific presets
  - Implement `src/lib/design-system/presets/quest.ts` by migrating quest type designs and creating quest component presets
  - Migrate `QUEST_TYPE_DESIGN` from `src/lib/constants/quest-design-system.ts`
  - _Requirements: 1.1, 1.4_

- [ ] 5.4 Create presets index file
  - Implement `src/lib/design-system/presets/index.ts` to re-export all preset modules
  - _Requirements: 1.3_

- [ ] 6. Create main design system export
  - Implement `src/lib/design-system/index.ts` to export all tokens, variants, utils, and presets
  - Organize exports by category with clear naming
  - _Requirements: 1.3, 1.5_

- [ ] 7. Implement backward compatibility layer
- [ ] 7.1 Update constants/design-tokens.ts
  - Modify `src/lib/constants/design-tokens.ts` to re-export from new design system
  - Maintain old API structure (TYPOGRAPHY, SPACING, etc.)
  - _Requirements: 1.4_

- [ ] 7.2 Update styles/design-tokens.ts
  - Modify `src/lib/styles/design-tokens.ts` to re-export from new design system
  - Maintain old API structure (interactiveStates, cardStyles, etc.)
  - _Requirements: 1.4_

- [ ] 7.3 Update quest-design-system.ts
  - Modify `src/lib/constants/quest-design-system.ts` to re-export from new design system
  - Maintain old API structure (QUEST_TYPE_DESIGN, helper functions)
  - _Requirements: 1.4_

- [ ] 7.4 Verify backward compatibility
  - Check that all existing imports still work correctly
  - Verify no TypeScript errors in existing components
  - _Requirements: 1.4, 8.2_

- [ ] 8. Refactor shared components to use design system
- [ ] 8.1 Refactor StatCard component
  - Update `src/components/shared/stat-card.tsx` to use design system tokens
  - Use color tokens for iconColor prop
  - Use spacing tokens for gaps and padding
  - Use typography tokens for text styles
  - _Requirements: 8.1, 8.4_

- [ ] 8.2 Refactor MetricBadge component
  - Update `src/components/shared/metric-badge.tsx` to use design system tokens and variants
  - Replace hardcoded variant classes with semantic color tokens
  - Use sizing tokens for icon and text sizes
  - _Requirements: 8.1, 8.4_

- [ ] 8.3 Refactor StatusBadge component
  - Update `src/components/shared/status-badge.tsx` to use design system badge variants
  - Migrate to new variant system while maintaining existing API
  - _Requirements: 8.1, 8.4_

- [ ] 8.4 Refactor QuestCard component
  - Update `src/components/shared/quest-card.tsx` to use design system quest presets
  - Use typography presets for title and description
  - Use spacing presets for layout
  - _Requirements: 8.1, 8.4_

- [ ] 8.5 Refactor QuestTypeIcon component
  - Update `src/components/shared/quest-type-icon.tsx` to use design system quest presets
  - Use quest type color tokens from presets
  - _Requirements: 8.1, 8.4_

- [ ] 8.6 Update shared components index
  - Update `src/components/shared/index.ts` to export design system types if needed
  - _Requirements: 8.1_

- [ ] 9. Create comprehensive documentation
- [ ] 9.1 Create main README
  - Write `src/lib/design-system/README.md` with overview, architecture, and quick start guide
  - _Requirements: 7.1, 7.2, 7.4_

- [ ] 9.2 Document token usage
  - Add detailed documentation for each token category (colors, typography, spacing, sizing)
  - Include code examples and visual descriptions
  - _Requirements: 7.2, 7.4_

- [ ] 9.3 Document variant system
  - Document how to use CVA variants in components
  - Provide examples for creating new variants
  - _Requirements: 7.2, 7.4_

- [ ] 9.4 Document preset usage
  - Document all available presets with usage examples
  - Show how to compose presets for common patterns
  - _Requirements: 7.2, 7.4_

- [ ] 9.5 Create migration guide
  - Write migration guide for updating existing components
  - Document breaking changes (if any)
  - Provide before/after code examples
  - _Requirements: 7.3, 8.5_

- [ ] 9.6 Create visual style guide
  - Document color palette with visual swatches
  - Show typography hierarchy
  - Display spacing scale
  - Show component variants
  - _Requirements: 7.5_

- [ ] 9.7 Create contribution guide
  - Write `CONTRIBUTING.md` with guidelines for adding new tokens
  - Document design decision process
  - Establish review process
  - _Requirements: 10.1, 10.2, 10.3, 10.5_

- [ ] 10. Verify and validate implementation
- [ ] 10.1 Run TypeScript compilation
  - Verify no TypeScript errors across the entire codebase
  - Check that all types are properly exported
  - _Requirements: 9.3_

- [ ] 10.2 Visual regression testing
  - Manually test all refactored components in the browser
  - Compare before/after screenshots
  - Test in both light and dark modes
  - Test interactive states (hover, focus, active)
  - _Requirements: 8.3_

- [ ] 10.3 Test backward compatibility
  - Verify all existing component usage still works
  - Check that old import paths resolve correctly
  - Test that old token names are accessible
  - _Requirements: 8.2_

- [ ] 10.4 Update component documentation
  - Update component prop documentation to reflect design system usage
  - Add examples using new design system tokens
  - _Requirements: 8.5_

## Notes

- Each task should be completed and tested before moving to the next
- Maintain backward compatibility throughout the implementation
- Focus on one component at a time during refactoring phase
- Document any deviations from the design document
- Test in both light and dark modes after each significant change
