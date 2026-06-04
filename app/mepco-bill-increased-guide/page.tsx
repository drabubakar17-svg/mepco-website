import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why My MEPCO Bill Increased 2026 - High Electricity Bill Reasons",
  description:
    "Learn why your MEPCO electricity bill increased suddenly. Complete English, Urdu and Roman Urdu guide explaining high bill reasons, 200 units rule, protected status, FPA, QTA, taxes, slabs and arrears.",
  keywords: [
    "why my MEPCO bill increased",
    "MEPCO bill high reason",
    "electricity bill suddenly increased",
    "bijli bill zyada kyu aya",
    "MEPCO high bill",
    "MEPCO bill shock",
    "why electricity bill is high Pakistan",
  ],
};

const faqs = [
  {
    q: "Why did my MEPCO bill increase suddenly?",
    a: "Your MEPCO bill may increase due to higher units, slab change, crossing 200 units, protected to unprotected status, FPA, QTA, GST, arrears, fixed charges or late payment surcharge.",
  },
  {
    q: "Can FPA and QTA increase my electricity bill?",
    a: "Yes, FPA and QTA are adjustment charges that can affect the final payable bill even if your units are similar to the previous month.",
  },
  {
    q: "Does crossing 200 units increase bill?",
    a: "Crossing 200 units may increase bill impact because it can affect protected/unprotected category discussion and tariff slab impact depending on official rules.",
  },
  {
    q: "میرا میپکو بل زیادہ کیوں آیا؟",
    a: "میپکو بل زیادہ آنے کی وجوہات میں زیادہ یونٹس، سلیب تبدیلی، 200 یونٹ سے اوپر جانا، ایف پی اے، کیو ٹی اے، ٹیکسز، بقایا جات اور لیٹ فیس شامل ہو سکتے ہیں۔",
  },
];

