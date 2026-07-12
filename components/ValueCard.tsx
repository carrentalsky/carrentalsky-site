import type { LucideIcon } from "lucide-react";

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: "dark" | "light";
};

export function ValueCard({ icon: Icon, title, description, tone = "dark" }: ValueCardProps) {
  const isLight = tone === "light";

  return (
    <article
      className={
        isLight
          ? "rounded-lg border border-[#d9e3f0] bg-white p-6 shadow-sm"
          : "rounded-lg border border-[#21496f] bg-[#123253] p-6"
      }
    >
      <div
        className={
          isLight
            ? "flex h-11 w-11 items-center justify-center rounded-md bg-skybrand-500/10 text-skybrand-500"
            : "flex h-11 w-11 items-center justify-center rounded-md bg-[#1677ff]/10 text-[#1677ff]"
        }
      >
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className={`mt-5 text-lg font-semibold ${isLight ? "text-slate-950" : "text-white"}`}>
        {title}
      </h3>
      <p className={`mt-3 text-sm leading-6 ${isLight ? "text-slate-600" : "text-[#d6e3f0]"}`}>
        {description}
      </p>
    </article>
  );
}
