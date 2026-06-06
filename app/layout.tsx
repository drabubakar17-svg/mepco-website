import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mepcoonlinebill.net"),

  verification: {
    google: "CXhIteopDn1CSGzW_MW-HaVhhFoPV-gxq2fLoVxZjws",
  },

  title: {
    default:
      "MEPCO Online Bill Check 2026 — Duplicate Bill, Calculator & Consumer Guides",
    template: "%s | MEPCO Online Bill Check",
  },

  description:
    "Check your MEPCO electricity bill online using 14-digit reference number. Access duplicate bills, bill calculator, consumer guides, peak hours, tariff slabs, protected consumer status and 36+ resources for South Punjab Pakistan. میپکو بل آن لائن چیک کریں۔",

  keywords: [
    "MEPCO bill",
    "MEPCO online bill check",
    "MEPCO duplicate bill",
    "MEPCO electricity bill",
    "MEPCO bill check online",
    "MEPCO bill calculator",
    "MEPCO reference number",
    "MEPCO customer ID",
    "MEPCO peak hours",
    "MEPCO tariff slabs",
    "MEPCO protected consumer",
    "MEPCO bill 2026",
    "MEPCO bill check by CNIC",
    "MEPCO FPA charges",
    "MEPCO QTA charges",
    "MEPCO new connection",
    "MEPCO solar calculator",
    "MEPCO 200 units rule",
    "Multan electric power company",
    "Pakistan electricity bill",
    "duplicate electricity bill Pakistan",
    "South Punjab electricity bill",
    "mapko bill",
    "mipco bill check",
    "mepco web bill",
    "mepco bill check Multan",
    "mepco bill check Bahawalpur",
    "mepco bill check Sahiwal",
    "میپکو بل چیک",
    "میپکو آن لائن بل",
    "بجلی کا بل چیک",
  ],

  authors: [{ name: "MEPCO Online Bill Check" }],
  creator: "MEPCO Online Bill Check",
  publisher: "MEPCO Online Bill Check",

  icons: {
    icon: "/favicon-new.ico",
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
    url: "https://mepcoonlinebill.net",
    siteName: "MEPCO Online Bill Check 2026",
    title:
      "MEPCO Online Bill Check 2026 — Duplicate Bill, Calculator & Consumer Guides",
    description:
      "Check MEPCO electricity bill online using 14-digit reference number. Access duplicate bills, bill calculator, consumer guides and 36+ resources for South Punjab Pakistan.",
    images: [
      {
        // OG image — agar /og-image.jpg exist kare to use karo
        // agar 404 aaye to logo use karo:
        url: "https://mepcoonlinebill.net/mepco-logo.png",
        width: 512,
        height: 512,
        alt: "MEPCO Online Bill Check Portal — South Punjab Pakistan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MEPCO Online Bill Check 2026 — Duplicate Bill & Calculator",
    description:
      "Check MEPCO electricity bill online using 14-digit reference number. Duplicate bills, calculator, consumer guides and 36+ resources.",
    images: ["https://mepcoonlinebill.net/mepco-logo.png"],
  },

  alternates: {
    canonical: "https://mepcoonlinebill.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MEPCO Online Bill Checker",
    url: "https://mepcoonlinebill.net",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    browserRequirements: "Requires HTML5",
    description:
      "An online tool to check MEPCO duplicate electricity bills using a 14-digit reference number. Access bill calculator, consumer guides, peak hours, tariff slabs and 36+ resources for South Punjab Pakistan consumers.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
    inLanguage: ["en", "ur"],
    areaServed: {
      "@type": "State",
      name: "South Punjab, Pakistan",
    },
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Google Analytics — next/script for better performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JHHCERN5SG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JHHCERN5SG');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* WebApplication JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}