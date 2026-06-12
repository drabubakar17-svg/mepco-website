import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.mepcoonlinebill.net";
const SITE_NAME = "MEPCO Online Bill Check";
const LAST_REVIEWED = "June 2026";

export const metadata: Metadata = {
  title: "About Us | MEPCO Online Bill Check",
  description:
    "Learn about MEPCO Online Bill Check, an independent consumer information website for MEPCO bill checking, duplicate bills, reference number help, customer ID guidance, and South Punjab electricity users.",
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    title: "About Us | MEPCO Online Bill Check",
    description:
      "About MEPCO Online Bill Check, an independent consumer information website for South Punjab electricity users.",
    url: `${SITE_URL}/about-us`,
    siteName: SITE_NAME,
    locale: "en_PK",
    type: "website",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Us",
  url: `${SITE_URL}/about-us`,
  description:
    "About MEPCO Online Bill Check, an independent consumer information website for MEPCO electricity bill guidance.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  author: {
    "@type": "Person",
    name: "Muhammad Abu Bakar",
    url: `${SITE_URL}/about-author`,
  },
  dateModified: "2026-06-01",
};

const services = [
  "MEPCO online bill check guidance",
  "Duplicate bill print and download help",
  "Reference number and customer ID explanation",
  "Bill calculator and estimate guidance",
  "FPA, QTA, tariff, and consumer rule explanations",
  "Complaint, correction, and service guide links",
  "City-wise MEPCO region information for South Punjab",
];

const trustPoints = [
  "Independent information website, not an official MEPCO or PITC service.",
  "Focused on practical consumer help for South Punjab electricity users.",
  "Bill amounts, due dates, and official records should always be verified from official PITC/MEPCO systems.",
  "Content is connected with author, editorial policy, disclaimer, and contact pages for transparency.",
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
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
            About Us
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            About MEPCO Online Bill Check
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/95">
            MEPCO Online Bill Check is an independent consumer information
            website created to help South Punjab electricity users understand
            MEPCO bill checking, duplicate bills, reference numbers, customer ID,
            bill calculators, tariff topics, and common consumer issues.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-5xl gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-slate-950">
              Our Purpose
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Our purpose is to make MEPCO electricity bill information easier
              for everyday consumers. Many users only need simple guidance: where
              to find the reference number, how to open a duplicate bill, how to
              print or download it, what customer ID means, and what to do when a
              bill is not showing.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              This website organizes those topics in a clear way so users can
              quickly reach the right guide without confusion.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-slate-950">
              What We Provide
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {services.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4 font-semibold text-slate-700"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <h2 className="text-2xl font-black text-amber-950">
              Important Independence Notice
            </h2>

            <p className="mt-4 leading-8 text-amber-900">
              MEPCO Online Bill Check is not affiliated with MEPCO, PITC, WAPDA,
              NEPRA, or any government department. We provide independent
              consumer guidance only. Official bill data, payable amount, due
              date, taxes, tariff, and consumer records should always be verified
              from official PITC/MEPCO systems or printed electricity bills.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-slate-950">
              Trust and Transparency
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-slate-700">
              {trustPoints.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 p-4">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/about-author"
                className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white hover:bg-emerald-800"
              >
                About Author
              </Link>

              <Link
                href="/editorial-policy"
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-200"
              >
                Editorial Policy
              </Link>

              <Link
                href="/disclaimer"
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-200"
              >
                Disclaimer
              </Link>

              <Link
                href="/contact-us"
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-200"
              >
                Contact
              </Link>
            </div>
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
                href="/all-mepco-regions"
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-200"
              >
                All MEPCO Regions
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