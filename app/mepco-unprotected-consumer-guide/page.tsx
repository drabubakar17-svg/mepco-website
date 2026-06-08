import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Unprotected Consumer Guide 2026 - Bill Increase Explained",
  description:
    "MEPCO unprotected consumer guide in English, Urdu and Roman Urdu. Learn unprotected consumer meaning, protected vs unprotected status, 200 units rule, bill shock reasons and electricity bill impact.",
  keywords: [
    "MEPCO unprotected consumer",
    "unprotected consumer meaning",
    "protected vs unprotected consumer",
    "MEPCO protected consumer",
    "200 units rule Pakistan",
    "why electricity bill increased",
    "unprotected consumer bill",
    "MEPCO bill shock",
  ],
};

const faqs = [
  {
    q: "What is an unprotected consumer in MEPCO bill?",
    a: "An unprotected consumer is generally a user who does not fall under protected category criteria and may face higher tariff or slab impact according to official rules.",
  },
  {
    q: "Why does a consumer become unprotected?",
    a: "A consumer may become unprotected due to higher electricity usage, crossing important unit limits, or official billing criteria based on usage history.",
  },
  {
    q: "Is unprotected consumer linked with 200 units?",
    a: "Yes, many users discuss unprotected status with the 200 units rule because crossing the limit can affect bill category and payable amount depending on official rules.",
  },
  {
    q: "غیر محفوظ صارف کا کیا مطلب ہے؟",
    a: "غیر محفوظ صارف عام طور پر ایسے صارف کو کہا جاتا ہے جو محفوظ کیٹیگری میں نہیں آتا اور جس کے بل پر زیادہ سلیب یا ٹیرف کا اثر ہو سکتا ہے۔",
  },
];

