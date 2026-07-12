import Link from "next/link";
import { Logo } from "@/components/Logo";
import { emails, mailto } from "@/lib/site";

const footerLinks = [
  { href: "/search", label: "Search" },
  { href: "/manage-booking", label: "Manage Booking" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="max-w-xl">
          <Logo className="w-48" />
          <p className="mt-5 text-sm leading-6 text-slate-300">
            CarRentalSky provides a trusted car rental discovery and booking
            interface powered by VIP Cars and applicable rental suppliers.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:justify-self-end">
          <div>
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <a className="block hover:text-skybrand-300" href={mailto(emails.general)}>
                {emails.general}
              </a>
              <a className="block hover:text-skybrand-300" href={mailto(emails.partnerships)}>
                {emails.partnerships}
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-skybrand-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} CarRentalSky. All rights reserved.
      </div>
    </footer>
  );
}
