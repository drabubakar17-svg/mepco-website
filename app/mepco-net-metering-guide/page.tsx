import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Net Metering Guide 2026 | Solar Bill Saving in Urdu & English",
  description:
    "Complete MEPCO net metering guide for solar users. Learn eligibility, documents, application process, bi-directional meter, benefits, mistakes, Urdu FAQs and Roman Urdu search intent.",
  keywords: [
    "MEPCO net metering",
    "MEPCO solar net metering",
    "net metering Pakistan",
    "solar net metering Multan",
    "MEPCO bi directional meter",
    "MEPCO solar bill saving",
    "net metering apply kaise kare",
    "mepco net metering kaise karwaye",
    "میپکو نیٹ میٹرنگ",
    "سولر نیٹ میٹرنگ پاکستان",
    "میپکو سولر میٹر",
    "بجلی کا بل کم کرنے کا طریقہ",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-net-metering-guide",
  },
};

const quickLinks = [
  { href: "#what-is-net-metering", text: "1. What is Net Metering?" },
  { href: "#eligibility", text: "2. Eligibility Requirements" },
  { href: "#documents", text: "3. Required Documents" },
  { href: "#apply-process", text: "4. Application Process" },
  { href: "#urdu-guide", text: "5. Urdu Guide" },
  { href: "#faqs", text: "6. FAQs" },
];

const documents = [
  {
    title: "Latest MEPCO Bill",
    desc: "A clear copy of your recent electricity bill showing reference number, customer ID, tariff and sanctioned load.",
  },
  {
    title: "CNIC Copy",
    desc: "Front and back copy of the applicant or connection owner CNIC.",
  },
  {
    title: "Solar System Details",
    desc: "Details of solar panels, inverter capacity, system size in kW and technical specifications.",
  },
  {
    title: "Installer Documents",
    desc: "Installation certificate and documents from an approved or certified solar installer/vendor.",
  },
  {
    title: "Site Plan and Wiring Details",
    desc: "Layout, single line diagram, protection arrangement, earthing and safety information where required.",
  },
  {
    title: "Interconnection Forms",
    desc: "Signed interconnection agreement and required schedules/forms uploaded through the official process.",
  },
];

const processSteps = [
  {
    title: "Install a Suitable Solar System",
    desc: "Choose a solar system size according to your electricity usage, sanctioned load, roof space and budget.",
  },
  {
    title: "Use a Certified Installer",
    desc: "Net metering files are usually prepared through approved/certified solar installers because technical documents are required.",
  },
  {
    title: "Prepare Application File",
    desc: "Collect bill copy, CNIC, solar system details, inverter information, diagrams, installer certificates and required forms.",
  },
  {
    title: "Submit Net Metering Application",
    desc: "Application documents are submitted through the relevant official net metering process or concerned MEPCO office/cell.",
  },
  {
    title: "Inspection and Verification",
    desc: "MEPCO may verify wiring, safety protection, inverter setup, earthing, load and technical compliance.",
  },
  {
    title: "Bi-Directional Meter Installation",
    desc: "After approval and required payments, a bi-directional meter may be installed to record import and export units.",
  },
];

const benefits = [
  {
    title: "Lower Monthly Bill",
    desc: "Solar generation can reduce imported electricity units and help lower monthly bills.",
  },
  {
    title: "Export Extra Units",
    desc: "Extra solar electricity may be exported to the grid according to applicable rules and adjustment method.",
  },
  {
    title: "Better Solar Usage",
    desc: "Net metering helps consumers use rooftop solar more efficiently.",
  },
  {
    title: "Long-Term Savings",
    desc: "A properly sized solar system may support long-term electricity cost reduction.",
  },
];

const commonMistakes = [
  {
    title: "Installing Without Proper Planning",
    desc: "Wrong system size can reduce savings or create technical issues.",
  },
  {
    title: "Ignoring Sanctioned Load",
    desc: "Your connection load and solar system capacity should be checked before applying.",
  },
  {
    title: "Incomplete Documents",
    desc: "Missing forms, diagrams, certificates or bill copies can delay the application.",
  },
  {
    title: "Using Non-Compliant Equipment",
    desc: "Inverter protection, earthing and safety compliance are important for approval.",
  },
];

