import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Meter Reading Guide 2026 | Check Units & Verify Bill",
  description:
    "Learn how to read MEPCO electricity meter, calculate consumed units, verify bill reading, and understand meter reading in Urdu and English.",
  keywords: [
    "MEPCO meter reading",
    "MEPCO bill reading",
    "how to read electricity meter",
    "electricity units calculation",
    "MEPCO meter units",
    "میپکو میٹر ریڈنگ",
    "بجلی کے یونٹ کیسے نکالیں",
    "میٹر ریڈنگ کیسے چیک کریں",
    "میپکو بل ریڈنگ غلط",
  ],
  alternates: {
    canonical: "https://www.mepcoonlinebill.net/mepco-meter-reading-guide",
  },
};

const quickLinks = [
  { href: "#what-is-meter-reading", text: "1. What is Meter Reading?" },
  { href: "#how-to-read", text: "2. How to Read Meter" },
  { href: "#calculate-units", text: "3. Calculate Units" },
  { href: "#verify-bill", text: "4. Verify Bill Reading" },
  { href: "#urdu-guide", text: "5. Urdu Guide" },
  { href: "#faqs", text: "6. Frequently Asked Questions (FAQs)" },
];

const readingSteps = [
  {
    title: "Locate Your Meter",
    desc: "Find the electricity meter installed outside your home, shop, office, or business premises.",
  },
  {
    title: "Read the Display",
    desc: "Note the main numbers shown on the meter screen. These numbers show total electricity units recorded.",
  },
  {
    title: "Ignore Small Decimal Digits",
    desc: "If your meter shows small decimal digits, focus on the main whole-number reading for normal unit calculation.",
  },
  {
    title: "Write Current Reading",
    desc: "Write the current meter reading clearly or take a photo for record.",
  },
  {
    title: "Compare Previous Reading",
    desc: "Subtract previous month reading from current reading to calculate consumed units.",
  },
];

const tips = [
  {
    title: "Take a Meter Photo",
    desc: "Take a clear photo every month so you can compare it with your bill.",
  },
  {
    title: "Check Before Due Date",
    desc: "Verify bill reading before paying if your bill amount looks unusually high.",
  },
  {
    title: "Track Weekly Usage",
    desc: "Weekly reading checks help identify sudden electricity usage increases.",
  },
  {
    title: "Report Faulty Display",
    desc: "If meter screen is blank or damaged, submit a meter complaint quickly.",
  },
];

const urduQueries = [
  "میپکو میٹر ریڈنگ کیسے چیک کریں؟",
  "بجلی کے یونٹ کیسے نکالے جاتے ہیں؟",
  "میپکو بل میں ریڈنگ غلط ہو تو کیا کریں؟",
  "میٹر ریڈنگ زیادہ آنے کی وجہ کیا ہے؟",
  "پچھلی ریڈنگ اور موجودہ ریڈنگ سے یونٹ کیسے نکلتے ہیں؟",
];

const relatedGuides = [
  {
    href: "/mepco-meter-complaint-guide",
    title: "Meter Complaint Guide",
    desc: "Report wrong reading, fast meter, defective meter, or display issue.",
  },
  {
    href: "/mepco-bill-correction-guide",
    title: "Bill Correction Guide",
    desc: "Request correction if your bill reading or amount is incorrect.",
  },
  {
    href: "/mepco-wrong-bill-solution",
    title: "Wrong Bill Solution",
    desc: "Learn what to do if your MEPCO bill looks unusually high.",
  },
];

