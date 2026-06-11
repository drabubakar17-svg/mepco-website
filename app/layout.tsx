import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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

const SITE_URL = "https://www.mepcoonlinebill.net";
const SITE_NAME = "MEPCO Online Bill Check";
const GA_ID = "G-JHHCERN5SG";

const META_TITLE =
  "MEPCO Online Bill Check 2026 | Duplicate Bill & Calculator";

const META_DESCRIPTION =
  "Check MEPCO electricity bill online by 14-digit reference number. Get duplicate bill help, bill calculator, tariff guides, and South Punjab MEPCO consumer information.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#064e3b",
};

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

  authors: [
    {
      name: "Muhammad Abu Bakar",
      url: `${SITE_URL}/about-author`,
    },
  ],
  creator: "Muhammad Abu Bakar",
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
        alt: "MEPCO Online Bill Check independent information portal logo",
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
    languages: {
      "en-PK": SITE_URL,
      "ur-PK": SITE_URL,
    },
  },

  category: "utility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/mepco-logo.png`,
      width: 512,
      height: 512,
    },
    description:
      "Independent MEPCO electricity bill information website for South Punjab consumers. This website is not affiliated with MEPCO, PITC, WAPDA, or any government department.",
    founder: {
      "@type": "Person",
      name: "Muhammad Abu Bakar",
      jobTitle: "Founder and Editor",
      url: `${SITE_URL}/about-author`,
    },
    areaServed: {
      "@type": "Place",
      name: "South Punjab, Pakistan",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: [
      "MEPCO Bill Check",
      "MEPCO Duplicate Bill",
      "MEPCO Online Bill",
      "میپکو بل چیک",
      "میپکو آن لائن بل",
    ],
    url: SITE_URL,
    description: META_DESCRIPTION,
    inLanguage: ["en-PK", "ur-PK"],
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <html lang="en" dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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