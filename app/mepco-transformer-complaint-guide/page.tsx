import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Transformer Complaint Guide 2026 | Fault, Burnt & Urdu FAQs",
  description:
    "Learn how to report MEPCO transformer complaint for burnt transformer, overload, low voltage, sparking, power failure, replacement issue, Urdu guide and Roman Urdu FAQs.",
  keywords: [
    "MEPCO transformer complaint",
    "MEPCO transformer fault",
    "MEPCO burnt transformer",
    "transformer complaint Pakistan",
    "MEPCO low voltage complaint",
    "MEPCO transformer overload",
    "mepco transformer complaint kaise kare",
    "transformer kharab ho gaya kya kare",
    "bijli transformer jal gaya",
    "میپکو ٹرانسفارمر شکایت",
    "ٹرانسفارمر خراب ہو گیا",
    "بجلی ٹرانسفارمر جل گیا",
    "کم وولٹیج شکایت",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-transformer-complaint-guide",
  },
};

const quickLinks = [
  { href: "#common-problems", text: "1. Common Transformer Problems" },
  { href: "#safety-first", text: "2. Safety First" },
  { href: "#complaint-process", text: "3. Complaint Process" },
  { href: "#what-to-note", text: "4. What Details to Note" },
  { href: "#urdu-guide", text: "5. Urdu Guide" },
  { href: "#faqs", text: "6. FAQs" },
];

const problems = [
  {
    title: "Burnt Transformer",
    desc: "Transformer may stop working due to burning, heavy load, fault, lightning, or internal damage.",
  },
  {
    title: "Overload Issue",
    desc: "If many consumers are connected or load is higher than capacity, transformer may trip or heat repeatedly.",
  },
  {
    title: "Low Voltage",
    desc: "Weak voltage can affect fans, motors, pumps, refrigerators and other appliances.",
  },
  {
    title: "Sparking or Smoke",
    desc: "Sparking, burning smell, smoke or unusual sound near transformer should be reported urgently.",
  },
  {
    title: "Frequent Tripping",
    desc: "Repeated shutdowns may indicate overload, cable fault, fuse issue or transformer weakness.",
  },
  {
    title: "Complete Area Power Failure",
    desc: "If the whole street or area has no electricity, transformer or feeder issue may be involved.",
  },
];

const safetySteps = [
  {
    title: "Stay Away From Transformer",
    desc: "Do not touch transformer, poles, wires, fuse boxes or fallen cables.",
  },
  {
    title: "Keep Children Away",
    desc: "Stop children and nearby people from going close to the fault area.",
  },
  {
    title: "Avoid DIY Repair",
    desc: "Never try to repair transformer, fuse, wire or pole connection yourself.",
  },
  {
    title: "Report Immediately",
    desc: "Inform MEPCO office, helpline, complaint center or local field staff as soon as possible.",
  },
];

const complaintSteps = [
  {
    title: "Identify the Problem",
    desc: "Check whether the issue is low voltage, transformer burning, sparking, tripping or complete power failure.",
  },
  {
    title: "Collect Basic Details",
    desc: "Note area name, street, nearest landmark, transformer location and your contact number.",
  },
  {
    title: "Call Helpline or Office",
    desc: "Contact MEPCO helpline, subdivision office or complaint center and explain the transformer fault clearly.",
  },
  {
    title: "Record Complaint Number",
    desc: "Ask for complaint number, reference number or any tracking detail for follow-up.",
  },
  {
    title: "Follow Up Safely",
    desc: "If the issue is not resolved, follow up with the concerned office without going near dangerous equipment.",
  },
];

const detailsToNote = [
  {
    title: "Exact Location",
    desc: "Street number, mohalla, village, colony, shop area or nearest landmark.",
  },
  {
    title: "Problem Type",
    desc: "Burnt transformer, smoke, sparking, low voltage, no power, repeated tripping or sound.",
  },
  {
    title: "Affected Area",
    desc: "Mention whether one house, one street, shops, tube wells or whole area is affected.",
  },
  {
    title: "Time of Fault",
    desc: "Note when the fault started and whether it happens repeatedly at peak hours.",
  },
];

