import type { Metadata } from "next";
import Link from "next/link";

// ═══════════════════════════════════════════════════
// SEO METADATA
// ═══════════════════════════════════════════════════
export const metadata: Metadata = {
  title: "MEPCO Protected Consumer 2026 — Complete Guide",
  description:
    "What is MEPCO protected consumer? Learn 200 units rule, 201 unit trap, protected vs unprotected status and bill impact. English, Urdu & Roman Urdu guide.",
  keywords: [
    "MEPCO protected consumer",
    "protected consumer meaning",
    "protected vs unprotected consumer",
    "MEPCO unprotected consumer",
    "200 units protected consumer",
    "protected consumer electricity bill",
    "bijli bill protected consumer",
    "mepco protected consumer 2026",
    "protected consumer kya hota hai",
    "محفوظ صارف میپکو",
    "mepco 200 units rule",
    "mepco bill slab 2026",
    "bijli bill 200 unit se zyada",
    "mepco consumer category",
    "protected consumer eligibility pakistan",
    "mepco bill shock reason",
    "bijli bill zyada kyun aaya",
    "mepco unprotected consumer bill",
    "protected consumer tariff pakistan",
    "nepra protected consumer rules",
    "mepco 201 unit trap",
    "201 units bill shock",
    "199 vs 201 units mepco",
    "mepco 6 month rule",
    "mepco protected consumer multan",
    "mepco protected consumer bahawalpur",
    "200 unit se zyada bill kitna badhta hai",
    "bijli bill slab reset kya hota hai",
  ],
  alternates: {
    canonical:
      "https://mepcoonlinebill.net/mepco-protected-consumer-guide",
  },
  openGraph: {
    title: "MEPCO Protected Consumer 2026 — Complete Guide",
    description:
      "What is MEPCO protected consumer? 200 units rule, 201 unit trap, protected vs unprotected, bill impact. Complete guide in English, Urdu & Roman Urdu.",
    url: "https://mepcoonlinebill.net/mepco-protected-consumer-guide",
    siteName: "MEPCO Online Bill",
    type: "article",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEPCO Protected Consumer 2026 — Complete Guide",
    description:
      "Protected consumer kya hota hai? 201 unit trap, 6-month rule, bill shock predictor — complete 2026 guide.",
  },
};

// ═══════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════
const SITE_URL = "https://mepcoonlinebill.net";
const PAGE_URL = `${SITE_URL}/mepco-protected-consumer-guide`;
const LAST_UPDATED = "2026-06-07";
const PUBLISHED_DATE = "2026-06-07";

