import type { Metadata } from "next";
import Link from "next/link";

// ═══════════════════════════════════════════════════════════════
// SEO METADATA — Fixed: Title <60 chars, Description <155 chars
// ═══════════════════════════════════════════════════════════════
export const metadata: Metadata = {
  title: "MEPCO Bill Check by CNIC Online 2026 Guide",
  description:
    "Can you check MEPCO bill by CNIC? Learn the safe 2026 method using Reference Number or Customer ID instead.",
  keywords: [
    "MEPCO bill check by CNIC",
    "CNIC se bill check",
    "MEPCO CNIC bill",
    "mepco bill check cnic",
    "cnic se bijli bill check",
    "MEPCO online bill check",
    "mepco bill check by cnic online",
    "mepco duplicate bill cnic",
    "mepco reference number find",
    "mepco bill check multan",
    "mepco bill check bahawalpur",
    "mepco bill check dg khan",
    "mepco bill check sahiwal",
    "mepco bill check khanewal",
    "mepco consumer id kya hai",
    "mepco 14 digit reference number",
    "bijli bill check online pakistan 2026",
    "mepco helpline number",
    "mepco bill easypaisa payment",
    "mepco bill jazzcash",
    "cnic se bijli bill kaise dekhein",
    "mepco ka reference number kahan hota hai",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-bill-check-by-cnic",
  },
  openGraph: {
    title: "MEPCO Bill Check by CNIC Online 2026 Guide",
    description:
      "Can you check MEPCO bill by CNIC? Learn the safe 2026 method using Reference Number or Customer ID instead.",
    url: "https://mepcoonlinebill.net/mepco-bill-check-by-cnic",
    siteName: "MEPCO Online Bill",
    type: "article",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEPCO Bill Check by CNIC Online 2026 Guide",
    description:
      "Can you check MEPCO bill by CNIC? Learn the safe 2026 method using Reference Number or Customer ID instead.",
  },
};

// ═══════════════════════════════════════════════════════════════
// SITE CONSTANTS — Fixed: Dates corrected for 2026
// ═══════════════════════════════════════════════════════════════
const SITE_URL = "https://mepcoonlinebill.net";
const PAGE_URL = `${SITE_URL}/mepco-bill-check-by-cnic`;
const LAST_UPDATED = "2026-06-07";
const PUBLISHED_DATE = "2026-06-07";

// ═══════════════════════════════════════════════════════════════
// MEPCO DATA
// ═══════════════════════════════════════════════════════════════
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

const PAYMENT_METHODS = [
  {
    name: "Easypaisa",
    detail: "App ya nearest agent se pay karein",
    color: "bg-green-50 border-green-200 text-green-800",
  },
  {
    name: "JazzCash",
    detail: "App ya *786# USSD se bill pay karein",
    color: "bg-red-50 border-red-200 text-red-800",
  },
  {
    name: "HBL / UBL / MCB / Meezan",
    detail: "Mobile banking apps se utility bill payment",
    color: "bg-blue-50 border-blue-200 text-blue-800",
  },
  {
    name: "NayaPay / UPaisa",
    detail: "Digital wallets se instant payment",
    color: "bg-purple-50 border-purple-200 text-purple-800",
  },
  {
    name: "Pakistan Post Office",
    detail: "Nearest post office mein cash payment",
    color: "bg-amber-50 border-amber-200 text-amber-800",
  },
  {
    name: "Bank Counter / MEPCO Office",
    detail: "Cash ya cheque se physical payment",
    color: "bg-slate-50 border-slate-200 text-slate-800",
  },
];

const BILL_FIELDS = [
  {
    label: "Reference Number",
    labelDetail: "14-Digit — Sab Se Important",
    location: "Bill ka TOP-RIGHT corner — Ref No. ke saamne",
    example: "Example: 04102305612345",
    color: "bg-emerald-600",
    bg: "bg-emerald-50 border-emerald-200",
  },
  {
    label: "Customer ID / Consumer No",
    labelDetail: "10-Digit",
    location: "Bill ka TOP-LEFT ya CENTER — A/C No. ke saamne",
    example: "Example: 0310256789",
    color: "bg-blue-600",
    bg: "bg-blue-50 border-blue-200",
  },
  {
    label: "Meter Number",
    labelDetail: "For Office Use",
    location: "Bill ka MIDDLE section — meter readings table mein",
    example: "MEPCO office jaane par kaam aata hai",
    color: "bg-amber-600",
    bg: "bg-amber-50 border-amber-200",
  },
  {
    label: "Consumer Name & Address",
    labelDetail: "Connection Holder Details",
    location: "Bill ka TOP section — connection details block",
    example: "Office verification aur record update mein kaam aata hai",
    color: "bg-slate-600",
    bg: "bg-slate-50 border-slate-200",
  },
];

