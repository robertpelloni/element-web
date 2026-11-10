# Session Handoff & Continuity Notes

## 1. Monorepo Architecture & Build System

- **Structure**: Monorepo managed with `pnpm` workspaces (v10.32.1) and Nx.
    - `apps/web`: Element Web React/TypeScript client.
    - `apps/desktop`: Element Desktop Electron shell.
    - `packages/shared-components`: Reusable UI component library (Storybook + Vite + Tailwind + Compound).
    - `packages/module-api`: Element Web module interface definitions and plugin engine.
    - `packages/playwright-common`: Shared end-to-end testing fixtures and test containers.
    - `packages/vite-common`: Common Vite configuration helpers.
- **Node & Memory Limits**: Monorepo ESLint runs (`pnpm -r --if-present run lint:js`) require `NODE_OPTIONS="--max-old-space-size=8192"` to avoid V8 heap allocation limits across the large codebase.
- **TypeScript 6.0 Behavior**: In TypeScript 6.0, when both `<name>.ts` and `<name>.tsx` share the same path stem in a directory (e.g. `RoomUploadViewModel-test.ts` and `RoomUploadViewModel-test.tsx`), TypeScript configuration resolution drops the lower-priority extension unless explicitly named in `files`. Renaming `RoomUploadViewModel-test.tsx` to `RoomUploadContextProvider-test.tsx` resolved the conflict cleanly while preserving 100% of the original unit test coverage.

## 2. CI, Typecheck & Linter Resolvability

- **Public API Documentation**: `@element-hq/element-web-module-api` uses `@microsoft/api-extractor`. When updating models in `packages/module-api/src/models/`, run `pnpm exec nx build @element-hq/element-web-module-api` and sync changes to `packages/module-api/element-web-module-api.api.md`.
- **i18n Workflow**: Localization strings reside in `apps/web/src/i18n/strings/en_EN.json`. Any new strings must match placeholder arguments and pass `pnpm -C apps/web i18n:lint`. Keys `timeline|m.room.avatar|changed_img` and `timeline|m.room.avatar|removed` are synchronized with `<img/>` tag markup.
- **Knip Configuration**: Unlisted binaries (`build-stats`, `diff-i18n`) and `.devcontainer` tooling are configured under `knip.ts` so `pnpm lint:knip` passes cleanly with 0 unused files.
- **GeoJSON Type Support**: `apps/web/tsconfig.json` includes `"geojson"` under `compilerOptions.types` to support `@maplibre` type definitions.

## 3. Room List MVVM v2 Enhancements

- **Defensive Data Handling**:
    - `apps/web/src/viewmodels/room-list/RoomListViewModel.ts`: Defensive checks added to `updateRoomsMap`, `roomIds`, and `getRoomItemViewModel` to prevent race conditions during space switches or async tag updates.
    - `changeRoomSection`: Validates inputs and catches tagging errors gracefully.
    - `onRoomTagged`: Re-runs `updateRoomListData(false)` to preserve sticky room positioning during tagging operations.
- **Test Coverage**:
    - `RoomListViewModel-test.tsx`: 64 tests passing.
    - `RoomListItemViewModel-test.tsx`: 42 tests passing with coverage for null user IDs and room tagging rejections.
    - `RoomListSectionHeaderViewModel-test.ts`: 28 tests passing.
    - `RoomUploadViewModel-test.ts` & `RoomUploadContextProvider-test.tsx`: 19 tests passing.
    - `shouldHideEvent-test.ts`: 2 tests passing.

## 4. Performance & Script Tooling Optimizations

- **i18n Regular Expression Caching**: Added in-memory `RegExp` caching with explicit `lastIndex = 0` resets in `packages/shared-components/src/core/i18n/i18n.tsx` to optimize repeated string token replacements.
- **Cross-Platform Path Normalization**: Updated `scripts/analyse_unused_exports.ts` with `path.isAbsolute` and Windows drive letter / UNC guards to support both POSIX and Windows runtimes.
- **Mermaid Automation Triggers**: Added `workflow_call` reusable workflow trigger node support in `scripts/gen-workflow-mermaid.ts`.

## 5. Frontend Verification

- Verified Element Web welcome interface by building production artifacts and capturing visual rendering via Playwright at port 8080 (`/home/jules/verification/element-web-welcome.png`).
