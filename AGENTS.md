# AGENTS.md

This file is for coding agents working in `/home/cervereta/Documentos/landing-parking`.
It documents the current repo state and should override stale notes elsewhere.

## Project Snapshot
- App type: Next.js 16 App Router landing page
- Language: TypeScript with `strict: true`
- UI stack: React 19, Tailwind CSS, Framer Motion, Lucide, CVA in some primitives
- Testing: Jest + React Testing Library
- Package manager: npm (`package-lock.json` in the repo root)
- Path alias: `@/*` maps to the repository root

## Scope
- The main app lives in the repo root
- Ignore `skills/` unless the task explicitly targets it
- `tsconfig.json` excludes `skills`, so root-app changes should stay outside that folder
- Prefer code and config over old docs when they disagree

## Source of Truth
- `package.json`
- `tsconfig.json`
- `jest.config.ts`
- `eslint.config.mjs`
- `tailwind.config.ts`
- actual component and app code

## Development Commands

### Dev server
```bash
npm run dev
```
- Starts Next.js locally
- Default URL: `http://localhost:3000`

### Production build
```bash
npm run build
```
- Use this after meaningful UI, routing, or TypeScript changes

### Lint
```bash
npm run lint
```
- Runs ESLint from `eslint.config.mjs`

### Full tests
```bash
npm run test
```

### Watch mode
```bash
npm run test:watch
```

### Coverage
```bash
npm run test:coverage
```

## Deployment

### Manual Vercel deploy
```bash
vercel --prod
```
- Use this for manual production deploys of the landing
- Prefer running `npm run build` locally first after meaningful changes
- Treat Vercel as the expected deployment target unless the task says otherwise

### Deployment notes
- The main app is deployed manually with Vercel CLI
- Do not assume CI/CD is configured unless the repo is updated to show it
- Storybook is no longer part of this project and should be treated as removed

### Pre-deploy checklist
```bash
npm run build
npm run lint
npm run test
vercel --prod
```
- Use the full checklist before important production deploys
- For very small copy or style changes, `npm run build` is the minimum useful gate

## Running a Single Test

Run one file:
```bash
npm test -- __tests__/ui/Button.test.tsx
```

Run one test by name:
```bash
npm test -- __tests__/ui/Button.test.tsx -t "renders correctly"
```

Equivalent Jest pattern form:
```bash
npm test -- --testNamePattern="renders correctly"
```

## Test Layout
- Tests currently live under `__tests__/`
- Jest matches `__tests__/**/*.[jt]s?(x)` and `*.test.*` / `*.spec.*`
- Test environment is `jsdom`
- Shared setup file: `jest.setup.ts`

## Repository Structure
- `app/`: App Router entry points and global styles
- `components/layout/`: shell components such as `Header` and `Footer`
- `components/landing/`: landing-specific sections used by `app/page.tsx`
- `components/ui/`: reusable UI building blocks
- `lib/`: hooks, analytics, tokens, utilities
- `types/`: shared interfaces and exported types

## Import Conventions
- Prefer framework and external imports first, internal imports after
- Use `@/` for cross-folder imports
- Use relative imports for same-folder modules such as `./Header`
- Use `import type` when it improves clarity
- Keep imports minimal and remove unused ones

## Formatting Conventions
- Follow the style already present in the file you touch
- Do not mass-reformat unrelated code
- The repo has mixed local styles:
  - many app files use single quotes and semicolons
  - some UI primitives use double quotes and omit semicolons
- Preserve local consistency instead of enforcing a new global style

## Naming Conventions
- React components: PascalCase
- Hooks: camelCase with `use` prefix
- Utility functions: camelCase
- Interfaces and exported types: PascalCase
- File names are mixed; match nearby files instead of renaming broadly

## TypeScript Guidance
- Keep code compatible with `strict: true`
- Prefer explicit prop types for components
- Prefer `interface` for props and shared object shapes that extend DOM attributes
- Use union types for variants and finite state values
- Avoid `any`; prefer `unknown`, generics, or proper narrowing
- Keep exported types small and composable

## React and Next.js Guidance
- Use server components by default
- Add `'use client';` only for hooks, browser APIs, local state, or direct interactivity
- Follow App Router patterns already used in `app/`
- Keep metadata in `app/layout.tsx` or route-level files when appropriate
- Reuse the `@/components/landing` barrel when it matches local patterns

## Styling Guidance
- Tailwind is the primary styling system
- Reuse the existing neo-brutalist visual language before inventing new patterns
- Prefer existing tokens/classes such as `asphalt`, `ink`, `safety`, `warning`, and `brutal-*`
- Shared global utility/component classes live in `app/globals.css`
- Tailwind theme extensions live in `tailwind.config.ts`
- Do not assume shadcn-style semantic tokens are fully wired across the app

## CVA and Primitives
- `class-variance-authority` is used in some reusable UI primitives
- Use CVA when extending an existing CVA-based primitive
- Do not force CVA into landing components that already use plain Tailwind patterns

## Error Handling
- Fail loudly for invalid hook usage or impossible states when appropriate
- Throw clear programmer-facing errors, as in `useTheme`
- Guard access to `window`, `document`, and `localStorage` in browser-only code
- Keep error handling narrow; avoid swallowing errors silently

## Testing Guidance
- Use React Testing Library patterns: `render`, `screen`, user-facing assertions
- Prefer accessible queries over implementation details when possible
- Keep tests focused on behavior, not internals
- Use `jest.fn()` for mocks and callback assertions
- Update stale tests carefully; some current tests lag behind the latest UI APIs

## Known Inconsistencies
- The repo mixes older UI primitives with the newer landing implementation
- Some `components/ui/` files appear legacy or partially adapted
- There are overlapping components, including multiple `Footer` implementations
- Some tests reference outdated variants or class names
- Some docs may still mention old Storybook work; treat those references as historical unless they have already been removed
- Avoid “fixing” unrelated legacy code unless the task requires it

## Cursor and Copilot Rules
- No active rules were found in `.cursor/rules/`
- No `.cursorrules` file was found
- No `.github/copilot-instructions.md` file was found
- Do not invent extra tool-specific rules that are not present in the repo

## Safe Agent Behavior
- Make the smallest change that solves the task
- Preserve unrelated user changes
- Verify with the smallest useful command when practical
- Prefer root-app changes over excluded or auxiliary folders
- Do not reintroduce Storybook unless the user explicitly asks for it

## Recommended Verification
- Build-sensitive change: `npm run build`
- Lint-sensitive change: `npm run lint`
- Component/test change: `npm test -- <path-to-test>`
- Broad behavior change: `npm run test`

## Practical Defaults
- Use npm, not yarn/pnpm/bun
- Use `@/` imports for non-local modules
- Preserve the file's existing quote and semicolon style
- Prefer incremental fixes over sweeping refactors
- Ignore `skills/` unless explicitly requested
