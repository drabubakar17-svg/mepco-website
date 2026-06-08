import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Complaint Tracking Guide 2026 | Status, Number & Online Help",
  description:
    "Complete MEPCO complaint tracking guide in English and Urdu. Learn how to track MEPCO complaints, check status, report meter, transformer, billing and power supply issues.",
  keywords: [
    "MEPCO complaint tracking",
    "MEPCO complaint status",
    "MEPCO complaint number",
    "MEPCO online complaint",
    "MEPCO bill complaint",
    "MEPCO meter complaint",
    "MEPCO transformer complaint",
    "MEPCO bijli complaint",
    "میپکو شکایت",
    "میپکو کمپلینٹ ٹریکنگ",
    "میپکو شکایت نمبر",
  ],
  alternates: {
    canonical:
      "https://www.mepcoonlinebill.net/mepco-complaint-tracking-guide",
  },
};

const complaintTypes = [
  {
    title: "Billing Complaint",
    text: "Wrong bill, excessive charges, arrears, FPA, QTA or incorrect reading issues.",
  },
  {
    title: "Meter Complaint",
    text: "Fast meter, damaged meter, display issue, stopped meter or wrong reading.",
  },
  {
    title: "Transformer Complaint",
    text: "Transformer fault, low voltage, sparking, breakdown or repeated supply failure.",
  },
  {
    title: "Power Supply Complaint",
    text: "Electricity outage, phase problem, low voltage or area supply interruption.",
  },
];

const faqs = [
  {
    q: "How can I track a MEPCO complaint?",
    a: "You can track a MEPCO complaint by using your complaint/reference details through the relevant official complaint channel or by contacting the concerned MEPCO office.",
  },
  {
    q: "What details are needed for MEPCO complaint tracking?",
    a: "You may need your reference number, consumer name, mobile number, complaint type, area details and complaint number if already registered.",
  },
  {
    q: "Can I complain about a wrong MEPCO bill?",
    a: "Yes, consumers can report wrong bill, overbilling, meter reading error, arrears or unexpected charges through the relevant MEPCO complaint process.",
  },
  {
    q: "Can transformer complaints be tracked?",
    a: "Transformer-related complaints may be followed through the complaint number, local subdivision office or official helpline channel.",
  },
];

export default function MepcoComplaintTrackingGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-5 text-sm">
            <Link href="/" className="text-green-100 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-green-200">/</span>
            <span>MEPCO Complaint Tracking Guide</span>
          </div>

          <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            MEPCO Consumer Help Guide 2026
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
            MEPCO Complaint Tracking Guide: Check Status, Report Issues & Get
            Help
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            This guide explains how MEPCO consumers can understand complaint
            tracking, what information is usually needed, which complaint types
            are common, and how to follow up on billing, meter, transformer and
            power supply issues.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_320px]">
        <article className="space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is MEPCO Complaint Tracking?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              MEPCO complaint tracking means following the progress of a
              registered electricity-related complaint. A consumer may need to
              track a complaint when there is a wrong bill, meter issue,
              transformer fault, low voltage, power outage, or delay in service.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Complaint tracking helps consumers confirm whether the complaint
              has been received, forwarded, checked, resolved, or still pending
              with the relevant office or technical team.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Information Usually Needed for Complaint Tracking
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
              <li>14-digit MEPCO reference number</li>
              <li>Customer ID, if available</li>
              <li>Consumer name and mobile number</li>
              <li>Complaint number or tracking number</li>
              <li>Subdivision, city or area name</li>
              <li>Complaint category such as bill, meter, transformer or supply</li>
              <li>Short explanation of the issue</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Common MEPCO Complaint Types
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {complaintTypes.map((item) => (
                <div key={item.title} className="rounded-xl bg-slate-50 p-5">
                  <h3 className="font-bold text-green-800">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Step-by-Step Complaint Tracking Process
            </h2>

            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-700">
              <li>Keep your latest electricity bill or reference number ready.</li>
              <li>Note your complaint number after registering the complaint.</li>
              <li>Contact the relevant official complaint channel or subdivision.</li>
              <li>Provide your reference number and complaint number clearly.</li>
              <li>Ask whether the complaint is pending, forwarded or resolved.</li>
              <li>If the issue is not resolved, follow up with written details.</li>
              <li>For billing issues, keep copies of old bills and meter photos.</li>
            </ol>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              MEPCO Billing Complaint Tracking
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Billing complaints are common when consumers receive a bill with
              unexpected charges, wrong meter reading, arrears, late payment
              surcharge, FPA, QTA or incorrect payable amount. For bill-related
              complaints, consumers should keep the current bill, previous bills,
              meter photo and payment receipts available.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              If your bill is unusually high, first compare meter reading,
              consumed units, previous balance, taxes, FPA and arrears. Then
              submit a complaint through the relevant office or official channel.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Meter and Transformer Complaint Tracking
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Meter complaints may include fast meter, stopped meter, display
              issue, wrong reading or damaged meter. Transformer complaints may
              include low voltage, repeated tripping, sparking, breakdown or
              area-wide supply problem.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              For technical complaints, provide accurate location, nearby pole
              number if available, area name, contact number and clear issue
              details. In urgent electrical safety situations, avoid touching
              wires, poles, transformers or damaged equipment.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Urdu Guide: میپکو شکایت ٹریکنگ
            </h2>

            <p className="mt-4 leading-9 text-slate-700">
              میپکو شکایت ٹریکنگ کا مطلب ہے کہ صارف اپنی درج شدہ شکایت کی
              صورتحال معلوم کرے۔ اگر بجلی کا بل غلط ہو، میٹر میں مسئلہ ہو،
              ٹرانسفارمر خراب ہو، کم وولٹیج ہو یا بجلی کی سپلائی بند ہو تو
              صارف شکایت درج کروا کر اس کا اسٹیٹس معلوم کر سکتا ہے۔
            </p>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              شکایت ٹریک کرنے کے لیے عام معلومات
            </h3>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-9 text-slate-700">
              <li>چودہ ہندسوں کا ریفرنس نمبر</li>
              <li>صارف کا نام اور موبائل نمبر</li>
              <li>شکایت نمبر یا ٹریکنگ نمبر</li>
              <li>علاقہ، سب ڈویژن یا شہر کا نام</li>
              <li>شکایت کی قسم: بل، میٹر، ٹرانسفارمر یا سپلائی</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              اگر شکایت حل نہ ہو تو کیا کریں؟
            </h3>

            <p className="mt-4 leading-9 text-slate-700">
              اگر شکایت حل نہ ہو تو دوبارہ فالو اپ کریں، شکایت نمبر نوٹ رکھیں،
              پرانے بل اور میٹر کی تصویر محفوظ رکھیں، اور متعلقہ میپکو دفتر سے
              واضح طور پر اسٹیٹس معلوم کریں۔
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              FAQs About MEPCO Complaint Tracking
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
              Related Complaint Guides
            </h2>

            <div className="mt-4 space-y-3">
              <Link href="/mepco-meter-complaint-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Meter Complaint Guide
              </Link>

              <Link href="/mepco-transformer-complaint-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Transformer Complaint Guide
              </Link>

              <Link href="/mepco-wrong-bill-solution" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Wrong Bill Solution
              </Link>

              <Link href="/mepco-bill-correction-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Bill Correction Guide
              </Link>

              <Link href="/mepco-bill-not-received-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Bill Not Received Guide
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
            official MEPCO website. Complaint rules, helpline channels and
            tracking procedures may change. Always verify urgent or official
            complaint information from MEPCO office, official portal or official
            customer support.
          </p>
        </div>
      </section>
    </main>
  );
}
