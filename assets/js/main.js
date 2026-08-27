/* =========================================================================
   main.js — rendering + interactions. No build step, no framework.
   ========================================================================= */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  var $ = window.UI.$, $$ = window.UI.$$;
  var esc = window.UI.esc, e = window.UI.e, t = window.UI.t;
  var s = window.UI.s, ico = window.UI.ico, tags = window.UI.tags;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* single source of truth for "how many are live". `status` is translated,
     so it cannot be compared against a literal — `real` plus a live URL is
     the durable test. */
  function derivedLive() {
    return D.projects.filter(function (x) { return x.live !== false && x.real; }).length;
  }

  /* where a card and its "read the story" link point */
  function detailHref(p) {
    return "project.html?p=" + encodeURIComponent(p.slug);
  }

  /* ===================================================== 1. HERO / PERSON */
  function renderHero() {
    var p = D.person;

    /* initials from the name, brand text from the domain */
    $("#brand-initials").textContent = p.name.split(" ").map(function (w) {
      return w.charAt(0);
    }).join("").slice(0, 2).toUpperCase();

    var dot = p.domain.lastIndexOf(".");
    $("#brand-name").innerHTML =
      esc(p.domain.slice(0, dot)) +
      '<span style="color:var(--cyan)">' + esc(p.domain.slice(dot)) + "</span>";

    $("#hero-name").innerHTML =
      s("hero.greet") + esc(p.first) + s("hero.greetEnd") +
      '<em class="grad-text">' + e(p.tagline) + ".</em>";
    var role = $("#hero-role");
    role.textContent = t(p.role);
    role.setAttribute("data-text", t(p.role));
    $("#hero-lead").textContent = t(p.lead);
    $("#hero-availability").textContent = t(p.availability);

    /* a stat can be derived from the project list, so the two cannot drift */
    var derived = {
      live: derivedLive(),
    };

    $("#hero-stats").innerHTML = p.stats.map(function (st, i) {
      var val = st.auto ? derived[st.auto] : st.value;
      return '<div class="stat" data-reveal style="--d:' + (420 + i * 90) + 'ms">' +
             '<div class="stat__v" data-count="' + val + '" data-suffix="' + esc(st.suffix || "") + '">0</div>' +
             '<div class="stat__k">' + e(st.label) + "</div></div>";
    }).join("");

    /* terminal panel — generated from the real project stacks */
    var realStack = [];
    D.projects.filter(function (x) { return x.real; }).forEach(function (x) {
      x.stack.forEach(function (s) { if (realStack.indexOf(s) < 0) realStack.push(s); });
    });


    $("#terminal-body").innerHTML =
      '<div><span class="c">// ' + esc(p.domain) + ' — stack.json</span></div>' +
      '<div>{</div>' +
      '<div>&nbsp;&nbsp;<span class="k">"role"</span>: <span class="s">"' + e(p.role) + '"</span>,</div>' +
      '<div>&nbsp;&nbsp;<span class="k">"live"</span>: <span class="n">' + derivedLive() + '</span>,</div>' +
      '<div>&nbsp;&nbsp;<span class="k">"core"</span>: [</div>' +
      realStack.slice(0, 6).map(function (s, i, a) {
        return '<div>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s">"' + esc(s) + '"</span>' +
               (i < a.length - 1 ? "," : "") + "</div>";
      }).join("") +
      '<div>&nbsp;&nbsp;],</div>' +
      '<div>&nbsp;&nbsp;<span class="k">"open_to_work"</span>: <span class="n">true</span></div>' +
      '<div>}<span class="caret"></span></div>';
  }

  /* ======================================================== 2. PRINCIPLES */
  function renderPrinciples() {
    var el = $("#principles");
    if (!el || !D.principles) return;
    el.innerHTML = D.principles.map(function (pr, i) {
      return '<article class="glass principle" data-reveal style="--d:' + i * 90 + 'ms">' +
        '<div class="principle__icon">' + ico(pr.icon) + "</div>" +
        '<h3 class="principle__title">' + e(pr.title) + "</h3>" +
        '<p class="principle__text">' + e(pr.text) + "</p>" +
      "</article>";
    }).join("");
  }

  /* ============================================================ 3. SKILLS */
  function renderSkills() {
    $("#skills").innerHTML = D.skills.map(function (sk, i) {
      return '<article class="glass skill" data-reveal="scale" style="--d:' + i * 80 + 'ms">' +
        '<div class="skill__top">' +
          '<div class="skill__icon">' + ico(sk.icon) + "</div>" +
          '<h3 class="skill__name">' + e(sk.name) + "</h3>" +
          '<span class="skill__pct">' + sk.level + "%</span>" +
        "</div>" +
        '<div class="bar"><i data-level="' + sk.level + '"></i></div>' +
        '<ul class="skill__items">' + tags(sk.items) + "</ul>" +
      "</article>";
    }).join("");
  }

  /* ========================================================== 4. PROJECTS */
  function renderProjects() {
    var active = filterState;

    $("#filters").innerHTML = D.filters.map(function (f) {
      return '<button class="chip' + (f.key === active ? " is-active" : "") +
             '" data-filter="' + esc(f.key) + '" type="button">' + e(f.label) + "</button>";
    }).join("");

    $("#projects").innerHTML = D.projects.map(function (p, i) {
      var cats = p.categories.join(",");
      var hasLink = p.url && p.url !== "#";
      return '<article class="glass card" data-accent="' + esc(p.accent) + '" data-cats="' + esc(cats) +
             '" data-reveal style="--d:' + (i % 3) * 110 + 'ms">' +
        '<span class="card__spot"></span>' +

        /* The whole card is the link to the story. It sits under the content
           so that the external link and the tags stay selectable, and it
           carries the accessible name so screen readers announce one link
           rather than a bare region. */
        '<a class="card__link" href="' + esc(detailHref(p)) + '">' +
          '<span class="sr-only">' + e(p.title) + " — " + s("work.details") + "</span></a>" +

        '<div class="card__visual' + (p.cover ? " has-shot" : "") + '">' +
          (p.cover
            ? '<img class="card__shot" src="' + esc(p.cover) + '" alt="" loading="lazy" ' +
              'width="1280" height="720">'
            : '<span class="card__ring"></span>') +
          '<div class="card__glyph">' + ico(p.icon) + "</div>" +
          '<div class="card__meta">' +
            '<span class="pill">' + e(p.status) + "</span>" +
            '<span class="pill pill--muted">' + e(p.year) + "</span>" +
          "</div>" +
        "</div>" +

        '<div class="card__body">' +
          '<h3 class="card__title">' + e(p.title) + "</h3>" +
          '<div class="card__sub">' + e(p.subtitle) + "</div>" +
          '<p class="card__desc">' + e(p.description) + "</p>" +
          '<ul class="card__hl">' + p.highlights.map(function (h) {
            return "<li>" + e(h) + "</li>";
          }).join("") + "</ul>" +
          '<div class="card__metrics">' + p.metrics.map(function (m) {
            return '<div class="metric"><b>' + e(m.v) + "</b><span>" + e(m.k) + "</span></div>";
          }).join("") + "</div>" +
          '<div class="card__stack">' + tags(p.stack) + "</div>" +
          '<div class="card__foot">' +
            '<span class="link-arrow link-arrow--lead">' +
              s("work.details") + " " + ico("arrow-right") + "</span>" +
            (hasLink
              ? '<a class="card__out" href="' + esc(p.url) + '" target="_blank" rel="noopener" ' +
                'title="' + s("work.open") + '">' + s("work.open") + " " + ico("arrow-up-right") + "</a>"
              : '<span class="card__out card__out--muted">' +
                e(p.linkLabel || window.STRINGS["work.soon"]) + " " + ico("clock") + "</span>") +
          "</div>" +
        "</div>" +
      "</article>";
    }).join("");

    applyFilter(active);
  }

  /* --- category filter ------------------------------------------------- */
  /* Kept outside renderProjects so a language switch can re-render the cards
     without dropping the chip the visitor had chosen. */
  var filterState = "all";

  function applyFilter(key) {
    filterState = key;
    var cards = $$(".card", $("#projects"));
    cards.forEach(function (c) {
      var show = key === "all" || c.dataset.cats.split(",").indexOf(key) > -1;
      c.classList.toggle("is-hidden", !show);
      if (show) {                       /* re-trigger the reveal */
        c.classList.remove("is-in");
        void c.offsetWidth;
        c.classList.add("is-in");
      }
    });
    $("#project-count").textContent = cards.filter(function (c) {
      return !c.classList.contains("is-hidden");
    }).length;
  }

  function wireFilters() {
    $("#filters").addEventListener("click", function (ev) {
      var chip = ev.target.closest(".chip");
      if (!chip) return;
      $$(".chip", this).forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      applyFilter(chip.dataset.filter);
    });
  }

  /* Spotlight only. The cards used to tilt in 3D under the pointer, which
     moved the links out from under the cursor mid-click — now nothing moves
     but the light. */
  function attachSpotlight() {
    $$(".card", $("#projects")).forEach(function (card) {
      card.addEventListener("pointermove", function (ev) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((ev.clientX - r.left) / r.width) * 100 + "%");
        card.style.setProperty("--my", ((ev.clientY - r.top) / r.height) * 100 + "%");
      }, { passive: true });
    });
  }

  /* ========================================================== 5. TIMELINE */
  function renderTimeline() {
    $("#timeline").innerHTML =
      '<span class="timeline__fill" id="tl-fill"></span>' +
      D.timeline.map(function (tl, i) {
        return '<div class="tl" data-reveal="left" style="--d:' + i * 100 + 'ms">' +
          '<span class="tl__node"></span>' +
          '<div class="tl__period">' + e(tl.period) + "</div>" +
          '<div class="glass tl__card">' +
            '<h3 class="tl__title">' + e(tl.title) + "</h3>" +
            '<div class="tl__org">' + e(tl.org) + "</div>" +
            '<p class="tl__text">' + e(tl.text) + "</p>" +
            '<div class="tl__tags">' + tags(tl.tags) + "</div>" +
          "</div>" +
        "</div>";
      }).join("");
  }

  /* =========================================================== 6. CONTACT */
  function renderContact() {
    var p = D.person;
    $("#info-rows").innerHTML = [
      { i: "mail",      k: s("info.email"),        v: p.email, href: "mailto:" + p.email },
      { i: "map-pin",   k: s("info.location"),     v: t(p.location) },
      { i: "briefcase", k: s("info.availability"), v: t(p.availability) },
      { i: "clock",     k: s("info.response"),     v: s("info.responseV") },
    ].map(function (r) {
      var val = r.href ? '<a href="' + esc(r.href) + '">' + esc(r.v) + "</a>" : esc(r.v);
      return '<div class="info__row">' +
        '<div class="info__ico">' + ico(r.i) + "</div>" +
        "<div><div class=\"info__k\">" + esc(r.k) + '</div><div class="info__v">' + val + "</div></div>" +
      "</div>";
    }).join("");

    $("#socials").innerHTML = p.socials.map(function (so) {
      return '<a class="social" href="' + esc(so.href) + '" target="_blank" rel="noopener" ' +
             'aria-label="' + esc(so.label) + '" title="' + esc(so.label) + '">' + ico(so.icon) + "</a>";
    }).join("");

    $("#footer-name").textContent = p.name;
    $("#footer-year").textContent = new Date().getFullYear();
  }

  /* form validation (no backend — local feedback only) */
  function wireForm() {
    var form = $("#contact-form");
    if (!form) return;

    function setErr(field, msg) {
      field.classList.toggle("field--err", !!msg);
      $(".field__msg", field).textContent = msg || "";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      var name = $("#f-name"), mail = $("#f-mail"), msg = $("#f-msg");

      if (!name.value.trim()) { setErr(name.closest(".field"), s("form.errName")); ok = false; }
      else setErr(name.closest(".field"), "");

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail.value.trim())) {
        setErr(mail.closest(".field"), s("form.errMail")); ok = false;
      } else setErr(mail.closest(".field"), "");

      if (msg.value.trim().length < 10) {
        setErr(msg.closest(".field"), s("form.errMsg")); ok = false;
      } else setErr(msg.closest(".field"), "");

      if (!ok) return;

      var btn = $("#f-submit");
      btn.disabled = true;
      btn.style.opacity = ".6";
      setTimeout(function () {
        $("#form-ok").classList.add("is-on");
        form.reset();
        btn.disabled = false;
        btn.style.opacity = "";
      }, 620);
    });

    /* clear the error as soon as the user types */
    $$("input,textarea", form).forEach(function (el) {
      el.addEventListener("input", function () { setErr(el.closest(".field"), ""); });
    });
  }

  /* ====================================================== 7. SCROLL REVEAL */
  function initReveal() {
    var els = $$("[data-reveal]");
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      $$(".bar i").forEach(function (b) { b.style.width = b.dataset.level + "%"; });
      $$(".stat__v").forEach(function (s) { s.textContent = fmt(+s.dataset.count) + s.dataset.suffix; });
      $$(".tl").forEach(function (t) { t.classList.add("is-in"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.classList.add("is-in");

        /* fill the skill bars */
        $$(".bar i", el).forEach(function (b) {
          setTimeout(function () { b.style.width = b.dataset.level + "%"; }, 180);
        });

        /* count up the stats */
        $$(".stat__v", el).forEach(function (s) {
          if (s.dataset.done) return;
          s.dataset.done = "1";
          countUp(s);
        });

        io.unobserve(el);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    els.forEach(function (el) { io.observe(el); });
  }

  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

  function countUp(el) {
    var target = +el.dataset.count, suffix = el.dataset.suffix || "";
    var dur = 1500, t0 = performance.now();
    (function step(t) {
      var p = Math.min((t - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * e)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* ============================================================== 8. NAV */
  function initNav() {
    var nav = $("#nav");
    var mobile = $("#nav-mobile");
    var burger = $("#nav-burger");
    var progress = $("#progress");
    var toTop = $("#to-top");
    var links = $$("[data-nav]");
    var sections = links.map(function (l) { return $(l.getAttribute("href")); });
    var fill = null;

    burger.addEventListener("click", function () {
      var open = mobile.classList.toggle("is-open");
      burger.innerHTML = ico(open ? "x" : "menu");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobile.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        mobile.classList.remove("is-open");
        burger.innerHTML = ico("menu");
        burger.setAttribute("aria-expanded", "false");
      }
    });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var y = window.scrollY;
        var h = document.documentElement.scrollHeight - window.innerHeight;

        nav.classList.toggle("is-stuck", y > 12);
        toTop.classList.toggle("is-on", y > 620);
        progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";

        /* active nav marker */
        var cur = 0;
        sections.forEach(function (s, i) {
          if (s && s.getBoundingClientRect().top <= window.innerHeight * 0.35) cur = i;
        });
        links.forEach(function (l, i) { l.classList.toggle("is-active", i === cur); });

        /* fill the timeline rail */
        fill = fill || $("#tl-fill");
        var wrapEl = $("#timeline");
        if (fill && wrapEl) {
          var r = wrapEl.getBoundingClientRect();
          var seen = (window.innerHeight * 0.6 - r.top) / r.height;
          fill.style.height = Math.max(0, Math.min(1, seen)) * r.height + "px";
        }
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
  }

  /* ====================================================== 9. CURSOR GLOW */
  function initCursor() {
    if (reduced || window.matchMedia("(hover: none)").matches) return;
    var g = $("#cursor-glow");
    var x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;

    window.addEventListener("pointermove", function (e) {
      if (e.pointerType === "touch") return;
      x = e.clientX; y = e.clientY;
      document.body.classList.add("has-cursor");
    }, { passive: true });

    (function loop() {
      cx += (x - cx) * 0.11;
      cy += (y - cy) * 0.11;
      g.style.transform = "translate3d(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px,0)";
      requestAnimationFrame(loop);
    })();
  }

  /* ================================================ 10. PARTICLE CANVAS */
  /* Every particle gets a depth z (0.35–1), which drives three things:
     - nearer ones are larger and brighter,
     - nearer ones move further when you scroll (parallax),
     - fast scrolling stretches them into a short trail.
     The trail eases out on its own as scrolling slows — it never snaps back. */
  function initCanvas() {
    var cv = $("#bg-canvas");
    if (!cv || reduced) { if (cv) cv.remove(); return; }

    var ctx = cv.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0, h = 0, pts = [], mouse = { x: -999, y: -999 };
    var LINK = 132;

    var lastY   = window.scrollY || 0; /* last scroll position */
    var pending = 0;                   /* scrolled since the last frame (px) */
    var vel     = 0;                   /* smoothed scroll speed, px/frame */

    var PARALLAX  = 0.22;  /* how far scrolling shifts a particle (scaled by z) */
    var SMOOTH    = 0.22;  /* ramp-up / decay of the speed */
    var TRAIL     = 0.13;  /* trail length relative to speed */
    var TRAIL_ON  = 1.5;   /* px/frame — below this there is no trail */
    var TRAIL_MAX = 20;    /* px — hard cap, so it stays a hint not a ruler */

    function size() {
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var n = Math.round(Math.min(96, Math.max(28, (w * h) / 17000)));
      pts = [];
      for (var i = 0; i < n; i++) {
        var z = 0.35 + Math.random() * 0.65;
        pts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.26,
          vy: (Math.random() - 0.5) * 0.26,
          r: (0.5 + Math.random() * 1.0) * (0.6 + z * 0.7),
          z: z,
        });
      }
    }

    window.addEventListener("pointermove", function (e) {
      mouse.x = e.clientX; mouse.y = e.clientY;
    }, { passive: true });
    window.addEventListener("pointerleave", function () { mouse.x = mouse.y = -999; });

    /* scroll: shift the field immediately, and feed the trail velocity */
    window.addEventListener("scroll", function () {
      var y = window.scrollY || 0;
      var d = y - lastY;
      lastY = y;
      if (!d) return;
      /* clamp a single jump (anchor link, Home/End) so it does not fling */
      if (d > 220) d = 220; else if (d < -220) d = -220;

      for (var i = 0; i < pts.length; i++) {
        pts[i].y -= d * pts[i].z * PARALLAX;
      }
      pending += d;
    }, { passive: true });

    var rs;
    window.addEventListener("resize", function () {
      clearTimeout(rs); rs = setTimeout(size, 160);
    });

    function frame() {
      /* consume whatever scrolled since the last frame: vel = px/frame.
         With no scrolling d = 0, so vel decays on its own. */
      var d = pending; pending = 0;
      vel += (d - vel) * SMOOTH;
      if (Math.abs(vel) < 0.02) vel = 0;

      var streak = Math.abs(vel) > TRAIL_ON;

      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = w + 20; else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20; else if (p.y > h + 20) p.y = -20;

        /* brighter near the cursor */
        var dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        var near = dm < 170 ? 1 - dm / 170 : 0;

        var alpha = 0.2 + near * 0.6 + p.z * 0.1;

        /* trail: extends backwards along the direction of travel */
        if (streak) {
          var len = vel * p.z * TRAIL;
          if (len > TRAIL_MAX) len = TRAIL_MAX;
          else if (len < -TRAIL_MAX) len = -TRAIL_MAX;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + len);
          ctx.strokeStyle = "rgba(34,211,238," + (alpha * 0.42) + ")";
          ctx.lineWidth = p.r * 0.9;
          ctx.lineCap = "round";
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + near * 1.3, 0, 6.2832);
        ctx.fillStyle = "rgba(34,211,238," + alpha + ")";
        ctx.fill();

        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j];
          var dx = p.x - q.x, dy = p.y - q.y;
          var d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          var a = (1 - Math.sqrt(d2) / LINK) * 0.19;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = "rgba(124,168,255," + a + ")";
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
      requestAnimationFrame(frame);
    }

    size();
    frame();
  }

  /* ================================================================ BOOT */

  /* Everything the language switch has to redo. The scroll reveal is
     re-armed afterwards because the rendered nodes are new ones. */
  function renderAll() {
    renderHero();
    renderPrinciples();
    renderSkills();
    renderProjects();
    renderTimeline();
    renderContact();

    window.UI.hydrateStrings();
    window.UI.hydrateIcons();

    if (!reduced) attachSpotlight();
  }

  function boot() {
    document.documentElement.lang = window.I18N.lang();
    window.UI.buildLangSwitch($("#lang-switch"));

    renderAll();
    wireFilters();

    initReveal();
    initNav();
    initCursor();
    initCanvas();
    wireForm();

    window.addEventListener("langchange", function () {
      renderAll();
      initReveal();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
