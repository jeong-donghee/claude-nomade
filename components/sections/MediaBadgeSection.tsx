import { mediaBadges } from "@/data/cities";

export default function MediaBadgeSection() {
  return (
    <section className="bg-[#f0ebe3] border-y border-[#ddd5c8] py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-[#7a7068] uppercase tracking-widest mb-5">주요 언론이 주목하는</p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {mediaBadges.map((badge) => (
            <span key={badge.name} className="text-sm font-semibold text-[#a0896e] hover:text-[#2d5016] transition-all duration-300 cursor-default select-none">
              {badge.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
