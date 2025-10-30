export const ROUTES = {
  HOME: '/',
  BUSINESS: {
    ROOT: '/business',
    DASHBOARD: '/business/dashboard',
    QUESTS: {
      ROOT: '/business/quests',
      NEW: '/business/quests/new',
      CONFIGURE: '/business/quests/new/configure',
      REVIEW: '/business/quests/new/review',
    },
    RESULTS: '/business/results',
    BILLING: '/business/billing',
    COMPONENTS_DEMO: '/business/components-demo',
  },
} as const
