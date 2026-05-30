import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "../../data/cities";

// 1. Hardcoded, Powerful SEO Metadata for Static Generation
export const metadata: Metadata = {
  title: "All MEPCO Regions | 30+ MEPCO City Bill Check Pages",
  description:
    "View all MEPCO regions and city bill check pages including Multan, Khanewal, Bahawalpur, Vehari, Lodhran, Sahiwal, Rahim Yar Khan, DG Khan and more. Instant duplicate bill lookup.",
  alternates: {
    canonical: "https://mepco-website-jx8g.vercel.app/all-mepco-regions",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function AllMepcoRegionsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] antialiased">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#e8f5e9] via-[#f1f8e9]/50 to-transparent px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full bg-[#e8f5e9] px-5 py-2 text-sm font-bold text-[#1b5e20] transition hover:bg-[#c8e6c9]"
          >
            ← Back to MEPCO Home
          </Link>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-[#b71c1c] sm:text-5xl md:text-6xl">
            All MEPCO Regions
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Browse all MEPCO bill check city pages in one place. Select your
            region to check duplicate bill information, reference number help,
            and local MEPCO consumer guidance.
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#e0e0e0] bg-white p-6 shadow-xs">
              <h2 className="text-3xl font-extrabold text-[#1b5e20]">
                {cities.length}+
              </h2>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                Regions Covered
              </p>
            </div>

            <div className="rounded-2xl border border-[#e0e0e0] bg-white p-6 shadow-xs">
              <h2 className="text-3xl font-extrabold text-[#1b5e20]">24/7</h2>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                Online Access
              </p>
            </div>

            <div className="rounded-2xl border border-[#e0e0e0] bg-white p-6 shadow-xs">
              <h2 className="text-3xl font-extrabold text-[#1b5e20]">Free</h2>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                Consumer Utility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Directory Grid */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-100/40">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#1b5e20]">
            MEPCO City Bill Check Pages
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-500">
            Choose your city or region below to open its dedicated MEPCO bill
            check page.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group rounded-xl border border-slate-100 bg-[#f8fafc] p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:border-[#a5d6a7] hover:shadow-lg hover:shadow-emerald-500/5"
              >
                <h3 className="text-base font-extrabold text-[#1b5e20] group-hover:text-[#2e7d32]">
                  {city.name}
                </h3>

                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-500">
                  MEPCO Bill Check
                </p>

                <p className="mt-3 text-xs leading-normal text-slate-400 group-hover:text-slate-500">
                  View duplicate bill guidance and local consumer information.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking / Navigation Footer */}
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          <Link
            href="/mepco-bill-calculator"
            className="rounded-xl border border-slate-200 bg-white p-5 text-center transition duration-200 hover:border-[#1b5e20] hover:bg-[#f1f8e9]/30 hover:shadow-md"
          >
            <div className="text-3xl">🧮</div>
            <h3 className="mt-3 text-sm font-bold text-slate-800">
              Bill Calculator
            </h3>
          </Link>

          <Link
            href="/mepco-reference-number-guide"
            className="rounded-xl border border-slate-200 bg-white p-5 text-center transition duration-200 hover:border-[#1b5e20] hover:bg-[#f1f8e9]/30 hover:shadow-md"
          >
            <div className="text-3xl">🔢</div>
            <h3 className="mt-3 text-sm font-bold text-slate-800">
              Reference Guide
            </h3>
          </Link>

          <Link
            href="/mepco-peak-hours-guide"
            className="rounded-xl border border-slate-200 bg-white p-5 text-center transition duration-200 hover:border-[#1b5e20] hover:bg-[#f1f8e9]/30 hover:shadow-md"
          >
            <div className="text-3xl">⏰</div>
            <h3 className="mt-3 text-sm font-bold text-slate-800">
              Peak Hours
            </h3>
          </Link>

          <Link
            href="/mepco-taxes-explained"
            className="rounded-xl border border-slate-200 bg-white p-5 text-center transition duration-200 hover:border-[#1b5e20] hover:bg-[#f1f8e9]/30 hover:shadow-md"
          >
            <div className="text-3xl">🧾</div>
            <h3 className="mt-3 text-sm font-bold text-slate-800">
              Taxes Guide
            </h3>
          </Link>
        </div>
      </section>
    </main>
  );
}