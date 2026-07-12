import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { brandName, getSiteUrl, siteDescription } from "@/lib/site";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CarRentalSky | Global Car Rental Booking Platform",
  description: siteDescription,
  applicationName: brandName,
  alternates: {
    canonical: "/"
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },
  appleWebApp: {
    capable: true,
    title: brandName,
    statusBarStyle: "black-translucent"
  },
  openGraph: {
    title: "CarRentalSky | Global Car Rental Booking Platform",
    description: siteDescription,
    url: siteUrl,
    siteName: brandName,
    images: [
      {
        url: "/logos/car-rental-sky-dark.png",
        width: 2478,
        height: 724,
        alt: "CarRentalSky logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "CarRentalSky | Global Car Rental Booking Platform",
    description: siteDescription,
    images: ["/logos/car-rental-sky-dark.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#020b18"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
