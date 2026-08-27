/* =========================================================================
   data.js — all portfolio content in one place.
   This is the only file to edit when a project, skill or timeline entry
   changes.

   Two languages. Any user-facing string is either a plain string (the same
   in both languages — product names, stack tags) or an { en, hu } object;
   I18N.t() resolves whichever form it is handed, so both are safe anywhere.

   Every project needs a `slug`: it is the key the detail page is opened
   with (project.html?p=<slug>) and must stay stable, since links to it
   leave the site.
   ========================================================================= */

window.PORTFOLIO = {

  /* ---------------------------------------------------------------- meta */
  person: {
    name: "Imre Stumpf",
    first: "Imre",
    domain: "istumpf.dev",
    role: { en: "DevOps Engineer", hu: "DevOps mérnök" },
    tagline: {
      en: "I build things people actually use",
      hu: "Olyat építek, amit tényleg használnak",
    },
    lead: {
      en:
        "DevOps is the day job: containers, pipelines, observability, and the " +
        "unglamorous work of keeping things running. Side projects are how I " +
        "stay a builder — I pick problems someone actually has, ship the whole " +
        "thing end to end, and learn the parts I'd never touch from an ops seat.",
      hu:
        "A DevOps a napi munka: konténerek, pipeline-ok, monitorozás, és az a " +
        "hálátlan meló, amitől a dolgok futva maradnak. A saját projektek attól " +
        "tartanak építőnek — olyan problémát választok, ami valakinek tényleg " +
        "megvan, végigviszem az egészet, és közben megtanulom azt a részt, " +
        "amihez üzemeltetőként sosem érnék hozzá.",
    },
    location: { en: "Hungary", hu: "Magyarország" },
    email: "surmi64@gmail.com",
    availability: {
      en: "Open to interesting projects",
      hu: "Nyitott vagyok érdekes projektekre",
    },
    socials: [
      { icon: "github",   label: "GitHub",   href: "https://github.com/" },
      { icon: "linkedin", label: "LinkedIn", href: "#" },
      { icon: "mail",     label: "Email",    href: "mailto:surmi64@gmail.com" },
    ],
    stats: [
      { auto: "live", label: { en: "Projects running live", hu: "Élesben futó projekt" } },
      { value: 82810, label: { en: "RAG chunks indexed",    hu: "Indexelt RAG chunk" } },
      { value: 3,     label: { en: "Languages shipped",     hu: "Kiszállított nyelv" } },
      { value: 9,     label: { en: "Subjects in the AI tutor", hu: "Tantárgy az AI tutorban" } },
    ],
  },

  /* --------------------------------------------------------------- about */
  /* Three short blocks under the section lead — the "why" behind the work. */
  principles: [
    {
      icon: "wrench",
      title: { en: "Useful beats clever", hu: "A hasznos veri az okosat" },
      text: {
        en:
          "Every side project here exists because a real person needed it — a " +
          "student stuck on homework, a winery counting bottles in a spreadsheet, " +
          "a guesthouse with no English-language presence. That constraint kills " +
          "most bad ideas before I write any code.",
        hu:
          "Minden itteni projekt azért van, mert valakinek tényleg kellett — egy " +
          "diáknak, aki elakadt a házival, egy pincészetnek, ami Excelben számolta " +
          "a palackokat, egy panziónak, amit angolul senki nem talált meg. Ez a " +
          "megkötés a rossz ötletek nagy részét megöli, mielőtt egy sort is írnék.",
      },
    },
    {
      icon: "graduation-cap",
      title: { en: "Shipping is how I learn", hu: "A kiszállítás a tanulás" },
      text: {
        en:
          "Reading about pgvector teaches me the API. Running it in production " +
          "with 82,810 chunks and users who notice a bad answer teaches me the " +
          "trade-offs. I pick stacks I don't know yet on purpose.",
        hu:
          "A pgvector dokumentációjából megtanulom az API-t. Élesben, 82 810 " +
          "chunkkal és olyan felhasználókkal, akik kiszúrják a rossz választ, a " +
          "kompromisszumokat tanulom meg. Szándékosan olyan stacket választok, " +
          "amit még nem ismerek.",
      },
    },
    {
      icon: "activity",
      title: { en: "Ops habits, everywhere", hu: "Üzemeltetői szokások, mindenhol" },
      text: {
        en:
          "Even a small side project gets migrations, health checks, structured " +
          "logs and a rollback path. It costs an afternoon and saves the weekend " +
          "I'd otherwise spend debugging in the dark.",
        hu:
          "Még a legkisebb projekt is kap migrációt, health checket, strukturált " +
          "logot és visszaállítási utat. Egy délutánba kerül, és megspórolja azt " +
          "a hétvégét, amit különben sötétben hibakereséssel töltenék.",
      },
    },
  ],

  /* ------------------------------------------------------------ projects */
  /* `key` is what a card carries in data-cats and what the chip filters on;
     the label is only ever shown, never compared. */
  filters: [
    { key: "all",        label: { en: "All",        hu: "Mind" } },
    { key: "ai",         label: { en: "AI",         hu: "AI" } },
    { key: "webapp",     label: { en: "Web App",    hu: "Webalkalmazás" } },
    { key: "ecommerce",  label: { en: "E-commerce", hu: "Webshop" } },
    { key: "marketing",  label: { en: "Marketing",  hu: "Marketing" } },
    { key: "infra",      label: { en: "Infra",      hu: "Infra" } },
    { key: "iot",        label: { en: "IoT",        hu: "IoT" } },
  ],

  projects: [

    /* ------------------------------------------------ 1. Ötösleszek AI */
    {
      slug: "otosleszek",
      real: true,
      title: "Ötösleszek AI",
      subtitle: {
        en: "AI tutor for Hungarian students, grades 5–12",
        hu: "AI korrepetálás 5–12. osztályos diákoknak",
      },
      categories: ["ai", "webapp"],
      status: { en: "Live", hu: "Élesben" },
      year: "2026",
      accent: "cyan",
      icon: "graduation-cap",
      cover: "assets/img/projects/otosleszek.webp",
      url: "https://app.otosleszek.hu",
      repo: "otosleszek-full-stack",
      description: {
        en:
          "A RAG-grounded AI tutor that answers from official Hungarian school " +
          "textbooks rather than from the model's memory. pgvector search over " +
          "82,810+ indexed chunks, grade-aware filtering, image and voice input, " +
          "KaTeX maths rendering.",
        hu:
          "RAG-alapú AI tutor, ami a hivatalos magyar tankönyvekből válaszol, nem " +
          "a modell emlékezetéből. pgvector keresés 82 810+ indexelt chunkon, " +
          "évfolyamra szűkített találatok, kép- és hangbemenet, KaTeX " +
          "képletmegjelenítés.",
      },
      highlights: [
        { en: "9 subjects with a grade-aware retrieval fallback chain",
          hu: "9 tantárgy, évfolyamtudatos visszaesési lánccal a keresésben" },
        { en: "Gamification: XP, streaks, achievements, leaderboards",
          hu: "Gamifikáció: XP, sorozatok, kitűzők, ranglisták" },
        { en: "Stripe embedded checkout, Billingo invoicing, family plans",
          hu: "Stripe beágyazott fizetés, Billingo számlázás, családi csomagok" },
        { en: "Hallucination detection with graded confidence disclaimers",
          hu: "Hallucinációfigyelés, a bizonytalanság mértékéhez igazított jelzéssel" },
        { en: "PIN-protected parent dashboard, aggregate stats only",
          hu: "PIN-védett szülői felület, kizárólag összesített statisztikával" },
      ],
      stack: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "PostgreSQL + pgvector",
              "OpenAI GPT-5", "Stripe", "Langfuse", "Docker", "Grafana"],
      metrics: [
        { k: { en: "RAG chunks", hu: "RAG chunk" }, v: "82,810+" },
        { k: { en: "Subjects",   hu: "Tantárgy" },  v: "9" },
        { k: { en: "Grades",     hu: "Évfolyam" },  v: "5–12" },
      ],

      detail: {
        intro: {
          en:
            "A general-purpose chatbot will happily invent a Hungarian history " +
            "date or solve an equation the way an American textbook does. " +
            "Ötösleszek answers from the books the student is actually graded " +
            "on: every response is retrieved from an indexed corpus of official " +
            "Hungarian curriculum material first, and the model's job is to " +
            "explain what was retrieved — not to remember it.",
          hu:
            "Egy általános chatbot boldogan kitalál egy magyar történelmi " +
            "évszámot, vagy úgy old meg egy egyenletet, ahogy egy amerikai " +
            "tankönyv. Az Ötösleszek abból a könyvből válaszol, amiből a diákot " +
            "tényleg felelteti a tanár: minden válasz előbb a hivatalos magyar " +
            "tananyagból indexelt korpuszból keres, és a modell dolga az, hogy " +
            "elmagyarázza a találatot — nem az, hogy emlékezzen rá.",
        },
        sections: [
          {
            title: { en: "Retrieval, not recall", hu: "Keresés, nem emlékezet" },
            body: {
              en:
                "The corpus is chunked and embedded into PostgreSQL with " +
                "pgvector. A query carries the student's grade and subject, so " +
                "retrieval is filtered before it is ranked — a seventh-grader " +
                "asking about the Second World War gets the seventh-grade " +
                "framing, not the twelfth-grade one. When a narrow filter " +
                "returns nothing useful, a fallback chain widens it step by " +
                "step rather than dropping straight through to the raw model.",
              hu:
                "A korpusz chunkokra bontva, embeddingként kerül a PostgreSQL-be " +
                "pgvectorral. A kérdés viszi magával a diák évfolyamát és " +
                "tantárgyát, így a keresés már a rangsorolás előtt szűkül — egy " +
                "hetedikes a második világháborúról hetedikes szinten kap " +
                "választ, nem tizenkettedikesen. Ha a szűk szűrő nem hoz " +
                "használhatót, egy visszaesési lánc lépésenként tágít, ahelyett " +
                "hogy rögtön a nyers modellhez esne vissza.",
            },
          },
          {
            title: { en: "Being wrong out loud", hu: "Hangosan tévedni" },
            body: {
              en:
                "A tutor that is confidently wrong is worse than no tutor. " +
                "Answers are checked against what was actually retrieved, and " +
                "the confidence of that match drives a graded disclaimer — from " +
                "silence when the passage clearly supports the answer, to an " +
                "explicit warning when the model is extrapolating. Every " +
                "generation is traced in Langfuse, so a complaint about a bad " +
                "answer can be replayed rather than argued about.",
              hu:
                "Egy magabiztosan tévedő tutor rosszabb, mint a semmilyen. A " +
                "válasz össze van vetve azzal, amit a keresés valóban visszaadott, " +
                "és ennek az egyezésnek a biztossága szabja meg a figyelmeztetés " +
                "erősségét — a teljes hallgatástól, ha a szövegrész egyértelműen " +
                "alátámasztja a választ, az explicit figyelmeztetésig, ha a modell " +
                "már extrapolál. Minden generálás Langfuse-ban nyomon követhető, " +
                "így egy rossz válaszra érkező panaszt vissza lehet játszani, nem " +
                "kell vitatkozni róla.",
            },
          },
          {
            title: { en: "The parts around the model", hu: "Ami a modell körül van" },
            body: {
              en:
                "Most of the work was never about prompting. Stripe embedded " +
                "checkout with family plans, Billingo invoicing, a PIN-protected " +
                "parent view that shows aggregates but never the child's " +
                "conversations, gamification that makes a streak worth keeping, " +
                "image and voice input, KaTeX rendering so maths looks like " +
                "maths. Behind it: Sentry, Prometheus, Grafana and Langfuse.",
              hu:
                "A munka nagyobb része sosem a promptolásról szólt. Stripe " +
                "beágyazott fizetés családi csomagokkal, Billingo számlázás, " +
                "PIN-védett szülői nézet, ami összesítést mutat, de a gyerek " +
                "beszélgetéseit soha, gamifikáció, amitől a sorozatot megéri " +
                "tartani, kép- és hangbemenet, KaTeX, hogy a matek matekként " +
                "nézzen ki. Mögötte: Sentry, Prometheus, Grafana és Langfuse.",
            },
          },
        ],
        gallery: [
          { src: "assets/img/projects/otosleszek-tantargyak.webp",
            caption: { en: "Subject picker across grades 5–12",
                       hu: "Tantárgyválasztó az 5–12. évfolyamra" } },
          { src: "assets/img/projects/otosleszek-arak.webp",
            caption: { en: "Plans and pricing, wired to Stripe",
                       hu: "Csomagok és árak, Stripe-hoz kötve" } },
        ],
        facts: [
          { k: { en: "Role",    hu: "Szerep" },   v: { en: "Solo — product, backend, frontend, infra",
                                                       hu: "Egyedül — termék, backend, frontend, infra" } },
          { k: { en: "Live since", hu: "Élesben" }, v: { en: "14 March 2026", hu: "2026. március 14." } },
          { k: { en: "Users",   hu: "Felhasználók" }, v: { en: "Hungarian students and their parents",
                                                           hu: "Magyar diákok és a szüleik" } },
        ],
      },
    },

    /* -------------------------------------------- 2. Hajnalhozó App */
    {
      slug: "hajnalhozo-app",
      real: true,
      title: { en: "Hajnalhozó App", hu: "Hajnalhozó App" },
      subtitle: {
        en: "Winery management, vine to invoice",
        hu: "Pincészeti rendszer a tőkétől a számláig",
      },
      categories: ["webapp", "iot"],
      status: { en: "Live", hu: "Élesben" },
      year: "2025 — 2026",
      accent: "amber",
      icon: "grape",
      cover: "assets/img/projects/hajnalhozo-app.webp",
      url: "https://app.hajnalhozo.hu",
      repo: "liquid_asset",
      description: {
        en:
          "A self-hosted management system for a working winery: sales, " +
          "vineyard parcels, spray logs, harvest, tanks, fermentation, lab " +
          "results and NÉBIH lot numbers. It replaced a pile of spreadsheets " +
          "and a paper spray diary that a regulator can ask to see.",
        hu:
          "Saját üzemeltetésű rendszer egy működő pincészetnek: értékesítés, " +
          "dűlők, permetezési napló, szüret, tartályok, erjedés, laboreredmények " +
          "és NÉBIH tételszámok. Egy halom Excelt és egy papíralapú permetezési " +
          "naplót váltott ki — olyat, amit a hatóság bármikor elkérhet.",
      },
      highlights: [
        { en: "Vineyard parcels drawn in-browser, stored as GeoJSON on a Leaflet map",
          hu: "Böngészőben rajzolt dűlőhatárok, GeoJSON-ként, Leaflet térképen" },
        { en: "Spray diary with pre-harvest interval tracking — the regulated part",
          hu: "Permetezési napló élelmezés-egészségügyi várakozási idővel — a szabályozott rész" },
        { en: "RAPT hydrometers polled from the cloud API, charted per tank",
          hu: "RAPT hidrométerek lekérdezése a felhő API-ból, tartályonkénti görbékkel" },
        { en: "Per-resource RBAC enforced server-side, not just hidden in the UI",
          hu: "Erőforrásonkénti jogosultság szerveroldalon, nem csak elrejtve a felületen" },
        { en: "API-key webshop feed — this app is the storefront's source of truth",
          hu: "API-kulcsos webshop feed — ez az app a bolt egyetlen igazságforrása" },
      ],
      stack: ["FastAPI", "SQLAlchemy 2.0", "Alembic", "PostgreSQL", "React 19", "Vite",
              "TypeScript", "Tailwind", "TanStack Query", "Leaflet", "Recharts", "Docker"],
      metrics: [
        { k: { en: "Migrations", hu: "Migráció" },   v: "32" },
        { k: { en: "API routers", hu: "API router" }, v: "21" },
        { k: { en: "Languages",  hu: "Nyelv" },       v: "HU / EN" },
      ],

      detail: {
        intro: {
          en:
            "A small winery produces about ten thousand bottles a year and is " +
            "still expected to answer, on demand, what was sprayed on which " +
            "parcel and how long before harvest. That record lived in a paper " +
            "diary; the sales lived in spreadsheets; the tanks lived in " +
            "someone's head. This is all of it in one place, running on the " +
            "winery's own hardware.",
          hu:
            "Egy kis pincészet évi tízezer palack körül termel, és közben " +
            "bármikor meg kell tudnia mondani, mit permeteztek melyik dűlőben és " +
            "hány nappal a szüret előtt. Ez a nyilvántartás papíron volt, az " +
            "értékesítés Excelben, a tartályok pedig valakinek a fejében. Ez " +
            "mindez egy helyen, a pincészet saját vasán futva.",
        },
        sections: [
          {
            title: { en: "The regulated half", hu: "A szabályozott fele" },
            body: {
              en:
                "Spray logs, phenology, harvest days broken down into grape and " +
                "must deliveries — crate counts, weighbridge figures, Brix " +
                "readings, racking into tanks, additions per stage, and the " +
                "resulting juice yield in litres per kilo. NÉBIH lot numbers get " +
                "their own tracking, and lab results cover sugar, total and " +
                "volatile acidity, pH, free and total SO₂, turbidity and " +
                "stability tests. None of this is glamorous; all of it is the " +
                "difference between an audit and a problem.",
              hu:
                "Permetezési napló, fenológia, szüretnapok szőlő- és " +
                "mustbeszállításra bontva — ládaszám, hídmérleg, Brix-értékek, " +
                "tartályba fejtés, szakaszonkénti adalékolás, és a végén a " +
                "mustkihozatal literben kilónként. A NÉBIH tételszámok külön " +
                "nyilvántartást kapnak, a laboreredmények pedig lefedik a cukrot, " +
                "a titrálható és illósavat, a pH-t, a szabad és összes SO₂-t, a " +
                "zavarosságot és a stabilitási próbákat. Semmi látványos nincs " +
                "benne; mégis ez a különbség egy ellenőrzés és egy probléma közt.",
            },
          },
          {
            title: { en: "Sensors and maps", hu: "Szenzorok és térképek" },
            body: {
              en:
                "Parcel boundaries are drawn in the browser and stored as " +
                "GeoJSON, so a spray record points at an actual shape on a map " +
                "rather than at a name someone typed twice. Fermentation is " +
                "tracked both by hand and by RAPT hydrometers, polled from the " +
                "rapt.io cloud API, assigned to a tank and charted — gravity and " +
                "temperature curves next to the free-text notes.",
              hu:
                "A dűlőhatárokat a böngészőben lehet megrajzolni, GeoJSON-ként " +
                "tárolva, így egy permetezési bejegyzés valódi alakzatra mutat a " +
                "térképen, nem egy kétféleképp begépelt névre. Az erjedés kézzel " +
                "és RAPT hidrométerekkel is követhető: a rapt.io felhő API-jából " +
                "lekérdezve, tartályhoz rendelve, görbékkel — sűrűség és " +
                "hőmérséklet a szöveges jegyzetek mellett.",
            },
          },
          {
            title: { en: "Feeding the shop", hu: "A bolt ellátása" },
            body: {
              en:
                "The product catalog lives here, not in the storefront. The shop " +
                "pulls it over an API-key-authenticated feed whose keys are " +
                "rotatable from the admin UI, which means a price change happens " +
                "in one place and a compromised key is a two-click problem. " +
                "Access itself is role-based, with per-resource view and write " +
                "permissions checked on the server — a hidden button is not a " +
                "permission.",
              hu:
                "A terméktörzs itt van, nem a boltban. A shop egy API-kulccsal " +
                "védett feeden keresztül húzza le, a kulcsok pedig az admin " +
                "felületről cserélhetők — így egy árváltozás egy helyen történik, " +
                "egy kiszivárgott kulcs pedig két kattintás. Maga a hozzáférés " +
                "szerepköralapú, erőforrásonkénti olvasási és írási joggal, " +
                "szerveroldalon ellenőrizve: egy elrejtett gomb nem jogosultság.",
            },
          },
        ],
        gallery: [
          { src: "assets/img/projects/hajnalhozo-app.webp",
            caption: { en: "Sign-in — the rest of the app is behind the door",
                       hu: "Bejelentkezés — az alkalmazás többi része az ajtó mögött van" } },
        ],
        facts: [
          { k: { en: "Role", hu: "Szerep" }, v: { en: "Solo — the whole stack",
                                                  hu: "Egyedül — a teljes stack" } },
          { k: { en: "Runs on", hu: "Hol fut" }, v: { en: "The winery's own Proxmox host",
                                                      hu: "A pincészet saját Proxmox gépén" } },
          { k: { en: "Replaced", hu: "Mit váltott ki" }, v: { en: "Spreadsheets and a paper spray diary",
                                                              hu: "Excelt és papír permetezési naplót" } },
        ],
      },
    },

    /* ----------------------------------------- 3. Hajnalhozó Webshop */
    {
      slug: "hajnalhozo-shop",
      real: true,
      title: { en: "Hajnalhozó Webshop", hu: "Hajnalhozó Webshop" },
      subtitle: {
        en: "Invitation-only storefront for a small cellar",
        hu: "Meghívásos webshop egy kis pincének",
      },
      categories: ["ecommerce", "webapp"],
      status: { en: "Live", hu: "Élesben" },
      year: "2026",
      accent: "violet",
      icon: "shopping-bag",
      cover: "assets/img/projects/shop.webp",
      url: "https://shop.hajnalhozo.hu",
      repo: "liquid_asset/shop",
      description: {
        en:
          "A storefront built from scratch instead of bolted onto a platform. " +
          "Stock is limited, so the shop is invitation-only by design: tasting " +
          "bookings that sync both ways with Google Calendar, gift vouchers " +
          "rendered to PDF, GLS parcel labels, and product copy translated by " +
          "an LLM from the admin.",
        hu:
          "Nem platformra ráhúzott, hanem nulláról épített bolt. A készlet " +
          "kicsi, ezért a shop szándékosan meghívásos: kóstolófoglalás kétirányú " +
          "Google Calendar szinkronnal, PDF-be rajzolt ajándékutalványok, GLS " +
          "csomagcímkék, és admin felületről, LLM-mel fordított termékszövegek.",
      },
      highlights: [
        { en: "Two-way Google Calendar sync for tasting bookings, on its own worker",
          hu: "Kétirányú Google Calendar szinkron a kóstolókra, külön workerben" },
        { en: "Gift vouchers drawn to A5 PDF with a QR code for the terms",
          hu: "A5-ös PDF ajándékutalvány, QR-kóddal a feltételekhez" },
        { en: "GLS parcel integration and multi-currency pricing",
          hu: "GLS csomagintegráció és többdevizás árazás" },
        { en: "Gemini-translated product copy, reviewed before it goes live",
          hu: "Gemini-fordított termékszöveg, élesítés előtt átnézve" },
        { en: "GDPR paperwork written alongside the code: ROPA, DPIA, incident playbook",
          hu: "A kóddal együtt írt GDPR-anyag: adatkezelési nyilvántartás, hatásvizsgálat, incidens-playbook" },
      ],
      stack: ["FastAPI", "SQLAlchemy 2.0", "Alembic", "PostgreSQL", "React 19", "Vite",
              "TypeScript", "Tailwind 4", "PyJWT", "slowapi", "ReportLab",
              "OpenTelemetry", "Docker"],
      metrics: [
        { k: { en: "API routers", hu: "API router" }, v: "10" },
        { k: { en: "Access",      hu: "Hozzáférés" }, v: { en: "invite", hu: "meghívós" } },
        { k: { en: "Languages",   hu: "Nyelv" },      v: "HU / EN" },
      ],

      detail: {
        intro: {
          en:
            "Around ten thousand bottles a year does not fill a supermarket " +
            "shelf, and it does not need a checkout optimised for volume. It " +
            "needs the opposite: a shop that asks you to visit the cellar first, " +
            "then lets you order what you tasted. Everything here follows from " +
            "that — the invitation gate, the tasting calendar, the vouchers " +
            "people buy for someone else.",
          hu:
            "Évi tízezer palack nem tölt meg egy szupermarket-polcot, és nem is " +
            "kell hozzá forgalomra optimalizált pénztár. Épp az ellenkezője kell: " +
            "olyan bolt, ami előbb megkéri, hogy gyere el a pincébe, aztán " +
            "megrendelheted, amit megkóstoltál. Minden ebből következik — a " +
            "meghívásos kapu, a kóstolónaptár, a másnak vett utalványok.",
        },
        sections: [
          {
            title: { en: "Booking a tasting", hu: "Kóstolófoglalás" },
            body: {
              en:
                "The tasting flow is the largest single feature: a guest picks a " +
                "slot, the winemaker confirms or proposes another, and both sides " +
                "can cancel from a signed link that needs no account. A separate " +
                "sync worker keeps the whole thing consistent with the winemaker's " +
                "own Google Calendar in both directions, so a booking made on a " +
                "phone in the vineyard shows up in the shop and vice versa.",
              hu:
                "A kóstolófolyamat a legnagyobb egybefüggő funkció: a vendég " +
                "választ időpontot, a borász visszaigazolja vagy másikat ajánl, és " +
                "mindkét fél lemondhat egy aláírt linkről, amihez nem kell fiók. " +
                "Egy külön szinkron-worker tartja kétirányban egyben az egészet a " +
                "borász saját Google-naptárával, így a szőlőben, telefonon " +
                "felvett foglalás megjelenik a boltban is, és fordítva.",
            },
          },
          {
            title: { en: "Vouchers as a printed object", hu: "Az utalvány mint tárgy" },
            body: {
              en:
                "A gift voucher is bought online and given in person, so it has " +
                "to survive being printed. ReportLab draws the A5 pages, Pillow " +
                "converts the cellar photograph and inverts the white logo for a " +
                "light background, and a QR code carries the terms so the back of " +
                "the card does not have to. All three are pure-Python wheels — " +
                "the slim container needs no extra system packages for it.",
              hu:
                "Az ajándékutalványt online veszik, de személyesen adják át, " +
                "úgyhogy ki kell bírnia a nyomtatást. A ReportLab rajzolja az " +
                "A5-ös oldalakat, a Pillow konvertálja a pincefotót és fordítja " +
                "meg a fehér logót világos háttérhez, a QR-kód pedig elviszi a " +
                "feltételeket, hogy ne a kártya hátoldalára kelljen írni. " +
                "Mindhárom tiszta Python wheel — a slim konténernek nem kell " +
                "hozzá egyetlen extra rendszercsomag sem.",
            },
          },
          {
            title: { en: "Compliance written, not assumed", hu: "Megírt, nem feltételezett megfelelés" },
            body: {
              en:
                "Selling to consumers in Hungary means GDPR is not optional, and " +
                "alcohol adds an age gate on top. The repository carries the " +
                "paperwork next to the code: a record of processing activities, a " +
                "data-processor register, an audit, an incident playbook and the " +
                "invoicing options that were actually considered. Requests are " +
                "rate-limited, JWTs live in HttpOnly cookies, and OpenTelemetry " +
                "traces go out to the same observability stack as everything else.",
              hu:
                "Ha fogyasztónak adsz el Magyarországon, a GDPR nem opcionális, " +
                "az alkohol pedig még egy korkaput is ráhúz. A repóban a kód " +
                "mellett ott a papírmunka is: adatkezelési tevékenységek " +
                "nyilvántartása, adatfeldolgozói lista, audit, incidens-playbook, " +
                "és a ténylegesen mérlegelt számlázási opciók. A kérések rate " +
                "limitesek, a JWT HttpOnly sütiben él, az OpenTelemetry nyomok " +
                "pedig ugyanabba a monitorozó stackbe mennek, mint minden más.",
            },
          },
        ],
        gallery: [
          { src: "assets/img/projects/shop-wines.webp",
            caption: { en: "Catalog — invitation-only, with the reason stated",
                       hu: "Katalógus — meghívásos, megindokolva" } },
          { src: "assets/img/projects/shop-tasting.webp",
            caption: { en: "Tasting booking, the largest flow in the shop",
                       hu: "Kóstolófoglalás, a bolt legnagyobb folyamata" } },
          { src: "assets/img/projects/shop-vineyards.webp",
            caption: { en: "The four family vineyard plots",
                       hu: "A négy családi dűlő" } },
        ],
        facts: [
          { k: { en: "Role", hu: "Szerep" }, v: { en: "Solo — backend, frontend, compliance",
                                                  hu: "Egyedül — backend, frontend, megfelelés" } },
          { k: { en: "Catalog source", hu: "Terméktörzs forrása" },
            v: { en: "Synced from the Hajnalhozó App", hu: "A Hajnalhozó Appból szinkronizálva" } },
          { k: { en: "Payments", hu: "Fizetés" }, v: { en: "Order-first, invoiced separately",
                                                       hu: "Rendelés előbb, számlázás külön" } },
        ],
      },
    },

    /* ------------------------------------------------- 4. Helén Panzió */
    {
      slug: "helen-panzio",
      real: true,
      title: "Helén Panzió",
      subtitle: {
        en: "Trilingual site for a family guesthouse",
        hu: "Háromnyelvű oldal egy családi panziónak",
      },
      categories: ["marketing", "webapp"],
      status: { en: "Live", hu: "Élesben" },
      year: "2026",
      accent: "blue",
      icon: "hotel",
      cover: "assets/img/projects/helenpanzio.webp",
      url: "https://helenpanzio.hu",
      repo: "helenpanzio_newage_marketing",
      description: {
        en:
          "A small guesthouse in Hercegkút had no reach beyond Hungarian. This " +
          "is a fully static, fast brochure site in Hungarian, English and " +
          "Polish — Astro 6, prerendered to 34 pages, served by nginx behind " +
          "Docker with essentially no JavaScript.",
        hu:
          "Egy hercegkúti kis panzió magyarul túl nem jutott el senkihez. Ez egy " +
          "teljesen statikus, gyors bemutatkozó oldal magyarul, angolul és " +
          "lengyelül — Astro 6, 34 oldalra előre generálva, nginx szolgálja ki " +
          "Dockerben, gyakorlatilag JavaScript nélkül.",
      },
      highlights: [
        { en: "3 languages (HU / EN / PL) at full content parity",
          hu: "3 nyelv (HU / EN / PL), teljes tartalmi egyezéssel" },
        { en: "Themed package pages: wellness, wine cellar, team building, whole house",
          hu: "Tematikus csomagoldalak: wellness, borospince, csapatépítő, teljes ház" },
        { en: "Content-collection blog in all three languages",
          hu: "Content collection alapú blog mindhárom nyelven" },
        { en: "Zero JavaScript by default — static build, nginx delivery",
          hu: "Alapból nulla JavaScript — statikus build, nginx kiszolgálás" },
        { en: "A `check:facts` script guards claims that have drifted before",
          hu: "Egy `check:facts` szkript őrzi az állításokat, amik már elcsúsztak egyszer" },
      ],
      stack: ["Astro 6", "TypeScript", "Content Collections", "nginx", "Docker", "QRCode"],
      metrics: [
        { k: { en: "Languages", hu: "Nyelv" },      v: "3" },
        { k: { en: "Pages",     hu: "Oldal" },      v: "34" },
        { k: { en: "JS bundle", hu: "JS bundle" },  v: "~0 kB" },
      ],

      detail: {
        intro: {
          en:
            "Hercegkút sits in the Zemplén hills, in a UNESCO wine region that " +
            "Polish and German visitors reach more easily than the Hungarian " +
            "internet suggests. The guesthouse had a Hungarian-only site and no " +
            "way to be found by anyone else. Three languages was the whole " +
            "brief; everything else follows from wanting the result to still " +
            "work in five years with nobody maintaining it.",
          hu:
            "Hercegkút a Zemplénben fekszik, egy UNESCO-borvidéken, ahová lengyel " +
            "és német vendégek könnyebben eljutnak, mint ahogy azt a magyar " +
            "internet sugallja. A panziónak csak magyar oldala volt, és semmi " +
            "esélye, hogy más rátaláljon. A feladat maga a három nyelv volt; " +
            "minden más abból következik, hogy az eredmény öt év múlva is " +
            "működjön úgy, hogy közben senki nem karbantartja.",
        },
        sections: [
          {
            title: { en: "Static on purpose", hu: "Szándékosan statikus" },
            body: {
              en:
                "Astro prerenders the whole site to 34 HTML pages and ships " +
                "essentially no JavaScript. There is no database to back up, no " +
                "runtime to patch, no plugin that will break on an update at " +
                "three in the morning. The handover was a container image; the " +
                "maintenance burden is close to zero, which for a guesthouse " +
                "with no IT staff is the actual feature.",
              hu:
                "Az Astro az egész oldalt 34 HTML lapra generálja előre, és " +
                "gyakorlatilag nem szállít JavaScriptet. Nincs mit menteni, " +
                "nincs futtatókörnyezet, amit foltozni kell, nincs plugin, ami " +
                "hajnali háromkor eltörik egy frissítéstől. Az átadás egy " +
                "konténer-image volt; a karbantartási teher közel nulla, ami egy " +
                "IT-s nélküli panziónál maga a lényeg.",
            },
          },
          {
            title: { en: "Three languages, not one plus translations",
                     hu: "Három nyelv, nem egy plusz fordítás" },
            body: {
              en:
                "HU, EN and PL are separate route trees with full content " +
                "parity, including the blog, which is a content collection in " +
                "all three. A visitor landing in Polish gets the Polish site, " +
                "not a Hungarian page with a translated navbar — and the themed " +
                "package pages (wellness, wine cellar, team building, whole " +
                "house) exist in each.",
              hu:
                "A HU, EN és PL külön route-fák, teljes tartalmi egyezéssel, a " +
                "bloggal együtt, ami mindhárom nyelven content collection. Aki " +
                "lengyelül érkezik, a lengyel oldalt kapja, nem egy magyar lapot " +
                "lefordított menüvel — és a tematikus csomagoldalak (wellness, " +
                "borospince, csapatépítő, teljes ház) is megvannak mindegyiken.",
            },
          },
          {
            title: { en: "Guarding the facts", hu: "A tények őrzése" },
            body: {
              en:
                "Room counts, capacities and prices had drifted between pages " +
                "before, in the way marketing copy always does. A `check:facts` " +
                "script now reads the claims out of the built site and fails if " +
                "they disagree with each other — a cheap test that catches the " +
                "one class of bug that actually embarrasses a guesthouse.",
              hu:
                "A szobaszámok, férőhelyek és árak korábban elcsúsztak az oldalak " +
                "közt, ahogy a marketingszöveg mindig szokott. Egy `check:facts` " +
                "szkript most kiolvassa az állításokat a legenerált oldalból, és " +
                "elbukik, ha ellentmondanak egymásnak — olcsó teszt arra az " +
                "egyetlen hibaosztályra, ami egy panziót tényleg kellemetlenül érint.",
            },
          },
        ],
        gallery: [
          { src: "assets/img/projects/panzio-en.webp",
            caption: { en: "The same site in English",
                       hu: "Ugyanaz az oldal angolul" } },
          { src: "assets/img/projects/panzio-wellness.webp",
            caption: { en: "One of the themed package pages",
                       hu: "Az egyik tematikus csomagoldal" } },
        ],
        facts: [
          { k: { en: "Role",  hu: "Szerep" },  v: { en: "Solo — content, build, delivery",
                                                    hu: "Egyedül — tartalom, build, kiszolgálás" } },
          { k: { en: "Client", hu: "Megbízó" }, v: { en: "Helén Panzió, Hercegkút",
                                                     hu: "Helén Panzió, Hercegkút" } },
          { k: { en: "Handover", hu: "Átadás" }, v: { en: "A container image, nothing to maintain",
                                                      hu: "Egy konténer-image, nincs mit karbantartani" } },
        ],
      },
    },

    /* -------------------------------------- 5. Home & Site Automation */
    {
      slug: "home-automation",
      real: true,
      title: { en: "Home & Site Automation", hu: "Otthon- és telephely-automatizálás" },
      subtitle: {
        en: "Zigbee, Home Assistant, and a link between two buildings",
        hu: "Zigbee, Home Assistant, és egy link két épület között",
      },
      categories: ["infra", "iot"],
      status: { en: "Live", hu: "Élesben" },
      year: { en: "2025 — present", hu: "2025 — jelenleg is" },
      accent: "blue",
      icon: "radio-tower",
      cover: null,
      url: "#",
      linkLabel: { en: "Not on GitHub", hu: "Nincs GitHubon" },
      repo: null,
      description: {
        en:
          "The half of infrastructure that has weather. Home Assistant runs as " +
          "its own VM with a Zigbee coordinator passed through on USB, and the " +
          "guesthouse and its wine cellar are joined by a wireless link I built " +
          "out of consumer hardware — because the trench quote for fibre between " +
          "two buildings was not a serious proposal.",
        hu:
          "Az infrastruktúrának az a fele, amire esik az eső. A Home Assistant " +
          "saját VM-ként fut, USB-n átadott Zigbee koordinátorral, a panziót és a " +
          "borospincét pedig egy általam épített vezeték nélküli link köti össze " +
          "— mert a két épület közti optika árokásási ajánlata nem volt komoly.",
      },
      highlights: [
        { en: "Home Assistant on a dedicated Proxmox VM, Zigbee coordinator (CP210x) passed through on USB",
          hu: "Home Assistant külön Proxmox VM-en, USB-n átadott Zigbee koordinátorral (CP210x)" },
        { en: "Zigbee mesh for sensors and switches — local control, no vendor cloud in the path",
          hu: "Zigbee mesh a szenzoroknak és kapcsolóknak — helyi vezérlés, gyártói felhő nélkül" },
        { en: "Point-to-point wireless bridge between guesthouse and wine cellar",
          hu: "Pont-pont vezeték nélküli híd a panzió és a borospince között" },
        { en: "Shelly devices on the far side, reachable over the tailnet",
          hu: "Shelly eszközök a túloldalon, tailneten keresztül elérhetően" },
        { en: "TrueNAS backups with scheduled snapshots and periodic restore tests",
          hu: "TrueNAS mentés ütemezett pillanatképekkel és rendszeres visszaállítási próbával" },
      ],
      stack: ["Home Assistant", "Zigbee", "Shelly", "TrueNAS", "ZFS snapshots",
              "Tailscale", "PoE", "Proxmox VE"],
      metrics: [
        { k: { en: "Cloud dependency", hu: "Felhőfüggés" },  v: { en: "none", hu: "nincs" } },
        { k: { en: "Buildings linked", hu: "Összekötött épület" }, v: "2" },
        { k: { en: "Restores tested",  hu: "Visszaállítás tesztelve" }, v: { en: "yes", hu: "igen" } },
      ],

      detail: {
        intro: {
          en:
            "Everything else in this portfolio runs in a rack and fails in ways " +
            "a log can explain. This one has a radio path across a valley, a " +
            "coordinator that only works when the USB device passes through " +
            "cleanly, and consequences you notice because a light did not come " +
            "on. It is the part of infrastructure that taught me to test the " +
            "assumption rather than the config.",
          hu:
            "Ebben a portfólióban minden más rackben fut, és úgy hibázik, ahogy " +
            "azt egy log el tudja magyarázni. Ez itt egy rádiós út egy völgy " +
            "fölött, egy koordinátor, ami csak akkor működik, ha az USB eszköz " +
            "rendesen átmegy a VM-be, és olyan következmények, amiket abból veszel " +
            "észre, hogy nem gyulladt fel egy lámpa. Ez az a rész, ami megtanított " +
            "a feltevést tesztelni, nem a konfigot.",
        },
        sections: [
          {
            title: { en: "Local control, on purpose", hu: "Szándékosan helyi vezérlés" },
            body: {
              en:
                "Home Assistant runs as its own VM on the Proxmox host with the " +
                "CP210x Zigbee coordinator passed through as a USB device rather " +
                "than networked over a bridge. The sensors and switches speak " +
                "Zigbee to it directly, so there is no vendor cloud in the path: " +
                "the automations keep working through an internet outage, which " +
                "is precisely when you would rather they did.",
              hu:
                "A Home Assistant saját VM-ként fut a Proxmox gépen, a CP210x " +
                "Zigbee koordinátort USB eszközként átadva, nem hálózaton " +
                "keresztül. A szenzorok és kapcsolók közvetlenül Zigbee-n " +
                "beszélnek vele, így nincs gyártói felhő az útvonalban: az " +
                "automatizmusok internetkimaradás alatt is működnek — pont akkor, " +
                "amikor a leginkább szeretnéd.",
            },
          },
          {
            title: { en: "The link across the valley", hu: "A link a völgy fölött" },
            body: {
              en:
                "Fibre between the guesthouse and the wine cellar would have " +
                "meant a trench and a quote nobody was going to accept. Instead: " +
                "a point-to-point wireless bridge out of consumer hardware — " +
                "alignment, channel planning, PoE runs on both ends. The Shelly " +
                "devices in the cellar are on the far side of it and reachable " +
                "over the tailnet, which means the link is load-bearing rather " +
                "than a convenience.",
              hu:
                "A panzió és a borospince közti optika árokásást jelentett volna, " +
                "meg egy ajánlatot, amit senki nem fogadott volna el. Helyette: " +
                "pont-pont vezeték nélküli híd hétköznapi eszközökből — beállás, " +
                "csatornatervezés, PoE mindkét végén. A pincében lévő Shelly " +
                "eszközök ennek a túloldalán vannak, tailneten elérve, tehát a " +
                "link teherhordó, nem kényelmi funkció.",
            },
          },
          {
            title: { en: "Backups that were actually restored",
                     hu: "Mentések, amiket tényleg visszaállítottunk" },
            body: {
              en:
                "TrueNAS holds the backups under a scheme I wrote rather than " +
                "inherited: scheduled ZFS snapshots, off-box copies, and " +
                "periodic restore tests. The tests are the point. An untested " +
                "backup is a rumour, and the only way to find out that a " +
                "retention policy quietly stopped working is to pull something " +
                "back out of it on a day when nothing is on fire.",
              hu:
                "A mentéseket a TrueNAS tartja, egy saját, nem örökölt séma " +
                "szerint: ütemezett ZFS pillanatképek, gépen kívüli másolatok, és " +
                "rendszeres visszaállítási próbák. A próba a lényeg. A tesztelet" +
                "len mentés pletyka, és arra, hogy egy megőrzési szabály csendben " +
                "leállt, csak úgy derül fény, ha kihúzol belőle valamit egy olyan " +
                "napon, amikor épp nem ég semmi.",
            },
          },
        ],
        gallery: [],
        facts: [
          { k: { en: "Sites", hu: "Telephely" }, v: { en: "Guesthouse and wine cellar",
                                                      hu: "Panzió és borospince" } },
          { k: { en: "Access", hu: "Elérés" },   v: { en: "Tailnet only", hu: "Csak tailneten" } },
          { k: { en: "Repo",  hu: "Repó" },      v: { en: "Not public", hu: "Nem publikus" } },
        ],
      },
    },

    /* ------------------------------------------------ 6. Homelab Platform */
    {
      slug: "homelab",
      real: true,
      title: { en: "Homelab Platform", hu: "Homelab platform" },
      subtitle: {
        en: "Proxmox host, Talos Kubernetes from Terraform",
        hu: "Proxmox gép, Talos Kubernetes Terraformból",
      },
      categories: ["infra"],
      status: { en: "Live", hu: "Élesben" },
      year: { en: "2025 — present", hu: "2025 — jelenleg is" },
      accent: "violet",
      icon: "container",
      cover: null,
      url: "#",
      linkLabel: { en: "Private repo", hu: "Privát repó" },
      repo: "homelab-automation",
      description: {
        en:
          "The Proxmox box everything else here runs on, and the reason I trust " +
          "myself with someone else's infrastructure. A Talos Linux Kubernetes " +
          "cluster is declared in Terraform rather than clicked together, so it " +
          "can be destroyed and rebuilt from an empty hypervisor by a workflow.",
        hu:
          "Az a Proxmox gép, amin itt minden más fut, és az oka annak, hogy " +
          "rábízom magam más infrastruktúrájára. A Talos Linux Kubernetes " +
          "clustert Terraform írja le, nem kattintgatás, így egy workflow üres " +
          "hypervisorról újra fel tudja építeni.",
      },
      highlights: [
        { en: "Talos control plane and worker VMs declared in Terraform (bpg/proxmox + siderolabs/talos)",
          hu: "Talos control plane és worker VM-ek Terraformban (bpg/proxmox + siderolabs/talos)" },
        { en: "GitHub Actions on a self-hosted runner does terraform apply — provisioning is a pipeline",
          hu: "GitHub Actions saját runneren futtat terraform apply-t — a kiépítés pipeline, nem délután" },
        { en: "Immutable, API-only nodes: no SSH into a Talos machine, config is data",
          hu: "Változtathatatlan, csak API-s node-ok: Talos gépre nincs SSH, a konfig adat" },
        { en: "ArgoCD for in-cluster GitOps; Prometheus, Grafana, Loki and Alloy for metrics and logs",
          hu: "ArgoCD a clusteren belüli GitOpsra; Prometheus, Grafana, Loki és Alloy a metrikákhoz és logokhoz" },
        { en: "Tailscale for access — services are tailnet-only, with `tailscale serve` terminating HTTPS",
          hu: "Tailscale a hozzáféréshez — a szolgáltatások csak tailneten, `tailscale serve` zárja a HTTPS-t" },
      ],
      stack: ["Proxmox VE", "Talos Linux", "Kubernetes", "Terraform", "ArgoCD",
              "GitHub Actions", "Docker Compose", "Prometheus", "Grafana", "Loki", "Tailscale"],
      metrics: [
        { k: { en: "Provisioning", hu: "Kiépítés" },   v: { en: "IaC", hu: "IaC" } },
        { k: { en: "Node access",  hu: "Node elérés" }, v: { en: "no SSH", hu: "nincs SSH" } },
        { k: { en: "Rebuild",      hu: "Újraépítés" },  v: { en: "1 workflow", hu: "1 workflow" } },
      ],

      detail: {
        intro: {
          en:
            "This is the machine the rest of the portfolio runs on, and the " +
            "reason the rest of the portfolio exists: somewhere to break things " +
            "that belong to me. The rule I set was that nothing here may be " +
            "configured by hand in a way that only survives in my memory — if a " +
            "rebuild from an empty hypervisor does not reproduce it, it is not " +
            "really documented.",
          hu:
            "Ez az a gép, amin a portfólió többi része fut, és egyben az oka " +
            "annak, hogy a többi rész létezik: kell egy hely, ahol a sajátomat " +
            "törhetem el. A szabály, amit magamnak szabtam: itt semmit nem lehet " +
            "úgy kézzel beállítani, hogy csak az emlékezetemben maradjon meg — " +
            "ha egy üres hypervisorról indított újraépítés nem hozza vissza, " +
            "akkor nincs is dokumentálva.",
        },
        sections: [
          {
            title: { en: "A cluster you can throw away", hu: "Egy eldobható cluster" },
            body: {
              en:
                "The Talos control plane and worker VMs are declared with the " +
                "bpg/proxmox and siderolabs/talos providers, and a GitHub " +
                "Actions workflow on a self-hosted runner applies it. That makes " +
                "provisioning a pipeline rather than an afternoon, and it makes " +
                "the rebuild an ordinary operation instead of a last resort — " +
                "which is the only honest way to find out whether my notes were " +
                "complete.",
              hu:
                "A Talos control plane és worker VM-ek a bpg/proxmox és " +
                "siderolabs/talos providerekkel vannak leírva, és egy saját " +
                "runneren futó GitHub Actions workflow alkalmazza őket. Ettől a " +
                "kiépítés pipeline lesz, nem egy délután, az újraépítés pedig " +
                "hétköznapi művelet, nem végső menedék — és csak így derül ki " +
                "őszintén, hogy teljesek voltak-e a jegyzeteim.",
            },
          },
          {
            title: { en: "Nodes with no door", hu: "Node-ok ajtó nélkül" },
            body: {
              en:
                "Talos has no shell and no SSH: a node is configured through an " +
                "API with a config file, and that file is data in a repository. " +
                "It removes the single most common source of drift — the " +
                "one-off fix somebody made at the console and never wrote down. " +
                "ArgoCD then runs GitOps inside the cluster, so what is deployed " +
                "matches what is committed.",
              hu:
                "A Talosban nincs shell és nincs SSH: a node-ot API-n keresztül, " +
                "egy konfigfájllal állítod be, az a fájl pedig adat egy repóban. " +
                "Ezzel megszűnik a drift leggyakoribb forrása — az az egyszeri " +
                "javítás, amit valaki a konzolon csinált, és sosem írt le. A " +
                "clusteren belül aztán az ArgoCD futtatja a GitOpsot, így ami " +
                "telepítve van, megegyezik azzal, ami be van commitolva.",
            },
          },
          {
            title: { en: "Seeing what it does", hu: "Látni, mit csinál" },
            body: {
              en:
                "Prometheus, Grafana, Loki and Alloy cover both the cluster and " +
                "the Docker fleet next to it, so the winery app and the " +
                "Kubernetes workloads land in the same dashboards. Access is " +
                "Tailscale: services are tailnet-only by default, with " +
                "`tailscale serve` terminating HTTPS in front of each one, so " +
                "nothing is published to the internet merely because it was " +
                "convenient during setup.",
              hu:
                "A Prometheus, Grafana, Loki és Alloy a clustert és a mellette " +
                "futó Docker-flottát is lefedi, így a pincészeti app és a " +
                "Kubernetes workloadok ugyanazokra a dashboardokra érkeznek. A " +
                "hozzáférés Tailscale: a szolgáltatások alapból csak tailneten " +
                "élnek, `tailscale serve` zárja előttük a HTTPS-t, tehát semmi nem " +
                "kerül ki az internetre pusztán azért, mert a telepítés közben " +
                "úgy volt kényelmes.",
            },
          },
        ],
        gallery: [],
        facts: [
          { k: { en: "Hypervisor", hu: "Hypervisor" }, v: "Proxmox VE" },
          { k: { en: "Cluster OS", hu: "Cluster OS" }, v: { en: "Talos Linux (immutable)",
                                                            hu: "Talos Linux (immutable)" } },
          { k: { en: "Repo", hu: "Repó" }, v: { en: "Private", hu: "Privát" } },
        ],
      },
    },
  ],

  /* -------------------------------------------------------------- skills */
  skills: [
    { name: { en: "Containers & Orchestration", hu: "Konténerek és orkesztráció" },
      level: 88, icon: "container",
      items: ["Docker", "Docker Compose", "Kubernetes", "Image hardening"] },
    { name: { en: "CI/CD", hu: "CI/CD" },
      level: 84, icon: "workflow",
      items: ["GitHub Actions", { en: "Self-hosted runners", hu: "Saját runnerek" },
              { en: "Build caching", hu: "Build cache" }, { en: "Rollbacks", hu: "Visszaállítás" }] },
    { name: { en: "Observability", hu: "Monitorozás" },
      level: 82, icon: "activity",
      items: ["Prometheus", "Grafana", "Loki", "Sentry", "OpenTelemetry"] },
    { name: { en: "Infrastructure", hu: "Infrastruktúra" },
      level: 80, icon: "server",
      items: ["Proxmox", "Terraform", "nginx", "Tailscale", "Linux"] },
    { name: { en: "Backend", hu: "Backend" },
      level: 76, icon: "database",
      items: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic",
              { en: "REST design", hu: "REST tervezés" }] },
    { name: { en: "Frontend & AI", hu: "Frontend és AI" },
      level: 70, icon: "brain-circuit",
      items: ["Next.js", "React", "Astro", "pgvector",
              { en: "Prompt engineering", hu: "Prompt engineering" }] },
  ],

  /* ------------------------------------------------------------ timeline */
  timeline: [
    {
      period: { en: "2026 — present", hu: "2026 — jelenleg is" },
      title: { en: "Ötösleszek AI — launch and scale",
               hu: "Ötösleszek AI — indulás és skálázás" },
      org: { en: "Side project", hu: "Saját projekt" },
      real: true,
      text: {
        en:
          "app.otosleszek.hu went live on 14 March 2026. Tuning the RAG " +
          "pipeline, building the gamification layer, wiring Stripe " +
          "subscriptions, and standing up the full observability stack — " +
          "Langfuse tracing, Sentry, Prometheus and Grafana.",
        hu:
          "Az app.otosleszek.hu 2026. március 14-én ment élesbe. A RAG pipeline " +
          "hangolása, a gamifikációs réteg megépítése, a Stripe előfizetések " +
          "bekötése, és a teljes monitorozó stack felállítása — Langfuse " +
          "tracing, Sentry, Prometheus és Grafana.",
      },
      tags: ["Next.js", "FastAPI", "pgvector", "Stripe"],
    },
    {
      period: "2026",
      title: { en: "Hajnalhozó Webshop — a storefront on my own backend",
               hu: "Hajnalhozó Webshop — saját backendre épült bolt" },
      org: { en: "Hajnalhozó Pince", hu: "Hajnalhozó Pince" },
      real: true,
      text: {
        en:
          "An invitation-only shop for a cellar that makes about ten thousand " +
          "bottles a year: tasting bookings synced both ways with Google " +
          "Calendar, gift vouchers rendered to PDF, GLS parcels — and the GDPR " +
          "paperwork written alongside the code rather than after it.",
        hu:
          "Meghívásos bolt egy évi tízezer palackot termelő pincének: " +
          "kóstolófoglalás kétirányú Google Calendar szinkronnal, PDF-be " +
          "rajzolt ajándékutalványok, GLS csomagok — és a GDPR-papírmunka a " +
          "kóddal együtt megírva, nem utána.",
      },
      tags: ["FastAPI", "React 19", "PostgreSQL", "OpenTelemetry"],
    },
    {
      period: { en: "2025 — 2026", hu: "2025 — 2026" },
      title: { en: "Hajnalhozó App — the winery's own system",
               hu: "Hajnalhozó App — a pincészet saját rendszere" },
      org: { en: "Hajnalhozó Pince", hu: "Hajnalhozó Pince" },
      real: true,
      text: {
        en:
          "Sales, parcels, spray logs, harvest, tanks, fermentation, lab results " +
          "and NÉBIH lots in one self-hosted application. 32 migrations and 21 " +
          "API routers later, the spreadsheets and the paper spray diary are gone.",
        hu:
          "Értékesítés, dűlők, permetezési napló, szüret, tartályok, erjedés, " +
          "laboreredmények és NÉBIH tételek egyetlen, saját üzemeltetésű " +
          "alkalmazásban. 32 migráció és 21 API router után az Excelek és a " +
          "papír permetezési napló megszűntek.",
      },
      tags: ["FastAPI", "React", "Leaflet", "PostgreSQL"],
    },
    {
      period: "2026",
      title: { en: "Helén Panzió — reaching past one language",
               hu: "Helén Panzió — túl az egy nyelven" },
      org: { en: "Helén Panzió, Hercegkút", hu: "Helén Panzió, Hercegkút" },
      real: true,
      text: {
        en:
          "A static Astro 6 site in three languages with themed package pages " +
          "and a content-collection blog. Static output meant the whole thing " +
          "could be handed over as a container with nothing to maintain.",
        hu:
          "Statikus Astro 6 oldal három nyelven, tematikus csomagoldalakkal és " +
          "content collection alapú bloggal. A statikus kimenet miatt az egészet " +
          "konténerként lehetett átadni, karbantartanivaló nélkül.",
      },
      tags: ["Astro", "i18n", "nginx"],
    },
    {
      period: { en: "2025 — present", hu: "2025 — jelenleg is" },
      title: { en: "Homelab as a proving ground", hu: "A homelab mint gyakorlótér" },
      org: { en: "Self-hosted", hu: "Saját üzemeltetés" },
      real: true,
      text: {
        en:
          "A Proxmox host, a Talos Kubernetes cluster provisioned from Terraform " +
          "by a GitHub Actions workflow, Home Assistant driving a Zigbee mesh, " +
          "and a wireless bridge between two buildings. Breaking my own " +
          "infrastructure is cheaper than breaking someone else's — and every " +
          "habit worth having came from a rebuild that did not go smoothly.",
        hu:
          "Egy Proxmox gép, egy Terraformból, GitHub Actions workflow-val " +
          "kiépített Talos Kubernetes cluster, Home Assistant egy Zigbee mesh " +
          "élén, és egy vezeték nélküli híd két épület között. A saját " +
          "infrastruktúrámat olcsóbb eltörni, mint a máséit — és minden " +
          "használható szokásom egy olyan újraépítésből jött, ami nem ment simán.",
      },
      tags: ["Proxmox", "Talos", "Terraform", "Home Assistant", "Tailscale"],
    },
  ],
};
