import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Name Change Guide 2026 | Bill Owner Transfer & Urdu FAQs",
  description:
    "Complete MEPCO name change guide for electricity bill owner transfer, property sale, inheritance, required documents, ENC process, Urdu guide and Roman Urdu FAQs.",
  keywords: [
    "MEPCO name change",
    "change name on MEPCO bill",
    "MEPCO bill owner name transfer",
    "electricity bill name change Pakistan",
    "MEPCO bill transfer",
    "MEPCO name change documents",
    "mepco bill name change kaise kare",
    "bijli bill name change kaise karwaye",
    "meter name transfer pakistan",
    "میپکو نام تبدیلی",
    "بجلی بل نام تبدیلی",
    "میپکو بل مالک نام تبدیلی",
    "بجلی میٹر نام ٹرانسفر",
  ],
  alternates: {
    canonical: "https://www.mepcoonlinebill.net/mepco-name-change-guide",
  },
};

const quickLinks = [
  { href: "#when-needed", text: "1. When Name Change is Needed" },
  { href: "#documents", text: "2. Required Documents" },
  { href: "#apply-process", text: "3. Application Process" },
  { href: "#rejection-reasons", text: "4. Rejection Reasons" },
  { href: "#urdu-guide", text: "5. Urdu Guide" },
  { href: "#faqs", text: "6. FAQs" },
];

const documents = [
  {
    title: "Applicant CNIC",
    desc: "Clear front and back copy of the new owner or applicant CNIC.",
  },
  {
    title: "Latest MEPCO Bill",
    desc: "Recent electricity bill copy showing reference number, customer ID and connection details.",
  },
  {
    title: "Ownership Proof",
    desc: "Registry, sale deed, allotment letter, mutation document, Fard or other valid property proof.",
  },
  {
    title: "NOC from Previous Owner",
    desc: "No Objection Certificate may be required from previous owner or legal heirs.",
  },
  {
    title: "Application Form",
    desc: "Printed and signed application form for change of name or transfer request.",
  },
];

const cases = [
  {
    title: "Property Sale or Purchase",
    desc: "When a house, shop, plot or commercial property is sold, the electricity connection name should be transferred to the new owner.",
  },
  {
    title: "Inheritance / Wirasat Case",
    desc: "If the original owner has passed away, legal heirs may request name transfer with inheritance documents and NOC where required.",
  },
  {
    title: "Family Transfer",
    desc: "Name may be transferred between family members such as parents, spouse, siblings or children with valid documents.",
  },
  {
    title: "Spelling Correction",
    desc: "If the owner name has a spelling mistake, correction may be requested with CNIC and supporting proof.",
  },
];

const steps = [
  {
    title: "Check Current Bill Details",
    desc: "Note your reference number, customer ID, current owner name, tariff and connection category.",
  },
  {
    title: "Prepare Documents",
    desc: "Arrange CNIC, latest bill, ownership proof, NOC and application form before submission.",
  },
  {
    title: "Apply Through Relevant Process",
    desc: "Submit your request through the official ENC portal or concerned MEPCO office according to current procedure.",
  },
  {
    title: "Upload or Submit Scans",
    desc: "Provide clear scanned copies or photocopies of required documents and signed application.",
  },
  {
    title: "Track Verification",
    desc: "Keep application number or tracking ID and follow up with the relevant subdivision office.",
  },
];

const rejectionReasons = [
  {
    title: "Incomplete Documents",
    desc: "Missing CNIC, ownership proof, latest bill, NOC or signed application can delay or reject the case.",
  },
  {
    title: "Unpaid Dues",
    desc: "Pending arrears, disputed charges or unpaid bills may create processing issues.",
  },
  {
    title: "Ownership Mismatch",
    desc: "If ownership documents do not match applicant details, verification may fail.",
  },
  {
    title: "Poor Scan Quality",
    desc: "Blurred CNIC, unreadable registry or unclear bill copy may require resubmission.",
  },
];

const urduQueries = [
  "میپکو بل میں نام کیسے تبدیل کریں؟",
  "بجلی بل نام تبدیلی کے لیے کون سے کاغذات چاہیے؟",
  "میپکو بل مالک نام ٹرانسفر کیسے ہوگا؟",
  "جائیداد خریدنے کے بعد بجلی بل نام کیسے بدلیں؟",
  "وراثت پر میپکو بل نام تبدیلی کیسے ہوگی؟",
  "mepco bill name change kaise kare",
  "bijli meter name transfer kaise karwaye",
  "mepco name change documents pakistan",
];

const relatedGuides = [
  {
    href: "/mepco-new-connection-guide",
    title: "New Connection Guide",
    desc: "Apply for a new residential, commercial or industrial MEPCO connection.",
  },
  {
    href: "/mepco-demand-notice-guide",
    title: "Demand Notice Guide",
    desc: "Understand demand notice fee, payment and next steps.",
  },
  {
    href: "/mepco-bill-correction-guide",
    title: "Bill Correction Guide",
    desc: "Fix wrong readings, overbilling or incorrect bill details.",
  },
];

