import { trendingCities } from "@/data/cities";

export default function TrendingCitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <h2 className="text-3xl font-bold text-neutral-800 mb-8">
          🔥 이번 달 트렌딩 도시
        </h2>

        {/* 트렌딩 카드 리스트 */}
        <div className="flex flex-col gap-4">
          {trendingCities.map((city, index) => (
            <div
              key={city.id}
              className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* 좌측 배경 영역 */}
              <div className={`relative sm:w-64 h-40 sm:h-auto bg-gradient-to-br ${city.bgColor} flex-shrink-0`}>
                {/* HOT 배지 */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    🔥 HOT
                  </span>
                </div>
                {/* 순위 변동 */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center bg-white/20 backdrop-blur text-white text-sm font-bold px-2.5 py-1 rounded-full">
                    📈 ▲{city.rankChange}
                  </span>
                </div>
              </div>

              {/* 우측 정보 영역 */}
              <div className="flex-1 p-5 bg-neutral-50 flex flex-col justify-between gap-3">
                {/* 도시명 + 설명 */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-neutral-800">{city.name}</h3>
                    <span className="text-sm text-neutral-400">{city.nameEn}</span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-1">
                    "{city.description}"
                  </p>
                </div>

                {/* 핵심 통계 행 */}
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1 text-sm">
                    <span className="text-amber-400">⭐</span>
                    <span className="font-semibold text-neutral-700">{city.rating}</span>
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <span>💵</span>
                    <span className="font-semibold text-neutral-700">₩{city.monthlyCost.toLocaleString()}</span>
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <span>📡</span>
                    <span className="font-semibold text-neutral-700">{city.internetSpeed}Mbps</span>
                  </span>
                  <span className="flex items-center gap-1 text-sm text-emerald-600 font-semibold">
                    <span>👥</span>
                    <span>+{city.newVisitors}명</span>
                  </span>
                </div>

                {/* CTA */}
                <div>
                  <button className="text-sm font-semibold text-brand-green hover:text-brand-green/80 transition-colors">
                    더 알아보기 →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
