import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Bill Slabs Guide 2026 | Unit Rates & Protected Consumers",
  description:
    "Understand MEPCO bill slabs, electricity unit price variations, protected and unprotected consumer rules, FPA, GST and tariff updates.",
  alternates: {
    canonical: "https://mepco-website-jx8g.vercel.app/mepco-bill-slabs-guide",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Global Schema Object aligned with UI content for optimal SEO crawlability
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "What is a protected consumer in MEPCO bill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A protected consumer is a residential electricity user whose monthly usage stays within the 200-unit limit for 6 consecutive months. Protected users receive subsidized lower slab rates compared with unprotected users."
      }
    },
    {
      "@type": "Question",
      "name": "What is an unprotected consumer in MEPCO bill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An unprotected consumer is a residential user who crosses the 200-unit limit or does not maintain a low usage pattern. Their electricity unit rates are significantly higher than protected consumers."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my MEPCO bill increase after crossing slab units?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Electricity bills increase after crossing slab limits because higher consumption shifts your entire bill into a higher progressive tariff bracket. Taxes, FPA, and adjustments also scale up significantly."
      }
    },
    {
      "@type": "Question",
      "name": "Does crossing 200 units increase the entire bill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Crossing 200 units triggers a category shift from protected to unprotected status, which increases the baseline electricity unit price for all the consumed units and adds heavier multi-layered taxes."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my MEPCO bill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can significantly reduce your MEPCO bill by keeping your monthly consumption under 200 units to maintain protected consumer status, avoiding high-load appliance usage during peak hours, and monitoring your regular meter readings."
      }
    },
    {
      "@type": "Question",
      "name": "Are MEPCO unit rates fixed forever?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, MEPCO electricity unit price, government taxes, and fuel price adjustments can fluctuate monthly based on NEPRA notifications and regulatory modifications."
      }
    }
  ],
};