// ═══════════════════════════════════════════════════
// DATA ARRAYS
// ═══════════════════════════════════════════════════
const QUICK_CARDS = [
  {
    icon: "🛡️",
    title: "Protected Status",
    text: "Generally linked with monthly electricity usage up to 200 units under official NEPRA billing rules.",
  },
  {
    icon: "⚡",
    title: "201 Unit Trap",
    text: "Crossing 200 units by even 1 unit triggers full slab reset — all units rebilled at higher unprotected rates.",
  },
  {
    icon: "📊",
    title: "Bill Impact",
    text: "Consumer category directly affects payable electricity bill — crossing 200 units can double or triple your bill.",
  },
  {
    icon: "📅",
    title: "6-Month Rule",
    text: "Consistent usage pattern over multiple months can affect consumer category determination under official criteria.",
  },
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

const SLAB_DATA = [
  {
    range: "1 – 100 Units",
    category: "Protected",
    detail: "Lowest slab rate — safest zone for consumers",
    risk: "Very Low",
    riskColor: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
  },
  {
    range: "101 – 200 Units",
    category: "Protected",
    detail: "Still lower slab rate — stay in this range",
    risk: "Low",
    riskColor: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
  },
  {
    range: "201 – 300 Units",
    category: "Unprotected",
    detail: "ALL units rebilled at higher rate — 201 Unit Trap begins here",
    risk: "High",
    riskColor: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-800",
  },
  {
    range: "301 – 400 Units",
    category: "Unprotected",
    detail: "High slab rate — very large bill",
    risk: "Very High",
    riskColor: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-800",
  },
  {
    range: "400+ Units",
    category: "Unprotected",
    detail: "Maximum slab — highest possible bill amount",
    risk: "Extreme",
    riskColor: "text-red-800",
    bg: "bg-red-100",
    border: "border-red-300",
    badge: "bg-red-200 text-red-900",
  },
];

// 199 vs 201 comparison data
const COMPARISON_199_201 = [
  {
    factor: "Units Used",
    u199: "199 Units",
    u201: "201 Units",
    highlight: false,
  },
  {
    factor: "Consumer Category",
    u199: "Protected ✅",
    u201: "Unprotected ❌",
    highlight: true,
  },
  {
    factor: "Slab Calculation",
    u199: "Lower slab rates apply",
    u201: "ALL 201 units at higher rate",
    highlight: true,
  },
  {
    factor: "Estimated Bill (Base)",
    u199: "~ Rs. 2,000 – 2,500",
    u201: "~ Rs. 4,500 – 6,000+",
    highlight: true,
  },
  {
    factor: "FPA Charges",
    u199: "On lower base — less",
    u201: "On higher base — more",
    highlight: false,
  },
  {
    factor: "QTA Charges",
    u199: "Lower amount",
    u201: "Higher amount",
    highlight: false,
  },
  {
    factor: "GST / Tax",
    u199: "On smaller bill",
    u201: "On much larger bill",
    highlight: false,
  },
  {
    factor: "Total Bill Difference",
    u199: "Base amount",
    u201: "~2x to 3x more than 199 units",
    highlight: true,
  },
  {
    factor: "Bill Shock Risk",
    u199: "None",
    u201: "Very High",
    highlight: true,
  },
];

const FULL_COMPARISON_ROWS = [
  {
    feature: "Monthly Usage",
    protected: "Up to ~200 units",
    unprotected: "200+ units",
  },
  {
    feature: "Slab Calculation",
    protected: "Lower slab rates apply",
    unprotected: "ALL units rebilled at higher rate",
  },
  {
    feature: "Bill Amount",
    protected: "Relatively lower",
    unprotected: "Significantly higher — often 2x to 3x",
  },
  {
    feature: "FPA Charges",
    protected: "Applied on lower base bill",
    unprotected: "Applied on higher base — more FPA",
  },
  {
    feature: "QTA Charges",
    protected: "Lower QTA amount",
    unprotected: "Higher QTA on larger base",
  },
  {
    feature: "GST / TV Fee",
    protected: "Lower tax on smaller bill",
    unprotected: "Higher tax on larger bill",
  },
  {
    feature: "Bill Shock Risk",
    protected: "Low — predictable bills",
    unprotected: "High — sudden large increase",
  },
  {
    feature: "Government Relief",
    protected: "Often eligible for relief packages",
    unprotected: "Usually not eligible",
  },
  {
    feature: "Common Cause",
    protected: "Energy saving habits",
    unprotected: "AC, heater, motor overuse",
  },
];

const TIPS_DATA = [
  {
    icon: "❄️",
    title: "AC Temperature 26°C Set Karein",
    tip: "AC ko 26°C par set karein — har 1 degree kami se approximately 10% bijli bachat hoti hai. 18°C ki jagah 26°C — sirf is ek setting se monthly 30-40 units tak bach sakte hain aur 201 unit trap se bacha ja sakta hai.",
  },
  {
    icon: "💡",
    title: "LED Bulbs Lagayein",
    tip: "Regular bulbs ki jagah LED bulbs lagayein. Ek LED bulb 85% kam bijli use karta hai same brightness ke liye. Ghar ke sare bulbs LED karne se monthly 15-20 units asani se bach sakte hain.",
  },
  {
    icon: "🚿",
    title: "Water Motor Ka Waqt Tay Karein",
    tip: "Motor din mein sirf 2 dafa — subah aur sham — fixed time par chalayein. Baar baar chalane se units barh jaate hain. Off-peak hours mein motor chalana bhi bijli bill par positive effect karta hai.",
  },
  {
    icon: "🔌",
    title: "Standby Appliances Plug Nikaalein",
    tip: "TV, microwave, washing machine, laptop charger — sab standby mein bijli khaate hain. Use ke baad plug socket se nikaalein. Is se monthly 8-12 units tak bachaye ja sakte hain.",
  },
  {
    icon: "📅",
    title: "Mid-Month Meter Reading Lein",
    tip: "Mahine ke 15 din baad khud meter reading check karein. Agar 100 units paar ho chuki hain to baki 15 dinon mein heavy appliances ka use kam karein. Yeh 201 unit trap se bachne ka sabse practical tareeqa hai.",
  },
  {
    icon: "🌡️",
    title: "Electric Geyser / Heater Limit Karein",
    tip: "Electric geyser aur heater sab se zyada units consume karne wale appliances hain. Sirf zaroorat ke waqt use karein — solar geyser ya gas geyser switch karna long-term best solution hai.",
  },
];

const UNIT_ZONES = [
  {
    range: "0 – 180 Units",
    label: "Safe Zone",
    desc: "Protected category — bill kam aur predictable",
    bg: "bg-emerald-50 border-emerald-200",
    tc: "text-emerald-800",
  },
  {
    range: "180 – 200 Units",
    label: "Alert Zone",
    desc: "Dhyan rakhein — 201 unit trap ke bohat qareeb",
    bg: "bg-yellow-50 border-yellow-200",
    tc: "text-yellow-800",
  },
  {
    range: "201+ Units",
    label: "201 Unit Trap",
    desc: "Unprotected — sab units rebill — bada bill shock",
    bg: "bg-red-50 border-red-200",
    tc: "text-red-800",
  },
];

const QUALIFY_BOXES = [
  {
    icon: "✅",
    label: "Likely Protected",
    points: [
      "Monthly usage consistently under 200 units",
      "Residential domestic connection",
      "No commercial usage on same connection",
      "Consistent low-usage billing history",
    ],
    bg: "bg-emerald-50 border-emerald-200",
    textColor: "text-emerald-800",
    dotColor: "bg-emerald-600",
  },
  {
    icon: "❌",
    label: "Likely Unprotected",
    points: [
      "Monthly usage exceeds 200 units — 201 unit trap active",
      "Commercial, industrial or agriculture connection",
      "6+ months of high-usage history",
      "Government notification changes threshold",
    ],
    bg: "bg-red-50 border-red-200",
    textColor: "text-red-800",
    dotColor: "bg-red-600",
  },
];

const NAV_LINKS: [string, string][] = [
  ["Protected Consumer Kya Hai?", "#what-is"],
  ["Kaun Qualify Karta Hai?", "#qualifies"],
  ["201 Unit Trap — Warning", "#unit-trap"],
  ["6-Month Rule", "#six-month-rule"],
  ["199 vs 201 Units Table", "#comparison-199-201"],
  ["Bill Shock Predictor", "#bill-shock-predictor"],
  ["Protected vs Unprotected", "#comparison"],
  ["Slab Chart 2026", "#slab-chart"],
  ["AC Cost Calculator Guide", "#ac-calculator"],
  ["200 Units Ka Connection", "#units"],
  ["Bill Shock Se Kaise Bachein?", "#tips"],
  ["Districts Coverage", "#districts"],
  ["Urdu Guide — اردو گائیڈ", "#urdu"],
  ["Roman Urdu Khulaasa", "#roman"],
  ["FAQs — 10 Questions", "#faqs"],
];

const FAQ_DATA = [
  {
    q: "What is a protected consumer in MEPCO bill?",
    a: "A protected consumer is generally a low-consumption electricity user whose monthly units stay within the protected category — commonly up to 200 units per month. Under official NEPRA and government tariff rules, protected consumers receive lower slab rates. This applies across all 13 MEPCO districts including Multan, Bahawalpur, DG Khan and Sahiwal.",
    lang: "en",
  },
  {
    q: "What is the 201 Unit Trap in MEPCO billing?",
    a: "The 201 Unit Trap refers to the phenomenon where crossing 200 units by even 1 unit triggers a complete slab reset — meaning ALL units for that month get rebilled at higher unprotected rates. So 201 units can cost 2x to 3x more than 199 units. This is the most common cause of bill shock for MEPCO consumers across South Punjab.",
    lang: "en",
  },
  {
    q: "What is the 6-month rule for protected consumer status?",
    a: "The 6-month rule refers to the concept that consistent usage pattern over multiple billing cycles can affect consumer category determination under official NEPRA and PITC billing criteria. If a consumer regularly crosses the 200-unit threshold over several months, it may affect their billing category assessment. Always check your official MEPCO bill category field for your actual status.",
    lang: "en",
  },
  {
    q: "Protected consumer kya hota hai? (Roman Urdu)",
    a: "Protected consumer wo hota hai jiska monthly bijli ka usage aam tor par 200 units tak ho. Aise consumer ka bill official NEPRA rules ke mutabiq protected category mein calculate hota hai jisme lower slab rates lagti hain. Jab units 201 ya zyada ho jaayein to 201 unit trap active ho jaata hai aur bill dramatically barh jaata hai.",
    lang: "roman",
  },
  {
    q: "199 aur 201 units mein bill mein kitna farq hota hai? (Roman Urdu)",
    a: "199 units par aap protected consumer hain — bill relatively kam hoga, estimated Rs. 2,000 se 2,500 ke aas paas. 201 units par aap unprotected ho jaate hain aur 201 unit trap active ho jaata hai — poore 201 units higher rate pe rebill hote hain. Estimated bill Rs. 4,500 se 6,000 ya zyada ho sakta hai. Sirf 2 units ka farq bill ko 2x se 3x tak barha sakta hai.",
    lang: "roman",
  },
  {
    q: "محفوظ صارف کا کیا مطلب ہے؟ (Urdu)",
    a: "محفوظ صارف عام طور پر ایسے صارف کو کہا جاتا ہے جو ماہانہ 200 یونٹ تک بجلی استعمال کرتا ہے۔ نیپرا اور حکومت کے سرکاری ٹیرف قوانین کے تحت، محفوظ صارف کا بل کم سلیب ریٹ پر حساب کیا جاتا ہے۔ جب یونٹس 201 یا اس سے زیادہ ہو جائیں تو 201 یونٹ ٹریپ فعال ہو جاتا ہے اور تمام یونٹس زیادہ ریٹ پر دوبارہ حساب ہوتے ہیں۔",
    lang: "ur",
  },
  {
    q: "How can I stay in protected consumer category?",
    a: "To stay in protected consumer category and avoid the 201 Unit Trap, keep monthly usage within 200 units. Key tips: set AC at 26°C or higher, use LED bulbs, check meter reading on the 15th of every month (if over 100 units, reduce heavy appliance use), switch off standby appliances, and limit electric geysers and heaters. Use our MEPCO Bill Calculator to estimate your usage.",
    lang: "en",
  },
  {
    q: "Does protected consumer status change every month?",
    a: "Yes, protected or unprotected status is generally determined by each month's unit consumption. If you cross 201 units in a given month, that month's bill is calculated at unprotected rates — the 201 unit trap activates. Next month, if usage returns within 200 units, you may return to protected category. Official NEPRA and PITC rules govern exact determination.",
    lang: "en",
  },
  {
    q: "Bill shock kyun aata hai jab units 201 se zyada hon? (Roman Urdu)",
    a: "Bill shock is liye aata hai ke 201 unit trap mein poore month ke sare units — pehle unit se le kar aakhri tak — higher slab rate pe calculate hote hain. Matlab 201 units ka bill 199 units se dramatically zyada hoga. Bahut se consumers yeh soochte hain ke sirf 2-10 extra units se itna zyada bill kyun aaya — 201 unit trap aur slab reset effect yahi jawab hai.",
    lang: "roman",
  },
  {
    q: "NEPRA aur MEPCO mein protected consumer rules kaun decide karta hai?",
    a: "Protected consumer tariff rules primarily NEPRA (National Electric Power Regulatory Authority) decide karta hai. MEPCO inhi official rules ko apne billing system mein implement karti hai. Government kabhi kabhi special relief packages ya temporary tariff adjustments bhi announce karti hai jo protected consumer thresholds ko affect kar sakti hain. Is liye official NEPRA website aur government notifications follow karna zaroori hai.",
    lang: "roman",
  },
];

const RELATED_GUIDES = [
  { href: "/mepco-200-units-rule", label: "200 Units Rule" },
  { href: "/mepco-bill-slabs-guide", label: "Bill Slabs Guide" },
  { href: "/mepco-bill-calculator", label: "MEPCO Bill Calculator" },
  { href: "/mepco-fpa-charges-guide", label: "FPA Charges Guide" },
  { href: "/mepco-qta-charges-guide", label: "QTA Charges Guide" },
  { href: "/mepco-taxes-explained", label: "Taxes Explained" },
  { href: "/", label: "MEPCO Online Bill Check" },
  { href: "/mepco-solar-savings-calculator", label: "Solar Savings Calculator" },
  { href: "/mepco-new-connection-guide", label: "New Connection Guide" },
];

// Bill Shock predictor scenarios
const BILL_SHOCK_SCENARIOS = [
  {
    units: "180 Units",
    category: "Protected",
    risk: "Safe",
    action: "Aap safe zone mein hain — koi bill shock nahi",
    bg: "bg-emerald-50 border-emerald-300",
    badge: "bg-emerald-100 text-emerald-800",
    icon: "✅",
  },
  {
    units: "195 Units",
    category: "Protected",
    risk: "Alert",
    action: "Careful! 5 units ki gunjaishy — appliance use khatam karein",
    bg: "bg-yellow-50 border-yellow-300",
    badge: "bg-yellow-100 text-yellow-800",
    icon: "⚠️",
  },
  {
    units: "201 Units",
    category: "Unprotected",
    risk: "TRAP ACTIVE",
    action: "201 Unit Trap! Poore units rebill — bill 2x-3x ho jayega",
    bg: "bg-red-50 border-red-400",
    badge: "bg-red-100 text-red-800",
    icon: "🚨",
  },
  {
    units: "250 Units",
    category: "Unprotected",
    risk: "High",
    action: "Bada bill shock — turant usage kam karein next month",
    bg: "bg-red-100 border-red-400",
    badge: "bg-red-200 text-red-900",
    icon: "🔴",
  },
  {
    units: "300+ Units",
    category: "Unprotected",
    risk: "Extreme",
    action: "Maximum bill shock — solar ya energy audit zaroor karein",
    bg: "bg-red-200 border-red-500",
    badge: "bg-red-300 text-red-900",
    icon: "💥",
  },
];

// AC Cost data
const AC_COST_DATA = [
  {
    temp: "18°C",
    hoursPerDay: "8 hrs",
    monthlyUnits: "~210-240 units",
    risk: "201 Trap Active",
    riskColor: "text-red-600",
    bg: "bg-red-50",
  },
  {
    temp: "22°C",
    hoursPerDay: "8 hrs",
    monthlyUnits: "~170-190 units",
    risk: "Alert Zone",
    riskColor: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    temp: "24°C",
    hoursPerDay: "8 hrs",
    monthlyUnits: "~140-160 units",
    risk: "Safe Zone",
    riskColor: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    temp: "26°C",
    hoursPerDay: "8 hrs",
    monthlyUnits: "~110-130 units",
    risk: "Very Safe",
    riskColor: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    temp: "28°C",
    hoursPerDay: "8 hrs",
    monthlyUnits: "~85-100 units",
    risk: "Safest Zone",
    riskColor: "text-emerald-800",
    bg: "bg-emerald-100",
  },
];

// ═══════════════════════════════════════════════════
// ALL SCHEMAS
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
    headline: "MEPCO Protected Consumer 2026 — Complete Guide",
    description:
      "Complete guide explaining MEPCO protected consumer, 201 unit trap, 6-month rule, 199 vs 201 comparison, bill shock predictor and AC cost calculator.",
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
        name: "Protected Consumer Guide",
        item: PAGE_URL,
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MEPCO Protected Consumer 2026 — Complete Guide",
    url: PAGE_URL,
    description:
      "Complete guide — MEPCO protected consumer, 201 unit trap, 6-month rule, 199 vs 201 units, bill shock predictor.",
    isPartOf: {
      "@type": "WebSite",
      name: "MEPCO Online Bill",
      url: SITE_URL,
    },
    dateModified: LAST_UPDATED,
    inLanguage: ["en", "ur", "ur-Latn"],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Avoid the 201 Unit Trap and Stay in MEPCO Protected Consumer Category",
    description:
      "Step by step guide to keep monthly electricity usage within 200 units, avoid the 201 unit trap, and stay in the protected consumer category.",
    totalTime: "PT10M",
    step: TIPS_DATA.map((tip, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: tip.title,
      text: tip.tip,
    })),
  };

  return (
    <>
      {[faqSchema, articleSchema, breadcrumbSchema, webPageSchema, howToSchema].map(
        (schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )
      )}
    </>
  );
}

