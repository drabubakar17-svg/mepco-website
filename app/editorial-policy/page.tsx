import type { Metadata } from "next";

const SITE_URL = "https://www.mepcoonlinebill.net";

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Editorial Policy | MEPCO Online Bill Check",
  description:
    "Read the editorial policy of MEPCO Online Bill Check. Learn how our independent consumer guides, bill calculators, and MEPCO information pages are researched, reviewed, and updated.",
  alternates: {
    canonical: `${SITE_URL}/editorial-policy`,
  },
  openGraph: {
    title: "Editorial Policy | MEPCO Online Bill Check",
    description:
      "Our editorial policy explains how MEPCO Online Bill Check creates independent consumer guides, calculators, and electricity bill information.",
    url: `${SITE_URL}/editorial-policy`,
    siteName: "MEPCO Online Bill Check",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy | MEPCO Online Bill Check",
    description:
      "Read how our independent MEPCO consumer guides and calculators are researched, reviewed, and updated.",
  },
};

// ─────────────────────────────────────────────
// SCHEMA
// ─────────────────────────────────────────────
const policySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Editorial Policy | MEPCO Online Bill Check",
  url: `${SITE_URL}/editorial-policy`,
  description:
    "Editorial policy for MEPCO Online Bill Check — an independent consumer information portal for South Punjab electricity users.",
  inLanguage: ["en", "ur"],
  datePublished: "2026",
  dateModified: "2026",
  publisher: {
    "@type": "Organization",
    name: "MEPCO Online Bill Check",
    url: SITE_URL,
  },
  author: {
    "@type": "Person",
    name: "Muhammad Abu Bakar",
    jobTitle: "Founder & Editor",
    url: `${SITE_URL}/about-author`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Editorial Policy",
      item: `${SITE_URL}/editorial-policy`,
    },
  ],
};

// ─────────────────────────────────────────────
// STATIC DATA
// ─────────────────────────────────────────────
const CONTENT_STANDARDS: {
  title: string;
  detail: string;
}[] = [
  {
    title: "Accuracy First",
    detail:
      "Every guide is cross-checked against official MEPCO, NEPRA, and PITC publicly available information before publication.",
  },
  {
    title: "Consumer Language",
    detail:
      "Complex billing terms — FPA, QTA, tariff slabs, net metering — are explained in plain English, Urdu, and Roman Urdu so every user can understand.",
  },
  {
    title: "No Affiliation Bias",
    detail:
      "We are not affiliated with MEPCO, PITC, NEPRA, or any government body. Our content represents independent consumer perspective only.",
  },
  {
    title: "Estimate Transparency",
    detail:
      "All calculator outputs are clearly marked as estimates. We never present calculated amounts as official billing figures.",
  },
  {
    title: "Trilingual Coverage",
    detail:
      "All major guides are written in English, Urdu, and Roman Urdu to serve the full South Punjab consumer audience.",
  },
  {
    title: "Dated Content",
    detail:
      "Every guide carries a review year so users know how recent the information is and when to expect updates.",
  },
];

const RESEARCH_PROCESS: {
  step: string;
  title: string;
  detail: string;
}[] = [
  {
    step: "01",
    title: "Topic Identification",
    detail:
      "We identify topics based on what South Punjab electricity consumers actively search for — bill checking, tariff confusion, FPA charges, complaint procedures, and solar savings.",
  },
  {
    step: "02",
    title: "Source Verification",
    detail:
      "We reference publicly available NEPRA tariff notifications, MEPCO official announcements, PITC bill portal data, and government policy documents where applicable.",
  },
  {
    step: "03",
    title: "Consumer-First Writing",
    detail:
      "Content is written for ordinary consumers — not industry experts. We avoid technical jargon and translate complex billing concepts into simple, actionable language.",
  },
  {
    step: "04",
    title: "Disclaimer Integration",
    detail:
      "Where content involves tariff rates, taxes, government adjustments, or legal consumer rights — we include clear disclaimers prompting users to verify from official sources.",
  },
  {
    step: "05",
    title: "Multilingual Review",
    detail:
      "Key guides are reviewed in all three languages — English, Urdu, and Roman Urdu — to ensure accuracy and cultural relevance for the South Punjab audience.",
  },
  {
    step: "06",
    title: "Publication & Dating",
    detail:
      "Every published guide includes a review year. Guides are flagged for update when NEPRA tariff revisions, FPA changes, or government policy updates occur.",
  },
];

const CORRECTION_POLICY: string[] = [
  "Factual errors are corrected within 72 hours of being identified or reported",
  "Updated guides carry a revised review date so users know the content is current",
  "Outdated calculator assumptions are updated when official tariff or FPA changes are announced",
  "Users can report errors or outdated information through our contact page",
  "We do not silently edit content — significant corrections are noted within the guide",
];