export default function MepcoBillIncreasedGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#f6faf7] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#003d24] via-[#006b3a] to-[#071b14] px-5 py-16 text-white md:py-24">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-120px] h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-black text-emerald-100 backdrop-blur">
              📈 MEPCO High Bill Help Guide 2026
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Why My MEPCO Bill Increased?
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
              If your MEPCO electricity bill suddenly increased, the reason may
              not be only higher units. Slab change, 200 units rule, protected
              status, FPA, QTA, taxes, arrears and late fee can all affect your
              final payable bill.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/mepco-bill-calculator"
                className="rounded-2xl bg-white px-6 py-4 font-black text-[#005b2e] shadow-xl transition hover:-translate-y-1"
              >
                Check Bill Estimate
              </Link>

              <Link
                href="/mepco-200-units-rule"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                Read 200 Units Rule
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            <p className="text-sm font-black uppercase tracking-widest text-emerald-100">
              Quick Answer
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Bill Can Increase for Many Reasons
            </h2>

            <p className="mt-4 leading-8 text-emerald-50">
              Your bill may rise due to units, tariff slab, protected status,
              FPA, QTA, GST, arrears or late payment surcharge.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-white p-5 text-slate-900">
                <p className="text-sm font-bold text-slate-500">
                  Most Common Reason
                </p>
                <h3 className="mt-1 text-2xl font-black text-emerald-700">
                  More Units Used
                </h3>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5 text-slate-900">
                <p className="text-sm font-bold text-orange-600">
                  Hidden Reason
                </p>
                <h3 className="mt-1 text-2xl font-black text-orange-800">
                  FPA, QTA & Taxes
                </h3>
              </div>

              <div className="rounded-2xl bg-red-50 p-5 text-slate-900">
                <p className="text-sm font-bold text-red-600">High Risk</p>
                <h3 className="mt-1 text-xl font-black text-red-800">
                  Crossing 200 units may create bill shock.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-widest text-slate-400">
            Advertisement
          </p>
          <p className="mt-2 text-slate-500">
            Google AdSense responsive ad space
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            [
              "⚡",
              "Higher Units",
              "More electricity usage directly increases base bill charges.",
            ],
            [
              "📊",
              "Slab Change",
              "Moving into a higher slab can increase the payable amount.",
            ],
            [
              "🧾",
              "FPA & QTA",
              "Monthly and quarterly adjustments can increase final bill.",
            ],
            [
              "⚠️",
              "Arrears & Late Fee",
              "Pending dues or late payment surcharge can make bill higher.",
            ],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl">{icon}</div>
              <h2 className="mt-4 text-xl font-black text-[#005b2e]">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="h-fit rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-xl lg:sticky lg:top-24">
            <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
              Page Navigation
            </p>

            <div className="mt-5 grid gap-3">
              {[
                ["Main reasons", "#reasons"],
                ["200 units impact", "#units"],
                ["FPA and QTA impact", "#adjustments"],
                ["Bill item checklist", "#checklist"],
                ["Urdu guide", "#urdu"],
                ["Roman Urdu", "#roman"],
                ["FAQs", "#faqs"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-2xl border border-emerald-100 bg-[#f6faf7] px-4 py-3 font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-[#005b2e]"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#005b2e] p-5 text-white">
              <h3 className="text-xl font-black">Need Estimate?</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                Use the bill calculator to check units, slab alert and estimated
                total.
              </p>

              <Link
                href="/mepco-bill-calculator"
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-black text-[#005b2e]"
              >
                Open Calculator →
              </Link>
            </div>
          </aside>

          <div className="space-y-8">
            <article
              id="reasons"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
                Complete Explanation
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#8B0000] md:text-4xl">
                Main Reasons Your MEPCO Bill Increased
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                A high MEPCO bill can happen for many reasons. Some users only
                check consumed units, but electricity bills are affected by
                multiple items including tariff slab, fuel price adjustment,
                quarterly tariff adjustment, GST, fixed charges, arrears and
                late payment surcharge.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                If your current bill is higher than previous month, compare unit
                consumption, bill slab, protected or unprotected status, FPA,
                QTA and any previous balance. These items can make your bill
                higher even when the increase in units looks small.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
                  <h3 className="text-2xl font-black text-green-800">
                    Visible Reason
                  </h3>
                  <p className="mt-3 leading-7 text-green-900">
                    Higher units, AC usage, water motor usage and peak-hour
                    consumption can raise your bill.
                  </p>
                </div>

                <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
                  <h3 className="text-2xl font-black text-orange-800">
                    Hidden Reason
                  </h3>
                  <p className="mt-3 leading-7 text-orange-900">
                    FPA, QTA, GST, arrears and slab change may increase the
                    final payable amount.
                  </p>
                </div>
              </div>
            </article>

            <article
              id="units"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                200 Units Rule and Bill Increase
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The 200 units rule is one of the biggest reasons users feel bill
                shock. When usage crosses an important limit, tariff slab,
                protected or unprotected consumer category and other charges can
                affect the final bill.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                If your units are near 180 to 200, be careful with heavy
                appliances. AC, electric iron, water motor, heater and long
                usage during peak hours can quickly push your units above the
                safer range.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  ["0-180 Units", "Safer usage range"],
                  ["180-200 Units", "Alert zone"],
                  ["200+ Units", "Bill shock risk"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-emerald-100 bg-[#f6faf7] p-5 text-center"
                  >
                    <h3 className="text-2xl font-black text-[#005b2e]">
                      {title}
                    </h3>
                    <p className="mt-2 font-bold text-slate-600">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/mepco-200-units-rule"
                  className="inline-flex rounded-2xl bg-[#005b2e] px-6 py-4 font-black text-white transition hover:bg-[#004221]"
                >
                  Read 200 Units Rule →
                </Link>
              </div>
            </article>

            <article
              id="adjustments"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#8B0000]">
                FPA, QTA and Taxes Can Increase Bill
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Your bill is not only calculated from units. Fuel Price
                Adjustment, Quarterly Tariff Adjustment, GST, fixed charges and
                other official items can change the final payable amount.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="grid bg-slate-900 text-white md:grid-cols-3">
                  <div className="p-5 font-black">Bill Item</div>
                  <div className="p-5 font-black">Meaning</div>
                  <div className="p-5 font-black">Bill Impact</div>
                </div>

                <div className="grid border-t bg-white md:grid-cols-3">
                  <div className="p-5 font-bold text-orange-700">FPA</div>
                  <div className="p-5 text-slate-700">
                    Fuel Price Adjustment
                  </div>
                  <div className="p-5 text-slate-700">
                    Can increase or reduce final bill
                  </div>
                </div>

                <div className="grid border-t bg-slate-50 md:grid-cols-3">
                  <div className="p-5 font-bold text-green-700">QTA</div>
                  <div className="p-5 text-slate-700">
                    Quarterly Tariff Adjustment
                  </div>
                  <div className="p-5 text-slate-700">
                    Can affect payable amount
                  </div>
                </div>

                <div className="grid border-t bg-white md:grid-cols-3">
                  <div className="p-5 font-bold text-red-700">GST / Taxes</div>
                  <div className="p-5 text-slate-700">
                    Government taxes and charges
                  </div>
                  <div className="p-5 text-slate-700">
                    Add to final payable amount
                  </div>
                </div>
              </div>
            </article>

            <section className="rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-black uppercase tracking-widest text-slate-400">
                Advertisement
              </p>
              <p className="mt-2 text-slate-500">
                In-content AdSense ad space
              </p>
            </section>

            <article
              id="checklist"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                High Bill Checklist
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Before filing a complaint, check these items on your electricity
                bill. Many high bill issues are linked with visible and hidden
                bill components.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Compare current units with previous month",
                  "Check if usage crossed 200 units",
                  "Check protected or unprotected consumer status",
                  "Check FPA amount",
                  "Check QTA amount",
                  "Check arrears or previous balance",
                  "Check late payment surcharge",
                  "Check meter reading difference",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-emerald-100 bg-[#f6faf7] p-5 font-bold text-slate-700"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/mepco-wrong-bill-solution"
                  className="inline-flex rounded-2xl bg-[#8B0000] px-6 py-4 font-black text-white transition hover:bg-[#6f0000]"
                >
                  Wrong Bill Solution →
                </Link>
              </div>
            </article>

            <article
              id="urdu"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
                Urdu Guide
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#8B0000]" dir="rtl">
                میرا میپکو بل زیادہ کیوں آیا؟
              </h2>

              <p className="mt-6 leading-9 text-slate-700" dir="rtl">
                میپکو بل زیادہ آنے کی کئی وجوہات ہو سکتی ہیں۔ صرف یونٹس دیکھنا
                کافی نہیں ہوتا۔ بل میں ایف پی اے، کیو ٹی اے، جی ایس ٹی، فکسڈ
                چارجز، بقایا جات اور لیٹ فیس بھی شامل ہو سکتے ہیں۔
              </p>

              <p className="mt-5 leading-9 text-slate-700" dir="rtl">
                اگر آپ کے یونٹس 200 سے اوپر چلے گئے ہیں یا آپ غیر محفوظ صارف
                کیٹیگری میں آ گئے ہیں تو بل اچانک بڑھ سکتا ہے۔ اے سی، موٹر،
                استری اور ہیٹر جیسے آلات بھی یونٹس تیزی سے بڑھاتے ہیں۔
              </p>

              <div className="mt-7 rounded-3xl bg-emerald-50 p-6" dir="rtl">
                <h3 className="text-2xl font-black text-emerald-900">
                  آسان مشورہ
                </h3>
                <p className="mt-3 leading-9 text-emerald-950">
                  بل زیادہ آنے پر پہلے یونٹس، سلیب، ایف پی اے، کیو ٹی اے، ٹیکسز
                  اور بقایا جات چیک کریں، پھر شکایت درج کریں۔
                </p>
              </div>
            </article>

            <article
              id="roman"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
                Roman Urdu Guide
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#8B0000]">
                Bijli Bill Zyada Kyun Aaya?
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                Agar aap ka MEPCO bill achanak zyada aa gaya hai to sirf units
                na dekhein. FPA, QTA, GST, fixed charges, arrears aur late fee
                bhi final bill ko barha sakte hain.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Agar units 200 ke upar chale gaye hain ya consumer status
                protected se unprotected ho gaya hai to bill shock aa sakta hai.
                AC, water motor, iron aur heater zyada units consume karte hain.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {[
                  ["Units", "Zyada istemal"],
                  ["FPA / QTA", "Adjustment charges"],
                  ["Arrears", "Pichla balance"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-emerald-100 bg-[#f6faf7] p-5 text-center"
                  >
                    <h3 className="text-2xl font-black text-[#005b2e]">
                      {title}
                    </h3>
                    <p className="mt-2 font-bold text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-[#eef8f1] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-[#005b2e]">
            FAQs
          </p>

          <h2 className="mt-3 text-center text-4xl font-black text-[#8B0000]">
            MEPCO High Bill FAQs
          </h2>

          <div className="mt-10 space-y-5">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-[#005b2e]">
                  {item.q}
                </h3>
                <p className="mt-3 leading-8 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-xl md:p-12">
          <h2 className="text-3xl font-black text-[#005b2e]">
            Related MEPCO Guides
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["/mepco-bill-calculator", "MEPCO Bill Calculator"],
              ["/mepco-200-units-rule", "200 Units Rule"],
              ["/mepco-protected-consumer-guide", "Protected Consumer Guide"],
              ["/mepco-unprotected-consumer-guide", "Unprotected Consumer Guide"],
              ["/mepco-fpa-charges-guide", "FPA Charges Guide"],
              ["/mepco-qta-charges-guide", "QTA Charges Guide"],
              ["/mepco-wrong-bill-solution", "Wrong Bill Solution"],
              ["/mepco-bill-correction-guide", "Bill Correction Guide"],
              ["/mepco-taxes-explained", "Taxes Explained"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-emerald-100 bg-[#f6faf7] p-5 font-black text-[#005b2e] transition hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-lg"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-widest text-slate-400">
            Advertisement
          </p>
          <p className="mt-2 text-slate-500">Footer AdSense ad space</p>
        </div>
      </section>
    </main>
  );
}