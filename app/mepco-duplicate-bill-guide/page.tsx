import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Duplicate Bill Guide 2026 | Download, Print & Urdu FAQs",
  description:
    "Learn how to download and print MEPCO duplicate bill online by reference number or customer ID, with Urdu guide, Roman Urdu queries, mobile tips and FAQs.",
  keywords: [
    "MEPCO duplicate bill",
    "download MEPCO bill",
    "print MEPCO bill online",
    "MEPCO bill copy",
    "MEPCO bill check by reference number",
    "MEPCO duplicate bill by customer ID",
    "mepco duplicate bill kaise nikale",
    "mepco bill download kaise kare",
    "bijli ka bill online check kare",
    "میپکو ڈپلیکیٹ بل",
    "میپکو بل ڈاؤن لوڈ",
    "بجلی بل آن لائن چیک",
    "میپکو بل پرنٹ",
  ],
  alternates: {
    canonical: "https://www.mepcoonlinebill.net/mepco-duplicate-bill-guide",
  },
};

const quickLinks = [
  { href: "#what-is-duplicate-bill", text: "1. What is Duplicate Bill?" },
  { href: "#requirements", text: "2. What You Need" },
  { href: "#download-process", text: "3. Download Process" },
  { href: "#mobile-print", text: "4. Mobile & Print Tips" },
  { href: "#common-issues", text: "5. Common Issues" },
  { href: "#urdu-guide", text: "6. Urdu Guide" },
  { href: "#faqs", text: "7. FAQs" },
];

const requirements = [
  {
    title: "14-Digit Reference Number",
    desc: "The fastest way to check your MEPCO duplicate bill online. It is printed on your old electricity bill.",
  },
  {
    title: "Customer ID",
    desc: "Some bill portals may support customer ID, but reference number is usually easier and more common.",
  },
  {
    title: "Internet Connection",
    desc: "Use mobile data or Wi-Fi on your phone, laptop, or computer.",
  },
  {
    title: "PDF or Printer Option",
    desc: "Use browser print option to save the bill as PDF or print a hard copy.",
  },
];

const steps = [
  {
    title: "Find Reference Number",
    desc: "Take any old MEPCO bill and find the 14-digit reference number near the top section.",
  },
  {
    title: "Open Bill Checker",
    desc: "Open the bill check page or homepage bill checker form.",
  },
  {
    title: "Enter Number Correctly",
    desc: "Type the full 14-digit reference number without spaces, dashes, or extra letters.",
  },
  {
    title: "Check Bill Details",
    desc: "Verify billing month, payable amount, due date, consumer name, and units consumed.",
  },
  {
    title: "Print or Save PDF",
    desc: "Use Ctrl + P on computer or browser print/share option on mobile to save or print your bill.",
  },
];

const issues = [
  {
    title: "Bill Not Found",
    desc: "Recheck your reference number. It should be exactly 14 digits and entered without spaces.",
  },
  {
    title: "Website Not Loading",
    desc: "Try again after a few minutes. Official bill servers may become slow near due dates.",
  },
  {
    title: "Wrong Bill Showing",
    desc: "Make sure the reference number belongs to your own connection and not an old bill from another property.",
  },
  {
    title: "Print Option Missing",
    desc: "On computer press Ctrl + P. On mobile use browser menu, share option, or save as PDF.",
  },
];

const urduQueries = [
  "میپکو ڈپلیکیٹ بل کیسے نکالیں؟",
  "میپکو بل ریفرنس نمبر سے کیسے چیک کریں؟",
  "بجلی کا بل گم ہو جائے تو کیا کریں؟",
  "میپکو بل موبائل پر کیسے ڈاؤن لوڈ کریں؟",
  "میپکو بل پی ڈی ایف کیسے بنائیں؟",
  "mepco duplicate bill kaise nikale",
  "mepco bill reference number se kaise check kare",
  "bijli ka bill gum ho jaye to kya kare",
];

const relatedGuides = [
  {
    href: "/mepco-reference-number-guide",
    title: "Reference Number Guide",
    desc: "Find and understand your 14-digit MEPCO reference number.",
  },
  {
    href: "/mepco-customer-id-guide",
    title: "Customer ID Guide",
    desc: "Learn what customer ID means and where to find it.",
  },
  {
    href: "/mepco-bill-due-date-guide",
    title: "Bill Due Date Guide",
    desc: "Check due date, late fee and amount after due date.",
  },
];

