# DIGITECH — SPECIFICATIONS.md

## 0. Informations générales

- **Nom du projet :** DIGITECH
- **Nature du projet :** Site vitrine d'entreprise
- **Secteur :** Matériel informatique et produits électroniques
- **Objectif principal :** Présenter la marque, son univers, ses catégories de produits, ses services et ses tarifs, puis permettre aux visiteurs de trouver les informations de contact officielles lorsqu'elles seront disponibles.
- **Langue principale :** Français
- **Direction artistique :** Premium clair, minimaliste, inspiré des principes de design des grandes marques technologiques.
- **Logo :** Logo typographique temporaire « DIGITECH ».
- **Stack technique :** HTML5, CSS3 et JavaScript natif.
- **Pages :** Accueil, Services, Tarifs et Contact.
- **Mode commercial :** Site vitrine, sans panier, sans commande en ligne et sans paiement en ligne.
- **Priorités :** Qualité visuelle, expérience mobile, référencement naturel, facilité de maintenance et fiabilité.

---

# 1. RÔLE ET MISSION

Tu interviens en tant que développeur front-end senior, architecte front-end et designer UI/UX.

Tu dois concevoir et implémenter un site vitrine complet pour DIGITECH, en respectant strictement les présentes spécifications.

Le résultat doit être un véritable projet web, pas une simple maquette, une capture d'écran, une proposition graphique ou un ensemble de fragments de code.

Tu dois créer ou modifier les fichiers directement dans le répertoire de travail autorisé.

## 1.1. Principes de travail

1. Examiner le répertoire de travail avant toute modification.
2. Identifier les fichiers et les ressources déjà présents.
3. Préserver le travail existant lorsqu'il est pertinent.
4. Construire une architecture claire, simple et maintenable.
5. Implémenter réellement les fonctionnalités demandées.
6. Ne pas inventer les informations métier manquantes.
7. Vérifier le fonctionnement du site avant de déclarer le projet terminé.
8. Documenter les limitations et les fonctionnalités qui nécessitent un service externe.
9. Éviter les dépendances inutiles et les solutions payantes obligatoires.
10. Ne pas ajouter de complexité technique qui ne répond pas à un besoin réel.

Ne te contente pas de proposer un plan : réalise effectivement le travail demandé.

---

# 2. VISION DU PRODUIT

DIGITECH doit posséder une présence web professionnelle, crédible et moderne.

Le site doit permettre aux visiteurs de comprendre rapidement :

- Ce qu'est DIGITECH.
- L'univers informatique et électronique de la marque.
- Les grandes catégories de produits présentées.
- Les services réellement proposés, une fois leur contenu confirmé.
- Les informations tarifaires disponibles.
- La manière de contacter l'entreprise lorsque ses coordonnées seront renseignées.

Le site ne doit pas fonctionner comme une boutique en ligne.

## 2.1. Fonctionnalités hors périmètre

Ne pas développer dans cette version :

- Un panier d'achat.
- Un tunnel de commande.
- Un paiement en ligne.
- Un espace client.
- Une authentification.
- Une gestion de stock.
- Un tableau de bord administrateur.
- Une base de données.
- Une API métier.
- Un système de commande fictif.
- Des comptes utilisateurs.

Ces fonctionnalités pourront faire l'objet d'un cahier des charges distinct si le projet évolue ultérieurement vers une boutique en ligne.

---

# 3. DIRECTION ARTISTIQUE

## 3.1. Concept général

Créer une interface claire, premium, minimaliste et contemporaine.

L'inspiration recherchée repose sur les qualités suivantes :

- Simplicité visuelle.
- Typographie soignée.
- Images de grande qualité.
- Hiérarchie visuelle évidente.
- Espaces généreux.
- Transitions fluides.
- Présentation éditoriale des produits technologiques.
- Peu d'éléments décoratifs inutiles.
- Cohérence entre toutes les pages.

S'inspirer des principes généraux du design technologique haut de gamme sans copier exactement un site existant, son logo, ses textes ou ses compositions distinctives.