export default function MepcoNameChangeGuidePage() {
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
            Name Change Guide
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Name Change Guide 2026: Bill Owner Transfer, Documents and Urdu
          FAQs
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          If a property is sold, inherited, transferred, or legally moved to a
          new owner, the MEPCO electricity bill owner name may need to be
          updated. This guide explains required documents, application process,
          verification, common rejection reasons, Urdu guide and Roman Urdu
          search questions.
        </p>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
          <strong>Important:</strong> Name change approval depends on ownership
          documents, pending dues, NOC, office verification and current MEPCO
          procedure. Always verify final requirements from the relevant MEPCO
          office or official portal before submitting documents.
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
            <span className="font-normal text-slate-400">Process:</span>{" "}
            <strong className="text-slate-700">Bill Owner Name Transfer</strong>
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
        <section id="when-needed" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            When Do You Need MEPCO Name Change?
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            MEPCO name change is usually required when the electricity
            connection ownership record should match the current legal owner or
            applicant. Common situations include:
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {cases.map((item, index) => (
              <div
                key={`case-${index}`}
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

        <section id="documents" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Required Documents for MEPCO Name Change
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            Prepare clear and readable documents before applying. Requirements
            can vary depending on property sale, inheritance, family transfer or
            correction case.
          </p>

          <ul
            className="space-y-4 text-slate-800"
            aria-label="MEPCO name change required documents"
          >
            {documents.map((item, index) => (
              <li
                key={`document-${index}`}
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
            How to Apply for MEPCO Name Change
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            The name change process may be handled through the official ENC
            portal or the concerned MEPCO office according to current procedure.
            Follow these simple steps:
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-800/80 pb-4">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Step-by-Step Name Change Process
              </span>
            </div>

            <ol
              className="relative space-y-8 border-l border-slate-800 pl-6"
              aria-label="MEPCO name change application steps"
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

        <section id="rejection-reasons" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Common Reasons Name Change Request May Be Delayed or Rejected
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            Many applications are delayed because documents are incomplete,
            unclear or ownership proof does not match the applicant.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {rejectionReasons.map((item, index) => (
              <div
                key={`reject-${index}`}
                className="rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm"
              >
                <h3 className="mb-2 font-bold text-amber-950">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-amber-900">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="urdu-guide" className="scroll-mt-6" dir="rtl" lang="ur">
          <h2 className="mb-4 border-b border-slate-100 pb-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl font-sans">
            میپکو نام تبدیلی گائیڈ اردو میں
          </h2>

          <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-slate-900 shadow-sm">
            <h3 className="text-xl font-black text-emerald-900 sm:text-2xl">
              میپکو بل میں مالک کا نام کیسے تبدیل کریں؟
            </h3>

            <p className="leading-8 text-base text-slate-800">
              اگر گھر، دکان یا پراپرٹی فروخت، خرید، وراثت یا فیملی ٹرانسفر کے
              ذریعے نئے مالک کے نام ہو گئی ہے تو بجلی بل پر مالک کا نام بھی
              تبدیل کروانا ضروری ہو سکتا ہے۔ اس کے لیے متعلقہ میپکو دفتر یا
              آفیشل طریقہ کار کے مطابق درخواست دی جاتی ہے۔
            </p>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              نام تبدیلی کے لیے عام طور پر کیا چاہیے؟
            </h3>

            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-800">
              <li>نئے مالک کا شناختی کارڈ</li>
              <li>تازہ میپکو بل</li>
              <li>پراپرٹی ownership proof</li>
              <li>پرانے مالک یا legal heirs کا NOC جہاں ضروری ہو</li>
              <li>درخواست فارم یا tracking number</li>
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
              اگر name change property sale، wirasat یا family transfer کی وجہ
              سے ہو رہا ہے تو ownership documents صاف اور مکمل رکھیں تاکہ
              application delay نہ ہو۔
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
                Q1. Can I change owner name on MEPCO bill?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Yes, you may request owner name change if you have valid
                ownership proof, CNIC, latest bill and required documents.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا میپکو بل پر مالک کا نام تبدیل ہو
                  سکتا ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: جی ہاں، اگر ownership proof، CNIC، تازہ بل اور ضروری
                  documents موجود ہوں تو درخواست دی جا سکتی ہے۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q2. Is NOC required for name change?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                NOC may be required from previous owner, legal heirs or relevant
                party depending on the transfer case and office requirements.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا نام تبدیلی کے لیے NOC چاہیے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: کیس کے مطابق previous owner، legal heirs یا متعلقہ party
                  کا NOC مانگا جا سکتا ہے۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q3. Why can a name change request be delayed?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Delay may happen due to incomplete documents, unpaid dues,
                ownership mismatch, unclear scans or verification workload.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> نام تبدیلی کی درخواست delay کیوں ہوتی
                  ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: incomplete documents، unpaid dues، ownership mismatch یا
                  unclear scans کی وجہ سے delay ہو سکتا ہے۔
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Ownership and Support Guides
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
          only. Name change process, documents, portal requirements, fee,
          timeline and approval rules can vary. Always verify final requirements
          from your relevant MEPCO office or official portal.
        </div>
      </footer>
    </main>
  );
}
