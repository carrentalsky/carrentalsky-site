"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";

const navItems = [
  { href: "/search", label: "Search Cars" },
  { href: "/manage-booking", label: "Manage Booking" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4eaf1] bg-[#ffffff] shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-6 lg:px-8">
        <Logo priority variant="light" className="w-40 sm:w-48" />

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-[#071a35] transition hover:bg-slate-100 hover:text-[#071a35] focus:outline-none focus:ring-2 focus:ring-[#1677ff]/40"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/search"
            className="rounded-md bg-[#1677ff] px-4 py-2.5 text-sm font-semibold text-[#ffffff] shadow-sm transition hover:bg-[#0d4c8f] focus:outline-none focus:ring-2 focus:ring-[#1677ff]/40"
          >
            Search Cars
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#e4eaf1] text-[#071a35] transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1677ff]/40 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#e4eaf1] bg-white px-5 py-4 shadow-sm lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-[#071a35] transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1677ff]/40"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/search"
              className="mt-2 rounded-md bg-[#1677ff] px-4 py-3 text-center text-sm font-semibold text-[#ffffff] transition hover:bg-[#0d4c8f] focus:outline-none focus:ring-2 focus:ring-[#1677ff]/40"
              onClick={() => setIsOpen(false)}
            >
              Search Cars
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
