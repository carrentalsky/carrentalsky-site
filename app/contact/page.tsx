import type { Metadata } from "next";
import { Mail, Network } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { emails, mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact CarRentalSky",
  description:
    "Contact CarRentalSky for general enquiries, partnerships, white-label discussions, supplier opportunities, and affiliate conversations.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-skybrand-300">
            Contact
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Get in touch with CarRentalSky.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            CarRentalSky is currently preparing its global car rental discovery
            and booking platform. For now, please contact us directly by email.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <a
            href={mailto(emails.general)}
            className="glass-panel group rounded-lg p-7 transition hover:border-skybrand-300/50"
          >
            <Mail className="h-7 w-7 text-skybrand-300" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold text-white">General enquiries</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Questions about CarRentalSky, media enquiries, and general company
              contact.
            </p>
            <p className="mt-5 font-semibold text-skybrand-300 group-hover:text-skybrand-400">
              {emails.general}
            </p>
          </a>

          <a
            href={mailto(emails.partnerships)}
            className="glass-panel group rounded-lg p-7 transition hover:border-skybrand-300/50"
          >
            <Network className="h-7 w-7 text-skybrand-300" aria-hidden="true" />
            <h2 className="mt-5 text-xl font-semibold text-white">Partnerships</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              OTA, supplier, affiliate, marketplace, and strategic partnership
              discussions.
            </p>
            <p className="mt-5 font-semibold text-skybrand-300 group-hover:text-skybrand-400">
              {emails.partnerships}
            </p>
          </a>
        </div>
      </section>
    </PageShell>
  );
}
