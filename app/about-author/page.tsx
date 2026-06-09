import type { Metadata } from "next";

const SITE_URL = "https://www.mepcoonlinebill.net";

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Author | MEPCO Online Bill Check",
  description:
    "Muhammad Abu Bakar — Founder & Editor of mepcoonlinebill.net. Independent MEPCO consumer guidance portal for South Punjab electricity users.",
  alternates: {
    canonical: `${SITE_URL}/about-author`,
  },
  openGraph: {
    title: "About Author | MEPCO Online Bill Check",
    description:
      "Muhammad Abu Bakar — Founder & Editor of mepcoonlinebill.net. Independent MEPCO consumer guidance portal for South Punjab electricity users.",
    url: `${SITE_URL}/about-author`,
    siteName: "MEPCO Online Bill Check",
    locale: "en_PK",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Author | MEPCO Online Bill Check",
    description:
      "Muhammad Abu Bakar — Founder & Editor of mepcoonlinebill.net. Independent MEPCO consumer guidance portal for South Punjab electricity users.",
  },
};

// ── Static Data ───────────────────────────────────────────
const AUTHOR_FACTS = [
  { label: "Author", value: "Muhammad Abu Bakar" },
  { label: "Role", value: "Founder & Editor" },
  { label: "Location", value: "Multan, South Punjab, Pakistan" },
  { label: "Website", value: "mepcoonlinebill.net" },
  { label: "Coverage Area", value: "13+ Districts — South Punjab" },
  { label: "Languages", value: "English, Urdu, Roman Urdu" },
];

const EXPERTISE_TOPICS = [
  "MEPCO Bill Check & Duplicate Bill Download",
  "Electricity Tariff Slabs & Unit Calculation",
  "Fuel Price Adjustment (FPA) & QTA Explained",
  "Protected Consumer Rules & 200 Units Guide",
  "MEPCO Consumer Services & Complaint Procedures",
  "Solar Net Metering & ROI Calculation",
  "MEPCO Reference Number & Customer ID Guide",
  "NEPRA Consumer Rights & Billing Rules",
  "Peak Hours & Energy Saving Tips",
  "New Connection, Load Extension & Name Change",
];

const MEPCO_DISTRICTS = [
  "Multan",
  "Bahawalpur",
  "Rahim Yar Khan",
  "Sahiwal",
  "Khanewal",
  "Vehari",
  "Lodhran",
  "Muzaffargarh",
  "Layyah",
  "DG Khan",
  "Rajanpur",
  "Pakpattan",
  "Bahawalnagar",
];

const EDITORIAL_POINTS = [
  "Independent consumer information portal — not affiliated with MEPCO or PITC",
  "Content available in English, Urdu, and Roman Urdu",
  "Simple and practical bill-related explanations",
  "Helpful calculators — bill estimator, solar ROI, AC cost",
  "80+ step-by-step consumer guides and tools",
  "Solar and net metering savings guides",
  "Clear disclaimer on all calculation pages",
];

const GUIDES_HIGHLIGHT = [
  {
    icon: "📄",
    label: "Duplicate Bill Guide",
    href: "/mepco-duplicate-bill-guide",
  },
  {
    icon: "🧮",
    label: "Bill Calculator",
    href: "/",
  },
  {
    icon: "🔢",
    label: "Reference Number Guide",
    href: "/mepco-reference-number-guide",
  },
  {
    icon: "🛡️",
    label: "Protected Consumer Guide",
    href: "/mepco-protected-consumer-guide",
  },
  {
    icon: "🧾",
    label: "FPA Charges Guide",
    href: "/mepco-fpa-charges-guide",
  },
  {
    icon: "☀️",
    label: "Solar ROI Calculator",
    href: "/mepco-solar-roi-calculator",
  },
];

const RELATED_LINKS = [
  { href: "/", label: "Back to Homepage", primary: true },
  { href: "/disclaimer", label: "Read Disclaimer", primary: false },
  { href: "/contact-us", label: "Contact Us", primary: false },
  { href: "/privacy-policy", label: "Privacy Policy", primary: false },
];

