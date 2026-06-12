import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

const CONFIG = {
  SITE_URL: "https://www.mepcoonlinebill.net",
  SITE_NAME: "MEPCO Online Bill Check",
  CURRENT_YEAR: 2026,
  CURRENT_MONTH: "June",
  BILL_FORM_ACTION: "https://bill.pitc.com.pk/mepcobill",
} as const;

// ============================================================================
// TYPES
// ============================================================================

type SimpleLink = { label: string; href: string };
type GuideCard = { icon: string; title: string; href: string; desc: string };
type FAQ = { q: string; a: string };

// ============================================================================
// DATA
// ============================================================================

const QUICK_LINKS: SimpleLink[] = [
  { label: "Find Reference Number", href: "#reference-number" },
  { label: "Customer ID Guide", href: "/mepco-customer-id-guide" },
  { label: "Duplicate Bill Guide", href: "/mepco-duplicate-bill-guide" },
  { label: "Bill Calculator", href: "/mepco-bill-calculator" },
  { label: "Bill by CNIC", href: "/mepco-bill-check-by-cnic" },
  { label: "Urdu Guide", href: "/mepco-bill-urdu" },
];

const GUIDE_CARDS: GuideCard[] = [
  {
    icon: "🔢",
    title: "Reference Number Guide",
    href: "/mepco-reference-number-guide",
    desc: "Find where the 14-digit reference number is written on your old bill.",
  },
  {
    icon: "🆔",
    title: "Customer ID Guide",
    href: "/mepco-customer-id-guide",
    desc: "Learn how MEPCO customer ID can help with online bill checking.",
  },
  {
    icon: "📄",
    title: "Duplicate Bill Guide",
    href: "/mepco-duplicate-bill-guide",
    desc: "Print, download, or save your MEPCO duplicate bill as PDF.",
  },
  {
    icon: "🧾",
    title: "Bill Calculator",
    href: "/mepco-bill-calculator",
    desc: "Estimate your electricity bill using consumed units.",
  },
];

const POPULAR_SEARCHES: SimpleLink[] = [
  { label: "MEPCO bill check", href: "#bill-check" },
  { label: "MEPCO online bill", href: "#bill-check" },
  { label: "MEPCO duplicate bill", href: "/mepco-duplicate-bill-guide" },
  { label: "MEPCO bill by reference number", href: "#reference-number" },
  { label: "MEPCO bill by customer ID", href: "/mepco-customer-id-guide" },
  { label: "MEPCO bill by CNIC", href: "/mepco-bill-check-by-cnic" },
  { label: "MEPCO bill print", href: "/mepco-duplicate-bill-guide" },
  { label: "MEPCO bill download", href: "/mepco-duplicate-bill-guide" },
  { label: "MEPCO bill not showing", href: "#troubleshooting" },
  { label: "MEPCO due date", href: "/mepco-bill-due-date-guide" },
];

