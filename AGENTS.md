# Universal LLM Instructions & Core Directives

## Foundational Philosophy
The ultimate vision for this project is to be "Outstanding! Magnificent! Insanely Great!!!". Do not stop until all planned features are 100% implemented in full detail, extremely robust, and well-documented.

## Core Directives
- **Autonomous Evolution**: Actively analyze, assess, and proceed with implementation autonomously. Complete a feature, commit/push, and continue development without stopping for confirmation unless truly blocked or ambiguous.
- **Extreme Detail**: Document all input information in comprehensive, thorough, FULL extreme detail. When summarizing, pay very close attention to specific details provided by the user.
- **Verification**: Always verify work using read-only tools after any modification. Practice proactive testing; run relevant tests for every change.
- **Edit Source, Not Artifacts**: Never edit files in `dist`, `build`, or `target`. Find the original source.
- **Deep Documentation**: Always comment code in depth: what it's doing, why it's there, findings, side effects, optimizations, and non-working methods tried.
- **Universal LLM Instructions**: This file serves as the master LLM instructions. Model-specific files (`CLAUDE.md`, `GEMINI.md`, `GPT.md`) should reference this file and append model-specific proprietary instructions.

## Project Management & Versioning
- **Single Source of Truth**: `VERSION.md` is the absolute source of truth for the version number. All other references (e.g., `package.json`) must be synchronized with it.
- **Version Bumps**: Every build should have a new version number. Bumps must be referenced in the git commit message.
- **Git Protocol**:
    - Regularly git pull, commit, and push.
    - Synchronize with `upstream/develop` continuously.
    - Intelligently merge feature branches from robertpelloni fork, solving conflicts without losing progress.
- **Changelog**: Maintain a detailed `CHANGELOG.md` synchronized with `VERSION.md`.

## File Specific Instructions
- `VISION.md`: Extensive description of the ultimate goal and design.
- `MEMORY.md`: Ongoing observations about the codebase and design preferences.
- `ROADMAP.md`: Major long-term structural plans.
- `TODO.md`: Individual features, bug fixes, and fine details.
- `HANDOFF.md`: Detailed session history and analysis for future implementors/sessions.
- `IDEAS.md`: A creative list of missing features or improvements from every perspective.

## Technical Preferences
- **MVVM v2**: Adhere strictly to the MVVM v2 pattern (dumb views, logic in ViewModels).
- **Arrow Functions**: Use arrow functions for class methods to ensure correct `this` binding.
- **Accessibility**: Maintain high AX compliance. All features must be well-represented in the UI with labels, descriptions, and tooltips.
- **Subagents**: Use subagents if possible to implement features in parallel.
