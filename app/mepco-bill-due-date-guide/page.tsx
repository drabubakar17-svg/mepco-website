import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Bill Due Date Guide 2026 | Late Fee, Last Date & Urdu FAQs",
  description:
    "Learn how to check MEPCO bill due date, what happens after due date, late payment surcharge, payment tips, Urdu guide and Roman Urdu search questions.",
  keywords: [
    "MEPCO bill due date",
    "MEPCO bill last date",
    "MEPCO late payment surcharge",
    "electricity bill due date Pakistan",
    "MEPCO bill payment last date",
    "mepco bill due date kaise check kare",
    "bijli bill late ho jaye to kya hota hai",
    "میپکو بل کی آخری تاریخ",
    "بجلی بل لیٹ فیس",
    "میپکو بل لیٹ ہو جائے تو کیا کریں",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-bill-due-date-guide",
  },
};

const quickLinks = [
  { href: "#what-is-due-date", text: "1. What is Bill Due Date?" },
  { href: "#how-to-check", text: "2. How to Check Due Date" },
  { href: "#late-payment", text: "3. Late Payment Surcharge" },
  { href: "#missed-reasons", text: "4. Why People Miss Due Dates" },
  { href: "#missed-date", text: "5. If Due Date is Missed" },
  { href: "#urdu-guide", text: "6. Urdu Guide" },
  { href: "#faqs", text: "7. FAQs" },
];

const dueDateChecks = [
  {
    title: "Check Printed Bill",
    desc: "The due date is usually printed near the payable amount and billing month section on your electricity bill.",
  },
  {
    title: "Check Duplicate Bill Online",
    desc: "Open your MEPCO duplicate bill using the 14-digit reference number and read the due date shown on the bill.",
  },
  {
    title: "Check Amount Before and After Due Date",
    desc: "Many bills show payable amount within due date and payable amount after due date separately.",
  },
  {
    title: "Save Bill Copy",
    desc: "Save the PDF or take a screenshot so you do not forget the payment deadline.",
  },
];

const latePaymentPoints = [
  {
    title: "Late Payment Surcharge",
    desc: "If you pay after the due date, an extra late payment surcharge may be added to the bill.",
  },
  {
    title: "Higher Payable Amount",
    desc: "After the due date, the payable amount can increase because of surcharge or delayed payment charges.",
  },
  {
    title: "Risk of Disconnection",
    desc: "Repeated non-payment or long overdue bills may create risk of disconnection according to rules.",
  },
  {
    title: "Next Bill Arrears",
    desc: "Unpaid amount may appear as arrears in the next billing cycle.",
  },
];

const missedReasons = [
  { title: "Bill Not Received", desc: "Physical delivery delays or issues in postal service often lead to consumers receiving bills late or not at all." },
  { title: "Lost Bill", desc: "Misplacing the hard copy of the bill before making the payment." },
  { title: "Forgot Payment Date", desc: "Busy schedules and lack of reminders can cause individuals to lose track of the dynamic monthly due dates." },
  { title: "Online Payment Failure", desc: "Bank server issues, mobile wallet timeouts, or technical glitches on the final payment date." },
  { title: "Wrong Contact Information", desc: "Outdated mobile numbers or email profiles registered for MEPCO SMS alerts." },
];

const paymentTips = [
  {
    title: "Pay Before Last Date",
    desc: "Try to pay at least one or two days before the due date to avoid bank, app or server delays.",
  },
  {
    title: "Use Saved Reference Number",
    desc: "Keep your 14-digit reference number saved for quick duplicate bill checking every month.",
  },
  {
    title: "Verify Paid Status",
    desc: "After online payment, save receipt or screenshot and verify payment status if needed.",
  },
  {
    title: "Avoid Last-Day Rush",
    desc: "Payment apps and bill portals may become slow near due dates because many users are paying at the same time.",
  },
];

const urduQueries = [
  "میپکو بل کی آخری تاریخ کیسے چیک کریں؟",
  "بجلی کا بل لیٹ ہو جائے تو کیا ہوتا ہے؟",
  "میپکو بل لیٹ فیس کتنی ہوتی ہے؟",
  "بجلی بل کی آخری تاریخ گزر جائے تو کیا کریں؟",
  "میپکو ڈپلیکیٹ بل سے due date کیسے دیکھیں؟",
  "mepco bill due date kaise check kare",
  "bijli ka bill late ho jaye to kya kare",
  "mepco bill last date check",
];

const relatedGuides = [
  {
    href: "/mepco-duplicate-bill-guide",
    title: "Duplicate Bill Guide",
    desc: "Download and print your latest MEPCO bill copy online.",
  },
  {
    href: "/mepco-reference-number-guide",
    title: "Reference Number Guide",
    desc: "Find your 14-digit reference number for online bill checking.",
  },
  {
    href: "/mepco-bill-installment-guide",
    title: "Bill Installment Guide",
    desc: "Learn what to do if your electricity bill is too high to pay at once.",
  },
];

