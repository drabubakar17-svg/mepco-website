import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Load Shedding Guide 2026 | Schedule, Feeder & Power Outage",
  description:
    "Complete MEPCO load shedding guide in English and Urdu. Learn about load shedding schedule, feeder shutdowns, power outages, complaint process, causes and safety tips.",
  keywords: [
    "MEPCO load shedding",
    "MEPCO load shedding schedule",
    "MEPCO feeder shutdown",
    "MEPCO power outage",
    "MEPCO electricity breakdown",
    "MEPCO bijli band",
    "MEPCO outage complaint",
    "میپکو لوڈ شیڈنگ",
    "میپکو بجلی بند",
    "میپکو فیڈر بند",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-load-shedding-guide",
  },
};

const causes = [
  {
    title: "Scheduled Feeder Shutdown",
    text: "MEPCO may stop supply in some areas for repair, maintenance or feeder work.",
  },
  {
    title: "Technical Fault",
    text: "Transformer fault, line damage, pole issue or cable fault can interrupt supply.",
  },
  {
    title: "High Demand Load",
    text: "Heavy electricity usage during peak hours may create pressure on the supply system.",
  },
  {
    title: "Emergency Breakdown",
    text: "Storm, rain, sparking, tripping or sudden grid issue may cause unexpected outage.",
  },
];

const faqs = [
  {
    q: "How can I check MEPCO load shedding schedule?",
    a: "Consumers should verify load shedding or feeder shutdown information through official MEPCO channels, local subdivision updates or customer support.",
  },
  {
    q: "Why is electricity off in my MEPCO area?",
    a: "Electricity may be off due to scheduled feeder shutdown, technical fault, transformer issue, low voltage, line maintenance or emergency breakdown.",
  },
  {
    q: "Can I complain about power outage?",
    a: "Yes, consumers can report power outage, low voltage, transformer fault or repeated supply breakdown through the relevant MEPCO complaint process.",
  },
  {
    q: "Is load shedding the same as a fault?",
    a: "No. Load shedding is usually planned or system-based supply management, while a fault is a technical issue in line, transformer, meter or local supply system.",
  },
];

