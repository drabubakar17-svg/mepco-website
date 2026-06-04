"use client";

import { useMemo, useState } from "react";

// Multi-Language Translation Dictionary Mapping
const translations = {
  English: {
    title: "MEPCO solar savings calculator 2026",
    billLabel: "Monthly electricity bill",
    billSub: "(enter your current bill)",
    sizeLabel: "Solar system size",
    sizeSub: "(kW)",
    cityLabel: "City / sun hours",
    costLabel: "System cost estimate",
    costSub: "(Rs.)",
    genCard: "Monthly generation",
    saveCard: "Monthly saving",
    yearCard: "Yearly saving",
    payCard: "Payback period",
    est: "Estimated",
    approx: "Approx.",
    years: "Years",
    units: "units",
    genMonth: "Solar generation/month",
    selfUse: "Self-consumption (60%)",
    gridExp: "Grid export (40%)",
    netCredit: "Net metering credit (75% rate)",
    totalSave: "Total monthly saving",
    fiveYear: "5-year total saving",
    progressLabel: "Payback progress (max 10 years)",
    dir: "ltr",
  },
  Urdu: {
    title: "میپکو سولر سیونگ کیلکولیٹر 2026",
    billLabel: "ماہانہ بجلی کا بل",
    billSub: "(اپنا موجودہ بل درج کریں)",
    sizeLabel: "سولر سسٹم کا سائز",
    sizeSub: "(کلو واٹ)",
    cityLabel: "شہر / دھوپ کے گھنٹے",
    costLabel: "سسٹم کی متوقع لاگت",
    costSub: "(روپے)",
    genCard: "ماہانہ پیداوار",
    saveCard: "ماہانہ بچت",
    yearCard: "سالانہ بچت",
    payCard: "لاگت کی واپسی کا وقت",
    est: "متوقع",
    approx: "تقریباً",
    years: "سال",
    units: "یونٹس",
    genMonth: "ماہانہ سولر پیداوار",
    selfUse: "ذاتی استعمال (60%)",
    gridExp: "گریڈ ایکسپورٹ (40%)",
    netCredit: "نیٹ میٹرنگ کریڈٹ (75% ریٹ)",
    totalSave: "کل ماہانہ بچت",
    fiveYear: "5 سالہ کل بچت",
    progressLabel: "لاگت کی واپسی کی پیشرفت (زیادہ سے زیادہ 10 سال)",
    dir: "rtl",
  },
  "Roman Urdu": {
    title: "MEPCO Solar Savings Calculator 2026",
    billLabel: "Monthly electricity bill",
    billSub: "(apna current bill enter karein)",
    sizeLabel: "Solar system size",
    sizeSub: "(kW)",
    cityLabel: "City / sun hours",
    costLabel: "System cost estimate",
    costSub: "(Rs.)",
    genCard: "Monthly generation",
    saveCard: "Monthly saving",
    yearCard: "Yearly saving",
    payCard: "Payback period",
    est: "Estimated",
    approx: "Approx.",
    years: "Years",
    units: "units",
    genMonth: "Solar generation/month",
    selfUse: "Self-consumption (60%)",
    gridExp: "Grid export (40%)",
    netCredit: "Net metering credit (75% rate)",
    totalSave: "Total monthly saving",
    fiveYear: "5-year total saving",
    progressLabel: "Payback progress (max 10 years)",
    dir: "ltr",
  }
};

type LanguageKey = "English" | "Urdu" | "Roman Urdu";

