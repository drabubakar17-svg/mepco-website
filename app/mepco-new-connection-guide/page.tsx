import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO New Connection Guide 2026 | Apply & Track Online",
  description:
    "Aasan tareeqa MEPCO naya meter lagwane ka. Check required documents, online application steps via ENC portal, tracking status, and demand notice details.",
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-new-connection-guide",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Schema matching the text facts perfectly
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "How to apply for a MEPCO new connection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can apply online through the official ENC (Electricity New Connection) portal. Simply fill out the form, upload your property documents, print the application, and submit it to your nearest MEPCO sub-division office."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are needed for a new electricity meter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You need a copy of your CNIC, proof of property ownership (Registry or Fard), a wiring test certificate from an authorized contractor, and a copy of a neighbor's active MEPCO bill."
      }
    },
    {
      "@type": "Question",
      "name": "What is a MEPCO demand notice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A demand notice is the official fee voucher issued by MEPCO after a team verifies your site. It covers the cost of the meter, service cables, and security deposit."
      }
    },
    {
      "@type": "Question",
      "name": "How can I track my application status?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can track your application status online using the ENC tracking portal by entering your unique tracking ID or reference number."
      }
    }
  ],
};

export default function MepcoNewConnectionGuidePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#1e293b] antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header Section */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-[#f1f5f9] px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2 text-sm font-bold text-[#005b2e] transition hover:bg-green-100"
          >
            ← Back to Bill Portal
          </Link>

          <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            MEPCO New Connection <span className="text-[#005b2e]">Guide 2026</span>
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Pakistan me naya electricity meter lagwana pehle bohot mushkil hota tha, lekin ab aap ghar baithe <strong>ENC (Electricity New Connection) portal</strong> ke zariye online apply kar sakte hain. Is guide me hum aapko step-by-step batayenge ke aap apna application form kaise jama kar sakte hain, kaunse documents zaroori hain, aur apna <strong>demand notice status</strong> kaise check kar sakte hain.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/mepco-reference-number-guide"
              className="rounded-xl bg-[#005b2e] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#004221]"
            >
              🔢 Reference Number Guide
            </Link>
            <Link
              href="/mepco-customer-id-guide"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              🆔 Customer ID Guide
            </Link>
            <Link
              href="/mepco-bill-calculator"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              🧮 Bill Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Main Structural Content Grid */}
      <section className="mx-auto max-w-5xl px-4 py-12 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          
          {/* Main Informational Column */}
          <div className="space-y-8">
            
            {/* Step by Step English Breakdown */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-slate-900">
                How to Apply via ENC Portal (Step-by-Step)
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Follow these simple steps to complete your online registration form properly:
              </p>

              <ol className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-black text-[#005b2e]">1</span>
                  <div>
                    <strong>Open Official Portal:</strong> Visit the official ENC portal online and select MEPCO as your electricity distribution company.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-black text-[#005b2e]">2</span>
                  <div>
                    <strong>Select Category & Type:</strong> Choose Domestic (Tariff A-1a) if you are applying for a regular home meter, or Commercial for shop installations.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-black text-[#005b2e]">3</span>
                  <div>
                    <strong>Upload Scanned Copies:</strong> Enter your regular personal details and upload clear, readable scans of your property ownership papers.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-black text-[#005b2e]">4</span>
                  <div>
                    <strong>Submit Physical File:</strong> Print out your online submitted application form, attach the physical copies of documents, and submit this folder to your nearest MEPCO sub-division office.
                  </div>
                </li>
              </ol>
            </div>

            {/* Document Verification Table Check */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-slate-900">
                Required Document Checklist
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Make sure you have these standard documents ready before starting the application:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Attested copy of applicant's valid CNIC",
                  "Property proof verification (Registry or land Fard record)",
                  "No Objection Certificate (NOC) if you live on a rented property",
                  "Wiring test certificate from a registered electrician",
                  "Copy of a neighbor's active residential MEPCO bill",
                ].map((documentItem) => (
                  <div
                    key={documentItem}
                    className="flex items-start gap-2 rounded-xl bg-slate-50 p-4 text-xs font-semibold text-slate-700 leading-normal"
                  >
                    <span className="text-green-600 font-bold">✓</span> {documentItem}
                  </div>
                ))}
              </div>
            </div>

            {/* Timelines and Demand Notice Information */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-slate-900">
                Expected Processing Timelines
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                The general estimated time required for processing and installation usually takes:
              </p>

              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 text-slate-700 border-b border-slate-200">
                    <tr>
                      <th className="p-4 font-black">Process Phase</th>
                      <th className="p-4 font-black">Average Time</th>
                      <th className="p-4 font-black">What Happens?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    <tr>
                      <td className="p-4 font-bold text-slate-900">File Verification</td>
                      <td className="p-4">3 - 7 Days</td>
                      <td className="p-4">MEPCO office clerks verify your submitted ownership papers.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Site Survey</td>
                      <td className="p-4">5 - 10 Days</td>
                      <td className="p-4">MEPCO team visits the site to check nearby pole or transformer distance.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-slate-900">Demand Notice Issuance</td>
                      <td className="p-4">2 - 4 Days</td>
                      <td className="p-4">Your official fee voucher appears online for bank deposit.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Standard English FAQs Area */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-black text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-6 space-y-6 text-sm">
                <div>
                  <h3 className="font-bold text-slate-900">Can I track my new meter application online?</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    Yes, you can check the progress of your application through the official ENC tracking portal using your tracking ID.
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <h3 className="font-bold text-slate-900">Where should I deposit the demand notice voucher?</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    The demand notice voucher can be paid inside any official designated bank branch specified on the voucher slip.
                  </p>
                </div>
              </div>
            </div>

            {/* High-Authority Native Urdu Summary Section */}
            <div className="rounded-2xl border-2 border-green-600/20 bg-emerald-50/40 p-6 shadow-sm md:p-8" dir="rtl">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight font-sans">
                MEPCO New Connection Guide (اردو گائیڈ)
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-700 font-medium">
                MEPCO نیا کنکشن حاصل کرنے کے لیے صارف کو شناختی کارڈ، ملکیت کے کاغذات (رجسٹری یا فرد) اور دیگر مطلوبہ دستاویزات جمع کروانا ہوتی ہیں۔ یہ تمام عمل اب <strong>ENC پورٹل</strong> کے ذریعے آن لائن بھی شروع کیا جا سکتا ہے۔
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 font-medium">
                درخواست آن لائن جمع ہونے کے بعد متعلقہ سب ڈویژنل دفتر آپ کے کاغذات اور جگہ کی تصدیق کرتا ہے، جس کے بعد آفیشل <strong>ڈیمانڈ نوٹس (Demand Notice)</strong> جاری کیا جاتا ہے۔ ڈیمانڈ نوٹس کی فیس بینک میں ادائیگی کے بعد نئے میٹر کی تنصیب اور بجلی کی فراہمی کا عمل مکمل کیا جاتا ہے۔
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700 font-medium">
                صارف اپنی درخواست کی تازہ ترین صورتحال (Application Status) کو اپنے مخصوص ٹریکنگ نمبر یا ریفرنس آئی ڈی کے ذریعے آن لائن کسی بھی وقت چیک کر سکتا ہے۔
              </p>
            </div>

          </div>

          {/* Sidebar Navigation Systems */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-slate-900">
                Online Bill Check
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                Check or download your duplicate bill copy right away using our primary portal.
              </p>

              <Link
                href="/"
                className="mt-4 block w-full rounded-xl bg-[#005b2e] py-3 text-center text-xs font-bold text-white transition hover:bg-[#004221]"
              >
                Check Duplicate Bill →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-slate-900">
                Utility Guides Hub
              </h3>
              <div className="mt-4 grid gap-2">
                <Link
                  href="/mepco-reference-number-guide"
                  className="rounded-lg bg-[#f8fafc] p-3 text-xs font-bold text-[#005b2e] hover:bg-slate-100 border border-green-50"
                >
                  🔢 Reference Number Guide
                </Link>
                <Link
                  href="/mepco-bill-calculator"
                  className="rounded-lg bg-[#f8fafc] p-3 text-xs font-bold text-slate-700 hover:bg-slate-100"
                >
                  🧮 Bill Unit Calculator
                </Link>
                <Link
                  href="/mepco-bill-slabs-guide"
                  className="rounded-lg bg-[#f8fafc] p-3 text-xs font-bold text-slate-700 hover:bg-slate-100"
                >
                  ⚡ Tariff Slabs Guide
                </Link>
                <Link
                  href="/mepco-taxes-explained"
                  className="rounded-lg bg-[#f8fafc] p-3 text-xs font-bold text-slate-700 hover:bg-slate-100"
                >
                  🧾 Bill Taxes Explained
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}