const STEPS = [
  {
    num: 1,
    color: "bg-emerald-600",
    border: "border-emerald-500",
    bg: "bg-emerald-50",
    title: "Purana Physical Bill Dhoondhein",
    body: "Ghar mein koi bhi purana ya latest MEPCO bijli bill dhoondhein. Drawer, almaari, file folder — kahin bhi. Bill ke TOP-RIGHT section mein 14-digit Reference Number aur TOP-LEFT mein Customer ID likhi hoti hai.",
    tags: [],
    extra: null,
  },
  {
    num: 2,
    color: "bg-blue-600",
    border: "border-blue-500",
    bg: "bg-blue-50",
    title: "SMS Inbox Search Karein",
    body: "Agar MEPCO ne kabhi bill alert ya reminder SMS bheja tha, to apne phone ke message inbox mein yeh words search karein:",
    tags: [
      "MEPCO",
      "electricity",
      "bill",
      "reference",
      "consumer",
      "bijli",
      "amount",
    ],
    extra: null,
  },
  {
    num: 3,
    color: "bg-purple-600",
    border: "border-purple-500",
    bg: "bg-purple-50",
    title: "WhatsApp / Gallery / Email Check Karein",
    body: "Bohat se log bill ki photo WhatsApp par family ko forward karte hain ya screenshot save karte hain. Yeh check karein:",
    tags: [],
    extra: [
      "📱 Mobile gallery / Photos app",
      "💬 WhatsApp chats & family groups",
      "📧 Email inbox & attachments (Gmail, Outlook)",
      "📂 Phone Downloads / PDF folder",
    ],
  },
  {
    num: 4,
    color: "bg-amber-600",
    border: "border-amber-500",
    bg: "bg-amber-50",
    title: "Payment App Transaction History",
    body: "Agar aapne pehle Easypaisa, JazzCash ya bank app se bill pay kiya tha, to transaction history mein reference number zaroor hoga:",
    tags: [],
    extra: [
      "Easypaisa: Menu → My Payments → Electricity Bills",
      "JazzCash: Menu → Bill Payment → History",
      "Bank App: Transactions → Utility Bills section",
    ],
  },
  {
    num: 5,
    color: "bg-rose-600",
    border: "border-rose-500",
    bg: "bg-rose-50",
    title: "MEPCO Office Ya Helpline Se Recover Karein",
    body: "Upar ke 4 tareeqon se nahi mila? Nearest MEPCO subdivision office jaayein ya helpline call karein. Sath mein yeh laayein:",
    tags: [],
    extra: [
      "✅ CNIC — original + photocopy",
      "✅ Connection ka exact address",
      "✅ Meter number (agar yaad ho)",
      "✅ Consumer name (jo bill par tha)",
      "✅ Purani payment receipt (agar available ho)",
    ],
  },
];

const FAQ_DATA = [
  {
    q: "Can I check my MEPCO bill with CNIC on the official portal?",
    a: "No. The official PITC/MEPCO portal does not support direct bill lookup using only a CNIC number. You need your 14-digit Reference Number or 10-digit Customer ID which is printed on your electricity bill. This applies to all 13 MEPCO districts including Multan, Bahawalpur, DG Khan, and Sahiwal.",
    lang: "en",
  },
  {
    q: "Kya CNIC se MEPCO bill check ho sakta hai?",
    a: "Nahi, MEPCO ka online bill check system CNIC accept nahi karta. Aapko apna 14-digit Reference Number ya Customer ID chahiye hota hai jo purane bijli bill par likha hota hai. Yeh rule MEPCO ke tamam 13 districts par apply hota hai.",
    lang: "roman",
  },
  {
    q: "What should I do if I lost my MEPCO Reference Number?",
    a: "Check your old physical bill, SMS inbox (search MEPCO, electricity, reference), WhatsApp chats, gallery screenshots, email attachments, or payment receipts from Easypaisa, JazzCash, or bank apps. If still not found, visit your nearest MEPCO subdivision office with your CNIC, connection address, and meter number.",
    lang: "en",
  },
  {
    q: "Reference Number kho gaya to kya karein?",
    a: "Purana physical bill, SMS inbox, WhatsApp, gallery, email ya Easypaisa/JazzCash ki payment history check karein. Agar phir bhi na mile to apna CNIC, connection address aur meter number le kar nearest MEPCO office jaayein. Wahan se aapko Reference Number recovery mein madad milegi.",
    lang: "roman",
  },
  {
    q: "How can I link my CNIC with my MEPCO electricity connection?",
    a: "Visit your nearest MEPCO Customer Service Center with your original CNIC, latest paid electricity bill, and registered mobile number. Staff will update your consumer record. If the connection is not in your name, a formal ownership transfer process may be required. Even after linking, bill checking still requires Reference Number or Customer ID.",
    lang: "en",
  },
  {
    q: "Reference Number aur Customer ID mein kya farq hai?",
    a: "Reference Number 14 digits ka hota hai (jaise 04102305612345) aur bill ke top-right section mein hota hai. Customer ID usually 10 digits ki hoti hai aur top-left mein hoti hai. Dono se bill check ho sakta hai lekin 14-digit Reference Number sab se zyada commonly accepted hai payment apps aur online portals par.",
    lang: "roman",
  },
  {
    q: "کیا شناختی کارڈ نمبر سے میپکو بل چیک ہو سکتا ہے؟",
    a: "نہیں، میپکو کا آن لائن بل چیک سسٹم شناختی کارڈ نمبر سے کام نہیں کرتا۔ آپ کو اپنا 14 ہندسوں کا ریفرنس نمبر یا کنزیومر آئی ڈی درکار ہوتی ہے جو آپ کے پرانے بجلی کے بل پر درج ہوتی ہے۔ یہ قاعدہ میپکو کے تمام 13 اضلاع میں لاگو ہوتا ہے۔",
    lang: "ur",
  },
  {
    q: "MEPCO bill Easypaisa ya JazzCash se pay ho sakta hai?",
    a: "Haan, MEPCO bill Easypaisa, JazzCash, UPaisa, NayaPay, HBL Mobile, UBL Digital, MCB Mobile aur dosre banking apps se pay ho sakta hai. Aapko sirf apna 14-digit Reference Number enter karna hota hai. Payment ke baad receipt screenshot zaroor save karein — future mein Reference Number isi se milega.",
    lang: "roman",
  },
  {
    q: "CNIC unknown website par enter karna safe hai?",
    a: "Bilkul nahi. Kabhi bhi apna CNIC, phone number ya koi bhi personal information unknown ya unverified websites par enter na karein. Pakistan mein data leak aur identity theft ka serious risk hai. Bill check karne ke liye sirf official portals aur verified apps use karein. Reference Number use karein — yeh safe hai.",
    lang: "roman",
  },
  {
    q: "MEPCO helpline number kya hai aur kab available hai?",
    a: "MEPCO ka toll-free helpline number 0800-63726 hai. Aap yahan bill inquiry, complaint registration, new connection application, aur reference number recovery ke liye call kar sakte hain. Helpline generally working days aur working hours mein available hoti hai.",
    lang: "roman",
  },
];

