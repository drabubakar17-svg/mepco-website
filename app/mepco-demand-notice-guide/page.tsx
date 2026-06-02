import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Demand Notice Guide 2026 | Fee, Status & Payment",
  description:
    "Learn what MEPCO demand notice means, when it is issued, how to pay it, required documents, tracking process, and important tips.",
  keywords: [
    "MEPCO demand notice",
    "MEPCO demand notice fee",
    "MEPCO demand notice payment",
    "MEPCO new connection demand notice",
    "MEPCO load extension demand notice",
    "electricity demand notice Pakistan",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-demand-notice-guide",
  },
};

const quickLinks = [
  { href: "#what-is-demand-notice", text: "1. What is Demand Notice?" },
  { href: "#when-issued", text: "2. When It Is Issued" },
  { href: "#charges", text: "3. Common Charges" },
  { href: "#payment-process", text: "4. Payment Process" },
  { href: "#tips", text: "5. Important Tips" },
];

const charges = [
  {
    title: "Security Deposit",
    desc: "A refundable or adjustable amount collected according to connection category and sanctioned load.",
  },
  {
    title: "Service Connection Charges",
    desc: "Charges related to meter installation, service cable, and connection work.",
  },
  {
    title: "Material Cost",
    desc: "Cost of required material such as wire, meter, pole, transformer support, or other equipment where applicable.",
  },
  {
    title: "Load Extension Cost",
    desc: "Additional cost may apply if demand notice is issued for increasing sanctioned load.",
  },
];

const steps = [
  {
    title: "Receive Demand Notice",
    desc: "After application verification, MEPCO may issue a demand notice containing payable charges and payment instructions.",
  },
  {
    title: "Check Details Carefully",
    desc: "Verify applicant name, reference/application number, connection type, sanctioned load, and payable amount.",
  },
  {
    title: "Pay Before Due Date",
    desc: "Pay the demand notice through the allowed bank or payment method mentioned on the notice.",
  },
  {
    title: "Keep Paid Receipt",
    desc: "Keep the original paid receipt and make photocopies for office submission and future record.",
  },
  {
    title: "Submit Proof if Required",
    desc: "Some cases may require submitting paid proof to the concerned MEPCO subdivision office.",
  },
];

const tips = [
  {
    title: "Do Not Delay Payment",
    desc: "Demand notice may expire or require revalidation if not paid within the given time.",
  },
  {
    title: "Match Applicant Details",
    desc: "Check that your name, CNIC, application number, and connection category are correct before payment.",
  },
  {
    title: "Keep All Copies",
    desc: "Keep scanned and photocopied versions of the notice, paid receipt, application form, and CNIC.",
  },
  {
    title: "Follow Up Regularly",
    desc: "After payment, follow up with the relevant office for meter installation, load extension, or connection approval.",
  },
];

const relatedGuides = [
  {
    href: "/mepco-new-connection-guide",
    title: "New Connection Guide",
    desc: "Apply for a fresh residential, commercial, or industrial MEPCO connection.",
  },
  {
    href: "/mepco-load-extension-guide",
    title: "Load Extension Guide",
    desc: "Increase sanctioned load for ACs, motors, machinery, or business use.",
  },
  {
    href: "/mepco-name-change-guide",
    title: "Name Change Guide",
    desc: "Change owner name on your MEPCO electricity bill after transfer or purchase.",
  },
];

export default function MepcoDemandNoticeGuidePage() {
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
            Demand Notice
          </li>
        </ol>
      </nav>

      {/* Main Header */}
      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Demand Notice Guide 2026: Fee, Payment, Status and Next Steps
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          MEPCO demand notice is usually issued after verification of a new
          connection, load extension, name change, or other service request. It
          explains the payable charges, payment instructions, and next steps
          required before your application can move forward.
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
            <span className="font-normal text-slate-400">Topic:</span>{" "}
            <strong className="text-slate-700">Demand Notice Payment</strong>
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
        <article id="what-is-demand-notice" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What is MEPCO Demand Notice?
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            A demand notice is an official payment notice issued by MEPCO after
            initial approval or verification of an application. It tells the
            consumer how much amount must be paid for the requested service.
            Without paying the demand notice, the application usually cannot
            proceed to the next stage.
          </p>
          <div className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <strong className="mb-1 block font-bold">Simple Meaning:</strong>
            Demand notice means MEPCO has calculated the charges for your
            request and you need to pay them before further processing.
          </div>
        </article>

        {/* Section 2 */}
        <article id="when-issued" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            When Does MEPCO Issue Demand Notice?
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            Demand notice may be issued in several MEPCO service cases,
            especially when technical work, meter installation, security
            deposit, or load-related cost is involved.
          </p>
          <ul className="list-disc space-y-2.5 pl-6 leading-relaxed text-slate-800">
            <li>New electricity connection application</li>
            <li>Load extension request</li>
            <li>Change of name, tariff, or load process</li>
            <li>Meter replacement or service shifting</li>
            <li>Connection category change</li>
            <li>Infrastructure or material-related work</li>
          </ul>
        </article>

        {/* Section 3 */}
        <article id="charges" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Common Charges Included in Demand Notice
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            The amount shown in a demand notice depends on the connection type,
            sanctioned load, distance from existing supply, material required,
            and current MEPCO rules.
          </p>
          <ul
            className="space-y-4 text-slate-800"
            aria-label="Common demand notice charges"
          >
            {charges.map((item, index) => (
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
        <article id="payment-process" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Pay MEPCO Demand Notice
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            After receiving the demand notice, check all details carefully and
            pay through the payment method or bank mentioned on the document.
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-800/80 pb-4">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Step-by-Step Payment Process
              </span>
            </div>

            <ol
              className="relative space-y-8 border-l border-slate-800 pl-6"
              aria-label="MEPCO demand notice payment steps"
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
            Important Tips After Demand Notice Payment
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            After payment, keep your documents safe and follow up with the
            concerned office to avoid delay in installation or approval.
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
                Demand notice charges can vary according to connection type,
                sanctioned load, material requirement, security deposit, and
                current MEPCO rules. Always verify the final amount from the
                official notice.
              </span>
            </div>
          </div>
        </article>
      </section>

      {/* Footer Related Resources Grid using Next.js Link */}
      <section className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Service Guides
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
