import { mediaBadges } from "@/data/cities";

export default function MediaBadgeSection() {
  return (
    <section className="bg-[#1a1a1e] border-y border-[#2a2624] py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-[#8a8279] uppercase tracking-widest mb-5">주요 언론이 주목하는</p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {mediaBadges.map((badge) => (
            <span key={badge.name} className="text-sm font-semibold text-[#8a8279] hover:text-[#d4af37] transition-all duration-300 cursor-default select-none" style={{ letterSpacing: "0.06em" }}>
              {badge.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
