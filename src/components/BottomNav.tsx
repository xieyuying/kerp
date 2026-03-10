const tabs = [
  { key: "home", href: "#/home", label: "首页", icon: "◉" },
  { key: "courses", href: "#/courses", label: "课程", icon: "▦" },
  { key: "stats", href: "#/stats", label: "统计", icon: "▤" },
  { key: "profile", href: "#/profile", label: "我的", icon: "◎" },
];

type BottomNavProps = {
  activeTab: "home" | "courses" | "stats" | "profile";
};

export default function BottomNav({ activeTab }: BottomNavProps) {
  return (
    <nav className="fixed bottom-4 left-1/2 z-40 flex w-[92vw] max-w-[380px] -translate-x-1/2 items-center justify-between rounded-2xl border border-kerp-line/80 bg-kerp-panel/95 px-3 py-2 backdrop-blur-xl">
      {tabs.map((tab) => (
        <a
          key={tab.key}
          href={tab.href}
          className={[
            "flex min-w-16 flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs transition",
            activeTab === tab.key ? "bg-kerp-primary text-slate-900" : "text-kerp-muted hover:text-kerp-text",
          ].join(" ")}
        >
          <span className="text-sm leading-none">{tab.icon}</span>
          <span>{tab.label}</span>
        </a>
      ))}
    </nav>
  );
}
