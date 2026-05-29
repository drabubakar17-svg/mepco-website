import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEPCO Bill Calculator 2026",
  description:
    "Calculate your estimated MEPCO electricity bill with detailed charges, taxes, and bill breakdown.",
};

export default function MepcoBillCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">
          MEPCO Bill Calculator 2026
        </h1>

        <p className="text-slate-600 mb-8">
          Calculate estimated electricity bill with complete breakdown.
        </p>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-lg font-semibold">
            Calculator Coming In Next Step
          </p>
        </div>
      </div>
    </main>
  );
}