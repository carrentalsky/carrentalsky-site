import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { VipCarsWidget } from "@/components/VipCarsWidget";

export const metadata: Metadata = {
  title: "Manage Booking | CarRentalSky",
  description:
    "Manage a car rental booking through the CarRentalSky white-label booking interface powered by VIP Cars.",
  alternates: {
    canonical: "/manage-booking"
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function ManageBookingPage() {
  return (
    <PageShell>
      <div className="bg-[#061a33]">
        <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1677ff]">
              Manage Booking
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Manage an existing reservation.
            </h1>
            <p className="mt-5 text-base leading-7 text-[#d6e3f0]">
              Use the booking management engine below for reservations handled by
              VIP Cars and the applicable rental supplier.
            </p>
          </div>
          <VipCarsWidget page="managebooking" />
        </section>
      </div>
    </PageShell>
  );
}
