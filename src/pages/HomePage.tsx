import PhoneFrame from "../components/PhoneFrame";
import SectionCard from "../components/SectionCard";

export default function HomePage() {
  return (
    <PhoneFrame title="Fitness Home" subtitle="今天还有 2 组训练，保持节奏。" activeTab="home">
      <SectionCard className="bg-gradient-to-br from-amber-400/20 via-amber-200/5 to-cyan-300/10">
        <p className="text-xs text-kerp-primary">Today Focus</p>
        <h2 className="mt-1 font-display text-2xl text-kerp-text">核心力量 + 上肢循环</h2>
        <p className="mt-2 text-sm text-kerp-muted">建议训练时长 45 分钟，预计消耗 340 kcal</p>
        <div className="mt-4 flex gap-3">
          <button className="rounded-xl bg-kerp-primary px-4 py-2 text-sm font-semibold text-slate-900">开始训练</button>
          <button className="rounded-xl border border-kerp-line px-4 py-2 text-sm text-kerp-text">查看计划</button>
        </div>
      </SectionCard>

      <div className="grid grid-cols-2 gap-4">
        <SectionCard title="连续打卡">
          <p className="font-display text-3xl text-kerp-text">9 天</p>
          <p className="mt-1 text-xs text-kerp-muted">稳定性超越 78% 用户</p>
        </SectionCard>
        <SectionCard title="本周时长">
          <p className="font-display text-3xl text-kerp-text">264 分钟</p>
          <p className="mt-1 text-xs text-kerp-muted">较上周 +16%</p>
        </SectionCard>
      </div>

      <SectionCard title="今日计划">
        <ul className="space-y-2 text-sm text-kerp-muted">
          <li className="flex items-center justify-between rounded-xl bg-white/5 p-3"><span>动态热身</span><strong className="text-kerp-text">10 分钟</strong></li>
          <li className="flex items-center justify-between rounded-xl bg-white/5 p-3"><span>上肢推拉循环</span><strong className="text-kerp-text">4 组</strong></li>
          <li className="flex items-center justify-between rounded-xl bg-white/5 p-3"><span>核心收尾</span><strong className="text-kerp-text">8 分钟</strong></li>
        </ul>
      </SectionCard>
    </PhoneFrame>
  );
}
