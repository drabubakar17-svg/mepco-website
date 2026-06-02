import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEPCO Duplicate Bill Guide 2026 | Download & Print Bill Copy",
  description:
    "Learn how to download, print, and check your MEPCO duplicate electricity bill online using your 14-digit reference number or customer ID.",
  keywords: [
    "MEPCO duplicate bill",
    "download MEPCO bill",
    "print MEPCO bill online",
    "MEPCO bill copy",
    "MEPCO electricity bill duplicate",
    "MEPCO bill check by reference number",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-duplicate-bill-guide",
  },
};

const quickLinks = [
  { href: "#what-is-duplicate-bill", text: "1. What is a Duplicate Bill?" },
  { href: "#requirements", text: "2. What You Need" },
  { href: "#download-process", text: "3. Download Process (Step-by-Step)" },
  { href: "#print-save", text: "4. How to Print or Save" },
  { href: "#common-issues", text: "5. Common Problems & Fixes" },
];

const requirements = [
  {
    title: "14-Digit Reference Number",
    desc: "This is the most important number printed on your old bill copy to check your current bill online.",
  },
  {
    title: "Customer ID",
    desc: "Another number on your bill, but using the 14-digit reference number is much faster and easier.",
  },
  {
    title: "Internet Connection",
    desc: "A working mobile data link or internet connection on your phone or computer.",
  },
  {
    title: "Printer or Phone Storage",
    desc: "Required if you want to take a hard copy print or save the PDF file directly to your phone storage.",
  },
];

const steps = [
  {
    title: "Find Your Reference Number",
    desc: "Take any old electricity bill from your home and locate the 14-digit reference number written near the top.",
  },
  {
    title: "Open the Bill Check Form",
    desc: "Go to the main billing page or use the input box provided on our portal homepage.",
  },
  {
    title: "Enter the Number Without Spaces",
    desc: "Type your complete 14-digit reference number continuously. Do not add any spaces, dashes, or alphabets.",
  },
  {
    title: "Verify Your Bill Details",
    desc: "Check the screen to make sure your consumer name, bill amount, due date, and consumed units are correct.",
  },
  {
    title: "Click Print or Save as PDF",
    desc: "Press the print button or use your browser options to save a digital copy of the bill on your device.",
  },
];

const issues = [
  {
    title: "Bill Copy Not Found Error",
    desc: "Please check your reference number again. Make sure it is exactly 14 digits and has no typing mistakes.",
  },
  {
    title: "Website Loading Slowly",
    desc: "During the due date rush, MEPCO main servers get heavy traffic. Please wait a few minutes and refresh the page.",
  },
  {
    title: "Wrong Consumer Name Showing",
    desc: "Verify that the reference number belongs to your Multan or local region connection and not another city.",
  },
  {
    title: "Print Button Not Working",
    desc: "If the automatic button fails, press 'Ctrl + P' on your computer keyboard or use the share menu on mobile chrome to save the PDF.",
  },
];

const relatedGuides = [
  {
    href: "/mepco-reference-number-guide",
    title: "Reference Number Guide",
    desc: "Learn where to find your 14-digit MEPCO reference number on your bill.",
  },
  {
    href: "/mepco-customer-id-guide",
    title: "Customer ID Guide",
    desc: "Understand customer ID and how it differs from the reference number.",
  },
  {
    href: "/mepco-bill-correction-guide",
    title: "Bill Correction Guide",
    desc: "Fix wrong readings, overbilling, duplicate charges, or billing mistakes.",
  },
];

