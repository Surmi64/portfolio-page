/* =========================================================================
   strings.js — the fixed chrome around the content: section headings, form
   labels, button text. Content that describes a project lives in data.js.

   Keys are referenced from the markup as data-i18n="key" (text) or
   data-i18n-html="key" (markup allowed, for the gradient spans).
   ========================================================================= */
window.STRINGS = {

  /* nav ------------------------------------------------------------- */
  "nav.about":    { en: "About",       hu: "Rólam" },
  "nav.work":     { en: "Work",        hu: "Munkáim" },
  "nav.path":     { en: "Path",        hu: "Út" },
  "nav.contact":  { en: "Contact",     hu: "Kapcsolat" },
  "nav.cta":      { en: "Get in touch", hu: "Írj nekem" },
  "nav.top":      { en: "Back to top", hu: "Vissza a tetejére" },
  "nav.menu":     { en: "Menu",        hu: "Menü" },
  "nav.lang":     { en: "Language",    hu: "Nyelv" },

  /* hero -------------------------------------------------------------- */
  "hero.greet":   { en: "Hi, I'm ",    hu: "Szia, " },
  "hero.greetEnd": { en: "",           hu: " vagyok." },
  "hero.seeWork": { en: "See my work", hu: "Nézd meg a munkáim" },
  "hero.contact": { en: "Contact",     hu: "Kapcsolat" },
  "hero.scroll":  { en: "scroll",      hu: "görgess" },

  /* about ------------------------------------------------------------- */
  "about.eyebrow": { en: "01 — About", hu: "01 — Rólam" },
  "about.title": {
    en: 'Ops by day, <span class="grad-text">builder by night</span>',
    hu: 'Nappal üzemeltetés, <span class="grad-text">éjjel építés</span>',
  },
  "about.lead": {
    en:
      "I keep other people's systems running for a living, which taught me " +
      "that the interesting problems live at the seams — between the code " +
      "and the thing it runs on. Side projects are where I get to own both " +
      "ends, and I choose them by a simple rule: someone other than me has " +
      "to want the result.",
    hu:
      "Abból élek, hogy mások rendszereit tartom futásban, és ez megtanított " +
      "arra, hogy az érdekes problémák az illesztéseknél laknak — a kód és " +
      "a között, amin fut. A saját projektek azok, ahol mindkét vég az enyém, " +
      "és egyszerű szabály szerint választom őket: rajtam kívül valakinek " +
      "kelljen az eredmény.",
  },
  "about.skills": { en: "What I work with", hu: "Amivel dolgozom" },

  /* work -------------------------------------------------------------- */
  "work.eyebrow": { en: "02 — Work", hu: "02 — Munkáim" },
  "work.title": {
    en: 'Things I\'ve <span class="grad-text">shipped</span>',
    hu: 'Amit <span class="grad-text">kiszállítottam</span>',
  },
  "work.leadBefore": { en: "Live products and internal tools. Showing ",
                       hu: "Élő termékek és belső eszközök. Most " },
  "work.leadAfter":  { en: " right now — filter by category, or open one for the full story.",
                       hu: " látszik — szűrj kategóriára, vagy nyiss meg egyet a teljes történetért." },
  "work.filterLabel": { en: "Filter projects", hu: "Projektek szűrése" },
  "work.open":       { en: "Open live",     hu: "Megnyitás élesben" },
  "work.details":    { en: "Read the story", hu: "A történet" },
  "work.soon":       { en: "Coming soon",   hu: "Hamarosan" },

  /* path -------------------------------------------------------------- */
  "path.eyebrow": { en: "03 — Path", hu: "03 — Út" },
  "path.title": {
    en: 'How I got <span class="grad-text">here</span>',
    hu: 'Hogy jutottam <span class="grad-text">idáig</span>',
  },

  /* contact ----------------------------------------------------------- */
  "contact.eyebrow": { en: "04 — Contact", hu: "04 — Kapcsolat" },
  "contact.title": {
    en: 'Let\'s build <span class="grad-text">something</span>',
    hu: 'Építsünk <span class="grad-text">valamit</span>',
  },
  "contact.lead": {
    en:
      "A new product, an AI integration, or an existing system that needs " +
      "pipelines and monitoring it never got. Write a few lines and I'll " +
      "get back to you.",
    hu:
      "Új termék, AI-integráció, vagy egy meglévő rendszer, ami sosem kapott " +
      "pipeline-t és monitorozást. Írj pár sort, és jelentkezem.",
  },
  "form.name":        { en: "Name", hu: "Név" },
  "form.namePh":      { en: "What should I call you?", hu: "Hogy szólíthatlak?" },
  "form.email":       { en: "Email", hu: "E-mail" },
  "form.emailPh":     { en: "you@example.com", hu: "te@pelda.hu" },
  "form.msg":         { en: "What's it about?", hu: "Miről lenne szó?" },
  "form.msgPh":       { en: "A few lines about the project, the timeline and the budget…",
                        hu: "Pár sor a projektről, a határidőről és a keretről…" },
  "form.send":        { en: "Send message", hu: "Üzenet küldése" },
  "form.note":        { en: "No backend yet — submitting validates locally.",
                        hu: "Backend még nincs — a küldés helyben ellenőriz." },
  "form.ok":          { en: "Thanks — the form validated.",
                        hu: "Köszönöm — az űrlap rendben van." },
  "form.errName":     { en: "Please enter your name.", hu: "Kérlek add meg a neved." },
  "form.errMail":     { en: "That does not look like an email address.",
                        hu: "Ez nem tűnik e-mail címnek." },
  "form.errMsg":      { en: "A little more detail, please (10+ characters).",
                        hu: "Kicsit részletesebben, kérlek (legalább 10 karakter)." },

  "info.email":       { en: "Email",        hu: "E-mail" },
  "info.location":    { en: "Location",     hu: "Helyszín" },
  "info.availability":{ en: "Availability", hu: "Elérhetőség" },
  "info.response":    { en: "Response",     hu: "Válaszidő" },
  "info.responseV":   { en: "usually within 24 hours", hu: "általában 24 órán belül" },
  "info.elsewhere":   { en: "Elsewhere",    hu: "Máshol" },

  /* footer ------------------------------------------------------------ */
  "foot.built": { en: "Hand-written HTML / CSS / JS · zero dependencies",
                  hu: "Kézzel írt HTML / CSS / JS · nulla függőség" },

  /* project detail page ----------------------------------------------- */
  "detail.back":       { en: "All projects",  hu: "Összes projekt" },
  "detail.overview":   { en: "Overview",      hu: "Áttekintés" },
  "detail.highlights": { en: "What it does",  hu: "Mit tud" },
  "detail.stack":      { en: "Stack",         hu: "Stack" },
  "detail.numbers":    { en: "By the numbers", hu: "Számokban" },
  "detail.gallery":    { en: "Screens",       hu: "Képernyők" },
  "detail.facts":      { en: "At a glance",   hu: "Röviden" },
  "detail.next":       { en: "Next project",  hu: "Következő projekt" },
  "detail.prev":       { en: "Previous project", hu: "Előző projekt" },
  "detail.notFound":   { en: "That project does not exist.",
                         hu: "Ez a projekt nem létezik." },
  "detail.notFoundCta": { en: "Back to the project list",
                          hu: "Vissza a projektlistához" },
  "detail.noShots":    { en: "No screenshots — this one has no public interface.",
                         hu: "Nincs képernyőkép — ennek nincs publikus felülete." },
};