Le résultat doit posséder sa propre identité DIGITECH.

## 3.2. Palette de couleurs

Centraliser les couleurs dans `css/variables.css`.

Palette initiale recommandée :

- Fond principal : `#FFFFFF`
- Fond secondaire : `#F5F6F8`
- Surface des cartes : `#FFFFFF`
- Texte principal : `#17181A`
- Texte secondaire : `#666A73`
- Bordures : `#E5E7EB`
- Couleur d'accent : `#1769E0`
- Accent au survol : `#1255B8`

Cette palette constitue une proposition initiale, pas une charte officielle fournie par l'entreprise.

Utiliser la couleur d'accent avec mesure pour les boutons, les liens importants et certains états interactifs.

Vérifier les contrastes et ajuster les couleurs si nécessaire afin de respecter les objectifs d'accessibilité.

## 3.3. Typographie

Utiliser une police sans empattement moderne, lisible et adaptée à une marque technologique.

Privilégier :

- Une police système performante ou une police libre adaptée.
- Des titres de grande taille sur la page d'accueil.
- Des paragraphes courts et lisibles.
- Une hiérarchie claire entre les différents niveaux de titres.
- Des tailles fluides avec `clamp()` lorsque cela est pertinent.
- Une hauteur de ligne confortable.

Prévoir des polices de remplacement pour garantir la lisibilité si une police externe n'est pas disponible.

Ne pas rendre le fonctionnement du site dépendant d'un service typographique externe.

## 3.4. Espacement et composition

Utiliser un système cohérent d'espacements, par exemple une échelle basée sur 4 ou 8 pixels.

Prévoir :

- Un conteneur principal centré.
- Une largeur maximale adaptée aux grands écrans.
- Des marges latérales fluides.
- Des sections suffisamment espacées.
- Des grilles équilibrées.
- Des alignements cohérents.
- Des rayons de bordure discrets.
- Des ombres légères, uniquement lorsqu'elles apportent une réelle valeur.

Éviter les interfaces surchargées, les bordures excessives et les cartes répétitives sans hiérarchie visuelle.

## 3.5. Logo temporaire

Créer un logo typographique temporaire portant le nom :

DIGITECH

Le logo doit être lisible, élégant et cohérent avec la direction artistique.

Il doit être conçu de manière à pouvoir être remplacé ultérieurement par un véritable logo, sans nécessiter de reconstruire le header.

Ne pas prétendre que ce logo est la marque graphique officielle.

---

# 4. ARCHITECTURE DES PAGES

Le site comprend quatre pages principales :

1. Accueil.
2. Services.
3. Tarifs.
4. Contact.

Toutes les pages doivent partager les mêmes règles visuelles, le même système de navigation et le même footer.

## 4.1. Page Accueil — `index.html`

### Objectif

Présenter DIGITECH et orienter le visiteur vers les catégories de produits, les services, les tarifs et le contact.

### A. Header

Créer une barre de navigation professionnelle comprenant :

- Le logo typographique DIGITECH.
- Un lien Accueil.
- Un lien Services.
- Un lien Tarifs.
- Un lien Contact.
- Un état visuel permettant d'identifier la page active.
- Un menu mobile fonctionnel.
- Un comportement cohérent au défilement.

Le header peut être fixe ou rester visible lors du défilement, à condition que ce choix améliore réellement l'expérience utilisateur.

Sur mobile, remplacer la navigation horizontale par un menu compact et accessible.

### B. Hero section

Créer une section principale visuellement forte, avec :

- Un titre principal immédiatement compréhensible.
- Un texte d'introduction court.
- Un visuel technologique de grande qualité.
- Un appel à l'action principal.
- Un appel à l'action secondaire si nécessaire.

Le titre doit présenter DIGITECH sans inventer de promesse commerciale.

Les textes de marque définitifs ne sont pas encore fournis. Employer une formulation provisoire, sobre et facilement modifiable.

Ne pas inventer de slogan officiel.

Le visuel principal doit correspondre à l'univers informatique et électronique.

### C. Présentation de la marque

