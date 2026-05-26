import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Multan Bill Check Online 2026",
  description:
    "Check MEPCO Multan electricity bill online instantly using your 14-digit reference number. Download duplicate bill, print copy, and view bill details.",
};

export default function MultanBillCheckPage() {
  return (
    <main className="mx-auto max-w-[900px] px-5 py-10 text-gray-900 leading-relaxed">
      <h1 className="mb-5 text-4xl font-bold text-[#005b2e] md:text-5xl">
        MEPCO Multan Bill Check Online
      </h1>

      <p className="text-lg">
        Residents of Multan can easily check their MEPCO electricity bills online
        using the 14-digit reference number printed on their previous bill copy.
      </p>

      <section aria-labelledby="how-to-check">
        <h2 id="how-to-check" className="mb-4 mt-8 text-2xl font-semibold md:text-3xl">
          How To Check Multan MEPCO Bill
        </h2>
        <ol className="list-inside list-decimal space-y-2 text-base">
          <li>Open the MEPCO bill checking portal.</li>
          <li>Enter your 14-digit reference number.</li>
          <li>Click on the Check Bill button.</li>
          <li>View, download, or print your duplicate bill.</li>
        </ol>
      </section>

      <section aria-labelledby="services">
        <h2 id="services" className="mb-4 mt-8 text-2xl font-semibold md:text-3xl">
          Multan MEPCO Services
        </h2>
        <p>
          MEPCO consumers in Multan can access duplicate bill downloads, reference
          number guidance, estimated bill calculators, and peak hours information
          through online services.
        </p>
      </section>

      <section aria-labelledby="notice" className="rounded-xl bg-amber-50 p-6 border border-amber-200 mt-8">
        <h2 id="notice" className="mb-2 text-xl font-bold text-amber-950">
          Important Notice
        </h2>
        <p className="text-amber-900 text-sm leading-normal">
          This website is an independent informational platform and is not officially
          affiliated with MEPCO, PITC, or WAPDA.
        </p>
      </section>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-block rounded-xl bg-[#005b2e] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#004221] focus:outline-none focus:ring-4 focus:ring-green-200"
        >
          Back To Homepage
        </Link>
      </div>
    </main>
  );
}