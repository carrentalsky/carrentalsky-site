import Link from "next/link";
import { Logo } from "@/components/Logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search" },
  { href: "/manage-booking", label: "Manage Booking" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-4 sm:flex-row sm:gap-6 sm:px-6 lg:px-8">
        <Logo priority className="w-36 sm:w-48" />
        <nav aria-label="Primary navigation" className="flex flex-wrap items-center justify-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white sm:px-3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