export default function MepcoMeterReadingGuidePage() {
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
            Meter Reading Guide
          </li>
        </ol>
      </nav>

      {/* Main Header */}
      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Meter Reading Guide 2026: Check Units, Verify Bill Reading and
          Avoid Overbilling
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          Understanding your MEPCO meter reading helps you calculate electricity
          units, compare your bill reading, and identify wrong billing before
          payment. This guide explains meter reading in simple English and Urdu
          for Pakistani electricity consumers.
        </p>

        {/* Dynamic Meta Info Strip */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-slate-200 py-3.5 text-sm font-medium text-slate-500">
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
            <strong className="text-slate-700">Meter Reading</strong>
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

      {/* Table of Contents / Quick Links Area */}
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

      {/* Content Stream */}
      <section className="space-y-14">
        {/* Section 1 */}
        <article id="what-is-meter-reading" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What is MEPCO Meter Reading?
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            Meter reading is the total number of electricity units recorded by
            your electricity meter. MEPCO uses this reading to calculate how
            many units you consumed during the billing month.
          </p>
          <div className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <strong className="mb-1 block font-bold">Simple Meaning:</strong>
            Current meter reading minus previous meter reading equals units
            consumed for the month.
          </div>
        </article>

        {/* Section 2 */}
        <article id="how-to-read" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Read Your Electricity Meter
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            You can read your meter by following these simple steps:
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-800/80 pb-4">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Step-by-Step Meter Reading
              </span>
            </div>

            <ol
              className="relative space-y-8 border-l border-slate-800 pl-6"
              aria-label="Meter reading steps"
            >
              {readingSteps.map((step, index) => (
                <li key={index} className="relative">
                  <span
                    className="absolute -left-[38px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-900 bg-emerald-500 text-xs font-black text-slate-950"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mb-1 text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </article>

        {/* Section 3 */}
        <article id="calculate-units" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Calculate Electricity Units from Meter Reading
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            To calculate units consumed, subtract the previous bill reading from
            the current meter reading.
          </p>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950 shadow-sm">
            <h3 className="mb-3 font-bold">Example Calculation</h3>
            <p>Current Reading = 15,750</p>
            <p>Previous Reading = 15,200</p>
            <p className="mt-3 font-black text-emerald-900">
              Units Consumed = 15,750 - 15,200 = 550 Units
            </p>
            <p className="mt-4 text-xs italic text-emerald-800/90 border-t border-emerald-200 pt-3">
              This calculation helps consumers estimate their monthly electricity usage before the bill arrives.
            </p>
          </div>
        </article>

        {/* Section 4 */}
        <article id="verify-bill" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Verify Meter Reading on MEPCO Bill
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            Check the current reading printed on your bill and compare it with
            the actual meter display. If the bill reading is much higher than
            your meter display, take a clear photo and contact MEPCO for bill
            correction or meter inspection.
          </p>
          <ul className="list-disc space-y-2.5 pl-6 leading-relaxed text-slate-800">
            <li>Compare current reading on bill with actual meter display.</li>
            <li>Check previous reading and units consumed.</li>
            <li>Verify bill month and due date.</li>
            <li>Take meter photo before submitting complaint.</li>
          </ul>
        </article>

        {/* Section 5 */}
        <article id="tips" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Important Meter Reading Tips
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <h3 className="mb-2 font-bold text-slate-900">{tip.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Section 6 */}
        <article id="urdu-guide" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            MEPCO Meter Reading Guide in Urdu
          </h2>
          <div
            dir="rtl"
            lang="ur"
            className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 leading-9 text-slate-900 shadow-sm"
          >
            <h3 className="mb-4 text-2xl font-black text-emerald-900">
              میپکو میٹر ریڈنگ کیسے چیک کریں؟
            </h3>
            <p>
              میپکو میٹر ریڈنگ چیک کرنے کے لیے سب سے پہلے اپنے گھر یا دکان کے
              بجلی میٹر پر موجود نمبر دیکھیں۔ یہ نمبر آپ کی موجودہ ریڈنگ ہوتی
              ہے۔ پھر اپنے پچھلے بل پر لکھی ہوئی پچھلی ریڈنگ دیکھیں۔
            </p>
            <p className="mt-4">
              موجودہ ریڈنگ میں سے پچھلی ریڈنگ منفی کریں۔ جو جواب آئے گا وہ آپ
              کے استعمال شدہ یونٹس ہوں گے۔
            </p>
            <div className="mt-5 rounded-xl border border-emerald-200 bg-white p-5">
              <p>
                مثال: موجودہ ریڈنگ 15750 ہے اور پچھلی ریڈنگ 15200 ہے۔
              </p>
              <p className="font-bold">15750 - 15200 = 550 یونٹس</p>
            </div>
            <h3 className="mt-6 mb-3 text-xl font-black text-emerald-900">
              لوگ گوگل پر عموماً یہ سوال پوچھتے ہیں:
            </h3>
            <ul className="list-disc space-y-2 pr-6">
              {urduQueries.map((query) => (
                <li key={query}>{query}</li>
              ))}
            </ul>
            <p className="mt-5">
              اگر آپ کے بل میں لکھی ہوئی ریڈنگ اصل میٹر ریڈنگ سے زیادہ ہو تو
              فوراً میٹر کی تصویر لیں اور میپکو دفتر میں بل درستگی یا میٹر
              کمپلینٹ جمع کروائیں۔
            </p>
          </div>
        </article>

        {/* Section 7: Frequently Asked Questions (FAQ) Section */}
        <article id="faqs" className="scroll-mt-6">
          <h2 className="mb-6 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions (FAQ)
          </h2>
          
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/50">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Q1. How often does MEPCO take meter readings?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                MEPCO meter readers visit your premises once every month (roughly every 28 to 31 days) to note down the current units and take a snapshot of the display for proof.
              </p>
              <div dir="rtl" lang="ur" className="mt-3 border-t border-slate-200/60 pt-2 text-sm text-slate-800 leading-relaxed font-semibold">
                سوال: میٹر ریڈنگ کتنے دن بعد لی جاتی ہے؟<br/>
                <span className="font-normal text-slate-600">جواب: میپکو کا عملہ ہر مہینے میں ایک بار (تقریباً 28 سے 31 دن کے وقفے سے) آپ کے گھر آکر میٹر ریڈنگ لیتا ہے اور ثبوت کے لیے تصویر کھینچتا ہے۔</span>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/50">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Q2. What if my bill reading is wrong?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                If the reading printed on your bill is higher than the actual display on your physical meter, take a clear photo of the meter dial immediately and visit your nearest customer service subdivision office for bill correction.
              </p>
              <div dir="rtl" lang="ur" className="mt-3 border-t border-slate-200/60 pt-2 text-sm text-slate-800 leading-relaxed font-semibold">
                سوال: اگر بل میں ریڈنگ غلط ہو تو کیا کریں؟<br/>
                <span className="font-normal text-slate-600">جواب: اگر بل پر لکھی ریڈنگ آپ کے اصل میٹر سے زیادہ ہے، تو فوراً میٹر کی سکرین کی صاف تصویر لیں اور اپنے قریبی میپکو سب ڈویژنل آفس جا کر بل درست کروائیں۔</span>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/50">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Q3. Can I check the meter reading myself?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Yes, digital meters rotate through various screens like date, time, and total kilowatt-hours (kWh). Wait for the numbers followed by the "kWh" sign—that is your current accumulated reading.
              </p>
              <div dir="rtl" lang="ur" className="mt-3 border-t border-slate-200/60 pt-2 text-sm text-slate-800 leading-relaxed font-semibold">
                سوال: کیا میں خود میٹر ریڈنگ چیک کر سکتا ہوں؟<br/>
                <span className="font-normal text-slate-600">جواب: جی ہاں، ڈیجیٹل میٹر کی سکرین پر مختلف نمبر تبدیل ہوتے رہتے ہیں۔ جب سکرین پر نمبرز کے ساتھ "kWh" لکھا ہوا آئے، تو وہ آپ کی موجودہ ریڈنگ ہوتی ہے۔</span>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="rounded-xl border border-slate-200 p-5 bg-slate-50/50">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Q4. What causes unexpectedly high meter readings?
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                High readings can happen due to continuous use of heavy appliances (ACs, water pumps, heaters), short-circuiting/internal wiring leakage, or occasionally due to a technical fault in the meter itself.
              </p>
              <div dir="rtl" lang="ur" className="mt-3 border-t border-slate-200/60 pt-2 text-sm text-slate-800 leading-relaxed font-semibold">
                سوال: میٹر ریڈنگ زیادہ آنے کی وجہ کیا ہے؟<br/>
                <span className="font-normal text-slate-600">جواب: ریڈنگ زیادہ آنے کی عام وجہ بھاری بجلی کی اشیاء (اے سی، واٹر پمپ) کا زیادہ استعمال، گھر کی وائرنگ میں شاٹ سرکٹ یا لیکیج ہونا، یا کبھی کبھار میٹر کا تکنیکی طور پر خراب ہونا ہو سکتا ہے۔</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Footer Grid / Related Links */}
      <section className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Guides
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
      </section>
    </main>
  );
}
