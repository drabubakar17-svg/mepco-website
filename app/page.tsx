"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [refNumber, setRefNumber] = useState("");
  const [units, setUnits] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [siteLoading, setSiteLoading] = useState(true);
  const [checkingBill, setCheckingBill] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const savedRef = localStorage.getItem("mepco_reference_number");
    if (savedRef) setRefNumber(savedRef);

    const timer = setTimeout(() => setSiteLoading(false), 1200);
    const clock = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(clock);
    };
  }, []);

  const cleanRef = useMemo(() => refNumber.replace(/\D/g, ""), [refNumber]);

  const estimatedBill = useMemo(() => {
    const u = Number(units || 0);

    const energy =
      u <= 100 ? u * 30 :
      u <= 200 ? u * 38 :
      u <= 300 ? u * 45 :
      u * 55;

    const fpa = u * 3.45;
    const fixedCharges = u > 0 ? 250 : 0;
    const tax = (energy + fpa + fixedCharges) * 0.18;

    return {
      energy: Math.round(energy),
      fpa: Math.round(fpa),
      fixedCharges: Math.round(fixedCharges),
      tax: Math.round(tax),
      total: Math.round(energy + fpa + fixedCharges + tax),
    };
  }, [units]);

  const checkBill = () => {
    if (cleanRef.length !== 14) {
      alert("Please enter a valid 14-digit reference number");
      return;
    }

    setCheckingBill(true);
    localStorage.setItem("mepco_reference_number", cleanRef);
    window.open(`https://bill.pitc.com.pk/mepcobill?refno=${cleanRef}`, "_blank");

    setTimeout(() => setCheckingBill(false), 1500);
  };

  const cities = [
    { name: "Multan", slug: "/multan-bill-check" },
    { name: "Khanewal", slug: "/khanewal-bill-check" },
    { name: "Bahawalpur", slug: "/bahawalpur-bill-check" },
    { name: "Vehari", slug: "/vehari-bill-check" },
    { name: "Lodhran", slug: "/lodhran-bill-check" },
    { name: "Sahiwal", slug: "/sahiwal-bill-check" },
    { name: "Rahim Yar Khan", slug: "/rahim-yar-khan-bill-check" },
    { name: "Muzaffargarh", slug: "/muzaffargarh-bill-check" },
    { name: "Dera Ghazi Khan", slug: "/dera-ghazi-khan-bill-check" },
    { name: "Bahawalnagar", slug: "/bahawalnagar-bill-check" },
    { name: "Layyah", slug: "/layyah-bill-check" },
    { name: "Taunsa", slug: "/taunsa-bill-check" },
  ];

  const faqs = [
    ["How can I check MEPCO bill online?", "Enter your 14-digit reference number and click Check Bill."],
    ["Can I check MEPCO bill by CNIC?", "No, MEPCO bill normally requires a reference number or customer ID."],
    ["Where is the reference number written?", "It is printed on your previous electricity bill."],
    ["Can I print a duplicate bill?", "Yes, after opening your bill you can print or download it."],
    ["Is this official MEPCO website?", "This is an independent informational bill-checking website for user convenience."],
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MEPCO Online Bill Check Portal",
    url: "https://mepco-website-jx8g.vercel.app",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
  };

  if (siteLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#005b2e] text-white">
        <img
          src="/mepco-logo.png"
          alt="MEPCO"
          className="h-32 w-32 rounded-full border-4 border-white bg-white object-cover shadow-2xl animate-pulse"
        />
        <h1 className="mt-8 text-5xl font-black">MEPCO</h1>
        <p className="mt-3 text-green-100">Loading Consumer Portal...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen scroll-smooth pb-24 bg-[#f4f8f5] text-[#111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      <div className="bg-[#00311a] text-white border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs md:text-sm">
          <div className="font-semibold text-green-100">
            🇵🇰 Consumer Information Portal
          </div>
          <div className="flex items-center gap-5 text-green-100">
            <p className="hidden sm:block">MEPCO Helpline: 0800-63726</p>
            <p>🕒 {currentTime}</p>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#005b2e]/90 text-white shadow-md backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/mepco-logo.png"
              alt="MEPCO Logo"
              className="h-14 w-14 rounded-full border-2 border-white bg-white object-cover"
            />
            <div>
              <h1 className="text-2xl font-black leading-tight">MEPCO</h1>
              <p className="text-xs font-semibold text-green-100">
                Multan Electric Power Company
              </p>
            </div>
          </div>

          <nav className="hidden gap-7 text-sm font-bold md:flex">
            <a href="#bill">Check Bill</a>
            <a href="#cities">Regions</a>
            <a href="#calculator">Calculator</a>
            <a href="#faq">FAQs</a>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#005b2e] px-5 py-4 text-white">
            <div className="flex flex-col gap-4 font-bold">
              <a href="#bill" onClick={() => setMenuOpen(false)}>Check Bill</a>
              <a href="#cities" onClick={() => setMenuOpen(false)}>Regions</a>
              <a href="#calculator" onClick={() => setMenuOpen(false)}>Calculator</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef8f1] to-[#dcefe5] py-12 md:py-16">
        <img
          src="/mepco-logo.png"
          alt="MEPCO Watermark"
          className="absolute left-1/2 top-1/2 w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none select-none"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-1.5 text-xs font-black text-[#005b2e]">
              Online Duplicate Bill Checker
            </div>

            <h2 className="text-4xl font-black leading-tight text-[#004d27] md:text-6xl">
              MEPCO
              <span className="block text-3xl text-gray-800 md:text-4xl mt-1">
                Online Bill Check
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
              Check your latest MEPCO electricity bill online using your 14-digit reference number.
              Fast, simple, secure, and mobile-friendly.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="rounded-2xl bg-white px-5 py-2.5 shadow-sm border border-green-100">
                <p className="text-xs font-bold text-gray-400">Regions Active</p>
                <h3 className="text-lg font-black text-[#005b2e]">30+</h3>
              </div>
              <div className="rounded-2xl bg-white px-5 py-2.5 shadow-sm border border-green-100">
                <p className="text-xs font-bold text-gray-400">Status</p>
                <h3 className="text-lg font-black text-green-600">● Live</h3>
              </div>
              <div className="rounded-2xl bg-white px-5 py-2.5 shadow-sm border border-green-100">
                <p className="text-xs font-bold text-gray-400">Utility</p>
                <h3 className="text-lg font-black text-[#005b2e]">Free</h3>
              </div>
            </div>
          </div>

          <div id="bill" className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl">
            <div className="bg-[#005b2e] px-6 py-5 text-center text-white">
              <h3 className="text-xl font-black">Check Your MEPCO Bill</h3>
              <p className="text-xs text-green-100 mt-1">Enter 14-Digit Reference Number</p>
            </div>

            <div className="p-6 md:p-8">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Reference Number
              </label>

              <input
                autoFocus
                value={refNumber}
                onChange={(e) =>
                  setRefNumber(e.target.value.replace(/\D/g, "").slice(0, 14))
                }
                placeholder="e.g., 05141130522400"
                maxLength={14}
                onKeyDown={(e) => e.key === "Enter" && checkBill()}
                className={`h-14 w-full rounded-xl border-2 px-4 text-lg outline-none transition ${
                  refNumber.length === 14
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 focus:border-[#005b2e]"
                }`}
              />

              {refNumber.length === 14 && (
                <p className="mt-2.5 text-center text-xs font-bold text-green-700">
                  ✅ Reference number ready and saved locally.
                </p>
              )}

              <button
                onClick={checkBill}
                className="mt-5 h-14 w-full rounded-xl bg-[#007a3d] text-lg font-black text-white shadow-md hover:bg-[#004d27]"
              >
                {checkingBill ? "Fetching Server Records..." : "Check Bill"}
              </button>

              <button
                onClick={() => {
                  localStorage.removeItem("mepco_reference_number");
                  setRefNumber("");
                  alert("Saved reference number cleared.");
                }}
                className="mt-3 block mx-auto text-xs font-bold text-gray-400 hover:text-red-600"
              >
                Clear Saved Reference Number
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="cities" className="bg-white py-12 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center text-3xl font-black text-[#004d27]">
            Cities Covered by MEPCO
          </h2>
          <p className="text-center text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            Select your district to check regional MEPCO bill information.
          </p>

          <div className="mt-8 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {cities.map((city) => (
              <a
                key={city.name}
                href={city.slug}
                className="rounded-xl border border-gray-100 bg-[#f4f8f5] p-4 text-center font-bold text-sm text-gray-700 hover:bg-green-600 hover:text-white hover:shadow-md"
              >
                {city.name} Bill Check
              </a>
            ))}

            <a
              href="/mepco-bill-calculator"
              className="col-span-2 sm:col-span-3 md:col-span-4 rounded-xl border-2 border-dashed border-[#005b2e] bg-white p-4 text-center font-black text-sm text-[#005b2e] hover:bg-[#005b2e] hover:text-white"
            >
              📊 Open Advanced MEPCO Bill Calculator →
            </a>
          </div>
        </div>
      </section>

      <section id="calculator" className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10 shadow-sm">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-black text-[#004d27]">
              MEPCO Bill Calculator V2
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Estimate your electricity bill with energy charges, FPA, fixed charges and GST.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 items-center">
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Enter Total Units Consumed
              </label>
              <input
                type="number"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                placeholder="Example: 250"
                className="h-14 w-full rounded-xl border-2 border-gray-200 px-4 text-lg outline-none focus:border-[#005b2e]"
              />
            </div>

            <div className="rounded-2xl bg-[#f4f8f5] p-6 border border-green-100">
              <h3 className="font-black text-[#004d27] mb-4">
                Estimated Invoice Breakdown
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Energy Charges</span>
                  <span className="font-bold">Rs. {estimatedBill.energy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Fuel Price Adjustment</span>
                  <span className="font-bold">Rs. {estimatedBill.fpa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Fixed Charges</span>
                  <span className="font-bold">Rs. {estimatedBill.fixedCharges}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">GST 18%</span>
                  <span className="font-bold">Rs. {estimatedBill.tax}</span>
                </div>
                <div className="flex justify-between border-t pt-3 text-base">
                  <span className="font-black text-[#004d27]">Total</span>
                  <span className="font-black text-[#004d27]">Rs. {estimatedBill.total}</span>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-gray-500">
                This is an estimate. Official bill may include QTA, arrears,
                PTV fee, late surcharge and other adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#eef8f1] py-12">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-center text-3xl font-black text-[#004d27]">
            FAQs About MEPCO Bill
          </h2>

          <div className="mt-8 space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="rounded-xl bg-white p-5 border border-green-50">
                <h3 className="font-black text-[#004d27]">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#00381d] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 text-sm">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-black">MEPCO Information Portal</h3>
              <p className="mt-3 text-xs leading-relaxed text-green-100/70">
                Independent utility information portal for MEPCO consumers.
              </p>
            </div>

            <div>
              <h4 className="font-bold">Utility Navigation</h4>
              <div className="mt-3 flex flex-col gap-2 text-xs text-green-100/80">
                <a href="#bill">Check Duplicate Bill</a>
                <a href="#calculator">Calculator</a>
                <a href="/mepco-reference-number-guide">Reference Number Guide</a>
                <a href="/mepco-customer-id-guide">Customer ID Guide</a>
                <a href="/mepco-peak-hours-guide">Peak Hours Guide</a>
                <a href="/mepco-taxes-explained">Taxes Explained</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold">Disclaimer</h4>
              <p className="mt-3 text-xs leading-relaxed text-green-100/60">
                This website is independent and not officially affiliated with
                MEPCO, PITC, or any government department.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-green-100/50">
            © 2026 MEPCO Bill Check. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}