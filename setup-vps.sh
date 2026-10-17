#!/usr/bin/env bash
# Mise en place 6495prod.com sur le VPS — À LANCER AVEC SUDO :
#   sudo bash ~/6495prod/setup-vps.sh
#
# Prérequis : l'enregistrement A de 6495prod.com (et www) doit pointer
# vers l'IP du VPS (51.75.26.7) — à faire dans le manager OVH.
set -euo pipefail
SITE=/home/somath/6495prod

echo "==> 1/4 Groupe docker pour somath"
usermod -aG docker somath

echo "==> 2/4 Vhost nginx (:80, proxy → conteneur)"
cp "$SITE/docker/6495prod.nginx-vhost-http.conf" /etc/nginx/sites-available/6495prod
ln -sf /etc/nginx/sites-available/6495prod /etc/nginx/sites-enabled/6495prod
nginx -t
systemctl reload nginx

echo "==> 3/4 Build + démarrage du conteneur"
cd "$SITE"
docker compose up -d --build

echo "==> 4/4 Certificat HTTPS"
if curl -sI --max-time 5 http://127.0.0.1:8082/ >/dev/null; then
  certbot --nginx -d 6495prod.com -d www.6495prod.com --redirect -n --agree-tos -m 6495prod@gmail.com \
    && systemctl reload nginx \
    && echo "HTTPS actif : https://6495prod.com" \
    || echo "Certbot a échoué — le DNS pointe-t-il déjà vers ce serveur ? Réessayer : sudo certbot --nginx -d 6495prod.com -d www.6495prod.com"
else
  echo "Le conteneur ne répond pas — vérifier : docker compose -f $SITE/docker-compose.yml logs"
fi

echo
echo "Note : somath doit rouvrir sa session pour utiliser docker sans sudo."
echo "Déploiements suivants : $SITE/deploy.sh (git pull + rebuild)."
