import { stats } from "@/data/cities";

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          숫자로 보는 한국 노마드 시티
        </h2>

        {/* 통계 그리드: 모바일 2열, 데스크톱 3열 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0f0f1a] border border-[#2a2a3e] rounded-2xl p-5 sm:p-6
                         text-center flex flex-col items-center gap-2
                         hover:border-[#00f0ff]/40 transition-colors duration-200"
              style={{ boxShadow: "0 0 15px rgba(0,240,255,0.08)" }}
            >
              {/* 숫자 */}
              <span className="text-3xl sm:text-4xl font-bold text-[#00f0ff]" style={{ textShadow: "0 0 12px rgba(0,240,255,0.4)" }}>{stat.value}</span>
              {/* 라벨 */}
              <span className="text-sm text-[#8888aa] font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