Créer une section expliquant l'univers de DIGITECH.

Elle peut comporter :

- Un titre de section.
- Un paragraphe de présentation.
- Une composition typographique élégante.
- Un visuel complémentaire si cela améliore la compréhension.

Ne pas inventer l'histoire de l'entreprise, sa date de création, sa taille, son emplacement ou ses valeurs officielles.

### D. Catégories de produits

Cette section est une priorité visuelle du site.

Présenter des catégories illustrées plutôt qu'un catalogue détaillé de produits.

Catégories envisageables pour organiser le contenu, à confirmer avant publication :

- Informatique.
- Ordinateurs et équipements.
- Périphériques et accessoires.
- Smartphones et accessoires mobiles.
- Audio et équipements multimédias.
- Autres équipements électroniques.

Cette liste constitue une proposition de structure. Ne pas présenter une catégorie comme une offre commerciale confirmée si elle n'a pas été validée par le propriétaire du projet.

Chaque catégorie peut comprendre :

- Une image ou illustration.
- Un titre.
- Une description courte, si elle est pertinente.
- Un lien vers une section ou une page existante, uniquement si la destination est réellement fonctionnelle.

Ne pas ajouter de faux boutons « Acheter », de prix fictifs, de stock simulé ou de fonctionnalités de boutique.

Si aucune page de catalogue n'existe, les cartes de catégories doivent rester des éléments de présentation visuelle et ne pas simuler une navigation inexistante.

### E. Présentation des services

Créer une section courte présentant les services de DIGITECH, puis orienter le visiteur vers la page Services.

Tant que les prestations réelles ne sont pas confirmées, utiliser une structure neutre et modifiable.

Ne pas inventer de prestations de réparation, d'installation, de maintenance, de livraison ou de conseil comme si elles étaient réellement proposées.

### F. Section de contact

Ajouter une section de conversion comprenant :

- Un titre invitant le visiteur à prendre contact.
- Une courte phrase.
- Un bouton conduisant à la page Contact.

Ne pas afficher de numéro, d'adresse e-mail ou de compte social fictif.

### G. Footer

Le footer doit comporter :

- Le logo typographique DIGITECH.
- Les liens vers les quatre pages.
- Une zone destinée aux coordonnées officielles.
- Une zone destinée aux réseaux sociaux, à afficher uniquement lorsque les URL existent.
- L'année de copyright générée automatiquement.

Ne pas afficher de coordonnées fictives ni de liens vides.

---

## 4.2. Page Services — `services.html`

### Objectif

Présenter les prestations réelles de DIGITECH.

### Structure

1. Header commun.
2. Introduction de la page.
3. Zone de présentation des services.
4. Section de contact.
5. Footer commun.

Chaque service, lorsqu'il est confirmé, peut être présenté dans une carte comprenant :

- Un titre.
- Une description.
- Une illustration facultative.
- Un appel à l'action pertinent, si une destination existe.

Créer une structure facile à compléter.

Tant que les services réels ne sont pas connus, ne pas publier une liste inventée.

Prévoir un état éditorial provisoire qui pourra être remplacé facilement par le contenu officiel.

---

## 4.3. Page Tarifs — `tarifs.html`

### Objectif

Expliquer comment obtenir les informations tarifaires de DIGITECH.

Les prix officiels n'ont pas été fournis.

### Structure

1. Header commun.
2. Titre et introduction.
3. Zone de présentation des tarifs, lorsque les informations seront disponibles.
4. Message de contact.
5. Footer commun.

### Règles

- Ne jamais inventer un montant.
- Ne jamais inventer une réduction.
- Ne jamais afficher de faux prix barré.
- Ne jamais inventer une devise officielle.
- Ne jamais présenter une offre comme disponible sans confirmation.

En l'absence de tarifs validés, afficher une information claire expliquant que les prix doivent être confirmés auprès de DIGITECH, puis proposer un lien vers la page Contact.

Ne pas créer de fausses formules commerciales ou de niveaux d'abonnement fictifs.

La page doit rester visuellement soignée même lorsqu'elle contient peu d'informations.

