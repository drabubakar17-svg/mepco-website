import type { MetadataRoute } from "next";

const baseUrl = "https://www.mepcoonlinebill.net";

const corePages = [
  "",
  "/mepco-duplicate-bill-guide",
  "/mepco-reference-number-guide",
  "/mepco-customer-id-guide",
  "/mepco-bill-check-by-cnic",
  "/mepco-bill-urdu",
  "/mepco-bill-calculator",
];

const hubPages = [
  "/all-mepco-regions",
  "/all-electricity-companies",
];

const cityPages = [
  "/multan-bill-check",
  "/khanewal-bill-check",
  "/bahawalpur-bill-check",
  "/vehari-bill-check",
  "/layyah-bill-check",
  "/lodhran-bill-check",
  "/sahiwal-bill-check",
  "/muzaffargarh-bill-check",
  "/rahim-yar-khan-bill-check",
  "/rajanpur-bill-check",
  "/dera-ghazi-khan-bill-check",
  "/taunsa-bill-check",
  "/bahawalnagar-bill-check",
];

const guidePages = [
  "/mepco-200-units-rule",
  "/mepco-fpa-charges-guide",
  "/mepco-qta-charges-guide",
  "/mepco-protected-consumer-guide",
  "/mepco-unprotected-consumer-guide",
  "/mepco-bill-increased-guide",
  "/mepco-application-forms-guide",
  "/mepco-change-of-tariff-guide",
  "/mepco-taxes-explained",
  "/mepco-peak-hours-guide",
  "/mepco-bill-slabs-guide",
  "/mepco-tariff-guide",
  "/mepco-bill-due-date-guide",
  "/mepco-bill-installment-guide",
  "/mepco-bill-payment-methods-guide",
  "/mepco-bill-not-received-guide",
  "/mepco-bill-correction-guide",
  "/mepco-wrong-bill-solution",
  "/mepco-new-connection-guide",
  "/mepco-demand-notice-guide",
  "/mepco-load-extension-guide",
  "/mepco-name-change-guide",
  "/mepco-security-deposit",
  "/mepco-disconnection-reconnection-guide",
  "/mepco-meter-complaint-guide",
  "/mepco-transformer-complaint-guide",
  "/mepco-complaint-tracking-guide",
  "/mepco-net-metering-guide",
  "/mepco-meter-reading-guide",
  "/mepco-load-shedding-guide",
  "/mepco-solar-savings-calculator",
  "/mepco-solar-roi-calculator",
];

const legalPages = [
  "/about-author",
  "/editorial-policy",
  "/about-us",
  "/contact-us",
  "/privacy-policy",
  "/disclaimer",
  "/terms-and-conditions",
];

function priority(page: string) {
  if (page === "") return 1.0;
  if (corePages.includes(page)) return 0.9;
  if (hubPages.includes(page)) return 0.8;
  if (cityPages.includes(page)) return 0.75;
  if (guidePages.includes(page)) return 0.65;
  if (legalPages.includes(page)) return 0.3;
  return 0.5;
}

function changeFrequency(page: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (page === "") return "weekly";
  if (corePages.includes(page)) return "weekly";
  if (hubPages.includes(page)) return "weekly";
  if (cityPages.includes(page)) return "monthly";
  if (guidePages.includes(page)) return "monthly";
  return "yearly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...corePages,
    ...hubPages,
    ...cityPages,
    ...guidePages,
    ...legalPages,
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: changeFrequency(page),
    priority: priority(page),
  }));
}