export default function MepcoUnprotectedConsumerGuidePage() {
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

      <section className="relative overflow-hidden bg-gradient-to-br from-[#3d1200] via-[#8B0000] to-[#071b14] px-5 py-16 text-white md:py-24">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-red-300/20 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-120px] h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-black text-red-100 backdrop-blur">
              ⚠️ MEPCO Consumer Status Guide 2026
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              MEPCO Unprotected Consumer Guide
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-red-50">
              Learn what unprotected consumer means in MEPCO electricity bill,
              why bills may increase after crossing usage limits, how it
              connects with the 200 units rule, and how protected vs
              unprotected status affects your bill.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/mepco-protected-consumer-guide"
                className="rounded-2xl bg-white px-6 py-4 font-black text-[#8B0000] shadow-xl transition hover:-translate-y-1"
              >
                Protected Consumer Guide
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
            <p className="text-sm font-black uppercase tracking-widest text-red-100">
              Quick Answer
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Unprotected = Higher Bill Risk
            </h2>

            <p className="mt-4 leading-8 text-red-50">
              Unprotected consumer status usually means the user may not receive
              protected category benefit and may face higher slab or tariff
              impact.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-white p-5 text-slate-900">
                <p className="text-sm font-bold text-slate-500">Main Reason</p>
                <h3 className="mt-1 text-2xl font-black text-red-700">
                  Higher Monthly Usage
                </h3>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5 text-slate-900">
                <p className="text-sm font-bold text-orange-600">
                  Common Trigger
                </p>
                <h3 className="mt-1 text-2xl font-black text-orange-800">
                  Crossing 200 Units
                </h3>
              </div>

              <div className="rounded-2xl bg-yellow-50 p-5 text-slate-900">
                <p className="text-sm font-bold text-yellow-700">Important</p>
                <h3 className="mt-1 text-xl font-black text-yellow-900">
                  Final category depends on official billing criteria.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="rounded-3xl border-2 border-dashed border-red-200 bg-white p-8 text-center shadow-sm">
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
              "⚠️",
              "Unprotected Status",
              "A consumer category linked with higher bill impact risk.",
            ],
            [
              "⚡",
              "Usage Limit",
              "Crossing important unit limits can affect bill category.",
            ],
            [
              "📊",
              "Slab Impact",
              "Higher slabs can increase final electricity bill.",
            ],
            [
              "🧾",
              "Bill Adjustments",
              "FPA, QTA, GST and fixed charges can increase payable amount.",
            ],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl">{icon}</div>
              <h2 className="mt-4 text-xl font-black text-[#8B0000]">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="h-fit rounded-[2rem] border border-red-100 bg-white p-6 shadow-xl lg:sticky lg:top-24">
            <p className="text-sm font-black uppercase tracking-widest text-[#8B0000]">
              Page Navigation
            </p>

            <div className="mt-5 grid gap-3">
              {[
                ["What is unprotected consumer?", "#what-is"],
                ["Why consumer becomes unprotected?", "#why"],
                ["Protected vs unprotected", "#comparison"],
                ["200 units connection", "#units"],
                ["Bill shock reasons", "#bill-shock"],
                ["Urdu guide", "#urdu"],
                ["Roman Urdu", "#roman"],
                ["FAQs", "#faqs"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-2xl border border-red-100 bg-[#fff7f6] px-4 py-3 font-bold text-slate-700 transition hover:bg-red-50 hover:text-[#8B0000]"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#8B0000] p-5 text-white">
              <h3 className="text-xl font-black">Avoid Bill Shock</h3>
              <p className="mt-2 text-sm leading-6 text-red-50">
                Use the bill calculator to check units, slab alert and 200-unit
                danger meter.
              </p>

              <Link
                href="/mepco-bill-calculator"
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-black text-[#8B0000]"
              >
                Open Calculator →
              </Link>
            </div>
          </aside>

          <div className="space-y-8">
            <article
              id="what-is"
              className="rounded-[2rem] border border-red-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#8B0000]">
                Complete Explanation
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#8B0000] md:text-4xl">
                What Is Unprotected Consumer in MEPCO Bill?
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                An unprotected consumer is generally a user who does not fall
                under protected category criteria. This status may result in a
                higher bill impact because tariff slabs, category rules and
                official adjustments can affect the final payable amount.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Many MEPCO users notice this term after their monthly
                electricity units increase or after their bill becomes suddenly
                higher. Unprotected status is often discussed together with the
                200 units rule, bill slabs, FPA, QTA and taxes.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
                  <h3 className="text-2xl font-black text-green-800">
                    Protected Consumer
                  </h3>
                  <p className="mt-3 leading-7 text-green-900">
                    Usually linked with lower consumption and lower bill impact
                    under official rules.
                  </p>
                </div>

                <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
                  <h3 className="text-2xl font-black text-red-800">
                    Unprotected Consumer
                  </h3>
                  <p className="mt-3 leading-7 text-red-900">
                    Usually linked with higher usage, slab change and increased
                    bill shock risk.
                  </p>
                </div>
              </div>
            </article>

            <article
              id="why"
              className="rounded-[2rem] border border-red-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#8B0000]">
                Why Does a Consumer Become Unprotected?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                A consumer may become unprotected when usage crosses important
                limits or when official billing criteria place the consumer
                outside protected category. The exact status depends on official
                rules, usage history and billing category.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Heavy appliances like AC, water motor, electric iron, heater,
                refrigerator and washing machine can quickly increase units.
                When monthly usage moves above a safer range, the bill may rise
                due to tariff slab and adjustment impact.
              </p>

              <div className="mt-8 rounded-3xl border border-yellow-200 bg-yellow-50 p-6">
                <h3 className="text-2xl font-black text-yellow-900">
                  Important Note
                </h3>
                <p className="mt-3 leading-8 text-yellow-900">
                  This page explains the concept for consumer education. Final
                  protected or unprotected status depends on official MEPCO,
                  PITC, NEPRA and government billing rules.
                </p>
              </div>
            </article>

            <article
              id="comparison"
              className="rounded-[2rem] border border-red-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#8B0000]">
                Protected vs Unprotected Consumer
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Protected and unprotected categories help consumers understand
                why bill amount may change sharply even when units do not look
                extremely high. Category status, slab impact and official
                adjustments can all affect payable amount.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="grid bg-slate-900 text-white md:grid-cols-3">
                  <div className="p-5 font-black">Category</div>
                  <div className="p-5 font-black">Common Meaning</div>
                  <div className="p-5 font-black">Bill Impact</div>
                </div>

                <div className="grid border-t bg-white md:grid-cols-3">
                  <div className="p-5 font-bold text-green-700">
                    Protected
                  </div>
                  <div className="p-5 text-slate-700">
                    Lower consumption category
                  </div>
                  <div className="p-5 text-slate-700">
                    Lower bill impact under rules
                  </div>
                </div>

                <div className="grid border-t bg-slate-50 md:grid-cols-3">
                  <div className="p-5 font-bold text-red-700">
                    Unprotected
                  </div>
                  <div className="p-5 text-slate-700">
                    Higher usage or category change
                  </div>
                  <div className="p-5 text-slate-700">
                    Higher tariff/slab impact possible
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/mepco-protected-consumer-guide"
                  className="inline-flex rounded-2xl bg-[#005b2e] px-6 py-4 font-black text-white transition hover:bg-[#004221]"
                >
                  Read Protected Consumer Guide →
                </Link>
              </div>
            </article>

            <section className="rounded-3xl border-2 border-dashed border-red-200 bg-white p-8 text-center shadow-sm">
              <p className="text-sm font-black uppercase tracking-widest text-slate-400">
                Advertisement
              </p>
              <p className="mt-2 text-slate-500">
                In-content AdSense ad space
              </p>
            </section>

            <article
              id="units"
              className="rounded-[2rem] border border-red-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#8B0000]">
                Connection With 200 Units Rule
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The 200 units rule is one of the most important electricity bill
                topics in Pakistan. Many users notice bill changes when monthly
                units cross 200. This is why unprotected consumer status and the
                200-unit limit are often discussed together.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                If your monthly units are close to 180-200, careful usage can
                reduce bill shock risk. Once usage crosses the important
                threshold, the payable amount may increase because of category
                status, tariff slab, FPA, QTA, GST and other billing items.
              </p>

              <div className="mt-6">
                <Link
                  href="/mepco-200-units-rule"
                  className="inline-flex rounded-2xl bg-[#8B0000] px-6 py-4 font-black text-white transition hover:bg-[#6f0000]"
                >
                  Read 200 Units Rule →
                </Link>
              </div>
            </article>

            <article
              id="bill-shock"
              className="rounded-[2rem] border border-red-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                Why Bill Shock Happens After Status Change?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Bill shock happens when users expect a small increase but the
                final bill becomes much higher. This can happen because the bill
                is not only based on consumed units. It can also include tariff
                slab impact, FPA, QTA, GST, fixed charges, arrears and late
                payment surcharge.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  ["Units", "Higher units increase base charges"],
                  ["Slab", "Slab change can increase rate impact"],
                  ["Adjustments", "FPA, QTA and taxes affect final bill"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-red-100 bg-red-50 p-5 text-center"
                  >
                    <h3 className="text-2xl font-black text-[#8B0000]">
                      {title}
                    </h3>
                    <p className="mt-2 font-bold text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </article>

            <article
              id="urdu"
              className="rounded-[2rem] border border-red-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#8B0000]">
                Urdu Guide
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#8B0000]" dir="rtl">
                میپکو غیر محفوظ صارف کیا ہوتا ہے؟
              </h2>

              <p className="mt-6 leading-9 text-slate-700" dir="rtl">
                غیر محفوظ صارف عام طور پر ایسے صارف کو کہا جاتا ہے جو محفوظ
                کیٹیگری میں نہیں آتا۔ اس صورت میں بل پر زیادہ سلیب، ٹیرف یا
                دیگر ایڈجسٹمنٹس کا اثر ہو سکتا ہے۔
              </p>

              <p className="mt-5 leading-9 text-slate-700" dir="rtl">
                اگر ماہانہ یونٹس 200 سے اوپر چلے جائیں یا استعمال زیادہ ہو جائے
                تو بل اچانک بڑھ سکتا ہے۔ بل میں صرف یونٹس نہیں بلکہ ایف پی اے،
                کیو ٹی اے، جی ایس ٹی، فکسڈ چارجز اور بقایا جات بھی شامل ہو سکتے
                ہیں۔
              </p>

              <div className="mt-7 rounded-3xl bg-red-50 p-6" dir="rtl">
                <h3 className="text-2xl font-black text-red-900">
                  آسان مشورہ
                </h3>
                <p className="mt-3 leading-9 text-red-950">
                  اگر یونٹس 180 سے اوپر جا رہے ہوں تو اے سی، موٹر، استری، ہیٹر
                  اور زیادہ بجلی لینے والی چیزوں کا استعمال کم کریں تاکہ بل
                  شاک سے بچا جا سکے۔
                </p>
              </div>
            </article>

            <article
              id="roman"
              className="rounded-[2rem] border border-red-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#8B0000]">
                Roman Urdu Guide
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#8B0000]">
                Unprotected Consumer Roman Urdu Mein
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                Unprotected consumer ka matlab aam tor par wo consumer hota hai
                jo protected category mein nahi aata. Aise consumer ka bill
                zyada aa sakta hai kyun ke tariff slab aur adjustment charges ka
                effect zyada ho sakta hai.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Agar aap ke units 200 se upar chale jayein to bill shock aa
                sakta hai. Sirf units nahi, FPA, QTA, GST, fixed charges aur
                arrears bhi final bill ko barha sakte hain.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {[
                  ["0-180 Units", "Safer range"],
                  ["180-200 Units", "Alert zone"],
                  ["200+ Units", "Unprotected risk"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-red-100 bg-[#fff7f6] p-5 text-center"
                  >
                    <h3 className="text-2xl font-black text-[#8B0000]">
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

      <section id="faqs" className="bg-[#fff1ef] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-[#8B0000]">
            FAQs
          </p>

          <h2 className="mt-3 text-center text-4xl font-black text-[#8B0000]">
            MEPCO Unprotected Consumer FAQs
          </h2>

          <div className="mt-10 space-y-5">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-[#8B0000]">
                  {item.q}
                </h3>
                <p className="mt-3 leading-8 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2rem] border border-red-100 bg-white p-8 shadow-xl md:p-12">
          <h2 className="text-3xl font-black text-[#8B0000]">
            Related MEPCO Guides
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["/mepco-protected-consumer-guide", "Protected Consumer Guide"],
              ["/mepco-200-units-rule", "200 Units Rule"],
              ["/mepco-bill-slabs-guide", "Bill Slabs Guide"],
              ["/mepco-bill-calculator", "MEPCO Bill Calculator"],
              ["/mepco-fpa-charges-guide", "FPA Charges Guide"],
              ["/mepco-qta-charges-guide", "QTA Charges Guide"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-red-100 bg-[#fff7f6] p-5 font-black text-[#8B0000] transition hover:-translate-y-1 hover:bg-red-50 hover:shadow-lg"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl border-2 border-dashed border-red-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-widest text-slate-400">
            Advertisement
          </p>
          <p className="mt-2 text-slate-500">Footer AdSense ad space</p>
        </div>
      </section>
    </main>
  );
}