export default function MepcoDuplicateBillGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Breadcrumb Navigation */}
      <nav
        className="mb-6 text-xs font-medium uppercase tracking-wide text-slate-500"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2">
          <li>
            <a href="/" className="transition-colors hover:text-emerald-600">
              Home
            </a>
          </li>
          <li className="text-slate-400" aria-hidden="true">/</li>
          <li className="font-semibold text-slate-800" aria-current="page">
            Duplicate Bill
          </li>
        </ol>
      </nav>

      {/* Hero Header Area */}
      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Duplicate Bill Guide 2026: Download, Print, and Save Your Bill Online
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          If your electricity bill is lost, late, or not delivered to your home, you do not need to worry. You can easily download your MEPCO duplicate bill online using your 14-digit reference number. This simple guide will help you check, print, and save your latest electricity bill copy within a minute.
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-slate-200 py-3.5 text-sm font-medium text-slate-500">
          <div>
            <span className="font-normal text-slate-400">Company:</span>{" "}
            <strong className="text-slate-700">Multan Electric Power Company (MEPCO)</strong>
          </div>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">|</span>
          <div>
            <span className="font-normal text-slate-400">Service:</span>{" "}
            <strong className="text-slate-700">Online Duplicate Bill Download</strong>
          </div>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">|</span>
          <div>
            <span className="font-normal text-slate-400">Updated:</span>{" "}
            <strong className="text-slate-700">June 2026</strong>
          </div>
        </div>
      </header>

      {/* Internal Jump Links */}
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

      {/* Core Structural Information */}
      <section className="space-y-14">
        {/* Section 1: Definition */}
        <article id="what-is-duplicate-bill" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What is a MEPCO Duplicate Bill?
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            A MEPCO duplicate bill is an official digital copy of your monthly electricity bill. It contains the exact same information as your original paper bill, including the total payable amount, due date, electricity units consumed, and tax breakdowns. If your original bill is lost, you can use this online print copy to pay your bill at any bank counter, easyPaisa, JazzCash, or post office without any issues.
          </p>
          <div className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <strong className="mb-1 block font-bold">Quick Tip:</strong>
            Always save your 14-digit reference number in your notes or browser. This way, you can check your bill next month with a single click instead of searching for an old paper bill again.
          </div>
        </article>

        {/* Section 2: Requirements */}
        <article id="requirements" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What You Need to Check Your Bill Online
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            Before checking your electricity bill details online, make sure you have these things ready:
          </p>
          <ul
            className="space-y-4 text-slate-800"
            aria-label="Duplicate bill requirements checklist"
          >
            {requirements.map((item, index) => (
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
                  <strong className="font-bold text-slate-900">{item.title}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </article>

        {/* Section 3: Step-by-step Download Process */}
        <article id="download-process" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Download Your MEPCO Bill (Step-by-Step)
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            Following these simple steps will help you load and display your consumer bill instantly on your mobile screen:
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-800/80 pb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                5-Step Easy Bill Download
              </span>
            </div>

            <ol
              className="relative space-y-8 border-l border-slate-800 pl-6"
              aria-label="Duplicate bill download roadmap"
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

        {/* Section 4: Print Operations */}
        <article id="print-save" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Print or Save Your MEPCO Bill as a PDF
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            Once your online bill copy opens completely in a new tab, use these tips to print it or download a file copy:
          </p>
          <ul className="list-disc space-y-2.5 pl-6 leading-relaxed text-slate-800">
            <li>Make sure the current month name is showing correctly on top before paying.</li>
            <li>Check that the bill amount and last date match your expectations perfectly.</li>
            <li>If you are on a phone, click the share icon and select 'Print' to save it as a PDF file directly.</li>
            <li>For bank payments, make sure your printer quality is clear so the shop/bank agent can scan the barcode easily.</li>
          </ul>
        </article>

        {/* Section 5: Diagnostic Handling */}
        <article id="common-issues" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Common MEPCO Duplicate Bill Problems
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            If you face any issues while fetching your billing data, here are some quick solutions to help you fix them:
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {issues.map((item, index) => (
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
              <strong className="font-bold shrink-0">Security Note:</strong>
              <span>
                Always check your bill on a trusted device. Never share your commercial registration or confidential credentials on unsafe, unverified websites to ensure your personal data remains completely protected.
              </span>
            </div>
          </div>
        </article>
      </section>

      {/* Regional Link Architecture Container */}
      <section className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Bill Guides
        </h2>

        <div className="grid gap-4 text-sm font-medium md:grid-cols-3">
          {relatedGuides.map((guide) => (
            <a
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
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}