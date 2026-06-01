# TODO List

## High Priority
- [x] **Decryption Failure Hiding**: Implement hiding of events that fail to decrypt instead of showing error placeholders (Revisit https://github.com/element-hq/element-meta/issues/2449).
- [x] **Native Module Docs**: Complete Linux and OS X setup instructions in `docs/native-node-modules.md`.
- [ ] **Version Synchronization**: Ensure all `package.json` files and documentation refer to the single source of truth in `VERSION.md`.
- [x] **Feature Branch Audit**: Review and merge remaining robertpelloni-specific feature branches.
- [ ] **Accessibility Audit**: Conduct a comprehensive accessibility audit of the new room list and navigation landmarks.

## Features & Polish
- [ ] Improve icon rendering accessibility across all components.
- [ ] Enhance tooltips and descriptions for all lab features.
- [ ] Refactor legacy components to use MVVM v2 where applicable.
- [ ] Combine redundant functionality in the UI to streamline the user experience.

## Bugs & Technical Debt
- [ ] Address Windows-specific path issues in `scripts/analyse_unused_exports.ts`.
- [ ] Implement `workflow_call` reusables in mermaid diagram generation scripts.
- [ ] Cache regexps in `packages/shared-components/src/core/i18n/i18n.tsx`.
