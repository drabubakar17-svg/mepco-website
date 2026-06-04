import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO QTA Charges Explained 2026 - Quarterly Tariff Adjustment Guide",
  description:
    "MEPCO QTA charges explained in English, Urdu and Roman Urdu. Learn what Quarterly Tariff Adjustment means, why QTA is added, how it affects electricity bill and the difference between FPA and QTA.",
  keywords: [
    "MEPCO QTA charges",
    "QTA in MEPCO bill",
    "Quarterly Tariff Adjustment",
    "QTA meaning in electricity bill",
    "MEPCO bill QTA",
    "QTA charges Pakistan",
    "bijli bill QTA meaning",
    "FPA vs QTA",
  ],
};

const faqs = [
  {
    q: "What is QTA in MEPCO bill?",
    a: "QTA means Quarterly Tariff Adjustment. It is an electricity bill adjustment that may be applied after tariff review or quarterly cost adjustment decisions.",
  },
  {
    q: "Why is QTA added in electricity bill?",
    a: "QTA may be added when official tariff or cost adjustments are applied for a quarter. It can affect the final payable electricity bill.",
  },
  {
    q: "What is the difference between FPA and QTA?",
    a: "FPA is usually linked with fuel cost adjustment, while QTA is linked with quarterly tariff adjustment. Both can affect the final bill but they are different billing items.",
  },
  {
    q: "کیا کیو ٹی اے بل میں اضافی چارج ہے؟",
    a: "جی ہاں، کیو ٹی اے بجلی کے بل میں ایک ایڈجسٹمنٹ چارج ہو سکتا ہے جو سہ ماہی ٹیرف ایڈجسٹمنٹ کی بنیاد پر شامل کیا جاتا ہے۔",
  },
];

