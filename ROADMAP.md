# Project Roadmap

## Major Structural Plans

- **Monorepo Optimization**: Continuously improve the monorepo structure for better package management and shared components.
- **MVVM Transition**: Proceed with the transition to MVVM v2 across the entire codebase to improve separation of concerns and testability.
- **Module API Expansion**: Enhance the Module API to allow more powerful third-party integrations and customisations.
- **Cross-Platform Parity**: Ensure feature parity and design consistency between Element Web and Element Desktop.
- **Advanced Audio Handling**: Stabilize and polish audio player and recorder components using the latest Web Audio standards.

## Upcoming Major Features

- **Enhanced Notifications**: Fully implement and polish the new notification settings and panel:
    - _Global & Device Controls_: Account-wide global mute toggle and device-level preferences (desktop previews, audio notifications).
    - _Default Notification Levels_: Fine-grained default levels across rooms and direct messages (All Messages, Mentions & Keywords, Only Mentions).
    - _Audio Alert Customization_: Distinct sound settings for DMs, mentions/keywords, and VoIP calls.
    - _Activity Filtering_: Per-event notification toggles for invites, status changes, and bot notices.
    - _Keyword & Mention Management_: Tag composer for custom keyword highlights with live count badge integration.
    - _Quick Actions_: Instant shortcuts to mark all notifications as read or restore default preferences.
    - _MVVM v2 Transition_: Refactor settings view into a reactive ViewModel to separate business rules and push-rule reconciliation from UI rendering.
- **New Room List**: Complete the implementation and wiring of the new room list, ensuring it's robust and feature-complete.
- **Advanced Encryption UI**: Polish and improve the user interface for encryption management and device verification.
- **Live Location Sharing**: Move live location sharing out of development/labs into a stable feature.
- **Group Calls (MSC3401)**: Fully integrate and stabilize the new group call experience using Element Call.
- **Sliding Sync Optimization**: Fully transition to the simplified sliding sync for improved performance in large accounts.
