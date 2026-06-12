import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.mepcoonlinebill.net";
const SITE_NAME = "MEPCO Online Bill Check";
const CURRENT_YEAR = 2026;

export const metadata: Metadata = {
  title: `MEPCO Bill Check Online ${CURRENT_YEAR} | Duplicate Bill by Reference Number`,
  description:
    "Check MEPCO bill online using your 14-digit reference number. Open the official PITC MEPCO bill page to view, print, or download your duplicate electricity bill.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `MEPCO Bill Check Online ${CURRENT_YEAR}`,
    description:
      "Check MEPCO online bill by 14-digit reference number. View, print, or download your duplicate MEPCO electricity bill through the official PITC bill system.",
    url: SITE_URL,
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/mepco-logo.png`,
        width: 512,
        height: 512,
        alt: "MEPCO Online Bill Check logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `MEPCO Bill Check Online ${CURRENT_YEAR}`,
    description:
      "Check MEPCO bill online using your 14-digit reference number.",
    images: [`${SITE_URL}/mepco-logo.png`],
  },
};

type CityLink = {
  name: string;
  href: string;
};

type GuideLink = {
  title: string;
  href: string;
  desc: string;
  icon: string;
};

type SimpleLink = {
  label: string;
  href: string;
};

const cityLinks: CityLink[] = [
  { name: "Multan", href: "/multan-bill-check" },
  { name: "Khanewal", href: "/khanewal-bill-check" },
  { name: "Bahawalpur", href: "/bahawalpur-bill-check" },
  { name: "Vehari", href: "/vehari-bill-check" },
  { name: "Lodhran", href: "/lodhran-bill-check" },
  { name: "Sahiwal", href: "/sahiwal-bill-check" },
  { name: "Rahim Yar Khan", href: "/rahim-yar-khan-bill-check" },
  { name: "Muzaffargarh", href: "/muzaffargarh-bill-check" },
  { name: "Dera Ghazi Khan", href: "/dera-ghazi-khan-bill-check" },
  { name: "Bahawalnagar", href: "/bahawalnagar-bill-check" },
  { name: "Layyah", href: "/layyah-bill-check" },
  { name: "Taunsa", href: "/taunsa-bill-check" },
  { name: "Rajanpur", href: "/rajanpur-bill-check" },
];

const mainGuides: GuideLink[] = [
  {
    icon: "🔢",
    title: "Reference Number Guide",
    href: "/mepco-reference-number-guide",
    desc: "Find where the 14-digit reference number is written on your bill.",
  },
  {
    icon: "📄",
    title: "Duplicate Bill Guide",
    href: "/mepco-duplicate-bill-guide",
    desc: "Learn how to print or download a duplicate MEPCO electricity bill.",
  },
  {
    icon: "🧾",
    title: "Bill Calculator",
    href: "/mepco-bill-calculator",
    desc: "Estimate monthly electricity charges using consumed units.",
  },
  {
    icon: "🆔",
    title: "Bill Check by CNIC",
    href: "/mepco-bill-check-by-cnic",
    desc: "Understand whether MEPCO bill can be checked by CNIC.",
  },
  {
    icon: "⚡",
    title: "200 Units Rule",
    href: "/mepco-200-units-rule",
    desc: "Learn how the 200-unit limit affects protected consumers.",
  },
  {
    icon: "🛡️",
    title: "Protected Consumer Guide",
    href: "/mepco-protected-consumer-guide",
    desc: "Learn what protected consumer means and why it matters.",
  },
  {
    icon: "⛽",
    title: "FPA Charges Guide",
    href: "/mepco-fpa-charges-guide",
    desc: "Understand Fuel Price Adjustment charges in your bill.",
  },
  {
    icon: "💰",
    title: "Taxes Explained",
    href: "/mepco-taxes-explained",
    desc: "Understand GST, QTA, fixed charges, and other bill items.",
  },
];

const popularSearches: SimpleLink[] = [
  { label: "MEPCO bill check", href: "#bill-check" },
  { label: "MEPCO online bill check", href: "#bill-check" },
  { label: "MEPCO duplicate bill", href: "/mepco-duplicate-bill-guide" },
  { label: "MEPCO bill check by reference number", href: "#reference-number" },
  { label: "MEPCO bill print", href: "/mepco-duplicate-bill-guide" },
  { label: "MEPCO bill download", href: "/mepco-duplicate-bill-guide" },
  { label: "MEPCO customer ID", href: "/mepco-customer-id-guide" },
  { label: "MEPCO bill by CNIC", href: "/mepco-bill-check-by-cnic" },
];

const billHelpLinks: SimpleLink[] = [
  { label: "Due Date Guide", href: "/mepco-bill-due-date-guide" },
  { label: "Bill Installment Guide", href: "/mepco-bill-installment-guide" },
  { label: "Payment Methods Guide", href: "/mepco-bill-payment-methods-guide" },
  { label: "Bill Not Received Guide", href: "/mepco-bill-not-received-guide" },
  { label: "Bill Correction Guide", href: "/mepco-bill-correction-guide" },
  { label: "Wrong Bill Solution", href: "/mepco-wrong-bill-solution" },
  { label: "Why Bill Increased?", href: "/mepco-bill-increased-guide" },
  { label: "MEPCO Bill Urdu", href: "/mepco-bill-urdu" },
];

const tariffAndUsageLinks: SimpleLink[] = [
  { label: "Bill Slabs Guide", href: "/mepco-bill-slabs-guide" },
  { label: "Tariff Guide", href: "/mepco-tariff-guide" },
  { label: "QTA Charges Guide", href: "/mepco-qta-charges-guide" },
  { label: "Unprotected Consumer Guide", href: "/mepco-unprotected-consumer-guide" },
  { label: "Peak Hours Guide", href: "/mepco-peak-hours-guide" },
  { label: "Meter Reading Guide", href: "/mepco-meter-reading-guide" },
  { label: "Load Shedding Guide", href: "/mepco-load-shedding-guide" },
  { label: "FPA Charges Guide", href: "/mepco-fpa-charges-guide" },
];

const connectionAndComplaintLinks: SimpleLink[] = [
  { label: "New Connection Guide", href: "/mepco-new-connection-guide" },
  { label: "Demand Notice Guide", href: "/mepco-demand-notice-guide" },
  { label: "Load Extension Guide", href: "/mepco-load-extension-guide" },
  { label: "Name Change Guide", href: "/mepco-name-change-guide" },
  { label: "Security Deposit Guide", href: "/mepco-security-deposit" },
  { label: "Disconnection & Reconnection", href: "/mepco-disconnection-reconnection-guide" },
  { label: "Meter Complaint Guide", href: "/mepco-meter-complaint-guide" },
  { label: "Complaint Tracking Guide", href: "/mepco-complaint-tracking-guide" },
  { label: "Transformer Complaint Guide", href: "/mepco-transformer-complaint-guide" },
  { label: "Application Forms Guide", href: "/mepco-application-forms-guide" },
  { label: "Change of Tariff Guide", href: "/mepco-change-of-tariff-guide" },
];

const solarLinks: SimpleLink[] = [
  { label: "Solar Savings Calculator", href: "/mepco-solar-savings-calculator" },
  { label: "Solar ROI Calculator", href: "/mepco-solar-roi-calculator" },
  { label: "Net Metering Guide", href: "/mepco-net-metering-guide" },
];

const footerLinks: SimpleLink[] = [
  { label: "About Author", href: "/about-author" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "All MEPCO Regions", href: "/all-mepco-regions" },
  { label: "All Electricity Companies", href: "/all-electricity-companies" },
];

const faqs = [
  {
    q: "How can I check my MEPCO bill online?",
    a: "Enter your 14-digit reference number in the MEPCO bill check form and press the check button. Your bill will open on the official PITC MEPCO bill page.",
  },
  {
    q: "Where can I find my 14-digit reference number?",
    a: "The reference number is printed on your previous MEPCO electricity bill, usually near the top section of the bill.",
  },
  {
    q: "Can I download a duplicate MEPCO bill?",
    a: "Yes. After your bill opens on the official PITC page, you can print it or save it as a PDF from your browser.",
  },
  {
    q: "Can I check MEPCO bill by customer ID or CNIC?",
    a: "MEPCO duplicate bill checking commonly uses the 14-digit reference number. Some official systems may also support customer ID. Avoid entering CNIC on unknown websites.",
  },
  {
    q: "Is this the official MEPCO website?",
    a: "No. This is an independent information website. Bill data is opened through official PITC/MEPCO systems.",
  },
  {
    q: "Is MEPCO bill checking free?",
    a: "Yes. Online duplicate bill checking is free. You only need a valid reference number.",
  },
  {
    q: "What should I do if my bill does not open?",
    a: "Check that the reference number has exactly 14 digits and no spaces. If the issue continues, try again later on the official PITC bill system.",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: [
    "MEPCO Bill Check",
    "MEPCO Online Bill",
    "MEPCO Duplicate Bill",
    "MEPCO Bill Online Check",
    "میپکو بل چیک",
    "میپکو آن لائن بل",
  ],
  url: SITE_URL,
  inLanguage: ["en-PK", "ur-PK"],
  description:
    "Independent MEPCO bill check information website for users who want to open their electricity bill using a 14-digit reference number.",
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `MEPCO Bill Check Online ${CURRENT_YEAR}`,
  url: SITE_URL,
  description:
    "Check MEPCO electricity bill online by entering a 14-digit reference number and opening the official PITC bill page.",
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  about: {
    "@type": "Thing",
    name: "MEPCO online bill check and duplicate bill",
  },
  inLanguage: ["en-PK", "ur-PK"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
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
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "MEPCO Bill Check Online",
      item: SITE_URL,
    },
  ],
};

function LinkList({
  title,
  links,
}: {
  title: string;
  links: SimpleLink[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-emerald-50 hover:text-emerald-800"
            >
              <span className="text-emerald-700">→</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
            <a href="#bill-check" className="hover:text-white">Check Bill</a>
            <a href="#reference-number" className="hover:text-white">Reference Number</a>
            <a href="#cities" className="hover:text-white">Cities</a>
            <a href="#guides" className="hover:text-white">Guides</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
        </div>
      </header>

      <section
        id="bill-check"
        className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 text-white"
      >
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_28%),radial-gradient(circle_at_80%_0%,white,transparent_24%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-100">
              ⚡ MEPCO duplicate bill by reference number
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              MEPCO Bill Check Online {CURRENT_YEAR}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
              Check your MEPCO online bill using a 14-digit reference number.
              Open the official PITC MEPCO bill page to view, print, or download
              your duplicate electricity bill.
            </p>
            <p
              className="mt-4 max-w-2xl text-base leading-8 text-emerald-100"
              lang="ur"
              dir="rtl"
            >
              اپنا 14 ہندسوں کا میپکو ریفرنس نمبر درج کریں اور آفیشل بل پیج
              کھولیں۔ وہاں سے آپ اپنا بل دیکھ، پرنٹ یا ڈاؤن لوڈ کر سکتے ہیں۔
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-2xl">📄</p>
                <p className="mt-2 font-bold">Duplicate Bill</p>
                <p className="text-sm text-emerald-100">View or print online</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-2xl">🔢</p>
                <p className="mt-2 font-bold">14-Digit Ref No</p>
                <p className="text-sm text-emerald-100">Use previous bill</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-2xl">🧾</p>
                <p className="mt-2 font-bold">Print Bill</p>
                <p className="text-sm text-emerald-100">Save as PDF</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <p className="text-2xl">📱</p>
                <p className="mt-2 font-bold">Mobile Friendly</p>
                <p className="text-sm text-emerald-100">Works on phone</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white p-5 text-slate-900 shadow-2xl sm:p-7">
            <div className="mb-5 rounded-2xl bg-emerald-50 p-4">
              <h2 className="text-2xl font-black text-emerald-950">
                🔍 Check Your MEPCO Bill
              </h2>
              <p className="mt-1 text-sm text-emerald-800">
                Enter reference number without spaces or dashes.
              </p>
              <p className="mt-1 text-sm text-emerald-800" lang="ur" dir="rtl">
                ریفرنس نمبر بغیر اسپیس کے درج کریں۔
              </p>
            </div>

            <form
              action="https://bill.pitc.com.pk/mepcobill"
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

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <nav
            aria-label="Quick links"
            className="flex flex-wrap gap-3 text-sm font-semibold"
          >
            <a className="rounded-full bg-emerald-50 px-4 py-2 text-emerald-800 hover:bg-emerald-100" href="#reference-number">
              🔢 Find Reference Number
            </a>
            <Link className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 hover:bg-slate-200" href="/mepco-duplicate-bill-guide">
              📄 Duplicate Bill
            </Link>
            <Link className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 hover:bg-slate-200" href="/mepco-bill-calculator">
              🧾 Bill Calculator
            </Link>
            <Link className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 hover:bg-slate-200" href="/mepco-bill-check-by-cnic">
              🆔 Bill by CNIC
            </Link>
            <Link className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 hover:bg-slate-200" href="/mepco-bill-urdu">
              🇵🇰 Urdu Guide
            </Link>
            <Link className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 hover:bg-slate-200" href="/all-mepco-regions">
              📍 All Regions
            </Link>
          </nav>
        </div>
      </section>

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
              Your 14-digit reference number is printed on your old electricity
              bill. Use the same number to open your latest duplicate bill online.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Open an old bill",
                icon: "📄",
                text: "Take any previous MEPCO electricity bill from your home or records.",
              },
              {
                title: "Find the reference number",
                icon: "🔢",
                text: "Look near the top section of the bill for a 14-digit reference number.",
              },
              {
                title: "Enter it online",
                icon: "✅",
                text: "Type the number in the form above and open the official bill page.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
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

      <section className="bg-white py-14">
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
                print option to print the bill or save it as PDF. This is useful
                when the paper bill is late, lost, or not delivered.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Check payable amount", text: "Open your latest bill and review the current payable amount." },
                { title: "View due date", text: "Check the due date before paying your electricity bill." },
                { title: "Print duplicate bill", text: "Use the print option from the official bill page." },
                { title: "Save as PDF", text: "Save your bill as PDF from your browser print menu." },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
              🔎 Popular Searches
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              Common MEPCO Bill Search Terms
            </h2>
            <p className="mt-3 max-w-3xl leading-8 text-slate-600">
              These quick links cover common MEPCO online bill check searches while keeping the homepage focused on duplicate bill checking.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {popularSearches.map((item) => (
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
            ))}
          </div>
        </div>
      </section>

      <section id="cities" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
              📍 City Pages
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              MEPCO Bill Check by City
            </h2>
            <p className="mt-3 max-w-3xl leading-8 text-slate-600">
              Use these city pages for MEPCO bill checking information and local
              guidance across major South Punjab service areas.
            </p>
          </div>

         <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
  <h3 className="text-2xl font-black text-slate-950">
    MEPCO Regions Directory
  </h3>

  <p className="mt-3 max-w-3xl leading-8 text-slate-700">
    Looking for city-specific MEPCO bill information? Browse all MEPCO
    regions including Multan, Khanewal, Bahawalpur, Vehari, Lodhran,
    Sahiwal, Rahim Yar Khan, Muzaffargarh, Dera Ghazi Khan, Taunsa,
    Rajanpur, and other MEPCO service areas.
  </p>

  <Link
    href="/all-mepco-regions"
    className="mt-5 inline-flex items-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-800"
  >
    View All MEPCO Regions →
  </Link>
</div>
        </div>
      </section>

      <section id="guides" className="bg-slate-50 py-14">
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
                These guides support the main bill check process without changing
                the main purpose of this homepage.
              </p>
            </div>
            <Link
              href="/all-mepco-regions"
              className="w-fit rounded-full border border-emerald-200 px-5 py-3 text-sm font-black text-emerald-800 hover:bg-emerald-50"
            >
              View all regions
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {mainGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-3xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                <div className="text-2xl">{guide.icon}</div>
                <h3 className="mt-3 text-lg font-black text-slate-950">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
              🧭 Complete Help Center
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              More MEPCO Consumer Resources
            </h2>
            <p className="mt-3 max-w-3xl leading-8 text-slate-600">
              The homepage remains focused on bill checking, while these links keep
              related guides discoverable for users and search engines.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <LinkList title="Bill Help" links={billHelpLinks} />
            <LinkList title="Tariff, Taxes & Usage" links={tariffAndUsageLinks} />
            <LinkList title="Connection & Complaints" links={connectionAndComplaintLinks} />
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <LinkList title="Solar & Net Metering" links={solarLinks} />
            <LinkList title="Site Information" links={footerLinks} />
          </div>
        </div>
      </section>

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
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-5">
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
              date, and billing record should always be verified from the
              official bill page that opens through PITC/MEPCO systems.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Last reviewed: June {CURRENT_YEAR}. Information pages are for general
              consumer guidance only and should not replace official notices or official bills.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
              {footerLinks.slice(0, 7).map((link) => (
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

      <footer className="bg-emerald-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-2xl font-black">MEPCO Online Bill Check</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-emerald-100">
              Independent MEPCO bill check information website for users who want
              to open their electricity bill with a 14-digit reference number.
            </p>
          </div>

          <div>
            <p className="font-black">Bill Check</p>
            <ul className="mt-3 space-y-2 text-sm text-emerald-100">
              <li><a href="#bill-check" className="hover:text-white">Check Bill</a></li>
              <li><Link href="/mepco-reference-number-guide" className="hover:text-white">Reference Number Guide</Link></li>
              <li><Link href="/mepco-duplicate-bill-guide" className="hover:text-white">Duplicate Bill Guide</Link></li>
              <li><Link href="/mepco-bill-calculator" className="hover:text-white">Bill Calculator</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-black">Information</p>
            <ul className="mt-3 space-y-2 text-sm text-emerald-100">
              <li><Link href="/about-author" className="hover:text-white">About Author</Link></li>
              <li><Link href="/editorial-policy" className="hover:text-white">Editorial Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/all-mepco-regions" className="hover:text-white">All MEPCO Regions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-emerald-200">
          © {CURRENT_YEAR} {SITE_NAME}. Independent website. Not affiliated with
          MEPCO or PITC.
        </div>
      </footer>
    </main>
  );
}