export default function MepcoQtaChargesGuidePage() {
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
              📊 MEPCO Bill Adjustment Guide 2026
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              MEPCO QTA Charges Explained
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
              Understand what Quarterly Tariff Adjustment means in your MEPCO
              electricity bill, why QTA appears, how it affects your payable
              amount, and how it is different from FPA charges.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/mepco-bill-calculator"
                className="rounded-2xl bg-white px-6 py-4 font-black text-[#005b2e] shadow-xl transition hover:-translate-y-1"
              >
                Use Bill Calculator
              </Link>

              <Link
                href="/mepco-fpa-charges-guide"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/20"
              >
                Compare With FPA
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            <p className="text-sm font-black uppercase tracking-widest text-emerald-100">
              Quick Answer
            </p>

            <h2 className="mt-4 text-3xl font-black">
              QTA = Quarterly Tariff Adjustment
            </h2>

            <p className="mt-4 leading-8 text-emerald-50">
              QTA is an adjustment that may appear on your bill when quarterly
              tariff or cost adjustment decisions are applied.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-white p-5 text-slate-900">
                <p className="text-sm font-bold text-slate-500">Meaning</p>
                <h3 className="mt-1 text-2xl font-black text-emerald-700">
                  Quarterly Tariff Adjustment
                </h3>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5 text-slate-900">
                <p className="text-sm font-bold text-orange-600">
                  Bill Impact
                </p>
                <h3 className="mt-1 text-2xl font-black text-orange-800">
                  Can Change Final Payable Bill
                </h3>
              </div>

              <div className="rounded-2xl bg-red-50 p-5 text-slate-900">
                <p className="text-sm font-bold text-red-600">Important</p>
                <h3 className="mt-1 text-xl font-black text-red-800">
                  QTA depends on official quarterly adjustment decisions.
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
              "📊",
              "QTA Meaning",
              "Quarterly Tariff Adjustment is linked with tariff review.",
            ],
            [
              "🧾",
              "Bill Impact",
              "QTA may increase or adjust payable electricity bill.",
            ],
            [
              "📅",
              "Quarterly Nature",
              "QTA usually relates to quarterly adjustment decisions.",
            ],
            [
              "⚡",
              "Different From FPA",
              "FPA and QTA are separate electricity bill adjustment items.",
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
                ["What is QTA?", "#what-is-qta"],
                ["Why QTA is added?", "#why-added"],
                ["FPA vs QTA", "#fpa-vs-qta"],
                ["Example", "#example"],
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
              <h3 className="text-xl font-black">Bill Confusing?</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                Compare units, taxes, FPA and QTA using related MEPCO guides.
              </p>

              <Link
                href="/mepco-taxes-explained"
                className="mt-4 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-black text-[#005b2e]"
              >
                Open Taxes Guide →
              </Link>
            </div>
          </aside>

          <div className="space-y-8">
            <article
              id="what-is-qta"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <p className="text-sm font-black uppercase tracking-widest text-[#005b2e]">
                Complete Explanation
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#8B0000] md:text-4xl">
                What Is QTA in MEPCO Bill?
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                QTA stands for Quarterly Tariff Adjustment. It is a billing
                adjustment that may appear on electricity bills when official
                quarterly tariff or cost adjustment decisions are applied.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                In simple words, QTA is not the same as your normal consumed
                units charge. It is a separate adjustment item that may affect
                the final payable bill along with GST, FPA, fixed charges,
                arrears and other billing components.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
                  <h3 className="text-2xl font-black text-green-800">
                    Basic Units
                  </h3>
                  <p className="mt-3 leading-7 text-green-900">
                    Basic electricity charges are calculated from consumed units
                    and applicable tariff slab.
                  </p>
                </div>

                <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
                  <h3 className="text-2xl font-black text-orange-800">
                    QTA Adjustment
                  </h3>
                  <p className="mt-3 leading-7 text-orange-900">
                    QTA is added separately according to quarterly adjustment
                    decisions and billing rules.
                  </p>
                </div>
              </div>
            </article>

            <article
              id="why-added"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#005b2e]">
                Why Is QTA Added in Electricity Bill?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Electricity tariff can be reviewed and adjusted according to
                official cost and tariff decisions. QTA is used to reflect
                quarterly tariff adjustments in consumer bills.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                This is why your final bill can sometimes be higher even if your
                consumed units look similar to a previous month. Other items
                like FPA, QTA, GST, arrears or fixed charges can change the
                final payable amount.
              </p>

              <div className="mt-8 rounded-3xl border border-yellow-200 bg-yellow-50 p-6">
                <h3 className="text-2xl font-black text-yellow-900">
                  Important Note
                </h3>
                <p className="mt-3 leading-8 text-yellow-900">
                  QTA is based on official tariff adjustment rules. This page is
                  for consumer education and does not replace official MEPCO,
                  PITC, NEPRA or government billing information.
                </p>
              </div>
            </article>

            <article
              id="fpa-vs-qta"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#8B0000]">
                Difference Between FPA and QTA
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                FPA and QTA are both electricity bill adjustment items, but they
                are not the same. FPA is usually linked with fuel cost
                adjustment, while QTA is linked with quarterly tariff adjustment.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="grid bg-slate-900 text-white md:grid-cols-3">
                  <div className="p-5 font-black">Item</div>
                  <div className="p-5 font-black">Full Form</div>
                  <div className="p-5 font-black">Common Meaning</div>
                </div>

                <div className="grid border-t bg-white md:grid-cols-3">
                  <div className="p-5 font-bold text-orange-700">FPA</div>
                  <div className="p-5 text-slate-700">
                    Fuel Price Adjustment
                  </div>
                  <div className="p-5 text-slate-700">
                    Related to fuel cost changes
                  </div>
                </div>

                <div className="grid border-t bg-slate-50 md:grid-cols-3">
                  <div className="p-5 font-bold text-green-700">QTA</div>
                  <div className="p-5 text-slate-700">
                    Quarterly Tariff Adjustment
                  </div>
                  <div className="p-5 text-slate-700">
                    Related to quarterly tariff adjustment
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/mepco-fpa-charges-guide"
                  className="inline-flex rounded-2xl bg-[#005b2e] px-6 py-4 font-black text-white transition hover:bg-[#004221]"
                >
                  Read FPA Charges Guide →
                </Link>
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
              id="example"
              className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-xl md:p-10"
            >
              <h2 className="text-3xl font-black text-[#8B0000]">
                Simple QTA Example
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Suppose your bill has basic electricity charges based on units.
                After this, the final bill may include taxes, FPA, QTA, fixed
                charges, arrears or other official adjustments. If QTA is
                applied, your payable amount can become higher than the basic
                consumed units charge.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">
                <div className="grid bg-slate-900 text-white md:grid-cols-3">
                  <div className="p-5 font-black">Bill Item</div>
                  <div className="p-5 font-black">Meaning</div>
                  <div className="p-5 font-black">Effect</div>
                </div>

                <div className="grid border-t bg-white md:grid-cols-3">
                  <div className="p-5 font-bold text-green-700">
                    Units Charge
                  </div>
                  <div className="p-5 text-slate-700">
                    Basic consumed units
                  </div>
                  <div className="p-5 text-slate-700">
                    Main electricity cost
                  </div>
                </div>

                <div className="grid border-t bg-slate-50 md:grid-cols-3">
                  <div className="p-5 font-bold text-orange-700">QTA</div>
                  <div className="p-5 text-slate-700">
                    Quarterly Tariff Adjustment
                  </div>
                  <div className="p-5 text-slate-700">
                    Can affect final payable bill
                  </div>
                </div>

                <div className="grid border-t bg-white md:grid-cols-3">
                  <div className="p-5 font-bold text-red-700">Final Bill</div>
                  <div className="p-5 text-slate-700">
                    Units + taxes + adjustments
                  </div>
                  <div className="p-5 text-slate-700">
                    Amount to pay before due date
                  </div>
                </div>
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
                میپکو بل میں کیو ٹی اے کیا ہوتا ہے؟
              </h2>

              <p className="mt-6 leading-9 text-slate-700" dir="rtl">
                کیو ٹی اے کا مطلب کوارٹرلی ٹیرف ایڈجسٹمنٹ ہے۔ یہ بجلی کے بل میں
                ایک ایسا چارج یا ایڈجسٹمنٹ ہو سکتی ہے جو سہ ماہی ٹیرف یا لاگت
                کی ایڈجسٹمنٹ کی بنیاد پر شامل کی جاتی ہے۔
              </p>

              <p className="mt-5 leading-9 text-slate-700" dir="rtl">
                آسان الفاظ میں کیو ٹی اے بنیادی یونٹ چارج نہیں ہوتا بلکہ ایک
                الگ ایڈجسٹمنٹ ہوتی ہے۔ اگر سہ ماہی ایڈجسٹمنٹ لاگو ہو تو بل کی
                آخری قابل ادائیگی رقم بڑھ سکتی ہے۔
              </p>

              <div className="mt-7 rounded-3xl bg-emerald-50 p-6" dir="rtl">
                <h3 className="text-2xl font-black text-emerald-900">
                  صارفین کے لیے مشورہ
                </h3>
                <p className="mt-3 leading-9 text-emerald-950">
                  بل دیکھتے وقت صرف یونٹس نہ دیکھیں بلکہ ایف پی اے، کیو ٹی اے،
                  جی ایس ٹی، فکسڈ چارجز اور بقایا جات بھی چیک کریں۔
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
                QTA Charges Roman Urdu Mein
              </h2>

              <p className="mt-6 leading-8 text-slate-700">
                QTA ka matlab Quarterly Tariff Adjustment hota hai. Ye bijli ke
                bill mein quarterly tariff ya cost adjustment ki wajah se aa
                sakta hai.
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                Agar aap ka bill zyada aa raha hai to sirf units na dekhein.
                FPA, QTA, GST, fixed charges, arrears aur late payment surcharge
                bhi check karein. In charges ki wajah se final payable bill
                zyada ho sakta hai.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {[
                  ["QTA", "Quarterly tariff adjustment"],
                  ["FPA", "Fuel cost adjustment"],
                  ["GST", "Tax on bill charges"],
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
            MEPCO QTA Charges FAQs
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
              ["/mepco-fpa-charges-guide", "FPA Charges Guide"],
              ["/mepco-taxes-explained", "MEPCO Taxes Explained"],
              ["/mepco-bill-calculator", "MEPCO Bill Calculator"],
              ["/mepco-bill-slabs-guide", "Bill Slabs Guide"],
              ["/mepco-200-units-rule", "200 Units Rule"],
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