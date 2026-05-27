import Link from "next/link";
import { Metadata } from "next";

// 1. Dynamic SEO Metadata
const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `MEPCO Lodhran Bill Check Online ${currentYear} | Download Duplicate Bill`,
  description: `Check your MEPCO Lodhran electricity bill online. Free tool to download a duplicate bill, print the latest invoice, and view bill history using a 14-digit reference number or customer ID.`,
  alternates: {
    canonical: "/lodhran-bill-check",
  },
  keywords: [
    "MEPCO Lodhran bill",
    "online electricity bill check Lodhran",
    "MEPCO duplicate bill download",
    "Lodhran bill online check",
    "MEPCO wapda bill Lodhran"
  ],
};

export default function LodhranBillCheckPage() {
  const currentYear = new Date().getFullYear();

  // 2. SEO Schema Markup (Structured Data)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": "How to Check MEPCO Lodhran Bill Online",
        "description": "Follow these simple steps to check and download your Lodhran electricity bill online.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "text": "Find your 14-digit reference number from any old physical bill."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "text": "Enter the 14-digit reference number into the MEPCO bill input field."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "text": "Click on the check/view bill button to fetch the latest billing statement."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "text": "Click on download or press Ctrl+P to print your duplicate MEPCO bill."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I check my MEPCO Lodhran bill without a paper bill?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if you have your 14-digit reference number or customer ID, you can easily check your bill online without needing a physical copy."
            }
          },
          {
            "@type": "Question",
            "name": "Can I print my Lodhran MEPCO duplicate bill?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, after viewing the bill online, you can download the PDF or print it directly for payment submission at any bank or post office."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Injecting Schema Markup for Google Bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        <section className="mx-auto max-w-4xl px-6 py-12">
          
          {/* Breadcrumb style text for SEO semantic structure */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-green-700">
            MEPCO Regional Bill Check &gt; Lodhran
          </p>

          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            MEPCO Lodhran Bill Check Online {currentYear}
          </h1>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Are you looking for your monthly electricity bill? Lodhran users can now easily check their <strong>MEPCO electricity bill online</strong> by using their 14-digit reference number or customer ID. This free portal helps you view, download, and print your duplicate MEPCO bill for the Lodhran region instantly.
          </p>

          {/* How-To Section */}
          <div className="mb-8 rounded-2xl border border-green-100 bg-green-50 p-6">
            <h2 className="mb-3 text-2xl font-semibold text-green-900">
              How to Check MEPCO Lodhran Bill Online
            </h2>
            <ol className="list-decimal space-y-3 pl-5 text-slate-700">
              <li>Locate your <strong>14-digit reference number</strong> on a previous month's bill copy.</li>
              <li>Enter the reference number in the digital bill check form above.</li>
              <li>View your latest MEPCO electricity bill online with detailed tax breakdowns.</li>
              <li>Download the PDF version or print the duplicate bill for official payment.</li>
            </ol>
          </div>

          {/* Core Content Block with Keywords */}
          <h2 className="mb-3 text-2xl font-semibold">
            Get Your MEPCO Lodhran Duplicate Bill
          </h2>
          <p className="mb-6 leading-8 text-slate-700">
            If your printed WAPDA bill is lost, damaged, or has not been delivered yet, the online <strong>MEPCO Lodhran duplicate bill</strong> service is the quickest alternative. It allows consumers to verify vital details such as the due date, total payable amount, current month's consumed units, and previous payment status.
          </p>

          {/* Coverage Section */}
          <h2 className="mb-3 text-2xl font-semibold">
            Areas Covered Under Lodhran MEPCO Division
          </h2>
          <p className="mb-6 leading-8 text-slate-700">
            MEPCO ensures a stable power supply across Lodhran district and its surrounding sub-divisions. Grid consumers from <strong>Lodhran City, Dunyapur, Kehror Pakka</strong>, and nearby rural areas can seamlessly use these online utility bill management features.
          </p>

          {/* Internal Linking (Fixed URL for Vehari) */}
          <div className="mb-8 rounded-2xl border border-slate-200 p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              Related MEPCO Regions & Cities
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link className="rounded-xl border p-4 transition hover:bg-slate-50 hover:text-green-700" href="/multan-bill-check">
                <strong>MEPCO Multan Bill Check</strong>
              </Link>
              <Link className="rounded-xl border p-4 transition hover:bg-slate-50 hover:text-green-700" href="/khanewal-bill-check">
                <strong>MEPCO Khanewal Bill Check</strong>
              </Link>
              <Link className="rounded-xl border p-4 transition hover:bg-slate-50 hover:text-green-700" href="/bahawalpur-bill-check">
                <strong>MEPCO Bahawalpur Bill Check</strong>
              </Link>
              <Link className="rounded-xl border p-4 transition hover:bg-slate-50 hover:text-green-700" href="/vehari-bill-check">
                <strong>MEPCO Vehari Bill Check</strong>
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className="mb-4 text-2xl font-semibold">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-5">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-semibold text-slate-800">
                Can I check my MEPCO Lodhran bill without a physical paper copy?
              </h3>
              <p className="mt-1 text-slate-700">
                Yes, as long as you know your 14-digit reference number or consumer ID, you can instantly fetch your bill summary online without needing the physical mail copy.
              </p>
            </div>

            <div className="pb-4">
              <h3 className="text-lg font-semibold text-slate-800">
                Is the downloaded Lodhran MEPCO duplicate bill valid for payment?
              </h3>
              <p className="mt-1 text-slate-700">
                Absolutely. The printed duplicate online bill is 100% legal and accepted at all authorized commercial banks, Omni shops, EasyPaisa, JazzCash, and Pakistan Post offices.
              </p>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}