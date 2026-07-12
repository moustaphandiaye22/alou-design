# TODO - Refaire le design comme amziistudio.com (alou design)

## Étape 1 — Analyse
- [ ] Valider la structure des pages existantes (Home / Project) et la liste exacte des sections.
- [ ] Lister les composants à aligner : header, hero, about, services, portfolio, gallery, stats, method, testimonials, faq, cta, footer.

## Étape 2 — Mapping avec le site cible
- [ ] Comparer visuellement amziistudio.com : ordre des sections, styles, tailles, breakpoints, animations.
- [ ] Noter les écarts par composant.

## Étape 3 — Implémentation (code)
- [ ] Ajuster `components/site-header.tsx` (layout, typo, CTA, menu mobile).
- [ ] Ajuster `components/hero.tsx` + `components/hero-canvas.tsx`.
- [ ] Ajuster `components/about.tsx`, `components/services.tsx`.
- [ ] Ajuster `components/portfolio.tsx` (masonry, filtres, titres).
- [ ] Ajuster `components/gallery.tsx` (sticky/scroll).
- [ ] Ajuster le reste des sections : `stats`, `method`, `testimonials`, `faq`, `cta`, `site-footer`.
- [ ] Remplacer les textes et assets pour correspondre à "alou design".
- [ ] Vérifier `app/globals.css` et `index.html` (fonts, couleurs, grain/scrollbar).

## Étape 4 — Pages & routing
- [x] Vérifier et aligner la composition de `pages/Home.tsx` avec l’ordre de sections cible (Accueil → Portfolio → À propos → Réserver).
- [ ] Vérifier `App.tsx`, `pages/Project.tsx` pour que les pages/rendus collent au site cible.


## Étape 5 — Tests
- [ ] `npm run dev` : vérifier desktop/tablette/mobile.
- [ ] `npm run build` : vérifier qu’il n’y a pas d’erreurs.