export default function MepcoBillDueDateGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Breadcrumbs */}
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
            Bill Due Date Guide
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Bill Due Date Guide 2026: Last Date, Late Fee and Urdu FAQs
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          MEPCO bill due date is the last date to pay your electricity bill
          without late payment surcharge. This guide explains how to check your
          due date, what happens after due date, how late fee works, and what
          users in Pakistan commonly search in Urdu and Roman Urdu.
        </p>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
          <strong>Important:</strong> Due date, surcharge, disconnection rules
          and payment processing may vary according to official billing policy.
          Always verify the exact due date and payable amount from your latest
          MEPCO bill or official bill portal.
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
            <strong className="text-slate-700">Bill Due Date</strong>
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

      {/* Table of Contents */}
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

      {/* Main Content Blocks */}
      <div className="space-y-14">
        {/* Section 1 */}
        <section id="what-is-due-date" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What is MEPCO Bill Due Date?
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            MEPCO bill due date means the last date to pay your electricity bill
            without late payment surcharge. If you pay before or on the due date,
            you normally pay the regular payable amount shown on your bill.
          </p>
          <div className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <strong className="mb-1 block font-bold">Simple Meaning:</strong>
            Due date is the final payment deadline before extra late payment
            charges may apply.
          </div>
        </section>

        {/* Section 2 */}
        <section id="how-to-check" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Check MEPCO Bill Due Date
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            You can check the due date from your printed bill, duplicate bill,
            or online bill copy.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {dueDateChecks.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
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

        {/* Section 3 */}
        <section id="late-payment" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What Happens After MEPCO Bill Due Date?
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            If the bill is not paid by the due date, late payment surcharge or
            additional payable amount may apply. In long overdue cases, unpaid
            dues may move into arrears or create disconnection risk.
          </p>
          <ul className="space-y-4 text-slate-800">
            {latePaymentPoints.map((item, idx) => (
              <li
                key={`${item.title}-${idx}`}
                className="flex items-start rounded-xl border border-slate-100 bg-slate-50/50 p-3"
              >
                <span
                  className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700"
                  aria-hidden="true"
                >
                  !
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

        {/* Section 4: Common Reasons for Missing Due Dates (SEO Boost) */}
        <section id="missed-reasons" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Common Reasons Why People Miss Their Bill Due Date
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            Missing an electricity payment deadline can lead to unwanted penalties. Here are the main reasons why many consumers across Pakistan fail to submit their dues on time:
          </p>
          <div className="space-y-4">
            {missedReasons.map((item, idx) => (
              <div key={`${item.title}-${idx}`} className="border-l-4 border-slate-300 bg-slate-50 p-4 rounded-r-xl shadow-sm">
                <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="missed-date" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What to Do If You Miss the Due Date
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            If you missed the due date, check the payable amount after due date
            and pay as soon as possible. If the bill amount is too high, contact
            the concerned MEPCO office for guidance about installment or
            correction options.
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-800/80 pb-4">
              <span
                className="h-2 w-2 rounded-full bg-amber-400"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Quick Action Steps
              </span>
            </div>

            <ol className="relative space-y-8 border-l border-slate-800 pl-6">
              <li className="relative">
                <span className="absolute -left-[38px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-900 bg-amber-400 text-xs font-black text-slate-950">
                  1
                </span>
                <h3 className="mb-1 text-base font-bold text-white">
                  Recheck the Latest Bill
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Open your latest duplicate bill and check payable amount after
                  due date.
                </p>
              </li>

              <li className="relative">
                <span className="absolute -left-[38px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-900 bg-amber-400 text-xs font-black text-slate-950">
                  2
                </span>
                <h3 className="mb-1 text-base font-bold text-white">
                  Pay Quickly
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Pay through allowed payment channels to avoid further delay or
                  arrears.
                </p>
              </li>

              <li className="relative">
                <span className="absolute -left-[38px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-900 bg-amber-400 text-xs font-black text-slate-950">
                  3
                </span>
                <h3 className="mb-1 text-base font-bold text-white">
                  Ask Office If Amount is Too High
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  For very high bills, ask MEPCO office about correction,
                  installment, or complaint options.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Payment Tips Section */}
        <section className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Tips to Avoid Late Payment Surcharge
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {paymentTips.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
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

        {/* Section 6: Urdu Translation Portal */}
        <section id="urdu-guide" className="scroll-mt-6" dir="rtl" lang="ur">
          <h2 className="mb-4 border-b border-slate-100 pb-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl font-sans">
            میپکو بل Due Date گائیڈ اردو میں
          </h2>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-slate-900 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-emerald-900 sm:text-2xl">
              میپکو بل کی آخری تاریخ کیا ہوتی ہے؟
            </h3>
            <p className="leading-8 text-base text-slate-800">
              میپکو بل کی آخری تاریخ وہ دن ہوتا ہے جس دن تک آپ اپنا بجلی بل
              بغیر لیٹ فیس کے جمع کروا سکتے ہیں۔ اگر آپ due date کے بعد بل جمع
              کرواتے ہیں تو بل میں اضافی لیٹ پیمنٹ سرچارج شامل ہو سکتا ہے۔
            </p>
            <p className="leading-8 text-base text-slate-800">
              due date عام طور پر آپ کے بل پر payable amount کے قریب لکھی ہوتی
              ہے۔ اگر آپ کے پاس بل نہیں ہے تو آپ ریفرنس نمبر کی مدد سے آن لائن
              ڈپلیکیٹ بل کھول کر آخری تاریخ دیکھ سکتے ہیں۔
            </p>

            {/* Urdu Optimization for Missing Reasons */}
            <h3 className="pt-4 text-xl font-black text-emerald-900 sm:text-2xl">
              صارفین بل کی آخری تاریخ کیوں بھول جاتے ہیں؟
            </h3>
            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-800">
              <li><strong>بل کا موصول نہ ہونا:</strong> ڈاک یا بل ڈسٹریبیوٹر کی تاخیر کی وجہ سے وقت پر بل گھر نہیں پہنچ پاتا۔</li>
              <li><strong>بل کا گم ہو جانا:</strong> گھر میں کاغذی بل ادھر ادھر رکھ کر بھول جانا۔</li>
              <li><strong>ادائیگی کی تاریخ بھولنا:</strong> مصروف شیڈول کی وجہ سے ہر ماہ تبدیل ہونے والی آخری تاریخ یاد نہ رہنا۔</li>
              <li><strong>آن لائن پیمنٹ فیل ہونا:</strong> آخری دن بینک ایپ یا موبائل والٹ (EasyPaisa/JazzCash) کے سرور ڈاؤن ہونا۔</li>
              <li><strong>غلط معلومات:</strong> میپکو کے ریکارڈ میں موبائل نمبر اپڈیٹ نہ ہونا جس سے SMS الرٹ نہیں مل پاتے۔</li>
            </ul>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              بل لیٹ ہو جائے تو کیا کریں؟
            </h3>
            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-800">
              <li>سب سے پہلے تازہ ڈپلیکیٹ بل کھول کر amount after due date دیکھیں۔</li>
              <li>جتنا جلدی ہو سکے بل جمع کروائیں۔</li>
              <li>اگر بل بہت زیادہ ہے تو قریبی میپکو دفتر سے قسط یا درستگی کے بارے میں پوچھیں۔</li>
              <li>رسید یا آن لائن payment screenshot محفوظ رکھیں۔</li>
            </ul>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              لوگ گوگل پر عموماً یہ سوال پوچھتے ہیں:
            </h3>
            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-700">
              {urduQueries.map((query, idx) => (
                <li key={`${query}-${idx}`}>{query}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 7: FAQs */}
        <section id="faqs" className="scroll-mt-6">
          <h2 className="mb-6 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q1. Where is the due date written on MEPCO bill?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                The due date is usually printed near the payable amount, billing
                month, and amount after due date section on the bill.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800 space-y-1"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> میپکو بل پر آخری تاریخ کہاں لکھی ہوتی ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: due date عام طور پر payable amount یا amount after due date کے قریب لکھی ہوتی ہے۔
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q2. What happens if I pay after due date?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                If you pay after the due date, late payment surcharge may be
                added and the payable amount may increase.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800 space-y-1"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> due date کے بعد بل جمع کروانے سے کیا ہوتا ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: due date کے بعد بل جمع کروانے پر لیٹ پیمنٹ سرچارج شامل ہو سکتا ہے۔
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q3. Can MEPCO due date be extended?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Due date extension is not guaranteed. Consumers should contact
                the relevant MEPCO office for official guidance in special
                cases.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800 space-y-1"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا میپکو بل کی due date بڑھ سکتی ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: due date بڑھنا لازمی نہیں ہوتا۔ خاص صورت میں متعلقہ میپکو دفتر سے رابطہ کریں۔
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Content */}
      <footer className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Payment and Bill Guides
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
          only. Due dates, surcharges, disconnection rules and payment policies
          can change. Always verify exact due date and payable amount from your
          latest official MEPCO bill.
        </div>
      </footer>
    </main>
  );
}
