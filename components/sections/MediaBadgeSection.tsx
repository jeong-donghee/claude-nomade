import { mediaBadges } from "@/data/cities";

export default function MediaBadgeSection() {
  return (
    <section className="bg-neutral-50 border-y border-neutral-100 py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <p className="text-center text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">
          ✨ 주요 언론이 주목하는 ✨
        </p>

        {/* 배지 행 */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {mediaBadges.map((badge) => (
            <span
              key={badge.name}
              className={`text-sm font-semibold text-neutral-300 grayscale hover:grayscale-0 ${badge.hoverColor} transition-all duration-300 cursor-default select-none`}
            >
              {badge.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
