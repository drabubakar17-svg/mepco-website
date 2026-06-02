import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEPCO Name Change Guide 2026 | Change Electricity Bill Owner Name",
  description:
    "Complete MEPCO name change guide for electricity bill owner transfer, required documents, ENC portal process, NOC, property proof, and approval timeline.",
  keywords: [
    "MEPCO name change",
    "change name on MEPCO bill",
    "MEPCO bill owner name transfer",
    "electricity bill name change Pakistan",
    "ENC portal name change MEPCO",
    "MEPCO change of name tariff load",
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-name-change-guide",
  },
};

// Extracted static configurations for cleaner component body and scannability
const quickLinks = [
  { href: "#when-needed", text: "1. When Name Change is Required" },
  { href: "#documents", text: "2. Required Documents" },
  { href: "#online-process", text: "3. Online ENC Portal Process" },
  { href: "#verification", text: "4. MEPCO Verification" },
  { href: "#timeline", text: "5. Timeline and Important Tips" },
];

const documents = [
  {
    title: "Applicant CNIC",
    desc: "Clear front and back copy of the new owner's CNIC.",
  },
  {
    title: "Latest MEPCO Bill",
    desc: "Recent electricity bill copy showing the 14-digit reference number and customer ID without outstanding past dues.",
  },
  {
    title: "Ownership Proof",
    desc: "Registered sale deed, registry, allotment letter, mutation document (Fard), or other valid property ownership proof.",
  },
  {
    title: "NOC (No Objection Certificate)",
    desc: "Attested NOC from the previous owner or legal heirs if the property is transferred or inherited.",
  },
  {
    title: "Application Form",
    desc: "Printed and signed copy of the change of name application generated via the ENC portal.",
  },
];

const steps = [
  {
    title: "Open ENC Portal",
    desc: "Navigate to the official Electricity New Connection (ENC) portal and select the 'Change of Name/Tariff/Load' option.",
  },
  {
    title: "Select MEPCO & Category",
    desc: "Choose MEPCO as your distribution company and select your specific connection category (e.g., Domestic, Commercial).",
  },
  {
    title: "Enter Reference Details",
    desc: "Provide your current 14-digit electricity bill reference number to fetch active connection and logs.",
  },
  {
    title: "Upload Required Scans",
    desc: "Attach high-quality scanned copies of your CNIC, ownership documents, latest paid bill, and the signed affidavit/NOC.",
  },
  {
    title: "Submit & Track",
    desc: "Submit the request online, print the generated form, and save your application tracking ID for status checks.",
  },
];

const supportGuides = [
  {
    href: "/mepco-new-connection-guide",
    title: "New Connection Guide",
    desc: "Apply for a fresh residential, commercial, or industrial electricity connection step-by-step.",
  },
  {
    href: "/mepco-load-extension-guide",
    title: "Load Extension Guide",
    desc: "Increase your sanctioned load limit for ACs, heavy machinery, or business expansions safely.",
  },
  {
    href: "/mepco-bill-correction-guide",
    title: "Bill Correction Guide",
    desc: "Fix wrong meter readings, overbilling errors, or incorrect surcharges on your latest statement.",
  },
];