const FOOTER_LINKS: SimpleLink[] = [
  { label: "About Author", href: "/about-author" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const FAQS: FAQ[] = [
  {
    q: "How can I check my MEPCO bill online?",
    a: "Enter your 14-digit reference number in the MEPCO bill check form and press the check button. The bill opens through the official PITC MEPCO bill system.",
  },
  {
    q: "Can I check MEPCO bill by customer ID?",
    a: "Some official bill systems support customer ID. If reference number does not work, check your old bill for customer ID and use the official PITC bill page.",
  },
  {
    q: "Can I check MEPCO bill by CNIC?",
    a: "MEPCO duplicate bill checking commonly uses reference number or customer ID. Avoid entering CNIC on unknown websites unless you are using an official system.",
  },
  {
    q: "Where is the 14-digit reference number?",
    a: "The reference number is printed on your previous MEPCO electricity bill, usually near the top section of the bill.",
  },
  {
    q: "Can I print or download a duplicate MEPCO bill?",
    a: "Yes. Once the bill opens, use your browser print option to print it or save it as a PDF.",
  },
  {
    q: "What if my MEPCO bill is not showing?",
    a: "Check that the reference number has exactly 14 digits and no spaces. If the issue continues, try again later or use the official bill system directly.",
  },
  {
    q: "Is this the official MEPCO website?",
    a: "No. This is an independent information website. Bill data is opened through official PITC/MEPCO systems.",
  },
];

// ============================================================================
// JSON-LD SCHEMAS
// ============================================================================

const getSchemas = () => [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: CONFIG.SITE_NAME,
    alternateName: [
      "MEPCO Bill Check",
      "MEPCO Online Bill",
      "MEPCO Duplicate Bill",
      "MEPCO Bill Online Check",
      "میپکو بل چیک",
      "میپکو آن لائن بل",
    ],
    url: CONFIG.SITE_URL,
    inLanguage: ["en-PK", "ur-PK"],
    description:
      "Independent MEPCO bill check information website for users who want to open their electricity bill using a reference number or customer ID.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `MEPCO Bill Check Online ${CONFIG.CURRENT_YEAR}`,
    url: CONFIG.SITE_URL,
    description:
      "Check MEPCO electricity bill online by entering a reference number and opening the official PITC bill page.",
    isPartOf: {
      "@type": "WebSite",
      name: CONFIG.SITE_NAME,
      url: CONFIG.SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: "MEPCO online bill check and duplicate bill",
    },
    inLanguage: ["en-PK", "ur-PK"],
    dateModified: `${CONFIG.CURRENT_YEAR}-06-01`,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: CONFIG.SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "MEPCO Bill Check Online",
        item: CONFIG.SITE_URL,
      },
    ],
  },
];

// ============================================================================
// METADATA
// ============================================================================

