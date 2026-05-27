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

  if (savedRef) {
    setRefNumber(savedRef);
  }

  const timer = setTimeout(() => {
    setSiteLoading(false);
  }, 1800);
const clock = setInterval(() => {
  setCurrentTime(new Date().toLocaleTimeString());
}, 1000);
 return () => {
  clearTimeout(timer);
  clearInterval(clock);
};
}, []);

const cleanRef = refNumber.replace(/\D/g, "");
  const estimatedBill = useMemo(() => {
    const u = Number(units || 0);
   const energy =
  u <= 100
    ? u * 30
    : u <= 200
    ? u * 38
    : u <= 300
    ? u * 45
    : u * 55;
    const tax = energy * 0.18;
    return {
      energy: Math.round(energy),
      tax: Math.round(tax),
      total: Math.round(energy + tax),
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

  setTimeout(() => {
    setCheckingBill(false);
  }, 1500);
};
  const cities = [
    "Multan", "Khanewal", "Bahawalpur", "Rahim Yar Khan",
    "Dera Ghazi Khan", "Vehari", "Sahiwal", "Muzaffargarh",
    "Lodhran", "Bahawalnagar", "Layyah", "Rajanpur",
  ];

  const services = [
    ["Duplicate Bill", "View, print, or download your latest MEPCO bill."],
    ["Bill Calculator", "Estimate your monthly bill using consumed units."],
    ["Peak Hours", "Know high usage hours and reduce your electricity cost."],
    ["Reference Guide", "Learn where your 14-digit reference number is written."],
    ["Cities Coverage", "MEPCO service areas across South Punjab."],
    ["Saving Tips", "Simple habits to reduce monthly electricity bill."],
  ];

  const faqs = [
    ["How can I check MEPCO bill online?", "Enter your 14-digit reference number and click Check Bill."],
    ["Can I check MEPCO bill by CNIC?", "No, MEPCO bill normally requires reference number or customer ID."],
    ["Where is reference number written?", "It is printed on your previous electricity bill."],
    ["Can I print duplicate bill?", "Yes, after opening your bill you can print or download it."],
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
if (siteLoading) {
  return (

    <div className="flex min-h-screen flex-col items-center justify-center bg-[#005b2e] text-white">

      <img
        src="/mepco-logo.png"
        alt="MEPCO"
        className="h-32 w-32 rounded-full border-4 border-white bg-white object-cover shadow-2xl animate-pulse"
      />

      <h1 className="mt-8 text-5xl font-black">
        MEPCO
      </h1>

      <p className="mt-3 text-green-100">
        Loading Consumer Portal...
      </p>

      <div className="mt-10 h-2 w-72 overflow-hidden rounded-full bg-white/20">

        <div className="h-full w-full animate-pulse bg-white"></div>

      </div>

    </div>
  );
}
  return (
    <main className="min-h-screen scroll-smooth pb-24 bg-[#f4f8f5] text-[#111] animate-[fadeIn_0.8s_ease]">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
<div className="bg-[#00311a] text-white border-b border-white/10">

  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs md:text-sm">

    <div className="flex items-center gap-2 font-semibold text-green-100">
      🇵🇰 Government Consumer Information Portal
    </div>

    <div className="flex items-center gap-5 text-green-100">
      <p>MEPCO Helpline: 0800-63726</p>
      <p>🕒 {currentTime}</p>
    </div>

  </div>

</div>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#005b2e]/80 text-white shadow-2xl backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-4">
            <img src="/mepco-logo.png" alt="MEPCO Logo" className="h-16 w-16 rounded-full border-4 border-white bg-white object-cover" />
            <div>
              <h1 className="text-3xl font-black tracking-wide">MEPCO</h1>
              <p className="text-xs font-semibold text-green-100">Multan Electric Power Company</p>
            </div>
          </div>

          <div className="hidden gap-7 text-sm font-bold md:flex">
  </div>

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl"
>
  ☰
</button>
            <nav className="hidden gap-7 text-sm font-bold md:flex">
  <a href="#bill" className="hover:text-green-200">Check Bill</a>
  <a href="#services" className="hover:text-green-200">Services</a>
  <a href="#calculator" className="hover:text-green-200">Calculator</a>
  <a href="#faq" className="hover:text-green-200">FAQs</a>
</nav>
         
        </div>
{/* MOBILE MENU */}

{menuOpen && (
  <div className="md:hidden border-t border-white/10 bg-[#005b2e] px-5 py-5 text-white">

    <div className="flex flex-col gap-5 font-bold">

      <a href="#bill">Check Bill</a>

      <a href="#services">Services</a>

      <a href="#calculator">Calculator</a>

      <a href="#faq">FAQs</a>

    </div>

  </div>
)}
      </header>
<div className="border-y border-yellow-200 bg-yellow-50">

  <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-3 text-sm font-semibold text-[#7a5a00]">

    <span className="text-lg">⚠️</span>

   <div className="overflow-hidden whitespace-nowrap">
  <div className="animate-pulse">
    Important Notice: Consumers are advised to pay electricity bills before due date to avoid surcharge. Use only official reference number while checking duplicate bills online.
  </div>
</div>

  </div>

</div>

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#eef8f1] to-[#dcefe5]">
{/* BACKGROUND WATERMARK LOGO */}

<img
  src="/mepco-logo.png"
  alt="MEPCO Watermark"
  className="absolute left-1/2 top-1/2 w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.10] pointer-events-none select-none"
 />

  <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-green-300/20 blur-3xl"></div>

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"></div>

  <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2">
          <div>

  <div className="mb-5 inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-black text-[#005b2e]">
    Online Duplicate Bill Checker
  </div>

  <div className="mt-5 flex flex-wrap items-center gap-4">

    <div className="rounded-full bg-white px-5 py-3 shadow-md border border-green-100">
      <p className="text-sm font-bold text-gray-500">
        Consumers Served
      </p>

      <h3 className="text-2xl font-black text-[#005b2e]">
        1.2M+
      </h3>
    </div>

    <div className="rounded-full bg-white px-5 py-3 shadow-md border border-green-100">
      <p className="text-sm font-bold text-gray-500">
        Bills Checked
      </p>

      <h3 className="text-2xl font-black text-[#005b2e]">
        8M+
      </h3>
    </div>

    <div className="rounded-full bg-white px-5 py-3 shadow-md border border-green-100">
      <p className="text-sm font-bold text-gray-500">
        Online Status
      </p>

      <h3 className="text-2xl font-black text-green-600">
        ● Live
      </h3>
    </div>

  </div>

            <h2 className="text-5xl font-black leading-tight text-[#8B0000] drop-shadow-[0_4px_20px_rgba(0,91,46,0.18)] md:text-7xl">
              MEPCO
              <span className="block text-4xl text-[#8B0000] md:text-5xl">
                Online Bill Check
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
              Check your latest MEPCO electricity bill online using your 14-digit reference number.
              Fast, simple, and mobile-friendly.
            </p>

            <div className="mt-9 grid max-w-xl grid-cols-3 gap-4 text-center">
              {["⚡ Fast", "🔒 Secure", "📱 Mobile"].map((item) => (
                <div key={item} className="rounded-2xl border border-green-100 bg-white p-5 font-black text-[#8B0000] shadow-md">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id="bill" className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-2xl">
            <div className="bg-[#006b35] px-8 py-6 text-center text-white">
              <h3 className="text-2xl font-black">Check Your MEPCO Bill</h3>
              <p className="mt-1 text-green-100">Enter 14 Digit Reference Number</p>
            </div>

            <div className="p-8">
              <label className="mb-3 block font-bold text-gray-700">Reference Number</label>

              <input
autoFocus
                value={refNumber}
                onChange={(e) =>
  setRefNumber(
    e.target.value.replace(/\D/g, "").slice(0, 14)
  )
}
                placeholder="Enter 14 Digit Reference No"
                maxLength={14}
onKeyDown={(e) => {
  if (e.key === "Enter") {
    checkBill();
  }
}}
                className={`h-16 w-full rounded-xl border-2 px-5 text-lg outline-none transition duration-300 ${
  refNumber.length === 14
    ? "border-green-500 bg-green-50 shadow-[0_0_25px_rgba(34,197,94,0.25)]"
    : "border-gray-200 bg-white focus:border-[#006b35]"
}`}
              />
{refNumber.length === 14 && (
  <p className="mt-3 text-center text-sm font-bold text-green-700">
    ✅ Reference number ready and saved for next visit
  </p>
)}
              <button onClick={checkBill} className="mt-6 h-16 w-full rounded-xl bg-[#007a3d] text-xl font-black text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-[#004d27] hover:shadow-2xl animate-pulse">
               {checkingBill ? "Checking..." : "Check Bill"}
              </button>

<button
  onClick={() => {
    localStorage.removeItem("mepco_reference_number");
    setRefNumber("");
    alert("Saved reference number removed");
  }}
  className="mt-3 h-12 w-full rounded-xl border border-green-200 bg-white text-sm font-bold text-[#005b2e] transition hover:bg-green-50"
>
  Clear Saved Reference Number
</button>
              <p className="mt-4 text-center text-sm text-gray-500">
  Reference number is available on your previous electricity bill.
</p>

<div className="mt-6 flex flex-wrap items-center justify-center gap-4">

  <div className="rounded-full border border-green-100 bg-[#f4f8f5] px-4 py-2 text-sm font-bold text-[#005b2e]">
    🔒 Secure Platform
  </div>

  <div className="rounded-full border border-green-100 bg-[#f4f8f5] px-4 py-2 text-sm font-bold text-[#005b2e]">
    ⚡ Fast Access
  </div>

  <div className="rounded-full border border-green-100 bg-[#f4f8f5] px-4 py-2 text-sm font-bold text-[#005b2e]">
    📄 Duplicate Bills
  </div>

  <div className="rounded-full border border-green-100 bg-[#f4f8f5] px-4 py-2 text-sm font-bold text-[#005b2e]">
    🇵🇰 Pakistan Users
  </div>

</div>
            
            </div>
          </div>
        </div>
      </section>
<section className="bg-[#004d27] py-4 text-white">

  <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 text-sm font-bold">

    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
      System Online
    </div>

    <div>
      ⚡ Bill Server Active
    </div>

    <div>
      🔒 Secure Connection
    </div>

    <div>
      📄 Duplicate Bills Available
    </div>

  </div>

</section>
<section className="mx-auto max-w-7xl px-5 py-10">

  <div className="grid gap-6 md:grid-cols-4">

    <div className="rounded-3xl bg-white p-8 shadow-lg border border-green-100 text-center">
      <h3 className="text-5xl font-black text-[#005b2e]">
        24/7
      </h3>

      <p className="mt-3 text-gray-600 font-semibold">
        Bill Access
      </p>
    </div>

   <div className="rounded-3xl border border-green-100 bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="text-5xl font-black text-[#005b2e]">
        12+
      </h3>

      <p className="mt-3 text-gray-600 font-semibold">
        Cities Covered
      </p>
    </div>

    <div className="rounded-3xl bg-white p-8 shadow-lg border border-green-100 text-center">
      <h3 className="text-5xl font-black text-[#005b2e]">
        Fast
      </h3>

      <p className="mt-3 text-gray-600 font-semibold">
        Bill Checking
      </p>
    </div>

    <div className="rounded-3xl bg-white p-8 shadow-lg border border-green-100 text-center">
      <h3 className="text-5xl font-black text-[#005b2e]">
        Secure
      </h3>

      <p className="mt-3 text-gray-600 font-semibold">
        Online Platform
      </p>
    </div>

  </div>

</section>
<section className="mx-auto max-w-7xl px-5 py-6">
  <div className="rounded-3xl border-2 border-dashed border-green-200 bg-white p-8 text-center shadow-sm">
    <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
      Advertisement
    </p>
    <p className="mt-2 text-gray-500">
      Google AdSense banner space
    </p>
  </div>
</section>
      <section id="services" className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-center text-4xl font-black text-[#8B0000]">Online MEPCO Services</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Useful electricity bill tools and information for MEPCO consumers.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
              <h3 className="text-2xl font-black text-[#005b2e]">{title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
          <h2 className="text-center text-4xl font-black text-[#005b2e]">How to Find Reference Number?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-gray-600">
            Your 14-digit reference number is printed on your previous MEPCO bill.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["📄", "Open Old Bill", "Take any previous MEPCO electricity bill."],
              ["🔎", "Find Ref No", "Look for 14-digit Reference No on the bill."],
              ["✅", "Enter Online", "Enter it above and click Check Bill."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl bg-[#f4f8f5] p-6 text-center">
                <p className="text-4xl">{icon}</p>
                <h3 className="mt-4 text-xl font-black text-[#005b2e]">{title}</h3>
                <p className="mt-2 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cities" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center text-4xl font-black text-[#005b2e]">Cities Covered by MEPCO</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {cities.map((city) => (
              <div key={city} className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 text-center font-black text-gray-800 shadow-sm">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-12">
          <div className="text-center">
            <h2 className="text-4xl font-black text-[#005b2e]">MEPCO Bill Calculator</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Estimate your monthly electricity bill by entering consumed units.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <label className="mb-3 block font-bold text-gray-700">Enter Units Consumed</label>
              <input
                type="number"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                placeholder="Example: 250"
                className="h-16 w-full rounded-2xl border-2 border-gray-200 px-5 text-xl outline-none focus:border-[#006b35]"
              />
            </div>

           <div className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-8 shadow-2xl transition duration-300 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,91,46,0.18)]">
              <h3 className="text-2xl font-black text-[#005b2e]">Estimated Charges</h3>

<div className="mt-6">

  <div className="flex items-center justify-between text-sm font-bold text-gray-500">
    <span>Low Usage</span>
    <span>High Usage</span>
  </div>

  <div className="mt-3 h-5 overflow-hidden rounded-full bg-gray-200">

    <div
      className="h-full rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 transition-all duration-500"
      style={{
        width: `${Math.min(Number(units || 0) / 5, 100)}%`,
      }}
    ></div>

  </div>

</div>
              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Electricity Charges</span>
                  <span className="text-xl font-black">Rs. {estimatedBill.energy}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Approx Taxes</span>
                  <span className="text-xl font-black">Rs. {estimatedBill.tax}</span>
                </div>

                <div className="flex items-center justify-between border-t pt-5">
                  <span className="text-2xl font-black text-[#005b2e]">Total</span>
                  <span className="text-3xl font-black text-[#005b2e]">Rs. {estimatedBill.total}</span>
                </div>

                <p className="text-sm text-gray-500">
                  This is only an estimate. Final bill may include official taxes, FPA, surcharges and adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-br from-[#005b2e] via-[#007a3d] to-[#00994d] p-10 text-white shadow-2xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-black/10" />

            <div className="relative z-10">
              <div className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold">⚡ Energy Saving Guide</div>
              <h2 className="mt-6 text-5xl font-black leading-tight">MEPCO Peak Hours</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-green-100">
                Avoid excessive electricity usage during peak hours to reduce your monthly bill amount.
              </p>

              <div className="mt-10 grid gap-5">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-widest text-green-100">April to October</p>
                  <h3 className="mt-2 text-3xl font-black">6:30 PM — 10:30 PM</h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-widest text-green-100">November to March</p>
                  <h3 className="mt-2 text-3xl font-black">6:00 PM — 10:00 PM</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-black text-[#005b2e]">How to Reduce Bill?</h2>
            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✅ Use energy efficient appliances</li>
              <li>✅ Avoid heavy appliances during peak hours</li>
              <li>✅ Turn off unnecessary lights</li>
              <li>✅ Use natural light in daytime</li>
              <li>✅ Unplug chargers and devices when not in use</li>
              <li>✅ Use inverter AC carefully</li>
              <li>✅ Check meter reading regularly</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#eef8f1] py-16">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-4xl font-black text-[#005b2e]">FAQs About MEPCO Bill</h2>

          <div className="mt-10 space-y-5">
            {faqs.map(([q, a]) => (
              <div key={q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-[#005b2e]">{q}</h3>
                <p className="mt-2 leading-7 text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="bg-white py-16">

  <div className="mx-auto max-w-7xl px-5">

    <div className="rounded-3xl border border-gray-200 bg-[#f9fcfa] p-8 md:p-12 shadow-sm">

      <h2 className="text-4xl font-black text-[#005b2e]">
        MEPCO Online Bill Check 2026
      </h2>

      <p className="mt-6 leading-8 text-gray-700">
        MEPCO online bill checking service allows consumers to instantly view
        and download duplicate electricity bills using a 14-digit reference
        number. This platform helps users across South Punjab including
        Multan, Khanewal, Bahawalpur, Vehari, Dera Ghazi Khan and nearby
        regions.
      </p>

      <p className="mt-5 leading-8 text-gray-700">
        Consumers can check due date, payable amount, estimated electricity
        charges, and important billing information online without visiting
        physical offices.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 border border-green-100">
          <h3 className="text-xl font-black text-[#005b2e]">
            Duplicate Bill
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Download or print duplicate electricity bills online.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 border border-green-100">
          <h3 className="text-xl font-black text-[#005b2e]">
            Bill Calculator
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Estimate monthly electricity charges using units consumed.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 border border-green-100">
          <h3 className="text-xl font-black text-[#005b2e]">
            Mobile Friendly
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Optimized for mobile users across Pakistan.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
     <footer className="bg-[#00381d] text-white">

  <div className="mx-auto max-w-7xl px-5 py-14">

    <div className="grid gap-10 md:grid-cols-4">

      {/* BRAND */}
      <div>

        <div className="flex items-center gap-3">

          <img
            src="/mepco-logo.png"
            alt="MEPCO Logo"
            className="h-14 w-14 rounded-full border-2 border-white bg-white object-cover"
          />

          <div>
            <h3 className="text-2xl font-black">
              MEPCO
            </h3>

            <p className="text-xs text-green-100">
              Online Bill Check
            </p>
          </div>

        </div>

        <p className="mt-5 text-sm leading-7 text-green-100">
          Fast and simple online MEPCO electricity bill checking platform for
          South Punjab consumers.
        </p>

      </div>

      {/* LINKS */}
      <div>

        <h4 className="text-xl font-black">
          Quick Links
        </h4>

        <div className="mt-5 space-y-3 text-green-100">
          <p>Check Bill</p>
          <p>Bill Calculator</p>
          <p>Peak Hours</p>
          <p>FAQs</p>
        </div>

      </div>

      {/* SERVICES */}
      <div>

        <h4 className="text-xl font-black">
          Services
        </h4>

        <div className="mt-5 space-y-3 text-green-100">
          <p>Duplicate Bill</p>
          <p>Reference Guide</p>
          <p>Load Shedding Info</p>
          <p>Electricity Tips</p>
        </div>

      </div>

      {/* CONTACT */}
      <div>

        <h4 className="text-xl font-black">
          Information
        </h4>

        <div className="mt-5 space-y-3 text-green-100 text-sm leading-7">
          <p>
            This is an independent informational website.
          </p>

          <p>
            Not officially affiliated with MEPCO or PITC.
          </p>
        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-sm text-green-100">
        © 2026 MEPCO Bill Check. All Rights Reserved.
      </p>

      <div className="flex gap-6 text-sm text-green-100">
        <a href="/privacy-policy">Privacy Policy</a>
<a href="/disclaimer">Disclaimer</a>
<a href="/contact-us">Contact Us</a>
<a href="/about-us">About Us</a>
<a href="/terms-and-conditions">Terms & Conditions</a>
      </div>

    </div>

  </div>

</footer>
{/* MOBILE QUICK BAR */}

<div className="fixed bottom-0 left-0 right-0 z-50 border-t border-green-200 bg-white/95 backdrop-blur-xl md:hidden">

  <div className="grid grid-cols-4 text-center">

    <a href="#bill" className="py-3 text-xs font-black text-[#005b2e]">
      ⚡
      <div>Bill</div>
    </a>

    <a href="#calculator" className="py-3 text-xs font-black text-[#005b2e]">
      🧮
      <div>Calc</div>
    </a>

    <a href="#services" className="py-3 text-xs font-black text-[#005b2e]">
      📄
      <div>Services</div>
    </a>

    <a href="#faq" className="py-3 text-xs font-black text-[#005b2e]">
      ❓
      <div>FAQs</div>
    </a>

  </div>

</div>
{/* FLOATING BUTTONS */}

<a
  href="https://wa.me/923000000000"
  target="_blank"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl shadow-2xl transition hover:scale-110"
>
  💬
</a>

<button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="fixed bottom-28 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#005b2e] text-2xl text-white shadow-2xl transition hover:scale-110"
>
  ↑
</button>
<section className="mt-6 rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
  <h2 className="mb-4 text-2xl font-bold text-[#005b2e]">
    Urdu Bill Guide
  </h2>

<div className="flex flex-wrap gap-3">
  <a
    href="/mepco-bill-urdu"
    className="rounded-full bg-[#005b2e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#004221]"
    dir="rtl"
  >
    میپکو بل اردو گائیڈ
  </a>

  <a
    href="/khanewal-bill-check"
    className="rounded-full bg-[#005b2e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#004221]"
  >
    Khanewal Bill Check
  </a>
<a
  href="/bahawalpur-bill-check"
  className="rounded-full bg-[#005b2e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#004221]"
>
  Bahawalpur Bill Check
</a>
<a
  href="/vehari-bill-check"
  className="rounded-full bg-[#005b2e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#004221]"
>
  Vehari Bill Check
</a>
</div>
</section>
    </main>
  );
}