const INFORMATION_SOURCES: string[] = [
  "NEPRA (National Electric Power Regulatory Authority) — official tariff notifications",
  "MEPCO official announcements and consumer notices",
  "PITC (Pakistan Information Technology Company) — bill portal reference data",
  "Government of Pakistan — electricity policy and subsidy notifications",
  "Publicly available FPA, QTA, and tariff revision documents",
];

const TRUST_LINKS: { href: string; label: string; primary: boolean }[] = [
  { href: "/about-author", label: "About Author", primary: true },
  { href: "/disclaimer", label: "Disclaimer", primary: false },
  { href: "/privacy-policy", label: "Privacy Policy", primary: false },
  { href: "/contact-us", label: "Contact Us", primary: false },
];

const HERO_STATS: { icon: string; value: string; label: string }[] = [
  { icon: "📚", value: "80+", label: "Guides & Tools" },
  { icon: "🌐", value: "3", label: "Languages" },
  { icon: "🏙️", value: "13+", label: "Districts Covered" },
  { icon: "📅", value: "2026", label: "Last Reviewed" },
];

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function EditorialPolicyPage() {
  return (
    <>
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(policySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">

        {/* ════════════════════════════════
            HERO
        ════════════════════════════════ */}
        <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 px-5 py-16 text-white">
          <div className="mx-auto max-w-5xl">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-emerald-300">
                <li>
                  <a
                    href="/"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-white">Editorial Policy</li>
              </ol>
            </nav>

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-300">
              Editorial Standards | ادارتی معیار
            </p>

            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              Editorial Policy
            </h1>

            <p className="mt-2 text-lg font-semibold text-emerald-300">
              How We Research, Write, and Review — mepcoonlinebill.net
            </p>

            {/* English */}
            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
              MEPCO Online Bill Check is committed to providing accurate,
              independent, and consumer-focused electricity bill information for
              South Punjab users. This page explains our research process,
              content standards, update policy, and how we handle corrections.
            </p>

            {/* Urdu */}
            <p
              className="mt-4 max-w-3xl leading-9 text-emerald-100"
              dir="rtl"
              lang="ur"
            >
              یہ صفحہ بتاتا ہے کہ ہم میپکو صارفین کے لیے معلومات کیسے تحقیق
              کرتے، لکھتے اور اپڈیٹ کرتے ہیں۔ ہماری ادارتی پالیسی شفافیت اور
              صارف کی سہولت پر مبنی ہے۔
            </p>

            {/* Roman Urdu */}
            <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-200 italic">
              Ye page batata hai ke hum MEPCO consumers ke liye guides, calculators
              aur bill information kaise research, likhte aur update karte hain.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-4">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-emerald-700 bg-emerald-800/50 px-5 py-3 text-center"
                >
                  <span aria-hidden="true" className="text-xl">
                    {stat.icon}
                  </span>
                  <p className="mt-1 text-lg font-black text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-emerald-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            CONTENT
        ════════════════════════════════ */}
        <div className="mx-auto max-w-5xl space-y-8 px-5 py-12">

          {/* ── 01 Who We Are ── */}
          <section
            id="who-we-are"
            className="scroll-mt-8 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm md:p-10"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Section 01
            </p>
            <h2 className="text-2xl font-black text-slate-900">
              Who We Are
            </h2>

            {/* English */}
            <p className="mt-4 leading-8 text-slate-700">
              MEPCO Online Bill Check is an independent consumer information
              portal founded and edited by{" "}
              <a
                href="/about-author"
                className="font-bold text-emerald-700 underline underline-offset-2 hover:text-emerald-900 transition-colors"
              >
                Muhammad Abu Bakar
              </a>
              , based in Multan, South Punjab, Pakistan. The portal is not a
              news outlet, not a government service, and not affiliated with
              MEPCO, PITC, NEPRA, or WAPDA. It is an independent resource built
              specifically to help South Punjab electricity consumers understand
              their bills, rights, and options.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Our content team focuses on one subject area: MEPCO electricity
              billing, consumer guides, calculators, and related South Punjab
              electricity topics. This focused scope allows us to maintain depth,
              accuracy, and relevance across all 80+ guides and tools published
              on this portal.
            </p>

            {/* Roman Urdu */}
            <p className="mt-4 border-l-4 border-emerald-400 pl-4 italic leading-8 text-slate-600">
              MEPCO Online Bill Check ek independent consumer portal hai jo
              Muhammad Abu Bakar ne Multan, South Punjab se establish kiya hai.
              Ye MEPCO, PITC, NEPRA ya kisi bhi government department se
              affiliated nahi hai. Ye sirf South Punjab consumers ke liye
              electricity bill information ka ek focused resource hai.
            </p>

            {/* Urdu */}
            <p
              className="mt-4 rounded-2xl bg-emerald-50 p-4 leading-9 text-slate-700"
              dir="rtl"
              lang="ur"
            >
              میپکو آن لائن بل چیک ایک آزاد صارف معلوماتی پورٹل ہے جسے محمد
              ابو بکر نے ملتان، جنوبی پنجاب سے قائم کیا ہے۔ یہ میپکو، نیپرا،
              پی آئی ٹی سی یا کسی بھی سرکاری ادارے سے منسلک نہیں ہے۔
            </p>
          </section>

          {/* ── 02 Content Standards ── */}
          <section
            id="standards"
            className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Section 02
            </p>
            <h2 className="text-2xl font-black text-slate-900">
              Our Content Standards
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Every guide, calculator, and article published on
              mepcoonlinebill.net is held to the following editorial standards:
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {CONTENT_STANDARDS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >
                  <p className="font-black text-emerald-700">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 03 Research Process ── */}
          <section
            id="research"
            className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Section 03
            </p>
            <h2 className="text-2xl font-black text-slate-900">
              Our Research & Publishing Process
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              From topic selection to publication — here is how every guide on
              this portal is built:
            </p>
            <div className="mt-6 space-y-4">
              {RESEARCH_PROCESS.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-sm font-black text-white">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-black text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Roman Urdu */}
            <p className="mt-6 border-l-4 border-emerald-400 pl-4 italic leading-8 text-slate-600">
              Har guide topic identification se shuru hoti hai, phir official
              sources se research, consumer-friendly writing, disclaimer
              integration, multilingual review aur finally publication with
              review date.
            </p>
          </section>

          {/* ── 04 Information Sources ── */}
          <section
            id="sources"
            className="scroll-mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 md:p-10"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-700">
              Section 04
            </p>
            <h2 className="text-2xl font-black text-emerald-900">
              Information Sources We Reference
            </h2>
            <p className="mt-3 leading-7 text-emerald-800">
              When researching MEPCO billing guides, tariff explanations, and
              consumer rights content, we reference the following official and
              publicly available sources:
            </p>
            <ul className="mt-5 space-y-3">
              {INFORMATION_SOURCES.map((source) => (
                <li
                  key={source}
                  className="flex items-start gap-3 text-sm font-semibold text-emerald-900"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 font-black text-emerald-700"
                  >
                    ✓
                  </span>
                  {source}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-l-4 border-emerald-500 pl-4 italic text-sm leading-7 text-emerald-800">
              Roman Urdu: Hum NEPRA notifications, MEPCO official announcements,
              PITC portal data aur government electricity policy documents ko
              reference karte hain jab bhi content research karte hain.
            </p>
          </section>

          {/* ── 05 Calculator Accuracy ── */}
          <section
            id="calculators"
            className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Section 05
            </p>
            <h2 className="text-2xl font-black text-slate-900">
              Calculator Accuracy & Limitations
            </h2>

            {/* English */}
            <p className="mt-4 leading-8 text-slate-700">
              All calculators on this portal — the MEPCO bill estimator, solar
              ROI calculator, AC electricity cost calculator, and appliance cost
              tool — generate estimates based on publicly available tariff data.
              They are designed to help users understand approximate costs and
              savings. They do not generate official bills and should not be used
              as a substitute for your actual MEPCO electricity bill.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Actual bills may differ due to: tariff slab position, FPA
              adjustments, QTA charges, TV licence fee, meter reading accuracy,
              arrears, government surcharges, net metering credits, and other
              official adjustments applied by MEPCO or NEPRA.
            </p>

            {/* Roman Urdu */}
            <p className="mt-4 border-l-4 border-emerald-400 pl-4 italic leading-8 text-slate-600">
              Hamare calculators estimate dete hain — official bill nahi.
              Actual bill mein FPA, QTA, TV fee, arrears aur government
              adjustments bhi hote hain jo calculator mein fully reflect nahi
              hote. Hamesha official MEPCO bill se confirm karein.
            </p>

            {/* Note Box */}
            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                <span aria-hidden="true">💡</span> Why Estimates Vary
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                FPA, QTA, tariff slabs, and net metering export rates are
                determined by NEPRA and the Government of Pakistan. These can
                change multiple times per year. Our calculators are updated when
                major revisions are publicly announced, but may not reflect
                real-time changes between updates. For exact billing figures,
                always refer to your official MEPCO bill or PITC portal.
              </p>
            </div>
          </section>

          {/* ── 06 Independence ── */}
          <section
            id="independence"
            className="scroll-mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-10"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-600">
              Section 06
            </p>
            <h2 className="text-2xl font-black text-amber-900">
              <span aria-hidden="true">⚠️</span>{" "}
              Editorial Independence & Disclaimer
            </h2>

            {/* English */}
            <p className="mt-4 leading-8 text-amber-900">
              mepcoonlinebill.net operates as a fully independent consumer
              information portal. We have no financial, contractual, or
              operational relationship with MEPCO, PITC, NEPRA, WAPDA, or any
              government department. Our editorial decisions are made solely
              based on what is most useful and accurate for South Punjab
              electricity consumers.
            </p>
            <p className="mt-4 leading-8 text-amber-900">
              We do not receive payments from MEPCO or any affiliated
              organization for content. We do not represent official MEPCO
              policy, tariff decisions, or billing records. Official consumer
              data, connection approvals, meter readings, and final billing
              figures belong exclusively to MEPCO and relevant official
              departments.
            </p>

            {/* Roman Urdu */}
            <p className="mt-4 border-l-4 border-amber-400 pl-4 italic leading-8 text-amber-800">
              Ye website MEPCO, PITC, NEPRA ya kisi bhi government department
              se kisi bhi tarah affiliated nahi hai. Hamare editorial decisions
              sirf consumer benefit ke liye hotay hain. Hum MEPCO ki taraf se
              koi payment nahi lete.
            </p>

            {/* Urdu */}
            <p
              className="mt-4 text-sm leading-9 text-amber-900"
              dir="rtl"
              lang="ur"
            >
              یہ ویب سائٹ مکمل طور پر آزاد ہے۔ اس کا میپکو، پی آئی ٹی سی،
              نیپرا یا کسی سرکاری ادارے سے کوئی مالی یا ادارتی تعلق نہیں ہے۔
              تمام سرکاری معاملات کی تصدیق آفیشل ذرائع سے کریں۔
            </p>
          </section>

          {/* ── 07 Corrections ── */}
          <section
            id="corrections"
            className="scroll-mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Section 07
            </p>
            <h2 className="text-2xl font-black text-slate-900">
              Corrections & Update Policy
            </h2>

            {/* English */}
            <p className="mt-4 leading-8 text-slate-700">
              We are committed to maintaining accurate and up-to-date content
              across all 80+ guides and tools. When errors are identified —
              either internally or reported by users — we act promptly. The
              following correction standards apply to all content on this portal:
            </p>

            <ul className="mt-5 space-y-3">
              {CORRECTION_POLICY.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 font-black text-emerald-600"
                  >
                    ✅
                  </span>
                  <span className="text-sm leading-7">{item}</span>
                </li>
              ))}
            </ul>

            {/* Roman Urdu */}
            <p className="mt-6 border-l-4 border-emerald-400 pl-4 italic leading-8 text-slate-600">
              Agar koi guide outdated ya incorrect lage to hamari contact page
              ke zariye report karein. Hum 72 ghanton ke andar review karte
              hain. Significant corrections guide mein note ki jati hain.
            </p>

            {/* Urdu */}
            <p
              className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm leading-9 text-slate-700"
              dir="rtl"
              lang="ur"
            >
              اگر کوئی معلومات غلط یا پرانی لگے تو ہم سے رابطہ کریں۔ ہم 72
              گھنٹوں کے اندر جائزہ لیں گے۔ اہم اصلاحات گائیڈ میں نوٹ کی
              جائیں گی۔
            </p>

            {/* Last Reviewed */}
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <span aria-hidden="true">📅</span>
              Last reviewed:{" "}
              <time dateTime="2026">2026</time>
            </div>
          </section>

          {/* ── Final CTA ── */}
          <section className="rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 p-8 text-center text-white md:p-12">
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Trust & Transparency
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Related Trust Pages
            </h2>
            <p className="mt-3 leading-7 text-emerald-100">
              Learn more about our author, full disclaimer, privacy policy, and
              how to reach us with corrections or feedback.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {TRUST_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={
                    link.primary
                      ? "rounded-xl bg-white px-5 py-3 font-bold text-emerald-900 hover:bg-emerald-50 transition-colors duration-200"
                      : "rounded-xl border border-emerald-400 px-5 py-3 font-bold text-white hover:bg-emerald-700 transition-colors duration-200"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-emerald-400">
              Independent portal · Not affiliated with MEPCO or PITC ·
              Information references official MEPCO and PITC resources where
              applicable.
            </p>
          </section>

        </div>
      </main>
    </>
  );
}