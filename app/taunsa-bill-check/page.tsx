import Link from "next/link";
import { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `MEPCO Taunsa Bill Check Online ${currentYear} | Duplicate Bill`,
  description: `Check your MEPCO Taunsa electricity bill online for ${currentYear}. Download duplicate bills, print latest invoices, and view billing details using your 14-digit reference number.`,
  alternates: {
    canonical: "https://mepco-website-jx8g.vercel.app/taunsa-bill-check",
  },
  keywords: [
    "MEPCO Taunsa bill",
    "Taunsa bill check",
    "MEPCO duplicate bill Taunsa",
    "online electricity bill Taunsa",
    "Taunsa Sharif MEPCO bill",
    "DG Khan Taunsa electricity bill",
    "MEPCO Taunsa duplicate bill",
    "wapda online bill check taunsa",
    "mepco online bill enter 14 digit",
  ],
};

export default function TaunsaBillCheckPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentService",
        "@id": "https://mepco-website-jx8g.vercel.app/taunsa-bill-check#service",
        name: "MEPCO Taunsa Online Bill Checking",
        serviceType: "Electricity Bill Utilities",
        provider: {
          "@type": "GovernmentOrganization",
          name: "Multan Electric Power Company (MEPCO)",
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Taunsa" },
          { "@type": "AdministrativeArea", name: "Taunsa Sharif" },
          { "@type": "AdministrativeArea", name: "Dera Ghazi Khan" },
          { "@type": "AdministrativeArea", name: "Nearby rural areas" },
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://mepco-website-jx8g.vercel.app/taunsa-bill-check#howto",
        name: "How to Check Your MEPCO Taunsa Bill Online",
        description: "Follow these steps to view and download your duplicate MEPCO electricity bill online.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Locate Reference Number",
            text: "Find your 14-digit reference number or 10-digit customer ID from an old electricity bill."
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Enter Details",
            text: "Enter the 14-digit reference number into the input form field carefully without spaces."
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "View Bill",
            text: "Click submit to instantly display your latest monthly electric bill on screen."
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Download/Print Copy",
            text: "Click print or save as PDF to keep a valid duplicate bill copy for payments."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://mepco-website-jx8g.vercel.app/taunsa-bill-check#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can I check my Taunsa MEPCO bill online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can check your MEPCO Taunsa electricity bill online using your 14-digit reference number or customer ID.",
            },
          },
          {
            "@type": "Question",
            name: "Can I check my Taunsa bill without a paper bill?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, if you have your 14-digit reference number or customer ID from an old bill, you can check your latest MEPCO electricity bill online.",
            },
          },
          {
            "@type": "Question",
            name: "Is a duplicate MEPCO bill valid for payment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, a printed duplicate electricity bill can be used for bill payment and personal record keeping.",
            },
          },
        ],
      },
    ],
  };

  const cities = [
    {
      name: "MEPCO Dera Ghazi Khan Bill Check",
      href: "/dera-ghazi-khan-bill-check",
    },
    {
      name: "MEPCO Rajanpur Bill Check",
      href: "/rajanpur-bill-check",
    },
    {
      name: "MEPCO Layyah Bill Check",
      href: "/layyah-bill-check",
    },
    {
      name: "MEPCO Muzaffargarh Bill Check",
      href: "/muzaffargarh-bill-check",
    },
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
              <span className="mx-1 text-slate-400">&gt;</span> Taunsa
            </p>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              MEPCO Taunsa Bill Check Online {currentYear}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Taunsa electricity consumers can easily complete their WAPDA online bill check
              using a 14-digit reference number or 10-digit customer ID. This free public portal helps
              users view, download, and print duplicate MEPCO bills quickly from any device.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-4 text-xl font-bold text-slate-950 sm:text-2xl">
              How to Perform MEPCO Online Bill Check (Step-by-Step)
            </h2>

            <ol className="space-y-4 text-slate-600 list-decimal pl-5">
              <li className="pl-1">
                <strong className="text-slate-900">Locate Your Credentials:</strong> Find your{" "}
                <span className="font-semibold text-slate-900">14-digit reference number</span> or 10-digit customer ID located on the top section of any previous month's paper bill copy.
              </li>
              <li className="pl-1">
                <strong className="text-slate-900">Input Data:</strong> Enter the reference number into the MEPCO bill check portal input field without spaces.
              </li>
              <li className="pl-1">
                <strong className="text-slate-900">Submit Request:</strong> Click on the submit button to load your latest electricity bill tracking statement online.
              </li>
              <li className="pl-1">
                <strong className="text-slate-900">Save Copy:</strong> Access your full duplicate web bill view to either download as a PDF or print out your high-resolution receipt.
              </li>
            </ol>
          </section>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                Get a Duplicate Electricity Bill for Taunsa Sharif
              </h2>
              <p>
                If your physical monthly statement is lost, delayed, or misplaced,
                accessing your <span className="font-semibold text-slate-950">MEPCO Taunsa duplicate bill online</span> ensures you never miss a deadline. The digital invoice displays vital metrics, including the exact due date, current units consumed, late payment surcharge additions, and official regulatory fees such as FCA (Fuel Price Adjustment) taxes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                MEPCO Areas Covered Under Taunsa Sub-Division
              </h2>
              <p>
                Multan Electric Power Company (MEPCO) handles the complete distribution grid across{" "}
                <strong className="text-slate-900">Taunsa</strong>,{" "}
                <strong className="text-slate-900">Taunsa Sharif</strong>,{" "}
                <strong className="text-slate-900">Dera Ghazi Khan (DG Khan)</strong>, and all associated rural and suburban sectors. Consumers registered under these clusters can leverage this utility tool for instant verification of their outstanding WAPDA electrical balances.
              </p>
            </section>
          </div>

          <section className="my-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-slate-950 sm:text-2xl">
              Related MEPCO Regions &amp; Cities
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
                    How can I check my Taunsa MEPCO bill online?
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
                  You can check your MEPCO Taunsa electricity bill online using your 14-digit reference number or customer ID.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 focus:outline-none">
                  <h3 className="text-lg font-semibold">
                    Can I check my Taunsa bill without a paper bill?
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