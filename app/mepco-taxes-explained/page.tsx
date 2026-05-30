import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const currentYear = new Date().getFullYear();

const taxes = [
  {
    name: "GST",
    full: "General Sales Tax",
    detail:
      "GST government tax hota hai jo electricity bill ke applicable charges par add hota hai.",
  },
  {
    name: "FPA",
    full: "Fuel Price Adjustment",
    detail:
      "FPA fuel cost ke hisaab se monthly change ho sakta hai. Isi wajah se bill kabhi zyada ya kam aa sakta hai.",
  },
  {
    name: "QTA",
    full: "Quarterly Tariff Adjustment",
    detail:
      "QTA quarterly tariff adjustment hoti hai jo official tariff changes ke baad bill me aa sakti hai.",
  },
  {
    name: "FC Surcharge",
    full: "Financing Cost Surcharge",
    detail:
      "FC surcharge power sector financing cost support ke liye electricity bill me add ho sakta hai.",
  },
  {
    name: "Electricity Duty",
    full: "Provincial Electricity Duty",
    detail:
      "Electricity duty provincial levy hoti hai jo consumption charges par apply ho sakti hai.",
  },
  {
    name: "PTV Fee",
    full: "Pakistan Television Fee",
    detail:
      "PTV fee aik fixed government fee hoti hai jo aksar domestic electricity bills me show hoti hai.",
  },
  {
    name: "Fixed Charges",
    full: "Monthly Fixed Charges",
    detail:
      "Fixed charges connection type, sanctioned load, tariff category aur billing policy ke mutabiq apply ho sakte hain.",
  },
];