const COMPARISON_ROWS = [
  { feature: "Online Bill Check", cnic: false, ref: true, cid: true },
  { feature: "Duplicate Bill Download", cnic: false, ref: true, cid: true },
  {
    feature: "Easypaisa / JazzCash Payment",
    cnic: false,
    ref: true,
    cid: null,
  },
  { feature: "MEPCO Office Verification", cnic: true, ref: true, cid: true },
  { feature: "Complaint Registration", cnic: true, ref: true, cid: true },
  { feature: "Due Date Confirmation", cnic: false, ref: true, cid: true },
  { feature: "Total Digits", cnic: "13", ref: "14", cid: "10" },
  {
    feature: "Kahan Milta Hai?",
    cnic: "NADRA ID Card",
    ref: "Bill Top-Right",
    cid: "Bill Top-Left",
  },
];

const RELATED_GUIDES = [
  {
    href: "/",
    icon: "⚡",
    title: "MEPCO Online Bill Check",
    desc: "Reference Number se turant current bill dekhein",
  },
  {
    href: "/mepco-bill-calculator",
    icon: "📊",
    title: "MEPCO Bill Calculator 2026",
    desc: "Apna estimated bijli bill calculate karein",
  },
  {
    href: "/mepco-solar-savings-calculator",
    icon: "☀️",
    title: "Solar Savings Calculator",
    desc: "Solar se kitna bacha sakte hain? Calculate karein",
  },
  {
    href: "/mepco-net-metering-guide",
    icon: "🔌",
    title: "Net Metering Guide",
    desc: "Net metering apply karne ka complete process",
  },
  {
    href: "/mepco-new-connection-guide",
    icon: "🏠",
    title: "New Connection Guide",
    desc: "Naya bijli connection kaise lein — step by step",
  },
  {
    href: "/mepco-tariff-guide",
    icon: "💰",
    title: "MEPCO Tariff Rates 2026",
    desc: "Latest bijli rates, slabs aur calculation",
  },
];

// ═══════════════════════════════════════════════════════════════
// HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════
function StatusCell({ value }: { value: boolean | string | null }) {
  if (value === true)
    return (
      <span className="font-bold text-emerald-600" aria-label="Available">
        ✅ Haan
      </span>
    );
  if (value === false)
    return (
      <span className="font-bold text-red-500" aria-label="Not available">
        ❌ Nahi
      </span>
    );
  if (value === null)
    return (
      <span className="font-bold text-amber-500" aria-label="Limited">
        ⚠️ Limited
      </span>
    );
  return <span className="text-slate-700">{value}</span>;
}

function SectionHeader({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-8 text-3xl font-extrabold text-slate-900"
    >
      {children}
    </h2>
  );
}

