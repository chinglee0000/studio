# User Module

This is the C-side (Consumer-side) interface for the twin3 marketplace, where users can discover and participate in quests.

## Current Status: Skeleton Implementation ✅

The basic architecture and routing structure is complete. All pages are created with placeholder content.

## Structure

```
/user
├── layout.tsx              # User Module layout with 4-item navigation
├── page.tsx                # Redirects to /user/dashboard
├── dashboard/              # User dashboard
├── quests/                 # Quest marketplace
│   ├── page.tsx           # Quest discovery/list
│   └── [id]/              # Dynamic quest routes
│       ├── page.tsx       # Quest detail
│       └── participate/   # Quest participation flow
├── agents/                 # AI Agents management
└── profile/               # User profile hub
    ├── page.tsx          # Profile overview with links to sub-pages
    ├── wallet/           # Transaction history and rewards
    ├── matrix/           # Twin Matrix visualization
    ├── history/          # Quest history
    └── settings/         # Account settings
```

## Navigation

The User Module features 4 main navigation items:

1. **Dashboard** - Main landing page with quest overview
2. **Quests** - Browse and discover available quests
3. **Agents** - Manage personalized AI agents
4. **Profile** - Access wallet, matrix, history, and settings

### Responsive Navigation

- **Desktop (≥768px)**: Left sidebar with collapsible support
- **Mobile (<768px)**: Bottom navigation bar (Material Design 3 style)

## Routes

All routes are defined in `src/lib/constants/routes.ts`:

```typescript
ROUTES.USER.DASHBOARD           // /user/dashboard
ROUTES.USER.QUESTS.ROOT         // /user/quests
ROUTES.USER.QUESTS.DETAIL(id)   // /user/quests/:id
ROUTES.USER.QUESTS.PARTICIPATE(id) // /user/quests/:id/participate
ROUTES.USER.AGENTS              // /user/agents
ROUTES.USER.PROFILE.ROOT        // /user/profile
ROUTES.USER.PROFILE.WALLET      // /user/profile/wallet
ROUTES.USER.PROFILE.MATRIX      // /user/profile/matrix
ROUTES.USER.PROFILE.HISTORY     // /user/profile/history
ROUTES.USER.PROFILE.SETTINGS    // /user/profile/settings
```

## Next Steps

### Phase 1: Dashboard Implementation
- My Status component (avatar, level, earnings)
- In-Progress Quests list
- Matrix Growth Preview widget

### Phase 2: Quest Discovery
- Quest cards with filtering
- Search functionality
- Quest detail page

### Phase 3: Quest Participation
- Step-by-step flow
- Form handling
- AI interaction interface

### Phase 4: Agents Management
- Agent cards
- Status management
- Performance tracking

### Phase 5: Profile Features
- Wallet with transaction history
- Twin Matrix visualization
- Quest history table
- Settings management

### Phase 6: Advanced Features
- Hero Theme (purple theme for Hero level users)
- Real-time updates
- Notifications
- Analytics

## Design System

- **Framework**: Material Design 3
- **Theme**: Light/Dark mode support
- **Typography**: Kanit (headings), Montserrat (body)
- **Colors**: CSS variables from theme
- **Components**: Reusing shared components from `/src/components/shared`

## Server Actions

User-related server actions will be implemented in `src/app/actions/user-actions.ts`.

## Notes

- All pages are currently Server Components except where client interactivity is needed
- The layout is a Client Component to support responsive navigation hooks
- The structure mirrors the Business Module for consistency
- Empty pages are intentional - content will be added incrementally
