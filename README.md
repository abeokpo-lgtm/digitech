# DIGITECH — site vitrine

Site vitrine statique (4 pages) pour la marque DIGITECH : informatique et produits électroniques.
Pas de panier, pas de paiement, pas de base de données, pas de serveur obligatoire.

## Technologies

HTML5, CSS3 et JavaScript natif. Aucune installation, aucune compilation, aucune bibliothèque externe, aucune police externe.

## Structure des fichiers

```text
digitech/
├── index.html, services.html, tarifs.html, contact.html   ← les 4 pages
├── assets/
│   ├── images/hero/hero.svg            ← visuel de l'accueil (illustration générique)
│   ├── images/categories/*.svg         ← 6 illustrations de catégories (génériques)
│   └── icons/favicon.svg               ← petite icône d'onglet
├── css/   variables · reset · layout · components · animations · pages · responsive
├── js/
│   ├── config.js        ← VOS INFORMATIONS (coordonnées, services, tarifs…)
│   ├── main.js          ← année, images cassées, affichage du contenu de config.js
│   ├── navigation.js    ← menu mobile, en-tête au défilement
│   ├── animations.js    ← apparition au défilement
│   └── contact-form.js  ← formulaire de contact (page Contact uniquement)
├── README.md
└── SPECIFICATIONS.md
```

`contact-form.js` s'ajoute aux fichiers listés dans les spécifications : il est nécessaire au formulaire.
Il n'y a pas de dossier `assets/fonts` : le site utilise les polices du système.

## Lancer le site sur votre ordinateur

