"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [refNumber, setRefNumber] = useState("");
  const [units, setUnits] = useState("");
const [acHours, setAcHours] = useState("8");
const [acType, setAcType] = useState("inverter");
const [applianceHours, setApplianceHours] = useState("5");
const [applianceType, setApplianceType] = useState("fan");
const [menuOpen, setMenuOpen] = useState(false);
const [siteLoading, setSiteLoading] = useState(true);
const [checkingBill, setCheckingBill] = useState(false);
const [currentTime, setCurrentTime] = useState("");
const [recentSearches, setRecentSearches] = useState<string[]>([]);
useEffect(() => {
  const savedRef = localStorage.getItem("mepco_reference_number");

  if (savedRef) {
    setRefNumber(savedRef);
  }
const savedSearches = JSON.parse(
  localStorage.getItem("mepco_recent_searches") || "[]"
);

setRecentSearches(savedSearches);
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

const consumedUnits = Number(units || 0);

const slabStatus = useMemo(() => {
  if (consumedUnits <= 0) {
    return {
      title: "Enter Units",
      urdu: "یونٹ درج کریں",
      roman: "Units enter karein",
      message: "Enter consumed units to check estimated bill and slab status.",
      alert: false,
      color: "bg-gray-50 text-gray-700 border-gray-200",
    };
  }

  if (consumedUnits <= 200) {
    return {
      title: "Protected Range",
      urdu: "محفوظ حد",
      roman: "Protected range mein hain",
      message: `Only ${200 - consumedUnits} units left before 200 units limit.`,
      alert: consumedUnits >= 180,
      color: "bg-green-50 text-green-800 border-green-200",
    };
  }

  if (consumedUnits <= 300) {
    return {
      title: "Unprotected Slab Alert",
      urdu: "غیر محفوظ سلیب الرٹ",
      roman: "200 units cross ho gaye hain",
      message: "You crossed 200 units. Your bill may increase due to slab change.",
      alert: true,
      color: "bg-yellow-50 text-yellow-800 border-yellow-200",
    };
  }

  return {
    title: "High Usage Alert",
    urdu: "زیادہ استعمال الرٹ",
    roman: "Bijli ka istemal zyada ho raha hai",
    message: "High summer usage detected. AC and peak-hour usage may increase your bill.",
    alert: true,
    color: "bg-red-50 text-red-800 border-red-200",
  };
}, [consumedUnits]);
const consumerStatus = useMemo(() => {
  if (consumedUnits <= 0) {
    return {
      title: "Consumer Status",
      urdu: "صارف کی حیثیت",
      roman: "Consumer status",
      status: "Enter Units",
      color: "bg-gray-50 border-gray-200 text-gray-700",
    };
  }

  if (consumedUnits <= 200) {
    return {
      title: "Protected Consumer",
      urdu: "محفوظ صارف",
      roman: "Mahfooz Sarif",
      status: "Protected",
      color: "bg-green-50 border-green-200 text-green-800",
    };
  }

  return {
    title: "Unprotected Consumer",
    urdu: "غیر محفوظ صارف",
    roman: "Ghair Mahfooz Sarif",
    status: "Unprotected",
    color: "bg-red-50 border-red-200 text-red-800",
  };
}, [consumedUnits]);
const estimatedBill = useMemo(() => {
  const u = consumedUnits;

  const energy =
    u <= 100
      ? u * 30
      : u <= 200
      ? u * 38
      : u <= 300
      ? u * 45
      : u * 55;

  const fpa = u * 3.5;

  const fixedCharges = u > 0 ? 250 : 0;

  const gst = (energy + fpa + fixedCharges) * 0.18;

  return {
    energy: Math.round(energy),
    fpa: Math.round(fpa),
    fixedCharges: Math.round(fixedCharges),
    tax: Math.round(gst),
    total: Math.round(
      energy +
      fpa +
      fixedCharges +
      gst
    ),
  };
}, [consumedUnits]);
const billShock = useMemo(() => {
  const futureUnits = consumedUnits + 20;

  const futureEnergy =
    futureUnits <= 100
      ? futureUnits * 30
      : futureUnits <= 200
      ? futureUnits * 38
      : futureUnits <= 300
      ? futureUnits * 45
      : futureUnits * 55;

  const futureFpa = futureUnits * 3.5;
  const futureFixed = futureUnits > 0 ? 250 : 0;
  const futureTax = (futureEnergy + futureFpa + futureFixed) * 0.18;

  const futureTotal = futureEnergy + futureFpa + futureFixed + futureTax;

  return {
    futureUnits,
    increase: Math.max(0, Math.round(futureTotal - estimatedBill.total)),
  };
}, [consumedUnits, estimatedBill.total]);
const acEstimate = useMemo(() => {
  const hours = Number(acHours || 0);

  const unitsPerHour = acType === "inverter" ? 1.2 : 2.2;

  const monthlyUnits = hours * unitsPerHour * 30;

  const estimatedCost = monthlyUnits * 55;

  return {
    monthlyUnits: Math.round(monthlyUnits),
    estimatedCost: Math.round(estimatedCost),
  };
}, [acHours, acType]);
const applianceEstimate = useMemo(() => {
  const hours = Number(applianceHours || 0);

  const wattsMap: Record<string, number> = {
    fan: 80,
    fridge: 180,
    iron: 1000,
    waterMotor: 750,
    airCooler: 250,
    tv: 120,
    washingMachine: 500,
  };

  const watts = wattsMap[applianceType] || 80;

  const dailyUnits = (watts * hours) / 1000;
  const monthlyUnits = dailyUnits * 30;
  const estimatedCost = monthlyUnits * 55;

  return {
    watts,
    monthlyUnits: Math.round(monthlyUnits),
    estimatedCost: Math.round(estimatedCost),
  };
}, [applianceHours, applianceType]);
 const checkBill = () => {
  if (cleanRef.length !== 14) {
    alert("Please enter a valid 14-digit reference number");
    return;
  }

  setCheckingBill(true);

  localStorage.setItem("mepco_reference_number", cleanRef);
const existingSearches = JSON.parse(
  localStorage.getItem("mepco_recent_searches") || "[]"
);

const updatedSearches = [
  cleanRef,
  ...existingSearches.filter((item: string) => item !== cleanRef),
].slice(0, 5);

localStorage.setItem(
  "mepco_recent_searches",
  JSON.stringify(updatedSearches)
);

setRecentSearches(updatedSearches);

  window.open(`https://bill.pitc.com.pk/mepcobill?refno=${cleanRef}`, "_blank");

  setTimeout(() => {
    setCheckingBill(false);
  }, 1500);
};
const cities = [
  {
    name: "Multan",
    slug: "/multan-bill-check",
  },
  {
    name: "Khanewal",
    slug: "/khanewal-bill-check",
  },
  {
    name: "Bahawalpur",
    slug: "/bahawalpur-bill-check",
  },
  {
    name: "Vehari",
    slug: "/vehari-bill-check",
  },
  {
    name: "Lodhran",
    slug: "/lodhran-bill-check",
  },
  {
    name: "Sahiwal",
    slug: "/sahiwal-bill-check",
  },
  {
    name: "Rahim Yar Khan",
    slug: "/rahim-yar-khan-bill-check",
  },
  {
    name: "Muzaffargarh",
    slug: "/muzaffargarh-bill-check",
  },
  {
    name: "Dera Ghazi Khan",
    slug: "/dera-ghazi-khan-bill-check",
  },
  {
    name: "Bahawalnagar",
    slug: "/bahawalnagar-bill-check",
  },
  {
    name: "Layyah",
    slug: "/layyah-bill-check",
  },
  {
    name: "Taunsa",
    slug: "/taunsa-bill-check",
  },
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
  [
    "How can I check MEPCO bill online?",
    "Enter your 14-digit reference number in the MEPCO bill checker and click Check Bill. Your bill will open on the official PITC bill portal.",
  ],
  [
    "Can I download a duplicate MEPCO bill?",
    "Yes, after opening your bill on the official PITC portal, you can print or download your duplicate MEPCO electricity bill.",
  ],
  [
    "Where can I find my 14-digit MEPCO reference number?",
    "Your 14-digit reference number is printed on your previous MEPCO electricity bill, usually near the top section of the bill.",
  ],
  [
    "Can I check MEPCO bill by customer ID?",
    "Some bill portals support customer ID, but MEPCO duplicate bill checking commonly uses the 14-digit reference number.",
  ],
  [
    "Why is my MEPCO bill high this month?",
    "Your MEPCO bill may increase due to higher units, tariff slab changes, FPA, GST, QTA, fixed charges, arrears, or late payment surcharge.",
  ],
  [
    "What is FPA in MEPCO bill?",
    "FPA means Fuel Price Adjustment. It may change monthly based on fuel cost adjustments and can increase or decrease your electricity bill.",
  ],
  [
    "What is QTA in electricity bill?",
    "QTA means Quarterly Tariff Adjustment. It is an official tariff adjustment that may appear in electricity bills from time to time.",
  ],
  [
    "What are MEPCO peak hours?",
    "MEPCO peak hours are high-demand electricity usage hours. Avoiding heavy appliances during peak hours may help reduce electricity costs.",
  ],
  [
    "Is this the official MEPCO website?",
    "No. This is an independent informational website. Official bill data is provided through the PITC and MEPCO bill systems.",
  ],
  [
    "Is MEPCO bill checking free?",
    "Yes, checking your MEPCO duplicate bill online is free. You only need your valid reference number or customer information.",
  ],
  [
    "Can I check MEPCO bill on mobile?",
    "Yes, this website is mobile-friendly and allows users to access MEPCO bill guides, calculators, and bill checking links from mobile devices.",
  ],
  [
    "What should I do if my MEPCO bill is not found?",
    "Check that your reference number is exactly 14 digits and entered without spaces. If the issue continues, try again later on the official PITC portal.",
  ],
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
<style jsx global>{`
  @keyframes floatingCalculator {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0px);
    }
  }

  .floating-calculator-card {
    animation: floatingCalculator 4s ease-in-out infinite;
  }
`}</style>
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
{recentSearches.length > 0 && (
  <div className="mt-4">
    <p className="mb-2 text-sm font-bold text-[#005b2e]">
      Recent Searches
    </p>

    <div className="flex flex-wrap gap-2">
      {recentSearches.map((item) => (
        <button
          key={item}
          onClick={() => setRefNumber(item)}
          className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-bold text-[#005b2e]"
        >
          {item}
        </button>
      ))}
    </div>
  </div>
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
<div className="mt-3 grid grid-cols-2 gap-3">

  <button
    onClick={() => {
      window.open(
        "https://wa.me/?text=Check%20your%20MEPCO%20bill%20online%20instantly%20https://mepcoonlinebill.net",
        "_blank"
      );
    }}
    className="h-12 rounded-xl bg-green-600 text-sm font-bold text-white hover:bg-green-700"
  >
    📲 WhatsApp Share
  </button>

  <button
    onClick={() => {
      navigator.clipboard.writeText("https://mepcoonlinebill.net");
      alert("Website link copied");
    }}
    className="h-12 rounded-xl border border-green-200 bg-white text-sm font-bold text-[#005b2e] hover:bg-green-50"
  >
    🔗 Copy Link
  </button>

</div>
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
        30+
      </h3>

      <p className="mt-3 text-gray-600 font-semibold">
        Regions Covered
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
       <div className="mt-4 text-center">
  <a
    href="/all-mepco-regions"
    className="inline-flex rounded-full bg-[#005b2e] px-6 py-3 font-black text-white transition hover:bg-[#004221]"
  >
    View All {cities.length}+ Regions →
  </a>
</div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {cities.map((city) => (
  <a
    key={city.name}
    href={city.slug}
    className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 text-center font-black text-gray-800 shadow-sm transition hover:bg-green-50 hover:text-[#005b2e]"
  >
    {city.name} Bill Check
  </a>
))}
<a
  href="/mepco-bill-calculator"
  className="rounded-2xl border-2 border-[#005b2e] bg-[#005b2e] p-5 text-center font-black text-white shadow-sm transition hover:scale-105 hover:bg-[#004221]"
>
  🧮 Advanced MEPCO Bill Calculator
</a>          </div>
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

          <div className="floating-calculator-card rounded-3xl border border-green-100 bg-white/85 backdrop-blur-xl p-8 shadow-2xl transition duration-300 hover:scale-[1.03] hover:shadow-[0_25px_70px_rgba(0,91,46,0.25)]">

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

<div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
  <h4 className="font-black text-orange-800">
    ⚡ 200 Unit Danger Meter
  </h4>

  <p className="mt-2 text-sm font-semibold text-orange-700">
    English:{" "}
    {200 - consumedUnits > 0
      ? `${200 - consumedUnits} units left before 200-unit threshold`
      : "200-unit threshold crossed"}
  </p>

  <p className="mt-1 text-sm font-semibold text-orange-700">
    اردو:{" "}
    {200 - consumedUnits > 0
      ? `200 یونٹ کی حد تک ${200 - consumedUnits} یونٹ باقی ہیں`
      : "آپ 200 یونٹ کی حد عبور کر چکے ہیں"}
  </p>

  <p className="mt-1 text-sm font-semibold text-orange-700">
    Roman Urdu:{" "}
    {200 - consumedUnits > 0
      ? `Sirf ${200 - consumedUnits} units baqi hain`
      : "Aap 200 units cross kar chukay hain"}
  </p>
</div>
<div className={`mt-4 rounded-2xl border p-4 ${consumerStatus.color}`}>
  <h4 className="font-black">
    🛡️ {consumerStatus.title}
  </h4>

  <p className="mt-2 text-sm font-bold">
    اردو: {consumerStatus.urdu}
  </p>

  <p className="mt-1 text-sm font-semibold">
    Roman Urdu: {consumerStatus.roman}
  </p>

  <p className="mt-2 text-sm leading-6">
    Status: {consumerStatus.status}
  </p>
</div>
<div className="mt-4 rounded-2xl border border-purple-200 bg-purple-50 p-4">
  <h4 className="font-black text-purple-900">
    📈 Bill Shock Predictor
  </h4>

  <p className="mt-2 text-sm font-bold text-purple-800">
    English: If you use 20 more units, your bill may increase by approximately Rs. {billShock.increase}
  </p>

  <p className="mt-1 text-sm font-bold text-purple-800">
    اردو: اگر آپ مزید 20 یونٹ استعمال کریں تو بل تقریباً Rs. {billShock.increase} بڑھ سکتا ہے۔
  </p>

  <p className="mt-1 text-sm font-semibold text-purple-700">
    Roman Urdu: Agar aap 20 units aur use karein to bill taqreeban Rs. {billShock.increase} barh sakta hai.
  </p>

  <p className="mt-2 text-sm text-purple-700">
    Future Units: {billShock.futureUnits}
  </p>
</div>

<div className="mt-8 space-y-5">  <div className="flex items-center justify-between">
    <span className="text-gray-600">Electricity Charges</span>
    <span className="text-xl font-black">Rs. {estimatedBill.energy}</span>
  </div>
<div className={`mb-5 rounded-2xl border p-4 ${slabStatus.color}`}>
  <h4 className="text-lg font-black">{slabStatus.title}</h4>

  <p className="mt-1 text-sm font-bold">
    {slabStatus.urdu}
  </p>

  <p className="mt-1 text-sm font-semibold">
    {slabStatus.roman}
  </p>

  <p className="mt-2 text-sm leading-6">
    {slabStatus.message}
  </p>
</div>

{slabStatus.alert && (
  <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
    <h4 className="text-lg font-black">⚠️ Slab Warning</h4>

    <p className="mt-1 text-sm font-bold">
      اردو: 200 یونٹ سے اوپر جانے پر بل زیادہ آ سکتا ہے۔
    </p>

    <p className="mt-1 text-sm font-semibold">
      Roman Urdu: 200 units cross honay par bill zyada aa sakta hai.
    </p>

    <p className="mt-2 text-sm leading-6">
      English: Reduce AC usage during peak hours (7 PM - 11 PM).
    </p>
  </div>
)}

<div className="flex items-center justify-between">
  <span className="text-gray-600">Fuel Price Adjustment (FPA)</span>
  <span className="text-xl font-black">Rs. {estimatedBill.fpa}</span>
</div>

  <div className="flex items-center justify-between">
    <span className="text-gray-600">Fixed Charges</span>
    <span className="text-xl font-black">Rs. {estimatedBill.fixedCharges}</span>
  </div>

  <div className="flex items-center justify-between">
    <span className="text-gray-600">Approx GST</span>
    <span className="text-xl font-black">Rs. {estimatedBill.tax}</span>
  </div>

  <div className="flex items-center justify-between border-t pt-5">
    <span className="text-2xl font-black text-[#005b2e]">Total</span>
    <span className="text-3xl font-black text-[#005b2e]">
      Rs. {estimatedBill.total}
    </span>
  </div>
<div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
  <h4 className="text-xl font-black text-blue-900">
    ❄️ AC Cost Calculator
  </h4>

  <p className="mt-2 text-sm font-bold text-blue-800">
    English: Estimated monthly AC electricity usage
  </p>

  <p className="mt-1 text-sm font-bold text-blue-800">
    اردو: اے سی کا متوقع ماہانہ بجلی خرچ
  </p>

  <p className="mt-1 text-sm font-semibold text-blue-700">
    Roman Urdu: AC ka andaza shuda mahana bill
  </p>

  <div className="mt-4 grid gap-3 md:grid-cols-2">
    <input
      type="number"
      value={acHours}
      onChange={(e) => setAcHours(e.target.value)}
      placeholder="Daily AC Hours"
      className="rounded-xl border border-blue-200 p-3"
    />

    <select
      value={acType}
      onChange={(e) => setAcType(e.target.value)}
      className="rounded-xl border border-blue-200 p-3"
    >
      <option value="inverter">Inverter AC</option>
      <option value="non-inverter">Non Inverter AC</option>
    </select>
  </div>

  <div className="mt-4 space-y-2">
    <p className="font-bold text-blue-900">
      Monthly Units: {acEstimate.monthlyUnits}
    </p>

    <p className="text-xl font-black text-blue-900">
      Estimated Cost: Rs. {acEstimate.estimatedCost}
    </p>
  </div>
</div>
<div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5">
  <h4 className="text-xl font-black text-green-900">
    ⚡ Appliance Electricity Cost Calculator
  </h4>

  <p className="mt-2 text-sm font-bold text-green-800">
    English: Calculate monthly electricity cost of home appliances
  </p>

  <p className="mt-1 text-sm font-bold text-green-800">
    اردو: گھریلو آلات کی ماہانہ بجلی لاگت معلوم کریں
  </p>

  <p className="mt-1 text-sm font-semibold text-green-700">
    Roman Urdu: Ghar ke appliances ka mahana bijli kharcha check karein
  </p>

  <div className="mt-4 grid gap-3 md:grid-cols-2">
    <input
      type="number"
      value={applianceHours}
      onChange={(e) => setApplianceHours(e.target.value)}
      placeholder="Daily Usage Hours"
      className="rounded-xl border border-green-200 p-3"
    />

    <select
      value={applianceType}
      onChange={(e) => setApplianceType(e.target.value)}
      className="rounded-xl border border-green-200 p-3"
    >
      <option value="fan">Ceiling Fan</option>
      <option value="fridge">Refrigerator</option>
      <option value="iron">Electric Iron</option>
      <option value="waterMotor">Water Motor</option>
      <option value="airCooler">Air Cooler</option>
      <option value="tv">Television</option>
      <option value="washingMachine">Washing Machine</option>
    </select>
  </div>

  <div className="mt-4 space-y-2">
    <p className="font-bold text-green-900">
      Appliance Power: {applianceEstimate.watts} Watts
    </p>

    <p className="font-bold text-green-900">
      Monthly Units: {applianceEstimate.monthlyUnits}
    </p>

    <p className="text-xl font-black text-green-900">
      Estimated Cost: Rs. {applianceEstimate.estimatedCost}
    </p>
  </div>
</div>

  <p className="text-sm text-gray-500">
    This is only an estimate. Final bill may include QTA, PTV fee,
    arrears, late payment surcharge and official adjustments.
  </p>
</div>
            </div>
          </div>
        </div>
      </section>      <section className="mx-auto max-w-7xl px-5 py-16">
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
 <section className="mx-auto max-w-7xl px-5 py-16">
  <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-xl md:p-12">
    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
        Consumer Help Center
      </p>

      <h2 className="mt-3 text-4xl font-black text-[#8B0000]">
        MEPCO Bill Guides & Tools
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
        Learn how to find your reference number, customer ID, peak hours,
        taxes, and bill charges with simple MEPCO consumer guides.
      </p>
    </div>

       <div className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-4">
      <a href="/mepco-duplicate-bill-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">📄</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Duplicate Bill Guide</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Download, print and save your MEPCO duplicate bill online.</p>
      </a>

      <a href="/mepco-bill-due-date-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">📅</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Due Date Guide</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Check bill due date, late fee and amount after due date.</p>
      </a>

      <a href="/mepco-bill-installment-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">💰</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Bill Installment Guide</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Learn how to request installment relief for a high MEPCO bill.</p>
      </a>

      <a href="/mepco-meter-reading-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">⚡</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Meter Reading Guide</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Read your electricity meter and calculate monthly units.</p>
      </a>

      <a href="/mepco-meter-complaint-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">🔧</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Meter Complaint Guide</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Report wrong reading, fast meter, damaged meter or display issue.</p>
      </a>

      <a href="/mepco-wrong-bill-solution" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">❌</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Wrong Bill Solution</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Fix overbilling, wrong reading, arrears or unexpected charges.</p>
      </a>

      <a href="/mepco-reference-number-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">🔢</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Reference Number Guide</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Find your 14-digit MEPCO reference number on your bill.</p>
      </a>

      <a href="/mepco-customer-id-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">🆔</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Customer ID Guide</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Understand Customer ID and how it differs from reference number.</p>
      </a>

      <a href="/mepco-peak-hours-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">⏰</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Peak Hours Guide</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Check MEPCO peak hours and reduce electricity usage cost.</p>
      </a>

      <a href="/mepco-taxes-explained" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">🧾</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Taxes Explained</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Learn GST, FPA, QTA, fixed charges and other bill items.</p>
      </a>

      <a href="/mepco-bill-slabs-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">📊</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">Bill Slabs Guide</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Understand unit rates and electricity bill slabs.</p>
      </a>

      <a href="/mepco-new-connection-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
        <div className="text-4xl">🔌</div>
        <h3 className="mt-4 text-xl font-black text-[#005b2e]">New Connection Guide</h3>
        <p className="mt-3 text-sm leading-6 text-gray-600">Apply for a new MEPCO electricity connection and track application status.</p>
      </a>
<a href="/mepco-bill-payment-methods-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">💳</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Payment Methods Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Learn online bill payment through banks, apps and wallets.</p>
</a>

<a href="/mepco-name-change-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">📝</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Name Change Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Transfer electricity connection ownership and update bill records.</p>
</a>

<a href="/mepco-demand-notice-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">📨</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Demand Notice Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Understand demand notice fees, validity and payment process.</p>
</a>

<a href="/mepco-load-extension-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">⚙️</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Load Extension Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Increase sanctioned load for home, shop or commercial use.</p>
</a>

<a href="/mepco-net-metering-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">☀️</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Net Metering Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Sell solar energy and understand net metering requirements.</p>
</a>

<a href="/mepco-tariff-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">📈</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Tariff Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Understand residential, commercial and industrial tariff categories.</p>
</a>
<a href="/mepco-security-deposit" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">🏦</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Security Deposit Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Learn security deposit rules, refund process and new connection requirements.</p>
</a>

<a href="/mepco-bill-correction-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">✏️</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Bill Correction Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Fix incorrect charges, billing errors and consumer billing issues.</p>
</a>

<a href="/mepco-bill-not-received-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">📭</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Bill Not Received Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">What to do when your monthly electricity bill is not delivered.</p>
</a>

<a href="/mepco-transformer-complaint-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">🔌</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Transformer Complaint Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Report transformer faults, outages and electricity supply problems.</p>
</a>

<a href="/mepco-bill-calculator" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">🧮</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Bill Calculator</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Estimate electricity charges using MEPCO bill calculator tools.</p>
</a>

<a href="/mepco-bill-urdu" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">🇵🇰</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Urdu Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Complete MEPCO bill guide in Urdu for Pakistani consumers.</p>
</a>
<a href="/mepco-complaint-tracking-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">📋</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Complaint Tracking Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Track complaint status and understand MEPCO complaint resolution process.</p>
</a>

<a href="/mepco-disconnection-reconnection-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">🔄</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Disconnection & Reconnection</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Learn disconnection reasons, restoration process and reconnection rules.</p>
</a>

<a href="/mepco-load-shedding-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">⚡</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Load Shedding Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Understand outages, feeder shutdowns and electricity interruption issues.</p>
</a>

<a href="/mepco-change-of-tariff-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">📈</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">Change of Tariff Guide</h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">Convert domestic, commercial and other tariff categories correctly.</p>
</a>
<a href="/mepco-application-forms-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-green-50 hover:shadow-xl">
  <div className="text-4xl">📄</div>
  <h3 className="mt-4 text-xl font-black text-[#005b2e]">
    Application Forms Guide
  </h3>
  <p className="mt-3 text-sm leading-6 text-gray-600">
    New connection, name change, load extension, tariff change and complaint forms.
  </p>
</a>
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
     <p className="mt-5 leading-8 text-gray-700">
  Consumers can also learn about MEPCO taxes, GST, FPA, QTA, tariff slabs,
  customer ID, reference number and new electricity connection procedures.
</p>
<p className="mt-5 leading-8 text-gray-700">
  میپکو صارفین آن لائن بجلی کا بل چیک کر سکتے ہیں، ڈپلیکیٹ بل ڈاؤن لوڈ کر سکتے ہیں،
  ریفرنس نمبر اور کسٹمر آئی ڈی کی معلومات حاصل کر سکتے ہیں، اور بجلی کے بل میں شامل
  ٹیکسز، ایف پی اے، کیو ٹی اے اور دیگر چارجز کو سمجھ سکتے ہیں۔
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
<section className="mx-auto max-w-7xl px-5 py-16">
  <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-xl md:p-12">
    <div className="text-center">
      <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
        Popular Searches
      </p>

      <h2 className="mt-3 text-4xl font-black text-[#8B0000]">
        Popular MEPCO Searches
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
        Quick access to commonly searched MEPCO bill topics, electricity bill
        guides, duplicate bill services, and consumer help pages.
      </p>
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <a href="#bill" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e] shadow-sm transition hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg">
        MEPCO Bill Check
      </a>

      <a href="#bill" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e] shadow-sm transition hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg">
        MEPCO Duplicate Bill
      </a>

      <a href="/mepco-bill-calculator" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e] shadow-sm transition hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg">
        MEPCO Bill Calculator
      </a>

      <a href="/mepco-customer-id-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e] shadow-sm transition hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg">
        MEPCO Customer ID
      </a>

      <a href="/mepco-reference-number-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e] shadow-sm transition hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg">
        MEPCO Reference Number
      </a>

      <a href="/mepco-peak-hours-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e] shadow-sm transition hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg">
        MEPCO Peak Hours
      </a>

      <a href="/mepco-taxes-explained" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e] shadow-sm transition hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg">
        MEPCO Taxes Explained
      </a>

      <a href="/mepco-new-connection-guide" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e] shadow-sm transition hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg">
        MEPCO New Connection
      </a>
    </div>
  </div>
</section>
<section className="bg-gradient-to-r from-yellow-50 to-green-50 py-16">
  <div className="mx-auto max-w-7xl px-5">

    <div className="rounded-3xl border border-yellow-200 bg-white p-8 shadow-xl">

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-black text-yellow-800">
            ☀️ NEW SOLAR TOOL
          </span>

          <h2 className="mt-4 text-4xl font-black text-[#005b2e]">
            Solar Savings Calculator
          </h2>

          <p className="mt-4 text-lg font-semibold text-gray-700">
            English: Calculate solar savings, yearly return, net metering credits and payback period.
          </p>

          <p className="mt-3 text-lg font-semibold text-gray-700">
            اردو: سولر بچت، سالانہ منافع، نیٹ میٹرنگ کریڈٹ اور پے بیک پیریڈ معلوم کریں۔
          </p>

          <p className="mt-3 text-lg font-semibold text-gray-700">
            Roman Urdu: Solar saving, yearly munafa aur payback period check karein.
          </p>

        </div>

        <div>
          <a
            href="/mepco-solar-savings-calculator"
            className="inline-flex items-center rounded-2xl bg-[#005b2e] px-8 py-4 text-lg font-black text-white transition hover:bg-green-800"
          >
            Open Solar Calculator →
          </a>
        </div>

      </div>

    </div>

  </div>
</section>

<section className="mx-auto max-w-7xl px-5 py-16">

  <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-xl">

    <div className="text-center">

      <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
        Regions Coverage
      </p>

      <h2 className="mt-3 text-4xl font-black text-[#8B0000]">
        Top MEPCO Regions
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
        Explore electricity bill checking services across major MEPCO regions.
      </p>

    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <a href="/multan-bill-check" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e]">
        Multan Bill Check
      </a>

      <a href="/khanewal-bill-check" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e]">
        Khanewal Bill Check
      </a>

      <a href="/bahawalpur-bill-check" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e]">
        Bahawalpur Bill Check
      </a>

      <a href="/vehari-bill-check" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e]">
        Vehari Bill Check
      </a>

      <a href="/lodhran-bill-check" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e]">
        Lodhran Bill Check
      </a>

      <a href="/sahiwal-bill-check" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e]">
        Sahiwal Bill Check
      </a>

      <a href="/rahim-yar-khan-bill-check" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e]">
        Rahim Yar Khan Bill Check
      </a>

      <a href="/muzaffargarh-bill-check" className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 font-black text-[#005b2e]">
        Muzaffargarh Bill Check
      </a>

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

    <a href="#bill" className="block hover:text-white">
      Check Bill
    </a>

    <a href="/mepco-bill-calculator" className="block hover:text-white">
      MEPCO Bill Calculator
    </a>

    <a href="/mepco-bill-urdu" className="block hover:text-white">
      MEPCO Bill Urdu
    </a>

    <a href="/all-mepco-regions" className="block hover:text-white">
      All MEPCO Regions
    </a>

  </div>

</div>

{/* SERVICES */}
<div>

  <h4 className="text-xl font-black">
    Guides
  </h4>

  <div className="mt-5 space-y-3 text-green-100">

    <a href="/mepco-reference-number-guide" className="block hover:text-white">
      Reference Number Guide
    </a>

    <a href="/mepco-customer-id-guide" className="block hover:text-white">
      Customer ID Guide
    </a>

    <a href="/mepco-peak-hours-guide" className="block hover:text-white">
      Peak Hours Guide
    </a>

    <a href="/mepco-taxes-explained" className="block hover:text-white">
      Taxes Explained
    </a>

    <a href="/mepco-bill-slabs-guide" className="block hover:text-white">
      Bill Slabs Guide
    </a>

    <a href="/mepco-new-connection-guide" className="block hover:text-white">
      New Connection Guide
    </a>

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
    </main>
  );
}
