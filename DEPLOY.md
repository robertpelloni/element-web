# Deployment Instructions

## Web Deployment
- Build the web application: `pnpm build` (runs `nx build`).
- The artifacts are generated in the `apps/web/dist` (or equivalent) directory.
- For development, use `pnpm start` to run the development server.

## Desktop Deployment
- Ensure native modules are built: `pnpm run build:native`.
- Build for the target platform (e.g., `pnpm run build:64` for Windows 64-bit).
- For development, use `pnpm start` from the `apps/desktop` directory.

## Docker Deployment
- Setup docker: `pnpm docker:setup`.
- Install dependencies: `pnpm docker:install`.
- Build native modules: `INDOCKER_SQLCIPHER_BUNDLED=1 pnpm docker:build:native`.
- Build the app: `pnpm docker:build`.
