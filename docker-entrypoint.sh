#!/bin/sh
echo "Applying MinIO Sync..."
node scripts/upload-images.mjs

echo "Starting Next.js..."
exec npx next start -p 80
