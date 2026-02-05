import { trendingCities } from "@/data/cities";

export default function TrendingCitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <h2 className="text-3xl font-bold text-neutral-900 mb-8 tracking-tight">
          트렌딩 도시
        </h2>

        {/* 트렌딩 카드 리스트 */}
        <div className="flex flex-col gap-4">
          {trendingCities.map((city, index) => (
            <div
              key={city.id}
              className="flex flex-col sm:flex-row rounded-lg overflow-hidden border border-neutral-200 hover:shadow-sm transition-shadow duration-200"
            >
              {/* 좌측 배경 영역 (단색 그레이) */}
              <div className="relative sm:w-56 h-36 sm:h-auto bg-neutral-100 flex-shrink-0">
                {/* HOT 배지 */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center bg-neutral-900 text-white text-xs font-semibold px-2 py-0.5 rounded">
                    HOT
                  </span>
                </div>
                {/* 순위 변동 */}
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center bg-neutral-200 text-neutral-700 text-xs font-semibold px-2 py-0.5 rounded">
                    ▲{city.rankChange}
                  </span>
                </div>
              </div>

              {/* 우측 정보 영역 */}
              <div className="flex-1 p-5 bg-white flex flex-col justify-between gap-3">
                {/* 도시명 + 설명 */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-semibold text-neutral-900">{city.name}</h3>
                    <span className="text-sm text-neutral-400">{city.nameEn}</span>
                  </div>
                  <p className="text-sm text-neutral-400 mt-1">
                    {city.description}
                  </p>
                </div>

                {/* 핵심 통계 행 */}
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm text-neutral-600">{city.rating} / 5.0</span>
                  <span className="text-sm text-neutral-600">₩{city.monthlyCost.toLocaleString()}</span>
                  <span className="text-sm text-neutral-600">{city.internetSpeed}Mbps</span>
                  <span className="text-sm text-neutral-900 font-semibold">+{city.newVisitors}명</span>
                </div>

                {/* CTA */}
                <div>
                  <button className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
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
