import { cities } from "@/data/cities";
import CityFilterClient from "@/components/sections/CityFilterClient";

function getRankStyle(rank: number) {
  if (rank === 1) return { bg: "#d4af37", text: "#0e0e10" };
  if (rank === 2) return { bg: "#c0c0c0", text: "#0e0e10" };
  if (rank === 3) return { bg: "#b87333", text: "#fff" };
  return { bg: "#1a1a1e", text: "#8a8279" };
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < full ? "text-[#d4af37]" : i === full && half ? "text-[#8a7520]" : "text-[#2a2624]"}`}>★</span>
      ))}
      <span className="text-xs text-[#8a8279] ml-1 font-semibold">{rating}/5.0</span>
    </div>
  );
}

export default function PopularCitiesSection() {
  return (
    <section id="cities" className="py-16 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <h2 className="text-3xl font-bold text-[#e8e0d4]" style={{ letterSpacing: "0.02em" }}>인기 도시 TOP 10</h2>
        </div>
        <CityFilterClient />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {cities.map((city) => {
            const rankStyle = getRankStyle(city.rank);
            return (
              <div key={city.id} className="bg-[#141416] rounded-2xl overflow-hidden border border-[#2a2624] hover:border-[#d4af37] transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.35)" }}>
                <div className="relative h-40" style={{ backgroundImage: "linear-gradient(135deg, #1a1a1e, #141416)" }}>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold" style={{ backgroundColor: rankStyle.bg, color: rankStyle.text }}>#{city.rank}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center bg-[#0e0e10]/80 text-[#8a8279] text-xs font-medium px-2 py-0.5 rounded-full border border-[#2a2624]">{city.category}</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <div>
                    <h3 className="text-lg font-bold text-[#e8e0d4]">{city.name}</h3>
                    <p className="text-xs text-[#8a8279]">{city.nameEn}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <StarRating rating={city.rating} />
                    <div className="w-full bg-[#1a1a1e] rounded-full h-1.5">
                      <div className="h-1.5 rounded-full" style={{ width: `${city.recommendRate}%`, backgroundColor: "#d4af37" }} />
                    </div>
                    <span className="text-xs text-[#8a8279] text-right">{city.recommendRate}% 추천</span>
                  </div>
                  <div className="flex flex-col gap-1.5 border-t border-[#252220] pt-3">
                    <div className="flex justify-between text-xs"><span className="text-[#8a8279]">월 생활비</span><span className="font-semibold text-[#e8e0d4]">₩{city.monthlyCost.toLocaleString()}</span></div>
                    <div className="flex justify-between text-xs"><span className="text-[#8a8279]">인터넷 속도</span><span className="font-semibold text-[#e8e0d4]">{city.internetSpeed} Mbps</span></div>
                    <div className="flex justify-between text-xs"><span className="text-[#8a8279]">추천율</span><span className="font-semibold text-[#e8e0d4]">{city.recommendRate}%</span></div>
                    <div className="flex justify-between text-xs"><span className="text-[#8a8279]">원룸 월세</span><span className="font-semibold text-[#e8e0d4]">₩{city.monthlyRent.toLocaleString()}</span></div>
                    <div className="flex justify-between text-xs"><span className="text-[#8a8279]">카페 밀도</span><span className="font-semibold text-[#e8e0d4]">{city.cafeDensity}개 / 500m</span></div>
                  </div>
                  <div className="mt-auto pt-3">
                    <button className="w-full text-sm font-medium text-[#d4af37] border border-[#d4af37] rounded-lg py-2 hover:bg-[#d4af37] hover:text-[#0e0e10] transition-colors duration-200">상세보기</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 text-[#d4af37] font-semibold text-base border border-[#d4af37] rounded-xl px-6 py-3 hover:bg-[#d4af37] hover:text-[#0e0e10] transition-colors duration-200">전체 도시 보기 (40개)</button>
        </div>
      </div>
    </section>
  );
}
