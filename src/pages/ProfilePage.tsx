import PhoneFrame from "../components/PhoneFrame";
import SectionCard from "../components/SectionCard";
import { profileSettings } from "../data/mock";

export default function ProfilePage() {
  return (
    <PhoneFrame title="个人主页" subtitle="管理目标、会员权益和训练偏好。" activeTab="profile">
      <SectionCard className="bg-gradient-to-br from-amber-400/20 to-cyan-300/10">
        <div className="flex items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-kerp-primary font-display text-xl text-slate-900">Y</div>
          <div>
            <p className="font-display text-xl text-kerp-text">Yuying</p>
            <p className="text-xs text-kerp-muted">Pro 会员 · 训练目标：减脂 + 增肌</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="本月概览">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl bg-white/5 p-3">
            <p className="font-display text-2xl text-kerp-text">18</p>
            <p className="text-[11px] text-kerp-muted">训练次数</p>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <p className="font-display text-2xl text-kerp-text">21h</p>
            <p className="text-[11px] text-kerp-muted">训练时长</p>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <p className="font-display text-2xl text-kerp-text">2140</p>
            <p className="text-[11px] text-kerp-muted">kcal</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="设置">
        <ul className="space-y-2 text-sm text-kerp-muted">
          {profileSettings.map((item) => (
            <li key={item} className="rounded-xl border border-kerp-line/80 bg-black/20 p-3">
              {item}
            </li>
          ))}
        </ul>
      </SectionCard>
    </PhoneFrame>
  );
}
