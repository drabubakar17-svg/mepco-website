import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

// Dynamically compute the current year for SEO and schema freshness
const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `MEPCO Customer ID Guide ${currentYear} | Find Customer ID on Bill`,
  description:
    "Learn where to find your MEPCO Customer ID on your electricity bill and how it differs from the 14-digit reference number.",
  alternates: {
    canonical:
      "https://mepco-website-jx8g.vercel.app/mepco-customer-id-guide",
  },
  openGraph: {
    title: `MEPCO Customer ID Guide ${currentYear}`,
    description:
      "Find your MEPCO Customer ID and understand the difference between Customer ID and Reference Number.",
    url: "https://mepco-website-jx8g.vercel.app/mepco-customer-id-guide",
    type: "article",
  },
};

export default function MepcoCustomerIdGuidePage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to Find MEPCO Customer ID",
        description:
          "Step by step guide to locate your MEPCO Customer ID on your electricity bill.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Open Your MEPCO Bill",
            text: "Take any old or current MEPCO electricity bill copy.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Check Top Section",
            text: "Look near the top area of the bill where customer details, reference number, and billing information are printed.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Find Customer ID",
            text: "Locate the Customer ID field and use it carefully for bill checking if supported.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is MEPCO Customer ID?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MEPCO Customer ID is an identification number printed on the electricity bill. It helps identify a consumer account along with the 14-digit reference number.",
            },
          },
          {
            "@type": "Question",
            name: "Is Customer ID the same as Reference Number?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, Customer ID and Reference Number are different. The reference number is usually 14 digits, while the Customer ID is a separate consumer identifier.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="mepco-customer-id-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <article className="mx-auto max-w-4xl px-4 py-12">
          <nav
            className="mb-3 text-xs font-bold uppercase tracking-wider text-green-700"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:underline">
              MEPCO Home
            </Link>{" "}
            &gt; <span>Customer ID Guide</span>
          </nav>

          <header>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              MEPCO Customer ID Guide {currentYear}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              The <strong>MEPCO Customer ID</strong> is printed on your
              electricity bill and helps identify your consumer account. Many
              users confuse it with the 14-digit reference number, but both are
              different identifiers used for electricity bill checking.
            </p>
          </header>

          <section className="mt-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              Where Is Customer ID Located on MEPCO Bill?
            </h2>

            <p className="mt-3 leading-relaxed text-slate-700">
              You can usually find the Customer ID near the top section of your
              MEPCO bill. It is often printed close to the reference number,
              consumer name, billing month, tariff information, and connection
              details.
            </p>

            <div className="mt-5 rounded-xl border border-green-100 bg-green-50 p-5">
              <span className="mb-1 block font-bold text-green-800">
                Example Customer ID:
              </span>

              <span className="block font-mono text-2xl font-black tracking-widest text-slate-900">
                1234567890
              </span>

              <p className="mt-2 text-xs text-slate-500">
                This is only an example. Use the Customer ID printed on your own
                electricity bill.
              </p>
            </div>
          </section>

          <section className="mt-10 space-y-6 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-bold text-slate-950">
              Customer ID vs Reference Number
            </h2>

            <p>
              The <strong>reference number</strong> is usually a 14-digit number
              used for checking your duplicate bill online. The{" "}
              <strong>Customer ID</strong> is a separate account identifier.
              Some bill systems may allow checking by Customer ID, while others
              require the 14-digit reference number.
            </p>

            <h2 className="text-2xl font-bold text-slate-950">
              How to Use Customer ID for Bill Checking
            </h2>

            <ol className="list-decimal space-y-3 pl-5 font-medium text-slate-800">
              <li>Open your old or current MEPCO bill copy.</li>
              <li>Find the Customer ID field near the top section.</li>
              <li>Enter the Customer ID carefully if the bill checker supports it.</li>
              <li>
                If Customer ID does not work, use the 14-digit reference number.
              </li>
            </ol>
          </section>

          <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900">
                  Can I check MEPCO bill by Customer ID?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Some online bill checking systems support Customer ID, but the
                  most common method is still the 14-digit reference number.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold text-slate-900">
                  What if I cannot find my Customer ID?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Check the upper section of your bill near the reference number
                  and consumer information. If you still cannot find it, use the
                  14-digit reference number instead.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-2xl border bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-950">
              Useful MEPCO Tools
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/mepco-reference-number-guide"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                14-Digit Reference Number Guide
              </Link>

              <Link
                href="/mepco-bill-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                MEPCO Bill Calculator
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}