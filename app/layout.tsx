import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://mepcoonlinebill.net";
const SITE_NAME = "MEPCO Online Bill Check";
const GA_ID = "G-JHHCERN5SG";
const CURRENT_YEAR = new Date().getFullYear();

const META_TITLE = `MEPCO Online Bill Check ${CURRENT_YEAR} | Duplicate Bill & Calculator`;

const META_DESCRIPTION =
  "Check MEPCO electricity bill online by 14-digit reference number. Get duplicate bill, bill calculator, tariff guides and South Punjab MEPCO help.";

const keywords = [
  "MEPCO online bill check",
  "MEPCO duplicate bill",
  "MEPCO bill calculator",
  "MEPCO reference number",
  "MEPCO customer ID",
  "MEPCO bill check by CNIC",
  "MEPCO 200 units rule",
  "MEPCO solar calculator",
  "MEPCO bill Multan",
  "MEPCO bill Bahawalpur",
  "MEPCO bill Sahiwal",
  "میپکو بل چیک",
  "میپکو آن لائن بل",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  verification: {
    google: "CXhIteopDn1CSGzW_MW-HaVhhFoPV-gxq2fLoVxZjws",
  },

  title: {
    default: META_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: META_DESCRIPTION,
  keywords,

  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  icons: {
    icon: "/favicon-new.ico",
    apple: "/mepco-logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PK",
    alternateLocale: "ur_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/mepco-logo.png`,
        width: 512,
        height: 512,
        alt: "MEPCO Online Bill Check Portal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [`${SITE_URL}/mepco-logo.png`],
  },

  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MEPCO Online Bill Checker",
    url: SITE_URL,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    browserRequirements: "Requires HTML5",
    description: META_DESCRIPTION,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
    inLanguage: ["en", "ur"],
    areaServed: {
      "@type": "Place",
      name: "South Punjab, Pakistan",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/mepco-logo.png`,
    description:
      "Independent MEPCO bill checking and consumer guide portal for South Punjab Pakistan. Not affiliated with MEPCO, PITC or any government department.",
    areaServed: "South Punjab, Pakistan",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: META_DESCRIPTION,
    inLanguage: ["en", "ur"],
  };

  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webApplicationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  );
}