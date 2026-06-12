import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All MEPCO Guides | Bill, Taxes, Complaints, Solar & Tariff Help",
  description:
    "Browse all MEPCO consumer guides including bill help, taxes, FPA, QTA, complaints, connection, tariff, solar, and net metering information.",
};

const groups = [
  {
    title: "Bill Help",
    links: [
      ["/mepco-duplicate-bill-guide", "Duplicate Bill Guide"],
      ["/mepco-reference-number-guide", "Reference Number Guide"],
      ["/mepco-customer-id-guide", "Customer ID Guide"],
      ["/mepco-bill-check-by-cnic", "Bill Check by CNIC"],
      ["/mepco-bill-due-date-guide", "Due Date Guide"],
      ["/mepco-bill-payment-methods-guide", "Payment Methods"],
    ],
  },
  {
    title: "Tariff, Taxes & Charges",
    links: [
      ["/mepco-tariff-guide", "Tariff Guide"],
      ["/mepco-taxes-explained", "Taxes Explained"],
      ["/mepco-fpa-charges-guide", "FPA Charges"],
      ["/mepco-qta-charges-guide", "QTA Charges"],
      ["/mepco-bill-slabs-guide", "Bill Slabs"],
      ["/mepco-200-units-rule", "200 Units Rule"],
    ],
  },
  {
    title: "Complaints & Connection",
    links: [
      ["/mepco-new-connection-guide", "New Connection"],
      ["/mepco-complaint-tracking-guide", "Complaint Tracking"],
      ["/mepco-meter-complaint-guide", "Meter Complaint"],
      ["/mepco-transformer-complaint-guide", "Transformer Complaint"],
      ["/mepco-name-change-guide", "Name Change"],
      ["/mepco-demand-notice-guide", "Demand Notice"],
    ],
  },
  {
    title: "Solar & Usage",
    links: [
      ["/mepco-solar-savings-calculator", "Solar Savings Calculator"],
      ["/mepco-solar-roi-calculator", "Solar ROI Calculator"],
      ["/mepco-net-metering-guide", "Net Metering Guide"],
      ["/mepco-peak-hours-guide", "Peak Hours Guide"],
      ["/mepco-meter-reading-guide", "Meter Reading Guide"],
      ["/mepco-load-shedding-guide", "Load Shedding Guide"],
    ],
  },
];

export default function AllMepcoGuidesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-bold text-emerald-700">
          ← Back to MEPCO Bill Check
        </Link>

        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950">
          All MEPCO Consumer Guides
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Browse helpful MEPCO guides for duplicate bills, reference number,
          taxes, tariff, complaints, new connection, solar, and net metering.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <section
              key={group.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-black text-slate-950">
                {group.title}
              </h2>

              <ul className="mt-5 grid gap-3">
                {group.links.map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      <span>{label}</span>
                      <span>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}