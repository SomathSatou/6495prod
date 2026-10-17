# MEGAPLAN — 6495prod.com — Book en ligne

**Client :** Medhi Bousquim — 6495prod (boîte de production)
**Objet :** site vitrine / book en ligne, portfolio au centre
**Référence visuelle :** http://www.anaisnovembre.com/
**Date :** 2026-10-17

---

## 1. Contexte & demande client

Extraits de la demande (WhatsApp, 14/10/2026) :

- « juste hébergement de média, genre book en ligne »
- « un truc qui ressemble à ça » → anaisnovembre.com
- « de mon CV, des contacts, et d'un portfolio à mettre au centre du site »
- « un renvoi sur Infoscope » + « éventuellement aussi un renvoi sur mon mémoire »
- « avoir une vitrine qui recense un peu tout »
- Podcasts et radio à référencer

**Activité 6495prod :** documentaires et reportages pour Infoscope, campagnes
législatives (chargé de campagne numérique), montage vidéo, sens de l'image.

**Liens utiles :**

- https://infoscope.live/ — média associatif (« La Tribune des Sans-Voix ») :
  documentaires (*La fin de leur monde*, *Cent jours qui ébranlèrent la France*,
  *Nous Sommes En Guerre*, *Un Pognon de Dingue*), podcasts (*La Gouline*,
  *La Soupe Angevine*)
- https://www.instagram.com/6495_prod/ — compte pro du client
- Contact connu : 6495prod@gmail.com, book déjà dispo sur LinkedIn

---

## 2. Analyse du site de référence (anaisnovembre.com)

Site fait avec Format.com — structure très simple et réplicable :

- **Header** : nom en grand (ANAIS NOVEMBRE) + navigation en puces
  `• FASHION • BEAUTY • COMMERCIAL • ARTISTS • PERSO I • PERSO II • TRAVELS`
  + entrée « Infos / Contact »
- **Page catégorie** : liste/grille de projets, chaque vignette → galerie d'images
- **Pas de backend**, pas de compte utilisateur, pas de blog — pure vitrine
  image-centrée, minimaliste, laisser respirer les visuels

Traduction pour 6495prod : le « book » version audiovisuelle — les catégories
deviennent les types de production, les galeries deviennent des pages projet
avec visuels + vidéos embarquées.

---

## 3. Direction artistique (d'après le logo Instagram)

Logo récupéré (`logo-6495-instagram.jpg`) : chiffres **6495** blancs,
entrelacés, graisse forte, sans-serif géométrique — sur dégradé
**rouge vif → orange → bordeaux foncé** (coins sombres). Bandeau inférieur
« Mes services » blanc sur fond rouge-orangé.

### Palette proposée

| Token        | Valeur       | Usage                                    |
|--------------|--------------|------------------------------------------|
| `bg`         | `#12060a`    | fond principal, quasi-noir bordeaux      |
| `surface`    | `#1e0b10`    | cartes, sections                         |
| `accent`     | `#ff4d1f`    | rouge-orangé vif du logo (CTA, hover)    |
| `accentDeep` | `#8b0f14`    | bordeaux, dégradés                       |
| `text`       | `#f5f0ed`    | blanc cassé                              |
| `muted`      | `#b8a9a6`    | texte secondaire                         |

### Typographie

- **Display/titres** : sans-serif géométrique gras — *Space Grotesk* ou
  *Archivo Black* (écho aux chiffres du logo), chiffres en features tabulaires
- **Corps** : *Inter* (déjà la base du portfolio, lisible)

### Gestes graphiques

- Dégradé logo en fond de hero et en bandeaux de section (comme « Mes services »)
- Logo 6495 en watermark discret / favicon
- Thumbnails vidéo plein cadre, ratio 16:9, hover avec titre glissant
- Numérotation des sections (01, 02…) qui rappelle le « 6495 »

---

## 4. Stack technique — identique au portfolio

| Brique          | Choix                                    | Justification                          |
|-----------------|------------------------------------------|----------------------------------------|
| Frontend        | React 19 + TypeScript strict + Vite 7    | stack prouvée sur automia.org          |
| Styles          | Tailwind CSS 4 + tokens `index.css`      | conventions du portfolio               |
| Données         | `src/data/works.ts` + composants `Desc*` | pattern portfolio existant             |
| Routing         | hash `#/` + clean URLs SEO + sitemap     | idem                                   |
| Backend         | **aucun** (statique)                     | « juste hébergement de média »         |
| Contact         | mailto + liens réseaux                   | simple, pas de spam, pas de serveur    |
| Médias vidéo    | embeds YouTube / Vimeo / CinéMutins / Twitch | léger, pas de bande passante       |
| Médias audio    | embeds lecteurs podcast (Spotify/etc.)   |                                        |
| Images          | assets statiques optimisés (WebP, lazy)  |                                        |
| Hébergement     | même VPS qu'automia.org, vhost nginx     | déjà opérationnel, certbot HTTPS       |
| CI/CD           | GitHub Actions (même runner self-hosted) | tests + build + deploy                 |

> Option si le client veut un vrai formulaire : réutiliser le pattern
> `ContactAPIView` Django du portfolio, ou un service tiers (Formspree).
> Par défaut : **mailto** — le client a déjà l'habitude de donner son mail.

---

