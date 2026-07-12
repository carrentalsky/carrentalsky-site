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
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-skybrand-300">
            Search Results
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Compare available car rental options.
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Results, pricing, availability, payments, confirmations, and supplier
            services are handled through VIP Cars and the applicable vehicle
            rental suppliers.
          </p>
        </div>
        <VipCarsWidget page="step2" />
      </section>
    </PageShell>
  );
}
