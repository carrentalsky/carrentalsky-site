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
      <div className="bg-[#f5f8fc] text-[#111827]">
        <section className="home-hero-surface relative overflow-hidden border-b border-[#d9e3f0]">
          <div className="relative z-10 mx-auto max-w-[1500px] px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8 lg:px-8">
            <div className="max-w-3xl text-left">
              <h1 className="max-w-3xl text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1267e8] sm:text-[46px] lg:text-[52px]">
                Compare car rentals worldwide
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg lg:text-xl">
                Search trusted suppliers, compare available vehicles, and book
                with confidence.
              </p>
            </div>

            <div className="home-booking-panel mt-5 bg-[#0b1f3a]">
              <div className="h-5 rounded-t-xl bg-[#0b1f3a] sm:h-6" aria-hidden="true" />
              <div>
                <VipCarsWidget page="step1" className="w-full" />
              </div>
              <div className="h-5 rounded-b-xl bg-[#0b1f3a] sm:h-6" aria-hidden="true" />
            </div>

            <div className="mt-7 grid gap-3 rounded-lg border border-[#d9e3f0] bg-[#eef6ff]/80 p-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-md border border-[#e1ecfb] bg-white px-5 py-4">
                  <item.icon aria-hidden="true" className="h-6 w-6 shrink-0 text-[#0d6efd]" />
                  <span className="text-sm font-semibold text-slate-800 sm:text-base">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-skybrand-500">
              How It Works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Book your rental in three simple steps.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-[#d9e3f0] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-skybrand-500/10 text-skybrand-500">
                    <step.icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-skybrand-500">
              Why CarRentalSky
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              A clearer way to compare and manage car rental bookings.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} tone="light" />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-[#d9e3f0] bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-skybrand-500/10 text-skybrand-500">
                <CircleDollarSign aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-950">Manage an existing booking</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Use the booking management page for eligible reservations
                  fulfilled through the booking provider and rental supplier.
                </p>
              </div>
            </div>
            <a
              href="/manage-booking"
              className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-[#d9e3f0] px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-skybrand-500 hover:text-skybrand-500 focus:outline-none focus:ring-2 focus:ring-skybrand-500/40 sm:mt-0 sm:w-auto"
            >
              Manage Booking
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