---

## 4.4. Page Contact — `contact.html`

### Objectif

Permettre au visiteur de trouver les moyens de contacter DIGITECH.

Les coordonnées officielles n'ont pas encore été fournies.

### Structure

1. Header commun.
2. Titre et introduction.
3. Zone réservée aux coordonnées officielles.
4. Formulaire de contact facultatif dans cette version.
5. Footer commun.

### Coordonnées

Ne pas inventer :

- Numéro de téléphone.
- Adresse e-mail.
- Adresse physique.
- Numéro WhatsApp.
- Horaires d'ouverture.
- Liens vers les réseaux sociaux.

Ne pas afficher de faux liens ni de boutons sans destination.

Les coordonnées doivent pouvoir être ajoutées facilement dans un fichier de configuration documenté.

### Formulaire

Si un formulaire est implémenté :

- Ajouter un champ Nom.
- Ajouter un champ E-mail.
- Ajouter un champ Sujet facultatif.
- Ajouter un champ Message.
- Ajouter des libellés accessibles.
- Vérifier les champs obligatoires côté client.
- Vérifier le format de l'e-mail.
- Présenter les erreurs en français.
- Permettre une navigation au clavier.

**Limite essentielle :** un formulaire HTML/JavaScript seul ne transmet pas un message à l'entreprise.

Ne pas afficher « Message envoyé » si aucune transmission réelle n'a eu lieu.

Si aucun backend ou service de traitement n'est configuré, afficher un état explicatif honnête et documenter le point d'intégration nécessaire.

Ne pas collecter de données personnelles inutiles.

---

# 5. SYSTÈME D'ANIMATION

## 5.1. Direction

Le site doit comporter des animations immersives, fluides et élégantes, tout en conservant une esthétique premium claire.

L'immersion doit provenir de la qualité du mouvement, de la composition et des transitions, et non d'une accumulation d'effets.

### Animations souhaitées

- Apparition progressive du contenu principal.
- Révélation discrète des sections lors du défilement.
- Transitions douces sur les images.
- Effets de survol élégants sur les catégories.
- Animations des boutons et liens.
- Transitions cohérentes lors de l'ouverture du menu mobile.
- Déplacements ou variations d'échelle subtils, si pertinents.

Les animations doivent renforcer la hiérarchie visuelle.

## 5.2. Contraintes

- Éviter les animations permanentes sans utilité.
- Éviter les mouvements rapides ou agressifs.
- Ne pas bloquer l'accès au contenu pendant une animation.
- Éviter les décalages de mise en page.
- Privilégier `transform` et `opacity` lorsque cela est adapté.
- Utiliser JavaScript uniquement lorsque CSS ne suffit pas.
- Ne pas installer une bibliothèque d'animation lourde sans justification.
- Limiter les animations déclenchées au défilement.
- Garantir que le contenu reste visible si JavaScript est désactivé.

Respecter `prefers-reduced-motion`.

Lorsqu'un utilisateur préfère réduire les animations, désactiver ou réduire les mouvements non essentiels.

Ne pas reproduire exactement les animations propriétaires d'un site existant.

---

# 6. STACK TECHNIQUE

## 6.1. Technologies imposées

- HTML5.
- CSS3.
- JavaScript natif moderne.
- Aucun framework obligatoire.
- Aucune compilation obligatoire.
- Aucune base de données.
- Aucun backend dans cette version.
- Aucune dépendance payante obligatoire.

Le site doit être simple à comprendre et à modifier par un débutant.

## 6.2. Principes de développement

- Utiliser du HTML sémantique.
- Séparer la structure, le style et le comportement.
- Éviter le code dupliqué.
- Centraliser les variables visuelles.
- Utiliser des noms de classes explicites.
- Éviter les dépendances inutiles.
- Éviter les fonctions globales inutiles.
- Éviter les manipulations DOM fragiles.
- Documenter les décisions techniques importantes.

Ne pas transformer ce projet en application complexe.

---

# 7. ARCHITECTURE DES FICHIERS

