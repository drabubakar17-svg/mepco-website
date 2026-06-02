import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Security Deposit Guide 2026 | Refund, Rules & New Connection",
  description:
    "Complete MEPCO security deposit guide in English and Urdu. Learn what MEPCO security deposit is, why it is charged, refund process, documents, new connection deposit and consumer tips.",
  keywords: [
    "MEPCO security deposit",
    "MEPCO deposit refund",
    "MEPCO new connection security deposit",
    "MEPCO demand notice deposit",
    "MEPCO security fee",
    "MEPCO consumer guide",
    "MEPCO deposit rules",
    "MEPCO refund process",
    "میپکو سکیورٹی ڈپازٹ",
    "میپکو ڈپازٹ واپسی",
    "میپکو نیا کنکشن ڈپازٹ",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-security-deposit",
  },
};

const relatedGuides = [
  { title: "MEPCO Online Bill Check", href: "/" },
  { title: "MEPCO Bill Urdu Guide", href: "/mepco-bill-urdu" },
  { title: "MEPCO New Connection Guide", href: "/mepco-new-connection" },
  { title: "MEPCO Complaint Guide", href: "/mepco-complaint" },
  { title: "MEPCO Bill Calculator", href: "/mepco-bill-calculator" },
  { title: "MEPCO Meter Reading Guide", href: "/mepco-meter-reading-guide" },
  { title: "Multan Bill Check", href: "/multan-bill-check" },
  { title: "Khanewal Bill Check", href: "/khanewal-bill-check" },
];

const faqs = [
  {
    q: "What is MEPCO security deposit?",
    a: "MEPCO security deposit is a refundable security amount usually linked with an electricity connection. It helps secure unpaid dues and is handled according to applicable electricity rules.",
  },
  {
    q: "Is MEPCO security deposit refundable?",
    a: "In many cases, the security deposit may be refundable or adjustable when the connection is permanently closed, subject to clearance of dues and official verification.",
  },
  {
    q: "Where can I check the exact security deposit amount?",
    a: "The exact amount is usually mentioned on the official demand notice or can be confirmed from the relevant MEPCO office because rates and rules may change.",
  },
  {
    q: "Is security deposit required for a new MEPCO connection?",
    a: "New electricity connections normally include different charges in the demand notice, and security deposit may be one of the required amounts depending on category and load.",
  },
];

