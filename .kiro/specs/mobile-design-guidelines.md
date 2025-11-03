# Mobile Design Guidelines

## Overview
This document defines the mobile-first design principles and patterns for the Twin3 platform. These guidelines ensure a consistent, accessible, and performant experience across all devices.

## Responsive Breakpoints

```
- Mobile: < 640px
- Tablet: 640px - 768px (sm to md)
- Desktop: ≥ 768px (md+)
```

**Key Distinction:**
- Mobile + Tablet (< 768px): Touch-first interactions, simplified layouts
- Desktop (≥ 768px): Mouse/hover interactions, enhanced layouts

## Layout Principles

### 1. Card Components

**Mobile + Tablet (< 768px):**
- Remove card styling: `bg-transparent border-0 shadow-none`
- Use simple dividers between sections
- Horizontal padding: `px-4`
- Vertical spacing between sections: `h-2 bg-background` (8px white divider)
- Clean, borderless appearance for better mobile experience

**Desktop (≥ 768px):**
- Apply card styling: `md:rounded-lg md:border md:bg-card md:shadow-sm`
- Standard padding: `md:px-6`
- Use `space-y-6` for section spacing
- Cards provide visual hierarchy and grouping

**Example:**
```tsx
<Card className="bg-transparent border-0 shadow-none md:rounded-lg md:border md:bg-card md:shadow-sm">
  <CardHeader className="px-4 md:px-6">
    <CardTitle className="text-xl md:text-2xl">Title</CardTitle>
  </CardHeader>
  <CardContent className="px-4 md:px-6">
    {/* Content */}
  </CardContent>
</Card>
```

**Note:** Use `md:` prefix (768px) for card styling, not `sm:` (640px), to ensure tablets also get the clean mobile experience.

### 2. Section Dividers

**Mobile + Tablet (< 768px):**
```tsx
{/* Divider - Mobile & Tablet */}
<div className="md:hidden h-2 bg-background" />
```

**Purpose:** Create visual separation between major sections without card borders. Both mobile and tablet benefit from this clean separation approach.

### 3. Typography

**Headings:**
- Section titles: `text-xl md:text-2xl`
- Card titles: `text-base md:text-lg`
- Subsections: `text-sm md:text-base`

**Body text:**
- Primary: `text-sm md:text-base`
- Secondary: `text-xs md:text-sm`

**Line height:**
- Tight headings: `leading-tight`
- Comfortable body: `leading-snug` or `leading-relaxed`

**Note:** Mobile and tablet share the same text sizes for consistency. Desktop gets larger text for better readability on larger screens.

### 4. Spacing

**Padding:**
- Mobile + Tablet horizontal: `px-4`
- Desktop horizontal: `md:px-6`
- Mobile + Tablet vertical: `py-3`
- Desktop vertical: `md:py-4` or `md:py-6`

**Gaps:**
- Mobile + Tablet: `gap-2` to `gap-3`
- Desktop: `md:gap-4` to `md:gap-6`

**Spacing between elements:**
- Mobile + Tablet: `space-y-2` to `space-y-3`
- Desktop: `md:space-y-4` to `md:space-y-6`

**Rationale:** Consistent compact spacing for mobile and tablet ensures efficient use of screen space on touch devices.

## Interactive Elements

### 1. Touch Targets

**Minimum size:** 44x44px for all interactive elements on mobile

**Implementation:**
```tsx
<button className="touch-manipulation min-h-[44px] min-w-[44px]">
  {/* Content */}
</button>
```

### 2. Hover vs Touch

**Mobile + Tablet (< 768px):**
- Use click/tap interactions only
- Active states: `active:scale-95`
- No hover effects (tablets may have touch screens)
- Assume touch-first interaction model

**Desktop (≥ 768px):**
- Use hover interactions
- Hover states: `md:hover:scale-110` or `md:hover:bg-muted`
- Mouse/trackpad optimized

**Example:**
```tsx
<button className="transition-all active:scale-95 md:hover:scale-110">
  Click me
</button>
```

**Important:** Always use `md:` prefix for hover effects, never `sm:`, to ensure tablets get touch-optimized interactions.

### 3. Tooltips

**Mobile + Tablet:**
- Trigger: Click/tap
- Delay: `delayDuration={0}` (instant)
- Use `<button>` for trigger elements
- Add `touch-manipulation` class

**Desktop:**
- Trigger: Hover
- Prevent tooltip interaction: `md:pointer-events-none`

