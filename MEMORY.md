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

## Protocol & Architectural Memory

- **Protocol & Authorization Resilience**: In MVVM v2 ViewModels, always guard client operations (e.g. `client.getUserId()`) for non-null values before evaluating permissions like `room.canInvite()`. Wrap Matrix room tagging and state mutations in try-catch blocks to prevent unhandled rejection crashes in UI callbacks.
- **Hot-Path Regular Expression Caching**: When compiling regular expressions in loops or high-frequency string replacements (e.g. `replaceByRegexes` in `packages/shared-components/src/core/i18n/i18n.tsx`), cache compiled `RegExp` instances in a module-level `Map` and always reset `regexp.lastIndex = 0` before matching.
- **Cross-Platform Script Portability**: Never assume POSIX-only directory separators or path structures in `scripts/`. Always use `path.isAbsolute` and `path.sep` or test for Windows drive letters (`/^[a-zA-Z]:[/\\]/`) before prefixing paths.
- **TypeScript 6.0 Same-Stem Resolution Collisions**: Never place `.ts` and `.tsx` files sharing identical base filenames in the same directory (e.g. `Foo-test.ts` and `Foo-test.tsx`). TypeScript 6 drops the `.tsx` from file matching unless explicitly listed in `files`, which triggers ESLint `parserOptions.project` missing-file errors.
