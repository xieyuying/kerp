import { type PropsWithChildren } from "react";
import BottomNav from "./BottomNav";

type PhoneFrameProps = PropsWithChildren<{
  title: string;
  subtitle: string;
  activeTab: "home" | "courses" | "stats" | "profile";
}>;

export default function PhoneFrame({ title, subtitle, activeTab, children }: PhoneFrameProps) {
  return (
    <div className="mx-auto w-full max-w-[780px] px-4 pb-28 pt-6 sm:px-6">
      <header className="mb-6 rounded-3xl border border-kerp-line/80 bg-kerp-panel/80 p-5 shadow-glow backdrop-blur-xl">
        <p className="font-display text-xs uppercase tracking-[0.2em] text-kerp-primary/90">KERP Fitness</p>
        <h1 className="mt-2 font-display text-2xl text-kerp-text sm:text-3xl">{title}</h1>
        <p className="mt-1 text-sm text-kerp-muted">{subtitle}</p>
      </header>
      <main className="space-y-4">{children}</main>
      <BottomNav activeTab={activeTab} />
    </div>
  );
}
