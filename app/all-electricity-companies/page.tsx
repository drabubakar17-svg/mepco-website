import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Electricity Companies in Pakistan | MEPCO, LESCO, FESCO, GEPCO",
  description:
    "Browse Pakistan electricity distribution companies including MEPCO, LESCO, FESCO, GEPCO, HESCO, PESCO, QESCO and IESCO. Start with MEPCO bill check and related tools.",
  alternates: {
    canonical:
      "https://mepco-website-jx8g.vercel.app/all-electricity-companies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const companies = [
  {
    name: "MEPCO",
    fullName: "Multan Electric Power Company",
    status: "Live",
    href: "/",
    description:
      "MEPCO bill check, calculator, reference guide, customer ID guide, taxes and all MEPCO regions.",
  },
  {
    name: "LESCO",
    fullName: "Lahore Electric Supply Company",
    status: "Coming Soon",
    href: "#",
    description:
      "LESCO bill check hub for Lahore and nearby regions will be added soon.",
  },
  {
    name: "FESCO",
    fullName: "Faisalabad Electric Supply Company",
    status: "Coming Soon",
    href: "#",
    description:
      "FESCO bill check hub for Faisalabad and related areas will be added soon.",
  },
  {
    name: "GEPCO",
    fullName: "Gujranwala Electric Power Company",
    status: "Coming Soon",
    href: "#",
    description:
      "GEPCO bill check hub for Gujranwala region will be added soon.",
  },
  {
    name: "HESCO",
    fullName: "Hyderabad Electric Supply Company",
    status: "Coming Soon",
    href: "#",
    description:
      "HESCO bill check hub for Hyderabad and Sindh regions will be added soon.",
  },
  {
    name: "PESCO",
    fullName: "Peshawar Electric Supply Company",
    status: "Coming Soon",
    href: "#",
    description:
      "PESCO bill check hub for Peshawar and KPK regions will be added soon.",
  },
  {
    name: "QESCO",
    fullName: "Quetta Electric Supply Company",
    status: "Coming Soon",
    href: "#",
    description:
      "QESCO bill check hub for Quetta and Balochistan regions will be added soon.",
  },
  {
    name: "IESCO",
    fullName: "Islamabad Electric Supply Company",
    status: "Coming Soon",
    href: "#",
    description:
      "IESCO bill check hub for Islamabad and Rawalpindi regions will be added soon.",
  },
];

export default function AllElectricityCompaniesPage() {
  return (
    <main className="min-h-screen bg-[#f4f8f5] text-[#111]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-[#eef8f1] to-[#dcefe5] px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-black text-[#005b2e] transition hover:bg-green-200"
          >
            ← Back to MEPCO Home
          </Link>

          <h1 className="mt-8 text-4xl font-black leading-tight text-[#8B0000] md:text-6xl">
            Electricity Companies in Pakistan
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
            Browse electricity distribution companies in Pakistan. MEPCO is live
            now with bill check tools, region pages, calculator, guides and
            consumer help content. Other companies will be added step by step.
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <p className="text-4xl font-black text-[#005b2e]">8</p>
              <p className="mt-2 font-semibold text-gray-600">
                Companies Listed
              </p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <p className="text-4xl font-black text-[#005b2e]">1</p>
              <p className="mt-2 font-semibold text-gray-600">
                Live Company Hub
              </p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <p className="text-4xl font-black text-[#005b2e]">Soon</p>
              <p className="mt-2 font-semibold text-gray-600">
                Pakistan Wide Portal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
          <h2 className="text-center text-4xl font-black text-[#005b2e]">
            Select Electricity Company
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-gray-600">
            Start with the live MEPCO portal. Other distribution company hubs
            will be launched one by one with the same SEO and utility structure.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companies.map((company) => {
              const isLive = company.status === "Live";
              
              // Card Inner Content
              const cardContent = (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-black text-[#005b2e]">
                      {company.name}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-black ${
                        isLive
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {company.status}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-bold text-gray-700">
                    {company.fullName}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {company.description}
                  </p>

                  <div className="mt-5 text-sm font-black text-[#005b2e]">
                    {isLive ? "Open MEPCO Portal →" : "Coming Soon"}
                  </div>
                </>
              );

              // Conditionally render Link vs Div element depending on live status
              return isLive ? (
                <Link
                  key={company.name}
                  href={company.href}
                  className="rounded-2xl border border-green-200 bg-[#f4f8f5] p-6 shadow-sm transition hover:-translate-y-1 hover:bg-green-50 hover:shadow-xl"
                >
                  {cardContent}
                </Link>
              ) : (
                <div
                  key={company.name}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm cursor-not-allowed opacity-80"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internal Tools Navigation */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black text-[#005b2e]">
            Current Live Utility Tools
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Link
              href="/mepco-bill-calculator"
              className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 text-center font-black text-[#005b2e] transition hover:bg-green-50"
            >
              🧮 MEPCO Calculator
            </Link>

            <Link
              href="/all-mepco-regions"
              className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 text-center font-black text-[#005b2e] transition hover:bg-green-50"
            >
              📍 All MEPCO Regions
            </Link>

            <Link
              href="/mepco-reference-number-guide"
              className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 text-center font-black text-[#005b2e] transition hover:bg-green-50"
            >
              🔢 Reference Guide
            </Link>

            <Link
              href="/mepco-taxes-explained"
              className="rounded-2xl border border-green-100 bg-[#f4f8f5] p-5 text-center font-black text-[#005b2e] transition hover:bg-green-50"
            >
              🧾 Taxes Explained
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}