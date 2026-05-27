import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Vehari Bill Check Online 2026 | Duplicate Bill Download",
  description:
    "Check your MEPCO Vehari electricity bill online using your 14-digit reference number. View, print, or download duplicate bill details.",
};

export default function VehariBillCheckPage() {
  return (
    <main className="mx-auto max-w-[900px] px-5 py-10 text-gray-900 leading-relaxed">
      <h1 className="mb-2 text-4xl font-bold text-[#005b2e] md:text-5xl">
        MEPCO Vehari Bill Check Online
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        Vehari consumers can check their MEPCO electricity bill online using the
        14-digit reference number printed on a previous electricity bill.
      </p>

      {/* Interactive Input Form Mockup */}
      <section className="mb-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Enter Your Details</h2>
        <form className="space-y-4 sm:flex sm:space-y-0 sm:space-x-3">
          <div className="flex-1">
            <label htmlFor="refNumber" className="sr-only">14-Digit Reference Number</label>
            <input
              type="text"
              id="refNumber"
              placeholder="e.g., 05 15213 1234567"
              maxLength={14}
              className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-lg placeholder-gray-400 focus:border-[#005b2e] focus:outline-none focus:ring-2 focus:ring-[#005b2e]/20"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-[#005b2e] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#004221] sm:w-auto"
          >
            Check Bill
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-500">
          Make sure to enter all 14 digits without spaces or hyphens.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-gray-100 bg-gray-50/50 p-6">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl text-gray-800">
          How To Check Vehari MEPCO Bill
        </h2>

        <ol className="list-outside list-decimal pl-5 space-y-3 text-gray-700">
          <li>Find your <strong>14-digit reference number</strong> from an old bill. It is usually located in the top-left header section.</li>
          <li>Enter the reference number in the online bill checker tool above.</li>
          <li>Click the <strong>Check Bill</strong> button.</li>
          <li>View, print, or download your duplicate bill completely free.</li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl text-gray-800">
          Vehari MEPCO Services
        </h2>

        <p className="text-gray-700">
          MEPCO users in Vehari can access duplicate bill downloads, bill
          estimation, reference number guidance, peak hours information, and
          electricity saving tips online.
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
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
          className="inline-block rounded-xl bg-gray-100 px-6 py-3.5 font-bold text-gray-700 transition-colors hover:bg-gray-200"
        >
          Back To Homepage
        </Link>
      </div>
    </main>
  );
}