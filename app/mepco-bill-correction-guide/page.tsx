import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEPCO Bill Correction Guide 2026 | Wrong Electricity Bill Solution",
  description:
    "Learn how to correct a wrong MEPCO electricity bill, fix billing errors, and submit a bill correction request.",
};

export default function MepcoBillCorrectionGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-slate-800 selection:bg-amber-100">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 sm:text-5xl">
          MEPCO Bill Correction Guide 2026
        </h1>
        <p className="text-lg leading-relaxed text-slate-600">
          Receiving an incorrect electricity bill can be frustrating. If you
          believe your MEPCO bill contains errors such as excessive units,
          incorrect meter readings, duplicate charges, or unexpected surcharges,
          you can request a bill correction through official MEPCO channels.
        </p>
      </header>

      <hr className="my-8 border-slate-200" />

      {/* Main Content Sections */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950 mb-4">
            Common MEPCO Billing Problems
          </h2>
          <ul className="list-disc pl-6 space-y-2.5 text-slate-700">
            <li>Incorrect meter reading</li>
            <li>Unexpected increase in units consumed</li>
            <li>Duplicate billing charges</li>
            <li>Wrong tariff category (e.g., Commercial instead of Residential)</li>
            <li>Incorrect taxes or surcharges</li>
            <li>Billing data entry mistakes</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-950 mb-4">
            How to Request a Bill Correction
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-slate-700">
            <li>Review your latest electricity bill carefully.</li>
            <li>Compare the bill with previous months to find spikes.</li>
            <li>Check your current physical meter reading against the bill.</li>
            <li>Gather all necessary supporting documents.</li>
            <li>Visit the nearest MEPCO subdivision office.</li>
            <li>Submit a written bill correction request to the Customer Services desk.</li>
            <li>Request an official complaint or tracking number for follow-ups.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-950 mb-4">
            Documents Required
          </h2>
          <ul className="list-disc pl-6 space-y-2.5 text-slate-700">
            <li>Copy of the disputed electricity bill</li>
            <li>CNIC copy of the applicant/owner</li>
            <li>Reference number (found on the top-left of your bill)</li>
            <li>Customer ID</li>
            <li>Clear photo of the current meter reading (highly recommended)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-950 mb-4">
            Before Visiting the MEPCO Office
          </h2>
          <ul className="list-disc pl-6 space-y-2.5 text-slate-700">
            <li>Take a clear meter photo with date/time visibility.</li>
            <li>Keep physical copies of previous bills handy.</li>
            <li>Record any unusual meter activity or blinking codes.</li>
            <li>Write down your complaint details clearly in advance.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-950 mb-4">
            How Long Does Correction Take?
          </h2>
          <p className="leading-relaxed text-slate-700">
            Processing times vary depending on the nature of the billing error, 
            verification requirements, and local office workload. Simple data entry 
            errors can often be resolved on the spot, while complex disputes involving 
            physical meter inspections may require an official review period.
          </p>
        </div>
      </section>

      {/* Info Callout Box */}
      <footer className="bg-amber-50/80 border border-amber-200 text-amber-900 rounded-xl p-5 mt-10 shadow-sm backdrop-blur-sm">
        <div className="flex gap-3">
          <span className="text-amber-600 font-bold" aria-hidden="true">⚠️</span>
          <div>
            <strong className="font-semibold text-amber-950 block sm:inline">
              Important Notice:
            </strong>{" "}
            Always keep copies of submitted applications, complaint numbers,
            supporting documents, and any communication related to your bill
            correction request. Do not hand over original bills without getting a receipt.
          </div>
        </div>
      </footer>
    </main>
  );
}
