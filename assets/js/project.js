/* =========================================================================
   project.js — the detail page. One template, driven by ?p=<slug> against
   the same data.js the index renders from, so a project is described once.
   ========================================================================= */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var $ = window.UI.$, $$ = window.UI.$$;
  var esc = window.UI.esc, e = window.UI.e, t = window.UI.t;
  var s = window.UI.s, ico = window.UI.ico, tags = window.UI.tags;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function find(slug) {
    for (var i = 0; i < D.projects.length; i++) {
      if (D.projects[i].slug === slug) return i;
    }
    return -1;
  }

  /* ------------------------------------------------------------ missing */
  function renderMissing() {
    document.title = "Not found — " + D.person.name;
    $("#detail").innerHTML =
      '<div class="wrap detail__missing">' +
        '<h1 class="h2">404</h1>' +
        "<p class=\"section-lead\">" + s("detail.notFound") + "</p>" +
        '<a class="btn btn--solid" href="index.html#work">' +
          s("detail.notFoundCta") + " " + ico("arrow-right") + "</a>" +
      "</div>";
  }

  /* ------------------------------------------------------------ project */
  function render(idx) {
    var p = D.projects[idx];
    var prev = D.projects[(idx - 1 + D.projects.length) % D.projects.length];
    var next = D.projects[(idx + 1) % D.projects.length];
    var d = p.detail || {};
    var hasLink = p.url && p.url !== "#";

    document.title = t(p.title) + " — " + D.person.name;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(p.description));

    var gallery = (d.gallery || []);

    $("#detail").innerHTML =
      '<article class="detail__body" data-accent="' + esc(p.accent) + '">' +

      /* ------------------------------------------------------ hero */
      '<header class="detail__hero">' +
        '<div class="wrap">' +
          '<a class="detail__back" href="index.html#work">' +
            ico("chevron-left") + s("detail.back") + "</a>" +

          '<div class="detail__head">' +
            '<div class="detail__glyph">' + ico(p.icon) + "</div>" +
            "<div>" +
              '<div class="detail__pills">' +
                '<span class="pill">' + e(p.status) + "</span>" +
                '<span class="pill pill--muted">' + e(p.year) + "</span>" +
                p.categories.map(function (c) {
                  var f = D.filters.filter(function (x) { return x.key === c; })[0];
                  return '<span class="pill pill--muted">' + e(f ? f.label : c) + "</span>";
                }).join("") +
              "</div>" +
              '<h1 class="detail__title">' + e(p.title) + "</h1>" +
              '<p class="detail__sub">' + e(p.subtitle) + "</p>" +
            "</div>" +
          "</div>" +

          '<div class="detail__actions">' +
            (hasLink
              ? '<a class="btn btn--solid" href="' + esc(p.url) + '" target="_blank" rel="noopener">' +
                s("work.open") + " " + ico("arrow-up-right") + "</a>"
              : '<span class="btn btn--ghost is-muted">' +
                e(p.linkLabel || window.STRINGS["work.soon"]) + " " + ico("clock") + "</span>") +
            (p.repo ? '<span class="detail__repo">' + ico("layers") + esc(p.repo) + "</span>" : "") +
          "</div>" +
        "</div>" +
      "</header>" +

      /* --------------------------------------------------- cover shot */
      (p.cover
        ? '<div class="wrap"><div class="detail__cover glass">' +
            '<img src="' + esc(p.cover) + '" alt="' + e(p.title) + '" ' +
            'width="1280" height="720"></div></div>'
        : "") +

      '<div class="wrap detail__grid">' +

        /* ------------------------------------------------ main column */
        '<div class="detail__main">' +

          (d.intro
            ? '<section class="detail__section" data-reveal>' +
                '<h2 class="detail__h2">' + s("detail.overview") + "</h2>" +
                '<p class="detail__lead">' + e(d.intro) + "</p>" +
              "</section>"
            : "") +

          (d.sections || []).map(function (sec, i) {
            return '<section class="detail__section" data-reveal style="--d:' + i * 70 + 'ms">' +
              '<h3 class="detail__h3">' + e(sec.title) + "</h3>" +
              '<p class="detail__p">' + e(sec.body) + "</p>" +
            "</section>";
          }).join("") +

          '<section class="detail__section" data-reveal>' +
            '<h2 class="detail__h2">' + s("detail.highlights") + "</h2>" +
            '<ul class="detail__hl">' + p.highlights.map(function (h) {
              return "<li>" + ico("check-circle") + "<span>" + e(h) + "</span></li>";
            }).join("") + "</ul>" +
          "</section>" +

          '<section class="detail__section" data-reveal>' +
            '<h2 class="detail__h2">' + s("detail.gallery") + "</h2>" +
            (gallery.length
              ? '<div class="shots">' + gallery.map(function (g) {
                  return '<figure class="shot glass">' +
                    '<img src="' + esc(g.src) + '" alt="' + e(g.caption) + '" ' +
                    'loading="lazy" width="1280" height="800">' +
                    "<figcaption>" + e(g.caption) + "</figcaption>" +
                  "</figure>";
                }).join("") + "</div>"
              : '<p class="detail__p detail__p--muted">' + s("detail.noShots") + "</p>") +
          "</section>" +

        "</div>" +

        /* ---------------------------------------------------- sidebar */
        '<aside class="detail__aside">' +

          '<div class="glass detail__box" data-reveal="right">' +
            '<div class="detail__boxTitle">' + s("detail.numbers") + "</div>" +
            '<div class="card__metrics detail__metrics">' + p.metrics.map(function (m) {
              return '<div class="metric"><b>' + e(m.v) + "</b><span>" + e(m.k) + "</span></div>";
            }).join("") + "</div>" +
          "</div>" +

          ((d.facts || []).length
            ? '<div class="glass detail__box" data-reveal="right" style="--d:80ms">' +
                '<div class="detail__boxTitle">' + s("detail.facts") + "</div>" +
                '<dl class="detail__facts">' + d.facts.map(function (f) {
                  return "<dt>" + e(f.k) + "</dt><dd>" + e(f.v) + "</dd>";
                }).join("") + "</dl>" +
              "</div>"
            : "") +

          '<div class="glass detail__box" data-reveal="right" style="--d:160ms">' +
            '<div class="detail__boxTitle">' + s("detail.stack") + "</div>" +
            '<div class="card__stack">' + tags(p.stack) + "</div>" +
          "</div>" +

        "</aside>" +
      "</div>" +

      /* ------------------------------------------------ prev / next */
      '<nav class="wrap detail__nav" aria-label="' + s("nav.work") + '">' +
        '<a class="detail__navItem detail__navItem--prev" href="project.html?p=' +
          encodeURIComponent(prev.slug) + '">' +
          "<span>" + s("detail.prev") + "</span><b>" + e(prev.title) + "</b></a>" +
        '<a class="detail__navItem detail__navItem--next" href="project.html?p=' +
          encodeURIComponent(next.slug) + '">' +
          "<span>" + s("detail.next") + "</span><b>" + e(next.title) + "</b></a>" +
      "</nav>" +

      "</article>";
  }

  /* --------------------------------------------------- scroll reveal */
  function initReveal() {
    var els = $$("[data-reveal]");
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------- nav chrome bits */
  function initChrome() {
    var p = D.person;
    $("#brand-initials").textContent = p.name.split(" ").map(function (w) {
      return w.charAt(0);
    }).join("").slice(0, 2).toUpperCase();

    var dot = p.domain.lastIndexOf(".");
    $("#brand-name").innerHTML =
      esc(p.domain.slice(0, dot)) +
      '<span style="color:var(--cyan)">' + esc(p.domain.slice(dot)) + "</span>";

    var toTop = $("#to-top");
    var progress = $("#progress");
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var y = window.scrollY;
        var h = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
        toTop.classList.toggle("is-on", y > 620);
      });
    }, { passive: true });
  }

  /* ============================================================== BOOT */
  function boot() {
    document.documentElement.lang = window.I18N.lang();
    window.UI.buildLangSwitch($("#lang-switch"));

    var slug = new URLSearchParams(location.search).get("p");
    var idx = slug ? find(slug) : -1;

    function paint() {
      if (idx < 0) renderMissing(); else render(idx);
      window.UI.hydrateStrings();
      window.UI.hydrateIcons();
      initReveal();
    }

    paint();
    initChrome();
    window.addEventListener("langchange", paint);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
