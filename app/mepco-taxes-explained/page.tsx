import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

// Dynamically compute the current year for SEO and schema freshness
const currentYear = new Date().getFullYear();

const taxes = [
  {
    name: "GST",
    full: "General Sales Tax",
    detail:
      "GST is a government tax added to electricity bills. It is usually calculated as a percentage of applicable bill charges.",
  },
  {
    name: "FPA",
    full: "Fuel Price Adjustment",
    detail:
      "FPA changes according to fuel cost differences in power generation. It may increase or decrease monthly.",
  },
  {
    name: "QTA",
    full: "Quarterly Tariff Adjustment",
    detail:
      "QTA is applied after tariff adjustments approved for electricity distribution companies.",
  },
  {
    name: "FC Surcharge",
    full: "Financing Cost Surcharge",
    detail:
      "FC surcharge is added per unit to support financing costs in the power sector.",
  },
  {
    name: "Electricity Duty",
    full: "Provincial Electricity Duty",
    detail:
      "Electricity duty is a provincial levy added to electricity consumption charges.",
  },
  {
    name: "PTV Fee",
    full: "Pakistan Television Fee",
    detail:
      "PTV fee is a fixed government fee commonly shown on domestic electricity bills.",
  },
  {
    name: "Fixed Charges",
    full: "Monthly Fixed / Service Charges",
    detail:
      "Fixed charges may apply depending on connection type, sanctioned load, tariff category, or billing policy.",
  },
];

export const metadata: Metadata = {
  title: `MEPCO Taxes Explained ${currentYear} | FPA, GST, QTA & Bill Charges`,
  description:
    "Understand MEPCO bill taxes and charges including GST, FPA, QTA, FC surcharge, electricity duty, PTV fee, and fixed charges.",
  alternates: {
    canonical: "https://mepco-website-jx8g.vercel.app/mepco-taxes-explained",
  },
  openGraph: {
    title: `MEPCO Taxes Explained ${currentYear}`,
    description:
      "Learn what GST, FPA, QTA, FC surcharge, electricity duty, PTV fee, and fixed charges mean on your MEPCO bill.",
    url: "https://mepco-website-jx8g.vercel.app/mepco-taxes-explained",
    type: "article",
  },
};

export default function MepcoTaxesExplainedPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What taxes are included in MEPCO bill?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MEPCO bills may include GST, FPA, QTA, FC surcharge, electricity duty, PTV fee, fixed charges, and other official adjustments depending on tariff and billing policy.",
            },
          },
          {
            "@type": "Question",
            name: "Why does FPA change every month?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fuel Price Adjustment changes because electricity generation fuel costs can vary from month to month.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="mepco-taxes-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <article className="mx-auto max-w-5xl px-4 py-12">
          <nav
            className="mb-3 text-xs font-bold uppercase tracking-wider text-green-700"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:underline">
              MEPCO Home
            </Link>{" "}
            &gt; <span>Taxes Explained</span>
          </nav>

          <header className="max-w-4xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              MEPCO Taxes Explained {currentYear}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              MEPCO electricity bills include different taxes, adjustments, and
              government charges. This guide explains common bill items such as{" "}
              <strong>GST</strong>, <strong>FPA</strong>, <strong>QTA</strong>,{" "}
              <strong>FC surcharge</strong>, <strong>electricity duty</strong>,{" "}
              <strong>PTV fee</strong>, and fixed charges in simple words.
            </p>
          </header>

          <section className="mt-10 grid gap-4 sm:grid-cols-2">
            {taxes.map((tax) => (
              <div
                key={tax.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                  {tax.name}
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-950">
                  {tax.full}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {tax.detail}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              Why Your MEPCO Bill Amount Changes
            </h2>

            <p className="mt-3 leading-relaxed text-slate-700">
              Your monthly bill may change even if your units are close to the
              previous month. This happens because FPA, QTA, tariff slabs, taxes,
              arrears, late payment surcharge, and government adjustments can
              change the final payable amount.
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
              <li>Higher units may move you into a higher tariff slab.</li>
              <li>FPA may be added or reduced according to monthly fuel cost.</li>
              <li>QTA may appear due to quarterly tariff adjustments.</li>
              <li>GST and duty are added on applicable bill values.</li>
              <li>Arrears or late payment surcharge may increase the total.</li>
            </ul>
          </section>

          <section className="mt-10 space-y-6 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-bold text-slate-950">
              FPA, QTA and GST in Simple Words
            </h2>

            <p>
              <strong>FPA</strong> is linked with fuel cost variation.{" "}
              <strong>QTA</strong> is linked with quarterly tariff adjustments.
              <strong> GST</strong> is a general tax added on electricity bill
              charges. These charges make the final bill different from simple
              unit-rate multiplication.
            </p>

            <h2 className="text-2xl font-bold text-slate-950">
              How to Estimate Your Bill
            </h2>

            <p>
              If you want to estimate your total payable amount, use the MEPCO
              bill calculator and enter your monthly units, FPA, QTA, GST,
              electricity duty, FC surcharge, PTV fee, and fixed charges.
            </p>
          </section>

          <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900">
                  Is FPA charged every month?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  FPA can vary month to month. Sometimes it may be added,
                  reduced, or adjusted depending on official fuel price
                  calculations.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold text-slate-900">
                  Why is GST added to my electricity bill?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  GST is a government tax applied to applicable electricity bill
                  charges according to billing rules and tariff policy.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold text-slate-900">
                  Can I calculate exact MEPCO taxes online?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  You can estimate taxes using a calculator, but the official
                  bill may differ because rates and adjustments can change.
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
                href="/mepco-bill-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                MEPCO Bill Calculator
              </Link>

              <Link
                href="/mepco-peak-hours-guide"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                MEPCO Peak Hours Guide
              </Link>

              <Link
                href="/mepco-reference-number-guide"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                Reference Number Guide
              </Link>

              <Link
                href="/mepco-customer-id-guide"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                Customer ID Guide
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}