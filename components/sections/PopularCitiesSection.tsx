import { cities } from "@/data/cities";
import CityFilterClient from "@/components/sections/CityFilterClient";

// 순위 배지 색상
function getRankStyle(rank: number) {
  if (rank === 1) return "bg-[#00f0ff] text-[#0a0a0f]";
  if (rank === 2) return "bg-[#ff2d95] text-white";
  if (rank === 3) return "bg-[#7c3aed] text-white";
  return "bg-[#1a1a2e] text-[#8888aa] border border-[#2a2a3e]";
}

// 별 표시 컴포넌트
function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < full ? "text-[#00f0ff]" : i === full && half ? "text-[#00c8d4]" : "text-[#2a2a3e]"}`}>
          ★
        </span>
      ))}
      <span className="text-xs text-[#8888aa] ml-1 font-semibold">{rating}/5.0</span>
    </div>
  );
}

export default function PopularCitiesSection() {
  return (
    <section id="cities" className="py-16 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <h2 className="text-3xl font-bold text-white">
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
              className="bg-[#0f0f1a] rounded-2xl overflow-hidden border border-[#2a2a3e]
                         hover:border-[#00f0ff]/40 transition-all duration-300 ease-out
                         hover:-translate-y-2 flex flex-col"
              style={{ boxShadow: "0 0 1px rgba(0,240,255,0.1)" }}
            >
              {/* 배경 영역 (네온 그래디언트) */}
              <div className="relative h-40 bg-[#141425]" style={{ backgroundImage: "linear-gradient(135deg, rgba(0,240,255,0.1), rgba(255,45,149,0.08))" }}>
                {/* 순위 배지 */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${getRankStyle(city.rank)}`}>
                    #{city.rank}
                  </span>
                </div>
                {/* 카테고리 태그 */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center bg-[#1a1a2e] border border-[#2a2a3e] text-[#8888aa] text-xs font-medium px-2 py-0.5 rounded-full">
                    {city.category}
                  </span>
                </div>
              </div>

              {/* 카드 본문 */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                {/* 도시명 */}
                <div>
                  <h3 className="text-lg font-bold text-white">{city.name}</h3>
                  <p className="text-xs text-[#8888aa]">{city.nameEn}</p>
                </div>

                {/* 평점 */}
                <div className="flex flex-col gap-1">
                  <StarRating rating={city.rating} />
                  <div className="w-full bg-[#1a1a2e] rounded-full h-1.5">
                    <div
                      className="bg-[#00f0ff] h-1.5 rounded-full"
                      style={{ width: `${city.recommendRate}%`, boxShadow: "0 0 6px rgba(0,240,255,0.5)" }}
                    />
                  </div>
                  <span className="text-xs text-[#8888aa] text-right">{city.recommendRate}% 추천</span>
                </div>

                {/* 5개 핵심 지표 */}
                <div className="flex flex-col gap-1.5 border-t border-[#2a2a3e] pt-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#8888aa]">월 생활비</span>
                    <span className="font-semibold text-[#e8e8f0]">₩{city.monthlyCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#8888aa]">인터넷 속도</span>
                    <span className="font-semibold text-[#e8e8f0]">{city.internetSpeed} Mbps</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#8888aa]">추천율</span>
                    <span className="font-semibold text-[#e8e8f0]">{city.recommendRate}%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#8888aa]">원룸 월세</span>
                    <span className="font-semibold text-[#e8e8f0]">₩{city.monthlyRent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[#8888aa]">카페 밀도</span>
                    <span className="font-semibold text-[#e8e8f0]">{city.cafeDensity}개 / 500m</span>
                  </div>
                </div>

                {/* 상세보기 CTA */}
                <div className="mt-auto pt-3">
                  <button className="w-full text-sm font-semibold text-[#00f0ff] border border-[#00f0ff]/40 rounded-lg py-2
                                     hover:bg-[#00f0ff] hover:text-[#0a0a0f] transition-colors duration-200">
                    상세보기 →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 전체 도시 보기 CTA */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 text-[#00f0ff] font-semibold text-base
                             border border-[#00f0ff]/40 rounded-xl px-6 py-3
                             hover:bg-[#00f0ff] hover:text-[#0a0a0f] transition-colors duration-200"
                  style={{ boxShadow: "0 0 12px rgba(0,240,255,0.15)" }}>
            전체 도시 보기 (40개) →
          </button>
        </div>
      </div>
    </section>
  );
}