const FAQ_ITEMS = [
  {
    lang: "en",
    dir: "ltr",
    q: "Who is the author of MEPCO Online Bill Check?",
    a: "The author is Muhammad Abu Bakar, Founder & Editor of mepcoonlinebill.net, based in Multan, South Punjab, Pakistan. He created this independent consumer information portal to help MEPCO electricity users across 13+ districts of South Punjab.",
  },
  {
    lang: "en",
    dir: "ltr",
    q: "Is mepcoonlinebill.net officially affiliated with MEPCO?",
    a: "No. This website is not affiliated with MEPCO, PITC, NEPRA, WAPDA, or any government department. It is an independent information and guidance portal only.",
  },
  {
    lang: "en",
    dir: "ltr",
    q: "What topics does this website cover?",
    a: "This website covers MEPCO bill check, duplicate bill download, tariff slabs, FPA charges, QTA, protected consumer rules (200 units), complaint filing, solar net metering ROI, peak hours, and 80+ consumer guides and tools.",
  },
  {
    lang: "en",
    dir: "ltr",
    q: "Are the calculator results on this site accurate?",
    a: "Calculator results are estimates only. Actual bills may vary because tariff slabs, fuel adjustments, taxes, and government rules change periodically. Always verify from your official MEPCO bill.",
  },
  {
    lang: "ur",
    dir: "rtl",
    q: "یہ ویب سائٹ کس نے بنائی ہے؟",
    a: "یہ ویب سائٹ محمد ابو بکر نے بنائی ہے جو ملتان، جنوبی پنجاب سے ہیں اور mepcoonlinebill.net کے بانی اور ایڈیٹر ہیں۔ یہ ایک آزاد معلوماتی ویب سائٹ ہے جو میپکو صارفین کی رہنمائی کے لیے بنائی گئی ہے۔",
  },
  {
    lang: "ur",
    dir: "rtl",
    q: "کیا یہ سائٹ میپکو کی سرکاری ویب سائٹ ہے؟",
    a: "نہیں۔ یہ میپکو، پی آئی ٹی سی، نیپرا، واپڈا یا کسی بھی سرکاری ادارے سے منسلک نہیں ہے۔ یہ صرف ایک آزاد معلوماتی پورٹل ہے۔",
  },
  {
    lang: "ro-ur",
    dir: "ltr",
    q: "Is website ka maqsad kya hai?",
    a: "Is website ka maqsad MEPCO consumers ko bill check, duplicate bill, tariff slabs, FPA charges, 200 units rule, complaints aur solar ROI ke bare mein English, Urdu aur Roman Urdu mein easy information dena hai. 80+ guides aur tools available hain.",
  },
  {
    lang: "ro-ur",
    dir: "ltr",
    q: "MEPCO helpline number kya hai?",
    a: "MEPCO official helpline number 0800-63726 hai. Ye toll-free number hai. Bill, complaint ya connection ke liye is number par call kar sakte hain. Hamare website par bhi 80+ guides available hain.",
  },
];

// ── Schema ────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Author",
      item: `${SITE_URL}/about-author`,
    },
  ],
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Author — MEPCO Online Bill Check",
  description:
    "Muhammad Abu Bakar is the Founder & Editor of mepcoonlinebill.net — an independent consumer information portal for South Punjab MEPCO electricity users.",
  url: `${SITE_URL}/about-author`,
  inLanguage: ["en", "ur"],
  dateModified: "2026-06-01",
  author: {
    "@type": "Person",
    name: "Muhammad Abu Bakar",
    jobTitle: "Founder & Editor",
    knowsAbout: [
      "MEPCO Bill Check",
      "Electricity Tariff Pakistan",
      "NEPRA Consumer Rules",
      "Solar Net Metering Pakistan",
      "FPA Charges",
      "Protected Consumer Rules",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Multan",
      addressRegion: "South Punjab",
      addressCountry: "PK",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "MEPCO Online Bill Check",
    url: SITE_URL,
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About Author | MEPCO Online Bill Check",
  url: `${SITE_URL}/about-author`,
  description:
    "Learn about Muhammad Abu Bakar — Founder & Editor of mepcoonlinebill.net, an independent MEPCO consumer information portal.",
  inLanguage: ["en", "ur"],
  dateModified: "2026-06-01",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Author",
        item: `${SITE_URL}/about-author`,
      },
    ],
  },
};

