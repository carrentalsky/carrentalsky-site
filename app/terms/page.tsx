import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { emails, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms | CarRentalSky",
  description:
    "Read the CarRentalSky placeholder terms for this coming-soon informational website.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-skybrand-300">
          Terms
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Terms
        </h1>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">Informational website</h2>
            <p className="mt-3">
              This website is provided for informational purposes while
              CarRentalSky prepares a future global car rental discovery and
              booking platform.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">No live booking engine</h2>
            <p className="mt-3">
              CarRentalSky is not yet operating as a live booking engine. No car
              rental bookings, payments, cancellations, customer accounts, or
              supplier services are currently processed through this website.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Partner discussions</h2>
            <p className="mt-3">
              Any OTA, white-label, supplier, affiliate, or partnership
              conversations are preliminary unless and until confirmed in a
              separate written agreement.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Website content</h2>
            <p className="mt-3">
              We aim to keep the information on this website professional and
              accurate, but the platform, services, availability, and partner
              features may change before launch.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-3">
              For questions about these terms, contact{" "}
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
