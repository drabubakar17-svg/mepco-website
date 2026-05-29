import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

// Dynamically compute the current year for SEO and schema freshness
const currentYear = new Date().getFullYear();

const peakHours = [
  {
    months: "December to February",
    timing: "5:00 PM to 9:00 PM",
    note: "Winter peak timing",
  },
  {
    months: "March to May",
    timing: "6:00 PM to 10:00 PM",
    note: "Spring / early summer timing",
  },
  {
    months: "June to August",
    timing: "7:00 PM to 11:00 PM",
    note: "Summer peak timing",
  },
  {
    months: "September to November",
    timing: "6:00 PM to 10:00 PM",
    note: "Autumn timing",
  },
];

export const metadata: Metadata = {
  title: `MEPCO Peak Hours Guide ${currentYear} | Electricity Peak Timing`,
  description:
    "Check MEPCO peak hours timing by season and learn how peak electricity usage affects your bill, TOU meter charges, and energy saving routine.",
  alternates: {
    canonical:
      "https://mepco-website-jx8g.vercel.app/mepco-peak-hours-guide",
  },
  openGraph: {
    title: `MEPCO Peak Hours Guide ${currentYear}`,
    description:
      "Learn MEPCO peak and off-peak timing, TOU meter billing, and how to reduce electricity usage during expensive peak hours.",
    url: "https://mepco-website-jx8g.vercel.app/mepco-peak-hours-guide",
    type: "article",
  },
};

export default function MepcoPeakHoursGuidePage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are MEPCO peak hours?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MEPCO peak hours are evening hours when electricity demand is high and TOU meter users may be charged at a higher rate.",
            },
          },
          {
            "@type": "Question",
            name: "Do peak hours apply to all MEPCO consumers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Peak hour billing mainly affects consumers with Time of Use or TOU meters. Regular domestic consumers should still reduce usage during peak hours to manage load and save energy.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="mepco-peak-hours-schema"
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
            &gt; <span>Peak Hours Guide</span>
          </nav>

          <header>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              MEPCO Peak Hours Guide {currentYear}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              MEPCO peak hours are the high-demand electricity usage periods
              when consumers should avoid running heavy appliances. Peak and
              off-peak timing matters especially for TOU meters because usage is
              recorded separately during expensive peak hours.
            </p>
          </header>

          <section className="mt-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              MEPCO Peak Hours Timing
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Peak hours can vary by season and official notifications. The
              common DISCO peak-hour pattern is shown below. A PITC peak/off-peak
              timing page lists seasonal windows such as 5 PM–9 PM in Dec–Feb,
              6 PM–10 PM in Mar–May and Sep–Nov, and 7 PM–11 PM in Jun–Aug.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-green-50 text-slate-900">
                  <tr>
                    <th className="border-b p-3">Season / Months</th>
                    <th className="border-b p-3">Peak Timing</th>
                    <th className="border-b p-3">Note</th>
                  </tr>
                </thead>

                <tbody className="text-slate-700">
                  {peakHours.map((item) => (
                    <tr key={item.months}>
                      <td className="border-b p-3 font-semibold">
                        {item.months}
                      </td>
                      <td className="border-b p-3">{item.timing}</td>
                      <td className="border-b p-3">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Always verify your latest bill or official DISCO notice because
              timing and tariff policies can change.
            </p>
          </section>

          <section className="mt-10 space-y-6 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-bold text-slate-950">
              Why Peak Hours Increase Electricity Cost
            </h2>

            <p>
              During peak hours, the electricity network faces higher demand.
              TOU meters record peak and off-peak usage separately, so consumers
              using heavy appliances during peak timing may see higher charges.
              The Ministry of Energy has also highlighted evening peak-demand
              pressure on the power system, which is why reducing load during
              these hours is important.
            </p>

            <h2 className="text-2xl font-bold text-slate-950">
              Appliances to Avoid During Peak Hours
            </h2>

            <ul className="list-disc space-y-2 pl-5">
              <li>Electric iron</li>
              <li>Water motor</li>
              <li>Washing machine</li>
              <li>Electric heater</li>
              <li>High-power AC usage when avoidable</li>
              <li>Heavy kitchen appliances</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-950">
              How to Save Bill During Peak Timing
            </h2>

            <ol className="list-decimal space-y-3 pl-5 font-medium text-slate-800">
              <li>Shift washing, ironing, and water motor usage to off-peak hours.</li>
              <li>Use LED lights and avoid unnecessary load in the evening.</li>
              <li>Run AC at moderate temperature and avoid extra cooling load.</li>
              <li>Check your bill to confirm if you are charged under TOU rates.</li>
            </ol>
          </section>

          <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900">
                  Are MEPCO peak hours same all year?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  No. Peak timing may change by season. Common windows are
                  shorter evening periods such as 5 PM to 9 PM, 6 PM to 10 PM,
                  or 7 PM to 11 PM.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold text-slate-900">
                  Who is affected by peak-hour rates?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Mostly TOU meter users are directly affected because their
                  bill separates peak and off-peak usage. Other users can still
                  reduce bills by avoiding heavy load during peak demand.
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

              <Link
                href="/"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                MEPCO Online Bill Check
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}