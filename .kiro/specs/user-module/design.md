# User Module Design Document

## Overview

The User Module is a parallel interface to the Business Module, designed for end-users to discover, participate in, and track quests. This design follows the same architectural patterns as the Business Module to ensure consistency, maintainability, and code reuse.

### Design Principles

1. **Consistency**: Mirror the Business Module's structure and patterns
2. **Responsive**: Mobile-first design with desktop enhancements
3. **Reusability**: Leverage existing shared components
4. **Type Safety**: Full TypeScript coverage
5. **Performance**: Server Components by default, Client Components only when needed

## Architecture

### Directory Structure

```
src/app/user/
├── layout.tsx                      # User Module layout (Client Component)
├── page.tsx                        # Redirect to dashboard
├── dashboard/
│   └── page.tsx                    # User dashboard (Server Component)
├── quests/
│   ├── page.tsx                    # Quest discovery list (Server Component)
│   └── [id]/
│       ├── page.tsx                # Quest detail (Server Component)
│       └── participate/
│           └── page.tsx            # Quest participation (Client Component)
└── profile/
    └── page.tsx                    # User profile (Server Component)

src/app/actions/
└── user-actions.ts                 # User-related Server Actions

src/components/user/                # User Module specific components (if needed)
```

### Routing Strategy

| Route | Component Type | Purpose |
|-------|---------------|---------|
| `/user` | Redirect | Redirect to `/user/dashboard` |
| `/user/dashboard` | Server | Display available and active quests |
| `/user/quests` | Server | Quest discovery and search |
| `/user/quests/[id]` | Server | Quest details and information |
| `/user/quests/[id]/participate` | Client | Interactive quest participation |
| `/user/profile` | Server | User profile and history |

## Components and Interfaces

### 1. User Layout Component

**File**: `src/app/user/layout.tsx`

**Type**: Client Component (`"use client"`)

**Responsibilities**:
- Provide consistent layout for all User Module pages
- Handle responsive navigation (Sidebar for desktop, BottomNav for mobile)
- Integrate ThemeProvider and SidebarProvider
- Display Mode Switcher for switching to Business Module

**Navigation Items**:
```typescript
const navItems = [
  { href: "/user/dashboard", icon: Home, label: "Dashboard" },
  { href: "/user/quests", icon: Search, label: "Discover" },
  { href: "/user/profile", icon: User, label: "Profile" },
]
```

**Layout Structure**:

**Desktop** (≥768px):
- Left Sidebar with navigation
- Collapsible sidebar support
- Header with Mode Switcher, Theme Toggle, User Nav
- Main content area (max-width: sm:max-w-2xl)

**Mobile** (<768px):
- Top header with logo, Theme Toggle, User Nav
- Main content area with bottom padding
- Bottom navigation bar (fixed)

**Key Features**:
- Uses `useIsMobile()` hook for responsive detection
- Shows loading skeleton while detecting device type
- Maintains consistent spacing and styling with Business Module

### 2. Dashboard Page

**File**: `src/app/user/dashboard/page.tsx`

**Type**: Server Component

**Sections**:
1. **Welcome Header**: Personalized greeting with user stats
2. **Available Quests**: Grid/list of quests user can participate in
3. **Active Quests**: Quests user has started but not completed
4. **Completed Quests**: Recent completions with rewards

**Components Used**:
- `PageHeader` - Page title and description
- `Card` - Quest cards
- `StatusBadge` - Quest status indicators
- `Button` - Call-to-action buttons
- `EmptyState` - When no quests available

**Data Display**:
```typescript
interface DashboardData {
  user: User;
  stats: {
    totalCompleted: number;
    totalRewards: number;
    activeQuests: number;
  };
  availableQuests: Quest[];
  activeQuests: Quest[];
  recentCompletions: Submission[];
}
```

### 3. Quest Discovery Page

**File**: `src/app/user/quests/page.tsx`

**Type**: Server Component

**Features**:
- Search bar for quest titles
- Filter by quest type, reward range, duration
- Sort by newest, highest reward, ending soon
- Grid/list view toggle
- Pagination or infinite scroll

**Components Used**:
- `PageHeader` - "Discover Quests"
- `Input` - Search field
- `Select` - Filter dropdowns
- `Card` - Quest cards
- `Badge` - Quest type badges
- `EmptyState` - No results state

**Quest Card Display**:
```typescript
interface QuestCardProps {
  quest: Quest;
  showActions?: boolean;
}

// Display:
// - Quest title
// - Quest type badge
// - Reward amount
// - Brief description
// - "View Details" button
```

### 4. Quest Detail Page

**File**: `src/app/user/quests/[id]/page.tsx`

**Type**: Server Component

**Sections**:
1. **Quest Header**: Title, type, status
2. **Quest Information**: Full description, requirements
3. **Reward Details**: Amount, currency
4. **Target Audience**: Age range, location, interests
5. **Time Estimate**: Expected completion time
6. **Action Button**: "Start Quest" or "Already Completed"

