import Link from "next/link";
import { Metadata } from "next";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `MEPCO Rajanpur Bill Check Online ${currentYear} | Duplicate Bill`,
  description: `Check your MEPCO Rajanpur electricity bill online for ${currentYear}. Download duplicate bills, print latest invoices, and view billing details using your 14-digit reference number.`,
  alternates: {
    canonical:
      "https://mepco-website-jx8g.vercel.app/rajanpur-bill-check",
  },
  keywords: [
    "MEPCO Rajanpur bill",
    "Rajanpur bill check",
    "MEPCO duplicate bill Rajanpur",
    "online electricity bill Rajanpur",
    "Jampur MEPCO bill",
    "Rojhan electricity bill",
    "Fazilpur MEPCO bill",
  ],
};

export default function RajanpurBillCheckPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentService",
        "@id":
          "https://mepco-website-jx8g.vercel.app/rajanpur-bill-check#service",
        name: "MEPCO Rajanpur Online Bill Checking",
        serviceType: "Electricity Bill Utilities",
        provider: {
          "@type": "GovernmentOrganization",
          name: "Multan Electric Power Company (MEPCO)",
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Rajanpur",
          },
          {
            "@type": "AdministrativeArea",
            name: "Jampur",
          },
          {
            "@type": "AdministrativeArea",
            name: "Rojhan",
          },
          {
            "@type": "AdministrativeArea",
            name: "Fazilpur",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://mepco-website-jx8g.vercel.app/rajanpur-bill-check#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How can I check my Rajanpur MEPCO bill online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can check your MEPCO Rajanpur electricity bill online using your 14-digit reference number or customer ID.",
            },
          },
          {
            "@type": "Question",
            name: "Can I check my Rajanpur bill without a paper bill?",
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
      name: "MEPCO Layyah Bill Check",
      href: "/layyah-bill-check",
    },
    {
      name: "MEPCO Muzaffargarh Bill Check",
      href: "/muzaffargarh-bill-check",
    },
    {
      name: "MEPCO Rahim Yar Khan Bill Check",
      href: "/rahim-yar-khan-bill-check",
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
              <span className="mx-1 text-slate-400">
                &gt;
              </span>{" "}
              Rajanpur
            </p>
          </nav>

          <header className="mb-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              MEPCO Rajanpur Bill Check Online{" "}
              {currentYear}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Rajanpur electricity consumers can
              check their MEPCO bill online
              using a 14-digit reference number
              or customer ID. This page helps
              users view, download, and print
              duplicate MEPCO bills quickly.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-4 text-xl font-bold text-slate-950 sm:text-2xl">
              How to Check Rajanpur MEPCO Bill
            </h2>

            <ol className="space-y-3 text-slate-600 list-decimal pl-5">
              <li className="pl-1">
                Find your{" "}
                <strong className="text-slate-900">
                  14-digit reference number
                </strong>{" "}
                from an old electricity bill.
              </li>

              <li className="pl-1">
                Enter the reference number in
                the MEPCO bill check form.
              </li>

              <li className="pl-1">
                Open your latest electricity
                bill online.
              </li>

              <li className="pl-1">
                Download or print your
                duplicate bill copy.
              </li>
            </ol>
          </section>

          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                Duplicate Electricity Bill for
                Rajanpur
              </h2>

              <p>
                If your printed electricity bill
                is lost, delayed, or damaged,
                you can access your MEPCO
                Rajanpur duplicate bill online.
                It helps you check due date,
                payable amount, consumed
                units, taxes, surcharges, and
                billing details without visiting
                an office.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                Areas Covered under Rajanpur
                Region
              </h2>

              <p>
                MEPCO serves electricity
                consumers across{" "}
                <strong className="text-slate-900">
                  Rajanpur
                </strong>
                ,{" "}
                <strong className="text-slate-900">
                  Jampur
                </strong>
                ,{" "}
                <strong className="text-slate-900">
                  Rojhan
                </strong>
                ,{" "}
                <strong className="text-slate-900">
                  Fazilpur
                </strong>
                , and nearby rural areas.
                Consumers from these areas can
                use online bill checking
                services for quick monthly bill
                access.
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
                    Can I check my Rajanpur
                    bill without a paper bill?
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
                  Yes, if you have your
                  14-digit reference number or
                  customer ID, you can check
                  your latest MEPCO
                  electricity bill online.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 focus:outline-none">
                  <h3 className="text-lg font-semibold">
                    Is duplicate MEPCO bill
                    valid for payment?
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
                  Yes, a printed duplicate
                  electricity bill can be used
                  for bill payment and personal
                  record keeping.
                </p>
              </details>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}