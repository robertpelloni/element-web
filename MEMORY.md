# Memory: Ongoing Observations & Preferences

## Codebase Observations
- The project is a monorepo using `pnpm` (hoisted nodeLinker) and `nx`.
- Transition to MVVM v2 is a core architectural goal, separating dumb views from observable ViewModels.
- `shared-components` is the primary package for reusable UI components and design system integration.
- `apps/desktop` utilizes Electron with native modules rebuilt via `@electron/rebuild`.
- `apps/desktop/src/tray.ts` provides system tray integration allowing window hide/show toggle and application exit (`app.quit()`), tracking favicon badges and window titles.
- `packages/module-api` exports interface declarations and runtime hooks for extensions (`ExtrasApi` callbacks for banners, custom composers, and security UI).
- `pnpm` requires `onlyBuiltDependencies: ["matrix-js-sdk"]` in root `package.json` to permit build scripts for git-hosted dependencies.

## Design Preferences
- Favor arrow functions for class methods to ensure correct `this` binding.
- Prefer `useViewModel` hook for subscribing to view models in React components.
- Utilize `BaseViewModel` and disposables to manage resources and prevent memory leaks.
- Maintain high contrast and accessibility standards (AX compliance, aria labels, and tooltips).
- Documentation should be thorough and located near the code it describes.
- Ensure all backend capabilities have interactive frontend representations with descriptive tooltips.

## Workflow Preferences
- Always synchronize with `upstream/develop`.
- Intelligently merge feature branches, erring on the side of caution.
- Increment version numbers for every release/build cycle and reference them in commit messages.
- Single source of truth for version is `VERSION.md`.
- Regularly update `AGENTS.md`, `ROADMAP.md`, `TODO.md`, `HANDOFF.md`, and other LLM instruction files.
