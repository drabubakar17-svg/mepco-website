import type { Metadata } from "next";
import Link from "next/link";
import SolarRoiClient from "./SolarRoiClient";

// ═══════════════════════════════════════════════════
// SEO METADATA
// ═══════════════════════════════════════════════════
export const metadata: Metadata = {
  title: "Solar Payback Calculator Pakistan PKR 2026",
  description:
    "Calculate solar ROI, payback period and monthly savings in PKR. Enter system cost, kW size and MEPCO bill — instant results in years and months.",
  keywords: [
    "solar payback calculator pakistan pkr",
    "solar roi calculator pakistan",
    "solar savings calculator pakistan",
    "solar calculator pkr",
    "solar payback period pakistan",
    "mepco solar calculator",
    "solar installation cost pakistan 2026",
    "solar roi calculator pkr",
    "solar system payback period",
    "3kw solar payback pakistan",
    "5kw solar payback pakistan",
    "10kw solar payback pakistan",
    "solar net metering savings pakistan",
    "on-grid solar calculator pakistan",
    "solar energy savings pakistan 2026",
    "solar unit generation pakistan",
    "mepco net metering calculator",
    "solar bill reduction pakistan",
    "solar annual savings calculator",
    "solar 25 year roi pakistan",
    "solar payback multan",
    "solar payback bahawalpur",
    "solar system cost south punjab",
    "bijli bill solar se kam karna",
  ],
  // ✅ Fix 1: robots added
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  // ✅ Fix 2: alternates.languages added
  alternates: {
    canonical: "https://www.mepcoonlinebill.net/mepco-solar-roi-calculator",
    languages: {
      "en-PK": "https://www.mepcoonlinebill.net/mepco-solar-roi-calculator",
      "ur-PK": "https://www.mepcoonlinebill.net/mepco-solar-roi-calculator",
    },
  },
  openGraph: {
    title: "Solar Payback Calculator Pakistan PKR 2026",
    description:
      "Calculate solar ROI, payback period and savings in PKR. Instant results for 3kW, 5kW, 10kW, 15kW systems across Pakistan.",
    url: "https://www.mepcoonlinebill.net/mepco-solar-roi-calculator",
    siteName: "MEPCO Online Bill",
    type: "article",
    locale: "en_PK",
    images: [
      {
        url: "https://www.mepcoonlinebill.net/mepco-logo.png",
        width: 512,
        height: 512,
        alt: "Solar ROI Calculator Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Payback Calculator Pakistan PKR 2026",
    description:
      "Solar ROI, payback period aur savings calculate karein PKR mein. 3kW se 15kW tak — free online calculator.",
    images: ["https://www.mepcoonlinebill.net/mepco-logo.png"],
  },
};

// ═══════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════
const SITE_URL = "https://www.mepcoonlinebill.net";
const PAGE_URL = `${SITE_URL}/mepco-solar-roi-calculator`;
const LAST_UPDATED = "2026-06-07";
const PUBLISHED_DATE = "2026-06-07";

// ═══════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════
const SYSTEM_COMPARISON = [
  {
    size: "3 kW",
    cost: "Rs. 5–7 Lakh",
    monthlyUnits: "~375 units/month",
    monthlyBillReduction: "~Rs. 10,000–14,000",
    payback: "4–6 years",
    suitable: "Small home, 1–2 AC units",
    bg: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-800",
  },
  {
    size: "5 kW",
    cost: "Rs. 8–11 Lakh",
    monthlyUnits: "~625 units/month",
    monthlyBillReduction: "~Rs. 18,000–25,000",
    payback: "4–6 years",
    suitable: "Medium home, 2–3 AC units",
    bg: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
  },
  {
    size: "10 kW",
    cost: "Rs. 15–20 Lakh",
    monthlyUnits: "~1,250 units/month",
    monthlyBillReduction: "~Rs. 40,000–55,000",
    payback: "4–6 years",
    suitable: "Large home, 4+ AC units",
    bg: "bg-purple-50 border-purple-200",
    badge: "bg-purple-100 text-purple-800",
  },
  {
    size: "15 kW",
    cost: "Rs. 22–30 Lakh",
    monthlyUnits: "~1,875 units/month",
    monthlyBillReduction: "~Rs. 65,000–90,000",
    payback: "4–6 years",
    suitable: "Office or small commercial",
    bg: "bg-orange-50 border-orange-200",
    badge: "bg-orange-100 text-orange-800",
  },
];

const AC_COST_DATA = [
  {
    temp: "18°C",
    monthly: "~210–240 units",
    risk: "201 Trap Active",
    riskColor: "text-red-600",
    bg: "bg-red-50",
  },
  {
    temp: "22°C",
    monthly: "~170–190 units",
    risk: "Alert Zone",
    riskColor: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    temp: "24°C",
    monthly: "~140–160 units",
    risk: "Safe Zone",
    riskColor: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    temp: "26°C",
    monthly: "~110–130 units",
    risk: "Very Safe",
    riskColor: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    temp: "28°C",
    monthly: "~85–100 units",
    risk: "Safest Zone",
    riskColor: "text-emerald-800",
    bg: "bg-emerald-100",
  },
];

const HOW_IT_WORKS_INPUTS = [
  "Installation Cost — Total solar system price in PKR",
  "System Size (kW) — Panel capacity e.g. 3kW, 5kW, 10kW",
  "Monthly Bill — Your current MEPCO electricity bill in PKR",
];

const HOW_IT_WORKS_OUTPUTS = [
  "Monthly unit generation estimate",
  "Monthly savings in PKR",
  "Annual savings in PKR",
  "Payback period in years & months",
  "Environmental impact — CO₂ saved & trees equivalent",
  "25-year total ROI projection and net profit",
];

const MEPCO_DISTRICTS = [
  { en: "Multan", ur: "ملتان" },
  { en: "Bahawalpur", ur: "بہاولپور" },
  { en: "Rahim Yar Khan", ur: "رحیم یار خان" },
  { en: "DG Khan", ur: "ڈی جی خان" },
  { en: "Sahiwal", ur: "ساہیوال" },
  { en: "Vehari", ur: "وہاڑی" },
  { en: "Khanewal", ur: "خانیوال" },
  { en: "Muzaffargarh", ur: "مظفرگڑھ" },
  { en: "Layyah", ur: "لیہ" },
  { en: "Rajanpur", ur: "راجن پور" },
  { en: "Lodhran", ur: "لودھراں" },
  { en: "Pakpattan", ur: "پاکپتن" },
  { en: "Bahawalnagar", ur: "بہاولنگر" },
];

const ROMAN_URDU_SUMMARY: [string, string][] = [
  ["Solar ROI =", "Investment wapas + uske baad pure profit"],
  ["Payback period =", "Pakistan mein average 4–7 saal"],
  ["25 saal baad =", "Lakhon rupees net profit"],
  ["Best system size =", "Monthly bill ke mutabiq choose karein"],
  ["Net metering =", "Extra bijli grid ko — bill mein adjust"],
  ["MEPCO area =", "South Punjab — high sunlight zone"],
  ["On-grid system =", "Fastest payback — recommended"],
  ["Calculator use =", "Cost + kW + bill enter karein — foran result"],
];

const NAV_LINKS: [string, string][] = [
  ["Solar ROI Calculator", "#calculator"],
  ["System Size Comparison", "#system-comparison"],
  ["How It Works", "#how-it-works"],
  ["Net Metering Guide", "#net-metering"],
  ["AC Cost vs Solar", "#ac-solar"],
  ["Roman Urdu Guide", "#roman-urdu"],
  ["اردو گائیڈ", "#urdu-guide"],
  ["MEPCO 13 Districts", "#districts"],
  ["FAQs — 10 Questions", "#faqs"],
];

const FAQ_DATA = [
  {
    q: "Solar ROI calculator Pakistan mein kaise kaam karta hai?",
    a: "Solar ROI calculator mein aap apna solar installation cost (PKR), system size (kW) aur monthly electricity bill enter karte hain. Calculator monthly unit generation estimate karta hai (125 units/kW/month), savings calculate karta hai aur payback period years aur months mein dikhata hai. 80% self-use at Rs. 50/unit aur 20% export at Rs. 22/unit net metering offset assume kiya gaya hai.",
    lang: "roman",
  },
  {
    q: "Pakistan mein solar payback period kitna hota hai?",
    a: "Pakistan mein on-grid solar system ka average payback period 4 se 7 saal hota hai — system size, location, sunlight hours aur monthly bill ke hisaab se. MEPCO area (South Punjab) mein Multan, DG Khan, Bahawalpur jaise cities mein sunlight hours zyada hote hain (5–6 peak hours daily) to payback relatively faster ho sakta hai. Payback ke baad 25+ saal tak pure profit milta hai.",
    lang: "roman",
  },
  {
    q: "What is net metering and how does it affect solar ROI?",
    a: "Net metering is a billing mechanism where excess solar electricity is exported to the grid and credited against your electricity bill. In Pakistan, NEPRA governs net metering policy. The export rate (offset) is typically lower than the import rate — so self-consumption of solar electricity is more valuable. This calculator assumes 80% self-use for better accuracy.",
    lang: "en",
  },
  {
    q: "3kW solar system ka payback period Pakistan mein kitna hai?",
    a: "3kW on-grid solar system ki average cost Pakistan mein Rs. 5–7 lakh hai. Monthly approximately 375 units generate hoti hain. Agar monthly bill Rs. 12,000 hai to savings roughly Rs. 10,000–12,000/month ho sakti hain. Estimated payback period 5–7 saal ke qareeb hota hai. Exact calculation ke liye upar calculator use karein apni actual values ke sath.",
    lang: "roman",
  },
  {
    q: "5kW solar system ke liye Pakistan mein kitna invest karna hota hai?",
    a: "Pakistan mein 5kW on-grid solar system ki average cost Rs. 8–11 lakh ke darmiyan hoti hai — brand, panel quality, inverter type aur installation charges ke hisaab se. 5kW system monthly approximately 625 units generate karta hai. Agar aapka monthly MEPCO bill Rs. 20,000–25,000 hai to 5kW system best fit hota hai aur payback period typically 4–6 saal hota hai.",
    lang: "roman",
  },
  {
    q: "On-grid vs hybrid solar system mein kya farq hai?",
    a: "On-grid system sirf grid se connected hota hai — koi battery nahi. Yeh sab se zyada cost-effective hai aur payback period fastest hota hai. Hybrid system mein batteries hoti hain — grid outage mein bhi backup milta hai. Lekin batteries ki extra cost ki wajah se total investment zyada hota hai aur payback period longer ho jaata hai. MEPCO area ke liye on-grid system mostly recommended hai kyunke net metering available hai.",
    lang: "roman",
  },
  {
    q: "کیا سولر سسٹم MEPCO بل مکمل ختم کر سکتا ہے؟ (Urdu)",
    a: "جی ہاں، ایک مناسب سائز کا آن گرڈ سولر سسٹم آپ کا MEPCO بل 70–90 فیصد تک کم کر سکتا ہے۔ مکمل خاتمے کے لیے سسٹم کا سائز آپ کی ماہانہ کھپت سے میل کھانا چاہیے۔ نیٹ میٹرنگ کے ذریعے اضافی بجلی گرڈ میں ایکسپورٹ ہوتی ہے اور بل میں ایڈجسٹ ہوتی ہے۔ حتمی بچت سسٹم سائز، چھت کی سمت اور NEPRA ٹیرف پر منحصر ہے۔",
    lang: "ur",
  },
  {
    q: "Solar system ka 25-year ROI kya hota hai?",
    a: "Quality solar panels ki average life 25–30 saal hoti hai. Agar payback period 5 saal hai aur system 25 saal chalta hai — to 20 saal pure profit milta hai. Example: 5kW system pe Rs. 9.5 lakh invest karein, annual savings Rs. 2 lakh ho to 25-year total savings Rs. 50 lakh — net profit Rs. 40.5 lakh hoga. Calculator mein apni values enter kar ke exact projection dekhein.",
    lang: "roman",
  },
  {
    q: "سولر ROI کیلکولیٹر کیسے استعمال کریں؟ (Urdu)",
    a: "سولر ROI کیلکولیٹر استعمال کرنے کے لیے: (1) سولر سسٹم کی کل لاگت روپوں میں درج کریں، (2) سسٹم کی صلاحیت کلو واٹ میں لکھیں، (3) اپنا موجودہ ماہانہ MEPCO بل درج کریں۔ نتائج فوری ظاہر ہوں گے — ماہانہ بچت، سالانہ بچت اور پے بیک پیریڈ سال اور مہینوں میں۔ آپ اوپر سے تیار پیکج بھی منتخب کر سکتے ہیں۔",
    lang: "ur",
  },
  {
    q: "10kW solar system Pakistan mein kaisa rehta hai?",
    a: "10kW on-grid solar system Pakistan mein large homes, farmhouses aur small offices ke liye ideal hai. Cost typically Rs. 15–20 lakh hoti hai. Monthly approximately 1,250 units generate hoti hain. Agar aapka monthly MEPCO bill Rs. 50,000–60,000 hai to 10kW system ke sath aap bill almost zero tak la sakte hain — aur 25 saal mein net profit 60–80 lakh tak ho sakta hai.",
    lang: "roman",
  },
];

const RELATED_GUIDES = [
  {
    href: "/mepco-solar-savings-calculator",
    label: "Solar Savings Calculator",
    desc: "Monthly aur annual solar savings check karein",
  },
  {
    href: "/mepco-net-metering-guide",
    label: "Net Metering Guide",
    desc: "MEPCO mein net metering apply karne ka process",
  },
  {
    href: "/mepco-bill-calculator",
    label: "MEPCO Bill Calculator",
    desc: "Current bijli bill calculate karein",
  },
  {
    href: "/mepco-200-units-rule",
    label: "200 Units Rule",
    desc: "Protected consumer threshold guide",
  },
  {
    href: "/mepco-protected-consumer-guide",
    label: "Protected Consumer Guide",
    desc: "201 unit trap aur bill shock prevention",
  },
  {
    href: "/mepco-fpa-charges-guide",
    label: "FPA Charges Guide",
    desc: "Fuel Price Adjustment charges explained",
  },
  {
    href: "/mepco-bill-slabs-guide",
    label: "Bill Slabs Guide",
    desc: "MEPCO electricity tariff slabs 2026",
  },
  {
    href: "/",
    label: "MEPCO Online Bill Check",
    desc: "Reference number se bill check karein",
  },
  {
    href: "/mepco-new-connection-guide",
    label: "New Connection Guide",
    desc: "Naya bijli connection apply karne ka tareeqa",
  },
];

// ═══════════════════════════════════════════════════
// ALL SCHEMAS — Outside component
// ═══════════════════════════════════════════════════
function AllSchemas() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Solar Payback Calculator Pakistan PKR 2026",
    description:
      "Calculate solar ROI, payback period, monthly and annual savings in PKR for Pakistan. Covers 3kW, 5kW, 10kW, 15kW systems with net metering for all 13 MEPCO districts.",
    datePublished: PUBLISHED_DATE,
    dateModified: LAST_UPDATED,
    inLanguage: ["en", "ur", "ur-Latn"],
    author: {
      "@type": "Organization",
      name: "MEPCO Online Bill",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "MEPCO Online Bill",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Solar ROI Calculator",
        item: PAGE_URL,
      },
    ],
  };

  // ✅ Fix 4: featureList added to softwareAppSchema
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Solar Payback Calculator Pakistan PKR",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    description:
      "Free online solar ROI and payback calculator for Pakistan in PKR. Supports 3kW to 15kW on-grid systems with net metering calculations for all MEPCO districts.",
    url: PAGE_URL,
    featureList: [
      "Solar ROI calculation in PKR",
      "Payback period in years and months",
      "25-year profit projection",
      "CO2 savings calculator",
      "Net metering savings estimate",
      "3kW to 15kW system support",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Calculate Solar Payback Period in Pakistan PKR",
    description:
      "Step by step guide to calculate solar ROI and payback period for Pakistan using installation cost, system size and monthly electricity bill.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Enter Installation Cost",
        text: "Apne solar system ki total installation cost PKR mein enter karein. Ya phir upar se ek ready package select karein (3kW, 5kW, 10kW, 15kW).",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enter System Size in kW",
        text: "Apne solar system ki capacity kilo watts (kW) mein enter karein. Typical homes ke liye 3kW se 15kW range hoti hai.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Enter Monthly Electricity Bill",
        text: "Apna current monthly MEPCO electricity bill PKR mein enter karein. Latest bill se exact amount lein.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "View Instant Results",
        text: "Calculator foran monthly generation, monthly savings, annual savings, payback period, CO2 savings aur 25-year ROI projection dikhata hai.",
      },
    ],
  };

  // ✅ Fix 3: datePublished added to webPageSchema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Solar Payback Calculator Pakistan PKR 2026",
    url: PAGE_URL,
    description:
      "Free solar ROI and payback calculator for Pakistan in PKR — 3kW to 15kW systems, net metering, 25-year projection.",
    isPartOf: {
      "@type": "WebSite",
      name: "MEPCO Online Bill",
      url: SITE_URL,
    },
    datePublished: PUBLISHED_DATE,
    dateModified: LAST_UPDATED,
    inLanguage: ["en", "ur", "ur-Latn"],
  };

  return (
    <>
      {[
        faqSchema,
        articleSchema,
        breadcrumbSchema,
        softwareAppSchema,
        howToSchema,
        webPageSchema,
      ].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// ═══════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════
export default function SolarRoiPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <AllSchemas />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-slate-950 px-6 py-16 text-white md:py-24">
        <div
          className="absolute left-[-120px] top-[-80px] h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-100px] right-[-80px] h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-emerald-300">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-white">Solar ROI Calculator</li>
            </ol>
          </nav>

          <p className="text-sm font-black uppercase tracking-widest text-emerald-200">
            Pakistan Solar Tool 2026 — Last Updated:{" "}
            <time dateTime={LAST_UPDATED}>June 2026</time>
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Solar ROI &amp; Payback Calculator —{" "}
            <span className="text-yellow-300">Pakistan PKR 2026</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
            Apna solar installation cost, system size (kW) aur monthly MEPCO
            bill enter karein. Calculator foran{" "}
            <strong>
              monthly generation, savings, annual ROI aur payback period
            </strong>{" "}
            years aur months mein dikhata hai. 3kW, 5kW, 10kW, 15kW systems —
            MEPCO ke tamam 13 districts ke consumers ke liye.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#calculator"
              className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-yellow-900 shadow transition hover:bg-yellow-300"
            >
              <span aria-hidden="true">☀️</span> Open Calculator
            </a>
            <Link
              href="/mepco-solar-savings-calculator"
              className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Solar Savings Calculator
            </Link>
            <Link
              href="/mepco-net-metering-guide"
              className="rounded-xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Net Metering Guide
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Top */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-widest text-slate-400">
            Advertisement
          </p>
          <p className="mt-2 text-slate-500">
            Google AdSense responsive ad space
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-4">
        {/* Mobile TOC */}
        <nav
          aria-label="Table of Contents"
          className="mb-8 rounded-2xl border bg-white p-6 shadow-sm lg:hidden"
        >
          <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
            <span aria-hidden="true">📑</span> Is Page Par Kya Hai?
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-slate-700">
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="underline underline-offset-2 hover:text-emerald-700"
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* STICKY SIDEBAR */}
          <aside className="h-fit rounded-[2rem] border bg-white p-6 shadow-xl lg:sticky lg:top-24">
            <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
              Page Navigation
            </p>
            <nav aria-label="Section Navigation">
              <div className="mt-4 grid gap-2">
                {NAV_LINKS.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-xl border border-emerald-100 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="mt-6 rounded-2xl bg-emerald-900 p-5 text-white">
              <h3 className="font-black">
                <span aria-hidden="true">🔋</span> Net Metering Apply Karein
              </h3>
              <p className="mt-2 text-sm leading-6 text-emerald-100">
                MEPCO area mein net metering apply karne ka complete process
                dekhein.
              </p>
              <Link
                href="/mepco-net-metering-guide"
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-black text-emerald-900 transition hover:bg-emerald-50"
              >
                Net Metering Guide →
              </Link>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-900 p-5 text-white">
              <h3 className="font-black">
                <span aria-hidden="true">⚡</span> MEPCO Bill Check
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Current bill dekhein — solar investment decide karne se pehle.
              </p>
              <Link
                href="/"
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-900 transition hover:bg-slate-50"
              >
                Check Bill →
              </Link>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="space-y-8">
            {/* CALCULATOR */}
            <section id="calculator" className="scroll-mt-8">
              <SolarRoiClient />
            </section>

            {/* SYSTEM COMPARISON */}
            <article
              id="system-comparison"
              className="scroll-mt-8 rounded-[2rem] border bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-emerald-900">
                System Size Comparison — 3kW to 15kW Pakistan 2026
              </h2>
              <p className="mt-4 leading-8 text-slate-700">
                Pakistan mein common solar system sizes, estimated costs, monthly
                savings aur payback periods ka complete comparison. Exact
                calculation ke liye{" "}
                <a
                  href="#calculator"
                  className="font-bold text-emerald-700 underline underline-offset-2"
                >
                  upar calculator
                </a>{" "}
                use karein:
              </p>

              <div className="mt-6 space-y-4">
                {SYSTEM_COMPARISON.map((sys, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border p-5 ${sys.bg}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900">
                          {sys.size} System
                        </h3>
                        <p className="text-sm text-slate-600">
                          {sys.suitable}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-black ${sys.badge}`}
                      >
                        Payback: {sys.payback}
                      </span>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div>
                        <p className="text-xs font-bold text-slate-500">
                          Installation Cost
                        </p>
                        <p className="mt-1 font-black text-slate-900">
                          {sys.cost}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500">
                          Monthly Generation
                        </p>
                        <p className="mt-1 font-black text-slate-900">
                          {sys.monthlyUnits}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500">
                          Monthly Bill Reduction
                        </p>
                        <p className="mt-1 font-black text-emerald-700">
                          {sys.monthlyBillReduction}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-slate-500">
                * Estimates are approximate. Actual costs depend on panel brand,
                inverter quality, installation charges, NEPRA tariff, location
                and sunlight hours.
              </p>
            </article>

            {/* HOW IT WORKS */}
            <article
              id="how-it-works"
              className="scroll-mt-8 rounded-[2rem] border bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-emerald-900">
                Solar ROI Calculator Kaise Kaam Karta Hai?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Yeh calculator <strong>3 simple inputs</strong> leta hai aur{" "}
                <strong>6 detailed outputs</strong> instantly calculate karta
                hai:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="font-black text-slate-900">
                    <span aria-hidden="true">📥</span> 3 Inputs Required
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {HOW_IT_WORKS_INPUTS.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <h3 className="font-black text-emerald-900">
                    <span aria-hidden="true">📤</span> 6 Instant Outputs
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {HOW_IT_WORKS_OUTPUTS.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-emerald-800"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-amber-50 p-5">
                <h3 className="font-black text-amber-900">
                  <span aria-hidden="true">⚙️</span> Calculation Formula
                </h3>
                <div className="mt-3 space-y-2 text-sm text-amber-800">
                  <p>
                    <strong>Monthly Units</strong> = System kW × 125
                    units/kW/month
                  </p>
                  <p>
                    <strong>Monthly Savings</strong> = min(Monthly Bill,
                    Self-use + Export savings)
                  </p>
                  <p>
                    <strong>Self-use Savings</strong> = Units × 0.8 × Rs.
                    50/unit
                  </p>
                  <p>
                    <strong>Export Savings</strong> = Units × 0.2 × Rs. 22/unit
                  </p>
                  <p>
                    <strong>Payback Period</strong> = Installation Cost ÷ Annual
                    Savings
                  </p>
                  <p>
                    <strong>25-Year ROI</strong> = (Annual Savings × 25 − Cost)
                    ÷ Cost × 100
                  </p>
                </div>
              </div>
            </article>

            {/* NET METERING */}
            <article
              id="net-metering"
              className="scroll-mt-8 rounded-[2rem] border bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-emerald-900">
                Net Metering Kya Hai Aur Solar ROI Par Kya Asar Hai?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Net metering ek billing mechanism hai jisme aapka solar system jo
                extra bijli generate kare wo{" "}
                <strong>grid mein export ho jaati hai</strong> aur MEPCO bill
                mein credit ke tor par adjust hoti hai.{" "}
                <Link
                  href="/mepco-net-metering-guide"
                  className="font-bold text-emerald-700 underline underline-offset-2"
                >
                  Net Metering Complete Guide
                </Link>{" "}
                dekhein.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Pakistan mein <strong>NEPRA net metering policy</strong> govern
                karta hai. Important:{" "}
                <strong>
                  export rate import rate se generally kam hoti hai
                </strong>
                . Isliye <strong>self-consumption</strong> solar mein zyada
                valuable hai — calculator 80% self-use assume karta hai.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <h3 className="font-black text-emerald-900">Self-Use</h3>
                  <p className="mt-1 text-3xl font-black text-emerald-700">
                    Rs. 50 / unit
                  </p>
                  <p className="mt-2 text-sm text-emerald-800">
                    Import rate saved — zyada valuable — 80% usage
                  </p>
                </div>
                <div className="rounded-2xl bg-blue-50 p-5">
                  <h3 className="font-black text-blue-900">Export</h3>
                  <p className="mt-1 text-3xl font-black text-blue-700">
                    Rs. 22 / unit
                  </p>
                  <p className="mt-2 text-sm text-blue-800">
                    Net metering offset — kam valuable — 20% export
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href="/mepco-net-metering-guide"
                  className="inline-flex rounded-2xl bg-emerald-700 px-6 py-4 font-black text-white transition hover:bg-emerald-800"
                >
                  Net Metering Complete Guide →
                </Link>
              </div>
            </article>

            {/* AdSense Mid */}
            <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-black uppercase tracking-widest text-slate-400">
                Advertisement
              </p>
              <p className="mt-2 text-slate-500">
                In-content AdSense ad space
              </p>
            </div>

            {/* AC COST VS SOLAR */}
            <article
              id="ac-solar"
              className="scroll-mt-8 rounded-[2rem] border bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-emerald-900">
                AC Temperature vs Monthly Units — Solar Ka Impact
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                AC Pakistan mein bijli bill ka{" "}
                <strong>sab se bada culprit</strong> hai. Solar system AC ke
                units offset karta hai. Yeh chart dikhata hai ke different
                temperatures par monthly units kitne hote hain (1.5 ton inverter
                AC, 8 hrs/day). Zyada details ke liye{" "}
                <Link
                  href="/mepco-protected-consumer-guide"
                  className="font-bold text-emerald-700 underline underline-offset-2"
                >
                  Protected Consumer Guide
                </Link>{" "}
                dekhein:
              </p>

              <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[420px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-4 text-left font-black">
                        AC Temperature
                      </th>
                      <th className="p-4 text-center font-black">
                        Monthly Units (AC Only)
                      </th>
                      <th className="p-4 text-center font-black">
                        Bill Risk
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {AC_COST_DATA.map((row, i) => (
                      <tr key={i} className={row.bg}>
                        <td className="p-4 text-xl font-black text-slate-900">
                          {row.temp}
                        </td>
                        <td className="p-4 text-center font-bold text-slate-800">
                          {row.monthly}
                        </td>
                        <td
                          className={`p-4 text-center font-black ${row.riskColor}`}
                        >
                          {row.risk}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-5 rounded-2xl bg-emerald-900 p-5 text-white">
                <h3 className="font-black">
                  <span aria-hidden="true">☀️</span> Solar + 26°C AC = Best
                  Combination
                </h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  5kW solar + AC at 26°C = monthly AC units ~110–130 (solar se
                  cover). Baaki ghar ki bijli bhi solar se offset. Net metering
                  se extra units bill mein adjust. Use{" "}
                  <a
                    href="#calculator"
                    className="font-bold text-white underline"
                  >
                    calculator
                  </a>{" "}
                  for exact savings.
                </p>
              </div>
            </article>

            {/* ROMAN URDU */}
            <article
              id="roman-urdu"
              className="scroll-mt-8 rounded-[2rem] border bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-emerald-900">
                Solar ROI Calculator — Roman Urdu Guide
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                <strong>Solar ROI</strong> ka simple matlab hai: jo paisa aap
                solar system par lagate hain, wo bijli bill ki savings se{" "}
                <strong>kitne arsay mein wapas aa jata hai</strong> — aur uske
                baad sab <strong>pure profit</strong> hota hai.
              </p>

              <p className="mt-4 leading-8 text-slate-700">
                Pakistan mein — khaas kar MEPCO area (South Punjab) mein —
                sunlight hours bahut zyada hote hain. Multan, DG Khan,
                Bahawalpur mein average <strong>5–6 peak sun hours</strong>{" "}
                daily milte hain. Is calculator mein hum{" "}
                <strong>1 kW = 125 units per month</strong> assume karte hain.
                Solar investment se pehle apna current{" "}
                <Link
                  href="/"
                  className="font-bold text-emerald-700 underline underline-offset-2"
                >
                  MEPCO bill check
                </Link>{" "}
                karein aur{" "}
                <Link
                  href="/mepco-bill-calculator"
                  className="font-bold text-emerald-700 underline underline-offset-2"
                >
                  Bill Calculator
                </Link>{" "}
                se monthly units estimate karein.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-black">
                  <span aria-hidden="true">⚡</span> Roman Urdu Quick Summary
                </h3>
                <ul className="mt-3 space-y-2 pl-2">
                  {ROMAN_URDU_SUMMARY.map(([key, val], i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="font-bold text-slate-800">{key}</span>
                      <span className="font-black text-emerald-700">
                        {val}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* URDU GUIDE */}
            <article
              id="urdu-guide"
              className="scroll-mt-8 rounded-[2rem] border bg-white p-7 shadow-xl md:p-10"
              lang="ur"
            >
              <h2
                className="text-3xl font-black text-emerald-900"
                dir="rtl"
              >
                سولر ROI کیلکولیٹر — اردو گائیڈ
              </h2>

              <div
                dir="rtl"
                className="mt-6 space-y-6 leading-9 text-slate-700"
              >
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    سولر ROI کا مطلب کیا ہے؟
                  </h3>
                  <p className="mt-3">
                    سولر ROI کا مطلب ہے کہ آپ نے سولر سسٹم پر جو رقم لگائی
                    ہے، وہ بجلی کے بل کی بچت سے کتنے عرصے میں واپس آ جاتی
                    ہے۔ اس کے بعد جو بھی بچت ہو وہ خالص منافع ہے۔ پاکستان
                    میں اوسطاً پے بیک پیریڈ 4 سے 7 سال ہوتا ہے — اور 25 سال
                    بعد خالص منافع لاکھوں روپے تک پہنچ سکتا ہے۔
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    کیلکولیٹر کیسے استعمال کریں؟
                  </h3>
                  <ol className="mt-3 list-decimal space-y-2 pr-5">
                    <li>
                      سولر سسٹم کی کل لاگت روپوں میں درج کریں — یا اوپر سے
                      تیار پیکج (3kW, 5kW, 10kW, 15kW) منتخب کریں
                    </li>
                    <li>سسٹم کی صلاحیت کلو واٹ (kW) میں درج کریں</li>
                    <li>
                      اپنا موجودہ ماہانہ MEPCO بجلی کا بل روپوں میں درج کریں
                    </li>
                    <li>
                      نتائج فوری ظاہر ہوں گے — ماہانہ بچت، سالانہ بچت، پے
                      بیک پیریڈ اور 25 سالہ ROI
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    MEPCO علاقے میں سولر کیوں فائدہ مند ہے؟
                  </h3>
                  <p className="mt-3">
                    جنوبی پنجاب — ملتان، بہاولپور، ڈی جی خان، رحیم یار خان —
                    پاکستان کے سب سے زیادہ دھوپ والے علاقے ہیں۔ یہاں روزانہ
                    اوسطاً 5 سے 6 پیک سن آورز ملتے ہیں جس سے سولر انویسٹمنٹ
                    خاص طور پر فائدہ مند ہوتی ہے اور پے بیک پیریڈ تیز ہوتا
                    ہے۔
                  </p>
                </div>

                <div className="rounded-3xl bg-emerald-50 p-6">
                  <h3 className="text-xl font-black text-emerald-900">
                    اہم نوٹ
                  </h3>
                  <p className="mt-3 text-emerald-950">
                    یہ کیلکولیٹر تعلیمی تخمینے کے لیے ہے۔ اصل پے بیک پیریڈ
                    شہر، چھت کی سمت، دھوپ کے اوقات، پینل معیار، انورٹر،
                    بیٹری سیٹ اپ، NEPRA ٹیرف، FPA اور QTA چارجز کے حساب سے
                    مختلف ہو سکتا ہے۔ حتمی فیصلے سے پہلے مستند سولر انسٹالر
                    سے تصدیق کریں۔
                  </p>
                </div>
              </div>
            </article>

            {/* DISTRICTS */}
            <article
              id="districts"
              className="scroll-mt-8 rounded-[2rem] border bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-emerald-900">
                MEPCO 13 Districts — Solar ROI Coverage
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Yeh calculator MEPCO ke tamam 13 districts ke consumers ke liye
                useful hai. South Punjab Pakistan ka{" "}
                <strong>highest solar irradiance zone</strong> hai:
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {MEPCO_DISTRICTS.map((d, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-emerald-100 bg-slate-50 p-3 text-center"
                  >
                    <p className="font-bold text-slate-900">{d.en}</p>
                    <p
                      className="text-sm text-slate-500"
                      dir="rtl"
                      lang="ur"
                    >
                      {d.ur}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm leading-7 text-emerald-800">
                <strong>Note:</strong> Multan, DG Khan, Bahawalpur aur Rahim
                Yar Khan Pakistan ke sabse zyada sunlight wale districts hain —
                5–6 peak sun hours daily. Solar ROI yahan especially strong
                rehta hai.
              </p>
            </article>

            {/* DISCLAIMER */}
            <section className="rounded-[2rem] bg-amber-50 p-7 md:p-10">
              <h2 className="text-2xl font-black text-amber-900">
                <span aria-hidden="true">⚠️</span> Important Disclaimer
              </h2>
              <p className="mt-4 leading-8 text-amber-900">
                Yeh calculator educational estimate ke liye hai. Actual payback
                period city, roof direction, sunlight hours, panel quality,
                inverter type, battery setup, on-grid vs hybrid configuration,
                MEPCO slabs, NEPRA tariff,{" "}
                <Link
                  href="/mepco-fpa-charges-guide"
                  className="font-bold underline"
                >
                  FPA charges
                </Link>
                ,{" "}
                <Link
                  href="/mepco-qta-charges-guide"
                  className="font-bold underline"
                >
                  QTA charges
                </Link>{" "}
                aur taxes ke hisaab se significantly change ho sakta hai.
              </p>
              <p className="mt-4 leading-8 text-amber-900">
                Hybrid system mein batteries ki extra cost hoti hai — payback
                on-grid ke muqable mein lamba ho sakta hai. Final decision se
                pehle latest MEPCO bill, current NEPRA tariff aur{" "}
                <strong>trusted solar installer se quotation</strong> zaroor
                lein.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* FAQS */}
      <section id="faqs" className="scroll-mt-8 bg-emerald-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-emerald-700">
            FAQs
          </p>
          <h2 className="mt-3 text-center text-4xl font-black text-slate-900">
            Solar ROI Calculator — 10 FAQs
          </h2>
          <p className="mt-2 text-center text-sm text-slate-500">
            English, Roman Urdu aur Urdu — sab covered
          </p>

          <div className="mt-10 space-y-5">
            {FAQ_DATA.map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
                lang={
                  item.lang === "ur"
                    ? "ur"
                    : item.lang === "roman"
                      ? "ur-Latn"
                      : "en"
                }
              >
                <h3
                  className="text-xl font-black text-emerald-900"
                  dir={item.lang === "ur" ? "rtl" : "ltr"}
                >
                  <span className="mr-2 text-slate-400">Q{i + 1}.</span>
                  {item.q}
                </h3>
                <p
                  className="mt-3 leading-8 text-slate-700"
                  dir={item.lang === "ur" ? "rtl" : "ltr"}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border bg-white p-8 shadow-xl md:p-12">
          <h2 className="text-3xl font-black text-emerald-900">
            Related MEPCO Guides — Aur Seekhein
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {RELATED_GUIDES.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-emerald-100 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-lg"
              >
                <p className="font-black text-emerald-700">{label}</p>
                <p className="mt-1 text-xs text-slate-500">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Footer */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-widest text-slate-400">
            Advertisement
          </p>
          <p className="mt-2 text-slate-500">Footer AdSense ad space</p>
        </div>
      </section>

      {/* Last Updated */}
      <p className="pb-10 text-center text-xs text-slate-400">
        Last updated:{" "}
        <time dateTime={LAST_UPDATED}>
          {new Date(LAST_UPDATED).toLocaleDateString("en-PK", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        . Solar ROI calculator for Pakistan covering all 13 MEPCO districts of
        South Punjab. Estimates based on on-grid system — actual results vary.
      </p>
    </main>
  );
}
