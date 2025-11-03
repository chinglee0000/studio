# Changelog

All notable changes to the Twin3 platform design and components.

## [2024-01-04] - Mobile & Responsive Improvements

### Added
- **User Level System**: Added level display in UserStatusCard
  - Level badge shown below user name
  - Stored in user context (`level?: number`)
  
- **Design Guidelines**: Created comprehensive design documentation
  - Mobile Design Guidelines (`.kiro/specs/mobile-design-guidelines.md`)
  - Design Tokens (`.kiro/specs/design-tokens.md`)
  - Component Library (`.kiro/specs/component-library.md`)
  - Accessibility Guidelines (`.kiro/specs/accessibility-guidelines.md`)

### Changed
- **TwinMatrixCard**:
  - Renamed "Journey Progress" to "Twin Matrix Completion"
  - Locked traits now show hex ID instead of name
  - Locked traits display 0/255 (0%) instead of calculated score
  - Changed locked emoji 🔒 to Lock icon from lucide-react
  - Dimension progress bars: 2x2 grid on mobile, vertical on tablet/desktop
  
- **UserStatusCard**:
  - Fixed icon shrinking issue in responsive layout
  - Added `shrink-0` to all icons to prevent compression
  - Changed layout breakpoint from `md` to `lg` for 4-column layout
  - Mobile/Tablet: 2x2 grid (< 1024px)
  - Desktop: 1x4 horizontal layout (≥ 1024px)
  - Increased gap between icon and text to 12px (gap-3)

- **Quest Row**:
  - Optimized mobile layout for better space utilization
  - Progress bar extends across content area
  - Improved touch targets and spacing

- **Mobile Design**:
  - Removed card backgrounds on mobile/tablet (< 768px)
  - Added 8px white dividers between sections
  - Unified horizontal padding: `px-4` on mobile, `px-6` on desktop
  - Consistent typography scaling across breakpoints

- **Tooltip Interactions**:
  - Mobile/Tablet (< 768px): Click to open
  - Desktop (≥ 768px): Hover to show
  - Instant display with `delayDuration={0}`
  - Improved text wrapping with max-width constraints

### Fixed
- Icon compression in UserStatusCard metrics
- Tooltip text overflow issues
- Responsive breakpoint inconsistencies
- Touch target sizes for mobile devices

## Design Principles Established

### Breakpoint Strategy
- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: ≥ 768px
- Use `md:` (768px) as primary breakpoint for touch vs mouse interactions

### Component Patterns
- Cards: Transparent on mobile, styled on desktop
- Icons: Always use `shrink-0` to prevent compression
- Tooltips: Click on mobile/tablet, hover on desktop
- Touch targets: Minimum 44x44px

### Spacing System
- Mobile padding: `px-4` (16px)
- Desktop padding: `md:px-6` (24px)
- Section dividers: `h-2` (8px) white background
- Consistent gap values: `gap-2` to `gap-3` on mobile, `gap-4` to `gap-6` on desktop

## Version
Current Version: **1.1.0**

---

## Previous Versions

### [1.0.0] - Initial Release
- Basic component structure
- Initial responsive design
- Core functionality implementation
