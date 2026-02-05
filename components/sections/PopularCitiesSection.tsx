import { cities } from "@/data/cities";
import CityFilterClient from "@/components/sections/CityFilterClient";

// 순위 배지 색상
function getRankStyle(_rank: number) {
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
          <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
            인기 도시 TOP 10
          </h2>
        </div>

        {/* 필터 + 정렬 (Client Component) */}
        <CityFilterClient />

        {/* 도시 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {cities.map((city) => (
            <div
              key={city.id}
              className="bg-white rounded-lg overflow-hidden border border-neutral-200
                         hover:shadow-sm transition-all duration-300 ease-out
                         hover:-translate-y-1 flex flex-col"
            >
              {/* 배경 영역 (단색 그레이) */}
              <div className="relative h-36 bg-neutral-100">
                {/* 순위 배지 */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${getRankStyle(city.rank)}`}>
                    #{city.rank}
                  </span>
                </div>
                {/* 카테고리 태그 */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center bg-neutral-200 text-neutral-600 text-xs font-medium px-2 py-0.5 rounded">
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
                    <span className="text-neutral-400">월 생활비</span>
                    <span className="font-semibold text-neutral-700">₩{city.monthlyCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">인터넷 속도</span>
                    <span className="font-semibold text-neutral-700">{city.internetSpeed} Mbps</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">추천율</span>
                    <span className="font-semibold text-neutral-700">{city.recommendRate}%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">원룸 월세</span>
                    <span className="font-semibold text-neutral-700">₩{city.monthlyRent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">카페 밀도</span>
                    <span className="font-semibold text-neutral-700">{city.cafeDensity}개 / 500m</span>
                  </div>
                </div>

                {/* 상세보기 CTA */}
                <div className="mt-auto pt-3">
                  <button className="w-full text-sm font-medium text-neutral-600 border border-neutral-300 rounded py-2
                                     hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors duration-200">
                    상세보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 전체 도시 보기 CTA */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 text-neutral-600 font-medium text-sm
                             border border-neutral-300 rounded px-5 py-2.5
                             hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors duration-200">
            전체 도시 보기 (40개)
          </button>
        </div>
      </div>
    </section>
  );
}
