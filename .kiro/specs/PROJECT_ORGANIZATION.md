# Project Organization

Last Updated: 2024-01-05

## 📁 Directory Structure

### Root Level
```
.
├── .kiro/                  # Kiro IDE configuration and specs
├── docs/                   # Reference documentation
├── src/                    # Application source code
├── public/                 # Static assets
└── [config files]          # Next.js, TypeScript, Tailwind configs
```

### Active Documentation (`.kiro/specs/`)

Primary documentation for active development:

```
.kiro/specs/
├── component-library.md              # All reusable components
├── design-tokens.md                  # Colors, spacing, typography
├── mobile-design-guidelines.md       # Responsive design patterns
├── accessibility-guidelines.md       # A11y best practices
├── CHANGELOG.md                      # Design and component changes
├── PROJECT_ORGANIZATION.md           # This file
│
├── design-system-standardization/    # Design system spec
│   ├── requirements.md
│   ├── design.md
│   └── tasks.md
│
├── twin-matrix-card-implementation/  # Twin Matrix spec
│   ├── requirements.md
│   ├── design.md
│   ├── tasks.md
│   └── AGENT_INSTRUCTIONS.md
│
└── user-module/                      # User module spec
    ├── requirements.md
    ├── design.md
    ├── tasks.md
    ├── complete-spec.md
    └── project-context.md
```

### Reference Documentation (`docs/`)

Historical and reference materials:

```
docs/
├── README.md                    # Documentation index
├── architecture/                # Architecture analysis
├── design-system/              # Design system reference
├── specs/                      # Feature specifications
├── assets/                     # PDFs and design assets
└── archive/                    # Historical documentation
    ├── cleanup/               # Cleanup logs
    ├── migration/             # Migration guides
    └── reports/               # Audit reports
```

### Source Code (`src/`)

```
src/
├── app/                        # Next.js App Router
│   ├── actions/               # Server Actions
│   ├── business/              # Business mode pages
│   ├── user/                  # User mode pages
│   └── components/            # App-specific components
│
├── components/                 # Shared components
│   ├── ui/                    # Base UI components (shadcn/ui)
│   ├── shared/                # Shared business components
│   └── user/                  # User-specific components
│
├── lib/                        # Utilities and configurations
│   ├── constants/             # Application constants
│   ├── mock-data/             # Mock data for development
│   ├── types/                 # TypeScript type definitions
│   └── utils.ts               # Utility functions
│
├── hooks/                      # Custom React hooks
├── contexts/                   # React contexts
└── ai/                         # AI/Genkit flows
```

---

## 📝 Documentation Guidelines

### Where to Document

1. **Component Documentation** → `.kiro/specs/component-library.md`
   - Component usage, props, variants
   - Best practices and patterns
   - Examples and code snippets

2. **Design Guidelines** → `.kiro/specs/`
   - Design tokens: `design-tokens.md`
   - Mobile patterns: `mobile-design-guidelines.md`
   - Accessibility: `accessibility-guidelines.md`

3. **Feature Specifications** → `.kiro/specs/[feature-name]/`
   - Requirements, design, and tasks
   - Implementation details
   - Agent instructions

4. **Change Log** → `.kiro/specs/CHANGELOG.md`
   - All design and component changes
   - Breaking changes
   - Version history

5. **Reference Materials** → `docs/`
   - Architecture analysis
   - Design system reference
   - Historical context

### Documentation Workflow

1. **Active Development**
   - Document in `.kiro/specs/`
   - Update `CHANGELOG.md` for changes
   - Keep `component-library.md` current

2. **Completed Features**
   - Ensure specs are complete
   - Update changelog
   - Archive old documentation if needed

3. **Reference Materials**
   - Keep in `docs/` for reference
   - Archive outdated docs to `docs/archive/`

---

## 🗂️ File Organization Rules

### Root Directory
- **Keep clean**: Only essential config files
- **No temporary docs**: Use `.kiro/specs/` instead
- **No .DS_Store**: Already in `.gitignore`

### Documentation
- **Active docs**: `.kiro/specs/`
- **Reference docs**: `docs/`
- **Archive old docs**: `docs/archive/`

### Source Code
- **Organized by feature**: Group related files
- **Shared components**: Reusable across features
- **Type definitions**: Centralized in `lib/types/`

---

## 🧹 Cleanup History

### 2024-01-05 - Project Organization
- Removed temporary root-level documentation files:
  - `IMPLEMENTATION_SUMMARY.md`
  - `STYLE_CONSISTENCY_GUIDE.md`
  - `TOOLTIP_ENHANCEMENT_SUMMARY.md`
  - `TOOLTIP_STYLE_UPDATE.md`
  - `QUEST_ICON_COLORS.md`
  - `PUBLIC_LINKS.md`
  - `.DS_Store`

- Reorganized `docs/` directory:
  - Moved `cleanup/`, `migration/`, `reports/` to `docs/archive/`
  - Updated `docs/README.md` with new structure
  - Created `docs/archive/README.md`

- Updated documentation references:
  - Updated root `README.md`
  - Created `PROJECT_ORGANIZATION.md`

---

## 📚 Quick Reference

### Finding Documentation

| What you need | Where to look |
|--------------|---------------|
| Component usage | `.kiro/specs/component-library.md` |
| Design tokens | `.kiro/specs/design-tokens.md` |
| Mobile patterns | `.kiro/specs/mobile-design-guidelines.md` |
| Recent changes | `.kiro/specs/CHANGELOG.md` |
| Architecture | `docs/architecture/` |
| Design reference | `docs/design-system/` |
| Historical docs | `docs/archive/` |

### Adding New Documentation

1. **New Component**: Update `.kiro/specs/component-library.md`
2. **Design Change**: Update `.kiro/specs/CHANGELOG.md`
3. **New Feature**: Create `.kiro/specs/[feature-name]/`
4. **Reference Material**: Add to `docs/[category]/`

---

## 🎯 Maintenance

### Regular Tasks
- [ ] Update `CHANGELOG.md` for all design changes
- [ ] Keep `component-library.md` current with new components
- [ ] Archive completed specs when no longer active
- [ ] Review and clean up temporary files monthly

### Quarterly Review
- [ ] Archive outdated documentation
- [ ] Update README files
- [ ] Review and consolidate specs
- [ ] Clean up unused files

---

Last Updated: 2024-01-05
