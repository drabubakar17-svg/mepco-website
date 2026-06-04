import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Protected Consumer Guide 2026 - Protected vs Unprotected",
  description:
    "MEPCO protected consumer guide in English, Urdu and Roman Urdu. Learn protected consumer meaning, 200 units rule, protected vs unprotected consumer status and bill impact.",
  keywords: [
    "MEPCO protected consumer",
    "protected consumer meaning",
    "protected vs unprotected consumer",
    "MEPCO unprotected consumer",
    "200 units protected consumer",
    "protected consumer electricity bill",
    "bijli bill protected consumer",
  ],
};

const faqs = [
  {
    q: "What is a protected consumer in MEPCO bill?",
    a: "A protected consumer is generally a low-consumption electricity user whose bill may be calculated under protected category rules according to official criteria.",
  },
  {
    q: "Is 200 units linked with protected consumer status?",
    a: "Yes, the 200 units limit is commonly linked with protected consumer discussion. Crossing the limit may affect consumer category and bill impact depending on official rules.",
  },
  {
    q: "What is the difference between protected and unprotected consumer?",
    a: "Protected consumers usually have lower usage and may receive lower bill impact, while unprotected consumers may face higher tariff or slab impact.",
  },
  {
    q: "محفوظ صارف کا کیا مطلب ہے؟",
    a: "محفوظ صارف عام طور پر کم بجلی استعمال کرنے والے صارف کو کہا جاتا ہے جس کا بل سرکاری اصولوں کے مطابق محفوظ کیٹیگری میں آ سکتا ہے۔",
  },
];

