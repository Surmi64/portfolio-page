/* =========================================================================
   data.js — all portfolio content in one place.
   This is the only file to edit when a project, skill or timeline entry
   changes. Entries marked `real: true` are backed by actual repositories;
   `real: false` ones are placeholders waiting for real content.
   ========================================================================= */

window.PORTFOLIO = {

  /* ---------------------------------------------------------------- meta */
  person: {
    name: "Imre Stumpf",
    first: "Imre",
    domain: "istumpf.dev",
    role: "DevOps Engineer",
    tagline: "I build things people actually use",
    lead:
      "DevOps is the day job: containers, pipelines, observability, and the " +
      "unglamorous work of keeping things running. Side projects are how I " +
      "stay a builder — I pick problems someone actually has, ship the whole " +
      "thing end to end, and learn the parts I'd never touch from an ops seat.",
    location: "Hungary",
    email: "surmi64@gmail.com",
    availability: "Open to interesting projects",
    socials: [
      { icon: "github",   label: "GitHub",   href: "https://github.com/" },
      { icon: "linkedin", label: "LinkedIn", href: "#" },
      { icon: "mail",     label: "Email",    href: "mailto:surmi64@gmail.com" },
    ],
    stats: [
      { auto: "live",              label: "Projects running live" },
      { value: 82810,  suffix: "",   label: "RAG chunks indexed" },
      { value: 3,      suffix: "",   label: "Languages shipped" },
      { value: 9,      suffix: "",   label: "Subjects in the AI tutor" },
    ],
  },

  /* --------------------------------------------------------------- about */
  /* Three short blocks under the section lead — the "why" behind the work. */
  principles: [
    {
      icon: "wrench",
      title: "Useful beats clever",
      text:
        "Every side project here exists because a real person needed it — a " +
        "student stuck on homework, a guesthouse with no English-language " +
        "presence, a shop with nowhere to sell. That constraint kills most " +
        "bad ideas before I write any code.",
    },
    {
      icon: "graduation-cap",
      title: "Shipping is how I learn",
      text:
        "Reading about pgvector teaches me the API. Running it in production " +
        "with 82,810 chunks and users who notice a bad answer teaches me the " +
        "trade-offs. I pick stacks I don't know yet on purpose.",
    },
    {
      icon: "activity",
      title: "Ops habits, everywhere",
      text:
        "Even a small side project gets migrations, health checks, structured " +
        "logs and a rollback path. It costs an afternoon and saves the weekend " +
        "I'd otherwise spend debugging in the dark.",
    },
  ],

  /* ------------------------------------------------------------ projects */
  filters: ["All", "AI", "Web App", "E-commerce", "Marketing", "Infra", "IoT"],

  projects: [
    {
      real: true,
      title: "Ötösleszek AI",
      subtitle: "AI tutor for Hungarian students, grades 5–12",
      categories: ["AI", "Web App"],
      status: "Live",
      year: "2026",
      accent: "cyan",
      icon: "graduation-cap",
      url: "https://app.otosleszek.hu",
      repo: "otosleszek-full-stack",
      description:
        "A RAG-grounded AI tutor that answers from official Hungarian school " +
        "textbooks rather than from the model's memory. pgvector search over " +
        "82,810+ indexed chunks, grade-aware filtering, image and voice input, " +
        "KaTeX maths rendering.",
      highlights: [
        "9 subjects with a grade-aware retrieval fallback chain",
        "Gamification: XP, streaks, achievements, leaderboards",
        "Stripe embedded checkout, Billingo invoicing, family plans",
        "Hallucination detection with graded confidence disclaimers",
        "PIN-protected parent dashboard, aggregate stats only",
      ],
      stack: ["Next.js 16", "React 19", "TypeScript", "FastAPI", "PostgreSQL + pgvector",
              "OpenAI GPT-5", "Stripe", "Langfuse", "Docker", "Grafana"],
      metrics: [
        { k: "RAG chunks", v: "82,810+" },
        { k: "Subjects",   v: "9" },
        { k: "Grades",     v: "5–12" },
      ],
    },
    {
      real: true,
      title: "Hajnalhozó Shop",
      subtitle: "Multilingual storefront on a custom backend",
      categories: ["E-commerce", "Web App"],
      status: "Live",
      year: "2026",
      accent: "violet",
      icon: "shopping-bag",
      url: "https://shop.hajnalhozo.hu",
      repo: "hajnalhozo_shop",
      description:
        "A shop built from scratch instead of bolted onto a platform. FastAPI " +
        "backend with dedicated translation tables for categories and products, " +
        "JWT auth in HttpOnly cookies, full order lifecycle with email " +
        "notifications and self-hosted image uploads.",
      highlights: [
        "Translation tables on categories and products — multilingual by design",
        "JWT auth with bcrypt hashing and first-run admin bootstrap",
        "Order lifecycle with status tracking and SMTP notifications",
        "Security-header middleware and per-endpoint rate limiting",
        "Alembic migrations, Docker Compose, PostgreSQL 18",
      ],
      stack: ["FastAPI", "SQLAlchemy 2.0", "Alembic", "PostgreSQL 18", "PyJWT",
              "Pydantic v2", "slowapi", "Docker"],
      metrics: [
        { k: "Languages",  v: "multi" },
        { k: "API routers", v: "4" },
        { k: "DB tables",  v: "8" },
      ],
    },
    {
      real: true,
      title: "Helén Panzió",
      subtitle: "Trilingual site for a family guesthouse",
      categories: ["Marketing", "Web App"],
      status: "Live",
      year: "2026",
      accent: "blue",
      icon: "hotel",
      url: "https://helenpanzio.hu",
      repo: "helenpanzio_newage_marketing",
      description:
        "A small guesthouse in Hercegkút had no reach beyond Hungarian. This " +
        "is a fully static, fast brochure site in Hungarian, English and " +
        "Polish — Astro 6, prerendered, served by nginx behind Docker.",
      highlights: [
        "3 languages (HU / EN / PL) at full content parity",
        "Themed package pages: wellness, wine cellar, team building, whole house",
        "Content-collection blog in all three languages",
        "Zero JavaScript by default — static build, nginx delivery",
        "A `check:facts` script guards claims that have drifted before",
      ],
      stack: ["Astro 6", "TypeScript", "Content Collections", "nginx", "Docker", "QRCode"],
      metrics: [
        { k: "Languages", v: "3" },
        { k: "Pages",     v: "7+" },
        { k: "JS bundle", v: "~0 kB" },
      ],
    },
    {
      real: true,
      title: "Homelab Platform",
      subtitle: "Proxmox host, Talos Kubernetes from Terraform",
      categories: ["Infra"],
      status: "Live",
      year: "2025 — present",
      accent: "violet",
      icon: "container",
      url: "#",
      linkLabel: "Private repo",
      repo: "homelab-automation",
      description:
        "The Proxmox box everything else here runs on, and the reason I trust " +
        "myself with someone else's infrastructure. A Talos Linux Kubernetes " +
        "cluster is declared in Terraform rather than clicked together, so it " +
        "can be destroyed and rebuilt from an empty hypervisor by a workflow — " +
        "which is the only way I ever find out whether my notes were complete.",
      highlights: [
        "Talos control plane and worker VMs declared in Terraform " +
          "(bpg/proxmox + siderolabs/talos providers)",
        "GitHub Actions workflow on a self-hosted runner does terraform apply — " +
          "cluster provisioning is a pipeline, not an afternoon",
        "Immutable, API-only nodes: no SSH into a Talos machine, config is data",
        "ArgoCD for in-cluster GitOps; Prometheus, Grafana, Loki and Alloy " +
          "for metrics and logs across both the cluster and the Docker fleet",
        "Tailscale for access — services are tailnet-only by default, with " +
          "`tailscale serve` terminating HTTPS in front of each one",
      ],
      stack: ["Proxmox VE", "Talos Linux", "Kubernetes", "Terraform", "ArgoCD",
              "GitHub Actions", "Docker Compose", "Prometheus", "Grafana", "Loki", "Tailscale"],
      metrics: [
        { k: "Provisioning", v: "IaC" },
        { k: "Node access",  v: "no SSH" },
        { k: "Rebuild",      v: "1 workflow" },
      ],
    },
    {
      real: true,
      title: "Home & Site Automation",
      subtitle: "Zigbee, Home Assistant, and a link between two buildings",
      categories: ["Infra", "IoT"],
      status: "Live",
      year: "2025 — present",
      accent: "blue",
      icon: "radio-tower",
      url: "#",
      linkLabel: "Not on GitHub",
      repo: null,
      description:
        "The half of infrastructure that has weather. Home Assistant runs as " +
        "its own VM with a Zigbee coordinator passed through on USB, and the " +
        "guesthouse and its wine cellar are joined by a wireless link I built " +
        "out of consumer hardware — because the trench quote for fibre between " +
        "two buildings was not a serious proposal.",
      highlights: [
        "Home Assistant on a dedicated Proxmox VM, Zigbee coordinator " +
          "(CP210x) passed through as a USB device rather than networked",
        "Zigbee mesh for sensors and switches — local control, no vendor cloud " +
          "in the path, so automations survive an internet outage",
        "Point-to-point wireless bridge between guesthouse and wine cellar, " +
          "built with consumer gear: alignment, channel planning, PoE runs — " +
          "and Shelly devices on the far side, reachable over the tailnet",
        "TrueNAS with a backup scheme I wrote myself: scheduled snapshots, " +
          "off-box copies, and periodic restore tests — an untested backup is " +
          "a rumour",
      ],
      stack: ["Home Assistant", "Zigbee", "Shelly", "TrueNAS", "ZFS snapshots",
              "Tailscale", "PoE"],
      metrics: [
        { k: "Cloud dependency", v: "none" },
        { k: "Buildings linked", v: "2" },
        { k: "Restores tested",  v: "yes" },
      ],
    },
    {
      real: true,
      title: "This portfolio",
      subtitle: "Zero-dependency single page, self-hosted",
      categories: ["Web App", "Infra"],
      status: "Live",
      year: "2026",
      accent: "cyan",
      icon: "layout-dashboard",
      url: "https://istumpf.dev",
      repo: "portfolio_page",
      description:
        "Hand-written HTML, CSS and JavaScript with no build step and no " +
        "external network requests — the icon set is inlined rather than pulled " +
        "from a CDN. Runs from a file:// path or from nginx in a container.",
      highlights: [
        "24 hand-drawn inline SVG icons instead of a CDN icon library",
        "Canvas constellation with depth: scroll drives parallax and trails",
        "Scroll-reveal, 3D tilt cards and a category filter, no framework",
        "Full prefers-reduced-motion path; WCAG AA contrast throughout",
        "Dockerised, deployed behind Tailscale on a Proxmox host",
      ],
      stack: ["HTML", "CSS", "Vanilla JS", "Canvas 2D", "nginx", "Docker", "Tailscale"],
      metrics: [
        { k: "Dependencies", v: "0" },
        { k: "Build step",   v: "none" },
        { k: "JS shipped",   v: "~34 kB" },
      ],
    },
    {
      real: false,
      title: "Hajnalhozó App",
      subtitle: "Companion app for the shop",
      categories: ["Web App", "AI"],
      status: "In progress",
      year: "2026",
      accent: "amber",
      icon: "smartphone",
      url: "#",
      repo: null,
      description:
        "PLACEHOLDER — a mobile-first companion to the shop: order tracking, " +
        "a loyalty programme and personalised recommendations. Replace this " +
        "entry in data.js once the repository exists.",
      highlights: [
        "Push notifications on order status",
        "Loyalty points and coupons",
        "Offline-first PWA caching",
      ],
      stack: ["React", "PWA", "FastAPI", "Web Push"],
      metrics: [
        { k: "Status", v: "WIP" },
      ],
    },
  ],

  /* -------------------------------------------------------------- skills */
  skills: [
    { name: "Containers & Orchestration", level: 88, icon: "container",
      items: ["Docker", "Docker Compose", "Image hardening", "Registries"] },
    { name: "CI/CD",                      level: 84, icon: "workflow",
      items: ["GitHub Actions", "Self-hosted runners", "Build caching", "Rollbacks"] },
    { name: "Observability",              level: 82, icon: "activity",
      items: ["Prometheus", "Grafana", "Loki", "Sentry", "Alerting"] },
    { name: "Infrastructure",             level: 80, icon: "server",
      items: ["Proxmox", "nginx", "Let's Encrypt", "Tailscale", "Linux"] },
    { name: "Backend",                    level: 76, icon: "database",
      items: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "REST design"] },
    { name: "Frontend & AI",              level: 70, icon: "brain-circuit",
      items: ["Next.js", "Astro", "pgvector", "Prompt engineering", "Evals"] },
  ],

  /* ------------------------------------------------------------ timeline */
  timeline: [
    {
      period: "2026 — present",
      title: "Ötösleszek AI — launch and scale",
      org: "Side project",
      real: true,
      text:
        "app.otosleszek.hu went live on 14 March 2026. Tuning the RAG " +
        "pipeline, building the gamification layer, wiring Stripe " +
        "subscriptions, and standing up the full observability stack — " +
        "Langfuse tracing, Sentry, Prometheus and Grafana.",
      tags: ["Next.js", "FastAPI", "pgvector", "Stripe"],
    },
    {
      period: "2026",
      title: "Hajnalhozó Shop — greenfield e-commerce",
      org: "Side project",
      real: true,
      text:
        "A multilingual shop backend from nothing: translation tables, JWT " +
        "auth, the order lifecycle, Alembic migrations and a dockerised " +
        "PostgreSQL 18. First time I owned the data model end to end.",
      tags: ["FastAPI", "PostgreSQL", "Docker"],
    },
    {
      period: "2026",
      title: "Helén Panzió — reaching past one language",
      org: "Helén Panzió, Hercegkút",
      real: true,
      text:
        "A static Astro 6 site in three languages with themed package pages " +
        "and a content-collection blog. Static output meant the whole thing " +
        "could be handed over as a container with nothing to maintain.",
      tags: ["Astro", "i18n", "nginx"],
    },
    {
      period: "2025 — present",
      title: "Homelab as a proving ground",
      org: "Self-hosted",
      real: true,
      text:
        "A Proxmox host, a Talos Kubernetes cluster provisioned from Terraform " +
        "by a GitHub Actions workflow, Home Assistant driving a Zigbee mesh, " +
        "and a wireless bridge between two buildings. Breaking my own " +
        "infrastructure is cheaper than breaking someone else's — and every " +
        "habit worth having came from a rebuild that did not go smoothly.",
      tags: ["Proxmox", "Talos", "Terraform", "Home Assistant", "Tailscale"],
    },
  ],
};
