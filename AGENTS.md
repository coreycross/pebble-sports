# Repository Guidelines

## Project Structure & Module Organization
This repository contains a Pebble smartwatch app with a C watchapp and a JavaScript phone companion.
- `src/c/`: Pebble watch UI, data models, and app message handling.
- `src/pkjs/`: Phone-side JavaScript (API calls, storage, config).
- `assets/`, `resources/`: Images, vectors, and other media bundled into the app.
- `wscript`: Pebble SDK build configuration.
- `build/`: Generated build artifacts (created by the Pebble SDK).

## Build, Test, and Development Commands
Use the Pebble SDK CLI for builds and installs:
- `npm install`: Install JS dependencies (e.g., `pebble-clay`) needed for the phone companion.
- `pebble build`: Compile the watchapp and bundle the JS.
- `pebble install --emulator basalt`: Install on an emulator (swap platform as needed).
- `pebble logs`: View runtime logs from the emulator/device.

## Coding Style & Naming Conventions
- Indentation: 4 spaces, no tabs.
- C: `snake_case` for functions; `PascalCase` for structs/types like `Game`, `Team`.
- JavaScript: `camelCase` for functions/variables; `const`/`let` preferred over `var` when touching code.
- Keep UI strings short to fit Pebble screen constraints.

## Testing Guidelines
There is no automated test suite in this repo. Validate changes by:
- Building with `pebble build`.
- Running in the emulator and checking logs (`pebble logs`).
- Verifying UI on multiple platforms (aplite/basalt/chalk/diorite).

## Commit & Pull Request Guidelines
Recent commit history uses short, direct, lowercase summaries (e.g., “update version”, “added assets”).
Follow that style: concise, imperative-ish subject lines without prefixes.
For PRs:
- Describe behavior changes and affected screens.
- Include emulator screenshots for UI changes.
- Note any platform-specific differences or Pebble SDK constraints.

## Configuration & Data Notes
- ESPN data is fetched by the phone companion in `src/pkjs/api.js`.
- User settings live in `src/pkjs/config.json` and are handled by Pebble Clay.