export const metadata: Metadata = {
  title: `MEPCO Bill Check Online ${CONFIG.CURRENT_YEAR} | Duplicate Bill by Reference Number`,
  description:
    "Check MEPCO bill online by reference number or customer ID. View, print, or download your duplicate MEPCO electricity bill through the official PITC bill page.",
  alternates: { canonical: CONFIG.SITE_URL },
  openGraph: {
    title: `MEPCO Bill Check Online ${CONFIG.CURRENT_YEAR}`,
    description:
      "Check MEPCO online bill by reference number or customer ID. View, print, or download your duplicate electricity bill.",
    url: CONFIG.SITE_URL,
    type: "website",
    siteName: CONFIG.SITE_NAME,
    images: [
      {
        url: `${CONFIG.SITE_URL}/mepco-logo.png`,
        width: 512,
        height: 512,
        alt: "MEPCO Online Bill Check logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `MEPCO Bill Check Online ${CONFIG.CURRENT_YEAR}`,
    description: "Check MEPCO bill online by reference number or customer ID.",
    images: [`${CONFIG.SITE_URL}/mepco-logo.png`],
  },
};

// ============================================================================
// COMPONENTS (Extracted as functions for reusability)
// ============================================================================

function Header() {
  return (
    <header className="border-b border-emerald-900/20 bg-emerald-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="MEPCO Online Bill Check home"
        >
          <Image
            src="/mepco-logo.png"
            alt="MEPCO Online Bill Check"
            width={48}
            height={48}
            priority
            className="rounded-full bg-white p-1"
          />
          <div>
            <p className="text-xl font-black leading-tight">MEPCO Bill Check</p>
            <p className="text-xs text-emerald-200">
              Independent electricity bill information
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-emerald-100 md:flex">
          <a href="#bill-check" className="hover:text-white">
            Check Bill
          </a>
          <a href="#reference-number" className="hover:text-white">
            Reference
          </a>
          <a href="#customer-id" className="hover:text-white">
            Customer ID
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}

function BillCheckHero() {
  return (
    <section
      id="bill-check"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 text-white"
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_28%),radial-gradient(circle_at_80%_0%,white,transparent_24%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:py-16">
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
            ⚡ MEPCO duplicate bill by reference number
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            MEPCO Bill Check Online {CONFIG.CURRENT_YEAR}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white">
            Check your MEPCO online bill using your reference number or customer
            ID. Open the official PITC MEPCO bill page to view, print, or
            download your duplicate electricity bill.
          </p>

          <p
            className="mt-4 max-w-2xl text-base leading-8 text-white/95"
            lang="ur"
            dir="rtl"
          >
            اپنا میپکو ریفرنس نمبر یا کسٹمر آئی ڈی استعمال کریں اور آفیشل بل
            پیج کھولیں۔ وہاں سے آپ اپنا بل دیکھ، پرنٹ یا ڈاؤن لوڈ کر سکتے ہیں۔
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {[
              ["📄", "Duplicate Bill", "View or print online"],
              ["🔢", "Reference No", "Use old bill"],
              ["🆔", "Customer ID", "Official bill lookup"],
              ["📱", "Mobile Friendly", "Works on phone"],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-2xl">{icon}</p>
                <p className="mt-2 font-bold">{title}</p>
                <p className="text-sm text-white/90">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white p-5 text-slate-900 shadow-2xl sm:p-7">
          <div className="mb-5 rounded-2xl bg-emerald-50 p-4">
            <h2 className="text-2xl font-black text-emerald-950">
              🔍 Check Your MEPCO Bill
            </h2>
            <p className="mt-1 text-sm text-emerald-800">
              Enter your 14-digit reference number without spaces or dashes.
            </p>
            <p className="mt-1 text-sm text-emerald-800" lang="ur" dir="rtl">
              ریفرنس نمبر بغیر اسپیس کے درج کریں۔
            </p>
          </div>

          <form
            action={CONFIG.BILL_FORM_ACTION}
            method="get"
            target="_blank"
            className="space-y-4"
          >
            <div>
              <label htmlFor="refno" className="block text-sm font-bold text-slate-700">
                14-Digit Reference Number
              </label>
              <input
                id="refno"
                name="refno"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                minLength={14}
                maxLength={14}
                pattern="[0-9]{14}"
                placeholder="Example: 06154720809306"
                required
                className="mt-2 h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 text-lg font-bold tracking-widest text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
              />
              <p className="mt-2 text-xs text-slate-500">
                The reference number is printed on your previous MEPCO bill.
                Some official systems may also support customer ID.
              </p>
            </div>

            <button
              type="submit"
              className="h-14 w-full rounded-2xl bg-emerald-700 px-5 text-lg font-black text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              Check Bill Now
            </button>
          </form>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            <strong>Important:</strong> This website is independent and is not
            affiliated with MEPCO, PITC, WAPDA, NEPRA, or any government department.
            The bill page opens through the official PITC/MEPCO system.
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickLinksBar() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
        <nav aria-label="Quick links" className="flex flex-wrap gap-3 text-sm font-semibold">
          {QUICK_LINKS.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full bg-emerald-50 px-4 py-2 text-emerald-800 hover:bg-emerald-100"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 hover:bg-slate-200"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </section>
  );
}

function ReferenceNumberGuide() {
  return (
    <section id="reference-number" className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
            🔢 Reference Number Guide
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            How to Find Your MEPCO Reference Number
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Your 14-digit reference number is printed on your old electricity bill.
            Use the same number to open your latest duplicate bill online.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["📄", "Open an old bill", "Take any previous MEPCO electricity bill from your home or records."],
            ["🔢", "Find the reference number", "Look near the top section of the bill for a 14-digit reference number."],
            ["✅", "Enter it online", "Type the number in the form above and open the official PITC bill page."],
          ].map(([icon, title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                {icon}
              </div>
              <h3 className="text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
          <h3 className="text-xl font-black text-emerald-950">
            MEPCO bill check in Urdu
          </h3>
          <p className="mt-2 leading-8 text-emerald-900" lang="ur" dir="rtl">
            میپکو بل آن لائن چیک کرنے کے لیے اپنے پرانے بل پر موجود 14
            ہندسوں کا ریفرنس نمبر استعمال کریں۔ اگر نمبر درست ہو تو بل آفیشل
            سسٹم پر کھل جائے گا۔
          </p>
          <p className="mt-2 text-sm leading-7 text-emerald-800">
            MEPCO bill online check karne ke liye apne purane bill par mojood
            14 handson ka reference number use karein.
          </p>
        </div>
      </div>
    </section>
  );
}

function CustomerIDSection() {
  return (
    <section id="customer-id" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
              🆔 Customer ID
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              MEPCO Bill by Customer ID
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Some official bill systems may support customer ID in addition to
              reference number. If you cannot use your reference number, check
              your old bill for customer ID and use the official bill system.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-black text-slate-950">
              Reference Number vs Customer ID
            </h3>
            <ul className="mt-4 grid gap-3 text-slate-700">
              <li>• Reference number is commonly used for duplicate bill checking.</li>
              <li>• Customer ID may also be available on your electricity bill.</li>
              <li>• Do not enter CNIC on unknown bill-check websites.</li>
              <li>• Always verify final amount and due date on the official bill page.</li>
            </ul>

            <Link
              href="/mepco-customer-id-guide"
              className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white hover:bg-emerald-800"
            >
              Read Customer ID Guide →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DuplicateBillSection() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
              📄 Duplicate Bill
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              View, Print, or Download Your MEPCO Bill
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              After your bill opens on the official bill page, use your browser
              print option to print the bill or save it as PDF. This helps when
              the paper bill is late, lost, or not delivered.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Check bill amount", "Review your current payable amount."],
              ["View due date", "Check due date before payment."],
              ["Print duplicate bill", "Use the browser print option."],
              ["Save as PDF", "Save a copy from the print menu."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Troubleshooting() {
  return (
    <section id="troubleshooting" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">
            ⚠️ Troubleshooting
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            MEPCO Bill Not Showing?
          </h2>
          <p className="mt-3 max-w-3xl leading-8 text-slate-700">
            If your MEPCO bill does not open, check that the reference number has
            exactly 14 digits and no spaces. If the bill still does not show,
            the official PITC system may be temporarily unavailable or the billing
            record may not be updated yet.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/mepco-bill-not-received-guide"
              className="rounded-full bg-white px-4 py-2 text-sm font-black text-amber-900 hover:bg-amber-100"
            >
              Bill Not Received Guide
            </Link>
            <Link
              href="/mepco-wrong-bill-solution"
              className="rounded-full bg-white px-4 py-2 text-sm font-black text-amber-900 hover:bg-amber-100"
            >
              Wrong Bill Solution
            </Link>
            <Link
              href="/mepco-bill-correction-guide"
              className="rounded-full bg-white px-4 py-2 text-sm font-black text-amber-900 hover:bg-amber-100"
            >
              Bill Correction Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopularSearches() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
          🔎 Popular Searches
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
          Common MEPCO Bill Search Terms
        </h2>
        <p className="mt-3 max-w-3xl leading-8 text-slate-600">
          These links cover related MEPCO online bill searches while keeping this
          homepage focused on duplicate bill checking.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {POPULAR_SEARCHES.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function GuidesSection() {
  return (
    <section id="guides" className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
              📚 Helpful Guides
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              Important MEPCO Bill Guides
            </h2>
            <p className="mt-3 max-w-3xl leading-8 text-slate-600">
              These guides support the main bill check process without turning
              the homepage into a full directory.
            </p>
          </div>
          <Link
            href="/all-mepco-guides"
            className="w-fit rounded-full border border-emerald-200 px-5 py-3 text-sm font-black text-emerald-800 hover:bg-emerald-50"
          >
            View all guides
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {GUIDE_CARDS.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <div className="text-2xl">{guide.icon}</div>
              <h3 className="mt-3 text-lg font-black text-slate-950">{guide.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{guide.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-2xl font-black text-slate-950">
              All MEPCO Consumer Guides
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              Browse taxes, FPA, QTA, complaints, new connection, tariff,
              solar, net metering, and other consumer help pages.
            </p>
            <Link
              href="/all-mepco-guides"
              className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white hover:bg-emerald-800"
            >
              View All MEPCO Guides →
            </Link>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-2xl font-black text-slate-950">
              MEPCO Regions Directory
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              Browse city-wise MEPCO bill help for Multan, Khanewal,
              Bahawalpur, Vehari, Sahiwal, Rahim Yar Khan, and other service areas.
            </p>
            <Link
              href="/all-mepco-regions"
              className="mt-5 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white hover:bg-emerald-800"
            >
              View All MEPCO Regions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQComponent() {
  return (
    <section id="faq" className="bg-slate-50 py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
            ❓ FAQ
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            MEPCO Online Bill Check Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none font-black text-slate-950">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-emerald-700 group-open:rotate-180">⌄</span>
                </span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndependentNotice() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-black text-slate-950">
            Independent Information Notice
          </h2>
          <p className="mt-3 leading-8 text-slate-700">
            MEPCO Online Bill Check is an independent consumer information
            website. It is not affiliated with MEPCO, PITC, WAPDA, NEPRA, or
            any government department. Official bill data, payable amount, due
            date, and billing record should always be verified from the official
            bill page that opens through PITC/MEPCO systems.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Last reviewed: {CONFIG.CURRENT_MONTH} {CONFIG.CURRENT_YEAR}. Information pages
            are for general consumer guidance only and should not replace
            official notices or official bills.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full bg-white px-4 py-2 text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-2xl font-black">MEPCO Online Bill Check</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-emerald-100">
            Independent MEPCO bill check information website for users who want
            to open their electricity bill with a reference number or customer ID.
          </p>
        </div>

        <div>
          <p className="font-black">Bill Check</p>
          <ul className="mt-3 space-y-2 text-sm text-emerald-100">
            <li>
              <a href="#bill-check" className="hover:text-white">
                Check Bill
              </a>
            </li>
            <li>
              <Link href="/mepco-reference-number-guide" className="hover:text-white">
                Reference Number Guide
              </Link>
            </li>
            <li>
              <Link href="/mepco-customer-id-guide" className="hover:text-white">
                Customer ID Guide
              </Link>
            </li>
            <li>
              <Link href="/mepco-duplicate-bill-guide" className="hover:text-white">
                Duplicate Bill Guide
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-black">Information</p>
          <ul className="mt-3 space-y-2 text-sm text-emerald-100">
            <li>
              <Link href="/about-author" className="hover:text-white">
                About Author
              </Link>
            </li>
            <li>
              <Link href="/editorial-policy" className="hover:text-white">
                Editorial Policy
              </Link>
            </li>
            <li>
              <Link href="/all-mepco-guides" className="hover:text-white">
                All MEPCO Guides
              </Link>
            </li>
            <li>
              <Link href="/all-mepco-regions" className="hover:text-white">
                All MEPCO Regions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-emerald-200">
        © {CONFIG.CURRENT_YEAR} {CONFIG.SITE_NAME}. Independent website. Not affiliated with
        MEPCO or PITC.
      </div>
    </footer>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function Home() {
  const schemas = getSchemas();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />
      <BillCheckHero />
      <QuickLinksBar />
      <ReferenceNumberGuide />
      <CustomerIDSection />
      <DuplicateBillSection />
      <Troubleshooting />
      <PopularSearches />
      <GuidesSection />
      <FAQComponent />
      <IndependentNotice />
      <Footer />
    </main>
  );
}