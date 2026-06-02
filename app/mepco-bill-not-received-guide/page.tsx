import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Bill Not Received Guide 2026 | Missing Bill & Urdu FAQs",
  description:
    "Learn what to do if your MEPCO electricity bill is not received, late, missing, or not delivered. Includes duplicate bill solution, Urdu guide and Roman Urdu FAQs.",
  keywords: [
    "MEPCO bill not received",
    "MEPCO bill missing",
    "electricity bill not delivered",
    "MEPCO bill late",
    "MEPCO duplicate bill not received",
    "bijli bill ghar nahi aya",
    "mepco bill receive nahi hua",
    "mepco bill nahi mila kya kare",
    "میپکو بل نہیں آیا",
    "بجلی بل گھر نہیں آیا",
    "میپکو بل گم ہو گیا",
    "ڈپلیکیٹ بل کیسے نکالیں",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-bill-not-received-guide",
  },
};

const quickLinks = [
  { href: "#why-not-received", text: "1. Why Bill is Not Received?" },
  { href: "#quick-solution", text: "2. Quick Solution" },
  { href: "#what-to-check", text: "3. What to Check" },
  { href: "#complaint-options", text: "4. Complaint Options" },
  { href: "#urdu-guide", text: "5. Urdu Guide" },
  { href: "#faqs", text: "6. FAQs" },
];

const reasons = [
  {
    title: "Late Bill Delivery",
    desc: "Sometimes printed electricity bills are delivered late due to distribution delay or local delivery issues.",
  },
  {
    title: "Lost Paper Bill",
    desc: "The paper bill may be misplaced at home, shop, office, or by the bill distributor.",
  },
  {
    title: "Wrong Address or Access Issue",
    desc: "If address details are unclear or house access is difficult, bill delivery may be affected.",
  },
  {
    title: "Bill Already Issued Online",
    desc: "In many cases, the bill is available online even if the paper copy has not reached your home.",
  },
  {
    title: "New Connection or Record Issue",
    desc: "New connections, updated records, or billing data issues can sometimes delay physical bill delivery.",
  },
];

const quickSolutions = [
  {
    title: "Use 14-Digit Reference Number",
    desc: "Open the duplicate bill page and check your latest bill online using your reference number.",
  },
  {
    title: "Check Customer ID",
    desc: "If available, use customer ID or old bill details to verify your connection record.",
  },
  {
    title: "Save Bill as PDF",
    desc: "Once the bill opens, save it as PDF or take a screenshot before the due date.",
  },
  {
    title: "Print Duplicate Bill",
    desc: "You can print the online bill copy and use it for payment where accepted.",
  },
];

const checks = [
  {
    title: "Billing Month",
    desc: "Make sure the duplicate bill belongs to the latest billing month.",
  },
  {
    title: "Due Date",
    desc: "Check due date carefully to avoid late payment surcharge.",
  },
  {
    title: "Payable Amount",
    desc: "Verify payable amount before due date and amount after due date.",
  },
  {
    title: "Reference Number",
    desc: "Confirm that the reference number belongs to your own connection.",
  },
];

const complaintOptions = [
  {
    title: "Contact Local MEPCO Office",
    desc: "If bills are repeatedly not delivered, contact your local subdivision or customer service office.",
  },
  {
    title: "Keep Old Bill Copy",
    desc: "Keep at least one old bill safely because it has your reference number and customer ID.",
  },
  {
    title: "Use Online Duplicate Bill",
    desc: "Do not wait for paper bill if due date is near. Use online duplicate bill to pay on time.",
  },
  {
    title: "Ask for Address Correction",
    desc: "If delivery address is wrong or incomplete, ask the office about correction procedure.",
  },
];

const urduQueries = [
  "میپکو بل گھر نہیں آیا تو کیا کریں؟",
  "بجلی بل نہیں ملا تو کیسے جمع کریں؟",
  "میپکو ڈپلیکیٹ بل کیسے نکالیں؟",
  "بل دیر سے آئے تو لیٹ فیس کیسے بچائیں؟",
  "میپکو بل گم ہو گیا تو کیا کریں؟",
  "mepco bill receive nahi hua kya kare",
  "bijli bill ghar nahi aya",
  "mepco duplicate bill kaise nikale",
];

const relatedGuides = [
  {
    href: "/mepco-duplicate-bill-guide",
    title: "Duplicate Bill Guide",
    desc: "Download, print and save your MEPCO duplicate bill online.",
  },
  {
    href: "/mepco-bill-due-date-guide",
    title: "Bill Due Date Guide",
    desc: "Check due date, late fee and amount after due date.",
  },
  {
    href: "/mepco-reference-number-guide",
    title: "Reference Number Guide",
    desc: "Find your 14-digit reference number on your previous bill.",
  },
];

