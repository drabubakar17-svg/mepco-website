import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEPCO Khanewal Bill Check Online 2026 | Duplicate Bill Download",
  description:
    "Check your MEPCO Khanewal electricity bill online instantly using your 14-digit reference number. View, print, or download duplicate bills and check MEPCO customer service details.",
};

export default function KhanewalBillCheckPage() {
  return (
    <main className="mx-auto max-w-[900px] px-5 py-10 text-gray-900 leading-relaxed">
      {/* Main Heading */}
      <h1 className="mb-5 text-4xl font-bold text-[#005b2e] md:text-5xl">
        MEPCO Khanewal Bill Check Online
      </h1>

      <p className="text-lg mb-6">
        Residents of Khanewal and surrounding areas can easily check their MEPCO electricity bills 
        online. By using the 14-digit reference number or 10-digit consumer ID printed on any previous 
        utility copy, you can view your current bill amount, due date, and payment status instantly.
      </p>

      {/* Section: How to Check Bill */}
      <section
        aria-labelledby="how-to-check"
        className="mt-8 border border-gray-100 rounded-xl p-6 bg-gray-50/50"
      >
        <h2
          id="how-to-check"
          className="mb-4 text-2xl font-semibold md:text-3xl text-gray-800"
        >
          How To Check Khanewal MEPCO Bill Online
        </h2>
        <p className="mb-4 text-gray-600">
          Follow these simple steps to retrieve your duplicate electricity bill:
        </p>
        <ol className="list-inside list-decimal space-y-3 text-base text-gray-700 pl-2">
          <li>
            Locate your <strong>14-digit Reference Number</strong> (found on the top-left or bottom portion of your older bill).
          </li>
          <li>
            Enter the reference number into the official MEPCO online billing input portal.
          </li>
          <li>
            Ensure you choose the correct connection type (e.g., Residential or Commercial) if prompted.
          </li>
          <li>
            Click the <strong>"Check Bill"</strong> or <strong>"View/Print Duplicate Bill"</strong> button.
          </li>
          <li>
            The system will display your latest monthly bill details. From here, you can print a copy or download it as a PDF.
          </li>
        </ol>
      </section>

      {/* Section: Khanewal MEPCO Services */}
      <section
        aria-labelledby="services"
        className="mt-8"
      >
        <h2
          id="services"
          className="mb-4 text-2xl font-semibold md:text-3xl text-gray-800"
        >
          Khanewal MEPCO Consumer Services
        </h2>
        <p className="mb-4">
          The Multan Electric Power Company (MEPCO) provides specialized digital and on-ground services for consumers registered under the Khanewal division. These include:
        </p>
        <ul className="list-inside list-disc space-y-2 text-base text-gray-700 pl-2 mb-4">
          <li><strong>Duplicate Bill Downloads:</strong> Instant access to misplaced or lost billing information.</li>
          <li><strong>Bill Estimation Tools:</strong> Calculate your projected monthly dues based on your current unit consumption.</li>
          <li><strong>New Connection Applications:</strong> Track or apply for a fresh residential, commercial, or industrial meter online.</li>
          <li><strong>SMS Registration:</strong> Receive your monthly billing details directly on your mobile device.</li>
        </ul>
      </section>

      {/* Section: Peak Hours and Energy Saving */}
      <section
        aria-labelledby="peak-hours"
        className="mt-8"
      >
        <h2
          id="peak-hours"
          className="mb-4 text-2xl font-semibold md:text-3xl text-gray-800"
        >
          MEPCO Peak Hours & Savings Guide
        </h2>
        <p className="mb-4">
          To manage and minimize your monthly electricity cost, it is highly recommended to reduce heavy appliance usage during MEPCO peak hours. Rates per unit are significantly higher during these intervals:
        </p>
        
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border border-gray-200 font-bold">Season</th>
                <th className="p-3 border border-gray-200 font-bold">Peak Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-200">Apr to Oct (Summer)</td>
                <td className="p-3 border border-gray-200">6:30 PM to 10:30 PM</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-200">Nov to Mar (Winter)</td>
                <td className="p-3 border border-gray-200">5:00 PM to 9:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Helpline & Complaints */}
      <section
        aria-labelledby="complaints"
        className="mt-8"
      >
        <h2
          id="complaints"
          className="mb-4 text-2xl font-semibold md:text-3xl text-gray-800"
        >
          MEPCO Khanewal Customer Helpline & Complaints
        </h2>
        <p className="mb-4">
          If you are facing issues regarding unexpected power outages, faulty meters, or billing discrepancies, you can reach out to the dedicated MEPCO helpline:
        </p>
        <ul className="list-inside list-disc space-y-2 text-base text-gray-700 pl-2">
          <li><strong>MEPCO Central Helpline:</strong> 061-9210334</li>
          <li><strong>Toll-Free Complaint Number:</strong> 0800-61366</li>
          <li><strong>Toll-Free SMS Service:</strong> Send your query or complaint to 8118</li>
        </ul>
      </section>

      {/* Section: Disclaimer Notice */}
      <section
        aria-labelledby="notice"
        className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6"
      >
        <h2
          id="notice"
          className="mb-2 text-xl font-bold text-amber-950"
        >
          Important Notice & Disclaimer
        </h2>
        <p className="text-sm leading-normal text-amber-900">
          This website is an independent informational and utility guide platform. It is not 
          officially affiliated with, authorized by, or endorsed by the Multan Electric Power Company (MEPCO), 
          Pakistan Information Technology Company (PITC), or the Water and Power Development Authority (WAPDA). 
          To access official governmental records, please visit the designated MEPCO portals directly.
        </p>
      </section>

      {/* Back to Home Action Button */}
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