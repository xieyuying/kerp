import PhoneFrame from "../components/PhoneFrame";
import SectionCard from "../components/SectionCard";
import { coachCards } from "../data/mock";

export default function CoursesPage() {
  const filters: Array<{ name: string; active: boolean }> = [
    { name: "全部", active: true },
    { name: "HIIT 燃脂", active: false },
    { name: "力量基础", active: false },
    { name: "核心稳定", active: false },
    { name: "拉伸恢复", active: false },
  ];

  return (
    <PhoneFrame title="视频课程库" subtitle="按目标筛选课程，持续进阶。" activeTab="courses">
      <SectionCard>
        <div className="rounded-2xl border border-kerp-line bg-black/20 px-4 py-3 text-sm text-kerp-muted">搜索课程、教练或训练目标</div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 text-xs">
          {filters.map((item) => (
            <button
              key={item.name}
              className={`whitespace-nowrap rounded-full px-3 py-2 ${
                item.active ? "bg-kerp-primary text-slate-900" : "border border-kerp-line bg-white/5 text-kerp-muted"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </SectionCard>

      <div className="space-y-3">
        {coachCards.map((item) => (
          <SectionCard key={item.name} className="bg-gradient-to-br from-kerp-panelSoft to-slate-900/60">
            <div className="mb-2 inline-flex rounded-full border border-amber-300/30 bg-amber-400/15 px-2.5 py-1 text-xs text-amber-200">
              {item.badge}
            </div>
            <h2 className="font-display text-xl text-kerp-text">{item.name}</h2>
            <p className="mt-1 text-sm text-kerp-muted">{item.desc}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-cyan-200">{item.progress}</span>
              <button className="rounded-lg bg-kerp-primary px-3 py-2 text-xs font-semibold text-slate-900">进入课程</button>
            </div>
          </SectionCard>
        ))}
      </div>
    </PhoneFrame>
  );
}
