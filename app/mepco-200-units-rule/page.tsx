import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO 200 Units Rule 2026 - Protected Consumer Guide",
  description:
    "MEPCO 200 units rule explained in English, Urdu and Roman Urdu. Learn protected consumer status, 200 unit limit, slab impact, bill increase reasons and safety tips.",
  keywords: [
    "MEPCO 200 units rule",
    "200 units electricity bill Pakistan",
    "protected consumer MEPCO",
    "MEPCO protected consumer",
    "200 units rule Pakistan",
    "bijli bill 200 units rule",
    "protected consumer meaning",
  ],
};

const faqs = [
  {
    q: "What is MEPCO 200 units rule?",
    a: "The 200 units rule is commonly linked with protected consumer status. Consumers using up to 200 units may fall in a lower-protected category, while crossing the limit may increase the bill due to slab and tariff changes.",
  },
  {
    q: "What happens if I use more than 200 units?",
    a: "If your monthly units go above 200, your bill may increase because you can move into a higher or unprotected slab. Final charges depend on official tariff, taxes, FPA, QTA and other adjustments.",
  },
  {
    q: "Can I become protected consumer again?",
    a: "Consumer status depends on official billing rules and your consumption pattern. If your usage remains low for the required period, your status may change according to official criteria.",
  },
  {
    q: "کیا 200 یونٹ سے اوپر بل زیادہ آتا ہے؟",
    a: "جی ہاں، 200 یونٹ سے اوپر جانے پر بل زیادہ ہو سکتا ہے کیونکہ صارف غیر محفوظ سلیب میں جا سکتا ہے۔",
  },
];

