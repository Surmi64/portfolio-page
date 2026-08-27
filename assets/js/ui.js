/* =========================================================================
   ui.js — the handful of helpers both pages need: escaping, icons, the
   static-string hydrator and the language switch itself.
   ========================================================================= */
window.UI = (function () {
  "use strict";

  var t = window.I18N.t;

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  function esc(v) {
    return String(v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* escape + translate in one step — the combination almost every call wants */
  function e(v) { return esc(t(v)); }

  function ico(name, cls) { return window.ICONS.svg(name, cls); }

  function tags(arr) {
    return (arr || []).map(function (x) {
      return '<span class="tag">' + e(x) + "</span>";
    }).join("");
  }

  function s(key) { return t(window.STRINGS[key]); }

  /* Replace every marked node with the current language.
     - data-i18n       plain text
     - data-i18n-html  markup allowed (the gradient spans in the headings)
     - data-i18n-ph    input placeholder
     - data-i18n-aria  aria-label (and title, where one helps) */
  function hydrateStrings(root) {
    $$("[data-i18n]", root).forEach(function (el) {
      el.textContent = s(el.getAttribute("data-i18n"));
    });
    $$("[data-i18n-html]", root).forEach(function (el) {
      el.innerHTML = s(el.getAttribute("data-i18n-html"));
    });
    $$("[data-i18n-ph]", root).forEach(function (el) {
      el.placeholder = s(el.getAttribute("data-i18n-ph"));
    });
    $$("[data-i18n-aria]", root).forEach(function (el) {
      el.setAttribute("aria-label", s(el.getAttribute("data-i18n-aria")));
    });
  }

  /* replace <span data-icon="..."> in the markup with inline SVG */
  function hydrateIcons(root) {
    $$("[data-icon]", root).forEach(function (el) {
      el.innerHTML = ico(el.getAttribute("data-icon"));
    });
  }

  /* Two buttons, not a <select>: with exactly two languages the choice and
     the current state are the same widget. */
  function buildLangSwitch(el) {
    if (!el) return;
    function paint() {
      el.innerHTML = window.I18N.langs.map(function (l) {
        var on = l === window.I18N.lang();
        return '<button class="lang__btn' + (on ? " is-on" : "") + '" type="button" ' +
               'data-lang="' + l + '" aria-pressed="' + on + '">' + l.toUpperCase() + "</button>";
      }).join("");
    }
    el.addEventListener("click", function (ev) {
      var b = ev.target.closest("[data-lang]");
      if (b) window.I18N.set(b.getAttribute("data-lang"));
    });
    window.addEventListener("langchange", paint);
    paint();
  }

  return {
    $: $, $$: $$, esc: esc, e: e, t: t, s: s, ico: ico, tags: tags,
    hydrateStrings: hydrateStrings, hydrateIcons: hydrateIcons,
    buildLangSwitch: buildLangSwitch,
  };
})();
