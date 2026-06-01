#!/usr/bin/env bash
# Syncs the version from VERSION.md to all package.json files in the monorepo.
set -e

VERSION=$(cat VERSION.md | tr -d '[:space:]')
echo "Syncing version $VERSION from VERSION.md..."

# Update root package.json
sed -i 's/"version": "[^"]*"/"version": "'"$VERSION"'"/' package.json

# Update app and package package.jsons
find apps packages -name "package.json" -maxdepth 2 -exec sed -i 's/"version": "[^"]*"/"version": "'"$VERSION"'"/' {} +

echo "Version sync complete."