Créer une structure claire, adaptée à un site statique :

```text
digitech/
├── index.html
├── services.html
├── tarifs.html
├── contact.html
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   └── categories/
│   ├── icons/
│   └── fonts/
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   ├── responsive.css
│   └── pages.css
├── js/
│   ├── config.js
│   ├── main.js
│   ├── navigation.js
│   └── animations.js
├── README.md
└── SPECIFICATIONS.md
```

Créer uniquement les fichiers réellement nécessaires.

Si un fichier n'est pas utilisé, ne pas le créer simplement pour remplir l'arborescence.

## 7.1. Responsabilités

### `variables.css`

Centraliser :

- Couleurs.
- Espacements.
- Largeurs de conteneur.
- Typographie.
- Rayons.
- Ombres.
- Durées et courbes d'animation.

### `reset.css`

Définir une base CSS cohérente entre navigateurs.

### `layout.css`

Gérer :

- Conteneurs.
- Grilles.
- Sections.
- Header.
- Footer.
- Structure générale.

### `components.css`

Gérer les styles partagés :

- Boutons.
- Liens.
- Cartes de catégories.
- Champs de formulaire.
- États interactifs.

### `animations.css`

Regrouper les animations et transitions réutilisables.

### `responsive.css`

Centraliser les adaptations aux différents écrans.

### `pages.css`

Contenir les styles propres aux pages, sans dupliquer inutilement les composants communs.

### `config.js`

Centraliser les informations modifiables lorsqu'elles seront connues :

- Nom de la marque.
- Description.
- Coordonnées.
- Liens sociaux.
- Informations tarifaires.
- Autres contenus métier.

Ne pas placer de clés secrètes dans un fichier JavaScript public.

### `main.js`

Gérer les initialisations générales et les fonctionnalités transversales.

### `navigation.js`

Gérer le menu mobile et les interactions de navigation.

### `animations.js`

Gérer uniquement les animations nécessitant réellement JavaScript.

---

# 8. FACILITÉ DE MODIFICATION

La maintenance est une exigence importante du projet.

Le propriétaire doit pouvoir remplacer les textes, les images et les coordonnées sans reconstruire le site.

## Exigences

1. Utiliser des noms de fichiers explicites.
2. Centraliser les variables CSS.
3. Organiser les contenus de manière cohérente.
4. Ajouter des commentaires uniquement lorsqu'ils facilitent la compréhension.
5. Éviter les blocs de code inutilement complexes.
6. Documenter le remplacement du logo.
7. Documenter le remplacement des images.
8. Documenter l'ajout de catégories.
9. Documenter l'ajout des coordonnées.
10. Documenter les modifications de texte et de métadonnées.

Les contenus métier répétés doivent être centralisés lorsque cela améliore réellement la maintenance.

Ne pas créer un système de gestion de contenu ou un mécanisme de génération de pages complexe pour un site de cette taille.

---

# 9. RESPONSIVE DESIGN

Adopter une approche mobile-first.

Le site doit fonctionner sur les téléphones, les tablettes, les ordinateurs portables et les grands écrans.

Tester au minimum les largeurs suivantes :

- 320 px.
- 375 px.
- 768 px.
- 1024 px.
- 1440 px.

## Critères

- Aucun défilement horizontal involontaire.
- Aucun texte coupé.
- Aucun bouton inaccessible.
- Aucun menu dépassant de l'écran.
- Images conservant des proportions adaptées.
- Grilles réorganisées selon la largeur.
- Titres fluides et lisibles.
- Espacements adaptés au mobile.
- Formulaires utilisables sur écran tactile.
- Animations compatibles avec les appareils modestes.

Utiliser `min()`, `max()`, `clamp()` et les grilles CSS lorsque cela apporte une réelle amélioration.

Ne pas baser la mise en page uniquement sur des dimensions fixes.

---

# 10. ACCESSIBILITÉ

Viser les bonnes pratiques WCAG 2.2 AA lorsque celles-ci sont applicables.

Exigences :

