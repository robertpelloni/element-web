# Memory: Ongoing Observations & Preferences

## Codebase Observations
- The project is a monorepo using `pnpm` and `nx`.
- Transition to MVVM v2 is a core architectural goal.
- `shared-components` is the target for reusable UI components.
- Feature flags and labs are used extensively for new developments.

## Design Preferences
- Favor arrow functions for class methods to ensure correct `this` binding.
- Prefer `useViewModel` hook for subscribing to view models.
- Utilize `BaseViewModel` and disposables to manage resources and prevent memory leaks.
- Maintain high contrast and accessibility standards.
- Documentation should be thorough and located near the code it describes.

## Workflow Preferences
- Always synchronize with `upstream/develop`.
- Intelligently merge feature branches, erring on the side of caution.
- Increment version numbers for every build and reference them in commit messages.
- Regularly update `AGENTS.md` and other LLM instruction files.
