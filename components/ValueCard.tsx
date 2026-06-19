import type { LucideIcon } from "lucide-react";

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <article className="glass-panel rounded-lg p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-skybrand-500/10 text-skybrand-300 ring-1 ring-skybrand-300/20">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}