- Définir `lang="fr"`.
- Employer des titres hiérarchisés.
- Prévoir un seul titre principal `h1` par page.
- Utiliser des éléments HTML sémantiques.
- Associer les champs de formulaire à des libellés.
- Ajouter des textes alternatifs pertinents aux images informatives.
- Utiliser un texte alternatif vide pour les images décoratives.
- Garantir un focus visible.
- Permettre la navigation au clavier.
- Donner des noms accessibles aux boutons.
- Éviter les contrastes insuffisants.
- Ne pas utiliser uniquement la couleur pour transmettre une information.
- Respecter les préférences de réduction des animations.
- Éviter les interactions dépendantes exclusivement du survol.

---

# 11. SEO — RÉFÉRENCEMENT NATUREL

Chaque page doit posséder :

- Un titre HTML unique.
- Une meta description pertinente.
- Un attribut `lang="fr"`.
- Une structure de titres logique.
- Des liens internes fonctionnels.
- Des images optimisées.
- Des attributs `alt` appropriés.
- Une balise viewport adaptée aux appareils mobiles.

Utiliser des titres et descriptions en français, naturels et descriptifs.

Éviter le bourrage de mots-clés.

Ne pas inventer :

- Un nom de domaine.
- Une adresse physique.
- Des coordonnées.
- Des profils sociaux.
- Des avis clients.
- Des données commerciales.

Prévoir une documentation pour les étapes ultérieures de mise en ligne et de configuration SEO.

Ne pas intégrer de données structurées commerciales non vérifiées.

Le sitemap et le fichier `robots.txt` peuvent être ajoutés lorsque le domaine et les informations nécessaires seront disponibles.

---

# 12. PERFORMANCE ET RESSOURCES VISUELLES

Le site doit rester rapide et fluide.

## Exigences

- Limiter le poids des images.
- Utiliser des dimensions adaptées à l'affichage.
- Privilégier les formats modernes lorsque cela est possible.
- Définir des dimensions ou un ratio pour limiter les décalages de mise en page.
- Utiliser le chargement différé pour les images hors écran lorsque pertinent.
- Ne pas différer inutilement le visuel principal.
- Éviter les scripts lourds.
- Éviter les dépendances inutiles.
- Limiter les ressources externes.
- Prévoir un comportement de remplacement en cas d'échec de chargement d'une image.

Utiliser des images libres de droits ou des ressources dont l'utilisation est autorisée.

Ne pas utiliser des images qui pourraient laisser croire qu'elles représentent des produits réels disponibles chez DIGITECH si ce n'est pas confirmé.

Les visuels de démonstration doivent être traités comme des éléments illustratifs, et non comme un catalogue réel.

Ne jamais afficher une image cassée dans le rendu final.

---

# 13. JAVASCRIPT ET COMPORTEMENTS

Le JavaScript doit rester simple et maintenable.

Utiliser :

- `const` et `let`.
- Des noms explicites.
- Des fonctions courtes et compréhensibles.
- Des gestionnaires d'événements propres.
- Des vérifications de présence des éléments avant manipulation.
- Des comportements de remplacement si une fonctionnalité optionnelle ne peut pas être initialisée.

Éviter :

- `eval()`.
- Les variables globales inutiles.
- Les insertions HTML dangereuses.
- Les dépendances inutiles.
- Les erreurs dans la console.
- Les fonctionnalités qui semblent actives mais ne fonctionnent pas.

## Comportements obligatoires

- Navigation entre les quatre pages.
- Menu mobile fonctionnel.
- Liens et appels à l'action opérationnels.
- État actif de la navigation.
- Année de copyright dynamique.
- Animations adaptées aux préférences utilisateur.
- Gestion correcte des erreurs de chargement des ressources.

Les éléments qui ressemblent à des boutons doivent effectuer une action réelle ou ne pas être présentés comme des boutons.

---

# 14. GESTION DES INFORMATIONS INCONNUES

Les informations suivantes ne sont pas encore confirmées :

