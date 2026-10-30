/* ==========================================================================
   DIGITECH — contact-form.js  (chargé uniquement sur contact.html)
   - Vérifie les champs côté navigateur, avec des messages en français.
   - N'affiche JAMAIS « message envoyé » sans transmission réelle :
       * si config.js ne contient pas d'adresse de service de formulaire,
         le message n'est PAS envoyé et le site le dit clairement ;
       * sinon, le message est transmis et la réussite n'est annoncée que si
         le service répond « OK ».
   ========================================================================== */

(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var config = window.DIGITECH_CONFIG || {};
  var endpoint = config.contactForm && typeof config.contactForm.endpoint === 'string'
    ? config.contactForm.endpoint.trim()
    : '';

  var statusBox = document.getElementById('form-status');
  var submitButton = form.querySelector('button[type="submit"]');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  var rules = {
    name: function (value) {
      if (!value) return 'Veuillez indiquer votre nom.';
      return '';
    },
    email: function (value) {
      if (!value) return 'Veuillez indiquer votre adresse e-mail.';
      if (!emailPattern.test(value)) return 'Cette adresse e-mail ne semble pas valide (exemple : nom@domaine.com).';
      return '';
    },
    message: function (value) {
      if (!value) return 'Veuillez écrire votre message.';
      if (value.length < 10) return 'Votre message est un peu court : merci de donner quelques détails (10 caractères minimum).';
      return '';
    }
  };

  function fieldParts(name) {
    return {
      input: form.elements[name],
      error: document.getElementById('error-' + name)
    };
  }

  function validateField(name) {
    var parts = fieldParts(name);
    if (!parts.input || !rules[name]) return true;
    var message = rules[name](parts.input.value.trim());
    if (message) {
      parts.input.setAttribute('aria-invalid', 'true');
      parts.error.textContent = message;
      parts.error.hidden = false;
      return false;
    }
    parts.input.removeAttribute('aria-invalid');
    parts.error.textContent = '';
    parts.error.hidden = true;
    return true;
  }

  function showStatus(kind, text) {
    statusBox.className = 'form__status form__status--' + kind;
    statusBox.textContent = text;
  }

  function clearStatus() {
    statusBox.className = 'form__status';
    statusBox.textContent = '';
  }

  // Si un service d'envoi est configuré, on retire l'avertissement du HTML.
  if (endpoint) {
    var unavailableNotice = document.querySelector('[data-form-unavailable]');
    if (unavailableNotice) unavailableNotice.hidden = true;
  }

  function validateAll() {
    var firstInvalid = null;
    Object.keys(rules).forEach(function (name) {
      if (!validateField(name) && !firstInvalid) firstInvalid = fieldParts(name).input;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      showStatus('error', 'Le formulaire contient des erreurs. Merci de les corriger puis de réessayer.');
      return false;
    }
    return true;
  }

  // Revalide un champ quand on le quitte, et efface l'erreur dès qu'on corrige.
  Object.keys(rules).forEach(function (name) {
    var input = form.elements[name];
    if (!input) return;
    input.addEventListener('blur', function () {
      validateField(name);
    });
    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true') validateField(name);
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearStatus();

    if (!validateAll()) return;

    if (!endpoint) {
      // Aucun service connecté : on ne prétend pas avoir envoyé quoi que ce soit.
      showStatus(
        'info',
        'Vos informations sont valides, mais ce formulaire n’est pas encore relié à un service d’envoi : ' +
          'votre message n’a PAS été transmis à DIGITECH. Merci d’utiliser les coordonnées officielles dès leur publication.'
      );
      return;
    }

    submitButton.disabled = true;
    showStatus('info', 'Envoi en cours…');

    fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form)
    })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        form.reset();
        showStatus('success', 'Votre message a bien été transmis. Merci !');
      })
      .catch(function () {
        showStatus('error', 'L’envoi a échoué. Votre message n’a pas été transmis : veuillez réessayer plus tard.');
      })
      .then(function () {
        submitButton.disabled = false;
      });
  });
})();
