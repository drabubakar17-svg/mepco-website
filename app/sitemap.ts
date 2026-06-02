import type { MetadataRoute } from "next";

const baseUrl = "https://mepcoonlinebill.net";

const pages = [
  "",

  // Core Tools
  "/mepco-bill-calculator",

  // Main Guides
  "/mepco-bill-urdu",
  "/mepco-taxes-explained",
  "/mepco-customer-id-guide",
  "/mepco-reference-number-guide",
  "/mepco-peak-hours-guide",
  "/mepco-bill-slabs-guide",
  "/mepco-tariff-guide",

  // Billing Guides
  "/mepco-duplicate-bill-guide",
  "/mepco-bill-due-date-guide",
  "/mepco-bill-installment-guide",
  "/mepco-bill-payment-methods-guide",
  "/mepco-bill-not-received-guide",
  "/mepco-bill-correction-guide",
  "/mepco-wrong-bill-solution",

  // Connection Services
  "/mepco-new-connection-guide",
  "/mepco-demand-notice-guide",
  "/mepco-load-extension-guide",
  "/mepco-name-change-guide",
  "/mepco-security-deposit",
  "/mepco-disconnection-reconnection-guide",

  // Complaint Services
  "/mepco-meter-complaint-guide",
  "/mepco-transformer-complaint-guide",
  "/mepco-complaint-tracking-guide",

  // Energy & Usage
  "/mepco-net-metering-guide",
  "/mepco-meter-reading-guide",
  "/mepco-load-shedding-guide",

  // Information Pages
  "/all-mepco-regions",
  "/all-electricity-companies",

  // City Pages
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

  // Legal Pages
  "/about-us",
  "/contact-us",
  "/privacy-policy",
  "/disclaimer",
  "/terms-and-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }));
}