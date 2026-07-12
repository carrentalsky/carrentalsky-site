import Link from "next/link";
import { Logo } from "@/components/Logo";
import { emails, mailto } from "@/lib/site";

const footerLinks = [
  { href: "/search", label: "Search Cars" },
  { href: "/manage-booking", label: "Manage Booking" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-[#d9e3f0] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="max-w-xl">
          <Logo variant="light" className="w-48" />
          <p className="mt-5 text-sm leading-6 text-slate-600">
            CarRentalSky provides a car rental search and booking interface for
            travelers comparing rental options worldwide.
          </p>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Reservations are fulfilled by VIP Cars and the applicable rental
            supplier. CarRentalSky does not own vehicles or directly fulfil
            rentals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:justify-self-end">
          <div>
            <h2 className="text-sm font-semibold text-slate-950">Contact</h2>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <a className="block hover:text-skybrand-500" href={mailto(emails.general)}>
                {emails.general}
              </a>
              <a className="block hover:text-skybrand-500" href={mailto(emails.partnerships)}>
                {emails.partnerships}
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-950">Explore</h2>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-skybrand-500">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#d9e3f0] px-5 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} CarRentalSky. All rights reserved.
      </div>
    </footer>
  );
}