**Components Used**:
- `PageHeader` - Quest title
- `Card` - Information sections
- `Badge` - Quest type and status
- `Button` - Start quest CTA
- `Separator` - Section dividers

**Conditional Rendering**:
```typescript
// If user hasn't started quest
<Button href={`/user/quests/${id}/participate`}>Start Quest</Button>

// If user has completed quest
<StatusBadge status="completed" />
<p>Completed on {completionDate}</p>

// If quest is no longer available
<EmptyState title="Quest Unavailable" />
```

### 5. Quest Participation Page

**File**: `src/app/user/quests/[id]/participate/page.tsx`

**Type**: Client Component (`"use client"`)

**Features**:
- Step-by-step quest flow
- Progress indicator
- Form inputs for responses
- Validation with Zod
- Submit with Server Actions

**Components Used**:
- `Progress` - Completion percentage
- `Form` - React Hook Form
- `Input`, `Textarea`, `Select`, `RadioGroup` - Form fields
- `Button` - Navigation and submit
- `Card` - Step containers

**State Management**:
```typescript
interface ParticipationState {
  currentStep: number;
  totalSteps: number;
  responses: Record<string, any>;
  isSubmitting: boolean;
}
```

**Flow**:
1. Load quest details and steps
2. Display current step with form
3. Validate and save response
4. Move to next step or submit
5. Show completion confirmation

### 6. User Profile Page

**File**: `src/app/user/profile/page.tsx`

**Type**: Server Component

**Sections**:
1. **Profile Header**: Avatar, name, email, join date
2. **Statistics**: Total quests, rewards, completion rate
3. **Quest History**: Table of completed quests
4. **Rewards Summary**: Total earnings, pending rewards
5. **Edit Profile**: Button to edit information

**Components Used**:
- `PageHeader` - "My Profile"
- `Avatar` - User photo
- `Card` - Information sections
- `DataTable` - Quest history
- `Button` - Edit profile
- `Badge` - Status indicators

**Profile Data**:
```typescript
interface ProfileData {
  user: User;
  stats: {
    totalQuests: number;
    completedQuests: number;
    totalRewards: number;
    pendingRewards: number;
    completionRate: number;
  };
  questHistory: Submission[];
}
```

## Data Models

### Extended Types

```typescript
// Extend existing Quest type with user-specific fields
export type QuestWithUserStatus = Quest & {
  userStatus?: 'not-started' | 'in-progress' | 'completed';
  userSubmission?: Submission;
  estimatedTime?: number; // in minutes
  participantCount?: number;
};

// Quest step for participation
export type QuestStep = {
  id: string;
  questId: string;
  order: number;
  title: string;
  description: string;
  type: 'text' | 'multiple-choice' | 'rating' | 'file-upload';
  required: boolean;
  options?: string[]; // for multiple-choice
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
};

// User statistics
export type UserStats = {
  userId: string;
  totalQuestsCompleted: number;
  totalRewardsEarned: number;
  activeQuests: number;
  completionRate: number;
  lastActivityDate: Date;
};
```

### Data Fetching Patterns

```typescript
// Server Component data fetching
async function getAvailableQuests(): Promise<QuestWithUserStatus[]> {
  // Fetch quests from API/database
  // Filter by user eligibility
  // Add user status
  return quests;
}

async function getUserStats(userId: string): Promise<UserStats> {
  // Fetch user statistics
  return stats;
}

async function getQuestDetails(questId: string): Promise<QuestWithUserStatus> {
  // Fetch quest details
  // Check user participation status
  return quest;
}
```

## Server Actions

### User Actions

**File**: `src/app/actions/user-actions.ts`

```typescript
"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Start a quest
export async function startQuest(questId: string) {
  // Validate user eligibility
  // Create submission record
  // Return submission ID
  redirect(`/user/quests/${questId}/participate`);
}

// Submit quest response
const responseSchema = z.object({
  questId: z.string(),
  stepId: z.string(),
  response: z.any(),
});

export async function submitQuestResponse(
  prevState: any,
  formData: FormData
) {
  const validatedFields = responseSchema.safeParse({
    questId: formData.get("questId"),
    stepId: formData.get("stepId"),
    response: formData.get("response"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Save response
  // Update submission progress
  revalidatePath(`/user/quests/${validatedFields.data.questId}/participate`);
  
  return { success: true };
}

// Complete quest
export async function completeQuest(questId: string, submissionId: string) {
  // Mark submission as complete
  // Calculate rewards
  // Update user stats
  revalidatePath("/user/dashboard");
  redirect("/user/dashboard");
}

// Update user profile
const profileSchema = z.object({
  displayName: z.string().min(2),
  email: z.string().email(),
});

export async function updateProfile(prevState: any, formData: FormData) {
  const validatedFields = profileSchema.safeParse({
    displayName: formData.get("displayName"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Update user profile
  revalidatePath("/user/profile");
  
  return { success: true, message: "Profile updated successfully" };
}
```

## Error Handling

### Error Boundaries