**Méthode la plus simple :** double-cliquez sur `index.html` (il s'ouvre dans votre navigateur).

**Méthode recommandée (serveur local), si Python est installé :**

1. Ouvrez un terminal dans le dossier `digitech` (le dossier qui contient `index.html`).
   - Windows : dans l'Explorateur, ouvrez le dossier, tapez `cmd` dans la barre d'adresse, puis Entrée.
   - Dans Visual Studio Code : menu *Terminal → Nouveau terminal*.
2. Tapez `py -m http.server 8000` (sous Windows). Si cela ne marche pas : `python -m http.server 8000`.
3. Ouvrez `http://localhost:8000` dans votre navigateur.
4. Pour arrêter : `Ctrl + C` dans le terminal.

Si Python n'est pas installé : utilisez la méthode « double-clic », ou l'extension **Live Server** de Visual Studio Code (clic droit sur `index.html` → *Open with Live Server*).

## Ce qui est provisoire (à remplacer)

Rien n'a été inventé. Ces contenus sont des **textes ou visuels neutres provisoires** :

| Élément | Où le modifier |
|---|---|
| Logo « DIGITECH » (typographique) | voir « Remplacer le logo » |
| Titre et texte de l'accueil, présentation de la marque | `index.html` (commentaires « CONTENU PROVISOIRE ») |
| 6 catégories + leurs courtes descriptions | `index.html` (commentaire « CATÉGORIES À CONFIRMER ») |
| Illustrations (accueil et catégories) | dossier `assets/images/` — ce sont des dessins génériques, pas des produits réels |
| Palette de couleurs | `css/variables.css` (proposition, pas une charte officielle) |

## Informations à fournir plus tard

Logo officiel · slogan · texte de présentation · catégories exactes · services · tarifs et devise · téléphone · WhatsApp · e-mail · adresse · horaires · réseaux sociaux · nom de domaine.

## Comment modifier le site (pas à pas, débutant)

Ouvrez les fichiers avec un éditeur de texte (par exemple Visual Studio Code). Après chaque modification : enregistrez (`Ctrl + S`) puis actualisez la page dans le navigateur (`F5`).

### Ajouter les coordonnées, les réseaux sociaux, les services et les tarifs

Tout se fait dans **`js/config.js`**. Les parties vides n'apparaissent pas sur le site.

- Coordonnées : remplissez `phone`, `whatsapp`, `email`, `address`, `hours` entre les guillemets. Elles apparaissent automatiquement sur la page Contact **et** dans le pied de page de toutes les pages.
- Réseaux sociaux : ajoutez une ligne dans `social: [ ... ]`, par exemple `{ label: 'Facebook', url: 'https://…' },`. Seules les adresses commençant par `https://` sont acceptées.
- Services : ajoutez des lignes dans `services: [ ... ]` : `{ title: '…', description: '…' },`. Le message d'attente de la page Services disparaît alors tout seul.
- Tarifs : ajoutez des lignes dans `tariffs: [ ... ]` : `{ title: '…', description: '…', price: '…' },`. Écrivez le montant **et** la devise dans `price`.

⚠ Ne mettez jamais de mot de passe ou de clé secrète dans ce fichier : il est public.

### Modifier un texte ou les métadonnées (SEO)

Ouvrez la page concernée. Les textes sont lisibles dans la balise `<main>`. Dans `<head>` :
`<title>` = titre dans l'onglet et Google ; `<meta name="description" …>` = résumé affiché dans Google. Chaque page doit garder un titre différent.

### Remplacer le logo

Le logo est dans l'en-tête et le pied de page de chaque page :

```html
<a class="logo" href="index.html" aria-label="DIGITECH, retour à l'accueil">
  <span class="logo__mark" aria-hidden="true"></span>
  <span class="logo__text">DIGI<span>TECH</span></span>
</a>
```

Pour utiliser un vrai logo : placez-le dans `assets/` (ex. `assets/logo.svg`), puis, dans chaque page (2 emplacements par page), remplacez les deux `<span>` par :
`<img src="assets/logo.svg" alt="DIGITECH" height="28">`. La largeur s'adapte automatiquement.

### Remplacer une image

Mettez votre image dans `assets/images/…` (formats conseillés : `.webp`, `.jpg` ou `.svg`, poids réduit) puis changez le `src` de la balise `<img>` correspondante dans `index.html`. Gardez les attributs `width` et `height` (ils évitent les sauts de mise en page) et rédigez un `alt` qui décrit l'image (laissez `alt=""` pour une image purement décorative). Pour l'accueil, utilisez une image carrée ou au format 4:3.

### Ajouter une catégorie

Dans `index.html`, section « Les grandes familles de produits » : copiez un bloc `<li class="reveal"> … </li>` entier, collez-le à la suite, puis changez l'image, le titre (`h3`) et la description. Ne transformez pas la carte en lien tant qu'une page de destination n'existe pas.

## Formulaire de contact : limite importante

Un formulaire HTML/JavaScript **ne peut pas envoyer de message tout seul**. Dans cette version :

- le formulaire vérifie les champs (nom, e-mail valide, message) avec des messages d'erreur en français ;
- tant qu'aucun service n'est configuré, il affiche clairement que le message **n'a pas été transmis** (jamais de faux « envoyé »).

**Pour le rendre réellement fonctionnel (étapes manuelles) :**

1. Créez un compte gratuit chez un service de formulaires (par exemple Formspree, Getform ou Web3Forms) et créez un formulaire : il vous donne une adresse (URL).
2. Ouvrez `js/config.js` et collez cette adresse dans `contactForm: { endpoint: '…' }`.
3. Enregistrez et testez en vous envoyant un message.
4. Avant publication : ajoutez une mention sur l'usage des données personnelles collectées (nom, e-mail, message) si la réglementation applicable l'exige (par exemple RGPD en Europe). Ce point reste à décider avec l'entreprise.

Le site réagit de façon honnête : le succès n'est affiché que si le service répond « OK ».

## Limites connues

- Les illustrations sont génériques et ne représentent pas des produits réels.
- Pas de sitemap ni de `robots.txt` : à ajouter quand le nom de domaine sera connu.
- Pas de données structurées (schema.org) : non ajoutées car aucune donnée commerciale n'est vérifiée.
- Le pied de page est répété dans chaque page (site sans outil de génération) : une modification du pied de page se fait dans les 4 fichiers.
- Les tests ont été réalisés avec Chromium. Safari, Firefox et de vrais téléphones n'ont pas été testés.

## Mettre le site en ligne (étapes à faire vous-même)

1. Choisissez un hébergement de sites statiques (par exemple GitHub Pages, Netlify, Cloudflare Pages, ou l'hébergement d'un fournisseur de nom de domaine) et un nom de domaine.
2. Envoyez le contenu **du dossier `digitech`** (le fichier `index.html` doit être à la racine) : par glisser-déposer chez Netlify ou Cloudflare Pages, ou via Git pour GitHub Pages.
3. Renseignez `js/config.js` (coordonnées, formulaire) **avant** la mise en ligne.
4. Une fois le domaine connu : ajoutez `robots.txt` et `sitemap.xml`, et déclarez le site dans Google Search Console.
5. Relisez chaque page sur téléphone et sur ordinateur.