export default function Mepco200UnitsRulePage() {
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
              ⚡ MEPCO Consumer Protection Guide 2026
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              MEPCO 200 Units Rule Explained
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
              Understand how the 200-unit electricity limit can affect your
              MEPCO bill, protected consumer status, monthly slab, and why
              crossing 200 units may suddenly increase your payable amount.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/mepco-bill-calculator"
                className="rounded-2xl bg-white px-6 py-4 font-black text-[#005b2e] shadow-xl transition hover:-translate-y-1"
              >
                Use Bill Calculator
              </Link>

              <Link
                href="/mepco-bill-slabs-guide"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                View Bill Slabs
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            <p className="text-sm font-black uppercase tracking-widest text-emerald-100">
              Quick Answer
            </p>

            <h2 className="mt-4 text-3xl font-black">
              200 Units Limit Matters
            </h2>

            <p className="mt-4 leading-8 text-emerald-50">
              If your monthly consumption crosses 200 units, your bill may
              increase due to protected/unprotected status and higher tariff
              slabs.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-white p-5 text-slate-900">
                <p className="text-sm font-bold text-slate-500">0 - 200 Units</p>
                <h3 className="mt-1 text-2xl font-black text-emerald-700">
                  Lower Risk Range
                </h3>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5 text-slate-900">
                <p className="text-sm font-bold text-orange-600">
                  Above 200 Units
                </p>
                <h3 className="mt-1 text-2xl font-black text-orange-800">
                  Bill Shock Risk
                </h3>
              </div>

              <div className="rounded-2xl bg-red-50 p-5 text-slate-900">
                <p className="text-sm font-bold text-red-600">
                  Important
                </p>
                <h3 className="mt-1 text-xl font-black text-red-800">
                  Final bill depends on official tariff, taxes and adjustments.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ["🛡️", "Protected Consumer", "Lower usage consumers may qualify under protected category rules."],
            ["⚡", "200 Unit Limit", "Crossing 200 units can shift your bill into a higher impact zone."],
            ["📊", "Slab Impact", "Tariff slabs can change the total payable electricity bill."],
            ["🧾", "Taxes & FPA", "GST, FPA, QTA and fixed charges can affect the final bill."],
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
                ["What is 200 units rule?", "#what-is"],
                ["Protected consumer", "#protected"],
                ["Urdu guide", "#urdu"],
                ["Roman Urdu guide", "#roman"],
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
                Use our calculator to estimate monthly electricity bill and
                200-unit threshold risk.
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
              id="what-is"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
                Complete Explanation
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#8B0000] md:text-4xl">
                What Is MEPCO 200 Units Rule?
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                The MEPCO 200 units rule is commonly searched by consumers who
                want to understand why their electricity bill increases after
                crossing a certain monthly usage level. In simple words, 200
                units is an important threshold because it may affect protected
                consumer status and tariff slab impact.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                If your electricity usage stays within a lower range, your bill
                may remain comparatively controlled. But when the monthly units
                cross 200, the bill can increase due to higher slab rates,
                protected/unprotected consumer category, fuel price adjustment,
                quarterly tariff adjustment, GST, fixed charges and other
                official billing items.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
                  <h3 className="text-2xl font-black text-green-800">
                    Up to 200 Units
                  </h3>
                  <p className="mt-3 leading-7 text-green-900">
                    This is usually considered a safer usage range for many
                    residential users trying to keep bills under control.
                  </p>
                </div>

                <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
                  <h3 className="text-2xl font-black text-orange-800">
                    Above 200 Units
                  </h3>
                  <p className="mt-3 leading-7 text-orange-900">
                    Crossing this limit may increase the bill because the user
                    can move into a higher consumption impact zone.
                  </p>
                </div>
              </div>
            </article>

            <article
              id="protected"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                Protected Consumer vs Unprotected Consumer
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Protected consumer status is an important electricity billing
                concept in Pakistan. Many users want to know whether staying
                under 200 units keeps them protected and why their bill changes
                after crossing this range.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="grid bg-slate-900 text-white md:grid-cols-3">
                  <div className="p-5 font-black">Status</div>
                  <div className="p-5 font-black">Usage Meaning</div>
                  <div className="p-5 font-black">Bill Risk</div>
                </div>

                <div className="grid border-t bg-white md:grid-cols-3">
                  <div className="p-5 font-bold text-green-700">
                    Protected
                  </div>
                  <div className="p-5 text-slate-700">
                    Lower monthly consumption pattern
                  </div>
                  <div className="p-5 text-slate-700">
                    Comparatively lower bill impact
                  </div>
                </div>

                <div className="grid border-t bg-slate-50 md:grid-cols-3">
                  <div className="p-5 font-bold text-red-700">
                    Unprotected
                  </div>
                  <div className="p-5 text-slate-700">
                    Higher usage or crossed threshold
                  </div>
                  <div className="p-5 text-slate-700">
                    Higher slab and bill shock risk
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-yellow-200 bg-yellow-50 p-6">
                <h3 className="text-2xl font-black text-yellow-900">
                  Important Safety Note
                </h3>
                <p className="mt-3 leading-8 text-yellow-900">
                  This page is for consumer education. Your final bill and
                  official protected/unprotected status depend on the current
                  government tariff, DISCO billing rules and official bill
                  calculation.
                </p>
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
                میپکو 200 یونٹ رول کیا ہے؟
              </h2>

              <p className="mt-6 leading-9 text-slate-700" dir="rtl">
                میپکو صارفین اکثر یہ جاننا چاہتے ہیں کہ 200 یونٹ سے اوپر جانے
                پر بل کیوں زیادہ ہو جاتا ہے۔ عام طور پر 200 یونٹ ایک اہم حد
                سمجھی جاتی ہے کیونکہ اس کا تعلق محفوظ صارف، غیر محفوظ صارف اور
                بجلی کے سلیب سے ہو سکتا ہے۔
              </p>

              <p className="mt-5 leading-9 text-slate-700" dir="rtl">
                اگر ماہانہ استعمال 200 یونٹ کے اندر رہے تو بل نسبتاً کم رہ
                سکتا ہے۔ لیکن اگر یونٹس 200 سے اوپر چلے جائیں تو سلیب، ٹیکسز،
                ایف پی اے، کیو ٹی اے اور دیگر چارجز کی وجہ سے بل زیادہ آ سکتا
                ہے۔
              </p>

              <div className="mt-7 rounded-3xl bg-emerald-50 p-6" dir="rtl">
                <h3 className="text-2xl font-black text-emerald-900">
                  آسان مشورہ
                </h3>
                <p className="mt-3 leading-9 text-emerald-950">
                  اے سی، موٹر، استری اور زیادہ بجلی لینے والی چیزیں احتیاط سے
                  استعمال کریں، خاص طور پر مہینے کے آخر میں جب یونٹس 180 سے
                  اوپر جا رہے ہوں۔
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
                MEPCO 200 Units Rule Roman Urdu Mein
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                MEPCO 200 units rule ka matlab yeh hai ke agar aap ka mahana
                bijli istemal 200 units ke qareeb ya us se upar chala jata hai
                to bill par zyada impact aa sakta hai. Is wajah se log 200
                units limit ko bohat important samajhte hain.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Agar aap 200 units ke andar rehte hain to bill comparatively
                control mein reh sakta hai. Lekin 200 units cross karne ke baad
                slab change, taxes, FPA, QTA aur fixed charges ki wajah se bill
                zyada aa sakta hai.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {[
                  ["180 Units", "Alert ho jayein"],
                  ["200 Units", "Important limit"],
                  ["201+ Units", "Bill shock risk"],
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

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#005b2e] to-[#003d24] p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-emerald-100">
                Save Electricity
              </p>
              <h2 className="mt-3 text-4xl font-black">
                How To Stay Under 200 Units?
              </h2>
              <p className="mt-5 leading-8 text-emerald-50">
                Small daily habits can help reduce monthly units and protect you
                from sudden bill increase.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Use inverter AC carefully",
                "Avoid heavy appliances at peak hours",
                "Switch off extra lights",
                "Check meter reading weekly",
                "Reduce water motor usage",
                "Use fans before AC when possible",
              ].map((tip) => (
                <div
                  key={tip}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 font-bold backdrop-blur"
                >
                  ✅ {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-[#eef8f1] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-[#005b2e]">
            FAQs
          </p>

          <h2 className="mt-3 text-center text-4xl font-black text-[#8B0000]">
            MEPCO 200 Units Rule FAQs
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
              ["/mepco-bill-slabs-guide", "Bill Slabs Guide"],
              ["/mepco-taxes-explained", "Taxes Explained"],
              ["/mepco-peak-hours-guide", "Peak Hours Guide"],
              ["/mepco-solar-savings-calculator", "Solar Savings Calculator"],
              ["/mepco-bill-check-by-cnic", "Bill Check By CNIC"],
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
    </main>
  );
}