export const metadata: Metadata = {
  title: `MEPCO Taxes Explained ${currentYear} | FPA, GST, QTA & Bill Charges`,
  description:
    "MEPCO bill taxes explained in simple English and Urdu. Learn GST, FPA, QTA, FC surcharge, PTV fee, electricity duty, fixed charges and why your MEPCO bill is high.",
  alternates: {
    canonical: "https://mepco-website-jx8g.vercel.app/mepco-taxes-explained",
  },
  openGraph: {
    title: `MEPCO Taxes Explained ${currentYear}`,
    description:
      "Understand MEPCO bill taxes, FPA, GST, QTA, fixed charges and Urdu explanation of why electricity bill increases.",
    url: "https://mepco-website-jx8g.vercel.app/mepco-taxes-explained",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MepcoTaxesExplainedPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What taxes are included in MEPCO bill?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "MEPCO bills may include GST, FPA, QTA, FC surcharge, electricity duty, PTV fee, fixed charges, arrears, late payment surcharge and other official adjustments.",
            },
          },
          {
            "@type": "Question",
            name: "Why does FPA change every month?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "FPA changes because electricity generation fuel cost can vary every month. It may increase or decrease the final electricity bill.",
            },
          },
          {
            "@type": "Question",
            name: "Why is my MEPCO bill high even with same units?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Your MEPCO bill may increase due to FPA, QTA, GST, tariff slab change, arrears, late payment surcharge, fixed charges or other government adjustments.",
            },
          },
          {
            "@type": "Question",
            name: "Can I estimate MEPCO taxes online?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can estimate MEPCO taxes using an online bill calculator, but the official bill may differ because taxes, FPA, QTA and tariff rates can change.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="mepco-taxes-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <article className="mx-auto max-w-5xl px-4 py-12">
          <nav
            className="mb-3 text-xs font-bold uppercase tracking-wider text-green-700"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:underline">
              MEPCO Home
            </Link>{" "}
            &gt; <span>Taxes Explained</span>
          </nav>

          <header className="max-w-4xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              MEPCO Taxes Explained {currentYear}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              MEPCO electricity bill me different taxes, surcharges aur
              government adjustments add ho sakte hain. Is guide me hum{" "}
              <strong>GST</strong>, <strong>FPA</strong>, <strong>QTA</strong>,{" "}
              <strong>FC surcharge</strong>, <strong>electricity duty</strong>,{" "}
              <strong>PTV fee</strong>, fixed charges aur bill zyada aane ki
              common reasons simple English aur Urdu me explain kar rahe hain.
            </p>
          </header>

          <section className="mt-10 grid gap-4 sm:grid-cols-2">
            {taxes.map((tax) => (
              <div
                key={tax.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                  {tax.name}
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-950">
                  {tax.full}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {tax.detail}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              Why Your MEPCO Bill Amount Changes
            </h2>

            <p className="mt-3 leading-relaxed text-slate-700">
              Kabhi kabhi units almost same hotay hain lekin bill zyada aa jata
              hai. Iski wajah sirf units nahi hoti. FPA, QTA, GST, tariff slab,
              arrears, late payment surcharge aur government adjustments final
              payable amount ko change kar sakte hain.
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-700">
              <li>Higher units aapko higher tariff slab me le ja sakte hain.</li>
              <li>FPA monthly fuel cost ke mutabiq change ho sakta hai.</li>
              <li>QTA quarterly tariff adjustment ki wajah se aa sakta hai.</li>
              <li>GST aur electricity duty applicable bill value par add hoti hain.</li>
              <li>Arrears ya late payment surcharge total bill ko increase kar sakta hai.</li>
            </ul>
          </section>

          <section className="mt-10 space-y-6 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-bold text-slate-950">
              FPA, QTA and GST in Simple Words
            </h2>

            <p>
              <strong>FPA</strong> ka matlab Fuel Price Adjustment hai. Ye fuel
              cost ke difference ki wajah se bill me add ya adjust ho sakta hai.{" "}
              <strong>QTA</strong> quarterly tariff adjustment hoti hai.{" "}
              <strong>GST</strong> aik government tax hai jo electricity bill ke
              applicable charges par lagta hai.
            </p>

            <h2 className="text-2xl font-bold text-slate-950">
              How to Estimate Your Bill
            </h2>

            <p>
              Agar aap estimate lagana chahte hain to MEPCO bill calculator use
              karein. Lekin final bill official tariff, FPA, GST, QTA, fixed
              charges, arrears aur latest adjustments ki wajah se different ho
              sakta hai.
            </p>
          </section>

          <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900">
                  Is FPA charged every month?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  FPA month to month change ho sakta hai. Kabhi add hota hai,
                  kabhi reduce hota hai, aur kabhi adjustment ke form me show
                  hota hai.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold text-slate-900">
                  Why is GST added to my electricity bill?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  GST government tax hai jo billing rules aur tariff policy ke
                  mutabiq applicable electricity charges par add hota hai.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold text-slate-900">
                  Why is my MEPCO bill high?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Bill zyada aane ki reasons me higher unit slab, FPA, QTA, GST,
                  arrears, late payment surcharge, fixed charges aur seasonal
                  usage include ho sakte hain.
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold text-slate-900">
                  Can I calculate exact MEPCO taxes online?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Online calculator se estimate mil sakta hai, lekin exact final
                  amount official bill par depend karta hai.
                </p>
              </div>
            </div>
          </section>

          <section
            className="mt-10 rounded-2xl border-2 border-green-600/20 bg-emerald-50/40 p-6 shadow-sm"
            dir="rtl"
          >
            <h2 className="text-2xl font-black text-slate-900">
              MEPCO Taxes Explained (اردو گائیڈ)
            </h2>

            <p className="mt-4 text-base font-medium leading-8 text-slate-700">
              MEPCO بجلی کے بل میں مختلف قسم کے ٹیکس اور سرچارج شامل ہو سکتے
              ہیں، جن میں <strong>GST</strong>، <strong>FPA</strong>،{" "}
              <strong>QTA</strong>، <strong>FC Surcharge</strong>، بجلی ڈیوٹی
              اور <strong>PTV Fee</strong> شامل ہیں۔
            </p>

            <p className="mt-4 text-base font-medium leading-8 text-slate-700">
              اگر آپ سوچ رہے ہیں کہ <strong>میپکو بل زیادہ کیوں آتا ہے</strong>{" "}
              یا <strong>بجلی کے بل میں ایف پی اے کیا ہے</strong>، تو اس کی
              بڑی وجہ ماہانہ فیول پرائس ایڈجسٹمنٹ، کوارٹرلی ٹیرف ایڈجسٹمنٹ،
              ٹیکس، بقایا جات یا لیٹ پیمنٹ سرچارج ہو سکتے ہیں۔
            </p>

            <p className="mt-4 text-base font-medium leading-8 text-slate-700">
              اپنے بجلی کے بل کو بہتر سمجھنے کے لیے ہر چارج کو الگ الگ دیکھیں:
              یونٹ چارجز، ایف پی اے، جی ایس ٹی، کیو ٹی اے، فکسڈ چارجز اور
              دیگر سرکاری ایڈجسٹمنٹس۔
            </p>
          </section>

          <section className="mt-10 rounded-2xl border bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-950">
              Useful MEPCO Tools
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/mepco-bill-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                MEPCO Bill Calculator
              </Link>

              <Link
                href="/mepco-peak-hours-guide"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                MEPCO Peak Hours Guide
              </Link>

              <Link
                href="/mepco-bill-slabs-guide"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                MEPCO Bill Slabs Guide
              </Link>

              <Link
                href="/mepco-new-connection-guide"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                MEPCO New Connection Guide
              </Link>

              <Link
                href="/mepco-reference-number-guide"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                Reference Number Guide
              </Link>

              <Link
                href="/mepco-customer-id-guide"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                Customer ID Guide
              </Link>

              <Link
                href="/"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
              >
                MEPCO Online Bill Check
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}