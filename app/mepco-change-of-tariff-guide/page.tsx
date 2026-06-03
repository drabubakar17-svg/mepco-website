import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Change of Tariff Guide 2026 | Domestic, Commercial & Industrial",
  description:
    "Complete MEPCO change of tariff guide in English and Urdu. Learn how to change electricity tariff category, domestic to commercial, commercial to domestic, documents, process and FAQs.",
  keywords: [
    "MEPCO change of tariff",
    "MEPCO tariff change",
    "MEPCO domestic to commercial",
    "MEPCO commercial to domestic",
    "MEPCO tariff conversion",
    "MEPCO electricity tariff category",
    "MEPCO connection category change",
    "میپکو ٹیرف تبدیلی",
    "میپکو گھریلو سے کمرشل",
    "میپکو کمرشل سے گھریلو",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-change-of-tariff-guide",
  },
};

const tariffTypes = [
  {
    title: "Domestic to Commercial",
    text: "When a home connection is being used for shop, office, clinic, academy or business activity.",
  },
  {
    title: "Commercial to Domestic",
    text: "When a premises is no longer used for business and the consumer wants domestic category.",
  },
  {
    title: "Load or Usage Change",
    text: "When electricity usage pattern changes and the existing tariff category no longer matches actual use.",
  },
  {
    title: "Correction of Wrong Tariff",
    text: "When the bill shows an incorrect tariff category and needs official correction.",
  },
];

const faqs = [
  {
    q: "How can I change MEPCO tariff category?",
    a: "Consumers usually need to submit an application to the relevant MEPCO office with CNIC, bill reference number, ownership or authorization documents and required supporting proof.",
  },
  {
    q: "Can I change domestic connection to commercial?",
    a: "Yes, if the premises is being used for business activity, the consumer may apply for tariff conversion according to MEPCO rules and official approval.",
  },
  {
    q: "What documents are required for tariff change?",
    a: "Common documents may include CNIC copy, latest bill, reference number, ownership proof, application and business or usage-related documents where required.",
  },
  {
    q: "Does tariff change affect electricity bill?",
    a: "Yes, tariff category can affect unit rates, fixed charges, taxes and other billing components. Consumers should verify applicable rules from MEPCO.",
  },
];

export default function MepcoChangeOfTariffGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-5 text-sm">
            <Link href="/" className="text-green-100 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-green-200">/</span>
            <span>MEPCO Change of Tariff Guide</span>
          </div>

          <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            MEPCO Consumer Service Guide 2026
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
            MEPCO Change of Tariff Guide: Domestic, Commercial & Category
            Conversion
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            This guide explains how MEPCO consumers can understand electricity
            tariff category change, domestic to commercial conversion,
            commercial to domestic conversion, required documents, process and
            important consumer tips.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_320px]">
        <article className="space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              What Is MEPCO Change of Tariff?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              MEPCO change of tariff means changing the electricity connection
              category according to actual usage. For example, if a premises is
              being used for business activity, the connection may need to move
              from domestic to commercial category after official approval.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Tariff category is important because it may affect unit rates,
              fixed charges, taxes, billing rules and consumer obligations. A
              wrong tariff category can create billing issues or future
              objections.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Common Tariff Change Situations
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {tariffTypes.map((item) => (
                <div key={item.title} className="rounded-xl bg-slate-50 p-5">
                  <h3 className="font-bold text-green-800">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Domestic to Commercial Tariff Change
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              If a domestic connection is being used for a shop, clinic, office,
              tuition academy, warehouse, salon, workshop or other business use,
              MEPCO may require tariff conversion from domestic to commercial.
              The consumer should apply through the relevant office and follow
              the official procedure.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Business use on a domestic tariff can create future billing
              objections. It is better to keep the connection category aligned
              with actual usage.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Commercial to Domestic Tariff Change
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              If a premises was previously used for commercial activity but is
              now used only for residential purposes, the consumer may request
              tariff conversion to domestic category. MEPCO may verify the
              premises, documents and actual usage before approval.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              The final decision depends on official rules, site verification
              and consumer account status.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Step-by-Step Tariff Change Process
            </h2>

            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8 text-slate-700">
              <li>Check your current tariff category on the electricity bill.</li>
              <li>Confirm whether your actual usage matches the current tariff.</li>
              <li>Prepare CNIC, latest bill and ownership or authorization proof.</li>
              <li>Write an application for tariff category change.</li>
              <li>Submit documents at the relevant MEPCO subdivision office.</li>
              <li>Follow office instructions for inspection or verification.</li>
              <li>Clear any dues or required charges if applicable.</li>
              <li>Check future bills to confirm the tariff has been updated.</li>
            </ol>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Documents Usually Required
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
              <li>Copy of CNIC</li>
              <li>Latest MEPCO electricity bill</li>
              <li>14-digit reference number</li>
              <li>Application for tariff change</li>
              <li>Proof of ownership or authorization</li>
              <li>Business proof, where commercial tariff is requested</li>
              <li>Any previous correspondence or correction request, if available</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Tariff Change vs Name Change vs Load Extension
            </h2>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="p-3">Service</th>
                    <th className="p-3">Purpose</th>
                    <th className="p-3">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 font-medium">Tariff Change</td>
                    <td className="p-3">Change usage category.</td>
                    <td className="p-3">Domestic to commercial.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Name Change</td>
                    <td className="p-3">Change consumer ownership record.</td>
                    <td className="p-3">Transfer bill to new owner.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Load Extension</td>
                    <td className="p-3">Increase sanctioned load.</td>
                    <td className="p-3">Add more appliances or machinery.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Urdu Guide: میپکو ٹیرف تبدیل کروانے کا طریقہ
            </h2>

            <p className="mt-4 leading-9 text-slate-700">
              میپکو ٹیرف تبدیلی کا مطلب ہے بجلی کے کنکشن کی کیٹیگری کو اصل
              استعمال کے مطابق تبدیل کروانا۔ مثال کے طور پر اگر گھر کے کنکشن کو
              دکان، دفتر، کلینک یا کاروباری استعمال کے لیے استعمال کیا جا رہا ہے
              تو گھریلو ٹیرف کو کمرشل ٹیرف میں تبدیل کروانے کی ضرورت ہو سکتی ہے۔
            </p>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              ٹیرف تبدیلی کے لیے عام طریقہ
            </h3>

            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-9 text-slate-700">
              <li>اپنے بل پر موجود موجودہ ٹیرف کیٹیگری چیک کریں۔</li>
              <li>دیکھیں کہ اصل استعمال اسی کیٹیگری کے مطابق ہے یا نہیں۔</li>
              <li>شناختی کارڈ، تازہ بل اور ملکیت کے کاغذات تیار کریں۔</li>
              <li>ٹیرف تبدیلی کی درخواست لکھیں۔</li>
              <li>متعلقہ میپکو دفتر میں درخواست جمع کروائیں۔</li>
              <li>اگر ضروری ہو تو سائٹ ویریفیکیشن کروائیں۔</li>
              <li>اگلے بل میں ٹیرف تبدیلی ضرور چیک کریں۔</li>
            </ol>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              ضروری بات
            </h3>

            <p className="mt-4 leading-9 text-slate-700">
              اگر کنکشن کا استعمال کاروباری ہو اور ٹیرف گھریلو ہو تو مستقبل میں
              بلنگ یا قانونی مسئلہ بن سکتا ہے۔ اس لیے کنکشن کیٹیگری کو اصل
              استعمال کے مطابق رکھنا بہتر ہے۔
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              FAQs About MEPCO Change of Tariff
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
              <Link href="/mepco-tariff-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Tariff Guide
              </Link>

              <Link href="/mepco-name-change-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Name Change Guide
              </Link>

              <Link href="/mepco-load-extension-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Load Extension Guide
              </Link>

              <Link href="/mepco-new-connection-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                New Connection Guide
              </Link>

              <Link href="/mepco-demand-notice-guide" className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50">
                Demand Notice Guide
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
            official MEPCO website. Tariff conversion rules, documents, charges
            and approval process may change. Always verify final requirements
            from MEPCO office, official portal or official customer support.
          </p>
        </div>
      </section>
    </main>
  );
}