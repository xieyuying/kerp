import PhoneFrame from "../components/PhoneFrame";
import SectionCard from "../components/SectionCard";
import { trainingRecords, weekBars } from "../data/mock";

export default function StatsPage() {
  return (
    <PhoneFrame title="训练统计与记录" subtitle="追踪强度变化，保持可持续增长。" activeTab="stats">
      <SectionCard title="周训练时长">
        <div className="flex h-44 items-end gap-2">
          {weekBars.map((value, idx) => (
            <div key={`${value}-${idx}`} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-xl bg-gradient-to-b from-cyan-300 to-blue-500"
                style={{ height: `${value}%` }}
              />
              <span className="text-[10px] text-kerp-muted">{"一二三四五六日"[idx]}</span>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="恢复评分">
          <p className="font-display text-3xl text-kerp-text">83/100</p>
          <p className="mt-1 text-xs text-kerp-muted">状态良好，建议维持训练频率</p>
        </SectionCard>
        <SectionCard title="平均心率">
          <p className="font-display text-3xl text-kerp-text">142</p>
          <p className="mt-1 text-xs text-kerp-muted">bpm</p>
        </SectionCard>
      </div>

      <SectionCard title="最近训练记录">
        <ul className="space-y-3">
          {trainingRecords.map((item) => (
            <li key={item.title} className="rounded-xl border border-kerp-line/80 bg-black/20 p-3">
              <p className="font-medium text-kerp-text">{item.title}</p>
              <p className="mt-1 text-xs text-kerp-muted">{item.date} · {item.duration} · {item.kcal} kcal</p>
            </li>
          ))}
        </ul>
      </SectionCard>
    </PhoneFrame>
  );
}
