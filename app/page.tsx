import {
  CalendarCheck,
  CarFront,
  CircleDollarSign,
  Headphones,
  Info,
  ListChecks,
  Search,
  ShieldCheck
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ValueCard } from "@/components/ValueCard";
import { VipCarsWidget } from "@/components/VipCarsWidget";

const trustItems = [
  { icon: CarFront, label: "Trusted rental suppliers" },
  { icon: ShieldCheck, label: "Secure booking process" },
  { icon: Info, label: "Clear rental information" },
  { icon: Headphones, label: "Booking support available" }
];

const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Enter your location and rental dates."
  },
  {
    icon: ListChecks,
    title: "Compare",
    description: "Review available vehicles, prices and rental conditions."
  },
  {
    icon: ShieldCheck,
    title: "Book",
    description: "Select your preferred option and complete the reservation securely."
  }
];

const values = [
  {
    icon: CarFront,
    title: "Wide choice of rental options",
    description:
      "Compare available vehicles across destinations and choose the option that fits your trip."
  },
  {
    icon: Info,
    title: "Clear booking information",
    description:
      "Review rental conditions, inclusions, supplier details and important booking terms before you reserve."
  },
  {
    icon: CalendarCheck,
    title: "Convenient booking management",
    description:
      "Access booking management tools for eligible reservations when you need to review or update a booking."
  },
  {
    icon: Headphones,
    title: "Support throughout your booking journey",
    description:
      "Get assistance through the booking provider and supplier support channels connected to your reservation."
  }
];

export default function Home() {
  return (
    <PageShell>
      <div className="home-dark-surface bg-[#061a33] text-white">
        <section className="home-hero-surface relative z-10">
          <div className="relative z-10 mx-auto max-w-7xl px-5 pt-6 sm:px-6 sm:pt-8 lg:px-8">
            <div className="max-w-3xl text-left">
              <h1 className="max-w-3xl text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[46px] lg:text-[52px]">
                Compare car rentals <span className="text-[#1677ff]">worldwide</span>
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#e6eef7] sm:text-lg lg:text-xl">
                Search trusted suppliers, compare available vehicles, and book
                with confidence.
              </p>
            </div>
          </div>

          <div className="home-booking-panel relative z-10 mt-5 bg-[#061a33]">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
              <div className="h-2.5 rounded-t-xl bg-[#dde7f1] sm:h-3" aria-hidden="true" />
              <div>
                <VipCarsWidget page="step1" className="w-full" />
              </div>
              <div className="h-2.5 rounded-b-xl bg-[#dde7f1] sm:h-3" aria-hidden="true" />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 sm:px-6 sm:pb-10 lg:px-8">
            <div className="mt-7 grid gap-3 rounded-lg border border-[#21496f] bg-[#0b2542]/80 p-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-md border border-[#21496f] bg-[#123253] px-5 py-4">
                  <item.icon aria-hidden="true" className="h-6 w-6 shrink-0 rounded bg-[#1677ff]/[0.16] p-1 text-[#1677ff]" />
                  <span className="text-sm font-semibold text-white sm:text-base">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1677ff]">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Book your rental in three simple steps.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-[#21496f] bg-[#123253] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#1677ff]/[0.16] text-[#1677ff]">
                    <step.icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-[#d6e3f0]">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#d6e3f0]">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1677ff]">
              Why CarRentalSky
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              A clearer way to compare and manage car rental bookings.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-[#21496f] bg-[#123253] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#1677ff]/[0.16] text-[#1677ff]">
                <CircleDollarSign aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Manage an existing booking</h2>
                <p className="mt-2 text-sm leading-6 text-[#d6e3f0]">
                  Use the booking management page for eligible reservations
                  fulfilled through the booking provider and rental supplier.
                </p>
              </div>
            </div>
            <a
              href="/manage-booking"
              className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-[#45627d] px-4 py-3 text-sm font-semibold text-white transition hover:border-[#1677ff] hover:text-[#1677ff] focus:outline-none focus:ring-2 focus:ring-[#1677ff]/40 sm:mt-0 sm:w-auto"
            >
              Manage Booking
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