export default function MepcoSecurityDepositPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-5 text-sm">
            <Link href="/" className="text-green-100 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-green-200">/</span>
            <span>MEPCO Security Deposit</span>
          </div>

          <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            MEPCO Authority Guide 2026
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
            MEPCO Security Deposit Guide: Rules, Refund, New Connection & Urdu
            Help
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            This guide explains what MEPCO security deposit means, why it is
            charged, how it is linked with new electricity connections, when a
            refund may be possible, and what documents consumers usually need.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_320px]">
        <article className="space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is MEPCO Security Deposit?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              MEPCO security deposit is an amount linked with an electricity
              connection as financial security. It is usually collected during a
              new connection process through the demand notice. The amount may
              depend on the type of connection, sanctioned load, tariff category,
              and applicable consumer rules.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              It should not be confused with monthly electricity charges. A
              monthly bill is for consumed electricity, while a security deposit
              is generally a connection-related security amount maintained under
              the consumer account.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Why Does MEPCO Take Security Deposit?
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
              <li>To secure unpaid electricity dues.</li>
              <li>To reduce risk when a new consumer account is opened.</li>
              <li>To keep a security amount attached with the connection.</li>
              <li>To follow electricity distribution company procedures.</li>
              <li>To support recovery if a consumer leaves unpaid bills.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Security Deposit for New MEPCO Connection
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              When a consumer applies for a new MEPCO connection, the department
              may issue a demand notice. This demand notice can include different
              charges such as connection cost, service line charges, meter
              charges, and security deposit where applicable.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              The consumer should always read the official demand notice
              carefully because the exact deposit amount can vary. Avoid relying
              on old screenshots or outdated social media posts for the latest
              charges.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              How Is MEPCO Security Deposit Calculated?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              The deposit can be affected by several factors, including consumer
              category, sanctioned load, tariff type, phase type, and current
              company rules. Residential, commercial, agricultural, and
              industrial consumers may not have the same requirements.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="p-3">Factor</th>
                    <th className="p-3">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 font-medium">Connection Type</td>
                    <td className="p-3">Domestic, commercial, tube well, etc.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Sanctioned Load</td>
                    <td className="p-3">Higher load may affect charges.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Tariff Category</td>
                    <td className="p-3">Different tariffs can have different rules.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Official Demand Notice</td>
                    <td className="p-3">Final payable amount is shown there.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              MEPCO Security Deposit Refund Process
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Security deposit refund may be possible when a connection is
              permanently disconnected or closed, provided that all outstanding
              dues are cleared and the account is verified. The exact process can
              vary by office and consumer case.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Common Refund Steps
            </h3>
            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-700">
              <li>Visit the relevant MEPCO subdivision or customer service office.</li>
              <li>Submit application for permanent disconnection or deposit refund.</li>
              <li>Provide consumer reference number and CNIC details.</li>
              <li>Clear all pending electricity bills and dues.</li>
              <li>Complete official verification and account closing process.</li>
              <li>Follow the refund or adjustment procedure advised by MEPCO.</li>
            </ol>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Required Documents
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Document requirements can vary, but consumers are commonly asked
              for identity, connection, and account-related documents.
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
              <li>Copy of CNIC</li>
              <li>Consumer bill or reference number</li>
              <li>Application for refund or adjustment</li>
              <li>Proof of ownership or authorization, where required</li>
              <li>Previous payment receipts, if available</li>
              <li>Bank details if refund is processed through bank transfer</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Common Problems & Solutions
            </h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">
                  Problem: Deposit amount is unclear
                </h3>
                <p className="mt-2 text-slate-700">
                  Check your official demand notice or visit the subdivision
                  office. Do not rely on unofficial old rate lists.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">
                  Problem: Refund is delayed
                </h3>
                <p className="mt-2 text-slate-700">
                  Confirm that all dues are cleared and your application has been
                  entered properly in the relevant office record.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">
                  Problem: Name or ownership mismatch
                </h3>
                <p className="mt-2 text-slate-700">
                  You may need ownership proof, authorization, or name correction
                  documents before refund or adjustment.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Urdu Guide: میپکو سکیورٹی ڈپازٹ
            </h2>

            <p className="mt-4 leading-9 text-slate-700">
              میپکو سکیورٹی ڈپازٹ وہ رقم ہے جو عام طور پر نئے بجلی کنکشن کے وقت
              جمع کروائی جاتی ہے۔ یہ رقم صارف کے اکاؤنٹ کے ساتھ بطور سکیورٹی
              منسلک رہتی ہے تاکہ اگر بجلی کے واجبات باقی رہ جائیں تو کمپنی کے
              پاس ایک حفاظتی رقم موجود ہو۔
            </p>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              میپکو سکیورٹی ڈپازٹ کیوں لیا جاتا ہے؟
            </h3>
            <ul className="mt-4 list-disc space-y-3 pl-6 leading-9 text-slate-700">
              <li>بقایاجات کے تحفظ کے لیے</li>
              <li>نئے کنکشن کی مالی سکیورٹی کے لیے</li>
              <li>کنکشن کے لوڈ اور کیٹیگری کے مطابق ضابطے پورے کرنے کے لیے</li>
              <li>صارف کے اکاؤنٹ کو محفوظ رکھنے کے لیے</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              کیا سکیورٹی ڈپازٹ واپس مل سکتا ہے؟
            </h3>
            <p className="mt-4 leading-9 text-slate-700">
              اگر کنکشن مستقل طور پر بند کروایا جائے اور تمام بقایاجات ادا ہو
              چکے ہوں تو سکیورٹی ڈپازٹ کی واپسی یا ایڈجسٹمنٹ ممکن ہو سکتی ہے۔
              حتمی معلومات کے لیے متعلقہ میپکو دفتر سے رابطہ کرنا ضروری ہے۔
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              FAQs About MEPCO Security Deposit
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
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50"
                >
                  {guide.title}
                </Link>
              ))}
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
            official MEPCO website. Security deposit rates, refund procedures,
            and connection rules may change. Always verify final amounts and
            official requirements from MEPCO office, demand notice, or official
            customer support.
          </p>
        </div>
      </section>
    </main>
  );
}