- Logo officiel.
- Slogan officiel.
- Présentation définitive de l'entreprise.
- Catégories commerciales exactes.
- Catalogue réel.
- Services réellement proposés.
- Tarifs.
- Devise.
- Coordonnées.
- Numéro WhatsApp.
- Adresse e-mail.
- Adresse physique.
- Réseaux sociaux.
- Nom de domaine définitif.

## Règle absolue

Ne jamais inventer ces informations.

Ne pas créer de faux avis clients, de faux chiffres de vente, de faux stocks, de fausses réductions ou de fausses garanties.

Si une information manque :

1. Créer la structure nécessaire.
2. Employer un contenu provisoire neutre uniquement lorsque cela est utile.
3. Identifier clairement les contenus provisoires dans la documentation.
4. Prévoir une modification facile.
5. Ne pas présenter le contenu provisoire comme une donnée officielle.

Le site doit rester cohérent et visuellement abouti même lorsque certaines informations ne sont pas encore disponibles.

---

# 15. SÉCURITÉ ET DONNÉES PERSONNELLES

Le site est statique et ne nécessite pas de compte utilisateur.

Ne pas collecter de données personnelles sans besoin fonctionnel réel.

Ne pas intégrer de formulaire prétendant transmettre des données sans mécanisme réel de transmission.

Ne pas exposer de secrets dans le code source public.

Ne pas ajouter de scripts de suivi ou de publicité sans nécessité et sans documentation appropriée.

Si un formulaire est conservé, documenter les étapes nécessaires à sa connexion ultérieure à un backend ou à un service de formulaire.

---

# 16. MÉTHODE D'IMPLÉMENTATION

Respecter l'ordre suivant.

## Phase 1 — Audit

- Examiner le répertoire de travail.
- Identifier les fichiers existants.
- Repérer les ressources disponibles.
- Préserver le travail pertinent.
- Signaler les conflits ou fichiers manquants.

## Phase 2 — Fondation technique

- Créer l'arborescence.
- Définir les variables CSS.
- Mettre en place les styles de base.
- Définir le système de conteneurs et de grilles.
- Créer les composants partagés.

## Phase 3 — Identité visuelle

- Construire le header.
- Créer le logo typographique.
- Définir les styles des boutons.
- Définir les styles des cartes de catégories.
- Construire le footer.
- Vérifier la cohérence visuelle.

## Phase 4 — Pages

Implémenter dans l'ordre :

1. Accueil.
2. Services.
3. Tarifs.
4. Contact.

Respecter la même identité visuelle sur toutes les pages.

## Phase 5 — Animations

- Ajouter les transitions.
- Ajouter les animations d'apparition.
- Ajouter les effets de survol.
- Vérifier le comportement sur mobile.
- Respecter `prefers-reduced-motion`.
- Vérifier que le contenu reste accessible sans animation.

## Phase 6 — Responsive et SEO

- Tester les différentes largeurs.
- Vérifier les métadonnées.
- Vérifier les liens.
- Vérifier les images.
- Corriger les problèmes d'affichage.

## Phase 7 — Validation

- Exécuter les vérifications disponibles.
- Corriger les erreurs détectées.
- Vérifier la console du navigateur lorsque possible.
- Contrôler les formulaires et les interactions.
- Documenter les limites restantes.

## Phase 8 — Documentation

Créer un `README.md` contenant :

- Présentation du projet.
- Technologies utilisées.
- Structure des fichiers.
- Procédure de lancement local.
- Fichiers à modifier.
- Remplacement du logo et des images.
- Ajout des catégories.
- Ajout des coordonnées.
- Limites connues.
- Étapes nécessaires à la mise en ligne.

---

# 17. CRITÈRES D'ACCEPTATION

Le projet est accepté uniquement si les critères suivants sont vérifiés.

## Pages et navigation

- [ ] Les quatre pages existent.
- [ ] La navigation entre les pages fonctionne.
- [ ] Le header et le footer sont cohérents.
- [ ] Le menu mobile fonctionne.
- [ ] Les liens ne pointent pas vers des destinations inexistantes.

## Design

