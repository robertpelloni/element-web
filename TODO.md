# TODO List

## High Priority

- [x] **Decryption Failure Hiding**: Implement hiding of events that fail to decrypt instead of showing error placeholders.
- [x] **Native Module Docs**: Complete Linux and OS X setup instructions in `docs/native-node-modules.md`.
- [x] **Version Synchronization**: Ensure all `package.json` files and documentation refer to the single source of truth in `VERSION.md` (`1.12.20`).
- [x] **Feature Branch Audit**: Review and merge remaining robertpelloni-specific feature branches.
- [x] **Help & About UI Enhancements**: Add explicit repository, documentation links, runtime background service details, and tooltip guidance in `HelpUserSettingsTab`.
- [x] **Module API Extras Support**: Export callback types (`RoomBannerCallback`, `ComposerLeftComponentCallback`, `EventContentTransformCallback`, `RoomSettingsSecurityCallback`) from `packages/module-api`.
- [ ] **Accessibility Audit**: Conduct a comprehensive accessibility audit of the new room list and navigation landmarks.

## Features & Polish

- [ ] Improve icon rendering accessibility across all components.
- [ ] Enhance tooltips and descriptions for all lab features.
- [ ] Refactor legacy components to use MVVM v2 where applicable.
- [ ] Combine redundant functionality in the UI to streamline user experience.
- [ ] Implement consolidated single-page dashboard view for general account and app settings.

## Bugs & Technical Debt

- [ ] Address Windows-specific path issues in `scripts/analyse_unused_exports.ts`.
- [ ] Implement `workflow_call` reusables in mermaid diagram generation scripts.
- [ ] Cache regexps in `packages/shared-components/src/core/i18n/i18n.tsx`.
- [ ] Harmonize Storybook stories in `shared-components` with CSF3 / CSF4 requirements.