const urduQueries = [
  "میپکو نیٹ میٹرنگ کیسے کروائیں؟",
  "سولر نیٹ میٹرنگ کے لیے کون سے کاغذات چاہیے؟",
  "میپکو سولر میٹر کیسے لگتا ہے؟",
  "نیٹ میٹرنگ سے بجلی کا بل کیسے کم ہوتا ہے؟",
  "بائی ڈائریکشنل میٹر کیا ہوتا ہے؟",
  "mepco net metering kaise apply kare",
  "solar net metering documents pakistan",
  "bijli ka bill solar se kaise kam kare",
];

const relatedGuides = [
  {
    href: "/mepco-load-extension-guide",
    title: "Load Extension Guide",
    desc: "Increase sanctioned load before adding heavy appliances or solar setup if needed.",
  },
  {
    href: "/mepco-demand-notice-guide",
    title: "Demand Notice Guide",
    desc: "Understand demand notice fee, payment and next steps for MEPCO applications.",
  },
  {
    href: "/mepco-bill-calculator",
    title: "Bill Calculator",
    desc: "Estimate monthly electricity bill and compare solar savings.",
  },
];

export default function MepcoNetMeteringGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Breadcrumb */}
      <nav
        className="mb-6 text-xs font-medium uppercase tracking-wide text-slate-500"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="transition-colors hover:text-emerald-600">
              Home
            </Link>
          </li>
          <li className="text-slate-400" aria-hidden="true">
            /
          </li>
          <li className="font-semibold text-slate-800" aria-current="page">
            Net Metering Guide
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Net Metering Guide 2026: Solar Bill Saving, Documents and Urdu FAQs
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          MEPCO net metering allows eligible solar consumers to use rooftop
          solar power and send extra electricity back to the grid through a
          bi-directional meter. This guide explains eligibility, documents,
          application process, benefits, common mistakes, and Urdu search
          questions for Pakistani users.
        </p>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
          <strong>Important:</strong> Net metering rules, buyback rates,
          application fees, technical requirements and policy details may change.
          Always verify the latest requirements from official MEPCO/NEPRA/PITC
          net metering channels before applying.
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-slate-200 py-3.5 text-sm font-medium text-slate-500">
          <div>
            <span className="font-normal text-slate-400">Company:</span>{" "}
            <strong className="text-slate-700">
              Multan Electric Power Company (MEPCO)
            </strong>
          </div>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">
            |
          </span>
          <div>
            <span className="font-normal text-slate-400">Topic:</span>{" "}
            <strong className="text-slate-700">Solar Net Metering</strong>
          </div>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">
            |
          </span>
          <div>
            <span className="font-normal text-slate-400">Updated:</span>{" "}
            <strong className="text-slate-700">June 2026</strong>
          </div>
        </div>
      </header>

      {/* Quick Links Table of Contents */}
      <section className="mb-12 rounded-2xl border border-slate-200/60 bg-slate-50 p-6 shadow-sm">
        <h2 className="mb-4 text-base font-bold tracking-tight text-slate-900">
          In This Guide:
        </h2>
        <ul className="grid grid-cols-1 gap-3 text-sm font-semibold text-emerald-700 md:grid-cols-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-emerald-900 hover:underline"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Content Sections */}
      <div className="space-y-14">
        <section id="what-is-net-metering" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            What is MEPCO Net Metering?
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            Net metering is a solar billing system where a consumer installs a
            solar power system and uses a special bi-directional meter. This
            meter records electricity imported from the grid and electricity
            exported from the solar system to the grid.
          </p>
          <p className="leading-relaxed text-slate-800">
            In simple words, when your solar system produces more electricity
            than your home or business is using, extra units may go back to the
            grid and can be adjusted according to the applicable net metering or
            billing rules.
          </p>
          <div className="mt-5 rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950 shadow-sm">
            <strong className="mb-1 block font-bold">Simple Meaning:</strong>
            Net metering helps solar users reduce electricity bills by adjusting
            exported solar units against grid usage under official rules.
          </div>
        </section>

        <section id="eligibility" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            MEPCO Net Metering Eligibility Requirements
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            Eligibility may depend on current rules, connection category,
            sanctioned load, safety compliance, solar system size and technical
            inspection. In general, consumers should have:
          </p>
          <ul className="list-disc space-y-2.5 pl-6 leading-relaxed text-slate-800">
            <li>Valid MEPCO electricity connection.</li>
            <li>Suitable rooftop or installation space for solar panels.</li>
            <li>Proper wiring, earthing and protection system.</li>
            <li>Compatible inverter and solar equipment.</li>
            <li>Application prepared by an approved/certified installer.</li>
            <li>No major pending technical or billing dispute.</li>
          </ul>
        </section>

        <section id="documents" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Documents Required for MEPCO Net Metering
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            The official PITC net metering portal says interconnection agreement
            and NEPRA schedules/forms should be downloaded, filled, signed and
            uploaded properly, and incomplete documents can lead to rejection.
            MEPCO checklist documents may also include safety and installer
            certificates depending on system size. 
          </p>
          <ul
            className="space-y-4 text-slate-800"
            aria-label="MEPCO net metering required documents"
          >
            {documents.map((item) => (
              <li
                key={item.title}
                className="flex items-start rounded-xl border border-slate-100 bg-slate-50/50 p-3"
              >
                <span
                  className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>
                  <strong className="font-bold text-slate-900">
                    {item.title}:
                  </strong>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="apply-process" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Apply for MEPCO Net Metering
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            The application process normally includes solar installation,
            technical documentation, online/offline application submission,
            inspection, approval and installation of a bi-directional meter.
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="mb-6 flex items-center space-x-3 border-b border-slate-800/80 pb-4">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Step-by-Step Net Metering Process
              </span>
            </div>

            <ol
              className="relative space-y-8 border-l border-slate-800 pl-6"
              aria-label="MEPCO net metering application process"
            >
              {processSteps.map((step, index) => (
                <li key={step.title} className="relative">
                  <span
                    className="absolute -left-[38px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-900 bg-emerald-500 text-xs font-black text-slate-950"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mb-1 text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Benefits of Net Metering for MEPCO Consumers
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <h3 className="mb-2 font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Common Mistakes to Avoid
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {commonMistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm"
              >
                <h3 className="mb-2 font-bold text-amber-950">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-amber-900">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="urdu-guide" className="scroll-mt-6" dir="rtl" lang="ur">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            MEPCO Net Metering Guide in Urdu
          </h2>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 leading-9 text-slate-900 shadow-sm">
            <h3 className="mb-4 text-2xl font-black text-emerald-900">
              میپکو نیٹ میٹرنگ کیا ہے؟
            </h3>
            <p>
              میپکو نیٹ میٹرنگ ایک ایسا نظام ہے جس میں سولر سسٹم لگانے والا
              صارف اپنی اضافی بجلی گرڈ کو واپس بھیج سکتا ہے۔ اس کے لیے عام طور
              پر بائی ڈائریکشنل میٹر لگایا جاتا ہے جو آنے والی اور جانے والی
              بجلی دونوں کو ریکارڈ کرتا ہے۔
            </p>
            <p className="mt-4">
              اگر آپ کے سولر پینل دن کے وقت ضرورت سے زیادہ بجلی بناتے ہیں تو
              وہ اضافی یونٹس گرڈ میں جا سکتے ہیں اور متعلقہ قوانین کے مطابق آپ
              کے بل میں ایڈجسٹ ہو سکتے ہیں۔
            </p>

            <h3 className="mt-6 mb-3 text-xl font-black text-emerald-900">
              نیٹ میٹرنگ کے لیے عام طور پر کیا چاہیے؟
            </h3>
            <ul className="list-disc space-y-2 pr-6">
              <li>درست میپکو بجلی کنکشن</li>
              <li>سولر پینلز اور انورٹر کی تفصیل</li>
              <li>سی این آئی سی کاپی</li>
              <li>تازہ بجلی بل</li>
              <li>انسٹالر یا وینڈر کے سرٹیفکیٹس</li>
              <li>وائرنگ، ارتھنگ اور سیفٹی انتظام</li>
            </ul>

            <h3 className="mt-6 mb-3 text-xl font-black text-emerald-900">
              لوگ گوگل پر عموماً یہ سوال پوچھتے ہیں:
            </h3>
            <ul className="list-disc space-y-2 pr-6">
              {urduQueries.map((query) => (
                <li key={query}>{query}</li>
              ))}
            </ul>

            <p className="mt-5">
              درخواست دینے سے پہلے ہمیشہ تازہ ترین قواعد، فیس، بائی بیک ریٹ،
              دستاویزات اور ٹیکنیکل شرائط متعلقہ میپکو دفتر یا آفیشل نیٹ
              میٹرنگ پورٹل سے ضرور کنفرم کریں۔
            </p>
          </div>
        </section>

        <section id="faqs" className="scroll-mt-6">
          <h2 className="mb-6 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q1. Can every MEPCO consumer apply for net metering?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Not every consumer is automatically approved. Eligibility
                depends on connection status, sanctioned load, solar system
                size, safety compliance, documents and current official rules.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-2 text-sm leading-relaxed text-slate-800"
              >
                <strong>سوال:</strong> کیا ہر میپکو صارف نیٹ میٹرنگ کروا سکتا ہے؟
                <br />
                <span className="text-slate-600">
                  جواب: ہر صارف خود بخود منظور نہیں ہوتا۔ منظوری کنکشن، لوڈ،
                  سولر سسٹم، سیفٹی اور دستاویزات پر منحصر ہوتی ہے۔
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q2. What is a bi-directional meter?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                A bi-directional meter records electricity imported from the
                grid and electricity exported from the solar system to the grid.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-2 text-sm leading-relaxed text-slate-800"
              >
                <strong>سوال:</strong> بائی ڈائریکشنل میٹر کیا ہوتا ہے؟
                <br />
                <span className="text-slate-600">
                  جواب: یہ میٹر گرڈ سے آنے والی بجلی اور سولر سے واپس جانے
                  والی بجلی دونوں کو ریکارڈ کرتا ہے۔
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
              <h3 className="mb-2 text-base font-bold text-slate-900">
                Q3. Does net metering make the bill zero?
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Net metering may reduce your bill, but results depend on solar
                generation, electricity usage, taxes, fixed charges, billing
                method and current official adjustment rules.
              </p>
              <div
                dir="rtl"
                lang="ur"
                className="mt-3 border-t border-slate-200/60 pt-2 text-sm leading-relaxed text-slate-800"
              >
                <strong>سوال:</strong> کیا نیٹ میٹرنگ سے بل زیرو ہو جاتا ہے؟
                <br />
                <span className="text-slate-600">
                  جواب: بل کم ہو سکتا ہے، لیکن مکمل زیرو ہونا سولر پیداوار،
                  استعمال، ٹیکسز اور موجودہ قوانین پر منحصر ہے۔
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Related Guides */}
      <footer className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Solar and Bill Guides
        </h2>
        <div className="grid gap-4 text-sm font-medium md:grid-cols-3">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-xl border border-slate-200 p-5 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-50/20"
            >
              <span className="block font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                {guide.title}
              </span>
              <span className="mt-2 block text-xs leading-relaxed text-slate-500">
                {guide.desc}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs leading-relaxed text-slate-600">
          <strong>Disclaimer:</strong> This page is for consumer information only.
          Net metering policy, rates, fees, processing timelines and technical
          conditions can change. Consumers should verify final requirements from
          official MEPCO, NEPRA, PITC net metering portal or relevant government
          authority before making financial or technical decisions.
        </div>
      </footer>
    </main>
  );
}