export default function MepcoBillSlabsGuidePage() {
  return (
    <main className="min-h-screen bg-[#f4f8f5] text-[#111]">
      {/* Injecting FAQ Schema directly on layout root */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner Section */}
      <section className="border-b border-green-100 bg-gradient-to-br from-white via-[#eef8f1] to-[#dcefe5] px-5 py-14">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-black text-[#005b2e] transition hover:bg-green-200"
          >
            ← Back to MEPCO Home
          </Link>

          <h1 className="mt-8 text-4xl font-black leading-tight text-[#8B0000] md:text-6xl">
            MEPCO Bill Slabs Guide 2026
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
            Managing your utility costs starts with understanding how the official <strong>MEPCO unit rate</strong> is calculated. In this guide, we break down the latest <strong>bill slabs in Pakistan</strong>, consumer categories, and key factors affecting the modern <strong>electricity unit price</strong> structure.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/mepco-bill-calculator"
              className="rounded-2xl bg-[#005b2e] px-6 py-3 font-black text-white shadow-md transition hover:bg-[#004221]"
            >
              🧮 Calculate Your Bill
            </Link>

            <Link
              href="/mepco-taxes-explained"
              className="rounded-2xl border border-green-200 bg-white px-6 py-3 font-black text-[#005b2e] shadow-sm transition hover:bg-green-50"
            >
              🧾 View Taxes Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Main Analysis Body */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          
          <article className="space-y-8">
            
            {/* Consumer Logic Box */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-3xl font-black text-[#005b2e]">
                Protected vs Unprotected Consumer Rules
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                Pakistan residential tariff guidelines define two critical categories: <strong>protected consumers</strong> and <strong>unprotected consumers</strong>. Staying within specific parameters can significantly control your overall <strong>electricity unit price</strong> calculation metrics.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5">
                  <h3 className="text-xl font-black text-[#005b2e]">
                    Protected Consumer Status
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Residential users maintaining low monthly usage consistently within the 200-unit threshold for 6 consecutive months receive subsidized slab treatments.
                  </p>
                </div>

                <div className="rounded-2xl border border-red-100 bg-red-50/40 p-5">
                  <h3 className="text-xl font-black text-[#8B0000]">
                    Unprotected Consumer Status
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    Users with historical or active usage exceeding the low threshold bracket, triggering standard progressive tariff calculation rules.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-5 text-sm leading-7 text-orange-900">
                <strong>Important Note:</strong> Categorization statuses are reviewed dynamically based on official distribution rules. Monitor your ongoing structural consumption to protect subsidized status parameters.
              </div>
            </div>

            {/* Slab Calculation Matrix Table Box */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-3xl font-black text-[#005b2e]">
                MEPCO Bill Slabs Matrix & Brackets
              </h2>

              <p className="mt-4 leading-8 text-gray-700">
                Progressive tariff structures imply that climbing to higher brackets elevates individual tier parameters. Managing performance across these boundaries defines the base level of consumer consumption control.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-green-50 text-[#005b2e]">
                    <tr>
                      <th className="p-4 font-black">Units Range Bracket</th>
                      <th className="p-4 font-black">Status Bracket Category</th>
                      <th className="p-4 font-black">Estimated Tariff Impact</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    <tr>
                      <td className="p-4 font-bold">1 - 100 Units</td>
                      <td className="p-4 text-green-700 font-bold">Protected Level</td>
                      <td className="p-4">Subsidized Base Rate Applied</td>
                    </tr>

                    <tr>
                      <td className="p-4 font-bold">101 - 200 Units</td>
                      <td className="p-4 text-green-700 font-bold">Protected Level</td>
                      <td className="p-4">Subsidized Base Rate Applied</td>
                    </tr>

                    <tr>
                      <td className="p-4 font-bold">201 - 300 Units</td>
                      <td className="p-4 text-gray-600">Unprotected Normal</td>
                      <td className="p-4">Standard Base Rate Applied</td>
                    </tr>

                    <tr>
                      <td className="p-4 font-bold">301 - 400 Units</td>
                      <td className="p-4 text-orange-700 font-bold">Elevated Level</td>
                      <td className="p-4">Progressive Rate Elevation</td>
                    </tr>

                    <tr>
                      <td className="p-4 font-bold">400+ Units</td>
                      <td className="p-4 text-red-700 font-bold">Peak Bracket</td>
                      <td className="p-4">Maximum Base Tariff Applied</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                * Structural metrics represent estimates based on historical tariff parameters. Final evaluation relies on official adjustments like FPA, QTA, and separate government surcharges.
              </p>
            </div>

            {/* Jump Dynamics Box */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-3xl font-black text-[#005b2e]">
                Why Your Bill Jumps After Higher Units
              </h2>

              <ul className="mt-5 list-disc space-y-3 pl-5 leading-8 text-gray-700">
                <li>Crossing bracket thresholds upgrades the baseline calculation status.</li>
                <li>Exceeding continuous usage caps may disqualify users from protected benefits.</li>
                <li>Variable charges like Fuel Price Adjustments scale up with total volume consumption.</li>
                <li>Fixed taxes like GST are calculated directly as percentages of the enhanced base subtotal.</li>
              </ul>
            </div>

            {/* Front-Facing FAQ Section */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
              <h2 className="text-3xl font-black text-[#005b2e]">
                Frequently Asked Questions
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="font-black text-gray-900">
                    What is a protected consumer in MEPCO bill?
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    A protected consumer is a residential electricity user whose monthly usage stays within the 200-unit limit for 6 consecutive months. Protected users receive subsidized lower slab rates compared with unprotected users.
                  </p>
                </div>

                <div className="border-t pt-5">
                  <h3 className="font-black text-gray-900">
                    What is an unprotected consumer in MEPCO bill?
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    An unprotected consumer is a residential user who crosses the 200-unit limit or does not maintain a low usage pattern. Their electricity unit rates are significantly higher than protected consumers.
                  </p>
                </div>

                <div className="border-t pt-5">
                  <h3 className="font-black text-gray-900">
                    Why does my MEPCO bill increase after crossing slab units?
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    Electricity bills increase after crossing slab limits because higher consumption shifts your entire bill into a higher progressive tariff bracket. Taxes, FPA, and adjustments also scale up significantly.
                  </p>
                </div>

                <div className="border-t pt-5">
                  <h3 className="font-black text-gray-900">
                    Does crossing 200 units increase the entire bill?
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    Yes. Crossing 200 units triggers a category shift from protected to unprotected status, which increases the baseline electricity unit price for all the consumed units and adds heavier multi-layered taxes.
                  </p>
                </div>

                <div className="border-t pt-5">
                  <h3 className="font-black text-gray-900">
                    How can I reduce my MEPCO bill?
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    You can significantly reduce your MEPCO bill by keeping your monthly consumption under 200 units to maintain protected consumer status, avoiding high-load appliance usage during peak hours, and monitoring your regular meter readings.
                  </p>
                </div>

                <div className="border-t pt-5">
                  <h3 className="font-black text-gray-900">
                    Are MEPCO unit rates fixed forever?
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    No, MEPCO electricity unit price, government taxes, and fuel price adjustments can fluctuate monthly based on NEPRA notifications and regulatory modifications.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Right Sidebar Matrix Section */}
          <aside className="space-y-5">
            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-[#005b2e]">
                Estimate Your Bill
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Use the calculator to estimate electricity charges, FPA, fixed charges and GST.
              </p>
              <Link
                href="/mepco-bill-calculator"
                className="mt-5 block rounded-2xl bg-[#005b2e] p-4 text-center font-black text-white transition hover:bg-[#004221]"
              >
                Open Calculator →
              </Link>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-[#005b2e]">
                Related Guides
              </h3>

              <div className="mt-5 grid gap-3">
                <Link
                  href="/mepco-taxes-explained"
                  className="rounded-xl bg-[#f4f8f5] p-3 text-sm font-bold text-[#005b2e] hover:bg-green-50"
                >
                  🧾 MEPCO Taxes Explained
                </Link>

                <Link
                  href="/mepco-peak-hours-guide"
                  className="rounded-xl bg-[#f4f8f5] p-3 text-sm font-bold text-[#005b2e] hover:bg-green-50"
                >
                  ⏰ Peak Hours Guide
                </Link>

                <Link
                  href="/mepco-reference-number-guide"
                  className="rounded-xl bg-[#f4f8f5] p-3 text-sm font-bold text-[#005b2e] hover:bg-green-50"
                >
                  🔢 Reference Number Guide
                </Link>

                <Link
                  href="/all-mepco-regions"
                  className="rounded-xl bg-[#f4f8f5] p-3 text-sm font-bold text-[#005b2e] hover:bg-green-50"
                >
                  📍 All MEPCO Regions
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}