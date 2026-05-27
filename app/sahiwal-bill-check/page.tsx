import Link from "next/link";
import { Metadata } from "next";

// 2026 Production Ready Dynamic Year Tracker
const currentYear = new Date().getFullYear() || 2026;

export const metadata: Metadata = {
  title: `MEPCO Sahiwal Bill Check Online ${currentYear} | Download Duplicate Bill`,
  description:
    "Check your MEPCO Sahiwal electricity bill online. Download duplicate bill, print latest invoice, and view billing details using your 14-digit reference number.",
  alternates: {
    canonical: "/sahiwal-bill-check",
  },
  keywords: [
    "MEPCO Sahiwal bill",
    "Sahiwal bill check",
    "MEPCO duplicate bill Sahiwal",
    "online electricity bill Sahiwal",
    "MEPCO online bill check",
    "Chichawatni MEPCO bill",
  ],
};

export default function SahiwalBillCheckPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I check my Sahiwal MEPCO bill online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can check your MEPCO Sahiwal electricity bill online using your 14-digit reference number on our portal.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I print duplicate MEPCO Sahiwal bill?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can download, save as PDF, and print your duplicate electricity bill online absolutely free.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        <section className="mx-auto max-w-4xl px-6 py-12">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
            MEPCO Regional Bill Check &gt; Sahiwal Division
          </p>

          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            MEPCO Sahiwal Bill Check Online {currentYear}
          </h1>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Sahiwal division electricity consumers can easily check their MEPCO bills online
            using the 14-digit reference number or customer ID. View duplicate bills,
            print monthly invoices, and verify outstanding amounts instantly without physical copies.
          </p>

          <div className="mb-8 rounded-2xl border border-green-100 bg-green-50 p-6">
            <h2 className="mb-3 text-2xl font-semibold text-green-900">
              How to Check Sahiwal MEPCO Bill
            </h2>

            <ol className="list-decimal space-y-3 pl-5 text-slate-700">
              <li>Locate your 14-digit reference number from old bills.</li>
              <li>Enter the reference number into the main input form.</li>
              <li>Click on the submit or check bill button to pull live data.</li>
              <li>View, print, or download your duplicate bill copy directly.</li>
            </ol>
          </div>

          <h2 className="mb-3 text-2xl font-semibold">
            Duplicate Electricity Bill for Sahiwal &amp; Chichawatni
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            If your physical utility bill is lost, damaged, or delayed, you can
            instantly access your MEPCO Sahiwal duplicate bill online. This automated system 
            helps consumers check the due dates, total payable amount after the due date, units consumed,
            and complete breakdown of taxes.
          </p>

          <h2 className="mb-3 text-2xl font-semibold">
            Areas Covered under Sahiwal MEPCO Circle
          </h2>

          <p className="mb-6 leading-8 text-slate-700">
            MEPCO manages a broad distribution network across Sahiwal District, including urban centers 
            and rural sub-divisions. Residents from <strong className="font-semibold">Chichawatni</strong>, <strong className="font-semibold">Harappa</strong>, <strong className="font-semibold">Kameer</strong>, and adjacent regions 
            can use this service to manage and track their regional power consumption bills smoothly.
          </p>

          <div className="mb-8 rounded-2xl border border-slate-200 p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              Related MEPCO Cities
            </h2>

            <div className="grid gap-3 sm:grid-cols-2">

              <Link
                className="rounded-xl border p-4 transition hover:bg-slate-50 hover:text-green-700"
                href="/multan-bill-check"
              >
                <strong>MEPCO Multan Bill Check</strong>
              </Link>

              <Link
                className="rounded-xl border p-4 transition hover:bg-slate-50 hover:text-green-700"
                href="/khanewal-bill-check"
              >
                <strong>MEPCO Khanewal Bill Check</strong>
              </Link>

              <Link
                className="rounded-xl border p-4 transition hover:bg-slate-50 hover:text-green-700"
                href="/bahawalpur-bill-check"
              >
                <strong>MEPCO Bahawalpur Bill Check</strong>
              </Link>

              <Link
                className="rounded-xl border p-4 transition hover:bg-slate-50 hover:text-green-700"
                href="/vehari-bill-check"
              >
                <strong>MEPCO Vehari Bill Check</strong>
              </Link>

              <Link
                className="rounded-xl border p-4 transition hover:bg-slate-50 hover:text-green-700"
                href="/lodhran-bill-check"
              >
                <strong>MEPCO Lodhran Bill Check</strong>
              </Link>

            </div>
          </div>

          <h2 className="mb-4 text-2xl font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-semibold text-slate-800">
                How can I check my Sahiwal electricity bill online?
              </h3>
              <p className="mt-1 text-slate-700">
                Simply fetch your 14-digit reference number from any old billing receipt, paste it into our online checker, and view your current month bills immediately.
              </p>
            </div>

            <div className="pb-4">
              <h3 className="text-lg font-semibold text-slate-800">
                Can I download duplicate MEPCO bill?
              </h3>
              <p className="mt-1 text-slate-700">
                Yes, our system allows you to save your high-resolution digital copy as a PDF file or directly trigger print configurations (`Ctrl + P`).
              </p>
            </div>

          </div>

        </section>
      </main>
    </>
  );
}