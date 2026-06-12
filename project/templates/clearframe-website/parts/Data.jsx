// Clearframe UI kit — shared content data (packages, care plans, process, faqs).

APP.PACKAGES = [
  { id: "launch", name: "Launch Page", price: "$500", cadence: "from · CAD",
    desc: "A premium one-page site for businesses that need to look professional online — fast.",
    who: "New businesses testing an idea, or anyone who needs a credible page live this week.",
    features: ["One-page website", "Mobile-friendly design", "Contact form + clear CTAs", "Basic SEO + analytics setup", "FAQ section", "1 round of refinements", "Launch support"],
    timeline: "~3 business days", pay: "100% upfront", cta: "Start a Launch Page", featured: false },
  { id: "business", name: "Business Website", price: "$1,500", cadence: "from · CAD",
    desc: "A polished 3–5 page site that builds trust and turns visitors into inquiries.",
    who: "Established service businesses that need a proper website to win more work.",
    features: ["3–5 pages", "Mobile-friendly design", "Testimonials + FAQ sections", "Local SEO setup", "Analytics setup", "2 rounds of refinements"],
    timeline: "~5–7 business days", pay: "50% upfront, 50% before launch", cta: "Start a Business Site", featured: true },
  { id: "growth", name: "Growth Website", price: "$2,800", cadence: "from · CAD",
    desc: "Built to rank, convert, and scale as your business grows.",
    who: "Businesses ready to invest in more pages, stronger SEO, and serious conversion.",
    features: ["5–8 pages", "Stronger conversion structure", "Extra landing / service pages", "Deeper SEO structure", "Stronger trust & proof sections", "More polished, custom design"],
    timeline: "Scoped per project", pay: "50% upfront, 50% before launch", cta: "Plan a Growth Site", featured: false },
];

// Care & maintenance — sold as the paid service (not "hosting" resale).
APP.CARE = [
  { name: "Essential Care", price: "$39", unit: "/mo",
    features: ["Fast, secure hosting handled for you", "Software & security updates", "Weekly backups + uptime monitoring", "Up to 30 min of edits / month"] },
  { name: "Plus Care", price: "$89", unit: "/mo", featured: true,
    features: ["Everything in Essential", "Up to 2 hours of edits / month", "Monthly performance check", "Priority same-day replies", "Quarterly SEO tune-up"] },
  { name: "On-call", price: "$95", unit: "/hr",
    features: ["No monthly commitment", "Edits & fixes as you need them", "Hosting handled separately", "Billed in 15-min increments"] },
];

APP.WHY = [
  ["Zap", "Fast turnaround", "Launch Pages go live in about three business days — not months of back-and-forth."],
  ["Shield", "Built to convert", "Clear calls-to-action and forms that turn visitors into real inquiries."],
  ["Layout", "Looks credible", "Premium, professional design that earns trust on the very first visit."],
  ["Pin", "Local & responsive", "Toronto-based, with real replies within one business day."],
];

APP.STEPS = [
  ["Brief", "A short call to understand your business, goals, and the inquiries you want."],
  ["Design", "We design a clean, on-brand layout and review it with you together."],
  ["Build", "We build it fast — responsive, quick-loading, and search-ready."],
  ["Launch", "We connect your domain, go live, and hand over the keys."],
];

APP.FAQS = [
  ["How fast can my site go live?", "Launch Pages go live in about three business days. Business Websites are typically ready in five to seven business days once we have your content and photos."],
  ["Do I need to write all the content?", "No. We guide you with a simple brief and can polish or write your copy as part of the project, so you are never staring at a blank page."],
  ["Will my site work well on phones?", "Always. Every site is built mobile-first and tested across phones, tablets, and the major browsers before launch."],
  ["Can you help me get found on Google?", "Yes. Every package includes basic SEO and analytics setup. Business and Growth Websites add local SEO and a deeper, search-ready structure."],
  ["How does payment work?", "Launch Pages are 100% upfront. Business and Growth Websites are 50% upfront and 50% before launch. You always get a fixed quote before any work begins."],
  ["What about hosting and upkeep?", "We set you up on fast, secure infrastructure and offer simple monthly Care plans for hosting, updates, and edits — so your site stays current without you lifting a finger."],
];
