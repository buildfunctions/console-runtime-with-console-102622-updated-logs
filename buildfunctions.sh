#!/bin/bash
set -euo pipefail

rm -rf dist
sed -i 's/\r//' ./api/functions/*
tsc --project src/tsconfig.json
cp src/bootstrap src/build.sh src/runtime.sh dist
curl -sfLS "https://import.sh" > dist/import.sh
chmod +x dist/import.sh
