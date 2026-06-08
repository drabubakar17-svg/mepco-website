"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// ═══════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════
function formatPKR(value: number): string {
  return new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 0,
  }).format(value);
}

// Fix 5: Better negative number formatting
function formatProfit(value: number): string {
  if (value >= 0) {
    return `Rs. ${formatPKR(value)}`;
  }
  return `(Rs. ${formatPKR(Math.abs(value))})`;
}

// ═══════════════════════════════════════════════════
// CALCULATOR LOGIC
// ═══════════════════════════════════════════════════
function calculateSolarRoi(cost: number, kw: number, bill: number) {
  if (cost <= 0 || kw <= 0 || bill <= 0) {
    return {
      monthlyUnits: 0,
      monthlySavings: 0,
      annualSavings: 0,
      years: 0,
      months: 0,
      co2Saved: 0,
      treesEquivalent: 0,
      twentyFiveYearSavings: 0,
      twentyFiveYearProfit: 0,
      roiPercent: 0,
      paybackPossible: false,
      isValid: false,
    };
  }

  const unitsPerKwPerMonth = 125;
  const importRate = 50;
  const exportRate = 22;

  const monthlyUnits = kw * unitsPerKwPerMonth;
  const selfUseSavings = monthlyUnits * 0.8 * importRate;
  const exportSavings = monthlyUnits * 0.2 * exportRate;
  const monthlySavings = Math.min(bill, selfUseSavings + exportSavings);
  const annualSavings = monthlySavings * 12;

  // Fix 2: paybackPossible check
  const totalMonths =
    annualSavings > 0 ? Math.ceil((cost / annualSavings) * 12) : 0;
  const paybackPossible = annualSavings > 0;

  const co2Saved = Math.round(monthlyUnits * 0.4 * 12);
  const treesEquivalent = Math.round(co2Saved / 21);
  const twentyFiveYearSavings = annualSavings * 25;
  const twentyFiveYearProfit = twentyFiveYearSavings - cost;
  const roiPercent =
    cost > 0
      ? Math.round(((twentyFiveYearSavings - cost) / cost) * 100)
      : 0;

  return {
    monthlyUnits: Math.round(monthlyUnits),
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavings),
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    co2Saved,
    treesEquivalent,
    twentyFiveYearSavings: Math.round(twentyFiveYearSavings),
    twentyFiveYearProfit: Math.round(twentyFiveYearProfit),
    roiPercent,
    paybackPossible,
    isValid: true,
  };
}

// ═══════════════════════════════════════════════════
// PAYBACK RATING — Fix 1: moved to pure function
// ═══════════════════════════════════════════════════
function getPaybackRating(years: number, paybackPossible: boolean) {
  if (!paybackPossible) {
    return {
      label: "No Payback",
      color: "text-slate-600",
      bg: "bg-slate-100",
    };
  }
  if (years < 4) {
    return {
      label: "Excellent ROI",
      color: "text-emerald-700",
      bg: "bg-emerald-100",
    };
  }
  if (years < 7) {
    return {
      label: "Good ROI",
      color: "text-blue-700",
      bg: "bg-blue-100",
    };
  }
  if (years < 10) {
    return {
      label: "Average ROI",
      color: "text-yellow-700",
      bg: "bg-yellow-100",
    };
  }
  return {
    label: "Long Payback",
    color: "text-red-700",
    bg: "bg-red-100",
  };
}

// ═══════════════════════════════════════════════════
// PRESET PACKAGES
// ═══════════════════════════════════════════════════
const PRESETS = [
  {
    label: "3kW — Small Home",
    cost: 600000,
    kw: 3,
    bill: 12000,
    desc: "1-2 AC, small family",
    tag: "Budget",
    tagColor: "bg-blue-100 text-blue-800",
  },
  {
    label: "5kW — Medium Home",
    cost: 950000,
    kw: 5,
    bill: 25000,
    desc: "2-3 AC, average family",
    tag: "Most Popular",
    tagColor: "bg-emerald-100 text-emerald-800",
  },
  {
    label: "10kW — Large Home",
    cost: 1800000,
    kw: 10,
    bill: 55000,
    desc: "4+ AC, large household",
    tag: "Best ROI",
    tagColor: "bg-purple-100 text-purple-800",
  },
  {
    label: "15kW — Commercial",
    cost: 2600000,
    kw: 15,
    bill: 90000,
    desc: "Office or small business",
    tag: "Commercial",
    tagColor: "bg-orange-100 text-orange-800",
  },
];

