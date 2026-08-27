/* =========================================================================
   i18n.js — the two-language layer, shared by the index and the detail pages.

   Any user-facing string in data.js may be written either as a plain string
   (identical in both languages — product names, stack tags) or as an
   { en, hu } object. `I18N.t()` resolves whichever it is given, so callers
   never have to know which form a particular field uses.
   ========================================================================= */
window.I18N = (function () {
  "use strict";

  var LANGS = ["en", "hu"];
  var KEY = "portfolio-lang";
  var current = null;

  /* stored choice > ?lang= > browser language > en */
  function detect() {
    var q = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(q) > -1) return q;

    var stored;
    try { stored = localStorage.getItem(KEY); } catch (e) { /* private mode */ }
    if (LANGS.indexOf(stored) > -1) return stored;

    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return nav === "hu" ? "hu" : "en";
  }

  function lang() {
    if (!current) current = detect();
    return current;
  }

  function set(next) {
    if (LANGS.indexOf(next) < 0 || next === lang()) return;
    current = next;
    try { localStorage.setItem(KEY, next); } catch (e) { /* private mode */ }
    document.documentElement.lang = next;
    window.dispatchEvent(new CustomEvent("langchange", { detail: next }));
  }

  /* Resolve a translatable value. Falls back to English, then to the raw
     value, so a half-translated entry degrades instead of rendering
     "undefined". */
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    if (Array.isArray(v)) return v.map(t);
    var l = lang();
    if (v[l] != null) return v[l];
    if (v.en != null) return v.en;
    return "";
  }

  return { t: t, lang: lang, set: set, langs: LANGS, key: KEY };
})();