export default function MepcoNameChangeGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Breadcrumb Navigation */}
      <nav
        className="mb-6 text-xs font-medium uppercase tracking-wide text-slate-500"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2">
          <li>
            <a href="/" className="transition-colors hover:text-emerald-600">
              Home
            </a>
          </li>
          <li className="text-slate-400" aria-hidden="true">/</li>
          <li className="font-semibold text-slate-800" aria-current="page">
            Name Change
          </li>
        </ol>
      </nav>

      {/* Main Page Header */}
      <header className="mb-10">
        <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
          MEPCO Name Change Guide 2026: How to Change Owner Name on Electricity Bill
        </h1>

        <p className="mb-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
          If a property has been sold, inherited, transferred, or legally changed to another owner, the MEPCO electricity bill name should be updated promptly. This comprehensive guide explains the entire online name transfer process, mandatory verification checks, and approval timelines.
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-slate-200 py-3.5 text-sm font-medium text-slate-500">
          <div>
            <span className="text-slate-400 font-normal">Authority:</span>{" "}
            <strong className="text-slate-700">Multan Electric Power Company (MEPCO)</strong>
          </div>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">|</span>
          <div>
            <span className="text-slate-400 font-normal">Process Type:</span>{" "}
            <strong className="text-slate-700">Change of Name Transfer</strong>
          </div>
          <span className="hidden text-slate-300 sm:inline" aria-hidden="true">|</span>
          <div>
            <span className="text-slate-400 font-normal">Last Verified:</span>{" "}
            <strong className="text-slate-700">June 2026</strong>
          </div>
        </div>
      </header>

      {/* Quick Navigation In-Page Links */}
      <section className="mb-12 rounded-2xl border border-slate-200/60 bg-slate-50 p-6 shadow-sm">
        <h2 className="mb-4 text-base font-bold tracking-tight text-slate-900">
          In This Guide:
        </h2>
        <ul className="grid grid-cols-1 gap-3 text-sm font-semibold text-emerald-700 md:grid-cols-2">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-emerald-900 hover:underline">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Content Body Blocks */}
      <section className="space-y-14">
        {/* Section 1: When Needed */}
        <article id="when-needed" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            When Do You Need MEPCO Name Change?
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            A MEPCO name change is legally mandatory whenever the ownership record of an active electricity connection changes hands. Updating the record protects both the buyer and seller from unexpected legal liabilities, billing disputes, and security deposit adjustments.
          </p>
          <ul className="list-disc space-y-2.5 pl-6 leading-relaxed text-slate-800">
            <li><strong>Property Sale/Purchase:</strong> Transferring records immediately after purchasing a home, commercial shop, or plot.</li>
            <li><strong>Inheritance (Wirasat):</strong> Transferring the connection to legal heirs after the passing of the original owner.</li>
            <li><strong>Family Settlements:</strong> Shifting connection names among parents, siblings, or spouses via gift deeds.</li>
            <li><strong>Corporate Changes:</strong> Changing business ownership or transforming a proprietary concern into a partnership or private limited company.</li>
            <li><strong>Spelling Corrections:</strong> Fixing typographic errors made during the initial new connection data entry.</li>
          </ul>
        </article>

        {/* Section 2: Required Documents */}
        <article id="documents" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Documents Required for MEPCO Name Change
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            Ensure high-resolution, legible scanned copies of the following documents are prepared. Incomplete paperwork remains the leading cause of application rejection or delay in the subdivision offices:
          </p>
          <ul className="space-y-4 text-slate-800" aria-label="Required documents checklist">
            {documents.map((doc, idx) => (
              <li key={idx} className="flex items-start bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                <span className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <strong className="text-slate-900 font-bold">{doc.title}:</strong> {doc.desc}
                </span>
              </li>
            ))}
          </ul>
        </article>

        {/* Section 3: Online Process */}
        <article id="online-process" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            How to Apply for MEPCO Name Change Online
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            All name modification requests within the Multan Electric Power Company jurisdiction are processed smoothly online via the centralized web infrastructure.
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-md sm:p-8">
            <div className="flex items-center space-x-3 border-b border-slate-800/80 pb-4 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Step-by-Step Online Infrastructure Submission
              </span>
            </div>

            <ol className="relative border-l border-slate-800 pl-6 space-y-8" aria-label="Execution roadmap">
              {steps.map((step, idx) => (
                <li key={idx} className="relative">
                  <span className="absolute -left-[38px] top-0 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-900 bg-emerald-500 text-xs font-black text-slate-950" aria-hidden="true">
                    {idx + 1}
                  </span>
                  <h3 className="mb-1 text-base font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-slate-400 text-sm">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </article>

        {/* Section 4: Verification Process */}
        <article id="verification" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            MEPCO Verification Process
          </h2>
          <p className="mb-4 leading-relaxed text-slate-800">
            Once submitted, your digital application routes straight to the corresponding subdivision Line Superintendent (LS) and Sub-Divisional Officer (SDO). They execute physical and digital auditing to verify structural asset safety, matching ownership mutation records, and active tax metrics.
          </p>
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950 shadow-sm">
            <div className="flex space-x-2">
              <strong className="font-bold shrink-0">Critical Notice:</strong>
              <span>
                Clear all outstanding bill dues, delayed arrears, and commercial surcharges prior to final portal upload. MEPCO systems instantly put a hold on processing name changes for connections tied to running commercial disputes or active court-ordered stay alerts.
              </span>
            </div>
          </div>
        </article>

        {/* Section 5: Timeline & Fee Structure */}
        <article id="timeline" className="scroll-mt-6">
          <h2 className="mb-4 border-b border-slate-100 pb-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Timeline, Fee Structure, and Crucial Insights
          </h2>
          <p className="mb-6 leading-relaxed text-slate-800">
            The name change processing speed depends largely on the clarity of your title records and current subdivision caseload variations.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 text-emerald-950 shadow-sm">
              <h4 className="mb-2 text-base font-bold text-emerald-950">
                Expected Processing Time
              </h4>
              <p className="text-sm leading-relaxed text-emerald-900">
                Simple spelling adjustments typically update within **1 to 2 billing cycles**. Property transfers, inheritance distributions, or multi-owner transfers can span **3 to 4 weeks** to allow for strict manual ledger updates.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-950 shadow-sm">
              <h4 className="mb-2 text-base font-bold text-slate-950">
                Fee Structure Updates
              </h4>
              <p className="text-sm leading-relaxed text-slate-900">
                While the processing itself features no hidden upfront costs, you will likely be issued a modern **Demand Notice** for updating old capital security deposits to match 2026 regulatory rates.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-600">Pro-Tips for Swift Approval</h4>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700 leading-relaxed">
              <li>Cross-verify that the target name perfectly mirrors the spelling on your physical CNIC card.</li>
              <li>Always print a hard copy folder containing your digital confirmation receipt and token logs.</li>
              <li>Visit your designated local Sub-Divisional Office once tracking registers active assignment updates to speed up field validation.</li>
            </ul>
          </div>
        </article>
      </section>

      {/* Section 6: Contextual Regional SEO Footer Navigation */}
      <section className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="mb-6 text-xl font-black uppercase tracking-tight text-slate-900">
          Related MEPCO Support Tools
        </h2>

        <div className="grid gap-4 text-sm font-medium md:grid-cols-3">
          {supportGuides.map((guide) => (
            <a
              key={guide.href}
              href={guide.href}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 p-5 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-50/20"
            >
              <div>
                <span className="block font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {guide.title}
                </span>
                <span className="mt-2 block text-xs font-normal text-slate-500 leading-relaxed">
                  {guide.desc}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}