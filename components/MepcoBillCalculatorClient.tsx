"use client";

import { useMemo, useState } from "react";

type BreakdownRow = {
  label: string;
  amount: number;
  note: string;
};

function formatPKR(value: number) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

// Advanced slab calculation reflecting realistic Pakistani structural logic
function calculateEnergyCharges(units: number, isProtected: boolean) {
  if (units <= 0) return 0;

  // --- PROTECTED CATEGORY ---
  if (isProtected && units <= 200) {
    if (units <= 50) return units * 13.48; // Baseline life-line tier
    if (units <= 100) return units * 17.50;
    return units * 22.00; 
  }

  // --- UNPROTECTED CATEGORY (Crossing 200 or explicitly toggled off) ---
  if (units <= 100) return units * 24.50;
  if (units <= 200) return (100 * 24.50) + ((units - 100) * 31.00);
  if (units <= 300) return (200 * 31.00) + ((units - 200) * 36.50); // Jump baseline mechanics
  if (units <= 400) return (300 * 36.50) + ((units - 300) * 42.00);
  if (units <= 500) return (400 * 42.00) + ((units - 400) * 46.00);
  if (units <= 700) return (500 * 46.00) + ((units - 500) * 52.00);
  
  // Above 700 units (Heavy user flat heavy rate layer)
  return units * 58.50;
}