// ═══════════════════════════════════════════════════
// RESULT CARD — Fix 4: opacity-70 replaced with explicit color
// ═══════════════════════════════════════════════════
function ResultCard({
  label,
  value,
  sub,
  bg,
  labelColor,
  valueColor,
  subColor = "text-slate-500",
}: {
  label: string;
  value: string;
  sub?: string;
  bg: string;
  labelColor: string;
  valueColor: string;
  subColor?: string;
}) {
  return (
    <div className={`rounded-2xl p-5 ${bg}`}>
      <p className={`text-sm font-bold ${labelColor}`}>{label}</p>
      <p className={`mt-2 text-2xl font-black md:text-3xl ${valueColor}`}>
        {value}
      </p>
      {sub && (
        <p className={`mt-1 text-xs ${subColor}`}>{sub}</p>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════
// MAIN CLIENT COMPONENT
// ═══════════════════════════════════════════════════
export default function SolarRoiClient() {
  const [cost, setCost] = useState(950000);
  const [kw, setKw] = useState(5);
  const [bill, setBill] = useState(25000);
  const [activePreset, setActivePreset] = useState<number>(1);

  const result = useMemo(
    () => calculateSolarRoi(cost, kw, bill),
    [cost, kw, bill],
  );

  // Fix 1: paybackRating computed from result values
  const paybackRating = useMemo(
    () => getPaybackRating(result.years, result.paybackPossible),
    [result.years, result.paybackPossible],
  );

  function applyPreset(index: number) {
    const p = PRESETS[index];
    setCost(p.cost);
    setKw(p.kw);
    setBill(p.bill);
    setActivePreset(index);
  }

  // Fix 3: input validation helpers
  const hasInvalidInputs = cost <= 0 || kw <= 0 || bill <= 0;

  return (
    <div className="space-y-6">
      {/* ══════════════════════════
          PRESET BUTTONS
      ══════════════════════════ */}
      <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl md:p-8">
        <h2 className="text-xl font-black text-slate-900">
          Quick Select — Common Solar Packages
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Ek package select karein ya neeche apni values enter karein
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PRESETS.map((preset, i) => (
            <button
              key={i}
              type="button"
              onClick={() => applyPreset(i)}
              className={`rounded-2xl border-2 p-4 text-left transition hover:-translate-y-1 ${
                activePreset === i
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-slate-100 bg-slate-50 hover:border-emerald-200"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-black text-slate-900">{preset.label}</p>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${preset.tagColor}`}
                >
                  {preset.tag}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{preset.desc}</p>
              <p className="mt-2 text-sm font-bold text-emerald-700">
                Rs. {formatPKR(preset.cost)}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════
          INPUT FORM
      ══════════════════════════ */}
      <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl md:p-8">
        <h2 className="text-xl font-black text-slate-900">
          <span aria-hidden="true">🧮</span> Apni Values Enter Karein
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* Installation Cost */}
          <div className="grid gap-2">
            <label htmlFor="solar-cost" className="font-bold text-slate-800">
              Installation Cost (PKR)
            </label>
            <input
              id="solar-cost"
              type="number"
              min={100000}
              max={10000000}
              step={50000}
              value={cost}
              onChange={(e) => {
                setActivePreset(-1);
                setCost(Math.max(0, Number(e.target.value)));
              }}
              className={`rounded-xl border p-4 text-lg font-bold transition focus:outline-none focus:ring-2 focus:ring-emerald-100 ${
                cost <= 0
                  ? "border-red-300 bg-red-50 focus:border-red-400"
                  : "border-slate-200 focus:border-emerald-400"
              }`}
            />
            {/* Fix 3: input feedback */}
            {cost <= 0 ? (
              <p className="text-xs text-red-500">
                Valid cost enter karein (min Rs. 1 lakh)
              </p>
            ) : (
              <p className="text-xs text-slate-400">
                Range: Rs. 1 lakh – 1 crore+
              </p>
            )}
          </div>

          {/* System Size */}
          <div className="grid gap-2">
            <label htmlFor="solar-kw" className="font-bold text-slate-800">
              System Size (kW)
            </label>
            <input
              id="solar-kw"
              type="number"
              min={1}
              max={100}
              step={0.5}
              value={kw}
              onChange={(e) => {
                setActivePreset(-1);
                setKw(Math.max(0.5, Number(e.target.value)));
              }}
              className={`rounded-xl border p-4 text-lg font-bold transition focus:outline-none focus:ring-2 focus:ring-emerald-100 ${
                kw <= 0
                  ? "border-red-300 bg-red-50 focus:border-red-400"
                  : "border-slate-200 focus:border-emerald-400"
              }`}
            />
            {kw <= 0 ? (
              <p className="text-xs text-red-500">
                Valid size enter karein (min 1 kW)
              </p>
            ) : (
              <p className="text-xs text-slate-400">
                Typical homes: 3kW – 15kW
              </p>
            )}
          </div>

          {/* Monthly Bill */}
          <div className="grid gap-2">
            <label
              htmlFor="monthly-bill"
              className="font-bold text-slate-800"
            >
              Monthly Electricity Bill (PKR)
            </label>
            <input
              id="monthly-bill"
              type="number"
              min={1000}
              max={500000}
              step={1000}
              value={bill}
              onChange={(e) => {
                setActivePreset(-1);
                setBill(Math.max(0, Number(e.target.value)));
              }}
              className={`rounded-xl border p-4 text-lg font-bold transition focus:outline-none focus:ring-2 focus:ring-emerald-100 ${
                bill <= 0
                  ? "border-red-300 bg-red-50 focus:border-red-400"
                  : "border-slate-200 focus:border-emerald-400"
              }`}
            />
            {bill <= 0 ? (
              <p className="text-xs text-red-500">
                Valid bill amount enter karein
              </p>
            ) : (
              <p className="text-xs text-slate-400">
                Apna latest MEPCO bill amount
              </p>
            )}
          </div>
        </div>

        {/* Assumptions */}
        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Calculation Assumptions
          </p>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-600">
            <span>• 125 units/kW/month generation</span>
            <span>• 80% self-use @ Rs. 50/unit import rate</span>
            <span>• 20% export @ Rs. 22/unit net metering offset</span>
            <span>• On-grid system (no battery cost included)</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════
          RESULTS
      ══════════════════════════ */}
      {hasInvalidInputs ? (
        // Fix 3: Better empty state with guidance
        <div className="rounded-[2rem] border-2 border-dashed border-slate-200 bg-white p-10 text-center">
          <p className="text-xl font-black text-slate-400">
            <span aria-hidden="true">☀️</span> Upar apni values enter karein
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Installation cost, system size aur monthly bill fill karein —
            results foran calculate honge
          </p>
        </div>
      ) : (
        <div className="rounded-[2rem] border-2 border-emerald-200 bg-white p-6 shadow-xl md:p-8">
          {/* Result Header + Rating */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-black text-slate-900">
              <span aria-hidden="true">📊</span> Your Solar ROI Results
            </h2>
            <span
              className={`rounded-full px-4 py-2 text-sm font-black ${paybackRating.bg} ${paybackRating.color}`}
            >
              {paybackRating.label}
            </span>
          </div>

          {/* 4 Main Result Cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ResultCard
              label="Monthly Generation"
              value={`${result.monthlyUnits} Units`}
              sub={`${result.monthlyUnits * 12} units/year`}
              bg="bg-emerald-50"
              labelColor="text-emerald-700"
              valueColor="text-emerald-900"
              subColor="text-emerald-600"
            />
            <ResultCard
              label="Monthly Savings"
              value={`Rs. ${formatPKR(result.monthlySavings)}`}
              sub="Estimated bill reduction"
              bg="bg-blue-50"
              labelColor="text-blue-700"
              valueColor="text-blue-900"
              subColor="text-blue-600"
            />
            <ResultCard
              label="Annual Savings"
              value={`Rs. ${formatPKR(result.annualSavings)}`}
              sub="Per year total savings"
              bg="bg-yellow-50"
              labelColor="text-yellow-700"
              valueColor="text-yellow-900"
              subColor="text-yellow-600"
            />
            <ResultCard
              label="Payback Period"
              // Fix 2: paybackPossible check for display
              value={
                result.paybackPossible
                  ? `${result.years}y ${result.months}m`
                  : "N/A"
              }
              sub={
                result.paybackPossible
                  ? "After this = pure profit"
                  : "Increase bill or reduce cost"
              }
              bg="bg-slate-900"
              labelColor="text-slate-300"
              valueColor="text-white"
              subColor="text-slate-400"
            />
          </div>

          {/* Environmental Impact */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-green-50 p-5">
              <p className="text-sm font-bold text-green-700">
                <span aria-hidden="true">🌱</span> Annual CO₂ Saved
              </p>
              <p className="mt-2 text-2xl font-black text-green-900">
                {result.co2Saved} kg/year
              </p>
              <p className="mt-1 text-xs text-green-600">
                Carbon footprint reduction
              </p>
            </div>
            <div className="rounded-2xl bg-green-50 p-5">
              <p className="text-sm font-bold text-green-700">
                <span aria-hidden="true">🌳</span> Trees Equivalent
              </p>
              <p className="mt-2 text-2xl font-black text-green-900">
                {result.treesEquivalent} Trees/Year
              </p>
              <p className="mt-1 text-xs text-green-600">
                Annual carbon offset equivalent
              </p>
            </div>
          </div>

          {/* 25-Year Projection */}
          <div className="mt-5 rounded-2xl bg-emerald-900 p-5 text-white">
            <h3 className="font-black">
              <span aria-hidden="true">🚀</span> 25-Year Solar Projection
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-emerald-700 p-4 text-center">
                <p className="text-xs text-emerald-300">Total Savings</p>
                <p className="mt-1 text-xl font-black">
                  Rs. {formatPKR(result.twentyFiveYearSavings)}
                </p>
              </div>

              <div className="rounded-xl bg-emerald-700 p-4 text-center">
                <p className="text-xs text-emerald-300">Net Profit</p>
                {/* Fix 2 + 5: negative profit with better format */}
                <p
                  className={`mt-1 text-xl font-black ${
                    result.twentyFiveYearProfit < 0
                      ? "text-red-300"
                      : "text-white"
                  }`}
                >
                  {formatProfit(result.twentyFiveYearProfit)}
                </p>
                {result.twentyFiveYearProfit < 0 && (
                  <p className="mt-1 text-xs text-red-300">
                    Payback hone ke baad profit start hoga
                  </p>
                )}
              </div>

              <div className="rounded-xl bg-emerald-700 p-4 text-center">
                <p className="text-xs text-emerald-300">25-Year ROI</p>
                <p
                  className={`mt-1 text-xl font-black ${
                    result.roiPercent < 0 ? "text-red-300" : "text-white"
                  }`}
                >
                  {result.roiPercent}%
                </p>
                {result.roiPercent < 0 && (
                  <p className="mt-1 text-xs text-red-300">
                    25 saal mein loss — system cost zyada hai
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/mepco-net-metering-guide"
              className="rounded-xl bg-emerald-700 px-5 py-3 font-bold text-white transition hover:bg-emerald-800"
            >
              Net Metering Guide →
            </Link>
            <Link
              href="/mepco-solar-savings-calculator"
              className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 font-bold text-emerald-800 transition hover:bg-emerald-100"
            >
              Solar Savings Calculator →
            </Link>
            <Link
              href="/mepco-bill-calculator"
              className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 font-bold text-slate-700 transition hover:bg-slate-100"
            >
              MEPCO Bill Calculator →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
