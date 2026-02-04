import { cities } from "@/data/cities";
import CityFilterClient from "@/components/sections/CityFilterClient";

// 순위 배지 색상
function getRankStyle(rank: number) {
  if (rank === 1) return "bg-amber-400 text-amber-900";
  if (rank === 2) return "bg-neutral-300 text-neutral-700";
  if (rank === 3) return "bg-orange-300 text-orange-800";
  return "bg-neutral-100 text-neutral-600";
}

// 별 표시 컴포넌트
function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < full ? "text-amber-400" : i === full && half ? "text-amber-300" : "text-neutral-200"}`}>
          ★
        </span>
      ))}
      <span className="text-xs text-neutral-500 ml-1 font-semibold">{rating}/5.0</span>
    </div>
  );
}

export default function PopularCitiesSection() {
  return (
    <section id="cities" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <h2 className="text-3xl font-bold text-neutral-800">
            🏆 인기 도시 TOP 10
          </h2>
        </div>

        {/* 필터 + 정렬 (Client Component) */}
        <CityFilterClient />

        {/* 도시 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {cities.map((city) => (
            <div
              key={city.id}
              className="bg-white rounded-2xl overflow-hidden border border-neutral-100
                         shadow-sm hover:shadow-xl transition-all duration-300 ease-out
                         hover:-translate-y-2 flex flex-col"
            >
              {/* 배경 이미지 영역 (placeholder 그래디언트) */}
              <div className={`relative h-40 bg-gradient-to-br ${city.bgColor}`}>
                {/* 순위 배지 */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${getRankStyle(city.rank)}`}>
                    🏆 #{city.rank}
                  </span>
                </div>
                {/* 카테고리 태그 */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center bg-white/20 backdrop-blur text-white text-xs font-medium px-2 py-0.5 rounded-full">
                    {city.category}
                  </span>
                </div>
              </div>

              {/* 카드 본문 */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                {/* 도시명 */}
                <div>
                  <h3 className="text-lg font-bold text-neutral-800">{city.name}</h3>
                  <p className="text-xs text-neutral-400">{city.nameEn}</p>
                </div>

                {/* 평점 */}
                <div className="flex flex-col gap-1">
                  <StarRating rating={city.rating} />
                  <div className="w-full bg-neutral-100 rounded-full h-1.5">
                    <div
                      className="bg-brand-green h-1.5 rounded-full"
                      style={{ width: `${city.recommendRate}%` }}
                    />
                  </div>
                  <span className="text-xs text-neutral-400 text-right">{city.recommendRate}% 추천</span>
                </div>

                {/* 5개 핵심 지표 */}
                <div className="flex flex-col gap-1.5 border-t border-neutral-100 pt-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">💵 월 생활비</span>
                    <span className="font-semibold text-neutral-700">₩{city.monthlyCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">📡 인터넷 속도</span>
                    <span className="font-semibold text-neutral-700">{city.internetSpeed} Mbps</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">👍 추천율</span>
                    <span className="font-semibold text-neutral-700">{city.recommendRate}%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">🏠 원룸 월세</span>
                    <span className="font-semibold text-neutral-700">₩{city.monthlyRent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">☕ 카페 밀도</span>
                    <span className="font-semibold text-neutral-700">{city.cafeDensity}개 / 500m</span>
                  </div>
                </div>

                {/* 상세보기 CTA */}
                <div className="mt-auto pt-3">
                  <button className="w-full text-sm font-semibold text-brand-green border border-brand-green rounded-lg py-2
                                     hover:bg-brand-green hover:text-white transition-colors duration-200">
                    상세보기 →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 전체 도시 보기 CTA */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 text-brand-green font-semibold text-base
                             border border-brand-green rounded-xl px-6 py-3
                             hover:bg-brand-green hover:text-white transition-colors duration-200">
            전체 도시 보기 (40개) →
          </button>
        </div>
      </div>
    </section>
  );
}
