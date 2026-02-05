import { stats } from "@/data/cities";

export default function StatsSection() {
  return (
    <section className="py-16 bg-neutral-100 border-y border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <h2 className="text-center text-3xl font-bold text-neutral-900 mb-10 tracking-tight">
          숫자로 보는 한국 노마드 시티
        </h2>

        {/* 통계 그리드: 모바일 2열, 데스크톱 3열 */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-neutral-200 rounded-lg p-5 sm:p-6
                         text-center flex flex-col items-center gap-1"
            >
              {/* 숫자 */}
              <span className="text-3xl sm:text-4xl font-bold text-neutral-900">{stat.value}</span>
              {/* 라벨 */}
              <span className="text-sm text-neutral-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
