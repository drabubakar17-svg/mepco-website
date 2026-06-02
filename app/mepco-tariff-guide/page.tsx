import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Tariff Guide 2026 | Unit Rates, Slabs, Taxes in Urdu & English",
  description:
    "Understand MEPCO tariff, electricity unit rates, protected and unprotected consumers, peak/off-peak timing, taxes, slabs, and Urdu FAQs.",
  keywords: [
    "MEPCO tariff guide",
    "MEPCO unit rates",
    "electricity tariff Pakistan",
    "MEPCO protected consumer",
    "MEPCO unprotected consumer",
    "MEPCO peak off peak rates",
    "mepco tariff kya hota hai",
    "bijli unit rate pakistan",
    "میپکو ٹیرف",
    "بجلی یونٹ ریٹ",
    "پروٹیکٹڈ صارف کیا ہوتا ہے",
    "میپکو بل سلیب",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-tariff-guide",
  },
};

const quickLinks = [
  { href: "#what-is-tariff", text: "1. What is MEPCO Tariff?" },
  { href: "#consumer-types", text: "2. Consumer Types" },
  { href: "#slabs", text: "3. Slabs and Unit Rates" },
  { href: "#taxes", text: "4. Taxes and Extra Charges" },
  { href: "#urdu-guide", text: "5. Urdu Guide" },
  { href: "#faqs", text: "6. FAQs" },
];

const consumerTypes = [
  {
    title: "Domestic Consumer",
    desc: "Home users normally fall under domestic tariff category. Their bill depends on units consumed, slab, taxes and applicable adjustments.",
  },
  {
    title: "Commercial Consumer",
    desc: "Shops, offices and business connections may fall under commercial tariff and usually have different billing rules than domestic users.",
  },
  {
    title: "Industrial Consumer",
    desc: "Factories and industrial users are billed according to industrial category, load and applicable tariff rules.",
  },
  {
    title: "Agricultural Consumer",
    desc: "Tube wells and agricultural connections may follow a separate tariff category depending on official rules.",
  },
];

const charges = [
  {
    title: "Energy Charges",
    desc: "Main electricity charges based on consumed units and applicable unit rate/slab.",
  },
  {
    title: "Fuel Price Adjustment (FPA)",
    desc: "A fuel cost adjustment that may increase or decrease depending on official monthly decisions.",
  },
  {
    title: "Quarterly Tariff Adjustment (QTA)",
    desc: "A quarterly adjustment that may appear on electricity bills under official rules.",
  },
  {
    title: "GST and Taxes",
    desc: "Government taxes such as GST and other applicable charges may be included in the final bill.",
  },
  {
    title: "Fixed Charges",
    desc: "Some consumer categories may include fixed charges depending on tariff type and load.",
  },
  {
    title: "Late Payment Surcharge",
    desc: "If the bill is paid after due date, late payment surcharge may be added.",
  },
];

const urduQueries = [
  "میپکو ٹیرف کیا ہوتا ہے؟",
  "بجلی کا یونٹ ریٹ کیسے چیک کریں؟",
  "پروٹیکٹڈ اور ان پروٹیکٹڈ صارف میں کیا فرق ہے؟",
  "میپکو بل میں ایف پی اے کیا ہوتا ہے؟",
  "بجلی بل میں سلیب کیسے لگتا ہے؟",
  "mepco tariff kya hota hai",
  "bijli ka unit rate kaise check kare",
  "protected consumer kya hota hai",
];

const relatedGuides = [
  {
    href: "/mepco-bill-slabs-guide",
    title: "Bill Slabs Guide",
    desc: "Understand electricity bill slabs and how unit usage affects charges.",
  },
  {
    href: "/mepco-taxes-explained",
    title: "Taxes Explained",
    desc: "Learn GST, FPA, QTA, fixed charges and other electricity bill items.",
  },
  {
    href: "/mepco-bill-calculator",
    title: "Bill Calculator",
    desc: "Estimate your monthly electricity bill using consumed units.",
  },
];

