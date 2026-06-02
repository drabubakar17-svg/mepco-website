import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Disconnection & Reconnection Guide 2026 | Restore Electricity",
  description:
    "Complete MEPCO disconnection and reconnection guide in English and Urdu. Learn why electricity connection is disconnected, how to restore supply after bill payment, documents, process and FAQs.",
  keywords: [
    "MEPCO disconnection",
    "MEPCO reconnection",
    "MEPCO connection disconnected",
    "MEPCO electricity restore",
    "MEPCO reconnection after bill payment",
    "MEPCO disconnected meter",
    "MEPCO bill unpaid disconnection",
    "میپکو کنکشن بحالی",
    "میپکو بجلی بحال کروانا",
    "میپکو کنکشن کٹ گیا",
  ],
  alternates: {
    canonical:
      "https://mepco-website-jx8g.vercel.app/mepco-disconnection-reconnection-guide",
  },
};

const reasons = [
  {
    title: "Unpaid Electricity Bill",
    text: "Connection may be disconnected when bill dues remain unpaid after the allowed period.",
  },
  {
    title: "Illegal Connection or Theft",
    text: "Unauthorized use, direct supply or meter bypass may lead to disconnection and legal action.",
  },
  {
    title: "Unsafe Wiring or Fault",
    text: "Dangerous wiring, damaged meter, sparking or safety risk may require temporary disconnection.",
  },
  {
    title: "Permanent Disconnection Request",
    text: "A consumer may request permanent disconnection when the connection is no longer needed.",
  },
];

const faqs = [
  {
    q: "How can I restore MEPCO electricity after disconnection?",
    a: "Usually you need to clear outstanding dues, keep payment proof, contact the relevant MEPCO office and follow the official reconnection process.",
  },
  {
    q: "Can MEPCO disconnect electricity for unpaid bills?",
    a: "Electricity supply may be disconnected when dues remain unpaid according to applicable rules and notices.",
  },
  {
    q: "What documents are needed for reconnection?",
    a: "Commonly required details may include reference number, CNIC copy, paid bill receipt, application and consumer account information.",
  },
  {
    q: "Is reconnection immediate after bill payment?",
    a: "Reconnection time may vary depending on payment confirmation, office process, area workload and technical availability.",
  },
];

export default function MepcoDisconnectionReconnectionGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-5 text-sm">
            <Link href="/" className="text-green-100 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-green-200">/</span>
            <span>MEPCO Disconnection & Reconnection Guide</span>
          </div>

          <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            MEPCO Consumer Service Guide 2026
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
            MEPCO Disconnection & Reconnection Guide: Restore Electricity Supply
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            This guide explains common reasons for MEPCO electricity
            disconnection, how consumers can request reconnection after bill
            payment, what documents may be required, and how to avoid future
            supply disconnection.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_320px]">
        <article className="space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is MEPCO Disconnection?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              MEPCO disconnection means electricity supply to a consumer
              connection is stopped temporarily or permanently. This may happen
              due to unpaid bills, safety issues, illegal electricity use,
              consumer request, or other official reasons.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              In most consumer cases, reconnection depends on clearing dues,
              completing required documentation and following the process advised
              by the relevant MEPCO office or subdivision.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Common Reasons for MEPCO Disconnection
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {reasons.map((item) => (
                <div key={item.title} className="rounded-xl bg-slate-50 p-5">
                  <h3 className="font-bold text-green-800">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              How to Restore MEPCO Connection After Bill Payment
            </h2>

            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-700">
              <li>Check your latest MEPCO bill and total outstanding amount.</li>
              <li>Pay all pending dues through an approved payment method.</li>
              <li>Keep payment receipt, transaction ID or bank/app proof safe.</li>
              <li>Visit or contact your relevant MEPCO subdivision office.</li>
              <li>Provide your reference number, CNIC and payment proof.</li>
              <li>Submit reconnection request if required by the office.</li>
              <li>Follow up until electricity supply is restored.</li>
            </ol>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Documents Usually Required for Reconnection
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
              <li>Copy of CNIC</li>
              <li>14-digit MEPCO reference number</li>
              <li>Latest electricity bill</li>
              <li>Paid bill receipt or transaction proof</li>
              <li>Application for reconnection, if requested</li>
              <li>Proof of ownership or authorization, where required</li>
              <li>Previous complaint or disconnection notice, if available</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Temporary vs Permanent Disconnection
            </h2>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="p-3">Type</th>
                    <th className="p-3">Meaning</th>
                    <th className="p-3">Reconnection Possibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 font-medium">Temporary</td>
                    <td className="p-3">Supply stopped for unpaid bill or issue.</td>
                    <td className="p-3">Usually possible after dues/process.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Permanent</td>
                    <td className="p-3">Connection closed officially.</td>
                    <td className="p-3">May require fresh process or official approval.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Safety-Based</td>
                    <td className="p-3">Stopped due to danger or fault.</td>
                    <td className="p-3">After inspection and safety correction.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Important Tips to Avoid Disconnection
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
              <li>Pay electricity bills before due date.</li>
              <li>Use bill due date and duplicate bill guides regularly.</li>
              <li>Keep payment receipts or digital transaction IDs saved.</li>
              <li>Do not use unauthorized electricity connections.</li>
              <li>Report wrong bills before the due date where possible.</li>
              <li>Check meter reading and consumed units every month.</li>
              <li>Contact MEPCO office early if you cannot pay a high bill.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Urdu Guide: میپکو کنکشن کٹ جائے تو کیا کریں؟
            </h2>

            <p className="mt-4 leading-9 text-slate-700">
              اگر میپکو بجلی کا کنکشن بل ادا نہ کرنے، کسی تکنیکی مسئلے، حفاظتی
              وجہ یا کسی اور سرکاری وجہ سے منقطع ہو جائے تو صارف کو سب سے پہلے
              اپنے بقایاجات، بل، ریفرنس نمبر اور ادائیگی کا ثبوت چیک کرنا
              چاہیے۔
            </p>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              بجلی بحال کروانے کا عام طریقہ
            </h3>

            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-9 text-slate-700">
              <li>اپنا تازہ بل اور بقایاجات چیک کریں۔</li>
              <li>تمام واجبات ادا کریں۔</li>
              <li>ادائیگی کی رسید یا ٹرانزیکشن آئی ڈی محفوظ رکھیں۔</li>
              <li>متعلقہ میپکو دفتر یا سب ڈویژن سے رابطہ کریں۔</li>
              <li>ریفرنس نمبر، شناختی کارڈ اور ادائیگی کا ثبوت فراہم کریں۔</li>
              <li>اگر ضروری ہو تو بحالی کی درخواست جمع کروائیں۔</li>
            </ol>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              کنکشن دوبارہ بحال ہونے میں وقت کیوں لگتا ہے؟
            </h3>

            <p className="mt-4 leading-9 text-slate-700">
              بجلی بحال ہونے کا وقت ادائیگی کی تصدیق، دفتر کے عمل، تکنیکی ٹیم
              کی دستیابی اور علاقے کے کام کے بوجھ پر منحصر ہو سکتا ہے۔
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              FAQs About MEPCO Disconnection & Reconnection
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
              <Link href="/mepco-bill-due-date-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Bill Due Date Guide
              </Link>

              <Link href="/mepco-bill-installment-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Bill Installment Guide
              </Link>

              <Link href="/mepco-bill-payment-methods-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Bill Payment Methods
              </Link>

              <Link href="/mepco-wrong-bill-solution" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Wrong Bill Solution
              </Link>

              <Link href="/mepco-complaint-tracking-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Complaint Tracking Guide
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
            official MEPCO website. Disconnection and reconnection rules,
            charges, documents and timelines may change. Always verify final
            requirements from MEPCO office, official portal or official customer
            support.
          </p>
        </div>
      </section>
    </main>
  );
}