// ═══════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════
export default function MepcoProtectedConsumerGuidePage() {
  return (
    <main className="min-h-screen bg-[#f6faf7] text-slate-900">
      <AllSchemas />

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003d24] via-[#006b3a] to-[#071b14] px-5 py-16 text-white md:py-24">
        <div
          className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-[-140px] right-[-120px] h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-emerald-300">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-white">
                Protected Consumer Guide
              </li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-black text-emerald-100 backdrop-blur">
                <span aria-hidden="true">🛡️</span>&nbsp; MEPCO Consumer
                Status Guide 2026
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                MEPCO Protected Consumer —{" "}
                <span className="text-emerald-300">Complete Guide 2026</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
                Multan, Bahawalpur, DG Khan, Sahiwal aur tamam MEPCO districts
                ke consumers ke liye — protected consumer kya hota hai,{" "}
                <strong className="text-yellow-300">201 Unit Trap</strong>{" "}
                kya hai, <strong className="text-yellow-300">6-Month Rule</strong> kaise
                kaam karta hai, 199 vs 201 units mein bill ka farq, aur bill
                shock se kaise bacha jaye — complete guide.
              </p>

              <p className="mt-3 text-sm text-emerald-300">
                Last updated: <time dateTime={LAST_UPDATED}>June 2026</time>
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/mepco-200-units-rule"
                  className="rounded-2xl bg-white px-6 py-4 font-black text-[#005b2e] shadow-xl transition hover:-translate-y-1"
                >
                  Read 200 Units Rule
                </Link>
                <Link
                  href="/mepco-bill-calculator"
                  className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/20"
                >
                  Use Bill Calculator
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <p className="text-sm font-black uppercase tracking-widest text-emerald-100">
                Quick Answer
              </p>
              <h2 className="mt-4 text-3xl font-black">
                Protected = Under 200 Units
              </h2>
              <p className="mt-4 leading-8 text-emerald-50">
                Cross 200 units = 201 Unit Trap = Slab Reset = Bill Shock
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-white p-5 text-slate-900">
                  <p className="text-sm font-bold text-slate-500">
                    Protected Limit
                  </p>
                  <p className="mt-1 text-2xl font-black text-emerald-700">
                    Up to 200 Units / Month
                  </p>
                </div>
                <div className="rounded-2xl bg-orange-50 p-5 text-slate-900">
                  <p className="text-sm font-bold text-orange-600">
                    201 Unit Trap
                  </p>
                  <p className="mt-1 text-xl font-black text-orange-800">
                    1 extra unit = Full slab reset
                  </p>
                </div>
                <div className="rounded-2xl bg-red-50 p-5 text-slate-900">
                  <p className="text-sm font-bold text-red-600">
                    6-Month Rule
                  </p>
                  <p className="mt-1 text-base font-black text-red-800">
                    Consistent overuse affects long-term category status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Top */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-widest text-slate-400">
            Advertisement
          </p>
          <p className="mt-2 text-slate-500">
            Google AdSense responsive ad space
          </p>
        </div>
      </section>

      {/* Quick Cards */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="grid gap-5 md:grid-cols-4">
          {QUICK_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl" aria-hidden="true">
                {card.icon}
              </div>
              <h2 className="mt-4 text-xl font-black text-[#005b2e]">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile TOC */}
      <nav
        aria-label="Table of Contents"
        className="mx-auto max-w-7xl px-5 pb-4 lg:hidden"
      >
        <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
          <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
            <span aria-hidden="true">📑</span> Is Page Par Kya Hai?
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="underline underline-offset-2 hover:text-[#005b2e]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ════════════════════════════════════
          MAIN 2-COLUMN LAYOUT
      ════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* STICKY SIDEBAR */}
          <aside className="h-fit rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl lg:sticky lg:top-24">
            <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
              Page Navigation
            </p>
            <nav aria-label="Section Navigation">
              <div className="mt-5 grid gap-2">
                {NAV_LINKS.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-2xl border border-emerald-100 bg-[#f6faf7] px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-[#005b2e]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="mt-6 rounded-2xl bg-[#005b2e] p-5 text-white">
              <h3 className="text-xl font-black">Check Bill Risk</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                Bill calculator se units, slab alert aur 201-unit trap check
                karein.
              </p>
              <Link
                href="/mepco-bill-calculator"
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-black text-[#005b2e] transition hover:bg-emerald-50"
              >
                Open Calculator →
              </Link>
            </div>
          </aside>

          {/* MAIN ARTICLES */}
          <div className="space-y-8">
            {/* ── 1. WHAT IS PROTECTED CONSUMER ── */}
            <article
              id="what-is"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
                Complete Explanation
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#8B0000] md:text-4xl">
                What Is a Protected Consumer in MEPCO Bill?
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                A <strong>protected consumer</strong> is generally a
                low-electricity usage consumer whose monthly units stay within
                the protected category — commonly{" "}
                <strong>up to 200 units per month</strong>. Under official{" "}
                <strong>
                  NEPRA (National Electric Power Regulatory Authority)
                </strong>{" "}
                and government tariff rules, protected consumers receive lower
                slab rates compared to unprotected consumers.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                This topic became extremely important across Pakistan — and
                especially in MEPCO coverage areas like Multan, Bahawalpur,
                DG Khan, and Sahiwal — when consumers started experiencing the{" "}
                <strong>201 Unit Trap</strong>: crossing 200 units by even 1
                unit causes the entire bill to be recalculated at higher
                unprotected slab rates, creating massive{" "}
                <strong>bill shock</strong>. Use our{" "}
                <Link
                  href="/mepco-bill-calculator"
                  className="font-bold text-[#005b2e] underline underline-offset-2"
                >
                  MEPCO Bill Calculator
                </Link>{" "}
                to estimate your usage.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                MEPCO implements these rules as defined by{" "}
                <strong>
                  PITC (Pakistan Industrial and Technical Consultancy Centre)
                </strong>{" "}
                and NEPRA. The protected consumer category primarily applies
                to residential connections, and the exact thresholds can
                change when government announces new tariff decisions. Read
                our detailed{" "}
                <Link
                  href="/mepco-200-units-rule"
                  className="font-bold text-[#005b2e] underline underline-offset-2"
                >
                  200 Units Rule Guide
                </Link>{" "}
                for complete details.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
                  <h3 className="text-2xl font-black text-green-800">
                    <span aria-hidden="true">🛡️</span> Protected Consumer
                  </h3>
                  <ul className="mt-3 space-y-2 text-green-900">
                    {[
                      "Monthly usage up to ~200 units",
                      "Lower slab rates apply",
                      "Lower FPA and QTA charges",
                      "Lower overall tax burden",
                      "Often eligible for govt relief",
                    ].map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-600"
                          aria-hidden="true"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
                  <h3 className="text-2xl font-black text-orange-800">
                    <span aria-hidden="true">⚠️</span> Unprotected Consumer
                  </h3>
                  <ul className="mt-3 space-y-2 text-orange-900">
                    {[
                      "201+ units — 201 Unit Trap active",
                      "ALL units rebilled at higher rates",
                      "Higher FPA charges",
                      "Higher overall tax amount",
                      "Sudden large bill shock",
                    ].map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600"
                          aria-hidden="true"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* ── 2. WHO QUALIFIES ── */}
            <article
              id="qualifies"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                Kaun Qualify Karta Hai Protected Consumer Ke Liye?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Protected consumer eligibility depends on official electricity
                billing rules, monthly usage pattern and billing history. The
                most commonly discussed criteria:{" "}
                <strong>monthly usage up to 200 units</strong> for residential
                domestic connections. Check your current{" "}
                <Link
                  href="/"
                  className="font-bold text-[#005b2e] underline underline-offset-2"
                >
                  MEPCO bill online
                </Link>{" "}
                to see your category field.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {QUALIFY_BOXES.map((box) => (
                  <div
                    key={box.label}
                    className={`rounded-2xl border p-5 ${box.bg}`}
                  >
                    <h3 className={`text-lg font-black ${box.textColor}`}>
                      <span aria-hidden="true">{box.icon}</span> {box.label}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {box.points.map((point, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm ${box.textColor}`}
                        >
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${box.dotColor}`}
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-yellow-200 bg-yellow-50 p-6">
                <h3 className="text-xl font-black text-yellow-900">
                  <span aria-hidden="true">⚠️</span> Important Disclaimer
                </h3>
                <p className="mt-3 leading-8 text-yellow-900">
                  This page explains the concept for consumer education.
                  Final protected or unprotected status depends on official
                  MEPCO, PITC, NEPRA and Government of Pakistan billing
                  rules. Always refer to your official printed bill for
                  definitive status. See our{" "}
                  <Link
                    href="/mepco-bill-slabs-guide"
                    className="font-bold underline"
                  >
                    Bill Slabs Guide
                  </Link>{" "}
                  for more.
                </p>
              </div>
            </article>

            {/* ── 3. NEW: 201 UNIT TRAP ── */}
            <article
              id="unit-trap"
              className="scroll-mt-8 rounded-[2rem] border-2 border-red-300 bg-white p-7 shadow-xl md:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl" aria-hidden="true">🚨</span>
                <p className="text-sm font-black uppercase tracking-widest text-red-600">
                  Most Critical Warning
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-black text-red-800 md:text-4xl">
                201 Unit Trap — MEPCO Ka Sab Se Bada Bill Shock Reason
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                The <strong>201 Unit Trap</strong> is the single most common
                cause of unexpected electricity bill shock for MEPCO consumers
                across all 13 districts of South Punjab. Here is exactly what
                happens:
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <h3 className="font-black text-emerald-900">
                    Scenario A — 199 Units (Protected)
                  </h3>
                  <p className="mt-2 leading-7 text-emerald-800">
                    Aap 199 units use karte hain. Bill protected category mein
                    calculate hota hai — lower slab rates. Bill relatively
                    normal aata hai. FPA, QTA, taxes sab lower base par
                    lagte hain.
                  </p>
                </div>

                <div className="rounded-2xl bg-red-50 p-5">
                  <h3 className="font-black text-red-900">
                    Scenario B — 201 Units (201 Unit Trap Active)
                  </h3>
                  <p className="mt-2 leading-7 text-red-800">
                    Aap 201 units use karte hain — sirf{" "}
                    <strong>2 units zyada</strong>. Ab 201 Unit Trap active ho
                    jaata hai:
                  </p>
                  <ul className="mt-3 space-y-2 pl-4 text-red-800">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                      <strong>Slab Reset:</strong> Poore 201 units higher
                      unprotected rate pe rebill hote hain — pehle unit se
                      le kar aakhri tak
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                      <strong>FPA Impact:</strong> Higher base par FPA
                      charges lagti hain —{" "}
                      <Link
                        href="/mepco-fpa-charges-guide"
                        className="underline"
                      >
                        FPA Guide
                      </Link>{" "}
                      dekhein
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                      <strong>QTA Impact:</strong> Higher base par QTA bhi
                      barh jaata hai —{" "}
                      <Link
                        href="/mepco-qta-charges-guide"
                        className="underline"
                      >
                        QTA Guide
                      </Link>{" "}
                      dekhein
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                      <strong>Tax Impact:</strong> GST aur other taxes bhi
                      higher bill par lagte hain —{" "}
                      <Link
                        href="/mepco-taxes-explained"
                        className="underline"
                      >
                        Taxes Guide
                      </Link>{" "}
                      dekhein
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                      <strong>Result:</strong> Bill 2x se 3x zyada aa sakta
                      hai — sirf 2 units ki wajah se
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
                <h3 className="font-black text-yellow-300">
                  201 Unit Trap — Simple Formula
                </h3>
                <div className="mt-3 grid gap-3 text-center sm:grid-cols-3">
                  <div className="rounded-xl bg-emerald-800 p-3">
                    <p className="text-2xl font-black">199 Units</p>
                    <p className="text-sm text-emerald-200">Protected ✅</p>
                    <p className="mt-1 text-xs text-emerald-300">
                      ~Rs. 2,000-2,500
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-3xl">
                    →
                  </div>
                  <div className="rounded-xl bg-red-800 p-3">
                    <p className="text-2xl font-black">201 Units</p>
                    <p className="text-sm text-red-200">TRAP Active 🚨</p>
                    <p className="mt-1 text-xs text-red-300">
                      ~Rs. 4,500-6,000+
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-center text-sm text-slate-300">
                  Sirf 2 extra units = 2x to 3x zyada bill
                </p>
              </div>
            </article>

            {/* ── 4. NEW: 6-MONTH RULE ── */}
            <article
              id="six-month-rule"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl" aria-hidden="true">📅</span>
                <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
                  Long-Term Impact
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-black text-[#005b2e]">
                6-Month Rule — Continuous Usage Pattern Ka Asar
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The <strong>6-Month Rule</strong> refers to the concept that
                your <strong>continuous usage pattern over multiple billing cycles</strong>{" "}
                can affect consumer category determination under official
                NEPRA and PITC billing criteria. This is why simply having
                one bad month is different from consistently crossing the
                200-unit threshold over many months.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="text-lg font-black text-emerald-900">
                    <span aria-hidden="true">✅</span> Safe Pattern
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-emerald-800">
                    Agar aap zyada tar mahino mein 200 units ke andar rehte
                    hain — sirf kabhi kabhi (jaise garmiyoon mein) thoda
                    zyada hota hai — to aapki overall billing profile better
                    rehti hai.
                  </p>
                  <div className="mt-3 flex gap-1">
                    {["✅", "✅", "⚠️", "✅", "✅", "✅"].map((s, i) => (
                      <span key={i} className="text-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-emerald-700">
                    6 mahine pattern — mostly protected
                  </p>
                </div>

                <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
                  <h3 className="text-lg font-black text-red-900">
                    <span aria-hidden="true">❌</span> Risky Pattern
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-red-800">
                    Agar aap lagatar 6+ mahino se consistently 200+ units
                    use karte hain — to yeh pattern aapki long-term billing
                    category ko affect kar sakta hai under official criteria.
                  </p>
                  <div className="mt-3 flex gap-1">
                    {["❌", "❌", "❌", "❌", "❌", "❌"].map((s, i) => (
                      <span key={i} className="text-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-red-700">
                    6 mahine pattern — consistently unprotected
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-amber-50 p-5">
                <h3 className="font-black text-amber-900">
                  <span aria-hidden="true">💡</span> 6-Month Rule Ka Practical
                  Matlab
                </h3>
                <p className="mt-2 leading-7 text-amber-800">
                  Sirf ek mahine ka bill zyada aana ek alag baat hai. Lekin
                  agar aap har mahine 200+ units use kar rahe hain to yeh
                  pattern aapki billing history mein record hota hai. Isliye
                  long-term mein bhi 200 unit limit ka dhyan rakhna zaroori
                  hai. Check karein{" "}
                  <Link
                    href="/mepco-bill-calculator"
                    className="font-bold underline"
                  >
                    Bill Calculator
                  </Link>{" "}
                  se apna monthly average.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600">
                  <strong>Official Note:</strong> The exact 6-month rule
                  implementation depends on current NEPRA and PITC billing
                  criteria. Always refer to official MEPCO billing guidelines
                  for definitive information. See our{" "}
                  <Link
                    href="/mepco-200-units-rule"
                    className="font-bold text-[#005b2e] underline"
                  >
                    200 Units Rule Guide
                  </Link>{" "}
                  for more context.
                </p>
              </div>
            </article>

            {/* ── 5. NEW: 199 vs 201 COMPARISON ── */}
            <article
              id="comparison-199-201"
              className="scroll-mt-8 rounded-[2rem] border-2 border-red-200 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-red-600">
                Real Comparison — Most Searched
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#8B0000]">
                199 vs 201 Units — Bill Mein Kitna Farq?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Yeh Pakistan mein sab se zyada search hone wala electricity
                bill question hai. Sirf <strong>2 units</strong> ka farq bill
                mein <strong>2x to 3x</strong> ka farq kaise dalta hai? Yahan
                exact comparison hai:
              </p>

              <div className="mt-6 overflow-x-auto rounded-3xl border-2 border-red-100">
                <table className="w-full min-w-[480px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-4 text-left font-black">
                        Factor
                      </th>
                      <th className="p-4 text-center font-black text-emerald-300">
                        199 Units <span aria-hidden="true">✅</span>
                      </th>
                      <th className="p-4 text-center font-black text-red-300">
                        201 Units <span aria-hidden="true">🚨</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {COMPARISON_199_201.map((row, i) => (
                      <tr
                        key={i}
                        className={
                          row.highlight
                            ? i % 2 === 0
                              ? "bg-amber-50"
                              : "bg-amber-100"
                            : i % 2 === 0
                              ? "bg-white"
                              : "bg-slate-50"
                        }
                      >
                        <td
                          className={`p-4 font-bold ${row.highlight ? "text-slate-900" : "text-slate-700"}`}
                        >
                          {row.highlight && (
                            <span className="mr-1 text-amber-500">★</span>
                          )}
                          {row.factor}
                        </td>
                        <td className="p-4 text-center text-emerald-700">
                          {row.u199}
                        </td>
                        <td className="p-4 text-center font-bold text-red-700">
                          {row.u201}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                ★ = Most impactful comparison factors. Bill estimates are
                approximate — use{" "}
                <Link
                  href="/mepco-bill-calculator"
                  className="font-bold text-[#005b2e] underline"
                >
                  MEPCO Bill Calculator
                </Link>{" "}
                for exact calculation. Actual amounts depend on current
                NEPRA tariff rates.
              </p>

              <div className="mt-5 rounded-2xl bg-red-900 p-5 text-white">
                <h3 className="font-black text-yellow-300">
                  <span aria-hidden="true">🔑</span> Key Takeaway
                </h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  199 units pe aap protected consumer hain. 201 units pe 201
                  Unit Trap activate ho jaata hai aur bill 2x se 3x zyada
                  aa sakta hai. Is liye 200 unit limit se 5-10 units ka
                  buffer rakhna best practice hai.
                </p>
              </div>
            </article>

            {/* ── 6. NEW: BILL SHOCK PREDICTOR ── */}
            <article
              id="bill-shock-predictor"
              className="scroll-mt-8 rounded-[2rem] border-2 border-orange-200 bg-white p-7 shadow-xl md:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl" aria-hidden="true">🔮</span>
                <p className="text-sm font-black uppercase tracking-widest text-orange-600">
                  Bill Shock Predictor
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-black text-[#005b2e]">
                Apna Bill Shock Risk Check Karein
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Apni monthly units dhoondhein aur neechay table mein dekh
                kar apna bill shock risk identify karein. Exact calculation
                ke liye hamare{" "}
                <Link
                  href="/mepco-bill-calculator"
                  className="font-bold text-[#005b2e] underline underline-offset-2"
                >
                  MEPCO Bill Calculator
                </Link>{" "}
                use karein:
              </p>

              <div className="mt-6 space-y-3">
                {BILL_SHOCK_SCENARIOS.map((scenario, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border-2 p-5 ${scenario.bg}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" aria-hidden="true">
                          {scenario.icon}
                        </span>
                        <div>
                          <p className="text-lg font-black text-slate-900">
                            {scenario.units}
                          </p>
                          <p className="text-sm text-slate-600">
                            {scenario.action}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-black ${scenario.badge}`}
                        >
                          {scenario.category}
                        </span>
                        <p className="mt-1 text-xs font-bold text-slate-600">
                          Risk: {scenario.risk}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[#005b2e] p-6 text-white">
                <h3 className="text-xl font-black">
                  <span aria-hidden="true">🧮</span> Exact Bill Calculate
                  Karein
                </h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Bill Shock Predictor se idea milta hai — exact amount ke
                  liye hamare MEPCO Bill Calculator mein apne units enter
                  karein. FPA, QTA, taxes sab include hain.
                </p>
                <Link
                  href="/mepco-bill-calculator"
                  className="mt-4 inline-flex rounded-xl bg-white px-6 py-3 font-black text-[#005b2e] transition hover:bg-emerald-50"
                >
                  Open Bill Calculator →
                </Link>
              </div>
            </article>

            {/* ── 7. FULL COMPARISON TABLE ── */}
            <article
              id="comparison"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#8B0000]">
                Protected vs Unprotected Consumer — Full Comparison
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Complete comparison covering all major bill components. See
                also our{" "}
                <Link
                  href="/mepco-bill-slabs-guide"
                  className="font-bold text-[#005b2e] underline underline-offset-2"
                >
                  Bill Slabs Guide
                </Link>{" "}
                for detailed slab breakdown.
              </p>

              <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[480px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-4 text-left font-black">Feature</th>
                      <th className="p-4 text-center font-black text-green-300">
                        <span aria-hidden="true">🛡️</span> Protected
                      </th>
                      <th className="p-4 text-center font-black text-orange-300">
                        <span aria-hidden="true">⚠️</span> Unprotected
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {FULL_COMPARISON_ROWS.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="p-4 font-bold text-slate-800">
                          {row.feature}
                        </td>
                        <td className="p-4 text-center text-emerald-700">
                          {row.protected}
                        </td>
                        <td className="p-4 text-center text-orange-700">
                          {row.unprotected}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-2xl bg-red-50 p-5">
                <h3 className="font-black text-red-800">
                  <span aria-hidden="true">🔴</span> Most Critical — Slab
                  Reset Effect (201 Unit Trap)
                </h3>
                <p className="mt-2 leading-7 text-red-700">
                  Jab aap unprotected category mein jaate hain to sirf extra
                  units pe nahi — balke{" "}
                  <strong>
                    poore month ke sare units higher rate pe rebill ho jaate
                    hain.
                  </strong>{" "}
                  This is the 201 Unit Trap. FPA charges ke baare mein
                  detail ke liye{" "}
                  <Link
                    href="/mepco-fpa-charges-guide"
                    className="font-bold underline"
                  >
                    FPA Guide
                  </Link>{" "}
                  aur QTA ke liye{" "}
                  <Link
                    href="/mepco-qta-charges-guide"
                    className="font-bold underline"
                  >
                    QTA Guide
                  </Link>{" "}
                  dekhein.
                </p>
              </div>
            </article>

            {/* ── 8. SLAB CHART ── */}
            <article
              id="slab-chart"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                MEPCO Bill Slab Chart 2026
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Different unit ranges mein consumer category aur bill risk
                ka complete chart. Full slab details ke liye hamare{" "}
                <Link
                  href="/mepco-bill-slabs-guide"
                  className="font-bold text-[#005b2e] underline underline-offset-2"
                >
                  Bill Slabs Guide
                </Link>{" "}
                dekhein:
              </p>

              <div className="mt-6 space-y-3">
                {SLAB_DATA.map((slab, i) => (
                  <div
                    key={i}
                    className={`rounded-2xl border p-5 ${slab.bg} ${slab.border}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-lg font-black text-slate-900">
                          {slab.range}
                        </p>
                        <p className="text-sm text-slate-600">
                          {slab.detail}
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-black ${slab.badge}`}
                        >
                          {slab.category}
                        </span>
                        <p
                          className={`mt-1 text-sm font-bold ${slab.riskColor}`}
                        >
                          Risk: {slab.risk}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
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

            {/* ── 9. NEW: AC COST CALCULATOR ── */}
            <article
              id="ac-calculator"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl" aria-hidden="true">❄️</span>
                <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                  AC Cost Calculator Guide
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-black text-[#005b2e]">
                AC Temperature vs Monthly Units — Calculator Guide
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                AC Pakistan mein bijli bill ka sab se bada culprit hai —
                aur akela AC hi aapko <strong>201 Unit Trap</strong> mein
                dhakel sakta hai. Yeh chart dikhata hai ke different
                temperatures par monthly units approximately kitne hote hain
                (1.5 ton inverter AC, 8 hrs/day usage assume kiya gaya hai):
              </p>

              <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[480px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-4 text-left font-black">
                        AC Temperature
                      </th>
                      <th className="p-4 text-center font-black">
                        Daily Usage
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
                      <tr
                        key={i}
                        className={`${row.bg} ${i % 2 === 0 ? "" : "opacity-90"}`}
                      >
                        <td className="p-4 text-2xl font-black text-slate-900">
                          {row.temp}
                        </td>
                        <td className="p-4 text-center text-slate-700">
                          {row.hoursPerDay}
                        </td>
                        <td className="p-4 text-center font-bold text-slate-800">
                          {row.monthlyUnits}
                        </td>
                        <td className={`p-4 text-center font-black ${row.riskColor}`}>
                          {row.risk}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                * Estimates based on 1.5 ton inverter AC, 8 hours daily
                usage. Actual units depend on AC brand, insulation, room
                size and outdoor temperature. These are AC-only units —
                add all other appliances for total monthly consumption.
              </p>

              <div className="mt-5 rounded-2xl bg-blue-50 p-5">
                <h3 className="font-black text-blue-900">
                  <span aria-hidden="true">❄️</span> AC Ka 201 Unit Trap
                  Connection
                </h3>
                <p className="mt-2 leading-7 text-blue-800">
                  Agar aap 18°C par AC chalate hain — to sirf AC se{" "}
                  <strong>210-240 units</strong> monthly ho sakte hain. Agar
                  ghar ke baaki appliances ka usage add karein to total
                  easily 300+ ho jaata hai. Yeh seedha 201 Unit Trap mein
                  girata hai. Solution:{" "}
                  <strong>26°C setting + AC 8 hrs/day</strong> se AC ka
                  monthly contribution sirf 110-130 units rehta hai. Use{" "}
                  <Link
                    href="/mepco-bill-calculator"
                    className="font-bold underline"
                  >
                    Bill Calculator
                  </Link>{" "}
                  to calculate your total.
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-emerald-900 p-5 text-white">
                <h3 className="font-black">
                  <span aria-hidden="true">☀️</span> Solar Energy — Best
                  Long-Term Solution
                </h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Agar AC use zaroorat se zyada hai aur 200 unit limit se
                  consistently zyada ho rahi hai — to solar energy best
                  long-term investment hai. Check karein hamara{" "}
                  <Link
                    href="/mepco-solar-savings-calculator"
                    className="font-bold text-white underline"
                  >
                    Solar Savings Calculator
                  </Link>
                  .
                </p>
              </div>
            </article>

            {/* ── 10. 200 UNITS CONNECTION ── */}
            <article
              id="units"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                200 Units Rule Aur Protected Consumer Ka Connection
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The <strong>200 units rule</strong> is directly connected to
                the 201 Unit Trap. When monthly units cross 200, the entire
                bill is recalculated — this is why we see{" "}
                <strong>massive bill jumps</strong> from seemingly small
                increases in usage. Read our complete{" "}
                <Link
                  href="/mepco-200-units-rule"
                  className="font-bold text-[#005b2e] underline underline-offset-2"
                >
                  200 Units Rule Guide
                </Link>{" "}
                for all details.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {UNIT_ZONES.map((zone) => (
                  <div
                    key={zone.range}
                    className={`rounded-2xl border p-5 text-center ${zone.bg}`}
                  >
                    <p className={`text-xl font-black ${zone.tc}`}>
                      {zone.range}
                    </p>
                    <p className={`mt-1 font-black ${zone.tc}`}>
                      {zone.label}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      {zone.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/mepco-200-units-rule"
                  className="inline-flex rounded-2xl bg-[#005b2e] px-6 py-4 font-black text-white transition hover:bg-[#004221]"
                >
                  200 Units Rule Ki Puri Guide Padhein →
                </Link>
              </div>
            </article>

            {/* ── 11. TIPS ── */}
            <article
              id="tips"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#8B0000]">
                201 Unit Trap Se Kaise Bachein? — 6 Practical Tips
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Protected consumer category mein rehne aur 201 unit trap se
                bachne ke liye yeh 6 proven tips. Use karein hamare{" "}
                <Link
                  href="/mepco-bill-calculator"
                  className="font-bold text-[#005b2e] underline underline-offset-2"
                >
                  Bill Calculator
                </Link>{" "}
                to track monthly progress:
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {TIPS_DATA.map((tip, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-emerald-100 bg-[#f6faf7] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" aria-hidden="true">
                        {tip.icon}
                      </span>
                      <h3 className="text-lg font-black text-[#005b2e]">
                        {tip.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-700">
                      {tip.tip}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-emerald-900 p-5 text-white">
                <h3 className="font-black">
                  <span aria-hidden="true">💡</span> 201 Unit Trap Se
                  Bachne Ka #1 Tip
                </h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">
                  Mahine ke 15 din baad meter reading lein. Agar 100 units
                  paar ho chuki hain to baki 15 din mein heavy appliances
                  ka use kam karein. Yeh simple check 201 unit trap se
                  bachata hai. Check{" "}
                  <Link
                    href="/mepco-bill-calculator"
                    className="font-bold text-white underline"
                  >
                    Bill Calculator
                  </Link>{" "}
                  for mid-month estimate.
                </p>
              </div>
            </article>

            {/* ── 12. DISTRICTS ── */}
            <article
              id="districts"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                MEPCO Coverage — 13 Districts
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                201 Unit Trap aur protected consumer rules MEPCO ke tamam
                13 districts par equally apply hote hain — Multan se
                Rajanpur tak, Bahawalpur se DG Khan tak:
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
                <strong>Note:</strong> Protected consumer status, 201 unit
                trap, 6-month rule aur slab reset effect in tamam 13
                districts mein same tareeqe se apply hota hai. MEPCO billing
                system NEPRA aur PITC ke national rules follow karta hai.
              </p>
            </article>

            {/* ── 13. URDU GUIDE ── */}
            <article
              id="urdu"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
              lang="ur"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
                Urdu Guide
              </p>
              <h2
                className="mt-3 text-3xl font-black text-[#8B0000]"
                dir="rtl"
              >
                میپکو محفوظ صارف — مکمل اردو گائیڈ
              </h2>

              <div
                dir="rtl"
                className="mt-6 space-y-6 leading-9 text-slate-700"
              >
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    محفوظ صارف کیا ہوتا ہے؟
                  </h3>
                  <p className="mt-3">
                    محفوظ صارف عام طور پر ایسے صارف کو کہا جاتا ہے جو ماہانہ
                    200 یونٹ تک بجلی استعمال کرتا ہے۔ نیپرا اور حکومت کے
                    سرکاری ٹیرف قوانین کے تحت، محفوظ صارف کا بل کم سلیب ریٹ
                    پر حساب کیا جاتا ہے۔
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    201 یونٹ ٹریپ کیا ہے؟
                  </h3>
                  <p className="mt-3">
                    201 یونٹ ٹریپ وہ صورتحال ہے جب صارف 200 یونٹ سے صرف 1
                    یونٹ زیادہ استعمال کرتا ہے اور پورے مہینے کے تمام یونٹس
                    زیادہ غیر محفوظ ریٹ پر دوبارہ حساب ہوتے ہیں۔ اسے
                    &quot;سلیب ری سیٹ&quot; کہتے ہیں — یہی وجہ ہے کہ صرف 2
                    یونٹ اضافی ہونے سے بل 2 سے 3 گنا بڑھ جاتا ہے۔
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    6 ماہ کا اصول
                  </h3>
                  <p className="mt-3">
                    اگر صارف مسلسل 6 یا زیادہ مہینوں سے 200 یونٹ سے زیادہ
                    استعمال کرتا ہے تو یہ مسلسل نمونہ طویل مدتی بلنگ
                    کیٹیگری کو متاثر کر سکتا ہے۔ اس لیے صرف ایک مہینے نہیں
                    بلکہ ہر مہینے 200 یونٹ کی حد کا خیال رکھنا ضروری ہے۔
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    199 بمقابلہ 201 یونٹس
                  </h3>
                  <p className="mt-3">
                    199 یونٹس پر آپ محفوظ صارف ہیں اور بل تقریباً 2,000 سے
                    2,500 روپے ہو سکتا ہے۔ 201 یونٹس پر 201 یونٹ ٹریپ فعال
                    ہو جاتا ہے اور بل 4,500 سے 6,000 روپے یا اس سے بھی زیادہ
                    ہو سکتا ہے۔ صرف 2 یونٹ کا فرق بل کو 2 سے 3 گنا بڑھا
                    سکتا ہے۔
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    محفوظ صارف کیٹیگری میں رہنے کے طریقے
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      "اے سی کو 26 ڈگری سنٹی گریڈ پر رکھیں",
                      "ایل ای ڈی بلب استعمال کریں",
                      "موٹر کا وقت مقرر کریں — دن میں صرف دو مرتبہ",
                      "مہینے کے 15 دن بعد میٹر ریڈنگ خود لیں",
                      "بجلی کی ہیٹر اور گیزر کم استعمال کریں",
                      "سٹینڈ بائی آلات کا پلگ نکالیں",
                    ].map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
                          aria-hidden="true"
                        />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-emerald-50 p-6">
                  <h3 className="text-xl font-black text-emerald-900">
                    آسان مشورہ
                  </h3>
                  <p className="mt-3 leading-9 text-emerald-950">
                    مہینے کے 15 دن بعد اگر یونٹس 100 سے اوپر جا رہے ہوں تو
                    باقی 15 دنوں میں اے سی، موٹر، استری اور زیادہ بجلی لینے
                    والی چیزوں کا استعمال احتیاط سے کریں۔ 201 یونٹ ٹریپ سے
                    بچنے کا یہ سب سے آسان طریقہ ہے۔
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    یہ گائیڈ کن صارفین کے لیے ہے؟
                  </h3>
                  <p className="mt-3">
                    یہ گائیڈ میپکو کے تمام 13 اضلاع کے صارفین کے لیے ہے:
                    ملتان، بہاولپور، رحیم یار خان، ڈی جی خان، ساہیوال،
                    وہاڑی، خانیوال، مظفرگڑھ، لیہ، راجن پور، لودھراں، پاکپتن
                    اور بہاولنگر۔
                  </p>
                </div>
              </div>
            </article>

            {/* ── 14. ROMAN URDU ── */}
            <article
              id="roman"
              className="scroll-mt-8 rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
                Roman Urdu Guide
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#8B0000]">
                Protected Consumer, 201 Unit Trap, 6-Month Rule — Roman Urdu
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                <strong>Protected consumer</strong> wo hota hai jiska monthly
                bijli usage <strong>200 units tak</strong> ho. Bill official
                NEPRA rules ke mutabiq protected category mein calculate hota
                hai — lower slab rates lagti hain aur bill kam aata hai.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                <strong>201 Unit Trap</strong> tab active hoti hai jab units
                200 se sirf 1 zyada ho jaayein — 201 ya upar. Is mein poore
                month ke sare units higher unprotected rate pe{" "}
                <strong>rebill</strong> ho jaate hain. Isi ko{" "}
                <strong>&quot;slab reset&quot;</strong> kehte hain — aur yeh
                Pakistan mein sab se bada bill shock reason hai.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                <strong>6-Month Rule</strong> ka matlab hai ke agar aap
                lagatar 6 mahine se consistently 200+ units use karte hain —
                to yeh pattern aapki long-term billing category ko affect kar
                sakta hai. Isliye har mahine 200 unit limit ka dhyan rakhna
                zaroori hai.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {UNIT_ZONES.map((zone) => (
                  <div
                    key={zone.range}
                    className={`rounded-2xl border p-5 text-center ${zone.bg}`}
                  >
                    <p className={`text-xl font-black ${zone.tc}`}>
                      {zone.range}
                    </p>
                    <p className={`mt-1 font-black ${zone.tc}`}>
                      {zone.label}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      {zone.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-black">
                  <span aria-hidden="true">⚡</span> Roman Urdu Quick Summary
                </h3>
                <ul className="mt-3 space-y-2 pl-2 text-slate-700">
                  {[
                    ["Protected consumer =", "200 units tak — bill kam"],
                    ["201 Unit Trap =", "1 extra unit = full slab reset"],
                    ["199 units ka bill =", "~Rs. 2,000-2,500"],
                    ["201 units ka bill =", "~Rs. 4,500-6,000+ (2x-3x)"],
                    ["6-Month Rule =", "Lagatar overuse = category impact"],
                    ["Bachne ka #1 tip =", "15 tarikh ko meter check karein"],
                    ["AC setting =", "26°C — 201 trap se bachao"],
                    ["NEPRA =", "Official tariff rules decide karta hai"],
                  ].map(([key, val], i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="font-bold text-slate-800">{key}</span>
                      <span className="font-black text-[#005b2e]">{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="scroll-mt-8 bg-[#eef8f1] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-[#005b2e]">
            FAQs
          </p>
          <h2 className="mt-3 text-center text-4xl font-black text-[#8B0000]">
            MEPCO Protected Consumer — 10 FAQs
          </h2>
          <p className="mt-2 text-center text-sm text-slate-500">
            English, Roman Urdu aur Urdu — 201 Unit Trap, 6-Month Rule sab
            covered
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
                  className="text-xl font-black text-[#005b2e]"
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

      {/* Related Guides */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-xl md:p-12">
          <h2 className="text-3xl font-black text-[#005b2e]">
            Related MEPCO Guides — Aur Seekhein
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {RELATED_GUIDES.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-emerald-100 bg-[#f6faf7] p-5 font-black text-[#005b2e] transition hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-lg"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Footer */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-widest text-slate-400">
            Advertisement
          </p>
          <p className="mt-2 text-slate-500">
            Footer AdSense ad space
          </p>
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
        . Guide covers MEPCO protected consumer, 201 unit trap, 6-month
        rule for all 13 districts of South Punjab, Pakistan. Final status
        depends on official NEPRA and government billing rules.
      </p>
    </main>
  );
}