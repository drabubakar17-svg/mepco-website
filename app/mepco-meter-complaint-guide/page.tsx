import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEPCO Meter Complaint Guide 2026 | Wrong Reading, Slow/Fast Meter",
  description:
    "Learn how to file a MEPCO meter complaint for wrong reading, fast meter, slow meter, defective meter, and overbilling issues.",
};

export default function MepcoMeterComplaintGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-slate-800">
      <h1 className="text-4xl font-bold tracking-tight mb-6">
        MEPCO Meter Complaint Guide 2026
      </h1>

      <p className="text-lg leading-relaxed mb-6">
        If your MEPCO electricity bill is unusually high or you suspect that
        your electricity meter is showing incorrect readings, you can submit a
        meter complaint through MEPCO customer services.
      </p>

      <hr className="my-8 border-slate-200" />

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Common MEPCO Meter Problems
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Wrong meter reading</li>
        <li>Fast running electricity meter</li>
        <li>Slow electricity meter</li>
        <li>Defective or damaged meter</li>
        <li>Meter display not working</li>
        <li>Overbilling due to incorrect reading</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        How to File a MEPCO Meter Complaint
      </h2>

      <ol className="list-decimal pl-6 space-y-3">
        <li>Keep a copy of your latest MEPCO bill.</li>
        <li>Note your reference number and customer ID.</li>
        <li>Visit your nearest MEPCO subdivision office.</li>
        <li>Submit a written meter inspection request.</li>
        <li>MEPCO staff will inspect or test the meter.</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Documents You May Need
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Copy of electricity bill</li>
        <li>CNIC copy</li>
        <li>Meter number</li>
        <li>Reference number</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Tips Before Filing a Complaint
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Take a clear photo of the current meter reading.</li>
        <li>Compare recent bills for usage spikes.</li>
        <li>Record unusual meter behavior.</li>
        <li>Keep copies of all submitted applications.</li>
      </ul>

      <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg p-5 mt-10 shadow-sm">
        <strong className="font-semibold text-emerald-800">Important:</strong> Always use official MEPCO customer support
        channels when filing a complaint regarding meter readings or billing
        issues.
      </div>
    </main>
  );
}
