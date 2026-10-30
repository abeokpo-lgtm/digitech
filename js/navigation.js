/* ==========================================================================
   DIGITECH — navigation.js
   - Menu mobile (ouverture, fermeture, clavier).
   - Ombre/bordure de l'en-tête lors du défilement.
   La page active est déjà marquée dans le HTML avec aria-current="page".
   ========================================================================== */

(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var desktopQuery = window.matchMedia('(min-width: 768px)');

  /* ----------------------------------------------- En-tête au défilement */

  function updateHeaderState() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  /* ---------------------------------------------------------- Menu mobile */

  function setMenu(open, returnFocus) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    nav.classList.toggle('is-open', open);
    // Un menu fermé ne doit pas être atteignable au clavier.
    if (open) {
      nav.removeAttribute('inert');
    } else {
      nav.setAttribute('inert', '');
      if (returnFocus) toggle.focus();
    }
  }

  function isOpen() {
    return !!toggle && toggle.getAttribute('aria-expanded') === 'true';
  }

  function syncWithViewport() {
    if (!nav) return;
    if (desktopQuery.matches) {
      // Sur grand écran, la navigation est toujours visible.
      nav.removeAttribute('inert');
      nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    } else if (!isOpen()) {
      nav.setAttribute('inert', '');
    }
  }

  function init() {
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      setMenu(!isOpen(), false);
    });

    // Fermer quand on choisit un lien (utile pour les liens d'ancre).
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false, false);
    });

    // Fermer avec Échap.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) setMenu(false, true);
    });

    // Fermer en cliquant en dehors.
    document.addEventListener('click', function (event) {
      if (isOpen() && !nav.contains(event.target) && !toggle.contains(event.target)) {
        setMenu(false, false);
      }
    });

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener('change', syncWithViewport);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(syncWithViewport); // anciens navigateurs
    }
    syncWithViewport();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