export default function MepcoLoadSheddingGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-5 text-sm">
            <Link href="/" className="text-green-100 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-green-200">/</span>
            <span>MEPCO Load Shedding Guide</span>
          </div>

          <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            MEPCO Power Outage Guide 2026
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
            MEPCO Load Shedding Guide: Schedule, Feeder Shutdown & Power Outage
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            This guide explains how MEPCO consumers can understand load
            shedding, feeder shutdowns, power outages, breakdowns, complaint
            options and safety steps during electricity supply interruption.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_320px]">
        <article className="space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is MEPCO Load Shedding?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              MEPCO load shedding means temporary electricity supply suspension
              in a specific area, feeder, city or region. It may happen because
              of power demand management, scheduled maintenance, feeder shutdown,
              technical faults, or emergency breakdowns.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Sometimes consumers confuse load shedding with a local fault. If
              only one house is affected, it may be a meter, wiring or service
              line issue. If a complete street or area is affected, it may be a
              feeder, transformer or supply-side problem.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Common Reasons for Electricity Outage
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {causes.map((item) => (
                <div key={item.title} className="rounded-xl bg-slate-50 p-5">
                  <h3 className="font-bold text-green-800">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              How to Check MEPCO Load Shedding or Feeder Shutdown
            </h2>

            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-700">
              <li>Check whether electricity is off only in your house or whole area.</li>
              <li>Ask nearby consumers if their supply is also interrupted.</li>
              <li>Keep your reference number and area name ready.</li>
              <li>Contact the relevant MEPCO subdivision or official support channel.</li>
              <li>Ask whether it is scheduled load shedding, feeder shutdown or fault.</li>
              <li>For repeated outages, register a complaint and note complaint details.</li>
              <li>Follow up if the issue continues beyond normal restoration time.</li>
            </ol>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Load Shedding vs Feeder Shutdown vs Fault
            </h2>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="p-3">Type</th>
                    <th className="p-3">Meaning</th>
                    <th className="p-3">What Consumer Should Do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 font-medium">Load Shedding</td>
                    <td className="p-3">Planned or system-based supply suspension.</td>
                    <td className="p-3">Verify schedule and wait for restoration.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Feeder Shutdown</td>
                    <td className="p-3">Supply stopped for maintenance or feeder work.</td>
                    <td className="p-3">Confirm expected restoration from office.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Local Fault</td>
                    <td className="p-3">Problem in meter, transformer, line or area supply.</td>
                    <td className="p-3">Register complaint and share exact location.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              What to Do During Long Power Outage
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
              <li>Turn off heavy appliances to avoid damage when power returns.</li>
              <li>Use voltage stabilizers for sensitive devices where needed.</li>
              <li>Do not touch broken wires, poles, transformers or sparking equipment.</li>
              <li>Keep mobile phones charged during storm or rainy weather.</li>
              <li>Report transformer smoke, sparks or wire breakage immediately.</li>
              <li>Save complaint number if you report the outage.</li>
              <li>For medical or emergency needs, arrange backup power if possible.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              When Should You Register a MEPCO Complaint?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              You should consider registering a complaint when electricity is
              not restored after expected time, only your house is affected,
              there is low voltage, repeated tripping, transformer noise,
              sparking, broken wire, damaged pole or frequent unannounced
              outage in your area.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              For technical complaints, share clear location, nearest landmark,
              reference number, contact number and type of issue. This helps the
              concerned staff understand whether the matter is related to line,
              transformer, meter, feeder or area supply.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Urdu Guide: میپکو لوڈ شیڈنگ اور بجلی بند ہونے کی معلومات
            </h2>

            <p className="mt-4 leading-9 text-slate-700">
              میپکو لوڈ شیڈنگ کا مطلب ہے کسی علاقے، فیڈر یا شہر میں بجلی کی
              عارضی بندش۔ یہ بندش شیڈول کے مطابق، فیڈر مرمت، تکنیکی خرابی،
              ٹرانسفارمر مسئلہ یا ایمرجنسی بریک ڈاؤن کی وجہ سے ہو سکتی ہے۔
            </p>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              بجلی بند ہو تو پہلے کیا چیک کریں؟
            </h3>

            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-9 text-slate-700">
              <li>دیکھیں بجلی صرف آپ کے گھر میں بند ہے یا پورے علاقے میں۔</li>
              <li>قریبی گھروں یا دکانوں سے بھی تصدیق کریں۔</li>
              <li>اپنا ریفرنس نمبر اور علاقے کا نام نوٹ رکھیں۔</li>
              <li>متعلقہ میپکو دفتر یا سپورٹ چینل سے رابطہ کریں۔</li>
              <li>اگر مسئلہ زیادہ دیر رہے تو شکایت نمبر ضرور نوٹ کریں۔</li>
            </ol>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              حفاظتی احتیاط
            </h3>

            <p className="mt-4 leading-9 text-slate-700">
              ٹوٹی ہوئی تار، کھمبے، ٹرانسفارمر یا اسپارکنگ والی جگہ کو ہاتھ نہ
              لگائیں۔ ایسے حالات میں فوراً متعلقہ حکام کو اطلاع دیں اور خود
              مرمت کرنے کی کوشش نہ کریں۔
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              FAQs About MEPCO Load Shedding
            </h2>

            <div className="mt-5 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="sticky top-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-900">
              Related MEPCO Guides
            </h2>

            <div className="mt-4 space-y-3">
              <Link href="/mepco-complaint-tracking-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Complaint Tracking Guide
              </Link>

              <Link href="/mepco-transformer-complaint-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Transformer Complaint Guide
              </Link>

              <Link href="/mepco-meter-complaint-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Meter Complaint Guide
              </Link>

              <Link href="/mepco-peak-hours-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Peak Hours Guide
              </Link>

              <Link href="/mepco-disconnection-reconnection-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Disconnection & Reconnection
              </Link>

              <Link href="/" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                MEPCO Online Bill Check
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <h2 className="text-lg font-bold text-slate-900">
            Important Disclaimer
          </h2>
          <p className="mt-2 leading-7 text-slate-700">
            This website is an independent informational guide and is not the
            official MEPCO website. Load shedding schedules, feeder shutdowns,
            outage updates and restoration timings may change. Always verify
            urgent or official outage information from MEPCO office, official
            portal or official customer support.
          </p>
        </div>
      </section>
    </main>
  );
}