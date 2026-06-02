import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Bill Payment Methods 2026 | Online Payment, Bank & Urdu FAQs",
  description:
    "Learn how to pay MEPCO electricity bill through bank apps, mobile wallets, ATM, internet banking, over-the-counter payment, and Urdu/Roman Urdu FAQs.",
  keywords: [
    "MEPCO bill payment",
    "MEPCO online bill payment",
    "MEPCO bill payment methods",
    "pay MEPCO bill online",
    "MEPCO bill JazzCash",
    "MEPCO bill EasyPaisa",
    "MEPCO bill bank app",
    "mepco bill online kaise pay kare",
    "bijli bill online kaise jama kare",
    "میپکو بل آن لائن پیمنٹ",
    "بجلی بل آن لائن جمع",
    "میپکو بل جاز کیش",
    "میپکو بل ایزی پیسہ",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-bill-payment-methods-guide",
  },
};

const quickLinks = [
  { href: "#what-is-payment", text: "1. MEPCO Bill Payment Options" },
  { href: "#online-methods", text: "2. Online Payment Methods" },
  { href: "#bank-payment", text: "3. Bank & ATM Payment" },
  { href: "#before-payment", text: "4. Before You Pay" },
  { href: "#urdu-guide", text: "5. Urdu Guide" },
  { href: "#faqs", text: "6. FAQs" },
];

const onlineMethods = [
  {
    title: "Mobile Banking App",
    desc: "Open your bank app, choose bill payment, select electricity/MEPCO, enter reference number and confirm amount.",
  },
  {
    title: "Internet Banking",
    desc: "Use your bank’s web portal to pay electricity bills through consumer/reference number.",
  },
  {
    title: "Mobile Wallets",
    desc: "Some users pay through wallet apps such as JazzCash or EasyPaisa where electricity bill payment is available.",
  },
  {
    title: "Payment Apps",
    desc: "Authorized payment apps may support electricity bill payment through reference number or consumer ID.",
  },
];

const offlineMethods = [
  {
    title: "Bank Counter",
    desc: "Take printed bill or duplicate bill copy to supported bank branch and pay at counter.",
  },
  {
    title: "ATM Payment",
    desc: "Some banks allow utility bill payment through ATM using reference number.",
  },
  {
    title: "Post Office or Collection Point",
    desc: "Where available, consumers may pay printed electricity bill at authorized collection points.",
  },
  {
    title: "Retail Agent",
    desc: "Some wallet or bank agents can process utility bill payment if the service is available.",
  },
];

const beforePaying = [
  {
    title: "Check Reference Number",
    desc: "Make sure the 14-digit reference number is correct before confirming payment.",
  },
  {
    title: "Verify Amount",
    desc: "Compare payable amount, due date, billing month and amount after due date.",
  },
  {
    title: "Save Receipt",
    desc: "Always save screenshot, transaction ID, SMS or printed receipt after payment.",
  },
  {
    title: "Avoid Last-Minute Payment",
    desc: "Pay before due date to avoid late surcharge and app/server delays.",
  },
];

const urduQueries = [
  "میپکو بل آن لائن کیسے جمع کریں؟",
  "میپکو بل جاز کیش سے کیسے ادا کریں؟",
  "میپکو بل ایزی پیسہ سے کیسے جمع کریں؟",
  "بینک ایپ سے بجلی بل کیسے ادا کریں؟",
  "بجلی بل کی payment confirm کیسے کریں؟",
  "mepco bill online kaise pay kare",
  "bijli bill jazzcash se kaise jama kare",
  "mepco bill easypaisa se kaise pay kare",
];

const relatedGuides = [
  {
    href: "/mepco-duplicate-bill-guide",
    title: "Duplicate Bill Guide",
    desc: "Download and print your latest MEPCO bill before payment.",
  },
  {
    href: "/mepco-bill-due-date-guide",
    title: "Bill Due Date Guide",
    desc: "Check due date, late fee and amount after due date.",
  },
  {
    href: "/mepco-reference-number-guide",
    title: "Reference Number Guide",
    desc: "Find your 14-digit reference number for online payment.",
  },
];

