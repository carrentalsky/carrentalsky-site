import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { emails, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | CarRentalSky",
  description:
    "Read the CarRentalSky privacy policy for this coming-soon informational website.",
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
              CarRentalSky is currently a coming-soon informational website for a
              future global car rental discovery and booking platform. This
              website provides company and partnership information while the
              platform is being prepared.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Information we process</h2>
            <p className="mt-3">
              CarRentalSky is not currently processing car rental bookings,
              payments, user accounts, customer rental data, cancellations, or
              supplier services through this website. If you contact us by email,
              we may use the information you provide to respond to your enquiry.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white">Email contact</h2>
            <p className="mt-3">
              Users, partners, suppliers, and affiliates may contact us directly
              by email. Please avoid sending sensitive payment, identity, or
              booking information because the platform is not yet live.
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