export default function MepcoTariffGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Breadcrumb Navigation */}
      <nav
        className="mb-6 text-xs font-medium uppercase tracking-wide text-slate-500"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="transition-colors hover:text-emerald-600">
              Home
            </Link>
          </li>
          <li className="text-slate-400" aria-hidden="true">
            /
          </li>
          <li className="font-semibold text-slate-800" aria-current="page">
            Tariff Guide
          </li>
        </ol>
      </nav>

      {/* Main Page Content Header */}
      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Tariff Guide 2026: Unit Rates, Slabs, Taxes and Urdu FAQs
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          MEPCO tariff explains how electricity charges are calculated for
          domestic, commercial, industrial and agricultural consumers. This guide
          explains tariff categories, unit slabs, protected consumers,
          peak/off-peak concepts, taxes and Urdu search questions in simple
          words.
        </p>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
          <strong>Important:</strong> Electricity tariff rates, taxes, FPA, QTA,
          fixed charges and government adjustments can change. Always verify
          latest rates from official MEPCO, NEPRA or bill notification sources
          before making payment or financial decisions.
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-slate-200 py-3.5 text-sm font-medium text-slate-500">
          <div>
            <span className="font-normal text-slate-400">Company:</span>{" "}
            <strong className="text-slate-700">
              Multan Electric Power Company (MEPCO)
            </strong>
          </div>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">
            |
          </span>
          <div>
            <span className="font-normal text-slate-400">Topic:</span>{" "}
            <strong className="text-slate-700">Electricity Tariff</strong>
          </div>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">
            |
          </span>
          <div>
            <span className="font-normal text-slate-400">Updated:</span>{" "}
            <strong className="text-slate-700">June 2026</strong>
          </div>
        </div>
      </header>

      {/* Table of Contents Section */}
      <section className="mb-12 rounded-2xl border border-slate-200/60 bg-slate-50 p-6 shadow-sm">
        <h2 className="mb-4 text-base font-bold tracking-tight text-slate-900">
          In This Guide:
        </h2>

        <ul className="grid grid-cols-1 gap-3 text-sm font-semibold text-emerald-700 md:grid-cols-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-emerald-900 hover:underline"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Content Sections Wrapper */}
      <div className="space-y-14">
        <section id="what-is-tariff" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What is MEPCO Tariff?
          </h2>

          <p className="mb-4 leading-relaxed text-slate-800">
            Tariff means the pricing structure used to calculate your
            electricity bill. It includes unit rate, consumer category, slab,
            taxes, fuel adjustment, quarterly adjustment and other approved
            charges.
          </p>

          <div className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <strong className="mb-1 block font-bold">Simple Meaning:</strong>
            Tariff tells how much electricity cost will be charged based on your
            usage, category and applicable government rules.
          </div>
        </section>

        <section id="consumer-types" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Common MEPCO Consumer Tariff Categories
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            Different consumers may have different tariff categories. Your
            category is usually shown on your electricity bill.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {consumerTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <h3 className="mb-2 font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="slabs" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            MEPCO Slabs, Unit Rates and Protected Consumers
          </h2>

          <p className="mb-4 leading-relaxed text-slate-800">
            Electricity bills are often calculated using unit slabs. This means
            the rate may change when your consumed units move from one usage
            level to another. Domestic users may also see protected or
            unprotected consumer status depending on official rules and recent
            consumption pattern.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950 shadow-sm">
              <h3 className="mb-2 font-bold">Protected Consumer</h3>
              <p className="text-sm leading-relaxed text-emerald-900">
                Protected consumers usually fall under lower consumption
                categories according to official rules. Their rates may differ
                from unprotected consumers.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950 shadow-sm">
              <h3 className="mb-2 font-bold">Unprotected Consumer</h3>
              <p className="text-sm leading-relaxed text-amber-900">
                Unprotected consumers may be charged under different rates if
                their usage crosses protected limits or does not meet protected
                category requirements.
              </p>
            </div>
          </div>

          <p className="mt-5 leading-relaxed text-slate-800">
            Because tariff slabs and protected status rules may change, always
            check your current bill and official tariff notification for exact
            rates.
          </p>
        </section>

        <section id="taxes" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Taxes and Extra Charges in MEPCO Bill
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            Your final MEPCO bill may include more than just unit charges. Taxes
            and official adjustments can increase or decrease the final payable
            amount.
          </p>

          <ul className="space-y-4 text-slate-800" aria-label="MEPCO bill components and taxes">
            {charges.map((item) => (
              <li
                key={item.title}
                className="flex items-start rounded-xl border border-slate-100 bg-slate-50/50 p-3"
              >
                <span
                  className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>
                  <strong className="font-bold text-slate-900">
                    {item.title}:
                  </strong>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Dynamic Language Support: Urdu Guide */}
        <section id="urdu-guide" className="scroll-mt-6" dir="rtl" lang="ur">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            میپکو ٹیرف گائیڈ اردو میں
          </h2>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 leading-9 text-slate-900 shadow-sm">
            <h3 className="mb-4 text-2xl font-black text-emerald-900">
              میپکو ٹیرف کیا ہوتا ہے؟
            </h3>

            <p>
              میپکو ٹیرف سے مراد وہ ریٹ اور اصول ہیں جن کے مطابق آپ کا بجلی
              کا بل بنایا جاتا ہے۔ اس میں یونٹ ریٹ، سلیب، ٹیکس، ایف پی اے،
              کیو ٹی اے، فکسڈ چارجز اور دیگر سرکاری ایڈجسٹمنٹ شامل ہو سکتی
              ہیں۔
            </p>

            <p className="mt-4">
              اگر آپ کے یونٹ زیادہ استعمال ہوں تو آپ کا سلیب بدل سکتا ہے، جس
              سے فی یونٹ ریٹ بھی بڑھ سکتا ہے۔ اسی لیے بجلی کے یونٹس کو ہر ماہ
              چیک کرنا ضروری ہے۔
            </p>

            <h3 className="mt-6 mb-3 text-xl font-black text-emerald-900">
              پروٹیکٹڈ اور ان پروٹیکٹڈ صارف کیا ہوتا ہے؟
            </h3>

            <p>
              پروٹیکٹڈ صارف عام طور پر کم یونٹ استعمال کرنے والے صارفین کو کہا
              جاتا ہے، جبکہ ان پروٹیکٹڈ صارفین کے لیے ریٹ مختلف ہو سکتے ہیں۔
              اصل فیصلہ موجودہ حکومتی اور نیپرا قواعد کے مطابق ہوتا ہے۔
            </p>

            <h3 className="mt-6 mb-3 text-xl font-black text-emerald-900">
              لوگ گوگل پر عموماً یہ سوال پوچھتے ہیں:
            </h3>

            <ul className="list-disc space-y-2 pr-6">
              {urduQueries.map((query) => (
                <li key={query}>{query}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faqs" className="scroll-mt-6">
          <h2 className="mb-6 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q1. Where can I find my tariff category?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Your tariff category is usually printed on your electricity bill
                along with reference number, customer ID and connection details.
              </p>

              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-2 text-sm leading-relaxed text-slate-800"
              >
                <strong>سوال:</strong> میرا ٹیرف کہاں لکھا ہوتا ہے؟
                <br />
                <span className="text-slate-600">
                  جواب: آپ کے بجلی بل پر ریفرنس نمبر اور کسٹمر آئی ڈی کے ساتھ
                  ٹیرف یا کنکشن کیٹیگری لکھی ہوتی ہے۔
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q2. Why does unit rate change on my bill?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Unit rate may change because of slab change, protected status,
                tariff category, FPA, QTA or official government adjustments.
              </p>

              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-2 text-sm leading-relaxed text-slate-800"
              >
                <strong>سوال:</strong> میرے بل میں یونٹ ریٹ کیوں بدلتا ہے؟
                <br />
                <span className="text-slate-600">
                  جواب: یونٹ ریٹ سلیب، پروٹیکٹڈ اسٹیٹس، ایف پی اے، کیو ٹی اے
                  یا سرکاری ایڈجسٹمنٹ کی وجہ سے بدل سکتا ہے۔
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q3. Are MEPCO tariff rates fixed forever?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                No. Tariff rates and adjustments can change due to official
                notifications, fuel adjustment, taxes and regulatory decisions.
              </p>

              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-2 text-sm leading-relaxed text-slate-800"
              >
                <strong>سوال:</strong> کیا میپکو یونٹ ریٹ ہمیشہ ایک جیسے رہتے ہیں؟
                <br />
                <span className="text-slate-600">
                  جواب: نہیں، یونٹ ریٹ سرکاری نوٹیفکیشن، فیول ایڈجسٹمنٹ، ٹیکسز
                  اور نیپرا فیصلوں کے مطابق بدل سکتے ہیں۔
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Content and Disclaimers */}
      <footer className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Tariff and Bill Guides
        </h2>

        <div className="grid gap-4 text-sm font-medium md:grid-cols-3">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-xl border border-slate-200 p-5 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-50/20"
            >
              <span className="block font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                {guide.title}
              </span>
              <span className="mt-2 block text-xs leading-relaxed text-slate-500">
                {guide.desc}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs leading-relaxed text-slate-600">
          <strong>Disclaimer:</strong> This guide is for consumer information
          only. Tariff rates, slabs, taxes, protected consumer rules, FPA, QTA
          and other charges can change. Always verify latest rates from official
          MEPCO, NEPRA or government tariff notifications.
        </div>
      </footer>
    </main>
  );
}
