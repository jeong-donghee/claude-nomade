import { trendingCities } from "@/data/cities";

export default function TrendingCitySection() {
  return (
    <section className="py-16 bg-[#141416]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#e8e0d4] mb-8" style={{ letterSpacing: "0.02em" }}>이번 달 트렌딩 도시</h2>
        <div className="flex flex-col gap-4">
          {trendingCities.map((city) => (
            <div key={city.id} className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-[#2a2624] hover:border-[#d4af37] transition-all duration-200" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.35)" }}>
              <div className="relative sm:w-64 h-40 sm:h-auto flex-shrink-0" style={{ backgroundImage: "linear-gradient(135deg, #1a1a1e, #252220)" }}>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: "#d4af37", color: "#0e0e10", letterSpacing: "0.1em" }}>HOT</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center bg-[#0e0e10]/80 text-[#d4af37] text-sm font-bold px-2.5 py-1 rounded-full border border-[#2a2624]">▲{city.rankChange}</span>
                </div>
              </div>
              <div className="flex-1 p-5 bg-[#141416] flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-[#e8e0d4]">{city.name}</h3>
                    <span className="text-sm text-[#8a8279]">{city.nameEn}</span>
                  </div>
                  <p className="text-sm text-[#8a8279] mt-1">"{city.description}"</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm"><span className="font-semibold text-[#d4af37]">{city.rating} / 5.0</span></span>
                  <span className="text-sm"><span className="font-semibold text-[#e8e0d4]">₩{city.monthlyCost.toLocaleString()}</span></span>
                  <span className="text-sm"><span className="font-semibold text-[#e8e0d4]">{city.internetSpeed}Mbps</span></span>
                  <span className="text-sm text-[#d4af37] font-semibold">+{city.newVisitors}명</span>
                </div>
                <div>
                  <button className="text-sm font-semibold text-[#d4af37] hover:text-[#b8952f] transition-colors">더 알아보기 →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
