import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Bill Installment Guide 2026 | Pay High Bill in Installments",
  description:
    "Learn how to apply for MEPCO electricity bill installment, required documents, high bill payment relief, approval process, and important tips.",
  keywords: [
    "MEPCO bill installment",
    "MEPCO installment guide",
    "electricity bill installment Pakistan",
    "MEPCO high bill payment",
    "MEPCO bill payment relief",
    "MEPCO bill installment application",
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
  { href: "#tips", text: "5. Important Tips" },
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
    desc: "Customer ID can also help verify the consumer account and bill history.",
  },
  {
    title: "Written Application",
    desc: "A simple written request explaining why you want the bill to be paid in installments.",
  },
];

const steps = [
  {
    title: "Check Your Latest Bill",
    desc: "Review the payable amount, due date, arrears, taxes, and any adjustment charges before applying.",
  },
  {
    title: "Prepare Documents",
    desc: "Keep your bill copy, CNIC copy, reference number, customer ID, and written application ready.",
  },
  {
    title: "Visit MEPCO Office",
    desc: "Go to your nearest MEPCO subdivision or customer service office before the due date if possible.",
  },
  {
    title: "Submit Installment Request",
    desc: "Submit your application and explain the reason for requesting installment facility on a high bill.",
  },
  {
    title: "Get Office Decision",
    desc: "The concerned officer may approve, reject, or guide you according to bill amount, dues, and policy.",
  },
];

const tips = [
  {
    title: "Apply Before Due Date",
    desc: "It is better to request installment before the bill due date to avoid late payment surcharge.",
  },
  {
    title: "Clear Old Arrears",
    desc: "Pending arrears or repeated non-payment may reduce approval chances.",
  },
  {
    title: "Keep Receipt Copies",
    desc: "Always keep copies of approved installment slips, paid receipts, and written applications.",
  },
  {
    title: "Ask for Tracking",
    desc: "Request a complaint number, application number, or office reference for follow-up.",
  },
];

const relatedGuides = [
  {
    href: "/mepco-bill-correction-guide",
    title: "Bill Correction Guide",
    desc: "Fix wrong readings, overbilling, duplicate charges, or billing mistakes.",
  },
  {
    href: "/mepco-wrong-bill-solution",
    title: "Wrong Bill Solution",
    desc: "Learn what to do if your MEPCO bill amount looks unusually high or incorrect.",
  },
  {
    href: "/mepco-taxes-explained",
    title: "Taxes Explained",
    desc: "Understand GST, FPA, QTA, fixed charges, arrears, and other bill charges.",
  },
];

export default function MepcoBillInstallmentGuidePage() {
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
            Bill Installment
          </li>
        </ol>
      </nav>

      {/* Main Header */}
      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Bill Installment Guide 2026: How to Pay High Electricity Bill in Installments
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          If your MEPCO electricity bill is too high and you cannot pay the full
          amount at once, you may request installment relief through the relevant
          MEPCO office. This guide explains when installment may be needed, what
          documents to carry, how to apply, and what precautions to follow.
        </p>

        {/* Info Banner */}
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

      {/* Quick Links Section using traditional anchor <a> tags */}
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

      {/* Documentation Articles */}
      <section className="space-y-14">
        {/* Section 1 */}
        <article id="what-is-installment" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What is MEPCO Bill Installment?
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            MEPCO bill installment means requesting permission to pay a high
            electricity bill in parts instead of paying the full amount at once.
            This option is usually considered for consumers facing unusually
            large bills, arrears, corrections, or temporary financial pressure.
          </p>
          <div className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <strong className="mb-1 block font-bold">Important:</strong>
            Installment approval depends on MEPCO policy, bill amount, consumer
            history, pending dues, and decision of the concerned office.
          </div>
        </article>

        {/* Section 2 */}
        <article id="when-needed" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            When You May Need Bill Installment
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            Consumers usually request installment when the bill amount becomes
            difficult to pay in one payment. Common reasons include:
          </p>
          <ul className="list-disc space-y-2.5 pl-6 leading-relaxed text-slate-800">
            <li>Sudden high electricity bill</li>
            <li>Accumulated arrears</li>
            <li>Late received bill near due date</li>
            <li>Bill correction or adjustment amount</li>
            <li>Heavy seasonal usage such as summer air conditioners</li>
            <li>Temporary financial difficulty</li>
          </ul>
        </article>

        {/* Section 3 */}
        <article id="documents" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Required Documents for MEPCO Bill Installment
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            Before visiting the office, prepare the following documents to avoid
            delays:
          </p>
          <ul
            className="space-y-4 text-slate-800"
            aria-label="Bill installment required documents"
          >
            {documents.map((item, index) => (
              <li
                key={index}
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
        </article>

        {/* Section 4 */}
        <article id="apply-process" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Apply for MEPCO Bill Installment
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            The installment request is generally handled through the concerned
            MEPCO office or customer service desk. Follow these simple steps:
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

        {/* Section 5 */}
        <article id="tips" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Important Tips Before Requesting Installment
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            These tips can help you avoid confusion and improve your chances of
            a smooth process:
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {tips.map((item, index) => (
              <div
                key={index}
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
            <div className="flex space-x-2">
              <strong className="shrink-0 font-bold">Note:</strong>
              <span>
                Installment rules may vary according to bill type, arrears,
                office policy, and consumer history. Always confirm final
                instructions from the relevant MEPCO office.
              </span>
            </div>
          </div>
        </article>
      </section>

      {/* Footer Related Resources Grid using Next.js Link */}
      <section className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Bill Guides
        </h2>

        <div className="grid gap-4 text-sm font-medium md:grid-cols-3">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 p-5 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-50/20"
            >
              <div>
                <span className="block font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                  {guide.title}
                </span>
                <span className="mt-2 block text-xs font-normal leading-relaxed text-slate-500">
                  {guide.desc}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}