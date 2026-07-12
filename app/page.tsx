import { Building2, Globe2, Route, ShieldCheck } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Logo } from "@/components/Logo";
import { PageShell } from "@/components/PageShell";
import { ValueCard } from "@/components/ValueCard";
import { VipCarsWidget } from "@/components/VipCarsWidget";

const values = [
  {
    icon: Globe2,
    title: "Global car rental discovery",
    description:
      "A future destination for travelers to discover rental options across key markets and trusted travel corridors."
  },
  {
    icon: Building2,
    title: "Trusted booking partners",
    description:
      "Designed for collaboration with OTAs, white-label providers, suppliers, affiliates, and travel platforms."
  },
  {
    icon: ShieldCheck,
    title: "Transparent rental choices",
    description:
      "Built around clear comparison experiences that help travelers review options with confidence."
  },
  {
    icon: Route,
    title: "Built for travelers",
    description:
      "A premium travel-tech foundation shaped around practical journeys, reliable choices, and easy next steps."
  }
];

export default function Home() {
  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-skybrand-300/60 to-transparent" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div>
              <Logo priority className="mb-8 w-64 max-w-full sm:w-80" />
              <div className="inline-flex rounded-full border border-skybrand-300/25 bg-skybrand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-skybrand-300">
                Global Car Rental Search
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Your smarter car rental booking partner.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                CarRentalSky helps travelers discover reliable car rental
                options, compare choices with confidence, and book through a
                trusted white-label booking engine powered by VIP Cars.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                Vehicle availability, pricing, payments, confirmations, and
                supplier services are handled by VIP Cars and the applicable
                rental suppliers.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/search">Search Rentals</CTAButton>
                <CTAButton href="/manage-booking" variant="secondary">
                  Manage Booking
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <VipCarsWidget page="step1" />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
