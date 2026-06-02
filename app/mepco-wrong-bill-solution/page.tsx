import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEPCO Wrong Bill Solution 2026 - Overbilling Complaint Guide",
  description:
    "Learn how to fix a wrong MEPCO bill, overbilling issue, meter reading mistake, FPA/QTA charges, and how to contact MEPCO or WAPDA complaint helpline 118.",
};

// Extracted static array to prevent re-allocation on every render cycle
const COMMON_BILL_ISSUES = [
  "Incorrect meter reading",
  "Previous arrears added",
  "Fuel Price Adjustment (FPA)",
  "Quarterly Tariff Adjustment (QTA)",
  "Late payment surcharge",
  "Wrong tariff slab",
  "Meter issue or fast meter complaint",
  "Bill correction not updated",
] as const;

export default function MepcoWrongBillSolutionPage() {
  return (
    <main className="min-h-screen bg-[#f4f8f5] text-gray-900">
      {/* Hero Header Section */}
      <section className="bg-[#005b2e] px-5 py-14 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-green-100">
            MEPCO Consumer Help
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            MEPCO Wrong Bill Solution
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-100">
            If your MEPCO electricity bill looks incorrect, unusually high, or
            has a meter reading mistake, this guide explains simple steps to
            check the issue and contact the official complaint channels.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        
        {/* Common Reasons Card */}
        <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black text-[#005b2e]">
            Common Reasons for a Wrong MEPCO Bill
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {COMMON_BILL_ISSUES.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-4 font-bold text-[#005b2e]"
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </div>

        {/* Actionable Steps Card */}
        <div className="mt-8 rounded-3xl border border-green-100 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black text-[#8B0000]">
            What to Do If Your MEPCO Bill Is Wrong?
          </h2>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl bg-[#f4f8f5] p-5">
              <h3 className="text-xl font-black text-[#005b2e]">
                1. Compare Current and Previous Bill
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Check your current units, previous reading, current reading,
                tariff category, arrears, FPA, QTA, and due date. Compare these
                values with your previous MEPCO bill.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f4f8f5] p-5">
              <h3 className="text-xl font-black text-[#005b2e]">
                2. Verify Meter Reading
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Match the reading printed on your bill with the actual meter
                reading. If the printed reading is higher than the actual meter
                reading, it may be a meter reading error.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f4f8f5] p-5">
              <h3 className="text-xl font-black text-[#005b2e]">
                3. Contact Official Complaint Channels
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                For electricity complaints, consumers can contact WAPDA
                complaint number 118 or MEPCO helpline 0800-63726. For bill
                correction, visiting the nearest MEPCO sub-division office with
                your bill and CNIC is usually required.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 rounded-3xl border border-yellow-200 bg-yellow-50 p-8">
          <h2 className="text-2xl font-black text-[#7a5a00]">
            Important Note
          </h2>

          <p className="mt-3 leading-8 text-[#7a5a00]">
            This website is an independent informational guide and is not
            officially affiliated with MEPCO or PITC. Final bill correction,
            meter inspection, and official adjustment can only be handled by
            the relevant MEPCO office or official complaint system.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a
            href="/"
            className="rounded-2xl bg-[#005b2e] p-5 text-center font-black text-white transform active:scale-95 transition-transform duration-100"
          >
            Check MEPCO Bill
          </a>

          <a
            href="/mepco-taxes-explained"
            className="rounded-2xl border border-green-100 bg-white p-5 text-center font-black text-[#005b2e] transform active:scale-95 transition-transform duration-100"
          >
            MEPCO Taxes Explained
          </a>

          <a
            href="/mepco-bill-calculator"
            className="rounded-2xl border border-green-100 bg-white p-5 text-center font-black text-[#005b2e] transform active:scale-95 transition-transform duration-100"
          >
            MEPCO Bill Calculator
          </a>
        </div>
      </section>
    </main>
  );
}
