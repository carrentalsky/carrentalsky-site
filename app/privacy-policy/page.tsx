import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { emails, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | CarRentalSky",
  description:
    "Read the CarRentalSky privacy policy for this white-label car rental booking interface.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-skybrand-300">
          Privacy Policy
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-10 space-y-8 text-base leading-8 text-slate-300">
          <section>
            <h2 className="text-xl font-semibold text-white">Overview</h2>
            <p className="mt-3">
              CarRentalSky provides a car rental discovery and affiliate
              interface that connects users with a white-label booking engine
              powered by VIP Cars and applicable rental suppliers.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Information we process</h2>
            <p className="mt-3">
              If you contact CarRentalSky by email, we may use the information
              you provide to respond to your enquiry. When you use the booking
              engine, search, booking management tools, or checkout flow, booking
              and personal information may be processed by VIP Cars, its
              technology providers, payment providers, and vehicle suppliers as
              needed to provide search results, reservations, payments,
              confirmations, booking management, customer support, and supplier
              services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Booking and payment data</h2>
            <p className="mt-3">
              CarRentalSky does not ask you to send payment card details by
              email. Payment, reservation, driver, and booking information should
              be entered only through the booking engine or official booking
              management flow. Those third-party services may have their own
              privacy notices and security practices.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Email contact</h2>
            <p className="mt-3">
              Users, partners, suppliers, and affiliates may contact us directly
              by email. Please avoid sending sensitive payment card details,
              identity documents, or unnecessary booking data by email.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Future updates</h2>
            <p className="mt-3">
              As CarRentalSky develops its services, this Privacy Policy may be
              updated to reflect any new features, data practices, or legal
              requirements.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p className="mt-3">
              For privacy questions, contact{" "}
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
