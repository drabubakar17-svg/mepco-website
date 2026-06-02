import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Bill Installment Guide 2026 | Qist, High Bill & Urdu FAQs",
  description:
    "Learn how to apply for MEPCO electricity bill installment, high bill relief, required documents, qist process, Urdu guide and Roman Urdu FAQs.",
  keywords: [
    "MEPCO bill installment",
    "MEPCO bill qist",
    "MEPCO installment guide",
    "electricity bill installment Pakistan",
    "MEPCO high bill payment",
    "MEPCO bill payment relief",
    "mepco bill qist kaise karwaye",
    "bijli bill qist mein kaise jama kare",
    "bill zyada aa gaya kya kare",
    "میپکو بل قسط",
    "بجلی بل قسطوں میں",
    "میپکو بل زیادہ آ گیا",
    "بجلی بل ریلیف",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-bill-installment-guide",
  },
};

const quickLinks = [
  { href: "#what-is-installment", text: "1. What is Bill Installment?" },
  { href: "#when-needed", text: "2. When You May Need It" },
  { href: "#documents", text: "3. Required Documents" },
  { href: "#apply-process", text: "4. How to Apply" },
  { href: "#urdu-guide", text: "5. Urdu Guide" },
  { href: "#faqs", text: "6. FAQs" },
];

const documents = [
  {
    title: "Latest MEPCO Bill",
    desc: "Keep a copy of the high electricity bill for which you want installment relief.",
  },
  {
    title: "CNIC Copy",
    desc: "A clear copy of the applicant or consumer CNIC may be required.",
  },
  {
    title: "Reference Number",
    desc: "Your 14-digit MEPCO reference number helps the office find your billing record quickly.",
  },
  {
    title: "Customer ID",
    desc: "Customer ID can help verify the consumer account and bill history.",
  },
  {
    title: "Written Application",
    desc: "A simple written request explaining why you want the bill to be paid in installments.",
  },
];

const steps = [
  {
    title: "Check Your Latest Bill",
    desc: "Review payable amount, due date, arrears, taxes, adjustment charges and amount after due date.",
  },
  {
    title: "Prepare Documents",
    desc: "Keep bill copy, CNIC copy, reference number, customer ID and written application ready.",
  },
  {
    title: "Visit MEPCO Office",
    desc: "Go to your nearest MEPCO subdivision or customer service office before the due date if possible.",
  },
  {
    title: "Submit Installment Request",
    desc: "Submit your application and explain why you need installment facility on a high bill.",
  },
  {
    title: "Get Office Decision",
    desc: "The concerned officer may approve, reject or guide you according to bill amount, arrears, history and policy.",
  },
];

const tips = [
  {
    title: "Apply Before Due Date",
    desc: "Request installment before the bill due date to reduce late surcharge risk.",
  },
  {
    title: "Clear Old Arrears",
    desc: "Old arrears or repeated non-payment may reduce approval chances.",
  },
  {
    title: "Keep Receipt Copies",
    desc: "Keep copies of approved installment slips, paid receipts and written applications.",
  },
  {
    title: "Ask for Tracking",
    desc: "Ask for complaint number, application number or office reference for follow-up.",
  },
];

const urduQueries = [
  "میپکو بل قسطوں میں کیسے جمع کروائیں؟",
  "بجلی کا بل زیادہ آ جائے تو کیا کریں؟",
  "میپکو بل کی قسط کیسے بنوائیں؟",
  "بجلی بل قسطوں میں کروانے کے لیے کون سے کاغذات چاہیے؟",
  "میپکو بل installment application کیسے دیں؟",
  "mepco bill qist kaise karwaye",
  "bijli ka bill zyada aa jaye to kya kare",
  "electricity bill installment pakistan",
];

const relatedGuides = [
  {
    href: "/mepco-bill-due-date-guide",
    title: "Bill Due Date Guide",
    desc: "Check due date, late fee, amount after due date and payment tips.",
  },
  {
    href: "/mepco-wrong-bill-solution",
    title: "Wrong Bill Solution",
    desc: "Learn what to do if your MEPCO bill amount looks unusually high.",
  },
  {
    href: "/mepco-bill-correction-guide",
    title: "Bill Correction Guide",
    desc: "Fix wrong reading, overbilling, duplicate charges or billing mistakes.",
  },
];

