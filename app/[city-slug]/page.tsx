import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "../../data/cities";

type Props = {
  params: Promise<{ "city-slug": string }>;
};

const currentYear = new Date().getFullYear();
const BASE_URL = "https://mepco-website-jx8g.vercel.app";

// 1. High-Performance Search Intent Metadata Engine
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams["city-slug"];
  const city = getCityBySlug(slug);

  if (!city) return {};

  const cleanTitle = `MEPCO Bill Check Online ${city.name} ${currentYear} - Duplicate Bill`;
  const cleanDescription = `Check your MEPCO ${city.name} electricity bill online. View, download, or print your duplicate WAPDA utility invoice instantly using your 14-digit reference number.`;

  return {
    title: cleanTitle,
    description: cleanDescription,
    alternates: {
      canonical: `${BASE_URL}/${city.slug}`,
    },
    keywords: [
      ...city.keywords,
      `mepco bill check online ${city.name.toLowerCase()}`,
      `mepco online bill download ${city.name.toLowerCase()}`,
      `wapda bill tracking ${city.name.toLowerCase()}`,
      `duplicate bill check ${city.name.toLowerCase()}`,
    ],
    openGraph: {
      title: cleanTitle,
      description: cleanDescription,
      url: `${BASE_URL}/${city.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: cleanDescription,
    },
  };
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    "city-slug": city.slug,
  }));
}

export default async function DynamicCityPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams["city-slug"];
  const city = getCityBySlug(slug);

  if (!city) notFound();

  const relatedCities = city.related
    .map((item) => getCityBySlug(item))
    .filter(Boolean);

  // 2. Structured SEO Schemas (WebPage + FAQ semantic hierarchy)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/${city.slug}#webpage`,
        "url": `${BASE_URL}/${city.slug}`,
        "name": `MEPCO Online Bill Information for ${city.name}`,
        "description": `Online status, duplicate copy generation, and area coverages for MEPCO power consumers in ${city.name}.`
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/${city.slug}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How can I check my ${city.name} MEPCO bill online?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `You can view or print your MEPCO electricity invoice for ${city.name} by extracting your 14-digit reference number or consumer tracking ID from any historical paper statement and inputting it into the official lookup verification form.`
            }
          },
          {
            "@type": "Question",
            "name": `Can I download a duplicate MEPCO bill if the paper invoice is lost?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, consumers throughout ${city.name} can instantly generate, view, and save an authentic PDF duplicate of their current monthly billing record without extra processing charges.`
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
          
          {/* Breadcrumbs for internal link contextual indexing */}
          <nav aria-label="Breadcrumb" className="mb-4 text-xs font-bold uppercase tracking-wider text-green-700">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:underline">MEPCO Home</Link></li>
              <li><span>&gt;</span></li>
              <li><span className="text-slate-500">Regional Overview</span></li>
              <li><span>&gt;</span></li>
              <li aria-current="page" className="text-slate-800">{city.name}</li>
            </ol>
          </nav>

          <header className="mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:leading-tight">
              MEPCO {city.name} Bill Check Online {currentYear}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Electricity supply consumers residing across the <strong className="font-semibold text-slate-800">{city.name}</strong> distribution zone can review their updated monthly MEPCO consumer records, check payment flags, and print official layout duplicates via their personal 14-digit reference matrix.
            </p>
          </header>

          {/* Core Procedural Block optimized for high semantic scoring */}
          <section className="my-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Step-by-Step Instructions: Access Your MEPCO Duplicate Copy
            </h2>

            <ol className="list-decimal space-y-4 pl-5 text-slate-700">
              <li>
                <strong className="text-slate-900">Locate Your Reference Key:</strong> Find the 14-digit numeric billing sequence printed prominently on any legacy utility voucher.
              </li>
              <li>
                <strong className="text-slate-900">Input and Validation:</strong> Enter the numerical string sequence cleanly into the central lookup portal layout form.
              </li>
              <li>
                <strong className="text-slate-900">Render Record View:</strong> Execute verification to load your current active electricity accounting balance details.
              </li>
              <li>
                <strong className="text-slate-900">Download/Export Action:</strong> Use embedded print commands or file system utilities to preserve your dynamic structural copy locally.
              </li>
            </ol>
          </section>

          {/* Highly Crawlable Local Entity Links */}
          <section className="space-y-6 my-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Subdivisions &amp; Sub-Regions Handled in {city.name}
            </h2>
            <p className="text-sm text-slate-600 -mt-4">
              This digital bill confirmation access standard map handles tracking parameters for all residential, commercial, and industrial subdivisions across the following sectors:
            </p>

            <div className="flex flex-wrap gap-2" aria-label="Regions covered list">
              {city.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-lg bg-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 tracking-wide"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>

          {/* Deep Keyword Internal Architecture Section */}
          <section className="my-12 rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-2 text-2xl font-bold text-slate-900">Alternative Regional Coverage Nodes</h2>
            <p className="mb-6 text-sm text-slate-600">
              Need tracking access rules for adjacent processing centers? Select from neighboring grids beneath the Multan Electric Power Company authority line:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {relatedCities.map((relCity) =>
                relCity ? (
                  <Link
                    key={relCity.slug}
                    href={`/${relCity.slug}`}
                    className="group rounded-xl border p-4 font-semibold text-slate-800 transition hover:bg-green-50 hover:text-green-700 hover:border-green-300"
                  >
                    <span className="block text-base group-hover:underline">{relCity.title}</span>
                    <span className="block text-xs font-normal text-slate-500 mt-1">Check electricity bills online for {relCity.name} grid zones.</span>
                  </Link>
                ) : null
              )}
            </div>
          </section>

        </article>
      </main>
    </>
  );
}