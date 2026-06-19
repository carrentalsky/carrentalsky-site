import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = ""
}: CTAButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-skybrand-500 text-white shadow-glow hover:bg-skybrand-400"
      : "border border-white/20 bg-white/10 text-white hover:border-skybrand-300/70 hover:bg-white/15";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
