import Link from "next/link";
import { Metadata } from "next";

const currentYear = new Date().getFullYear() || 2026;

export const metadata: Metadata = {
  title: `MEPCO Dera Ghazi Khan Bill Check Online ${currentYear} | Duplicate Bill`,
  description:
    "Check your MEPCO Dera Ghazi Khan electricity bill online. Download duplicate bill, print latest invoice, and view billing details using your 14-digit reference number.",
  alternates: {
    canonical: "/dera-ghazi-khan-bill-check",
  },
  keywords: [
    "MEPCO Dera Ghazi Khan bill",
    "Dera Ghazi Khan bill check",
    "DG Khan MEPCO bill",
    "MEPCO duplicate bill Dera Ghazi Khan",
    "online electricity bill DG Khan",
    "Taunsa MEPCO bill",
    "Fort Munro electricity bill",
  ],
};

export default function DeraGhaziKhanBillCheckPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can I check my Dera Ghazi Khan MEPCO bill online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can check your MEPCO Dera Ghazi Khan electricity bill online using your 14-digit reference number or customer ID.",
            },
          },
          {
            "@type": "Question",
            name: "Can I print duplicate MEPCO Dera Ghazi Khan bill?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, you can download, save as PDF, and print your duplicate electricity bill online.",
            },
          },
          {
            "@type": "Question",
            name: "Can I check my Dera Ghazi Khan bill without a paper bill?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, if you have your 14-digit reference number or customer ID, you can check your latest MEPCO electricity bill online.",
            },
          },
          {
            "@type": "Question",
            name: "Is duplicate MEPCO bill valid for payment?",
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
    { name: "MEPCO Multan Bill Check", href: "/multan-bill-check" },
    { name: "MEPCO Muzaffargarh Bill Check", href: "/muzaffargarh-bill-check" },
    { name: "MEPCO Rahim Yar Khan Bill Check", href: "/rahim-yar-khan-bill-check" },
    { name: "MEPCO Sahiwal Bill Check", href: "/sahiwal-bill-check" },
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
              <span className="mx-1 text-slate-400">&gt;</span> Dera Ghazi Khan
            </p>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              MEPCO Dera Ghazi Khan Bill Check Online {currentYear}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Dera Ghazi Khan electricity consumers can check their MEPCO bill
              online using a 14-digit reference number or customer ID. This page
              helps users view, download, and print duplicate MEPCO bills quickly.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-4 text-xl font-bold text-slate-950 sm:text-2xl">
              How to Check Dera Ghazi Khan MEPCO Bill
            </h2>

            <ol className="space-y-3 pl-1 text-slate-600 [list-style-type:decimal] [padding-left:1.25rem]">
              <li className="pl-1">
                Find your{" "}
                <strong className="text-slate-900">
                  14-digit reference number
                </strong>{" "}
                from an old electricity bill.
              </li>
              <li className="pl-1">
                Enter the reference number in the MEPCO bill check form.
              </li>
              <li className="pl-1">
                Open your latest electricity bill online.
              </li>
              <li className="pl-1">
                Download or print your duplicate bill copy.
              </li>
            </ol>
          </section>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                Duplicate Electricity Bill for Dera Ghazi Khan
              </h2>

              <p>
                If your printed electricity bill is lost, delayed, or damaged,
                you can access your MEPCO Dera Ghazi Khan duplicate bill online.
                It helps you check due date, payable amount, consumed units,
                taxes, surcharges, and billing details without visiting an
                office.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                Areas Covered under Dera Ghazi Khan Region
              </h2>

              <p>
                MEPCO serves electricity consumers across{" "}
                <strong className="text-slate-900">Dera Ghazi Khan</strong>,{" "}
                <strong className="text-slate-900">Taunsa</strong>,{" "}
                <strong className="text-slate-900">Kot Chutta</strong>,{" "}
                <strong className="text-slate-900">Fort Munro</strong>, and
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
                    Can I check my Dera Ghazi Khan bill without a paper bill?
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