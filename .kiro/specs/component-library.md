# Component Library Documentation

## Overview
This document catalogs all reusable components in the Twin3 platform, including their usage, props, variants, and best practices.

## Component Categories

1. [Layout Components](#layout-components)
2. [Data Display](#data-display)
3. [Navigation](#navigation)
4. [Forms & Inputs](#forms--inputs)
5. [Feedback](#feedback)
6. [Overlays](#overlays)

---

## Layout Components

### Card
Flexible container for grouping related content.

**Import:**
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
```

**Usage:**
```tsx
<Card className="bg-transparent border-0 shadow-none md:rounded-lg md:border md:bg-card md:shadow-sm">
  <CardHeader className="px-4 md:px-6">
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Optional description</CardDescription>
  </CardHeader>
  <CardContent className="px-4 md:px-6">
    {/* Content */}
  </CardContent>
  <CardFooter>
    {/* Optional footer */}
  </CardFooter>
</Card>
```

**Mobile Pattern:**
- Remove card styling on mobile/tablet
- Add back on desktop with `md:` prefix
- Use consistent padding: `px-4 md:px-6`

---

## Data Display

### QuestRow
Displays quest information in a list format.

**Import:**
```tsx
import { QuestRow } from '@/components/user/quest-row'
```

**Props:**
```tsx
interface QuestRowProps {
  quest: Quest & { progress?: number }
}
```

**Usage:**
```tsx
<QuestRow quest={questData} />
```

**Features:**
- Responsive layout (mobile/desktop)
- Progress bar for in-progress quests
- Hover/active states
- Click to navigate to quest details

**Mobile Behavior:**
- Borderless list item with bottom border
- Compact spacing
- Smaller icons and text

**Desktop Behavior:**
- Card-style appearance
- Larger spacing
- Hover effects

---

### TwinMatrixCard
Displays user's Twin Matrix growth and traits.

**Import:**
```tsx
import { TwinMatrixCard } from '@/components/user/twin-matrix-card'
```

**Props:**
```tsx
interface TwinMatrixCardProps {
  data: TwinMatrixData
}

interface TwinMatrixData {
  discoveredTraits: number
  totalTraits: number
  journeyProgress: number
  recentlyUnlockedTrait?: string
  traits: MatrixTrait[]
  dimensions: {
    physical: { discovered: number; total: number }
    social: { discovered: number; total: number }
    digital: { discovered: number; total: number }
    spiritual: { discovered: number; total: number }
  }
}
```

**Usage:**
```tsx
<TwinMatrixCard data={matrixData} />
```

**Features:**
- 8x8 trait grid visualization
- Touch-optimized tooltips
- Dimension progress bars
- Journey progress indicator
- Responsive grid layout (tablet has unique 2-column layout)

**Interaction:**
- Mobile/Tablet: Click to view trait details
- Desktop: Hover to view trait details

---

### UserStatusCard
Displays user profile summary and key metrics.

**Import:**
```tsx
import { UserStatusCard } from '@/components/user/user-status-card'
```

**Props:**
Uses `useUser()` context hook internally.

**Usage:**
```tsx
<UserStatusCard />
```

**Features:**
- User avatar and name
- Earned/Potential balance
- Humanity Index
- Profile views with link
- Responsive grid layout

---

### QuestOverview
Tabbed interface for viewing quests by status.

**Import:**
```tsx
import { QuestOverview } from '@/components/user/quest-overview'
```

**Props:**
```tsx
interface QuestOverviewProps {
  quests: (Quest & { progress?: number })[]
}
```

**Usage:**
```tsx
<QuestOverview quests={questList} />
```

**Features:**
- Three tabs: In Progress, In Review, Completed
- Quest filtering and sorting
- Badge counts for each tab
- Empty states
- Scrollable quest list (max 6 visible)

---

### StatCard
Displays a single statistic with icon and label.

**Import:**
```tsx
import { StatCard } from '@/components/shared/stat-card'
```

**Props:**
```tsx
interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string | number
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}
```

**Usage:**
```tsx
<StatCard
  icon={DollarSign}
  label="Total Earned"
  value="$1,234.56"
  trend={{ value: 12.5, isPositive: true }}
/>
```

---

### MetricBadge
Small badge for displaying metrics or status.

**Import:**
```tsx
import { MetricBadge } from '@/components/shared/metric-badge'
```

**Props:**
```tsx
interface MetricBadgeProps {
  label: string
  value: string | number
  variant?: 'default' | 'success' | 'warning' | 'error'
  icon?: React.ComponentType<{ className?: string }>
}
```

**Usage:**
```tsx
<MetricBadge
  label="Participants"
  value="12/20"
  variant="warning"
  icon={Users}
/>
```

---

### StatusBadge
Badge for displaying status with color coding.

**Import:**
```tsx
import { StatusBadge } from '@/components/shared/status-badge'
```

**Props:**
```tsx
interface StatusBadgeProps {
  status: 'in-progress' | 'in-review' | 'completed' | 'expired'
  size?: 'sm' | 'md' | 'lg'
}
```

**Usage:**
```tsx
<StatusBadge status="in-progress" size="md" />
```

---

### QuestTypeIcon
Icon representing quest type with consistent styling.

**Import:**
```tsx
import { QuestTypeIcon } from '@/components/shared/quest-type-icon'
```

**Props:**
```tsx
interface QuestTypeIconProps {
  type: 'survey' | 'data-sharing' | 'task' | 'challenge'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
```

**Usage:**
```tsx
<QuestTypeIcon type="survey" size="md" />
```

**Sizes:**
- `sm`: 32px (h-8 w-8)
- `md`: 40px (h-10 w-10)
- `lg`: 48px (h-12 w-12)

---

## Navigation

### TopNav
Main navigation bar at the top of the page.

**Import:**
```tsx
import { TopNav } from '@/components/shared/top-nav'
```

**Features:**
- Logo and branding
- Navigation links
- User menu
- Mobile hamburger menu
- Responsive layout

---

### BottomNav
Mobile-only bottom navigation bar.

**Import:**
```tsx
import { BottomNav } from '@/components/shared/bottom-nav'
```

**Features:**
- Fixed to bottom on mobile
- Icon-based navigation
- Active state indicators
- Hidden on desktop

---

### UserNav
User profile dropdown menu.

**Import:**
```tsx
import { UserNav } from '@/components/shared/user-nav'
```

**Features:**
- User avatar
- Profile link
- Settings link
- Logout button
- Dropdown menu

---

## Forms & Inputs

### QuestFiltersBar
Filter and sort controls for quest lists.

**Import:**
```tsx
import { QuestFiltersBar } from '@/components/user/quest-filters'
```

**Props:**
```tsx
interface QuestFiltersBarProps {
  filters: QuestFilters
  onFiltersChange: (filters: QuestFilters) => void
  activeFilterCount: number
}
```

**Usage:**
```tsx
<QuestFiltersBar
  filters={filters}
  onFiltersChange={setFilters}
  activeFilterCount={3}
/>
```

**Features:**
- Quest type filter
- Reward range filter
- Urgency filter
- Availability filter
- Sort options
- Active filter count badge

---

## Feedback

### EmptyState
Displays when no data is available.

**Import:**
```tsx
import { EmptyState } from '@/components/shared/empty-state'
```

**Props:**
```tsx
interface EmptyStateProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
}
```

**Usage:**
```tsx
<EmptyState
  icon={Inbox}
  title="No quests found"
  description="Check back later for new opportunities."
  action={{
    label: "Browse All Quests",
    onClick: () => router.push('/quests')
  }}
/>
```

---

### LoadingSpinner
Loading indicator for async operations.

**Import:**
```tsx
import { LoadingSpinner } from '@/components/shared/loading-spinner'
```

**Props:**
```tsx
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
```

**Usage:**
```tsx
<LoadingSpinner size="md" />
```

---

### Progress
Progress bar component.

**Import:**
```tsx
import { Progress } from '@/components/ui/progress'
```

**Props:**
```tsx
interface ProgressProps {
  value: number  // 0-100
  className?: string
}
```

**Usage:**
```tsx
<Progress value={75} className="h-1.5 md:h-2" />
```

**Best Practices:**
- Always show percentage label
- Use responsive height: `h-1.5 md:h-2`
- Include in flex container with label

---

## Overlays

### Tooltip
Contextual information on hover/click.

**Import:**
```tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
```

**Usage:**
```tsx
<TooltipProvider>
  <Tooltip delayDuration={0}>
    <TooltipTrigger asChild>
      <button
        type="button"
        className="touch-manipulation"
        aria-label="Information"
      >
        <Info className="h-4 w-4" />
      </button>
    </TooltipTrigger>
    <TooltipContent className="md:pointer-events-none max-w-[240px]">
      <p className="text-sm leading-relaxed">
        Helpful information here
      </p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

**Best Practices:**
- Use `delayDuration={0}` for instant display
- Wrap trigger in `<button>` for touch devices
- Add `touch-manipulation` class
- Set max-width: `max-w-[220px]` to `max-w-[240px]`
- Use `md:pointer-events-none` to prevent hover issues
- Add `aria-label` for accessibility

---

## UI Primitives

### Button
Standard button component with variants.

**Import:**
```tsx
import { Button } from '@/components/ui/button'
```

**Variants:**
- `default`: Primary button
- `secondary`: Secondary button
- `outline`: Outlined button
- `ghost`: Transparent button
- `link`: Link-styled button
- `destructive`: Danger/delete button

**Sizes:**
- `sm`: Small (32px height)
- `default`: Medium (40px height)
- `lg`: Large (48px height)
- `icon`: Square icon button

**Usage:**
```tsx
<Button variant="default" size="md">
  Click me
</Button>
```

---

### Badge
Small label for status or categories.

**Import:**
```tsx
import { Badge } from '@/components/ui/badge'
```

**Variants:**
- `default`: Primary badge
- `secondary`: Secondary badge
- `outline`: Outlined badge
- `destructive`: Error badge

**Usage:**
```tsx
<Badge variant="outline">New</Badge>
```

---

### Avatar
User profile picture with fallback.

**Import:**
```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
```

**Usage:**
```tsx
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

---

## Best Practices

### Component Composition
```tsx
// ✅ Good: Compose small, reusable components
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <StatCard icon={DollarSign} label="Balance" value="$100" />
  </CardContent>
</Card>

// ❌ Bad: Monolithic components
<ComplexCardWithEverything data={allData} />
```

### Props Design
```tsx
// ✅ Good: Clear, typed props
interface ComponentProps {
  title: string
  onAction: () => void
  variant?: 'default' | 'compact'
}

// ❌ Bad: Unclear, untyped props
interface ComponentProps {
  data: any
  config?: object
}
```

### Responsive Design
```tsx
// ✅ Good: Mobile-first with desktop enhancements
<div className="px-4 md:px-6 text-sm md:text-base">

// ❌ Bad: Desktop-first with mobile overrides
<div className="px-6 sm:px-4 text-base sm:text-sm">
```

### Accessibility
```tsx
// ✅ Good: Semantic HTML with ARIA labels
<button type="button" aria-label="Close dialog">
  <X className="h-4 w-4" />
</button>

// ❌ Bad: Non-semantic with no labels
<div onClick={handleClose}>
  <X className="h-4 w-4" />
</div>
```

## Testing Components

### Visual Testing
- Test on mobile, tablet, and desktop viewports
- Test in light and dark modes
- Test with different content lengths
- Test empty and error states

### Interaction Testing
- Test keyboard navigation
- Test touch interactions on mobile
- Test hover states on desktop
- Test focus indicators

### Accessibility Testing
- Run axe DevTools
- Test with screen reader
- Verify color contrast
- Check keyboard navigation

## Contributing

### Adding New Components
1. Create component in appropriate directory
2. Add TypeScript types
3. Document props and usage
4. Add to this documentation
5. Create Storybook story (if applicable)
6. Write tests
7. Submit PR with examples

### Updating Existing Components
1. Update component code
2. Update documentation
3. Update tests
4. Note breaking changes
5. Update version number
