export const brandName = "CarRentalSky";

export const emails = {
  general: "info@carrentalsky.com",
  partnerships: "partnerships@carrentalsky.com"
};

export const siteDescription =
  "CarRentalSky helps travelers discover global car rental options through a trusted white-label booking experience powered by VIP Cars and applicable rental suppliers.";

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://carrentalsky.com";
  return siteUrl.replace(/\/$/, "");
}

export function mailto(email: string) {
  return `mailto:${email}`;
}