// ── Page Component ────────────────────────────────────────
export default function AboutAuthorPage() {
  return (
    <>
      {/* ── Schemas ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">

        {/* ── HERO ── */}
        <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 px-5 py-16 text-white">
          <div className="mx-auto max-w-5xl">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-emerald-300">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-semibold">About Author</li>
              </ol>
            </nav>

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-300">
              Consumer Services Hub | صارف سروسز ہب
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              About the Author —{" "}
              <span className="text-emerald-300">Muhammad Abu Bakar</span>
            </h1>

            <p className="mt-2 text-emerald-300 font-semibold text-lg">
              Founder & Editor — MEPCO Online Bill Check
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
              mepcoonlinebill.net is an independent information portal built to
              help South Punjab electricity consumers understand MEPCO bills,
              reference numbers, tariff slabs, solar savings, FPA charges, and
              80+ consumer guides — in English, Urdu, and Roman Urdu.
            </p>

            {/* Stats Row */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: "📚", value: "80+", label: "Guides & Tools" },
                { icon: "🏙️", value: "13+", label: "Districts" },
                { icon: "🕒", value: "24/7", label: "Access" },
                { icon: "📄", value: "Free", label: "Service" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-emerald-800/50 px-5 py-3 text-center border border-emerald-700"
                >
                  <span aria-hidden="true" className="text-xl">
                    {stat.icon}
                  </span>
                  <p className="mt-1 text-lg font-black text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-emerald-300 font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/"
                className="rounded-xl bg-white px-5 py-3 font-bold text-emerald-900 hover:bg-emerald-50 transition-colors"
              >
                <span aria-hidden="true">⚡</span> Check MEPCO Bill
              </a>
              <a
                href="/"
                className="rounded-xl bg-emerald-600 px-5 py-3 font-bold text-white hover:bg-emerald-500 transition-colors"
              >
                <span aria-hidden="true">🧮</span> Bill Calculator
              </a>
              <a
                href="/contact-us"
                className="rounded-xl border border-emerald-400 px-5 py-3 font-bold text-white hover:bg-emerald-800 transition-colors"
              >
                <span aria-hidden="true">✉️</span> Contact
              </a>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <div className="mx-auto max-w-5xl px-5 py-12 space-y-8">

          {/* ── Author Facts Grid ── */}
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-2xl font-black text-slate-900">
              Author Information
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {AUTHOR_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl bg-emerald-50 p-5 border border-emerald-100"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-base font-black text-slate-900">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            {/* English */}
            <p className="mt-8 leading-8 text-slate-700">
              Muhammad Abu Bakar is the Founder & Editor of{" "}
              <strong>mepcoonlinebill.net</strong> — an independent consumer
              information portal based in Multan, South Punjab, Pakistan. The
              website was built with one clear goal: to make MEPCO electricity
              bill information easy to understand for everyday consumers across
              all 13+ districts of South Punjab.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              As a South Punjab resident, Muhammad Abu Bakar personally
              understands the confusion consumers face when reading their MEPCO
              bills — unclear FPA charges, QTA adjustments, tariff slab
              calculations, 200-unit protected consumer rules, and peak hour
              restrictions. This website provides 80+ practical guides and
              tools to solve exactly these problems.
            </p>

            {/* Roman Urdu */}
            <p className="mt-4 leading-8 text-slate-600 italic border-l-4 border-emerald-400 pl-4">
              Muhammad Abu Bakar ne ye website Multan, South Punjab se banai
              hai. Wo mepcoonlinebill.net ke Founder aur Editor hain. Unka
              maqsad hai ke har MEPCO consumer — chahe wo Multan mein ho,
              Bahawalpur mein ho, Rahim Yar Khan mein ho ya DG Khan mein —
              apna bill samajh sake. English, Urdu aur Roman Urdu mein 80+
              guides is liye hain kyunki Pakistan mein log alag alag tareeqon
              se search karte hain.
            </p>

            {/* Urdu */}
            <p
              className="mt-4 leading-9 text-slate-700 bg-emerald-50 rounded-2xl p-4"
              dir="rtl"
              lang="ur"
            >
              محمد ابو بکر mepcoonlinebill.net کے بانی اور ایڈیٹر ہیں۔ انہوں
              نے یہ ویب سائٹ اس لیے بنائی ہے تاکہ جنوبی پنجاب کے تمام میپکو
              صارفین اپنا بجلی کا بل آسانی سے سمجھ سکیں۔ بل چیک، ریفرنس
              نمبر، ٹیرف سلیبز، ایف پی اے چارجز، 200 یونٹ رول، شکایات اور
              سولر نیٹ میٹرنگ — یہ سب 80+ گائیڈز اور ٹولز میں اردو، انگریزی
              اور رومن اردو میں فراہم کی جاتی ہیں۔
            </p>
          </div>

          {/* ── Helpline Box ── */}
          <div className="rounded-3xl border border-emerald-300 bg-emerald-50 p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                  MEPCO Official Helpline
                </p>
                <p className="mt-1 text-3xl font-black text-emerald-900">
                  <span aria-hidden="true">📞</span> 0800-63726
                </p>
                <p className="mt-1 text-sm text-emerald-700">
                  Toll-free · Bill, Complaint & Connection queries
                </p>
              </div>
              <div
                className="text-sm text-emerald-800 leading-6"
                dir="rtl"
                lang="ur"
              >
                <p className="font-bold">میپکو ہیلپ لائن</p>
                <p>بل، شکایت اور کنکشن کے لیے مفت کال کریں</p>
              </div>
            </div>
            {/* ── Helpline Disclaimer ── */}
            <p className="mt-4 text-xs text-emerald-700 border-t border-emerald-200 pt-3">
              Official MEPCO helpline. This number belongs to MEPCO and is
              provided for consumer convenience.
            </p>
          </div>

          {/* ── Expertise Topics ── */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-2xl font-black text-slate-900">
              Topics Covered on This Website
            </h2>
            <p className="mt-3 text-slate-600 leading-7">
              This portal provides 80+ detailed guides and tools on MEPCO and
              electricity consumer topics:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {EXPERTISE_TOPICS.map((topic) => (
                <div
                  key={topic}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100"
                >
                  <span
                    aria-hidden="true"
                    className="text-emerald-600 font-black text-lg"
                  >
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-slate-700">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Popular Guides ── */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-2xl font-black text-slate-900">
              Popular Guides on This Portal
            </h2>
            <p className="mt-3 text-slate-600 leading-7">
              Most accessed consumer guides — updated for 2026 tariff and NEPRA
              rules.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {GUIDES_HIGHLIGHT.map((guide) => (
                <a
                  key={guide.label}
                  href={guide.href}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
                >
                  <span aria-hidden="true" className="text-2xl">
                    {guide.icon}
                  </span>
                  <span className="text-sm font-bold text-slate-700">
                    {guide.label}
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-5">
              <a
                href="/"
                className="text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
              >
                View all 80+ guides & tools →
              </a>
            </div>
          </div>

          {/* ── 13 Districts ── */}
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-10">
            <h2 className="text-2xl font-black text-emerald-900">
              Coverage Area — 13+ MEPCO Districts
            </h2>
            <p className="mt-3 text-emerald-800 leading-7">
              This website serves electricity consumers across all 13+ districts
              under MEPCO — Multan Electric Power Company — in South Punjab,
              Pakistan.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {MEPCO_DISTRICTS.map((district) => (
                <span
                  key={district}
                  className="rounded-full bg-emerald-700 px-4 py-1.5 text-sm font-bold text-white"
                >
                  {district}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-emerald-800 leading-7 italic">
              Multan, Bahawalpur, Rahim Yar Khan, Sahiwal, Khanewal, Vehari,
              Lodhran, Muzaffargarh, Layyah, DG Khan, Rajanpur, Pakpattan aur
              Bahawalnagar ke MEPCO consumers ke liye ye website banai gai hai.
            </p>
          </div>

          {/* ── Editorial Purpose ── */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-2xl font-black text-slate-900">
              Editorial Purpose & Standards
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              All content on mepcoonlinebill.net is created for informational
              and educational purposes. Our goal is to help consumers understand
              their electricity bills, rights, and available options — not to
              replace official MEPCO or NEPRA sources.
            </p>
            <ul className="mt-6 space-y-3">
              {EDITORIAL_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-emerald-600 font-black"
                  >
                    ✅
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Did You Know */}
            <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-200 p-5">
              <p className="text-sm font-bold text-blue-700 uppercase tracking-wide">
                <span aria-hidden="true">💡</span> Did You Know?
              </p>
              <p className="mt-2 text-slate-700 leading-7">
                MEPCO serves consumers across South Punjab — one of the largest
                electricity distribution networks in Pakistan. This portal
                provides 80+ free guides and tools covering everything from
                duplicate bill download to solar ROI calculation — all in one
                place.
              </p>
            </div>
          </div>

          {/* ── Important Disclaimer ── */}
          <div className="rounded-3xl border border-amber-300 bg-amber-50 p-6 md:p-10">
            <h2 className="text-2xl font-black text-amber-900">
              <span aria-hidden="true">⚠️</span> Important Disclaimer
            </h2>
            <p className="mt-4 leading-8 text-amber-900">
              <strong>mepcoonlinebill.net</strong> is NOT affiliated with MEPCO,
              PITC, NEPRA, WAPDA, or any government department of Pakistan.
              Official bill data, tariff decisions, consumer records, connection
              approvals, and all final billing matters are managed by the
              relevant official departments.
            </p>
            <p className="mt-4 leading-8 text-amber-900">
              Users should always verify official matters directly from MEPCO
              offices, the official MEPCO website, PITC bill portal, NEPRA, or
              their printed electricity bill.
            </p>
            <p
              className="mt-5 leading-9 text-amber-900 text-sm"
              dir="rtl"
              lang="ur"
            >
              یہ ویب سائٹ میپکو، پی آئی ٹی سی، نیپرا، واپڈا یا کسی بھی
              سرکاری ادارے سے منسلک نہیں ہے۔ تمام سرکاری معاملات کی تصدیق
              براہ کرم میپکو دفتر یا سرکاری ویب سائٹ سے کریں۔
            </p>
          </div>

          {/* ── Content Review ── */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-2xl font-black text-slate-900">
              Content Accuracy & Review
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              We regularly review our 80+ guides to reflect the latest MEPCO
              tariff slabs, NEPRA decisions, FPA adjustments, and solar net
              metering rates. However, because electricity regulations in
              Pakistan can change frequently, calculator results on this site
              are always estimates only.
            </p>
            <p className="mt-4 leading-8 text-slate-600 italic border-l-4 border-emerald-400 pl-4">
              Hum apni 80+ guides ko latest MEPCO tariff, NEPRA decisions aur
              FPA rates ke sath update karte rehte hain. Magar calculator
              results sirf estimate hain — final bill hamesha official MEPCO
              bill se verify karein.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 font-semibold">
              <span aria-hidden="true">📅</span>
              Last reviewed:{" "}
              <time dateTime="2026-06-01">June 2026</time>
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-2xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-slate-500 text-sm">
              اکثر پوچھے جانے والے سوالات | Aksar poochhe jane wale sawalaat
            </p>
            <div className="mt-6 divide-y divide-slate-100">
              {FAQ_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="py-5"
                  lang={item.lang}
                  dir={item.dir}
                >
                  <h3 className="font-bold text-slate-900 text-base">
                    {item.q}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600 text-sm">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Related Links ── */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-2xl font-black text-slate-900">
              Related Pages
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {RELATED_LINKS.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className={
                    link.primary
                      ? "rounded-xl bg-emerald-700 px-5 py-3 font-bold text-white hover:bg-emerald-800 transition-colors"
                      : "rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Final CTA ── */}
          <div className="rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 p-8 text-white text-center md:p-12">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Consumer Services Hub | صارف سروسز ہب
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Need Help With Your MEPCO Bill?
            </h2>
            <p className="mt-3 text-emerald-100 leading-7">
              Check your bill, download duplicate bill, calculate units, learn
              200-unit rule, FPA charges, or solar ROI — 80+ free guides and
              tools available.
            </p>
            <p
              className="mt-2 text-sm text-emerald-200"
              dir="rtl"
              lang="ur"
            >
              بل چیک کریں، کیلکولیٹر استعمال کریں، یا ہماری 80+ مفت گائیڈز
              پڑھیں۔
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="/"
                className="rounded-xl bg-white px-6 py-3 font-bold text-emerald-900 hover:bg-emerald-50 transition-colors"
              >
                <span aria-hidden="true">⚡</span> Check MEPCO Bill
              </a>
              <a
                href="/"
                className="rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-500 transition-colors"
              >
                <span aria-hidden="true">🧮</span> Bill Calculator
              </a>
              <a
                href="/contact-us"
                className="rounded-xl border border-emerald-400 px-6 py-3 font-bold text-white hover:bg-emerald-700 transition-colors"
              >
                <span aria-hidden="true">✉️</span> Contact Us
              </a>
            </div>
            <p className="mt-6 text-xs text-emerald-400">
              Independent portal · Not affiliated with MEPCO or PITC ·
              Information references official MEPCO and PITC resources where
              applicable.
            </p>
          </div>

        </div>
      </main>
    </>
  );
}