export default function MepcoBillPaymentMethodsGuidePage() {
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
            Bill Payment Methods
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Bill Payment Methods 2026: Online Payment, Bank Apps and Urdu
          FAQs
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          MEPCO consumers can pay electricity bills through online banking,
          mobile wallet apps, bank counters, ATMs and other authorized payment
          channels. This guide explains common payment methods, safety checks,
          receipt saving tips and Urdu/Roman Urdu search questions.
        </p>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
          <strong>Important:</strong> Payment availability may vary by bank,
          wallet app, region, bill status and service provider. Always verify
          your reference number, payable amount and transaction receipt before
          considering the bill paid.
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
            <strong className="text-slate-700">Bill Payment Methods</strong>
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
        <section id="what-is-payment" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            MEPCO Bill Payment Options
          </h2>

          <p className="mb-4 leading-relaxed text-slate-800">
            MEPCO bill payment means paying your electricity bill before or
            after due date through an available payment channel. Many consumers
            now prefer online payment because it saves time and avoids bank
            counter queues.
          </p>

          <div className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <strong className="mb-1 block font-bold">Simple Meaning:</strong>
            You can pay your MEPCO bill through bank app, wallet app, ATM, bank
            counter or other authorized payment service.
          </div>
        </section>

        <section id="online-methods" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Online MEPCO Bill Payment Methods
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            Online payment is usually done by entering your reference number or
            consumer number in the bill payment section of a supported banking or
            wallet app.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {onlineMethods.map((item, index) => (
              <div
                key={`online-${index}`}
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

        <section id="bank-payment" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Bank, ATM and Counter Payment Methods
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            If you do not want to pay online, you can use physical payment
            channels where available.
          </p>

          <ul className="space-y-4 text-slate-800">
            {offlineMethods.map((item, index) => (
              <li
                key={`offline-${index}`}
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

        <section id="before-payment" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Important Checks Before Paying MEPCO Bill
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {beforePaying.map((item, index) => (
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

        <section id="urdu-guide" className="scroll-mt-6" dir="rtl" lang="ur">
          <h2 className="mb-4 border-b border-slate-100 pb-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl font-sans">
            میپکو بل پیمنٹ گائیڈ اردو میں
          </h2>

          <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-slate-900 shadow-sm">
            <h3 className="text-xl font-black text-emerald-900 sm:text-2xl">
              میپکو بل آن لائن کیسے جمع کریں؟
            </h3>

            <p className="leading-8 text-base text-slate-800">
              میپکو بل آن لائن جمع کرنے کے لیے اپنی بینک ایپ، موبائل والٹ یا
              انٹرنیٹ بینکنگ میں bill payment کا option کھولیں۔ Electricity یا
              MEPCO منتخب کریں، reference number درج کریں، amount verify کریں
              اور payment confirm کریں۔
            </p>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              payment سے پہلے کیا چیک کرنا ضروری ہے؟
            </h3>

            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-800">
              <li>14 digit reference number درست ہو</li>
              <li>payable amount اور due date درست ہو</li>
              <li>billing month check کر لیں</li>
              <li>payment کے بعد receipt یا screenshot save کریں</li>
              <li>آخری تاریخ سے پہلے payment کرنے کی کوشش کریں</li>
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
                Q1. Can I pay MEPCO bill online?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Yes, many consumers pay MEPCO bills through supported bank apps,
                internet banking, wallet apps or other authorized payment
                services.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا میپکو بل آن لائن جمع ہو سکتا ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: جی ہاں، supported bank apps، internet banking یا wallet
                  apps سے payment کی جا سکتی ہے۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q2. What if payment fails?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                If payment fails, do not repeat immediately without checking
                balance, transaction status, SMS or app receipt. Contact your
                bank or wallet support if amount was deducted.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> اگر payment fail ہو جائے تو کیا کریں؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: پہلے balance، transaction status اور SMS check کریں۔ اگر
                  amount deduct ہو گئی ہے تو bank یا wallet support سے رابطہ
                  کریں۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q3. Should I save payment receipt?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Yes, always save payment receipt, transaction ID, screenshot or
                SMS until payment is reflected and next bill is issued.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا payment receipt save کرنی چاہیے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: جی ہاں، receipt، transaction ID یا screenshot ضرور save
                  کریں۔
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Payment Guides
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
          only. Payment methods, app availability, bank support, transaction
          timing and confirmation status can vary. Always verify payment from
          your bank, wallet provider or official bill record.
        </div>
      </footer>
    </main>
  );
}