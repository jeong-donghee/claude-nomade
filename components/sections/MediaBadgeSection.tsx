"use client";

import { mediaBadges } from "@/data/cities";

export default function MediaBadgeSection() {
  return (
    <section className="bg-[#0f0f1a] border-y border-[#2a2a3e] py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <p className="text-center text-xs font-semibold text-[#8888aa] uppercase tracking-widest mb-5">
          주요 언론이 주목하는
        </p>

        {/* 배지 행 */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {mediaBadges.map((badge) => (
            <span
              key={badge.name}
              className="text-sm font-semibold text-[#4a4a66] hover:text-[#00f0ff] transition-all duration-300 cursor-default select-none"
              style={{ textShadow: "none" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.textShadow = "0 0 8px rgba(0,240,255,0.5)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.textShadow = "none"; }}
            >
              {badge.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
