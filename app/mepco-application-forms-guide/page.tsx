import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Application Forms Guide 2026 | New Connection, Name Change, Load Extension",
  description:
    "Complete MEPCO application forms guide in English, Urdu and Roman Urdu. Learn forms for new connection, name change, load extension, tariff change, complaints, security deposit and consumer services.",
  keywords: [
    "MEPCO application forms",
    "MEPCO forms download",
    "MEPCO new connection form",
    "MEPCO name change form",
    "MEPCO load extension form",
    "MEPCO tariff change form",
    "MEPCO complaint form",
    "MEPCO application form kaise bharain",
    "MEPCO form download",
    "mepco new connection form download",
    "mepco name change form online",
    "mepco load barhany ka form",
    "mepco tariff change application",
    "میپکو فارم",
    "میپکو درخواست فارم",
    "میپکو نیا کنکشن فارم",
    "میپکو نام تبدیلی فارم",
    "میپکو لوڈ ایکسٹینشن فارم",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-application-forms-guide",
  },
};

const formCards = [
  {
    title: "New Connection Form",
    urdu: "نیا کنکشن فارم",
    href: "/mepco-new-connection-guide",
    text: "Apply for a new domestic, commercial or other electricity connection.",
    roman:
      "Naya MEPCO connection lagwany ke liye application form, documents aur demand notice process samjhein.",
    icon: "🔌",
  },
  {
    title: "Name Change Form",
    urdu: "نام تبدیلی فارم",
    href: "/mepco-name-change-guide",
    text: "Transfer electricity bill record to a new owner or correct consumer name.",
    roman:
      "Bill par naam change karwana, ownership transfer aur required documents ka complete guide.",
    icon: "📝",
  },
  {
    title: "Load Extension Form",
    urdu: "لوڈ ایکسٹینشن فارم",
    href: "/mepco-load-extension-guide",
    text: "Increase sanctioned load for home, shop, office or commercial use.",
    roman:
      "Bijli ka load barhwana ho to load extension form aur process yahan samjhein.",
    icon: "⚙️",
  },
  {
    title: "Change of Tariff Form",
    urdu: "ٹیرف تبدیلی فارم",
    href: "/mepco-change-of-tariff-guide",
    text: "Convert domestic, commercial or other tariff category according to actual usage.",
    roman:
      "Domestic se commercial ya commercial se domestic tariff change karwany ka tareeqa.",
    icon: "📈",
  },
  {
    title: "Complaint Form",
    urdu: "شکایت فارم",
    href: "/mepco-complaint-tracking-guide",
    text: "Submit and track complaints related to bill, meter, transformer or power supply.",
    roman:
      "MEPCO complaint form, complaint number aur tracking ka simple guide.",
    icon: "📋",
  },
  {
    title: "Security Deposit Form",
    urdu: "سکیورٹی ڈپازٹ فارم",
    href: "/mepco-security-deposit",
    text: "Understand security deposit, refund, adjustment and documentation.",
    roman:
      "Security deposit refund, adjustment aur required documents ke bare mein maloomat.",
    icon: "🏦",
  },
];

const faqs = [
  {
    q: "Where can I get MEPCO application forms?",
    a: "Consumers usually get MEPCO application forms from the relevant MEPCO office, customer service center or official consumer service channels. Requirements may vary by service type.",
  },
  {
    q: "Can I download MEPCO forms online?",
    a: "Some forms and procedures may be available through official online channels, but consumers should verify the latest form and document requirements from MEPCO before submission.",
  },
  {
    q: "Which form is required for MEPCO name change?",
    a: "For name change or ownership transfer, consumers generally need an application, CNIC, latest bill, ownership proof and supporting documents.",
  },
  {
    q: "MEPCO form kaise bharen?",
    a: "Form mein consumer name, reference number, CNIC, address, connection details aur required service type clearly likhna hota hai. Documents attach karna bhi zaroori hota hai.",
  },
];

