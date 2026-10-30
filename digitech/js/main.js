/* ==========================================================================
   DIGITECH — main.js
   Fonctions communes à toutes les pages :
   - année du copyright,
   - remplacement des images qui ne se chargent pas,
   - affichage des informations de config.js (coordonnées, réseaux sociaux,
     services, tarifs).
   Le contenu est créé avec textContent / createElement (jamais innerHTML).
   ========================================================================== */

(function () {
  'use strict';

  var config = window.DIGITECH_CONFIG || {};

  /* ----------------------------------------------------------- Utilitaires */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function cleanText(value) {
    return typeof value === 'string' ? value.trim() : '';
  }

  // N'accepte que les adresses http(s) : évite les liens "javascript:".
  function safeHttpUrl(value) {
    try {
      var url = new URL(cleanText(value));
      return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
    } catch (e) {
      return '';
    }
  }

  function digitsOnly(value) {
    return cleanText(value).replace(/[^\d]/g, '');
  }

  /* --------------------------------------------------------------- Année */

  function setCurrentYear() {
    var year = String(new Date().getFullYear());
    document.querySelectorAll('[data-current-year]').forEach(function (node) {
      node.textContent = year;
    });
  }

  /* ---------------------------------------- Images qui ne se chargent pas */

  function handleBrokenImages() {
    document.querySelectorAll('img').forEach(function (img) {
      function markBroken() {
        img.classList.add('is-broken');
      }
      img.addEventListener('error', markBroken);
      // L'erreur a pu se produire avant que ce script ne s'exécute.
      if (img.complete && img.naturalWidth === 0) markBroken();
    });
  }

  /* --------------------------------------------- Coordonnées (liste d'items)
     Retourne la liste des coordonnées renseignées dans config.js. */

  function getContactItems() {
    var contact = config.contact || {};
    var items = [];

    var phone = cleanText(contact.phone);
    if (phone) {
      items.push({ label: 'Téléphone', text: phone, href: 'tel:' + phone.replace(/[^\d+]/g, '') });
    }

    var whatsapp = digitsOnly(contact.whatsapp);
    if (whatsapp) {
      items.push({ label: 'WhatsApp', text: cleanText(contact.whatsapp), href: 'https://wa.me/' + whatsapp });
    }

    var email = cleanText(contact.email);
    if (email) {
      items.push({ label: 'E-mail', text: email, href: 'mailto:' + email });
    }

    var address = cleanText(contact.address);
    if (address) items.push({ label: 'Adresse', text: address });

    var hours = cleanText(contact.hours);
    if (hours) items.push({ label: 'Horaires', text: hours });

    return items;
  }

  function renderContactDetails() {
    var items = getContactItems();

    // Pied de page : liste courte, ou message d'attente déjà présent dans le HTML.
    var footerZone = document.querySelector('[data-footer-contact]');
    if (footerZone && items.length) {
      footerZone.textContent = '';
      var list = el('ul', 'site-footer__links');
      items.forEach(function (item) {
        var li = el('li');
        if (item.href) {
          var a = el('a', '', item.text);
          a.href = item.href;
          li.appendChild(a);
        } else {
          li.textContent = item.text;
        }
        list.appendChild(li);
      });
      footerZone.appendChild(list);
    }

    // Page Contact : bloc détaillé.
    var contactZone = document.querySelector('[data-contact-details]');
    if (contactZone && items.length) {
      contactZone.textContent = '';
      var wrapper = el('dl', 'contact-details');
      items.forEach(function (item) {
        var row = el('div', 'contact-details__item');
        row.appendChild(el('dt', 'contact-details__label', item.label));
        var value = el('dd', 'contact-details__value');
        if (item.href) {
          var link = el('a', '', item.text);
          link.href = item.href;
          if (item.href.indexOf('https://') === 0) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
          }
          value.appendChild(link);
        } else {
          value.textContent = item.text;
        }
        row.appendChild(value);
        wrapper.appendChild(row);
      });
      contactZone.appendChild(wrapper);
    }
  }

  /* ------------------------------------------------------ Réseaux sociaux */

  function renderSocialLinks() {
    var zone = document.querySelector('[data-footer-social]');
    if (!zone || !Array.isArray(config.social)) return;

    var links = config.social
      .map(function (entry) {
        return { label: cleanText(entry && entry.label), url: safeHttpUrl(entry && entry.url) };
      })
      .filter(function (entry) {
        return entry.label && entry.url;
      });

    if (!links.length) return; // Rien à afficher : la zone reste cachée.

    var list = zone.querySelector('[data-social-list]');
    if (!list) return;
    list.textContent = '';
    links.forEach(function (entry) {
      var li = el('li');
      var a = el('a', '', entry.label);
      a.href = entry.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      li.appendChild(a);
      list.appendChild(li);
    });
    zone.hidden = false;
  }

  /* ----------------------------------------------- Services et tarifs */

  function renderCards(zoneSelector, entries, buildCard) {
    var zone = document.querySelector(zoneSelector);
    if (!zone || !Array.isArray(entries)) return;

    var cards = entries.map(buildCard).filter(Boolean);
    if (!cards.length) return; // On garde le message d'attente du HTML.

    zone.textContent = '';
    var grid = el('div', 'cards-grid');
    cards.forEach(function (card, index) {
      card.classList.add('reveal');
      card.style.setProperty('--reveal-order', String(index % 3));
      grid.appendChild(card);
    });
    zone.appendChild(grid);
  }

  function renderServices() {
    renderCards('[data-services-list]', config.services, function (service) {
      var title = cleanText(service && service.title);
      if (!title) return null;
      var card = el('article', 'info-card');
      card.appendChild(el('h2', 'heading-card', title));
      var description = cleanText(service.description);
      if (description) card.appendChild(el('p', 'text-muted', description));
      return card;
    });
  }

  function renderTariffs() {
    renderCards('[data-tariffs-list]', config.tariffs, function (tariff) {
      var title = cleanText(tariff && tariff.title);
      if (!title) return null;
      var card = el('article', 'info-card');
      card.appendChild(el('h2', 'heading-card', title));
      var description = cleanText(tariff.description);
      if (description) card.appendChild(el('p', 'text-muted', description));
      var price = cleanText(tariff.price);
      if (price) card.appendChild(el('p', 'info-card__price', price));
      return card;
    });
  }

  /* ------------------------------------------------------------ Démarrage */

  function init() {
    setCurrentYear();
    handleBrokenImages();
    renderContactDetails();
    renderSocialLinks();
    renderServices();
    renderTariffs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
