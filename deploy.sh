#!/usr/bin/env bash
# Déploiement 6495prod.com sur le VPS — rebuild + restart du conteneur.
# Usage : ~/6495prod/deploy.sh
set -euo pipefail
cd "$(dirname "$0")"

git pull --ff-only
docker compose build
docker compose up -d
echo "Déployé. Vérifier : curl -sI http://127.0.0.1:8082/"