export default function MepcoApplicationFormsGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-5 text-sm">
            <Link href="/" className="text-green-100 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-green-200">/</span>
            <span>MEPCO Application Forms Guide</span>
          </div>

          <p className="mb-3 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            MEPCO Consumer Forms Guide 2026
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
            MEPCO Application Forms Guide: New Connection, Name Change, Load
            Extension & Complaints
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-green-50">
            This bilingual guide explains common MEPCO application forms,
            required documents, consumer services, Urdu help, and Roman Urdu
            search terms used by Pakistani consumers.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_320px]">
        <article className="space-y-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              What Are MEPCO Application Forms?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              MEPCO application forms are used for consumer services such as new
              electricity connection, name change, load extension, tariff
              conversion, complaints, security deposit adjustment and other
              account-related requests.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Consumers should always provide correct reference number, CNIC,
              address, mobile number, connection details and supporting
              documents. Wrong or incomplete information may delay the process.
            </p>
          </div>

          <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              MEPCO Forms by Service Type
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {formCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 transition hover:-translate-y-1 hover:bg-green-50 hover:shadow-lg"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 text-xl font-black text-[#005b2e]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-lg font-bold text-[#8B0000]">
                    {item.urdu}
                  </p>
                  <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Roman Urdu: {item.roman}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Documents Usually Required With MEPCO Forms
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-slate-700">
              <li>Copy of CNIC</li>
              <li>Latest MEPCO electricity bill</li>
              <li>14-digit reference number</li>
              <li>Consumer mobile number</li>
              <li>Proof of ownership or authorization, where required</li>
              <li>Application written to the relevant MEPCO office</li>
              <li>Payment receipt or demand notice, where applicable</li>
              <li>Business proof for commercial tariff or commercial connection</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-dashed border-green-200 bg-white p-6 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
              Advertisement
            </p>
            <p className="mt-2 text-slate-500">
              AdSense responsive ad space for consumer forms guide
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Roman Urdu Search Terms Users Commonly Type
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                "mepco form download",
                "mepco new connection form",
                "mepco naam change form",
                "mepco bill name change kaise karein",
                "mepco load barhany ka form",
                "mepco tariff change application",
                "mepco complaint form online",
                "mepco security deposit refund form",
                "bijli ka naya connection form",
                "mepco application kaise likhen",
              ].map((term) => (
                <div
                  key={term}
                  className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-green-800"
                >
                  {term}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              Urdu Guide: میپکو درخواست فارم
            </h2>

            <p className="mt-4 leading-9 text-slate-700">
              میپکو درخواست فارم مختلف صارف خدمات کے لیے استعمال ہوتے ہیں، جیسے
              نیا کنکشن، نام تبدیلی، لوڈ ایکسٹینشن، ٹیرف تبدیلی، شکایت، سکیورٹی
              ڈپازٹ اور دیگر دفتری کام۔
            </p>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              فارم جمع کرواتے وقت ضروری باتیں
            </h3>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-9 text-slate-700">
              <li>ریفرنس نمبر درست لکھیں۔</li>
              <li>شناختی کارڈ کی کاپی ساتھ لگائیں۔</li>
              <li>تازہ بجلی بل کی کاپی شامل کریں۔</li>
              <li>درخواست میں مقصد واضح لکھیں۔</li>
              <li>ملکیت یا اجازت نامہ ضرورت کے مطابق جمع کروائیں۔</li>
              <li>فارم جمع کروانے کے بعد رسید یا ڈائری نمبر محفوظ رکھیں۔</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              How to Write a Simple MEPCO Application
            </h2>

            <div className="mt-5 rounded-xl bg-slate-50 p-5 leading-8 text-slate-700">
              <p>To: Sub Divisional Officer, MEPCO</p>
              <p>Subject: Application for required consumer service</p>
              <p className="mt-3">
                Respected Sir, I am a MEPCO consumer with reference number
                __________. I request you to process my application for
                __________. Required documents are attached for verification.
              </p>
              <p className="mt-3">
                Name: __________ | CNIC: __________ | Mobile: __________
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold text-slate-900">
              FAQs About MEPCO Application Forms
            </h2>

            <div className="mt-5 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-slate-200 p-4"
                >
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
              Related MEPCO Services
            </h2>

            <div className="mt-4 space-y-3">
              {formCards.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50"
                >
                  {item.title}
                </Link>
              ))}

              <Link
                href="/"
                className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-green-800 hover:bg-green-50"
              >
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
            official MEPCO website. Forms, documents, office procedures and
            requirements may change. Always verify the latest requirements from
            MEPCO office, official portal or customer support before submitting
            any application.
          </p>
        </div>
      </section>
    </main>
  );
}