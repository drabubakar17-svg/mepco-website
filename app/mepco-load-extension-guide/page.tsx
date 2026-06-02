import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEPCO Load Extension Online Guide (2026) | Step-by-Step",
  description:
    "Complete official process to increase your MEPCO electricity sanctioned load online via ENC portal. Required documents, single vs three-phase fees, & timeline.",
  keywords: [
    "MEPCO load extension",
    "increase electricity load MEPCO",
    "ENC portal Pakistan change of load",
    "three phase meter load limit mepco",
    "mepco demand notice load extension",
    "how to increase sanctioned load online"
  ],
  alternates: {
    canonical: "https://mepcoonlinebill.net/mepco-load-extension-guide",
  },
};

export default function MepcoLoadExtensionGuidePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Breadcrumbs for SEO structural crawling - Fixed orphan path */}
      <nav className="text-xs font-medium text-slate-500 mb-4 tracking-wide uppercase" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="hover:text-emerald-600 transition-colors">Home</a></li>
          <li className="text-slate-400">/</li>
          <li className="text-slate-800 font-semibold" aria-current="page">Load Extension</li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4 leading-tight">
          MEPCO Load Extension Guide 2026: How to Increase Sanctioned Load Online
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed text-slate-700 font-normal mb-4">
          Running additional inverter air conditioners, heavy commercial machinery, or agricultural water pumps can cause your power supply to trip if you exceed your authorized threshold. This comprehensive, step-by-step guide covers how to officially request a **MEPCO load extension** using the digital ENC system, calculate your required meter phase, compile necessary verification documents, and clear your demand notices fast.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium border-y border-slate-200 py-3">
          <span><strong>Authority Covered:</strong> Multan Electric Power Company (MEPCO)</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span><strong>System Phase:</strong> 2026 Online Digital Portal (ENC)</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span><strong>Last Verified:</strong> June 2026</span>
        </div>
      </header>

      {/* SEO Table of Contents Target Hook */}
      <section className="bg-slate-50 rounded-2xl p-6 mb-10 border border-slate-200/60 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">In This Comprehensive Guide:</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm font-medium text-emerald-700">
          <li><a href="#what-is-load" className="hover:underline hover:text-emerald-800">1. Understanding Sanctioned Load Limits</a></li>
          <li><a href="#phase-comparison" className="hover:underline hover:text-emerald-800">2. Single-Phase vs. Three-Phase Thresholds</a></li>
          <li><a href="#required-documents" className="hover:underline hover:text-emerald-800">3. Mandatory Verification Paperwork</a></li>
          <li><a href="#step-by-step-process" className="hover:underline hover:text-emerald-800">4. Online Step-by-Step Application Steps</a></li>
          <li><a href="#fee-timeline" className="hover:underline hover:text-emerald-800">5. Real Cost, Demand Notices & Timelines</a></li>
        </ul>
      </section>

      <section className="space-y-12">
        {/* Section 1 */}
        <div id="what-is-load" className="scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight border-b border-slate-100 pb-2">
            What is a MEPCO Sanctioned Load Extension?
          </h2>
          <p className="leading-relaxed text-slate-800 mb-4">
            Every electrical connection provided by MEPCO has a predefined **sanctioned load** measured in kilowatts (kW), printed right on your monthly utility bill. This value denotes the maximum electricity load your internal wiring and the external grid infrastructure are authorized to draw at any single moment.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 text-amber-950 p-4 rounded-r-xl my-4 text-sm leading-relaxed">
            <strong className="font-bold block mb-1">Why Legality Matters:</strong> Running connected loads beyond your official sanctioned threshold is considered a technical violation under NEPRA regulations. It risks damaging local transformers, burns out service drops, causes low-voltage performance across your building, and can yield unexpected penalty surcharges on your bill.
          </div>
        </div>

        {/* Section 2 */}
        <div id="phase-comparison" className="scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight border-b border-slate-100 pb-2">
            Single-Phase vs. Three-Phase Load Limits
          </h2>
          <p className="leading-relaxed text-slate-800 mb-6">
            Depending on how much total power capacity your property demands, your expansion may cross standard hardware capacity thresholds, forcing a physical upgrade of your electricity meter system.
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm mb-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold">
                  <th className="p-4 whitespace-nowrap">Total Requested Load</th>
                  <th className="p-4 whitespace-nowrap">Required Connection Phase</th>
                  <th className="p-4">Typical Equipment Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Up to 5 kW</td>
                  <td className="p-4 text-emerald-700 font-medium">Single-Phase Meter</td>
                  <td className="p-4 text-slate-800">Basic household setups, light illumination, ceiling fans, refrigerator, and 1 to 2 standard inverter AC units.</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 font-semibold text-slate-900">Above 5 kW up to 40 kW</td>
                  <td className="p-4 text-blue-700 font-medium">Three-Phase Meter</td>
                  <td className="p-4 text-slate-800">Large multi-story homes, commercial enterprises, central air systems, high-horsepower water pumps, and small manufacturing machinery.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3 */}
        <div id="required-documents" className="scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight border-b border-slate-100 pb-2">
            Mandatory Documents for MEPCO Load Modification
          </h2>
          <p className="leading-relaxed text-slate-800 mb-4">
            To prevent system rejections inside the official processing queues, ensure you compile digital copies of all required verification paperwork before initiating your case file:
          </p>
          <ul className="list-none space-y-3 pl-1 text-slate-800">
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-3 text-lg">✓</span>
              <span><strong>Applicant CNIC:</strong> Clear, unexpired front and back digital copies of the National Identity Card belonging to the property owner.</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-3 text-lg">✓</span>
              <span><strong>Paid Electricity Bill:</strong> A high-resolution copy of your most recent monthly paid MEPCO bill showing zero outstanding arrears.</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-3 text-lg">✓</span>
              <span><strong>Legal Ownership Documentation:</strong> Official property title registries, <em>Fard-e-Malkiat</em>, or authorized housing allotment letter proving land ownership.</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-3 text-lg">✓</span>
              <span><strong>Tenant Provisions (If Applicable):</strong> If you do not own the property, an explicit **No Objection Certificate (NOC)** signed by your landlord, paired alongside a verified copy of their matching CNIC.</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 font-bold mr-3 text-lg">✓</span>
              <span><strong>Wiring Fitness Certificate:</strong> For larger expansion modifications (primarily commercial or industrial steps exceeding 15 kW), an authorization stamp from a recognized electric inspector layout.</span>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div id="step-by-step-process" className="scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight border-b border-slate-100 pb-2">
            How to Apply for MEPCO Load Extension Online
          </h2>
          <p className="leading-relaxed text-slate-800 mb-6">
            The paper application protocol has transitioned fully into a digital workflow managed directly through Pakistan&apos;s centralized consumer portal system.
          </p>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-md border border-slate-800">
            <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
              <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">Official Web Protocol</span>
            </div>
            
            <ol className="relative border-l border-slate-800 pl-6 space-y-8 text-sm">
              <li className="relative">
                <span className="absolute -left-10 top-0 bg-emerald-500 text-slate-950 font-bold text-xs h-7 w-7 rounded-full flex items-center justify-center border-4 border-slate-900">1</span>
                <h3 className="font-bold text-base text-white mb-1">Access the ENC Portal</h3>
                <p className="text-slate-400 leading-relaxed">
                  Navigate to the official **Electricity New Connection Portal (enc.com.pk)**. In the left navigation tree, select the specialized function labeled **Change of Name/Tariff/Load**.
                </p>
              </li>
              <li className="relative">
                <span className="absolute -left-10 top-0 bg-emerald-500 text-slate-950 font-bold text-xs h-7 w-7 rounded-full flex items-center justify-center border-4 border-slate-900">2</span>
                <h3 className="font-bold text-base text-white mb-1">Specify Your Parameters</h3>
                <p className="text-slate-400 leading-relaxed">
                  Choose **MEPCO** as your distribution company, input your current 14-digit consumer **Reference Number**, and select &quot;Load Extension&quot; as your processing action category.
                </p>
              </li>
              <li className="relative">
                <span className="absolute -left-10 top-0 bg-emerald-500 text-slate-950 font-bold text-xs h-7 w-7 rounded-full flex items-center justify-center border-4 border-slate-900">3</span>
                <h3 className="font-bold text-base text-white mb-1">Upload Digital Forms</h3>
                <p className="text-slate-400 leading-relaxed">
                  Fill in the requested load values (kW) and upload high-resolution scanned attachments of your identity cards, paid bills, and property fard files.
                </p>
              </li>
              <li className="relative">
                <span className="absolute -left-10 top-0 bg-emerald-500 text-slate-950 font-bold text-xs h-7 w-7 rounded-full flex items-center justify-center border-4 border-slate-900">4</span>
                <h3 className="font-bold text-base text-white mb-1">Print and Submit Tracking Documentation</h3>
                <p className="text-slate-400 leading-relaxed">
                  Print a hardcopy copy of your generated online submission token, attach your physical files together, and route it to your nearest regional MEPCO Sub-Division office for operational logging.
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* Section 5 */}
        <div id="fee-timeline" className="scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight border-b border-slate-100 pb-2">
            MEPCO Demand Notices, Costs & Verified Approval Timelines
          </h2>
          <p className="leading-relaxed text-slate-800 mb-4">
            Once submitted, your application initiates a localized evaluation process. A field team, typically headed by your local Line Superintendent (LS) or Sub-Divisional Officer (SDO), coordinates a structural technical audit of your premises. They check local feeders to verify your neighborhood transformer isn&apos;t at max capacity.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">Understanding the Demand Notice Fee</h3>
          <p className="leading-relaxed text-slate-800 mb-4">
            There is no flat general rate for a load extension. MEPCO calculates total structural costs via a formalized **Demand Notice**. This specific payment voucher accounts for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-800 mb-6">
            <li><strong>Capital Cost Security Charges:</strong> The baseline cost per kilowatt needed to reinforce network capability.</li>
            <li><strong>Equipment Costs:</strong> Expenses linked to hardware replacement, such as scaling your connection up to a secure 3-phase meter setup or providing dynamic service drop lines.</li>
          </ul>

          <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 rounded-xl p-5 shadow-sm">
            <h4 className="font-bold text-base mb-1">Expected Processing Timeline:</h4>
            <p className="text-sm leading-relaxed text-emerald-900">
              Extensions requiring basic single-phase adjustments clear processing pipelines within **7 to 14 business days**. Modifications prompting advanced three-phase line structural upgrades can extend to **15 to 30 business days**, depending on local operational stock and transformer capacity levels.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Contextual Linking Modules */}
      <section className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-black text-slate-900 mb-6 tracking-tight uppercase">
          Related Digital Support Centers
        </h2>

        <div className="grid gap-4 md:grid-cols-3 font-medium text-sm">
          <a
            href="/mepco-new-connection-guide"
            className="flex flex-col justify-between rounded-xl border border-slate-200 p-5 hover:border-emerald-500 hover:bg-emerald-50/20 shadow-sm transition-all group"
          >
            <span className="text-slate-900 font-bold group-hover:text-emerald-700">New Connection Guide</span>
            <span className="text-xs text-slate-500 font-normal mt-2">Setting up a completely fresh residential or commercial connection line from scratch.</span>
          </a>

          <a
            href="/mepco-meter-complaint-guide"
            className="flex flex-col justify-between rounded-xl border border-slate-200 p-5 hover:border-emerald-500 hover:bg-emerald-50/20 shadow-sm transition-all group"
          >
            <span className="text-slate-900 font-bold group-hover:text-emerald-700">Meter Complaint Center</span>
            <span className="text-xs text-slate-500 font-normal mt-2">Resolving malfunctioning hardware displays, faulty wiring configurations, or fast counters.</span>
          </a>

          <a
            href="/mepco-bill-correction-guide"
            className="flex flex-col justify-between rounded-xl border border-slate-200 p-5 hover:border-emerald-500 hover:bg-emerald-50/20 shadow-sm transition-all group"
          >
            <span className="text-slate-900 font-bold group-hover:text-emerald-700">Bill Rectification Hub</span>
            <span className="text-xs text-slate-500 font-normal mt-2">Fixing unexpected detection bill readings and applying for installment structures.</span>
          </a>
        </div>
      </section>
    </main>
  );
}
