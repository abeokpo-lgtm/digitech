/* ==========================================================================
   DIGITECH — config.js
   C'EST ICI que vous ajoutez les informations officielles de l'entreprise.
   Aucune information n'a été inventée : tout ce qui est vide ('' ou [])
   n'est tout simplement pas affiché sur le site.

   Règles simples :
   - Gardez les guillemets autour des textes : 'texte'
   - Gardez les virgules entre les éléments d'une liste.
   - N'écrivez JAMAIS de mot de passe ni de clé secrète dans ce fichier :
     il est public (tout visiteur peut le lire).
   ========================================================================== */

window.DIGITECH_CONFIG = {
  /* ---------------------------------------------------------- Coordonnées
     Exemple (à remplacer par les vraies informations) :
       phone: '+000 00 00 00 00',
       whatsapp: '+00000000000',   (chiffres uniquement, avec l'indicatif pays)
       email: 'contact@exemple.com',
       address: '1 rue Exemple, Ville',
       hours: 'Du lundi au vendredi, 9h–18h'                                  */
  contact: {
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    hours: ''
  },

  /* ------------------------------------------------------ Réseaux sociaux
     Une ligne par réseau. Seules les adresses https:// sont acceptées.
     Exemple : { label: 'Facebook', url: 'https://www.facebook.com/...' },   */
  social: [],

  /* --------------------------------------------------------------- Services
     Une entrée par service CONFIRMÉ. Tant que la liste est vide, la page
     Services affiche un message d'attente honnête.
     Exemple : { title: 'Titre du service', description: 'Description courte.' }, */
  services: [],

  /* ----------------------------------------------------------------- Tarifs
     Une entrée par tarif CONFIRMÉ. 'price' est un texte libre : écrivez le
     montant ET la devise officielle vous-même.
     Exemple : { title: 'Nom de la prestation', description: '…', price: '… (devise)' }, */
  tariffs: [],

  /* ------------------------------------------------ Formulaire de contact
     Un formulaire HTML ne peut pas envoyer de message tout seul.
     Pour l'activer, créez un compte chez un service de formulaires
     (Formspree, Getform, Web3Forms, etc.), puis collez ici l'adresse (URL)
     qu'il vous donne. Tant que ce champ est vide, le site indique
     honnêtement que les messages ne sont pas encore transmis.
     Exemple : endpoint: 'https://formspree.io/f/xxxxxxxx'                    */
  contactForm: {
    endpoint: ''
  }
};
