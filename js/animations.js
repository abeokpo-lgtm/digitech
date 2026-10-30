/* ==========================================================================
   DIGITECH — animations.js
   Uniquement ce que le CSS ne peut pas faire seul :
   - révéler les éléments .reveal quand ils entrent dans l'écran,
   - léger décalage (parallaxe) du visuel d'accueil.
   Si l'utilisateur préfère réduire les animations, tout est affiché
   immédiatement et aucun effet de défilement n'est installé.
   ========================================================================== */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Indique à la page (et au filet de sécurité de <head>) que ce script tourne.
  document.documentElement.classList.add('animations-ready');

  /* ---------------------------------------------------- Révélation au scroll */

  function setupReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (item) {
        item.classList.add('is-visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // une seule fois par élément
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  /* -------------------------------------------------- Parallaxe très douce */

  function setupParallax() {
    var media = document.querySelector('.hero__media');
    var image = media && media.querySelector('img');
    if (!image || reduceMotion) return;

    var ticking = false;

    function update() {
      ticking = false;
      var rect = media.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      // Décalage limité à ±14 px : subtil, sans jamais révéler de bord.
      var progress = rect.top / window.innerHeight;
      var shift = Math.max(-14, Math.min(14, progress * -28));
      image.style.setProperty('--parallax-y', shift.toFixed(1) + 'px');
    }

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    update();
  }

  function init() {
    setupReveal();
    setupParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
