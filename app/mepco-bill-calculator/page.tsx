import type { Metadata } from "next";
import MepcoBillCalculatorClient from "../../components/MepcoBillCalculatorClient";

export const metadata: Metadata = {
  title: "MEPCO Bill Calculator 2026 | Full Tax & Charges Breakdown",
  description:
    "Calculate your estimated MEPCO electricity bill with units, fixed charges, FPA, QTA, FC surcharge, electricity duty, GST, PTV fee, and total payable amount.",
};

export default function MepcoBillCalculatorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <div className="mx-auto max-w-7xl px-4 py-12">
        
        {/* Breadcrumb Navigation */}
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-green-700">
          MEPCO Tools &gt; Bill Calculator
        </p>

        {/* Hero Section */}
        <header className="mb-10 max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-950">
            MEPCO Bill Calculator 2026
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Estimate your monthly Multan Electric Power Company (MEPCO) residential bill. 
            Input your consumed units below to see a comprehensive, itemized breakdown including 
            base tariffs, fuel adjustments, and government taxes.
          </p>
        </header>

        {/* The Core Calculator Component */}
        <div className="mb-16">
          <MepcoBillCalculatorClient />
        </div>

        {/* Explanatory Educational Documentation Section */}
        <section className="mt-16 border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Understanding Your MEPCO Bill Surcharges
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            WAPDA electricity bills include several regulatory surcharges and government levies. 
            Here is what each item on your calculated estimate represents:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                Protected vs Unprotected Tiers
              </h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Consumers consuming under 200 units consistently for 6 consecutive months are classified 
                as <strong>Protected</strong> and enjoy subsidized rates. Exceeding 200 units permanently 
                shifts your account into much higher <strong>Unprotected</strong> slabs.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                Fuel Price Adjustment (FPA)
              </h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                FPA is calculated monthly by NEPRA based on differences between actual oil/gas generation 
                costs and reference baseline values. It fluctuates dynamically month to month.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                Quarterly Adjustment (QTA)
              </h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Determined once every three months to adjust for overall capacity charges, power transmission 
                losses, and changes in regional operational costs across power distribution companies.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                Financing Cost (FC) Surcharge
              </h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                A fixed fee per unit applied across distribution networks to handle the financial circular 
                debt and debt servicing of public sector power generation entities.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                Electricity Duty & GST
              </h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Electricity Duty is a provincial tax calculated strictly as a percentage of your base energy cost. 
                General Sales Tax (GST) is a standard federal collection tax computed on the accumulated subtotal.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                Fixed Charges & PTV Fee
              </h3>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Fixed commercial service charges applied to sanctioned load thresholds alongside a flat 
                monthly fee dedicated strictly toward Pakistan Television public broadcasting maintenance.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}