## 5. Arborescence du site

```
/                       Accueil — hero (reel ou image forte), accès rapides
#/portfolio             LE CENTRE — grille/catégories
  #/portfolio/documentaires   Documentaires & longs formats (Infoscope…)
  #/portfolio/reportages      Reportages / vidéos courtes
  #/portfolio/campagnes       Campagnes — chargé de campagne numérique
  #/portfolio/son             Podcasts & radio
  #/portfolio/:slug           Page œuvre : embeds + galerie + rôle + contexte
#/cv                    CV — parcours, compétences (montage, image, numérique),
                        bouton télécharger le PDF
#/infos-contact         Bio courte, mail, Instagram, LinkedIn, mentions
```

**Renvois externes** intégrés : Infoscope.live (footer + section « réalisé
pour »), mémoire (lien ou PDF hébergé dans `public/`).

### Page œuvre (modèle)

- Titre + année + rôle du client (réalisation / montage / cadre / production /
  stratégie numérique)
- Embed vidéo ou lecteur audio
- Galerie photos / captures
- 2–3 lignes de contexte
- Liens : voir sur Infoscope / YouTube / plateforme podcast

---

## 6. Contenus à référencer

### Production Infoscope (à confirmer par le client — quels rôles exacts ?)

- *La fin de leur monde (ça arrive près de chez vous)*
- *Cent jours qui ébranlèrent la France* (docu 100 jours, 2024–25)
- *Les Jours avant la Fin de Leur Monde* (dissolution 2025)
- *Nous Sommes En Guerre* (trilogie santé)
- *Un Pognon de Dingue*
- Reportages / vidéos courtes diverses

### Campagnes

- Campagne(s) législatives — chargé de campagne numérique
  (candidat, année, livrables : visuels, clips, stratégie RS — à préciser)

### Podcasts & radio

- *La Gouline* (Twitch, Infoscope — saison 2)
- *La Soupe Angevine* (podcast Infoscope)
- Autres émissions radio (à lister par le client)

### Autres

- CV (PDF), mémoire (PDF ou lien externe), bio, photo
- LinkedIn (le book y est déjà — récupérer les slides du diapo Insta)

---

## 7. Plan d'implémentation

1. **Scaffold** — `npm create vite` React-TS dans `F:\Pro\Dev\6495prod`,
   Tailwind 4, structure copiée du portfolio (App.tsx router, index.css
   tokens, composants Header/Footer)
2. **DA** — tokens couleurs/typos, hero dégradé, favicon depuis le logo
3. **Composants** — `CategoryNav`, `WorkGrid`, `WorkCard`, `Embed`
   (YouTube/Vimeo/Twitch/lecteur audio), `ProjectPage`, `Gallery`
4. **Données** — `works.ts` (slug, title, year, category, role, embeds[],
   images[], description, links), `seo.json`
5. **Pages** — Home, Portfolio+catégories, Œuvre, CV, Infos/Contact
6. **SEO & perf** — `npm run seo`, og:image, lazy-loading, sitemap
7. **Vérif** — `npm run lint`, `npm run build`, `npm run preview`
8. **Repo & CI** — repo GitHub `6495prod`, workflow test+build+deploy
   (réutiliser le runner self-hosted)
9. **Déploiement** — vhost nginx `6495prod.com` sur le VPS, certbot,
   service statique (ou script `deploy.sh` adapté)

## 8. Vérification

- [ ] Le portfolio est bien au centre : accessible en 1 clic depuis l'accueil
- [ ] Chaque catégorie affiche ses œuvres avec embeds fonctionnels
- [ ] CV consultable et téléchargeable en PDF
- [ ] Mail + Instagram + LinkedIn + Infoscope + mémoire tous accessibles
- [ ] Rendu mobile (le book d'Anaïs est mobile-first)
- [ ] og:image correct quand le client partage le lien
- [ ] HTTPS, www → apex redirect

## 9. Questions ouvertes pour le client

1. **Domaine** — 6495prod.com déjà acheté ? Sinon à réserver vite.
2. **Rôles exacts** sur les productions Infoscope (réa/montage/prod ?) —
   attention aux droits d'affichage, Infoscope doit valider la reprise des visuels
3. **Podcasts & radio** — quelles émissions précisément, quel rôle ?
4. **Mémoire** — PDF hébergé sur le site ou lien externe ?
5. **Reel/bande démo** — vidéo d'accueil existante ou à monter ?
6. **Formulaire contact** — mailto suffit ou vrai formulaire ?
7. **Langue** — français seul (Anaïs est en EN) ?
8. **Assets** — logo HD vectoriel, photos, captures, le diapo du post Insta
9. **Mentions légales** — statut (auto-entrepreneur/SASU), infos obligatoires
10. **Budget temps** — deadline visée ?

## 10. Risques

- **Droits** : les œuvres Infoscope ne sont pas la propriété du client —
  prévoir un accord écrit pour les afficher (le client y a travaillé, ça
  devrait aller, mais à sécuriser)
- **Hébergement vidéo** : ne pas auto-héberger les films — rester sur des
  embeds (YouTube/Vimeo/CinéMutins) pour la bande passante et le RGPD
- **Contenu manquant** : le site est prêt vite, mais sans les visuels/textes
  du client il reste coquille vide — cadrer la liste des assets dès le départ
