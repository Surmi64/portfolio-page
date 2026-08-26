/* =========================================================================
   icons.js — local inline SVG icon set (lucide-style: 24x24, stroke 2).
   No CDN, no external requests: the page is complete offline.
   To add one: put the path here, then reference it by name from data.js.
   ========================================================================= */
window.ICONS = (function () {

  /* stroke-based paths */
  var S = {
    "arrow-right":      '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
    "arrow-up":         '<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>',
    "arrow-up-right":   '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    "menu":             '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    "x":                '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',

    "send":             '<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 15 21.5 11 13 2.5 9 21.5 2.5Z"/>',
    "mail":             '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6.5 9 6 9-6"/>',
    "map-pin":          '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    "briefcase":        '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M2 13h20"/>',
    "clock":            '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    "check-circle":     '<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>',

    "graduation-cap":   '<path d="M22 8.5 12 4 2 8.5l10 4.5 10-4.5Z"/><path d="M6 10.7V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.3"/><path d="M21 9.5v5"/>',
    "shopping-bag":     '<path d="M4 7h16l-1.2 13a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 7Z"/><path d="M9 11V6a3 3 0 0 1 6 0v5"/>',
    "hotel":            '<path d="M4 21V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v17"/><path d="M2 21h20"/><path d="M8 7h2"/><path d="M14 7h2"/><path d="M8 11h2"/><path d="M14 11h2"/><path d="M10 21v-4h4v4"/>',
    "smartphone":       '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18.5h2"/>',
    "workflow":         '<rect x="2.5" y="3" width="7" height="6" rx="1.5"/><rect x="14.5" y="15" width="7" height="6" rx="1.5"/><path d="M6 9v4a2 2 0 0 0 2 2h6.5"/>',

    "layout-dashboard": '<rect x="3" y="3" width="7.5" height="8" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="5" rx="1.5"/><rect x="13.5" y="11" width="7.5" height="10" rx="1.5"/><rect x="3" y="14" width="7.5" height="7" rx="1.5"/>',
    "server":           '<rect x="2.5" y="3" width="19" height="7" rx="2"/><rect x="2.5" y="14" width="19" height="7" rx="2"/><path d="M6.5 6.5h.01"/><path d="M6.5 17.5h.01"/><path d="M10.5 6.5h4"/><path d="M10.5 17.5h4"/>',
    "brain-circuit":    '<rect x="7.5" y="7.5" width="9" height="9" rx="1.5"/><rect x="10.5" y="10.5" width="3" height="3" rx=".5"/><path d="M10 7.5V4"/><path d="M14 7.5V4"/><path d="M10 20v-3.5"/><path d="M14 20v-3.5"/><path d="M7.5 10H4"/><path d="M7.5 14H4"/><path d="M20 10h-3.5"/><path d="M20 14h-3.5"/>',
    "database":         '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/><path d="M4 11.5v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>',
    "container":        '<path d="M12 2.5 21 7v10l-9 4.5L3 17V7l9-4.5Z"/><path d="M3 7l9 4.5L21 7"/><path d="M12 11.5v10"/>',
    "activity":         '<path d="M3 12h4l2.5-7 4.5 14 2.5-7H21"/>',
    "house":            '<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/><path d="M9.5 20v-5.5h5V20"/>',
    "radio-tower":      '<path d="M12 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 10.5V21"/><path d="M8.5 21 12 13l3.5 8"/><path d="M6.2 9.2a6.5 6.5 0 0 1 0-5.4"/><path d="M17.8 3.8a6.5 6.5 0 0 1 0 5.4"/>',
    "wrench":           '<path d="M15.5 3.5a4.5 4.5 0 0 0-5.9 5.9L3 16v4h4l6.6-6.6a4.5 4.5 0 0 0 5.9-5.9l-2.8 2.8-3-3 2.8-2.8Z"/>',

    /* brand icons (dropped from lucide core, so hand-drawn here) */
    "github":           '<path d="M9 19.5c-4.5 1.4-4.5-2.3-6.5-2.8m13 5.3v-3.9a3.3 3.3 0 0 0-.95-2.6c3.1-.35 6.45-1.55 6.45-7A5.4 5.4 0 0 0 19.5 5a5.05 5.05 0 0 0-.1-3.8s-1.5-.45-4.9 1.85a12.5 12.5 0 0 0-6.5 0C4.6.75 3.1 1.2 3.1 1.2A5.05 5.05 0 0 0 3 5a5.4 5.4 0 0 0-1.5 3.6c0 5.4 3.35 6.6 6.45 7A3.3 3.3 0 0 0 7 18.1V22" transform="translate(0 1.2)"/>',
    "linkedin":         '<path d="M16.5 8.5A5.5 5.5 0 0 1 22 14v6.5h-4V14a1.5 1.5 0 0 0-3 0v6.5h-4V14a5.5 5.5 0 0 1 5.5-5.5Z"/><rect x="2.5" y="9.5" width="4" height="11"/><circle cx="4.5" cy="4.5" r="2"/>',
  };

  function svg(name, cls) {
    var d = S[name];
    if (!d) return "";                          /* unknown name -> nothing */
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
           'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
           'aria-hidden="true" focusable="false"' + (cls ? ' class="' + cls + '"' : "") +
           ">" + d + "</svg>";
  }

  return { svg: svg, has: function (n) { return !!S[n]; }, names: Object.keys(S) };
})();