- [ ] L'apparence générale est premium et claire.
- [ ] La hiérarchie visuelle est cohérente.
- [ ] Les images sont adaptées à l'univers technologique.
- [ ] Les espacements sont réguliers.
- [ ] Les animations sont fluides et discrètes dans leur exécution, malgré leur caractère immersif.
- [ ] La présentation n'est pas surchargée.
- [ ] Le logo temporaire est facilement remplaçable.

## Contenu

- [ ] La page d'accueil présente les catégories illustrées.
- [ ] Aucun catalogue commercial fictif n'est présenté comme réel.
- [ ] Aucun tarif non confirmé n'est affiché comme officiel.
- [ ] Les services non confirmés ne sont pas inventés.
- [ ] Les coordonnées inconnues ne sont pas inventées.
- [ ] Les contenus provisoires sont faciles à remplacer.

## Responsive

- [ ] Le site fonctionne à 320 px.
- [ ] Le site fonctionne à 375 px.
- [ ] Le site fonctionne à 768 px.
- [ ] Le site fonctionne à 1024 px.
- [ ] Le site fonctionne à 1440 px.
- [ ] Aucun débordement horizontal involontaire n'est constaté.

## Qualité technique

- [ ] Les fichiers sont organisés.
- [ ] Les ressources se chargent correctement.
- [ ] Les erreurs JavaScript détectées sont corrigées.
- [ ] Les métadonnées SEO sont présentes.
- [ ] Le focus clavier est visible.
- [ ] Les animations respectent les préférences utilisateur.
- [ ] Le README explique le lancement local.

## Honnêteté fonctionnelle

- [ ] Aucun bouton factice n'est présenté comme fonctionnel.
- [ ] Aucun message ne prétend qu'une action serveur a réussi sans transmission réelle.
- [ ] Les limites du formulaire sont documentées.
- [ ] Les tests déclarés dans le rapport final ont réellement été exécutés.

---

# 18. LANCEMENT LOCAL

Le site doit fonctionner sans compilation ni installation de dépendances.

Depuis le répertoire qui contient `index.html`, utiliser si Python est installé :

```bash
py -m http.server 8000
```

Sous Windows, si cette commande n'est pas disponible, essayer :

```bash
python -m http.server 8000
```

Puis ouvrir :

`http://localhost:8000`

Arrêter le serveur avec `Ctrl + C`.

Si les commandes ne fonctionnent pas, expliquer le problème rencontré et proposer une solution adaptée sans supposer que Python est installé.

Ne pas prétendre qu'une commande a fonctionné sans vérifier le résultat.

---

# 19. RAPPORT FINAL OBLIGATOIRE

À la fin du travail, fournir un rapport comprenant :

1. Les fichiers créés ou modifiés.
2. Les pages implémentées.
3. Les interactions fonctionnelles.
4. Les tests réellement exécutés.
5. Les problèmes corrigés.
6. Les problèmes encore présents.
7. Les informations métier à fournir ultérieurement.
8. Les limitations concernant le formulaire de contact.
9. Les instructions pour lancer le site.
10. Les prochaines étapes nécessaires avant publication.

Ne pas annoncer qu'un test a réussi s'il n'a pas été exécuté.

Ne pas présenter une simple inspection du code comme un test complet dans un navigateur.

---

# 20. INSTRUCTION FINALE

Commence par examiner le répertoire de travail et les fichiers existants.

Ensuite, construis réellement le site vitrine DIGITECH conformément aux présentes spécifications.

Respecte la direction artistique premium claire, l'inspiration minimaliste technologique, les animations immersives, la présentation par catégories illustrées, l'expérience mobile et la facilité de modification.

Utilise exclusivement des informations métier confirmées. En cas d'incertitude, crée une structure neutre et modifiable au lieu d'inventer une information.

Ne transforme pas le site vitrine en boutique en ligne.

Ne te contente pas de produire une maquette ou de décrire les étapes : implémente le projet, vérifie les fonctionnalités accessibles dans l'environnement de travail et corrige les problèmes détectés.

Termine par le rapport final défini dans la section 19.