export default function MepcoDuplicateBillGuidePage() {
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
            Duplicate Bill Guide
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Duplicate Bill Guide 2026: Download, Print, Save PDF and Urdu
          FAQs
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          If your MEPCO electricity bill is lost, delayed, damaged, or not
          delivered, you can download a duplicate bill online using your
          14-digit reference number. This guide explains how to check, print,
          save PDF, and understand the process in English, Urdu, and Roman Urdu.
        </p>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
          <strong>Important:</strong> Always use a correct reference number and
          verify the billing month, payable amount, due date, and consumer
          details before paying your duplicate bill.
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
            <strong className="text-slate-700">Duplicate Bill Download</strong>
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
        <section id="what-is-duplicate-bill" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What is a MEPCO Duplicate Bill?
          </h2>

          <p className="mb-4 leading-relaxed text-slate-800">
            A MEPCO duplicate bill is an online copy of your latest electricity
            bill. It shows your payable amount, due date, billing month, units
            consumed, taxes, arrears, and other bill details. You can use this
            duplicate bill copy for online payment or printing.
          </p>

          <div className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <strong className="mb-1 block font-bold">Simple Meaning:</strong>
            Duplicate bill means a reprint or online copy of your current MEPCO
            electricity bill.
          </div>
        </section>

        <section id="requirements" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What You Need to Download MEPCO Duplicate Bill
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            Before checking your duplicate bill, keep the following details
            ready:
          </p>

          <ul
            className="space-y-4 text-slate-800"
            aria-label="MEPCO duplicate bill requirements"
          >
            {requirements.map((item, index) => (
              <li
                key={`requirement-${index}`}
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

        <section id="download-process" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Download MEPCO Duplicate Bill Online
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            Follow these simple steps to check and download your latest MEPCO
            bill copy online:
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-800/80 pb-4">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Step-by-Step Duplicate Bill Download
              </span>
            </div>

            <ol
              className="relative space-y-8 border-l border-slate-800 pl-6"
              aria-label="MEPCO duplicate bill download steps"
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

        <section id="mobile-print" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Print or Save MEPCO Bill on Mobile
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            Many Pakistani users check duplicate bills on mobile. After your
            bill opens, you can save it as PDF or print it using browser options.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h3 className="mb-2 font-bold text-slate-900">
                On Mobile Phone
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Open the bill in browser, tap menu/share, choose Print or Save
                as PDF if available, then save the file to your phone.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <h3 className="mb-2 font-bold text-slate-900">
                On Computer/Laptop
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Press Ctrl + P, select printer or Save as PDF, then confirm that
                bill month, due date, and amount are visible.
              </p>
            </div>
          </div>
        </section>

        <section id="common-issues" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Common MEPCO Duplicate Bill Problems
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            If your bill is not opening or details look incorrect, check these
            common problems:
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {issues.map((item, index) => (
              <div
                key={`issue-${index}`}
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
            <strong className="font-bold">Security Note:</strong> Do not enter
            your reference number or personal details on unknown websites. Use a
            trusted bill checker and verify details before payment.
          </div>
        </section>

        <section id="urdu-guide" className="scroll-mt-6" dir="rtl" lang="ur">
          <h2 className="mb-4 border-b border-slate-100 pb-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl font-sans">
            میپکو ڈپلیکیٹ بل گائیڈ اردو میں
          </h2>

          <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-slate-900 shadow-sm">
            <h3 className="text-xl font-black text-emerald-900 sm:text-2xl">
              میپکو ڈپلیکیٹ بل کیسے نکالیں؟
            </h3>

            <p className="leading-8 text-base text-slate-800">
              اگر آپ کا بجلی بل گم ہو گیا ہے، گھر پر نہیں پہنچا، یا خراب ہو
              گیا ہے تو آپ ریفرنس نمبر کی مدد سے آن لائن میپکو ڈپلیکیٹ بل نکال
              سکتے ہیں۔ یہ بل اصل بل کی طرح payable amount، due date، units اور
              billing month دکھاتا ہے۔
            </p>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              ڈپلیکیٹ بل کے لیے کیا چاہیے؟
            </h3>

            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-800">
              <li>14 digit reference number</li>
              <li>پرانا بجلی بل یا reference number کی تصویر</li>
              <li>موبائل یا کمپیوٹر پر internet</li>
              <li>PDF save یا print کرنے کا option</li>
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
              بل کھولنے کے بعد due date، payable amount اور bill month ضرور
              چیک کریں۔ اگر bill amount یا reading غلط لگے تو bill correction
              یا meter complaint guide ضرور پڑھیں۔
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
                Q1. Can I download MEPCO duplicate bill without old bill?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                You need at least your 14-digit reference number or customer ID.
                If you do not have an old bill, check SMS record, saved photo,
                or contact the relevant office.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا پرانے بل کے بغیر ڈپلیکیٹ بل نکل
                  سکتا ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: آپ کو کم از کم reference number یا customer ID چاہیے۔
                  اگر پرانا بل نہیں ہے تو saved photo، SMS record یا دفتر سے
                  مدد لیں۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q2. Can I pay bill using duplicate copy?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Yes, a duplicate bill copy can usually be used for payment if
                bill details and payable amount are correct.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا duplicate bill سے payment ہو سکتی
                  ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: جی ہاں، اگر بل details درست ہوں تو duplicate copy سے
                  payment کی جا سکتی ہے۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q3. What should I do if duplicate bill is not opening?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Recheck the reference number, refresh the page, try after a few
                minutes, or use another browser/device.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> اگر ڈپلیکیٹ بل open نہ ہو تو کیا کریں؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: reference number دوبارہ چیک کریں، page refresh کریں،
                  کچھ دیر بعد دوبارہ کوشش کریں یا دوسرا browser استعمال کریں۔
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Duplicate Bill Guides
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
          only. Bill availability, payment status, server response and displayed
          details can vary. Always verify your latest bill amount, due date and
          consumer details before making payment.
        </div>
      </footer>
    </main>
  );
}
