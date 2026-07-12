import Image from "next/image";
import Link from "next/link";
import { brandName } from "@/lib/site";

type LogoProps = {
  variant?: "dark" | "light";
  priority?: boolean;
  className?: string;
};

export function Logo({ variant = "dark", priority = false, className = "" }: LogoProps) {
  const src =
    variant === "dark"
      ? "/logos/car-rental-sky-dark.png"
      : "/logos/car-rental-sky-light-transparent.png";

  return (
    <Link href="/" aria-label={`${brandName} home`} className={`inline-flex ${className}`}>
      <Image
        src={src}
        alt={`${brandName} logo`}
        width={2478}
        height={724}
        priority={priority}
        className="h-auto w-full object-contain"
      />
    </Link>
  );
}
