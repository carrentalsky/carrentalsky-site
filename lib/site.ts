export const brandName = "CarRentalSky";

export const emails = {
  general: "info@carrentalsky.com",
  partnerships: "partnerships@carrentalsky.com"
};

export const siteDescription =
  "CarRentalSky is preparing a trusted global car rental discovery and booking platform for travelers, OTA partners, white-label opportunities, and rental suppliers.";

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://carrentalsky.com";
  return siteUrl.replace(/\/$/, "");
}

export function mailto(email: string) {
  return `mailto:${email}`;
}