// ═══════════════════════════════════════════════════════════════
// ALL STRUCTURED DATA SCHEMAS
// ═══════════════════════════════════════════════════════════════
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Check MEPCO Bill Without CNIC — Find Reference Number",
    description:
      "Step by step guide to find your MEPCO 14-digit reference number when you do not have it, so you can check your electricity duplicate bill online.",
    totalTime: "PT5M",
    step: STEPS.map((s) => ({
      "@type": "HowToStep",
      position: s.num,
      url: PAGE_URL,
      name: s.title,
      text: s.body,
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
        name: "MEPCO Bill Check By CNIC",
        item: PAGE_URL,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MEPCO Bill Check by CNIC Online 2026 Guide",
    description:
      "Complete guide explaining why MEPCO bill cannot be checked by CNIC and how to use Reference Number. Covers all 13 MEPCO districts in South Punjab.",
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MEPCO Bill Check by CNIC Online 2026 Guide",
    url: PAGE_URL,
    description:
      "Complete guide for MEPCO consumers on checking electricity bill. Explains CNIC limitations and Reference Number method.",
    isPartOf: {
      "@type": "WebSite",
      name: "MEPCO Online Bill",
      url: SITE_URL,
    },
    dateModified: LAST_UPDATED,
    inLanguage: ["en", "ur", "ur-Latn"],
  };

  return (
    <>
      {[faqSchema, howToSchema, breadcrumbSchema, articleSchema, webPageSchema].map(
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

// ═══════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════
export default function MepcoBillCheckByCnicPage() {
  return (
    <>
      <AllSchemas />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* ══════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════ */}
        <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 px-6 py-16 text-white">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-emerald-300">
                <li>
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-white">Bill Check By CNIC</li>
              </ol>
            </nav>

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-200">
              MEPCO Consumer Guide 2026 — Updated June 2026
            </p>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
              MEPCO Bill Check By CNIC Online —{" "}
              <span className="text-emerald-300">
                Asal Tareeqa Yahan Dekhein
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
              Multan, Bahawalpur, DG Khan, Sahiwal aur baqi{" "}
              <strong>13 districts</strong> ke bohat se MEPCO consumers
              &quot;CNIC se bill check&quot; search karte hain. Yeh guide
              transparently explain karti hai ke CNIC se direct bill kyun nahi
              milta — aur aapko bill dhoondhne ka{" "}
              <strong>sab se asaan, safe aur official tareeqa</strong> bataati
              hai.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-xl bg-white px-6 py-3 font-bold text-emerald-900 shadow transition hover:bg-emerald-50"
              >
                <span aria-hidden="true">⚡</span> Check MEPCO Bill Now
              </Link>
              <Link
                href="/mepco-bill-calculator"
                className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <span aria-hidden="true">📊</span> Bill Calculator
              </Link>
              <Link
                href="/mepco-solar-savings-calculator"
                className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <span aria-hidden="true">☀️</span> Solar Calculator
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6 py-12">
          {/* ══════════════════════════════════════════
              TABLE OF CONTENTS
          ══════════════════════════════════════════ */}
          <nav
            aria-label="Table of Contents"
            className="mb-10 rounded-2xl border bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-bold text-emerald-900">
              <span aria-hidden="true">📑</span> Is Page Par Kya Hai?
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6 text-slate-700 md:columns-2">
              {[
                ["#quick-answer", "Quick Answer — Seedhi Baat"],
                ["#why-not-cnic", "CNIC Se Bill Kyun Nahi Milta?"],
                ["#what-works", "What Actually Works"],
                ["#bill-anatomy", "Bill Par Reference Number Kahan Hota Hai?"],
                ["#step-guide", "5-Step Guide — Reference Number Dhoondhein"],
                ["#comparison", "CNIC vs Reference Number vs Customer ID"],
                ["#link-cnic", "CNIC Ko Account Se Link Karein"],
                ["#payment-methods", "Bill Payment Methods 2026"],
                ["#did-you-know", "Did You Know? — 14-Digit Ka Raaz"],
                ["#best-practice", "3 Cheezein Aaj Hi Save Karein"],
                ["#districts", "MEPCO 13 Districts Coverage"],
                ["#contact", "MEPCO Helpline & Contact Info"],
                ["#urdu-guide", "اردو مکمل گائیڈ"],
                ["#roman-urdu", "Roman Urdu Khulaasa"],
                ["#faqs", "FAQs — 10 Questions"],
              ].map(([href, label]) => (
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

          {/* ══════════════════════════════════════════
              1. QUICK ANSWER
          ══════════════════════════════════════════ */}
          <section aria-labelledby="quick-answer">
            <SectionHeader id="quick-answer">
              Quick Answer — Seedhi Baat
            </SectionHeader>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                {
                  border: "border-red-500",
                  titleColor: "text-red-700",
                  icon: "❌",
                  title: "CNIC Se Direct Bill?",
                  text: (
                    <>
                      Official PITC/MEPCO portal par sirf CNIC dal kar bill
                      check karna{" "}
                      <strong>kisi bhi district mein available nahi</strong>{" "}
                      hota.
                    </>
                  ),
                },
                {
                  border: "border-emerald-500",
                  titleColor: "text-emerald-700",
                  icon: "✅",
                  title: "Best Method",
                  text: (
                    <>
                      Apna <strong>14-digit Reference Number</strong> ya{" "}
                      <strong>10-digit Customer ID</strong> use karein — yeh
                      purane bill par printed hota hai.
                    </>
                  ),
                },
                {
                  border: "border-amber-500",
                  titleColor: "text-amber-700",
                  icon: "⚠️",
                  title: "Security Alert",
                  text: (
                    <>
                      CNIC, phone number ya private info unknown websites par{" "}
                      <strong>kabhi enter na karein</strong> — identity theft ka
                      serious risk hai.
                    </>
                  ),
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border-l-4 ${card.border} bg-white p-6 shadow-sm`}
                >
                  <h3 className={`text-xl font-bold ${card.titleColor}`}>
                    <span aria-hidden="true">{card.icon}</span> {card.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════
              2. WHY NOT CNIC
          ══════════════════════════════════════════ */}
          <article
            aria-labelledby="why-not-cnic"
            className="mt-12 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="why-not-cnic">
              CNIC Se Direct Bill Check Kyun Nahi Hota?
            </SectionHeader>

            <p className="mt-5 leading-8 text-slate-700">
              Pakistan mein yeh <strong>sab se zyada</strong> search hone wala
              electricity bill question hai. MEPCO/PITC system CNIC-based
              public lookup is liye nahi deta:
            </p>

            <ul className="mt-6 space-y-5">
              {[
                {
                  title: "Multiple Connections Per CNIC",
                  detail:
                    "Ek CNIC ke sath ghar, shop, factory, plot — kai connections linked ho sakte hain. System kaise decide kare kaunsa bill dikhaye? Confusion aur security risk dono hain.",
                },
                {
                  title: "Privacy & Data Protection",
                  detail:
                    "Agar CNIC se koi bhi billing history dekh sake, to aapka address, consumption data aur financial history leak ho sakta hai. NADRA aur utility companies is se rokti hain.",
                },
                {
                  title: "Billing Database Architecture",
                  detail:
                    "PITC billing system ka primary key Reference Number hai. CNIC secondary identifier hai — system internally use karta hai lekin public lookup ke liye nahi.",
                },
                {
                  title: "Ownership Mismatch Cases",
                  detail:
                    "Connection landlord, deceased person, company, tenant ya family member ke naam par ho sakta hai. CNIC match in cases mein seedha nahi hota.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                    {i + 1}
                  </span>
                  <div>
                    <strong className="text-slate-900">{item.title}:</strong>
                    <p className="mt-1 leading-7 text-slate-700">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-emerald-50 p-6">
              <h3 className="text-lg font-bold text-emerald-900">
                <span aria-hidden="true">✅</span> Good News — Tension Mat Lein
              </h3>
              <p className="mt-2 leading-7 text-emerald-950">
                Aik dafa <strong>Reference Number ya Customer ID</strong> save
                kar lein — phir future mein{" "}
                <strong>har mahine sirf 10 seconds</strong> mein bill check ho
                jayega. Neechay 5-step guide dekhein!
              </p>
            </div>
          </article>

          {/* ══════════════════════════════════════════
              3. WHAT WORKS
          ══════════════════════════════════════════ */}
          <article
            aria-labelledby="what-works"
            className="mt-10 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="what-works">
              What Actually Works — CNIC Ki Jagah Kya Use Karein
            </SectionHeader>

            <p className="mt-5 leading-8 text-slate-700">
              CNIC se direct bill nahi milta, lekin CNIC aapko in sarkari
              kaamon mein help karta hai:
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: "📋",
                  text: "MEPCO office mein consumer record verify karna",
                },
                {
                  icon: "📝",
                  text: "Complaint ya application register karna",
                },
                {
                  icon: "🔄",
                  text: "Customer profile / mobile number update karna",
                },
                {
                  icon: "🔔",
                  text: "SMS bill notification alerts activate karwana",
                },
                {
                  icon: "📄",
                  text: "Ownership / name transfer process mein support",
                },
                {
                  icon: "🏛️",
                  text: "New connection application verification",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <p className="font-medium text-slate-800">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-emerald-900 p-5 text-white">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-300">
                Bill Dekhne Ke Liye — Only These 2 Work:
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-lg bg-emerald-700 px-4 py-3">
                  <p className="text-xs text-emerald-300">
                    Primary — Recommended
                  </p>
                  <p className="text-lg font-bold">
                    14-Digit Reference Number
                  </p>
                </div>
                <div className="rounded-lg bg-emerald-700 px-4 py-3">
                  <p className="text-xs text-emerald-300">Alternative</p>
                  <p className="text-lg font-bold">10-Digit Customer ID</p>
                </div>
              </div>
            </div>
          </article>

          {/* ══════════════════════════════════════════
              4. BILL ANATOMY
          ══════════════════════════════════════════ */}
          <article
            aria-labelledby="bill-anatomy"
            className="mt-10 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="bill-anatomy">
              Bill Par Reference Number Kahan Hota Hai?
            </SectionHeader>

            <p className="mt-5 leading-8 text-slate-700">
              Kai consumers ko bill haath mein hone ke bawajood Reference
              Number nahi milta. Yeh exact location guide hai:
            </p>

            <div className="mt-6 rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50 p-6">
              <h3 className="mb-4 text-lg font-bold text-emerald-900">
                MEPCO Bill Layout — Key Fields Location
              </h3>
              <div className="space-y-3">
                {BILL_FIELDS.map((field, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 rounded-xl border ${field.bg} p-4`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${field.color} text-sm font-bold text-white`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-slate-900">
                        {field.label}{" "}
                        <span className="text-sm font-normal text-slate-500">
                          ({field.labelDetail})
                        </span>
                      </p>
                      <p className="mt-0.5 text-sm text-slate-600">
                        <strong>Location:</strong> {field.location}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-500">
                        {field.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-7 text-amber-800">
              <strong>
                <span aria-hidden="true">💡</span> Pro Tip:
              </strong>{" "}
              Abhi apne phone mein Notes ya Contacts app kholein aur Reference
              Number save karein. Ya bill ki photo gallery mein ek dedicated
              &quot;MEPCO&quot; folder mein save karein — kabhi nahi khoayega!
            </p>
          </article>

          {/* ══════════════════════════════════════════
              5. STEP-BY-STEP GUIDE
          ══════════════════════════════════════════ */}
          <article
            aria-labelledby="step-guide"
            className="mt-12 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="step-guide">
              5-Step Guide — Reference Number Kaise Dhoondhein
            </SectionHeader>
            <p className="mt-4 leading-8 text-slate-600">
              Bill kho gaya? Reference Number yaad nahi? Koi baat nahi — in 5
              jagahon par dhoondhein:
            </p>

            <ol className="mt-6 space-y-5">
              {STEPS.map((step) => (
                <li
                  key={step.num}
                  className={`rounded-2xl border-l-4 ${step.border} ${step.bg} p-6`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${step.color} text-lg font-bold text-white`}
                    >
                      {step.num}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-3 leading-7 text-slate-700">{step.body}</p>

                  {step.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800"
                        >
                          &quot;{tag}&quot;
                        </span>
                      ))}
                    </div>
                  )}

                  {step.extra && (
                    <ul className="mt-3 space-y-1 pl-4 text-slate-700">
                      {step.extra.map((item, i) => (
                        <li key={i} className="text-sm leading-7">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {step.num === 5 && (
                    <p className="mt-3 rounded-lg bg-rose-100 p-3 text-sm leading-7 text-rose-800">
                      <strong>MEPCO Helpline:</strong> 0800-63726 (toll-free)
                      — Reference Number recovery mein bhi madad milti hai.
                    </p>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-block rounded-xl bg-emerald-700 px-8 py-4 text-lg font-bold text-white shadow transition hover:bg-emerald-800"
              >
                Reference Number Mil Gaya? → Abhi Bill Check Karein
              </Link>
            </div>
          </article>

          {/* ══════════════════════════════════════════
              6. COMPARISON TABLE
          ══════════════════════════════════════════ */}
          <section
            aria-labelledby="comparison"
            className="mt-12 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="comparison">
              CNIC vs Reference Number vs Customer ID — Comparison Table
            </SectionHeader>
            <p className="mt-4 leading-8 text-slate-600">
              Kaunsa number kab kaam aata hai — ek nazar mein samjhein:
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-emerald-800 text-white">
                    <th className="p-4 text-left font-bold">Feature</th>
                    <th className="p-4 text-center font-bold">CNIC</th>
                    <th className="p-4 text-center font-bold">
                      14-Digit Ref. No.
                    </th>
                    <th className="p-4 text-center font-bold">Customer ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="p-4 font-medium text-slate-800">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center">
                        <StatusCell value={row.cnic} />
                      </td>
                      <td className="p-4 text-center">
                        <StatusCell value={row.ref} />
                      </td>
                      <td className="p-4 text-center">
                        <StatusCell value={row.cid} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              7. LINK CNIC
          ══════════════════════════════════════════ */}
          <article
            aria-labelledby="link-cnic"
            className="mt-12 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="link-cnic">
              CNIC Ko MEPCO Account Se Kaise Link Karein
            </SectionHeader>

            <p className="mt-5 leading-8 text-slate-700">
              Future mein bill tracking easy banana chahte hain? CNIC aur
              mobile MEPCO record mein update rakhein:
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Zaroorat Hogi:
                </h3>
                <ul className="mt-3 space-y-2 pl-4 text-slate-700">
                  {[
                    "Original CNIC + photocopy",
                    "Latest paid electricity bill",
                    "Registered mobile number",
                    "Connection address proof (naam change ke liye)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Kahan Jaayein:
                </h3>
                <ul className="mt-3 space-y-2 pl-4 text-slate-700">
                  {[
                    "MEPCO Customer Service Center (har district mein)",
                    "MEPCO Sub Division Office",
                    "Helpline: 0800-63726 (guidance ke liye)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-900">
                <span aria-hidden="true">⚠️</span> Connection Aapke Naam Par
                Nahi?
              </h3>
              <p className="mt-2 leading-7 text-amber-900">
                Agar meter landlord, relative ya previous owner ke naam par
                hai:
              </p>
              <ul className="mt-2 space-y-1 pl-4 text-sm text-amber-900">
                <li>
                  • Contact update alag cheez hai — ownership transfer alag
                  process hai
                </li>
                <li>
                  • Name transfer ke liye sale deed, NOC ya death certificate
                  lag sakta hai
                </li>
                <li>
                  • <strong>Most practical solution:</strong> Reference Number
                  save karein — bill check ho jayega regardless of ownership
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-100 p-5">
              <p className="font-medium text-slate-700">
                <strong>Yaad Rakhein:</strong> CNIC linking future support ke
                liye helpful hai,{" "}
                <strong>
                  lekin online bill check hamesha Reference Number ya Customer
                  ID se hi hoga.
                </strong>
              </p>
            </div>
          </article>

          {/* ══════════════════════════════════════════
              8. PAYMENT METHODS
          ══════════════════════════════════════════ */}
          <section
            aria-labelledby="payment-methods"
            className="mt-12 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="payment-methods">
              MEPCO Bill Payment Methods 2026
            </SectionHeader>
            <p className="mt-4 leading-8 text-slate-600">
              Bill check karne ke baad payment bhi asaan hai. Sab mein{" "}
              <strong>14-digit Reference Number</strong> hi lagta hai:
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {PAYMENT_METHODS.map((method, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-4 ${method.color}`}
                >
                  <p className="font-bold">{method.name}</p>
                  <p className="mt-1 text-sm opacity-80">{method.detail}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm leading-7 text-emerald-800">
              <strong>
                <span aria-hidden="true">💡</span> Tip:
              </strong>{" "}
              Payment ke baad receipt screenshot zaroor save karein — isme
              Reference Number hota hai jo future mein kaam aayega!
            </p>
          </section>

          {/* ══════════════════════════════════════════
              9. DID YOU KNOW
          ══════════════════════════════════════════ */}
          <section
            aria-labelledby="did-you-know"
            className="mt-12 rounded-3xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-emerald-100 p-7 shadow-sm md:p-10"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl" aria-hidden="true">
                💡
              </span>
              <div>
                <SectionHeader id="did-you-know">
                  Did You Know? — 14-Digit Ka Raaz
                </SectionHeader>
                <p className="mt-3 text-lg leading-8 text-emerald-950">
                  MEPCO ka{" "}
                  <strong>
                    14-digit Reference Number ek permanent unique ID
                  </strong>{" "}
                  hai jo sirf aapke connection ke liye hai. Yeh number:
                </p>
                <ul className="mt-3 space-y-2 pl-4 text-emerald-900">
                  {[
                    "Jab tak connection active hai — kabhi change nahi hota",
                    "Online bill check ka fastest aur most reliable method hai",
                    "Easypaisa / JazzCash / bank app payment mein bhi yahi use hota hai",
                    "Aik baar save karo — hamesha ke liye kaam aaye",
                    "Bill generate hone par bhi same number rehta hai",
                  ].map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              10. BEST PRACTICE
          ══════════════════════════════════════════ */}
          <section
            aria-labelledby="best-practice"
            className="mt-12 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="best-practice">
              <span aria-hidden="true">📌</span> Aaj Hi Yeh 3 Cheezein Save
              Karein — Phir Kabhi Tension Nahi
            </SectionHeader>
            <p className="mt-4 text-slate-600">
              Sirf 2 minute lagenge — lekin har mahine ki bill tension khatam
              ho jayegi:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: "📱",
                  bg: "bg-emerald-50",
                  titleColor: "text-emerald-900",
                  title: "14-Digit Reference Number",
                  desc: "Phone Notes ya Contacts mein save karein",
                },
                {
                  icon: "📸",
                  bg: "bg-blue-50",
                  titleColor: "text-blue-900",
                  title: "Bill Ki Photo",
                  desc: "Gallery mein dedicated MEPCO folder banayein",
                },
                {
                  icon: "🧾",
                  bg: "bg-purple-50",
                  titleColor: "text-purple-900",
                  title: "Payment Receipt",
                  desc: "Har payment ke turant baad screenshot lein",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl ${item.bg} p-5 text-center`}
                >
                  <p className="text-4xl" aria-hidden="true">
                    {item.icon}
                  </p>
                  <p className={`mt-3 font-bold ${item.titleColor}`}>
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════
              11. DISTRICTS
          ══════════════════════════════════════════ */}
          <section
            aria-labelledby="districts"
            className="mt-12 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="districts">
              MEPCO Coverage — 13 Districts of South Punjab
            </SectionHeader>
            <p className="mt-4 leading-8 text-slate-600">
              MEPCO (Multan Electric Power Company) South Punjab ke in{" "}
              <strong>13 districts</strong> mein bijli supply karti hai. Yeh
              guide sab ke liye equally applicable hai:
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {MEPCO_DISTRICTS.map((d, i) => (
                <div
                  key={i}
                  className="rounded-xl border bg-slate-50 p-3 text-center"
                >
                  <p className="font-bold text-slate-900">{d.en}</p>
                  <p className="text-sm text-slate-500" dir="rtl" lang="ur">
                    {d.ur}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm leading-7 text-emerald-800">
              <strong>Note:</strong> Chahe aap Multan mein hon ya Rajanpur
              mein — CNIC se direct bill check kisi bhi district mein kaam
              nahi karta. Sirf{" "}
              <strong>14-digit Reference Number</strong> chahiye.
            </p>
          </section>

          {/* ══════════════════════════════════════════
              12. CONTACT INFO
          ══════════════════════════════════════════ */}
          <section
            aria-labelledby="contact"
            className="mt-12 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="contact">
              MEPCO Helpline &amp; Contact Information
            </SectionHeader>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: "📞",
                  bg: "bg-emerald-50",
                  titleColor: "text-emerald-900",
                  valColor: "text-emerald-700",
                  label: "Toll-Free Helpline",
                  value: "0800-63726",
                  note: "Bill inquiry, complaint, reference number recovery",
                },
                {
                  icon: "🏢",
                  bg: "bg-blue-50",
                  titleColor: "text-blue-900",
                  valColor: "text-blue-700",
                  label: "Headquarters",
                  value: "MEPCO Complex, Khanewal Road, Multan",
                  note: "Main administrative office",
                },
                {
                  icon: "🌐",
                  bg: "bg-purple-50",
                  titleColor: "text-purple-900",
                  valColor: "text-purple-700",
                  label: "Official MEPCO Website",
                  value: "www.mepco.com.pk",
                  note: "Official portal for all MEPCO services",
                },
                {
                  icon: "📧",
                  bg: "bg-amber-50",
                  titleColor: "text-amber-900",
                  valColor: "text-amber-700",
                  label: "Email",
                  value: "info@mepco.com.pk",
                  note: "General inquiries and formal complaints",
                },
              ].map((item, i) => (
                <div key={i} className={`rounded-xl ${item.bg} p-5`}>
                  <h3 className={`font-bold ${item.titleColor}`}>
                    <span aria-hidden="true">{item.icon}</span> {item.label}
                  </h3>
                  <p className={`mt-2 font-semibold ${item.valColor}`}>
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════
              13. URDU GUIDE — COMPLETE
          ══════════════════════════════════════════ */}
          <article
            aria-labelledby="urdu-guide"
            className="mt-12 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
            lang="ur"
          >
            <h2
              id="urdu-guide"
              className="scroll-mt-8 text-3xl font-extrabold"
              dir="rtl"
            >
              اردو مکمل گائیڈ — شناختی کارڈ سے میپکو بل چیک
            </h2>

            <div
              dir="rtl"
              className="mt-6 space-y-7 leading-9 text-slate-700"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  کیا شناختی کارڈ نمبر سے بل چیک ہو سکتا ہے؟
                </h3>
                <p className="mt-3">
                  بہت سے صارفین یہ جاننا چاہتے ہیں کہ کیا شناختی کارڈ نمبر کے
                  ذریعے میپکو بل چیک کیا جا سکتا ہے۔ جواب یہ ہے کہ عام طور
                  پر میپکو آن لائن بل چیک کرنے کے لیے شناختی کارڈ نمبر نہیں
                  بلکہ{" "}
                  <strong>
                    14 ہندسوں کا ریفرنس نمبر یا کنزیومر آئی ڈی
                  </strong>{" "}
                  استعمال کی جاتی ہے۔ یہ قاعدہ میپکو کے تمام 13 اضلاع میں
                  لاگو ہوتا ہے۔
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  شناختی کارڈ سے بل کیوں نہیں ملتا؟
                </h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    • ایک شناختی کارڈ کے ساتھ کئی کنکشن (گھر، دکان، فیکٹری)
                    منسلک ہو سکتے ہیں — پرائیویسی اور سیکیورٹی کا خطرہ ہوتا
                    ہے
                  </li>
                  <li>
                    • بلنگ سسٹم کی بنیادی کلید ریفرنس نمبر ہے، شناختی کارڈ
                    نہیں
                  </li>
                  <li>
                    • کنکشن مالک مکان، کرایہ دار یا خاندان کے کسی فرد کے نام
                    پر ہو سکتا ہے
                  </li>
                  <li>
                    • ڈیٹا لیک اور شناخت کی چوری سے بچاؤ کے لیے یہ پابندی
                    ہے
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  ریفرنس نمبر کیسے ڈھونڈیں؟
                </h3>
                <ol className="mt-3 list-decimal space-y-2 pr-5">
                  <li>
                    اپنا پرانا بجلی کا بل دیکھیں — اوپری دائیں طرف 14
                    ہندسوں کا ریفرنس نمبر لکھا ہوتا ہے
                  </li>
                  <li>
                    موبائل ایس ایم ایس میں &quot;MEPCO&quot;،
                    &quot;electricity&quot; یا &quot;reference&quot; سرچ کریں
                  </li>
                  <li>
                    واٹس ایپ، گیلری یا ای میل میں بل کی تصویر یا پی ڈی ایف
                    ڈھونڈیں
                  </li>
                  <li>
                    ایزی پیسہ، جیز کیش یا بینک ایپ کی پیمنٹ ہسٹری چیک کریں
                  </li>
                  <li>
                    اگر پھر بھی نہ ملے تو قریبی میپکو آفس میں شناختی کارڈ،
                    پتہ اور میٹر نمبر لے کر جائیں
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  اہم ہدایات — ضرور پڑھیں
                </h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    • شناختی کارڈ نمبر غیر محفوظ یا نامعلوم ویب سائٹس پر ہرگز
                    درج نہ کریں
                  </li>
                  <li>
                    • بل چیک اور ادائیگی کے لیے ہمیشہ ریفرنس نمبر استعمال
                    کریں
                  </li>
                  <li>
                    • اپنا 14 ہندسوں والا ریفرنس نمبر موبائل میں محفوظ رکھیں
                  </li>
                  <li>• ہر ادائیگی کے بعد رسید کا اسکرین شاٹ ضرور لیں</li>
                  <li>
                    • میپکو ہیلپ لائن <strong>0800-63726</strong> پر کال کر کے
                    ریفرنس نمبر ریکوری میں مدد لے سکتے ہیں
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-5">
                <h3 className="text-lg font-bold text-emerald-900">
                  یہ گائیڈ کن صارفین کے لیے ہے؟
                </h3>
                <p className="mt-2">
                  یہ گائیڈ میپکو کے تمام 13 اضلاع کے صارفین کے لیے ہے:
                  ملتان، بہاولپور، رحیم یار خان، ڈی جی خان، ساہیوال، وہاڑی،
                  خانیوال، مظفرگڑھ، لیہ، راجن پور، لودھراں، پاکپتن اور
                  بہاولنگر۔
                </p>
              </div>
            </div>
          </article>

          {/* ══════════════════════════════════════════
              14. ROMAN URDU SUMMARY
          ══════════════════════════════════════════ */}
          <article
            aria-labelledby="roman-urdu"
            className="mt-10 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="roman-urdu">
              Roman Urdu Khulaasa — MEPCO Bill CNIC Se Check Nahi Hota
            </SectionHeader>

            <p className="mt-5 leading-8 text-slate-700">
              Agar aap &quot;CNIC se MEPCO bill check karna hai&quot; search
              kar rahe hain, to yeh simple jawab yaad rakhein:{" "}
              <strong>CNIC se direct bill nahi milta.</strong> Yeh rule MEPCO
              ke tamam 13 districts par apply hota hai — chahe aap Multan mein
              hon ya Rajanpur mein, Bahawalpur mein hon ya DG Khan mein.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              <strong>Kaam karne wala tareeqa:</strong> Apne puranay bijli bill
              ke <strong>top-right corner</strong> mein 14-digit Reference
              Number dhoondhein. Isi number se aap:
            </p>
            <ul className="mt-2 space-y-1 pl-4 text-slate-700">
              {[
                "Online current ya duplicate bill check kar sakte hain",
                "Easypaisa / JazzCash / bank app se payment kar sakte hain",
                "Due date aur outstanding amount dekh sakte hain",
                "Bill PDF download kar sakte hain",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl bg-slate-100 p-6">
              <h3 className="text-xl font-bold">
                <span aria-hidden="true">⚡</span> Super Quick Roman Urdu
                Summary
              </h3>
              <ul className="mt-3 space-y-2 pl-4 text-slate-700">
                {[
                  ["CNIC se bill", "❌ nahi milta"],
                  ["Reference Number se bill", "✅ milta hai"],
                  ["CNIC unknown website par", "❌ kabhi enter na karein"],
                  ["Reference Number phone mein", "✅ zaroor save karein"],
                  ["Bill ki photo gallery mein", "✅ zaroor rakhein"],
                  ["Payment receipt screenshot", "✅ har baar lein"],
                  [
                    "MEPCO Helpline 0800-63726",
                    "📞 madad ke liye call karein",
                  ],
                ].map(([action, result], i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="font-medium text-slate-800">
                      {action}
                    </span>
                    <span className="shrink-0 font-bold">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* ══════════════════════════════════════════
              15. FAQs — 10 QUESTIONS
          ══════════════════════════════════════════ */}
          <section
            aria-labelledby="faqs"
            className="mt-12 rounded-3xl border bg-white p-7 shadow-sm md:p-10"
          >
            <SectionHeader id="faqs">
              Frequently Asked Questions — 10 Questions
            </SectionHeader>
            <p className="mt-2 text-sm text-slate-500">
              English, Roman Urdu aur Urdu — sab questions covered
            </p>

            <div className="mt-6 space-y-4">
              {FAQ_DATA.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border bg-slate-50 p-6"
                  lang={
                    faq.lang === "ur"
                      ? "ur"
                      : faq.lang === "roman"
                        ? "ur-Latn"
                        : "en"
                  }
                >
                  <h3
                    className="text-lg font-bold text-slate-900"
                    dir={faq.lang === "ur" ? "rtl" : "ltr"}
                  >
                    <span className="mr-2 text-emerald-600">
                      Q{i + 1}.
                    </span>
                    {faq.q}
                  </h3>
                  <p
                    className="mt-3 leading-8 text-slate-700"
                    dir={faq.lang === "ur" ? "rtl" : "ltr"}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════
              FINAL CTA — Fixed: "Simple Summary" instead of "Short version"
          ══════════════════════════════════════════ */}
          <section className="mt-12 rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-900 p-7 text-center text-white md:p-10">
            <h2 className="text-3xl font-extrabold">
              Reference Number Mil Gaya? — Ab Bill Check Karein!
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-emerald-100">
              Ab aap asani se apna current MEPCO bill check, download, due
              date confirm aur payment kar sakte hain. Sirf{" "}
              <strong>14-digit Reference Number</strong> chahiye!
            </p>
            <p className="mt-2 text-sm text-emerald-200">
              <strong>Simple Summary:</strong> CNIC se direct bill nahi milta
              — Reference Number se milta hai{" "}
              <span aria-hidden="true">✅</span>
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="inline-block rounded-xl bg-white px-8 py-4 text-lg font-bold text-emerald-900 shadow transition hover:bg-emerald-50"
              >
                <span aria-hidden="true">⚡</span> Abhi MEPCO Bill Check
                Karein →
              </Link>
              <Link
                href="/mepco-bill-calculator"
                className="inline-block rounded-xl border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <span aria-hidden="true">📊</span> Bill Calculator
              </Link>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              RELATED GUIDES
          ══════════════════════════════════════════ */}
          <section className="mt-12 rounded-3xl bg-slate-900 p-7 text-white md:p-10">
            <h2 className="text-3xl font-extrabold">
              Related MEPCO Guides — Aur Seekhein
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {RELATED_GUIDES.map((guide, i) => (
                <Link
                  key={i}
                  href={guide.href}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <span className="text-lg font-semibold">
                    <span aria-hidden="true">{guide.icon}</span>{" "}
                    {guide.title}
                  </span>
                  <p className="mt-1 text-sm text-slate-400">{guide.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════
              LAST UPDATED — Fixed: 2026 date
          ══════════════════════════════════════════ */}
          <p className="mt-10 text-center text-xs text-slate-400">
            Last updated:{" "}
            <time dateTime={LAST_UPDATED}>
              {new Date(LAST_UPDATED).toLocaleDateString("en-PK", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            . This guide covers MEPCO bill checking for all 13 districts of
            South Punjab, Pakistan. Information is based on current PITC/MEPCO
            billing system behavior.
          </p>
        </div>
      </main>
    </>
  );
}