**Implementation:**
```tsx
<TooltipProvider>
  <Tooltip delayDuration={0}>
    <TooltipTrigger asChild>
      <button 
        type="button" 
        className="touch-manipulation"
        aria-label="Descriptive label"
      >
        <Icon />
      </button>
    </TooltipTrigger>
    <TooltipContent className="md:pointer-events-none max-w-[240px]">
      <p className="text-sm leading-relaxed">
        Tooltip content with proper line height
      </p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

**Tooltip sizing:**
- Max width: `max-w-[220px]` to `max-w-[240px]`
- Text: `leading-snug` or `leading-relaxed`
- Long text: Add `break-words`

## Component Patterns

### 1. List Items (Quest Row Pattern)

**Mobile + Tablet:**
- Remove card background
- Use bottom border: `border-b border-border/40`
- Compact padding: `py-3`
- Smaller icons: `h-3 w-3` to `h-4 w-4`
- Smaller text: `text-sm`
- Clean list appearance

**Desktop:**
- Add card styling: `md:rounded-lg md:border md:bg-card`
- Standard padding: `md:p-4`
- Larger icons: `md:h-3.5 md:w-3.5` to `md:h-5 md:w-5`
- Standard text: `md:text-base`
- Individual card appearance

**Example:**
```tsx
<Link
  href="/path"
  className="group block py-3 border-b border-border/40 md:rounded-lg md:border md:bg-card md:p-4 transition-all hover:bg-muted/50 md:hover:bg-muted"
>
  {/* Content */}
</Link>
```

### 2. Grid Layouts

**Mobile:** Single column
```tsx
<div className="grid grid-cols-1 gap-4">
```

**Tablet:** 2 columns (when appropriate for content)
```tsx
<div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
```

**Desktop:** Flexible columns
```tsx
<div className="grid lg:grid-cols-3 gap-6">
```

**Special Case - Tablet Optimization:**
Some components may use tablet-specific layouts that revert on desktop:
```tsx
{/* Matrix Grid: side-by-side on tablet, stacked on mobile and desktop */}
<div className="grid sm:grid-cols-2 md:grid-cols-1 gap-3 sm:gap-6 md:gap-4">
```

**Rationale:** Tablets have unique aspect ratios that may benefit from different layouts than both mobile and desktop.

### 3. Progress Bars

**Height:**
- Mobile + Tablet: `h-1.5`
- Desktop: `md:h-2`

**Layout:** Extend within content area, not full width including icons/actions

```tsx
<div className="flex items-center gap-2">
  <Progress value={progress} className="h-1.5 md:h-2 flex-1" />
  <span className="text-xs font-medium tabular-nums">
    {progress}%
  </span>
</div>
```

## Accessibility

### 1. Touch Targets
- Minimum 44x44px for all interactive elements
- Use `touch-manipulation` to prevent double-tap zoom

### 2. ARIA Labels
- Add `aria-label` to icon-only buttons
- Use semantic HTML elements

### 3. Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Maintain logical tab order

## Performance

### 1. Images
- Use responsive images with `srcset`
- Lazy load images below the fold
- Optimize image sizes for mobile

### 2. Animations
- Use CSS transforms for better performance
- Keep animations subtle: `transition-all` with short duration
- Reduce motion for users who prefer it

### 3. Bundle Size
- Code split by route
- Lazy load heavy components
- Use dynamic imports for modals/dialogs

## Testing Checklist

- [ ] Test on actual mobile devices (iOS and Android)
- [ ] Test on tablets in both orientations
- [ ] Verify touch targets are at least 44x44px
- [ ] Check tooltip interactions work on touch devices
- [ ] Verify text is readable without zooming
- [ ] Test with slow network (3G)
- [ ] Verify no horizontal scrolling
- [ ] Check contrast ratios meet WCAG AA standards

## Common Patterns Summary

### Card Component
```tsx
className="bg-transparent border-0 shadow-none md:rounded-lg md:border md:bg-card md:shadow-sm"
```

### Section Padding
```tsx
className="px-4 md:px-6"
```

### Section Divider (Mobile + Tablet)
```tsx
<div className="md:hidden h-2 bg-background" />
```

### Responsive Text
```tsx
className="text-sm md:text-base"
```

### Touch-Friendly Button
```tsx
<button className="touch-manipulation active:scale-95 md:hover:scale-110">
```

### Tooltip (Touch-optimized for Mobile + Tablet)
```tsx
<Tooltip delayDuration={0}>
  <TooltipTrigger asChild>
    <button type="button" className="touch-manipulation" aria-label="Label">
      <Icon />
    </button>
  </TooltipTrigger>
  <TooltipContent className="md:pointer-events-none max-w-[240px]">
    <p className="text-sm leading-relaxed">Content</p>
  </TooltipContent>
</Tooltip>
```

## Key Takeaways

1. **Use `md:` (768px) as the primary breakpoint** for distinguishing touch vs mouse interactions
2. **Mobile and Tablet share most styling** - they're both touch-first devices
3. **Tablets are NOT small desktops** - treat them as large mobile devices
4. **Always test on actual tablets** - they have unique interaction patterns
5. **Touch targets matter on tablets too** - maintain 44x44px minimum
6. **Hover effects only on desktop** - use `md:hover:` prefix exclusively

## Notes

- Always test on real devices, not just browser dev tools
- Mobile-first approach: start with mobile styles, then add desktop enhancements
- Use Tailwind's responsive prefixes consistently: `sm:`, `md:`, `lg:`
- Prioritize performance and accessibility over visual complexity
- Keep mobile UI simple and focused on core functionality
