#!/usr/bin/env bash
# Déploiement 6495prod.com sur le VPS — rebuild + restart du conteneur.
# Usage : ~/6495prod/deploy.sh
set -euo pipefail
cd "$(dirname "$0")"

git pull --ff-only
if docker compose version >/dev/null 2>&1; then
  docker compose build
  docker compose up -d
else
  docker build -t book-6495prod .
  docker rm -f book-6495prod 2>/dev/null || true
  docker run -d --name book-6495prod --restart unless-stopped -p 127.0.0.1:8082:80 book-6495prod
fi
echo "Déployé. Vérifier : curl -sI http://127.0.0.1:8082/"
