import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { emails, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | CarRentalSky",
  description:
    "Read the CarRentalSky terms and conditions for use of this white-label car rental booking interface.",
  alternates: {
    canonical: "/terms-and-conditions"
  }
};

export default function TermsAndConditionsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-skybrand-300">
          Terms and Conditions
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Terms and Conditions
        </h1>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">Website role</h2>
            <p className="mt-3">
              CarRentalSky provides a website and affiliate interface for
              discovering and accessing car rental booking services. CarRentalSky
              does not own rental vehicles, operate rental branches, or directly
              fulfil vehicle rental services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Booking provider</h2>
            <p className="mt-3">
              The booking engine, search results, booking process, reservation
              management tools, payment flow, confirmations, and related booking
              communications may be provided by VIP Cars, its technology
              providers, payment providers, and applicable vehicle suppliers.
              Your booking may be subject to additional supplier terms,
              cancellation rules, insurance conditions, deposit requirements,
              driver requirements, and local rental policies.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Accuracy and availability</h2>
            <p className="mt-3">
              Rental prices, vehicle availability, inclusions, fees, taxes,
              extras, and supplier conditions are provided through the booking
              engine and may change before a reservation is confirmed. Please
              review all booking details carefully before completing a
              reservation.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Customer responsibilities</h2>
            <p className="mt-3">
              You are responsible for providing accurate booking information,
              reviewing the rental terms presented during checkout, meeting
              supplier requirements, and bringing any required documents,
              licences, payment cards, and identification to the rental counter.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Limitation of service</h2>
            <p className="mt-3">
              CarRentalSky aims to provide a professional access point to car
              rental options. The fulfilment of a rental booking remains with the
              relevant booking provider and supplier. Nothing on this website
              should be read as a guarantee that a specific vehicle, supplier,
              rate, or service will be available unless confirmed through the
              booking process.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-3">
              For website-related questions, contact{" "}
              <a className="font-semibold text-skybrand-300 hover:text-skybrand-400" href={mailto(emails.general)}>
                {emails.general}
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </PageShell>
  );
}
