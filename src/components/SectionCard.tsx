import { type PropsWithChildren } from "react";

type SectionCardProps = PropsWithChildren<{
  title?: string;
  className?: string;
}>;

export default function SectionCard({ title, className = "", children }: SectionCardProps) {
  return (
    <section className={`rounded-3xl border border-kerp-line bg-kerp-panelSoft/85 p-4 shadow-glow ${className}`}>
      {title ? <h2 className="mb-3 font-display text-lg text-kerp-text">{title}</h2> : null}
      {children}
    </section>
  );
}
