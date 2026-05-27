import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Bahawalpur Bill Check Online 2026 | Duplicate Bill Download",
  description:
    "Check your MEPCO Bahawalpur electricity bill online using your 14-digit reference number. View, print, or download duplicate bill details.",
};

export default function BahawalpurBillCheckPage() {
  return (
    <main className="mx-auto max-w-[900px] px-5 py-10 text-gray-900 leading-relaxed">
      <h1 className="mb-5 text-4xl font-bold text-[#005b2e] md:text-5xl">
        MEPCO Bahawalpur Bill Check Online
      </h1>

      <p className="mb-6 text-lg">
        Bahawalpur consumers can check their MEPCO electricity bill online using
        the 14-digit reference number printed on a previous electricity bill.
      </p>

      <section className="mt-8 rounded-xl border border-gray-100 bg-gray-50/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          How To Check Bahawalpur MEPCO Bill
        </h2>

        {/* Changed list-inside to list-outside pl-5 for cleaner alignment */}
        <ol className="list-outside list-decimal pl-5 space-y-3">
          <li>Find your 14-digit reference number from an old bill.</li>
          <li>Enter the reference number in the online bill checker.</li>
          <li>Click Check Bill.</li>
          <li>View, print, or download your duplicate bill.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Bahawalpur MEPCO Services
        </h2>

        <p>
          MEPCO users in Bahawalpur can access duplicate bill downloads, bill
          estimation, reference number guidance, peak hours information, and
          electricity saving tips online.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6" aria-label="Disclaimer">
        <h2 className="mb-2 text-xl font-bold text-amber-950">
          Important Notice
        </h2>

        <p className="text-sm leading-normal text-amber-900">
          This website is an independent informational platform and is not
          officially affiliated with MEPCO, PITC, WAPDA, or any government
          department.
        </p>
      </section>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-block rounded-xl bg-[#005b2e] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#004221]"
          title="Return to the homepage"
        >
          Back To Homepage
        </Link>
      </div>
    </main>
  );
}