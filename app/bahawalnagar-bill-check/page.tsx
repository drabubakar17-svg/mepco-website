"use client";

import React, { useState } from "react";
import Link from "next/link";

interface City {
  name: string;
  href: string;
}

interface BillData {
  referenceNumber: string;
  consumerName: string;
  address: string;
  issueDate: string;
  dueDate: string;
  unitsConsumed: number;
  payableAmount: number;
  payableAfterDueDate: number;
}

export default function BahawalnagarBillCheckPage() {
  // Form State
  const [referenceNumber, setReferenceNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [billResult, setBillResult] = useState<BillData | null>(null);

  const currentYear = new Date().getFullYear() || 2026;

  // Mock API Handler (Replace this with your actual API endpoint fetch)
  const handleCheckBill = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setBillResult(null);

    // Validate 14-digit numeric input
    const cleanRef = referenceNumber.replace(/\s+/g, "");
    if (!/^\d{14}$/.test(cleanRef)) {
      setError("Please enter a valid 14-digit numeric reference number.");
      return;
    }

    setIsLoading(true);

    // Simulating API loading state
    setTimeout(() => {
      setIsLoading(false);
      // Mocked response payload data
      setBillResult({
        referenceNumber: cleanRef,
        consumerName: "Muhammad Ahmad",
        address: "House 123, Block-B, Bahawalnagar, Punjab",
        issueDate: `05 May ${currentYear}`,
        dueDate: `22 May ${currentYear}`,
        unitsConsumed: 342,
        payableAmount: 14750,
        payableAfterDueDate: 15980,
      });
    }, 1200);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can I check my Bahawalnagar MEPCO bill online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can check your MEPCO Bahawalnagar electricity bill online using your 14-digit reference number or customer ID.",
            },
          },
          {
            "@type": "Question",
            name: "Can I print duplicate MEPCO Bahawalnagar bill?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, you can download, save as PDF, and print your duplicate electricity bill online.",
            },
          },
        ],
      },
    ],
  };

  const cities: City[] = [
    { name: "MEPCO Bahawalpur Bill Check", href: "/bahawalpur-bill-check" },
    { name: "MEPCO Rahim Yar Khan Bill Check", href: "/rahim-yar-khan-bill-check" },
    { name: "MEPCO Lodhran Bill Check", href: "/lodhran-bill-check" },
    { name: "MEPCO Multan Bill Check", href: "/multan-bill-check" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-green-100 selection:text-green-900">
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-4">
            <p className="text-xs font-bold uppercase tracking-wider text-green-700">
              MEPCO Regional Bill Check{" "}
              <span className="mx-1 text-slate-400">&gt;</span> Bahawalnagar
            </p>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              MEPCO Bahawalnagar Bill Check Online {currentYear}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Bahawalnagar electricity consumers can check their MEPCO bill
              online using a 14-digit reference number or customer ID. This page
              helps users view, download, and print duplicate MEPCO bills quickly.
            </p>
          </header>

          {/* --- ACTIVE BILL CHECK INTERACTIVE FORM --- */}
          <section className="mb-10 rounded-2xl border-2 border-green-500 bg-white p-6 shadow-md sm:p-8">
            <h2 className="mb-2 text-xl font-bold text-slate-950 sm:text-2xl">
              Enter Your Reference Number
            </h2>
            <p className="mb-6 text-sm text-slate-500">
              Provide your 14-digit electrical reference number printed on past bills without spaces or hyphens.
            </p>

            <form onSubmit={handleCheckBill} className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <input
                    type="text"
                    maxLength={14}
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value.replace(/\D/g, ""))}
                    placeholder="e.g. 14123456789012"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 font-mono text-lg tracking-wider text-slate-900 placeholder:font-sans placeholder:text-base placeholder:tracking-normal focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    disabled={isLoading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 font-semibold text-white transition hover:bg-green-700 active:bg-green-800 disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Searching...
                    </span>
                  ) : (
                    "Check Bill"
                  )}
                </button>
              </div>

              {error && <p className="text-sm font-medium text-red-600">{error}</p>}
            </form>

            {/* BILL GENERATION TARGET RESPONSE */}
            {billResult && (
              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 animate-fadeIn">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">MEPCO Online Duplicate Invoice</h3>
                    <p className="font-mono text-sm font-semibold text-slate-700">Ref: {billResult.referenceNumber}</p>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print Bill
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400">Consumer Name</span>
                    <p className="font-medium text-slate-900">{billResult.consumerName}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400">Address</span>
                    <p className="font-medium text-slate-900">{billResult.address}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400">Due Date</span>
                    <p className="font-medium text-red-600">{billResult.dueDate}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400">Units Consumed</span>
                    <p className="font-medium text-slate-900">{billResult.unitsConsumed} kWh</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 border-t border-slate-200 pt-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-green-50 p-3.5 border border-green-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700">Payable Within Due Date</span>
                    <p className="text-2xl font-black text-green-700">Rs. {billResult.payableAmount.toLocaleString()}</p>
                  </div>
                  <div className="rounded-xl bg-red-50 p-3.5 border border-red-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700">Payable After Due Date</span>
                    <p className="text-2xl font-black text-red-700">Rs. {billResult.payableAfterDueDate.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* --- INFORMATION INSTRUCTIONAL SECTIONS --- */}
          <section className="mb-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-4 text-xl font-bold text-slate-950 sm:text-2xl">
              How to Check Bahawalnagar MEPCO Bill
            </h2>
            <ol className="space-y-3 pl-1 text-slate-600 [list-style-type:decimal] [padding-left:1.25rem]">
              <li className="pl-1">
                Find your{" "}
                <strong className="text-slate-900">14-digit reference number</strong>{" "}
                from an old electricity bill.
              </li>
              <li className="pl-1">
                Enter the reference number in the MEPCO bill check form above.
              </li>
              <li className="pl-1">
                Open your latest electricity bill online instantly.
              </li>
              <li className="pl-1">
                Download or print your duplicate bill copy for your records.
              </li>
            </ol>
          </section>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                Duplicate Electricity Bill for Bahawalnagar
              </h2>
              <p>
                If your printed electricity bill is lost, delayed, or damaged,
                you can access your MEPCO Bahawalnagar duplicate bill online.
                It helps you check due date, payable amount, consumed units,
                taxes, surcharges, and billing details without visiting an
                office.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                Areas Covered under Bahawalnagar Region
              </h2>
              <p>
                MEPCO serves electricity consumers across{" "}
                <strong className="text-slate-900">Bahawalnagar</strong>,{" "}
                <strong className="text-slate-900">Chishtian</strong>,{" "}
                <strong className="text-slate-900">Haroonabad</strong>,{" "}
                <strong className="text-slate-900">Minchinabad</strong>, and
                nearby rural areas. Consumers from these areas can use online
                bill checking services for quick monthly bill access.
              </p>
            </section>
          </div>

          <section className="my-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-slate-950 sm:text-2xl">
              Related MEPCO Cities
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {cities.map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  className="group rounded-xl border border-slate-200 p-4 transition-all duration-200 outline-none hover:border-green-500 hover:bg-green-50/30 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2"
                >
                  <span className="font-semibold text-slate-800 transition group-hover:text-green-700">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="border-t border-slate-200 pt-10">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details
                className="group rounded-xl border border-slate-200 bg-white p-4 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 focus:outline-none">
                  <h3 className="text-lg font-semibold">
                    Can I check my Bahawalnagar bill without a paper bill?
                  </h3>
                  <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Yes, if you have your 14-digit reference number or customer
                  ID, you can check your latest MEPCO electricity bill online.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 focus:outline-none">
                  <h3 className="text-lg font-semibold">
                    Is duplicate MEPCO bill valid for payment?
                  </h3>
                  <span className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-900 transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Yes, a printed duplicate electricity bill can be used for bill
                  payment and personal record keeping.
                </p>
              </details>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}