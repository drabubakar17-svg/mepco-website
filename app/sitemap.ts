import type { MetadataRoute } from "next";

const baseUrl = "https://mepcoonlinebill.net";

const pages = [
  "",
  "/mepco-bill-calculator",
  "/mepco-taxes-explained",
  "/mepco-new-connection-guide",
  "/mepco-bill-urdu",
  "/mepco-customer-id-guide",
  "/mepco-reference-number-guide",
  "/mepco-peak-hours-guide",
  "/mepco-bill-slabs-guide",
  "/all-mepco-regions",
  "/all-electricity-companies",
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
    changeFrequency: "daily",
    priority: page === "" ? 1 : 0.8,
  }));
}