export default function MepcoSolarSavingsCalculator() {
  const [bill, setBill] = useState<number>(25000);
  const [systemSize, setSystemSize] = useState<number>(5);
  const [systemCost, setSystemCost] = useState<number>(750000);
  const [city, setCity] = useState<string>("Multan");
  const [lang, setLang] = useState<LanguageKey>("English");

  const t = translations[lang];

  const sunHours: Record<string, number> = {
    Multan: 5.5,
    Khanewal: 5.4,
    Bahawalpur: 5.7,
    Vehari: 5.4,
    Sahiwal: 5.2,
    "Rahim Yar Khan": 5.8,
  };

  const result = useMemo(() => {
    // 0.85 global solar physical performance degradation multiplier
    const generation = systemSize * sunHours[city] * 30 * 0.85;
    const selfUse = generation * 0.6;
    const exportUnits = generation * 0.4;
    
    // Grid pricing valuation variables
    const netCredit = exportUnits * 42 * 0.75; 
    const selfSaving = selfUse * 55;
    const monthlySaving = Math.min(bill, selfSaving + netCredit);
    const yearlySaving = monthlySaving * 12;
    const payback = yearlySaving > 0 ? systemCost / yearlySaving : 0;
    const fiveYearSaving = yearlySaving * 5;

    return {
      generation: Math.round(generation),
      selfUse: Math.round(selfUse),
      exportUnits: Math.round(exportUnits),
      netCredit: Math.round(netCredit),
      monthlySaving: Math.round(monthlySaving),
      yearlySaving: Math.round(yearlySaving),
      payback: payback > 0 ? payback.toFixed(1) : "0.0",
      fiveYearSaving: Math.round(fiveYearSaving),
      progress: Math.min((payback / 10) * 100, 100),
    };
  }, [bill, systemSize, systemCost, city]);

  return (
    <main className="min-h-screen bg-[#111111] px-4 py-8 text-neutral-200 antialiased selection:bg-emerald-500/30">
      <section className="mx-auto max-w-3xl">
        
        {/* Language Selection Interface Tabs */}
        <div className="mb-6 flex gap-2">
          {(["English", "Urdu", "Roman Urdu"] as LanguageKey[]).map((item) => (
            <button
              key={item}
              onClick={() => setLang(item)}
              className={`rounded-xl border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                lang === item
                  ? "border-neutral-700 bg-neutral-800 text-white shadow-xl"
                  : "border-neutral-900 text-neutral-500 hover:border-neutral-800 hover:text-neutral-300"
              }`}
            >
              {item === "Urdu" ? "اردو" : item}
            </button>
          ))}
        </div>

        {/* Master Glassmorphic Workspace Container */}
        <div 
          className="rounded-2xl border border-neutral-800/80 bg-[#1e1e1e] p-6 shadow-2xl transition-all duration-300"
          style={{ direction: t.dir as "ltr" | "rtl" }}
        >
          {/* Component Branding Header Section */}
          <div className="mb-6 flex items-center gap-2 border-b border-neutral-800/40 pb-4">
            <span className="text-xl text-emerald-500">📟</span>
            <h1 className="text-base font-bold capitalize text-neutral-100 tracking-wide">
              {t.title}
            </h1>
          </div>

          {/* Interactive Form Controls Layout */}
          <div className="space-y-6">
            {/* Input Module 1: Current Bill Parameter */}
            <div>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="text-neutral-400">
                  {t.billLabel}{" "}
                  <span className="text-xs font-normal text-neutral-500">{t.billSub}</span>
                </span>
                <span className="font-bold text-neutral-100">Rs. {bill.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="150000"
                step="1000"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-lg bg-neutral-800 accent-emerald-500 focus:outline-none"
              />
            </div>

            {/* Input Module 2: System Size (kW) Parameter */}
            <div>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="text-neutral-400">
                  {t.sizeLabel}{" "}
                  <span className="text-xs font-normal text-neutral-500">{t.sizeSub}</span>
                </span>
                <span className="font-bold text-neutral-100">{systemSize} kW</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={systemSize}
                onChange={(e) => setSystemSize(Number(e.target.value))}
                className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-lg bg-neutral-800 accent-emerald-500 focus:outline-none"
              />
            </div>

            {/* Input Module 3: Regional Tracking Dropdown */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-neutral-400">
                {t.cityLabel}
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-neutral-800/80 bg-[#262626] p-3 text-sm font-medium text-neutral-200 focus:border-emerald-500/50 focus:outline-none transition-colors"
              >
                {Object.keys(sunHours).map((item) => (
                  <option key={item} value={item}>
                    {item} ({sunHours[item]} hrs/day)
                  </option>
                ))}
              </select>
            </div>

            {/* Input Module 4: Pricing/Cost Parameters */}
            <div>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="text-neutral-400">
                  {t.costLabel}{" "}
                  <span className="text-xs font-normal text-neutral-500">{t.costSub}</span>
                </span>
                <span className="font-bold text-neutral-100">Rs. {systemCost.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="200000"
                max="4000000"
                step="50000"
                value={systemCost}
                onChange={(e) => setSystemCost(Number(e.target.value))}
                className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-lg bg-neutral-800 accent-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Screenshot-Matched Quad Metrics Display Block Panel */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: t.genCard, value: `${result.generation}`, sub: "kWh/month", color: "text-emerald-400" },
              { label: t.saveCard, value: `Rs. ${result.monthlySaving.toLocaleString()}`, sub: t.est, color: "text-emerald-400" },
              { label: t.yearCard, value: `Rs. ${result.yearlySaving.toLocaleString()}`, sub: t.approx, color: "text-emerald-400" },
              { label: t.payCard, value: result.payback, sub: t.years, color: "text-amber-400" },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-neutral-800/60 bg-[#262626]/60 p-4 text-center"
              >
                <p className="mb-1 text-xs font-medium text-neutral-400">
                  {card.label}
                </p>
                <p className={`text-base font-bold tracking-tight ${card.color}`}>{card.value}</p>
                <p className="mt-0.5 text-[10px] text-neutral-500">{card.sub}</p>
              </div>
            ))}
          </div>

          <hr className="my-6 border-neutral-800/80" />

          {/* Deep Analytics Real-Time Technical Specification List (Fixed Violations) */}
          <div className="space-y-3 text-xs tracking-wide">
            <div className="flex justify-between text-neutral-400">
              <span>{t.genMonth}</span>
              <span className="font-semibold text-neutral-200">{result.generation} {t.units}</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>{t.selfUse}</span>
              <span className="font-semibold text-neutral-200">{result.selfUse} {t.units}</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>{t.gridExp}</span>
              <span className="font-semibold text-neutral-200">{result.exportUnits} {t.units}</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>{t.netCredit}</span>
              <span className="font-bold text-emerald-400">Rs. {result.netCredit.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-neutral-400 border-t border-neutral-800/60 pt-2.5">
              <span>{t.totalSave}</span>
              <span className="font-bold text-emerald-400">Rs. {result.monthlySaving.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-neutral-100 font-black text-sm pt-0.5">
              <span>{t.fiveYear}</span>
              <span className="font-bold text-emerald-400">Rs. {result.fiveYearSaving.toLocaleString()}</span>
            </div>
          </div>

          {/* Payback Horizontal Rendering Graph Timeline */}
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-xs font-medium text-neutral-500">
              <span>{t.progressLabel}</span>
              <span>{Math.round(result.progress)}%</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-900">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${result.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Local Informational SEO Block Guide Segment */}
        <div className="mt-6 rounded-2xl border border-neutral-800/40 bg-[#161a16] p-6">
          <h2 className="mb-3 text-sm font-extrabold uppercase tracking-widest text-emerald-400">
            Urdu + Roman Urdu Guide Hub
          </h2>
          <div className="space-y-3 text-xs font-medium leading-relaxed text-neutral-400">
            <p>
              اگر آپ کا میپکو بل زیادہ آ رہا ہے تو سولر سسٹم ماہانہ بجلی خرچ کم کرنے میں مدد دے سکتا ہے۔ اس کیلکولیٹر کے ذریعے آپ اپنے سولر پینلز کی متوقع بچت کا حساب لگا سکتے ہیں۔
            </p>
            <p className="border-t border-neutral-800/30 pt-3">
              Agar aap ka MEPCO bill zyada aa raha hai to solar system monthly bill kam karne mein madad kar sakta hai. Is calculator se aap solar payback values accurately configure kar sakte hain.
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}