export default function MepcoProtectedConsumerGuidePage() {
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
              🛡️ MEPCO Consumer Status Guide 2026
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              MEPCO Protected Consumer Guide
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
              Learn what protected consumer means in MEPCO electricity bill, how
              the 200 units rule is connected, why consumer status matters, and
              how protected and unprotected categories can affect your bill.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/mepco-200-units-rule"
                className="rounded-2xl bg-white px-6 py-4 font-black text-[#005b2e] shadow-xl transition hover:-translate-y-1"
              >
                Read 200 Units Rule
              </Link>

              <Link
                href="/mepco-bill-calculator"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                Use Bill Calculator
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            <p className="text-sm font-black uppercase tracking-widest text-emerald-100">
              Quick Answer
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Protected = Lower Usage Category
            </h2>

            <p className="mt-4 leading-8 text-emerald-50">
              Protected consumer status is generally linked with lower monthly
              electricity usage and official billing rules.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-white p-5 text-slate-900">
                <p className="text-sm font-bold text-slate-500">Common Limit</p>
                <h3 className="mt-1 text-2xl font-black text-emerald-700">
                  Around 200 Units
                </h3>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5 text-slate-900">
                <p className="text-sm font-bold text-orange-600">
                  Risk Point
                </p>
                <h3 className="mt-1 text-2xl font-black text-orange-800">
                  Crossing Limit May Increase Bill
                </h3>
              </div>

              <div className="rounded-2xl bg-red-50 p-5 text-slate-900">
                <p className="text-sm font-bold text-red-600">Important</p>
                <h3 className="mt-1 text-xl font-black text-red-800">
                  Final status depends on official billing criteria.
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
              "🛡️",
              "Protected Status",
              "A consumer category linked with lower electricity usage.",
            ],
            [
              "⚡",
              "200 Units Link",
              "The 200-unit range is important for bill category discussions.",
            ],
            [
              "📊",
              "Bill Impact",
              "Consumer category can affect payable electricity bill.",
            ],
            [
              "🧾",
              "Official Rules",
              "Final status depends on official billing criteria and usage history.",
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
                ["What is protected consumer?", "#what-is"],
                ["Who qualifies?", "#qualifies"],
                ["Protected vs unprotected", "#comparison"],
                ["200 units connection", "#units"],
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
              <h3 className="text-xl font-black">Check Bill Risk</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                Use the bill calculator to check units, slab alert and 200-unit
                danger meter.
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
                What Is Protected Consumer in MEPCO Bill?
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                A protected consumer is generally a low electricity usage
                consumer whose bill may be calculated under protected category
                rules according to official criteria. This category is commonly
                discussed when users compare bills below and above 200 units.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Protected status matters because electricity bills can change
                significantly when a consumer moves from a lower usage range to
                a higher or unprotected category. This is why many users search
                for protected consumer meaning after seeing a sudden increase in
                their monthly bill.
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

                <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
                  <h3 className="text-2xl font-black text-orange-800">
                    Unprotected Consumer
                  </h3>
                  <p className="mt-3 leading-7 text-orange-900">
                    Usually linked with higher consumption, slab impact and
                    possible bill shock.
                  </p>
                </div>
              </div>
            </article>

            <article
              id="qualifies"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                Who Qualifies as Protected Consumer?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Protected consumer eligibility depends on official electricity
                billing rules, usage pattern and billing history. Many users
                connect protected status with staying within a lower monthly
                unit range, especially around the 200 units discussion.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                However, consumers should not rely only on one month usage.
                Official criteria can consider billing category, previous usage
                pattern and current government tariff decisions.
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
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#8B0000]">
                Protected vs Unprotected Consumer
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The difference between protected and unprotected consumer status
                can affect how users understand electricity bill increases. A
                protected consumer is usually associated with lower consumption,
                while unprotected status may lead to higher slab impact.
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
                  <div className="p-5 font-bold text-orange-700">
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
              id="units"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                Connection With 200 Units Rule
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The 200 units rule is one of the most searched electricity bill
                topics in Pakistan. Many users notice bill changes when monthly
                units cross 200. This is why protected consumer status and the
                200-unit limit are often discussed together.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                If your monthly usage is close to 180-200 units, careful usage
                can help avoid bill shock. Heavy appliances like AC, water motor,
                electric iron and heater can quickly increase monthly units.
              </p>

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
              id="urdu"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
                Urdu Guide
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#8B0000]" dir="rtl">
                میپکو محفوظ صارف کیا ہوتا ہے؟
              </h2>

              <p className="mt-6 leading-9 text-slate-700" dir="rtl">
                محفوظ صارف عام طور پر ایسے صارف کو کہا جاتا ہے جو کم بجلی
                استعمال کرتا ہے اور جس کا بل سرکاری اصولوں کے مطابق محفوظ
                کیٹیگری میں آ سکتا ہے۔ یہ موضوع عموماً 200 یونٹ کے اصول کے ساتھ
                سمجھا جاتا ہے۔
              </p>

              <p className="mt-5 leading-9 text-slate-700" dir="rtl">
                اگر ماہانہ یونٹس 200 کے قریب یا اس سے اوپر چلے جائیں تو بل پر
                اثر پڑ سکتا ہے۔ اسی لیے صارفین کو اپنے یونٹس، سلیب، ٹیکسز، ایف
                پی اے اور کیو ٹی اے کو سمجھنا ضروری ہے۔
              </p>

              <div className="mt-7 rounded-3xl bg-emerald-50 p-6" dir="rtl">
                <h3 className="text-2xl font-black text-emerald-900">
                  آسان مشورہ
                </h3>
                <p className="mt-3 leading-9 text-emerald-950">
                  مہینے کے آخر میں اگر یونٹس 180 سے اوپر جا رہے ہوں تو اے سی،
                  موٹر، استری اور زیادہ بجلی لینے والی چیزوں کا استعمال احتیاط
                  سے کریں۔
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
                Protected Consumer Roman Urdu Mein
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                Protected consumer ka matlab aam tor par wo consumer hota hai jo
                kam bijli use karta hai aur official rules ke mutabiq protected
                category mein aa sakta hai.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Agar aap ke units 200 ke qareeb hain to bill par zyada effect aa
                sakta hai. Is liye monthly units, slab, FPA, QTA aur taxes ko
                samajhna zaroori hai.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {[
                  ["0-180 Units", "Safer range"],
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
            MEPCO Protected Consumer FAQs
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
              ["/mepco-200-units-rule", "200 Units Rule"],
              ["/mepco-bill-slabs-guide", "Bill Slabs Guide"],
              ["/mepco-bill-calculator", "MEPCO Bill Calculator"],
              ["/mepco-fpa-charges-guide", "FPA Charges Guide"],
              ["/mepco-qta-charges-guide", "QTA Charges Guide"],
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