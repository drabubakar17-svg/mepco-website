import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.mepcoonlinebill.net";
const SITE_NAME = "MEPCO Online Bill Check";
const AUTHOR_NAME = "Muhammad Abu Bakar";
const LAST_REVIEWED = "June 2026";

export const metadata: Metadata = {
  title: "About Author | MEPCO Online Bill Check",
  description:
    "Learn about Muhammad Abu Bakar, founder and editor of MEPCO Online Bill Check, an independent consumer information website for MEPCO bill guidance.",
  alternates: {
    canonical: `${SITE_URL}/about-author`,
  },
  openGraph: {
    title: "About Author | MEPCO Online Bill Check",
    description:
      "About the founder and editorial purpose of MEPCO Online Bill Check.",
    url: `${SITE_URL}/about-author`,
    siteName: SITE_NAME,
    locale: "en_PK",
    type: "profile",
  },
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR_NAME,
  jobTitle: "Founder and Editor",
  url: `${SITE_URL}/about-author`,
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  knowsAbout: [
    "MEPCO bill check",
    "MEPCO duplicate bill",
    "Electricity billing in Pakistan",
    "Reference number guidance",
    "Customer ID guidance",
    "FPA charges",
    "QTA charges",
    "Protected consumer rules",
    "South Punjab electricity consumers",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Multan",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Author",
  url: `${SITE_URL}/about-author`,
  description:
    "About Muhammad Abu Bakar, founder and editor of MEPCO Online Bill Check.",
  author: authorSchema,
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  dateModified: "2026-06-01",
};

const expertise = [
  "MEPCO online bill check guidance",
  "Duplicate bill print and download help",
  "Reference number and customer ID explanation",
  "FPA, QTA, tariff, and bill slab guides",
  "Protected and unprotected consumer rules",
  "MEPCO complaint and consumer service guidance",
  "South Punjab MEPCO region information",
];

const standards = [
  "Content is written for consumer guidance, not official legal or billing decisions.",
  "Final bill amount, due date, and official records should always be verified from PITC or MEPCO systems.",
  "Pages are reviewed for clarity, usefulness, and practical consumer value.",
  "Calculators and estimates are informational only and may differ from official bills.",
  "The website clearly states that it is independent and not affiliated with MEPCO, PITC, WAPDA, NEPRA, or any government department.",
];

export default function AboutAuthorPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 px-4 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="text-sm font-bold text-emerald-100 hover:text-white">
            ← Back to MEPCO Bill Check
          </Link>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-emerald-100">
            About the Author
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Muhammad Abu Bakar
          </h1>

          <p className="mt-3 text-xl font-bold text-emerald-100">
            Founder and Editor of MEPCO Online Bill Check
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/95">
            MEPCO Online Bill Check is an independent information website created
            to help South Punjab electricity consumers understand MEPCO bills,
            duplicate bill checking, reference numbers, customer ID, bill charges,
            and common consumer issues in simple language.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-5xl gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-slate-950">
              Author Information
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-xs font-black uppercase text-emerald-700">
                  Author
                </p>
                <p className="mt-1 font-black text-slate-950">
                  Muhammad Abu Bakar
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-xs font-black uppercase text-emerald-700">
                  Role
                </p>
                <p className="mt-1 font-black text-slate-950">
                  Founder and Editor
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-xs font-black uppercase text-emerald-700">
                  Location
                </p>
                <p className="mt-1 font-black text-slate-950">
                  Multan, Punjab, Pakistan
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-xs font-black uppercase text-emerald-700">
                  Website
                </p>
                <p className="mt-1 font-black text-slate-950">
                  mepcoonlinebill.net
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-700">
              The purpose of this website is to make MEPCO bill-related
              information easier for everyday users. Many consumers face confusion
              about reference numbers, duplicate bills, FPA charges, QTA charges,
              protected consumer rules, due dates, and bill correction options.
              This website explains those topics in a simple and practical way.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-slate-950">
              Areas of Coverage
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4 font-semibold text-slate-700"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-slate-950">
              Editorial Standards
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-slate-700">
              {standards.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 className="text-2xl font-black text-amber-950">
              Independent Website Notice
            </h2>

            <p className="mt-4 leading-8 text-amber-900">
              MEPCO Online Bill Check is not affiliated with MEPCO, PITC, WAPDA,
              NEPRA, or any government department. This website provides
              independent consumer guidance only. Official bill data, payable
              amount, due date, taxes, tariff, and consumer records should always
              be verified from official PITC/MEPCO systems or printed bills.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-slate-950">
              Useful Pages
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white hover:bg-emerald-800"
              >
                Check MEPCO Bill
              </Link>

              <Link
                href="/mepco-reference-number-guide"
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-200"
              >
                Reference Number Guide
              </Link>

              <Link
                href="/mepco-customer-id-guide"
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-200"
              >
                Customer ID Guide
              </Link>

              <Link
                href="/all-mepco-guides"
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-200"
              >
                All MEPCO Guides
              </Link>

              <Link
                href="/contact-us"
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-200"
              >
                Contact
              </Link>
            </div>
          </div>

          <p className="text-center text-sm font-semibold text-slate-500">
            Last reviewed: {LAST_REVIEWED}
          </p>
        </div>
      </section>
    </main>
  );
}