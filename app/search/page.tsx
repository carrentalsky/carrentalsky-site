import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { VipCarsWidget } from "@/components/VipCarsWidget";

export const metadata: Metadata = {
  title: "Search Car Rentals | CarRentalSky",
  description:
    "Search car rental options through the CarRentalSky white-label booking interface powered by VIP Cars.",
  alternates: {
    canonical: "/search"
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function SearchPage() {
  return (
    <PageShell>
      <section className="w-full overflow-visible py-3 sm:py-4">
        <VipCarsWidget page="step2" />
      </section>
    </PageShell>
  );
}
