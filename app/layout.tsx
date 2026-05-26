import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Remember to change this to your actual domain
  verification: {
    google: "w54Z2x0wPnrHvHcGRAZHo3RBNVjON-ZZlc0F_Kvc6Ic",
  },
  title: {
    default: "MEPCO Online Bill Check 2026 - Duplicate Bill Portal",
    template: "%s | MEPCO Bill Portal",
  },

  description:
    "Check your MEPCO online bill instantly using the 14-digit reference number. Access duplicate electricity bills, bill calculator, peak hours table, and Multan region FAQs.",

  keywords: [
    "MEPCO bill",
    "MEPCO online bill check",
    "MEPCO duplicate bill",
    "MEPCO electricity bill",
    "Pakistan electricity bill",
    "MEPCO bill calculator",
    "MEPCO reference number",
    "Multan electric power company",
    "duplicate electricity bill Pakistan",
    "mapko bill",
    "mipco bill check",
    "mepco web bill", // Added: highly searched variant
  ],

  authors: [{ name: "MEPCO Bill Portal" }],
  creator: "MEPCO Bill Portal",
  publisher: "MEPCO Bill Portal",
icons: {
  icon: "/favicon-new.ico",
},
icons: {
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
    title: "MEPCO Online Bill Check 2026",
    description:
      "Check duplicate MEPCO electricity bill online instantly using reference number.",
    url: "https://your-domain.com",
    siteName: "MEPCO Bill Portal",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MEPCO Online Bill Check Portal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MEPCO Online Bill Check 2026",
    description: "Check MEPCO duplicate electricity bill online instantly.",
    images: ["/og-image.jpg"],
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
    url: "https://your-domain.com",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    browserRequirements: "Requires HTML5",
    description:
      "An online tool to check MEPCO duplicate electricity bills using a 14-digit reference number.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
  };

  return (
   <html lang="en">
  <head>
    <meta
      name="google-site-verification"
      content="w54Z2x0wPnrHvHcGRAZHo3RBNVjON-ZZlc0F_Kvc6Ic"
    />
  </head>

  <body>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JHHCERN5SG"></script>

<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-JHHCERN5SG');
    `,
  }}
/>
        {/* Render JSON-LD inside the body to prevent hydration mismatch/head parsing bugs in Next.js */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}