const urduQueries = [
  "میپکو ٹرانسفارمر شکایت کیسے کریں؟",
  "ٹرانسفارمر خراب ہو جائے تو کیا کریں؟",
  "بجلی کا ٹرانسفارمر جل گیا شکایت کہاں کریں؟",
  "کم وولٹیج کا مسئلہ کیسے حل کروائیں؟",
  "ٹرانسفارمر سے دھواں یا چنگاری نکلے تو کیا کریں؟",
  "mepco transformer complaint kaise kare",
  "transformer kharab ho gaya kya kare",
  "bijli transformer jal gaya complaint",
];

const relatedGuides = [
  {
    href: "/mepco-meter-complaint-guide",
    title: "Meter Complaint Guide",
    desc: "Report wrong reading, fast meter, slow meter or display issue.",
  },
  {
    href: "/mepco-load-extension-guide",
    title: "Load Extension Guide",
    desc: "Understand sanctioned load increase for higher electricity demand.",
  },
  {
    href: "/mepco-bill-not-received-guide",
    title: "Bill Not Received Guide",
    desc: "Learn what to do if your electricity bill is missing or delayed.",
  },
];

export default function MepcoTransformerComplaintGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <nav
        className="mb-6 text-xs font-medium uppercase tracking-wide text-slate-500"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="transition-colors hover:text-emerald-600">
              Home
            </Link>
          </li>
          <li className="text-slate-400" aria-hidden="true">
            /
          </li>
          <li className="font-semibold text-slate-800" aria-current="page">
            Transformer Complaint Guide
          </li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Transformer Complaint Guide 2026: Fault, Burnt Transformer,
          Low Voltage and Urdu FAQs
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          Transformer faults can affect a full street, shop area, village or
          colony. This guide explains common MEPCO transformer problems, safety
          steps, complaint process, details to note, Urdu guide and Roman Urdu
          search questions for Pakistani consumers.
        </p>

        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-950">
          <strong>Safety Warning:</strong> Never touch transformer, pole, fuse,
          wire, cable or any electrical equipment. If there is smoke, sparking,
          burning smell or fallen wire, stay away and report immediately.
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-slate-200 py-3.5 text-sm font-medium text-slate-500">
          <div>
            <span className="font-normal text-slate-400">Company:</span>{" "}
            <strong className="text-slate-700">
              Multan Electric Power Company (MEPCO)
            </strong>
          </div>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">
            |
          </span>
          <div>
            <span className="font-normal text-slate-400">Topic:</span>{" "}
            <strong className="text-slate-700">Transformer Fault Complaint</strong>
          </div>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">
            |
          </span>
          <div>
            <span className="font-normal text-slate-400">Updated:</span>{" "}
            <strong className="text-slate-700">June 2026</strong>
          </div>
        </div>
      </header>

      <section className="mb-12 rounded-2xl border border-slate-200/60 bg-slate-50 p-6 shadow-sm">
        <h2 className="mb-4 text-base font-bold tracking-tight text-slate-900">
          In This Guide:
        </h2>

        <ul className="grid grid-cols-1 gap-3 text-sm font-semibold text-emerald-700 md:grid-cols-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-emerald-900 hover:underline"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="space-y-14">
        <section id="common-problems" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Common MEPCO Transformer Problems
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            Transformer issues can appear in different forms. Some are urgent
            safety risks, while others affect voltage quality or electricity
            supply.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {problems.map((item, index) => (
              <div
                key={`problem-${index}`}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <h3 className="mb-2 font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="safety-first" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Safety First: What You Should Do Immediately
          </h2>

          <ul
            className="space-y-4 text-slate-800"
            aria-label="Transformer safety steps"
          >
            {safetySteps.map((item, index) => (
              <li
                key={`safety-${index}`}
                className="flex items-start rounded-xl border border-red-100 bg-red-50/60 p-3"
              >
                <span
                  className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700"
                  aria-hidden="true"
                >
                  !
                </span>
                <span>
                  <strong className="font-bold text-red-950">
                    {item.title}:
                  </strong>{" "}
                  <span className="text-red-900">{item.desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="complaint-process" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to File a MEPCO Transformer Complaint
          </h2>

          <p className="mb-6 leading-relaxed text-slate-800">
            When reporting transformer fault, explain the issue clearly and
            provide accurate location details. This helps field staff identify
            the area faster.
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-800/80 pb-4">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Step-by-Step Complaint Process
              </span>
            </div>

            <ol
              className="relative space-y-8 border-l border-slate-800 pl-6"
              aria-label="MEPCO transformer complaint steps"
            >
              {complaintSteps.map((step, index) => (
                <li key={`complaint-${index}`} className="relative">
                  <span
                    className="absolute -left-[38px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-900 bg-emerald-500 text-xs font-black text-slate-950"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mb-1 text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="what-to-note" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What Details Should You Note Before Complaint?
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {detailsToNote.map((item, index) => (
              <div
                key={`detail-${index}`}
                className="rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm"
              >
                <h3 className="mb-2 font-bold text-amber-950">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-amber-900">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="urdu-guide" className="scroll-mt-6" dir="rtl" lang="ur">
          <h2 className="mb-4 border-b border-slate-100 pb-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl font-sans">
            میپکو ٹرانسفارمر شکایت گائیڈ اردو میں
          </h2>

          <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 text-slate-900 shadow-sm">
            <h3 className="text-xl font-black text-emerald-900 sm:text-2xl">
              ٹرانسفارمر خراب ہو جائے تو کیا کریں؟
            </h3>

            <p className="leading-8 text-base text-slate-800">
              اگر آپ کے علاقے کا ٹرانسفارمر خراب ہو گیا ہے، جل گیا ہے، دھواں
              نکل رہا ہے، چنگاری آ رہی ہے یا voltage بہت کم ہے تو فوراً
              ٹرانسفارمر سے دور رہیں اور میپکو complaint center، helpline یا
              متعلقہ office کو اطلاع دیں۔
            </p>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              شکایت کرتے وقت کیا بتانا چاہیے؟
            </h3>

            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-800">
              <li>علاقہ، گلی، محلہ یا nearest landmark</li>
              <li>مسئلہ: transformer burnt, smoke, sparking, low voltage</li>
              <li>کتنے گھر یا کتنی گلی متاثر ہے</li>
              <li>fault کس وقت شروع ہوا</li>
              <li>complaint number ضرور نوٹ کریں</li>
            </ul>

            <h3 className="pt-4 text-lg font-black text-emerald-900 sm:text-xl">
              لوگ گوگل پر عموماً یہ سوال پوچھتے ہیں:
            </h3>

            <ul className="list-disc space-y-2 pr-6 leading-8 text-base text-slate-700">
              {urduQueries.map((query, index) => (
                <li key={`query-${index}`}>{query}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="faqs" className="scroll-mt-6">
          <h2 className="mb-6 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q1. What should I do if transformer is sparking?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Stay away from transformer, keep people away from the area and
                report immediately to MEPCO helpline, complaint center or local
                office.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> اگر transformer سے چنگاری نکلے تو کیا
                  کریں؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: فوراً دور رہیں، لوگوں کو قریب نہ جانے دیں اور میپکو کو
                  اطلاع دیں۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q2. Can low voltage be due to transformer issue?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Yes, low voltage may be related to overload, transformer
                weakness, line issue, loose connection or local distribution
                problem.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا low voltage transformer کی وجہ سے
                  ہو سکتا ہے؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: جی ہاں، overload، transformer weakness یا line issue کی
                  وجہ سے voltage کم ہو سکتا ہے۔
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q3. Should consumers repair transformer themselves?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                No. Transformer and electric poles are dangerous. Only trained
                authorized field staff should handle transformer or line repair.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-3 text-sm text-slate-800"
              >
                <p className="font-bold">
                  <strong>سوال:</strong> کیا صارفین خود transformer ٹھیک کر
                  سکتے ہیں؟
                </p>
                <p className="text-slate-600 leading-7">
                  جواب: نہیں، یہ خطرناک ہے۔ صرف authorized field staff کو repair
                  کرنی چاہیے۔
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Complaint and Safety Guides
        </h2>

        <div className="grid gap-4 text-sm font-medium md:grid-cols-3">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-xl border border-slate-200 p-5 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-50/20"
            >
              <span className="block font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                {guide.title}
              </span>
              <span className="mt-2 block text-xs leading-relaxed text-slate-500">
                {guide.desc}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs leading-relaxed text-slate-600">
          <strong>Disclaimer:</strong> This page is for consumer information and
          safety guidance only. Transformer faults and electrical hazards should
          be handled only by authorized MEPCO field staff or qualified personnel.
          Do not touch electrical equipment, wires, poles or transformer parts.
        </div>
      </footer>
    </main>
  );
}