export default function MepcoBillInstallmentGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
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
            Bill Installment Guide
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Bill Installment Guide 2026: High Bill Qist, Relief and Urdu
          FAQs
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          If your MEPCO electricity bill is too high and you cannot pay the full
          amount at once, you may request installment relief through the relevant
          MEPCO office. This guide explains the qist process, documents, approval
          steps, important tips and Urdu/Roman Urdu search questions.
        </p>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
          <strong>Important:</strong> Installment approval is not guaranteed.
          Rules may vary according to bill amount, arrears, due date, consumer
          history and local office policy. Always confirm final instructions
          from the concerned MEPCO office.
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
            <span className="font-normal text-slate-400">Service:</span>{" "}
            <strong className="text-slate-700">Bill Installment Request</strong>
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

      <div className="space-y-14">
        <section id="what-is-installment" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What is MEPCO Bill Installment?
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            MEPCO bill installment means requesting permission to pay a high
            electricity bill in parts instead of paying the full amount at once.
            Consumers usually request this facility when a bill becomes too
            difficult to pay in one payment.
          </p>
          <div className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <strong className="mb-1 block font-bold">Simple Meaning:</strong>
            Bill installment means asking MEPCO to divide a high bill into
            smaller payments, subject to office approval and policy.
          </div>
        </section>

        <section id="when-needed" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            When You May Need Bill Installment
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            Consumers usually request installment when the payable amount becomes
            difficult to manage. Common reasons include:
          </p>
          <ul className="list-disc space-y-2.5 pl-6 leading-relaxed text-slate-800">
            <li>Sudden high electricity bill</li>
            <li>Accumulated arrears from previous months</li>
            <li>Bill received close to due date</li>
            <li>Bill correction or adjustment amount</li>
            <li>Heavy summer usage such as air conditioners</li>
            <li>Temporary financial difficulty</li>
          </ul>
        </section>

        <section id="documents" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Required Documents for MEPCO Bill Installment
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            Before visiting the office, prepare these documents to avoid delay:
          </p>
          <ul
            className="space-y-4 text-slate-800"
            aria-label="MEPCO bill installment required documents"
          >
            {documents.map((item, index) => (
              <li
                key={`doc-${index}`}
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

        <section id="apply-process" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Apply for MEPCO Bill Installment
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            The installment request is generally handled through the concerned
            MEPCO office or customer service desk. Follow these steps:
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-800/80 pb-4">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Step-by-Step Installment Request
              </span>
            </div>

            <ol
              className="relative space-y-8 border-l border-slate-800 pl-6"
              aria-label="MEPCO bill installment request steps"
            >
              {steps.map((step, index) => (
                <li key={`step-${index}`} className="relative">
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
        </section>

        <section id="tips" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Important Tips Before Requesting Installment
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {tips.map((item, index) => (
              <div
                key={`tip-${index}`}
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

          <div className="mt-6 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950 shadow-sm">
            <strong className="font-bold">Note:</strong> Installment rules may
            vary by bill type, arrears, office policy and consumer history.
            Confirm final instructions from your relevant MEPCO office.
          </div>
        </section>

        <section id="urdu-guide" className="scroll-mt-6" dir="rtl" lang="ur">
          <h2 className="mb-4 border-b border-slate-100 pb-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl font-sans">
            میپکو بل قسط گائیڈ اردو میں
          </h2>

          <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-slate-900 shadow-sm">
            <h3 className="text-xl font-black text-emerald-900 sm:text-2xl">
              میپکو بل قسطوں میں کیسے جمع کروائیں؟
            </h3>

            <p className="leading-8 text-base text-slate-800">
              اگر آپ کا میپکو بجلی بل بہت زیادہ آ گیا ہے اور آپ ایک ساتھ پورا
              بل ادا نہیں کر سکتے تو آپ متعلقہ میپکو دفتر میں قسط کی درخواست دے
              سکتے ہیں۔ قسط کی منظوری دفتر کی پالیسی، بل رقم، arrears اور
              consumer history پر منحصر ہوتی ہے۔
            </p>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              قسط کے لیے عام طور پر کیا چاہیے؟
            </h3>

            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-800">
              <li>تازہ میپکو بل کی کاپی</li>
              <li>شناختی کارڈ کی کاپی</li>
              <li>ریفرنس نمبر یا کسٹمر آئی ڈی</li>
              <li>سادہ درخواست جس میں قسط کی وجہ لکھی ہو</li>
              <li>اگر ممکن ہو تو due date سے پہلے دفتر جائیں</li>
            </ul>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              لوگ گوگل پر عموماً یہ سوال پوچھتے ہیں:
            </h3>

            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-700">
              {urduQueries.map((query, index) => (
                <li key={`query-${index}`}>{query}</li>
              ))}
            </ul>

            <p className="leading-8 text-base text-slate-800">
              اگر بل غلط ریڈنگ یا overbilling کی وجہ سے زیادہ آیا ہے تو پہلے
              بل correction یا meter complaint کا راستہ بھی چیک کریں۔
            </p>
          </div>
        </section>

        <section id="faqs" className="scroll-mt-6">
          <h2 className="mb-6 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q1. Can I pay MEPCO bill in installments?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                You may request installment facility from the concerned MEPCO
                office, but approval depends on policy, bill amount, arrears and
                consumer history.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا میپکو بل قسطوں میں جمع ہو سکتا ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: آپ درخواست دے سکتے ہیں، لیکن منظوری دفتر کی پالیسی، بل
                  رقم اور consumer history پر منحصر ہوتی ہے۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q2. Should I apply before the due date?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Yes, it is better to contact the MEPCO office before the due date
                to avoid late payment surcharge and processing delay.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا due date سے پہلے قسط کی درخواست
                  دینی چاہیے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: جی ہاں، due date سے پہلے جانا بہتر ہے تاکہ لیٹ فیس اور
                  مزید مسئلے سے بچ سکیں۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q3. What if my bill is high because of wrong reading?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                If the bill is high due to wrong reading, take meter photo and
                request bill correction or meter complaint before asking for
                installment.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> اگر بل غلط ریڈنگ کی وجہ سے زیادہ آیا
                  ہو تو کیا کریں؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: پہلے میٹر کی تصویر لے کر bill correction یا meter
                  complaint جمع کروائیں۔
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Bill Relief Guides
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
          <strong>Disclaimer:</strong> This page is for consumer information
          only. Installment approval, rules, surcharge treatment and payment
          schedule can vary. Always verify final instructions from your relevant
          MEPCO office.
        </div>
      </footer>
    </main>
  );
}