```typescript
// src/app/user/error.tsx
"use client";

export default function UserError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Something went wrong</CardTitle>
          <CardDescription>{error.message}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button onClick={reset}>Try again</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
```

### Loading States

```typescript
// src/app/user/loading.tsx
export default function UserLoading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-64 w-full" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}
```

### Not Found Pages

```typescript
// src/app/user/quests/[id]/not-found.tsx
export default function QuestNotFound() {
  return (
    <EmptyState
      icon={Search}
      title="Quest Not Found"
      description="The quest you're looking for doesn't exist or is no longer available."
      action={<Button href="/user/quests">Browse Quests</Button>}
    />
  );
}
```

## Styling and Theming

### Consistent Styling

All User Module pages follow the same styling patterns as Business Module:

- Background: `bg-muted/40`
- Cards: `Card` component with default styling
- Spacing: Consistent padding and gaps
- Typography: Kanit for headings, Montserrat for body
- Colors: Use CSS variables from theme

### Responsive Design

```typescript
// Breakpoints
sm: 640px   // Small tablets
md: 768px   // Tablets (mobile/desktop switch)
lg: 1024px  // Desktop
xl: 1280px  // Large desktop

// Mobile-first approach
<div className="p-4 sm:p-6 lg:p-8">
  {/* Content */}
</div>
```

### Material Design 3

- Use elevation through shadows and borders
- Implement state layers (hover, active, focus)
- Follow color system from theme
- Use appropriate button variants
- Ensure 44x44px minimum touch targets on mobile

## Testing Strategy

### Unit Tests

Test individual components and utilities:
- Quest card rendering
- Form validation logic
- Data transformation functions
- Utility functions

### Integration Tests

Test page interactions:
- Quest discovery filtering and search
- Quest participation flow
- Profile update flow
- Navigation between pages

### E2E Tests

Test complete user journeys:
1. User logs in → Views dashboard → Discovers quest → Starts quest → Completes quest
2. User views profile → Edits information → Saves changes
3. User switches between Business and User modes

### Accessibility Tests

- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Focus management
- ARIA labels

## Performance Considerations

### Server Components

Use Server Components by default for:
- Dashboard (static data)
- Quest list (can be cached)
- Quest details (can be cached)
- Profile (user-specific but static)

### Client Components

Use Client Components only for:
- Layout (needs hooks and interactivity)
- Quest participation (form interactions)
- Interactive filters and search

### Data Fetching

```typescript
// Use React cache for deduplication
import { cache } from 'react';

export const getQuest = cache(async (id: string) => {
  // Fetch quest
  return quest;
});
```

### Caching Strategy

```typescript
// Static pages (revalidate every hour)
export const revalidate = 3600;

// Dynamic pages (revalidate on demand)
revalidatePath('/user/dashboard');
```

## Security Considerations

### Authentication

- Verify user authentication on all pages
- Redirect to login if not authenticated
- Use middleware for route protection

### Authorization

- Verify user eligibility for quests
- Prevent access to other users' submissions
- Validate all Server Action inputs

### Data Validation

```typescript
// Always validate with Zod
const schema = z.object({
  // Define schema
});

const result = schema.safeParse(data);
if (!result.success) {
  // Handle validation error
}
```

## Migration from Business Module

### Reusable Patterns

1. **Layout Structure**: Copy and adapt `business/layout.tsx`
2. **Navigation Items**: Define user-specific nav items
3. **Page Structure**: Follow same page organization
4. **Component Usage**: Use same shared components
5. **Styling**: Apply same Tailwind classes

### Differences

| Aspect | Business Module | User Module |
|--------|----------------|-------------|
| Primary Action | Create quests | Participate in quests |
| Navigation Items | Dashboard, New Quests, Results, Billing | Dashboard, Discover, Profile |
| Data Focus | Quest management | Quest discovery and participation |
| Forms | Quest creation | Quest responses |
| Mode Label | "Business Mode" | "User Mode" |

## Implementation Phases

### Phase 1: Foundation
- Create layout component
- Set up routing structure
- Implement navigation

### Phase 2: Core Pages
- Dashboard page
- Quest discovery page
- Quest detail page

### Phase 3: Participation
- Quest participation flow
- Form handling
- Server Actions

### Phase 4: Profile
- Profile page
- Edit functionality
- Quest history

### Phase 5: Polish
- Error handling
- Loading states
- Accessibility
- Performance optimization

## Dependencies

### Required Packages (Already Installed)

- `next` - Framework
- `react` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling
- `@radix-ui/*` - UI primitives
- `react-hook-form` - Form handling
- `zod` - Validation
- `lucide-react` - Icons
- `date-fns` - Date formatting

### No Additional Packages Needed

All required functionality can be implemented with existing dependencies.

## Conclusion

This design provides a comprehensive blueprint for implementing the User Module. By following the same patterns as the Business Module and leveraging existing shared components, we ensure consistency, maintainability, and rapid development.

The modular architecture allows for incremental implementation, starting with the foundation and progressively adding features. Each component is designed to be testable, accessible, and performant.
