import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

// Lifetime Dynamic Year
const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: "MEPCO Reference Number Guide | 14 Digit Bill Number",
  description: "Learn exactly where to find your 14-digit MEPCO reference number on your utility bill. Step-by-step guide to check, print, and download your duplicate MEPCO bill online.",
  alternates: {
    canonical: "https://mepco-website-jx8g.vercel.app/mepco-reference-number-guide",
  },
  openGraph: {
    title: "MEPCO Reference Number Guide | 14 Digit Bill Number",
    description: "Find your 14-digit MEPCO reference number easily and check your duplicate electricity bill online.",
    url: "https://mepco-website-jx8g.vercel.app/mepco-reference-number-guide",
    type: "article",
  },
};

export default function MepcoReferenceNumberGuidePage() {
  // Deep SEO Schema Markup (JSON-LD)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": `How to Find and Use MEPCO 14-Digit Reference Number (${currentYear})`,
        "description": "Step by step instructions to locate your MEPCO electricity bill reference number and check your duplicate bill online.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Locate Bill Copy",
            "text": "Take an old or current MEPCO electricity bill copy.",
            "url": "https://mepco-website-jx8g.vercel.app/mepco-reference-number-guide#locate"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Find 14-Digit Number",
            "text": "Look at the top section, usually below or next to the Consumer Name / Customer ID, to find the 14-digit reference number.",
            "url": "https://mepco-website-jx8g.vercel.app/mepco-reference-number-guide#find"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Enter on Bill Check Page",
            "text": "Go to the MEPCO online bill check portal and input the 14 digits without spaces or hyphens.",
            "url": "https://mepco-website-jx8g.vercel.app/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the MEPCO reference number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The MEPCO reference number is a unique 14-digit account number assigned to every electricity consumer under Multan Electric Power Company. It is essential for checking and downloading duplicate bills online."
            }
          },
          {
            "@type": "Question",
            "name": "Can I check my MEPCO bill by name or CNIC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Currently, MEPCO online bill checking is only officially supported via the 14-digit reference number or Customer ID. Checking by name or CNIC is not available."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Injecting Structured Data for Rich Snippets */}
      <Script
        id="mepco-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <article className="mx-auto max-w-4xl px-4 py-12">
          
          {/* Breadcrumb Section */}
          <nav className="mb-3 text-xs font-bold uppercase tracking-wider text-green-700" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">MEPCO Home</Link> &gt; <span>Reference Number Guide</span>
          </nav>

          <header>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-950">
              MEPCO Reference Number Guide {currentYear}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              The <strong>MEPCO reference number</strong> is a vital 14-digit unique identifier printed on your 
              multan electricity bill. Whether you want to check your latest bill amount, download a 
              PDF copy, or print a duplicate MEPCO bill, this 14-digit number is mandatory for {currentYear}.
            </p>
          </header>

          {/* Section 1 */}
          <section id="find" className="mt-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">
              Where Is the 14-Digit Reference Number Located?
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              You can quickly locate your reference number near the <strong>top-left or top-right section</strong> of 
              your physical MEPCO bill copy. It is positioned prominently alongside other key metrics like the 
              <strong>Consumer ID</strong>, billing month, tariff details, and connection date.
            </p>

            <div className="mt-5 rounded-xl bg-green-50 p-5 border border-green-100">
              <span className="font-bold text-green-800 block mb-1">
                Example Format:
              </span>
              <span className="text-xl font-black tracking-widest text-slate-900 block sm:text-2xl font-mono">
                12 34567 8901234
              </span>
              <p className="mt-2 text-xs text-slate-500">
                *Note: Do not include spaces or alpha characters while pasting this in the bill checker utility.*
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="locate" className="mt-10 space-y-6 leading-relaxed text-slate-700">
            <h2 className="text-2xl font-bold text-slate-950">
              How to Check Duplicate Bill Using Reference Number
            </h2>
            <p>
              Follow these simple, verified steps to extract your monthly utility statements instantly:
            </p>
            <ol className="list-decimal space-y-3 pl-5 font-medium text-slate-800">
              <li>
                <span className="text-slate-600 font-normal">Navigate to the main portal via </span>
                <Link href="/" className="text-green-700 underline hover:text-green-800 font-bold">MEPCO Online Bill Check</Link>.
              </li>
              <li>Input your exact <strong>14-digit reference number</strong> inside the submission input field.</li>
              <li>Verify that you haven&apos;t typed any wrong digits or customer sub-codes.</li>
              <li>Click on the <strong>&ldquo;Check Bill&rdquo;</strong> button to load the live duplicate HTML or PDF version.</li>
            </ol>

            <hr className="my-8 border-slate-200" />

            <h2 className="text-2xl font-bold text-slate-950">
              Reference Number vs Customer ID Explained
            </h2>
            <p>
              Many consumers confuse the <strong>Reference Number</strong> with the <strong>Customer ID</strong>. Chatting with automated systems or checking manually, the main difference lies in their format. The reference number is strictly 
              a 14-digit code (accompanied by a consumer type suffix like &apos;R&apos; or &apos;U&apos;), whereas the Customer ID is a 
              separate identifier. For smooth processing, always prioritize the 14-digit code.
            </p>
          </section>

          {/* FAQs Section for extra SEO visibility */}
          <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900">Can I check my MEPCO bill without a reference number?</h3>
                <p className="text-slate-600 text-sm mt-1">No, the reference number or customer ID is mandatory. You cannot look up your bill using your name, meter number, or CNIC address.</p>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-bold text-slate-900">What do &apos;R&apos; and &apos;U&apos; stand for in the reference number?</h3>
                <p className="text-slate-600 text-sm mt-1">These represent your residential area status. &apos;R&apos; stands for Rural (dehat) and &apos;U&apos; stands for Urban (city) consumers.</p>
              </div>
            </div>
          </section>

          {/* Related Tools Links */}
          <section className="mt-10 rounded-2xl border bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-slate-950">
              Useful Utilities for MEPCO Consumers
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700 shadow-sm"
              >
                ⚡ MEPCO Online Bill Check
              </Link>

              <Link
                href="/mepco-bill-calculator"
                className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700 shadow-sm"
              >
                🧮 MEPCO Bill Calculator
              </Link>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}