export default function MepcoBillNotReceivedGuidePage() {
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
            Bill Not Received Guide
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Bill Not Received Guide 2026: Missing Bill, Duplicate Bill and
          Urdu FAQs
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          If your MEPCO electricity bill has not arrived at home, is delayed, or
          has been lost, you can still check and pay your bill online using the
          14-digit reference number. This guide explains common reasons, quick
          duplicate bill solution, checks before payment, complaint options, and
          Urdu/Roman Urdu search questions.
        </p>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
          <strong>Important:</strong> Do not wait for the paper bill if due date
          is near. Check your duplicate bill online and verify billing month,
          payable amount and reference number before payment.
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
            <strong className="text-slate-700">Missing Electricity Bill</strong>
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
        <section id="why-not-received" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Why Your MEPCO Bill May Not Be Received
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            A missing bill does not always mean the bill has not been generated.
            Sometimes the paper copy is delayed while the online bill is already
            available.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {reasons.map((item, index) => (
              <div
                key={`reason-${index}`}
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

        <section id="quick-solution" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Quick Solution: Download MEPCO Duplicate Bill
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            The fastest solution is to check your duplicate bill online. You
            only need your 14-digit reference number from any old bill.
          </p>

          <ul
            className="space-y-4 text-slate-800"
            aria-label="MEPCO bill not received quick solutions"
          >
            {quickSolutions.map((item, index) => (
              <li
                key={`solution-${index}`}
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

        <section id="what-to-check" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What to Check Before Paying a Duplicate Bill
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {checks.map((item, index) => (
              <div
                key={`check-${index}`}
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

        <section id="complaint-options" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What If MEPCO Bill Is Repeatedly Not Delivered?
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            If your electricity bill is repeatedly missing, you should use the
            online bill copy for immediate payment and then contact the local
            office for address or delivery issue guidance.
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-800/80 pb-4">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Practical Action Steps
              </span>
            </div>

            <ol
              className="relative space-y-8 border-l border-slate-800 pl-6"
              aria-label="MEPCO missing bill complaint steps"
            >
              {complaintOptions.map((step, index) => (
                <li key={`complaint-${index}`} className="relative">
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

        <section id="urdu-guide" className="scroll-mt-6" dir="rtl" lang="ur">
          <h2 className="mb-4 border-b border-slate-100 pb-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl font-sans">
            میپکو بل نہ ملنے کی گائیڈ اردو میں
          </h2>

          <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-slate-900 shadow-sm">
            <h3 className="text-xl font-black text-emerald-900 sm:text-2xl">
              میپکو بل گھر نہیں آیا تو کیا کریں؟
            </h3>

            <p className="leading-8 text-base text-slate-800">
              اگر آپ کا میپکو بجلی بل گھر نہیں آیا، گم ہو گیا یا دیر سے آ رہا
              ہے تو پریشان ہونے کی ضرورت نہیں۔ آپ اپنے 14 digit reference number
              کی مدد سے آن لائن duplicate bill نکال سکتے ہیں اور due date سے
              پہلے payment کر سکتے ہیں۔
            </p>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              فوری حل کیا ہے؟
            </h3>

            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-800">
              <li>پرانے بل سے reference number نوٹ کریں</li>
              <li>online duplicate bill open کریں</li>
              <li>bill month، payable amount اور due date check کریں</li>
              <li>bill save یا print کر لیں</li>
              <li>due date سے پہلے payment کریں</li>
            </ul>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              لوگ گوگل پر عموماً یہ سوال پوچھتے ہیں:
            </h3>

            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-700">
              {urduQueries.map((query, index) => (
                <li key={`query-${index}`}>{query}</li>
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
                Q1. What should I do if my MEPCO bill is not received?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Use your 14-digit reference number to check the duplicate bill
                online. Do not wait if the due date is near.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> اگر میپکو بل گھر نہیں آیا تو کیا کریں؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: پرانے بل سے reference number لے کر online duplicate bill
                  چیک کریں۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q2. Can I pay without paper bill?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Yes, if you have a correct duplicate bill copy or reference
                number, you can usually pay through supported payment channels.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا paper bill کے بغیر payment ہو سکتی
                  ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: جی ہاں، duplicate bill یا درست reference number سے
                  payment کی جا سکتی ہے۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q3. How can I avoid late fee if bill is late?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Check duplicate bill online before due date, save receipt after
                payment, and do not rely only on paper delivery.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> بل late آئے تو late fee سے کیسے بچیں؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: due date سے پہلے online duplicate bill check کریں اور
                  payment receipt save کریں۔
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Missing Bill Guides
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
          only. Bill delivery, server availability, payment status and delivery
          process can vary. Always verify your latest bill from official bill
          record or relevant MEPCO office when needed.
        </div>
      </footer>
    </main>
  );
}