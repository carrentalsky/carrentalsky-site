import Image from "next/image";
import Link from "next/link";
import { brandName } from "@/lib/site";

type LogoProps = {
  variant?: "dark" | "light";
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function Logo({
  variant = "dark",
  priority = false,
  className = "",
  sizes = "(min-width: 640px) 192px, 160px"
}: LogoProps) {
  const src =
    variant === "dark"
      ? "/logos/car-rental-sky-dark-672.png"
      : "/logos/car-rental-sky-light-transparent-672.png";

  return (
    <Link href="/" aria-label={`${brandName} home`} className={`inline-flex ${className}`}>
      <Image
        src={src}
        alt={`${brandName} logo`}
        width={672}
        height={196}
        priority={priority}
        sizes={sizes}
        unoptimized
        className="h-auto w-full object-contain"
      />
    </Link>
  );
}
