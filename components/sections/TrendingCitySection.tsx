import { trendingCities } from "@/data/cities";

export default function TrendingCitySection() {
  return (
    <section className="py-16 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <h2 className="text-3xl font-bold text-white mb-8">
          이번 달 트렌딩 도시
        </h2>

        {/* 트렌딩 카드 리스트 */}
        <div className="flex flex-col gap-4">
          {trendingCities.map((city, index) => (
            <div
              key={city.id}
              className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-[#2a2a3e] hover:border-[#00f0ff]/40 transition-all duration-200"
            >
              {/* 좌측 배경 영역 */}
              <div className="relative sm:w-64 h-40 sm:h-auto bg-[#141425] flex-shrink-0" style={{ backgroundImage: "linear-gradient(135deg, rgba(0,240,255,0.08), rgba(255,45,149,0.06))" }}>
                {/* HOT 배지 */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center bg-[#ff2d95] text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ boxShadow: "0 0 10px rgba(255,45,149,0.4)" }}>
                    HOT
                  </span>
                </div>
                {/* 순위 변동 */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center bg-[#1a1a2e] border border-[#2a2a3e] text-[#00f0ff] text-sm font-bold px-2.5 py-1 rounded-full">
                    ▲{city.rankChange}
                  </span>
                </div>
              </div>

              {/* 우측 정보 영역 */}
              <div className="flex-1 p-5 bg-[#0f0f1a] flex flex-col justify-between gap-3">
                {/* 도시명 + 설명 */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-white">{city.name}</h3>
                    <span className="text-sm text-[#8888aa]">{city.nameEn}</span>
                  </div>
                  <p className="text-sm text-[#8888aa] mt-1">
                    "{city.description}"
                  </p>
                </div>

                {/* 핵심 통계 행 */}
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm">
                    <span className="font-semibold text-[#00f0ff]">{city.rating} / 5.0</span>
                  </span>
                  <span className="text-sm">
                    <span className="font-semibold text-[#e8e8f0]">₩{city.monthlyCost.toLocaleString()}</span>
                  </span>
                  <span className="text-sm">
                    <span className="font-semibold text-[#e8e8f0]">{city.internetSpeed}Mbps</span>
                  </span>
                  <span className="text-sm text-[#00f0ff] font-semibold">
                    +{city.newVisitors}명
                  </span>
                </div>

                {/* CTA */}
                <div>
                  <button className="text-sm font-semibold text-[#00f0ff] hover:text-[#00d4e0] transition-colors">
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