export default function MepcoBillCalculatorClient() {
  const [units, setUnits] = useState<number>(250);
  const [isProtected, setIsProtected] = useState<boolean>(false);
  const [fixedCharge, setFixedCharge] = useState<number>(75);
  const [fpaRate, setFpaRate] = useState<number>(0);
  const [qtaRate, setQtaRate] = useState<number>(0);
  const [fcSurchargeRate, setFcSurchargeRate] = useState<number>(0.43);
  const [electricityDutyRate, setElectricityDutyRate] = useState<number>(1.5);
  const [gstRate, setGstRate] = useState<number>(18);
  const [ptvFee, setPtvFee] = useState<number>(35);

  // Auto-disable protection state if units exceed the valid legal ceiling
  const effectiveProtection = units > 200 ? false : isProtected;

  const result = useMemo(() => {
    const fpa = units * fpaRate;
    const qta = units * qtaRate;
    const fc = units * fcSurchargeRate;

    const energy = calculateEnergyCharges(units, effectiveProtection);
    const electricityDuty = energy * (electricityDutyRate / 100);

    const subtotalBeforeGst = energy + fixedCharge + fpa + qta + fc + electricityDuty;
    const gst = subtotalBeforeGst * (gstRate / 100);

    const total = subtotalBeforeGst + gst + ptvFee;

    const rows: BreakdownRow[] = [
      {
        label: `Energy Charges ${effectiveProtection ? "(Protected)" : "(Unprotected)"}`,
        amount: energy,
        note: "Calculated based on current tier schedules.",
      },
      {
        label: "Fixed Charges",
        amount: fixedCharge,
        note: "Monthly fixed service fee.",
      },
      {
        label: "Fuel Price Adjustment (FPA)",
        amount: fpa,
        note: "Variable adjustment based on generation fuel cost fluctuations.",
      },
      {
        label: "Quarterly Tariff Adjustment (QTA)",
        amount: qta,
        note: "Periodic structural adjustment across regional discos.",
      },
      {
        label: "FC Surcharge",
        amount: fc,
        note: "Financing Cost Surcharge applied per unit.",
      },
      {
        label: "Electricity Duty",
        amount: electricityDuty,
        note: "Provincial tax levy component.",
      },
      {
        label: "GST",
        amount: gst,
        note: "General Sales Tax determined by subtotal values.",
      },
      {
        label: "PTV Fee",
        amount: ptvFee,
        note: "Fixed state television network fee.",
      },
    ];

    return {
      unitValue: units,
      total,
      rows,
    };
  }, [
    units,
    effectiveProtection,
    fixedCharge,
    fpaRate,
    qtaRate,
    fcSurchargeRate,
    electricityDutyRate,
    gstRate,
    ptvFee,
  ]);

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_1.15fr] max-w-7xl mx-auto p-4">
      {/* Configuration Input Panel */}
      <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Enter Bill Details</h2>
        <p className="mt-2 text-sm text-slate-500">
          Tailor variables dynamically to mirror your exact physical utility receipt.
        </p>

        <div className="mt-6 grid gap-5">
          {/* Main Primary Unit Input */}
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Monthly Units Consumed</span>
            <input
              value={units || ""}
              onChange={(e) => setUnits(Math.max(0, Number(e.target.value)))}
              type="number"
              min="0"
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 text-lg font-medium outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />
          </label>

          {/* Protected Consumer Status Toggle */}
          <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
            <div>
              <span className="block text-sm font-semibold text-slate-800">Protected Status</span>
              <span className="text-xs text-slate-500">
                {units > 200 
                  ? "Disabled automatically (Exceeded 200 units maximum limit)" 
                  : "Maintained consistently low usage status for 6 months"}
              </span>
            </div>
            <input
              type="checkbox"
              checked={effectiveProtection}
              disabled={units > 200}
              onChange={(e) => setIsProtected(e.target.checked)}
              className="h-5 w-5 rounded border-slate-300 text-green-600 focus:ring-green-500 disabled:opacity-40"
            />
          </div>

          <hr className="border-slate-100" />

          {/* Advanced Rate Tweak Matrices */}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Fixed Charges</span>
              <input
                value={fixedCharge || ""}
                onChange={(e) => setFixedCharge(Number(e.target.value))}
                type="number"
                min="0"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-green-600"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">PTV Fee</span>
              <input
                value={ptvFee || ""}
                onChange={(e) => setPtvFee(Number(e.target.value))}
                type="number"
                min="0"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-green-600"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">FPA / Unit</span>
              <input
                value={fpaRate || ""}
                onChange={(e) => setFpaRate(Number(e.target.value))}
                type="number"
                step="0.01"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-green-600"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">QTA / Unit</span>
              <input
                value={qtaRate || ""}
                onChange={(e) => setQtaRate(Number(e.target.value))}
                type="number"
                step="0.01"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-green-600"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">FC Surcharge / Unit</span>
              <input
                value={fcSurchargeRate || ""}
                onChange={(e) => setFcSurchargeRate(Number(e.target.value))}
                type="number"
                step="0.01"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-green-600"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Electricity Duty %</span>
              <input
                value={electricityDutyRate || ""}
                onChange={(e) => setElectricityDutyRate(Number(e.target.value))}
                type="number"
                step="0.1"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-green-600"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">GST %</span>
              <input
                value={gstRate || ""}
                onChange={(e) => setGstRate(Number(e.target.value))}
                type="number"
                step="0.1"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 outline-none focus:border-green-600"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Output Presentation Grid */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-green-700">Estimated Result</p>
          <h2 className="mt-2 text-5xl font-black text-slate-900 tracking-tight">
            {formatPKR(result.total)}
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Based accurately on <span className="font-semibold text-slate-700">{result.unitValue} units</span>.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700 font-semibold">
                <tr>
                  <th className="p-3">Breakdown Description</th>
                  <th className="p-3 text-right">Calculation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {result.rows.map((row) => (
                  <tr key={row.label} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-3">
                      <div className="font-medium text-slate-900">{row.label}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{row.note}</div>
                    </td>
                    <td className="p-3 text-right font-semibold text-slate-900 whitespace-nowrap">
                      {formatPKR(row.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between rounded-xl bg-green-50 p-4 border border-green-100">
            <span className="text-lg font-bold text-slate-900">Total Payable Amount</span>
            <span className="text-2xl font-black text-green-700">{formatPKR(result.total)}</span>
          </div>

          <p className="mt-4 rounded-xl bg-amber-50/70 p-3.5 text-xs leading-relaxed text-amber-900 border border-amber-100/50">
            <strong>Disclaimer:</strong> Commercial computations can show deviations based on regional taxes, historical arrears adjustments, specific prompt payment discounts, or variations in peak/off-peak tracking equipment.
          </p>
        </div>
      </div>
    </section>
  );
}