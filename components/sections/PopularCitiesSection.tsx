import Link from "next/link";
import { cities, CityCard } from "@/data/cities";

function getRankStyle(rank: number) {
  if (rank === 1) return "bg-[#d4af37] text-[#3a3228]";
  if (rank === 2) return "bg-[#c8c8c8] text-[#3a3228]";
  if (rank === 3) return "bg-[#c4956a] text-white";
  return "bg-[#f0ebe3] text-[#7a7068]";
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < full ? "text-[#8b6f47]" : i === full && half ? "text-[#c4956a]" : "text-[#ddd5c8]"}`}>★</span>
      ))}
      <span className="text-xs text-[#7a7068] ml-1 font-semibold">{rating}/5.0</span>
    </div>
  );
}

interface PopularCitiesSectionProps {
  previewCount?: number;
  showFilter?: boolean;
}

export default function PopularCitiesSection({ previewCount, showFilter = false }: PopularCitiesSectionProps) {
  const displayCities = previewCount ? cities.slice(0, previewCount) : cities;

  return (
    <section id="cities" className="py-16 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <h2 className="text-3xl font-bold text-[#3a3228]">인기 도시 TOP 10</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {displayCities.map((city) => (
            <div key={city.id} className="bg-white rounded-2xl overflow-hidden border border-[#ddd5c8] hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col">
              <div className="relative h-40 bg-[#eef5eb]" style={{ backgroundImage: "linear-gradient(135deg, #eef5eb, #e8f0e2)" }}>
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${getRankStyle(city.rank)}`}>#{city.rank}</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center bg-white/70 text-[#5c5248] text-xs font-medium px-2 py-0.5 rounded-full">{city.category}</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-lg font-bold text-[#3a3228]">{city.name}</h3>
                  <p className="text-xs text-[#7a7068]">{city.nameEn}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <StarRating rating={city.rating} />
                  <div className="w-full bg-[#f0ebe3] rounded-full h-1.5">
                    <div className="bg-[#4a7c3f] h-1.5 rounded-full" style={{ width: `${city.recommendRate}%` }} />
                  </div>
                  <span className="text-xs text-[#7a7068] text-right">{city.recommendRate}% 추천</span>
                </div>
                <div className="flex flex-col gap-1.5 border-t border-[#f0ebe3] pt-3">
                  <div className="flex justify-between text-xs"><span className="text-[#7a7068]">월 생활비</span><span className="font-semibold text-[#3a3228]">₩{city.monthlyCost.toLocaleString()}</span></div>
                  <div className="flex justify-between text-xs"><span className="text-[#7a7068]">인터넷 속도</span><span className="font-semibold text-[#3a3228]">{city.internetSpeed} Mbps</span></div>
                  <div className="flex justify-between text-xs"><span className="text-[#7a7068]">추천율</span><span className="font-semibold text-[#3a3228]">{city.recommendRate}%</span></div>
                  <div className="flex justify-between text-xs"><span className="text-[#7a7068]">원룸 월세</span><span className="font-semibold text-[#3a3228]">₩{city.monthlyRent.toLocaleString()}</span></div>
                  <div className="flex justify-between text-xs"><span className="text-[#7a7068]">카페 밀도</span><span className="font-semibold text-[#3a3228]">{city.cafeDensity}개 / 500m</span></div>
                </div>
                <div className="mt-auto pt-3">
                  <button className="w-full text-sm font-medium text-[#2d5016] border border-[#2d5016] rounded-lg py-2 hover:bg-[#2d5016] hover:text-white transition-colors duration-200">상세보기</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {previewCount && (
          <div className="mt-10 text-center">
            <Link href="/cities" className="inline-flex items-center gap-2 text-[#2d5016] font-semibold text-base border border-[#2d5016] rounded-xl px-6 py-3 hover:bg-[#2d5016] hover:text-white transition-colors duration-200">
              전체 도시 보기 ({cities.length}개)
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
