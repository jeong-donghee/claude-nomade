import { trendingCities } from "@/data/cities";

export default function TrendingCitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#3a3228] mb-8">이번 달 트렌딩 도시</h2>
        <div className="flex flex-col gap-4">
          {trendingCities.map((city) => (
            <div key={city.id} className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-[#ddd5c8] hover:shadow-md transition-shadow duration-200">
              <div className="relative sm:w-64 h-40 sm:h-auto bg-[#eef5eb] flex-shrink-0" style={{ backgroundImage: "linear-gradient(135deg, #d4e8cc, #eef5eb)" }}>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center bg-[#4a7c3f] text-white text-xs font-bold px-2.5 py-1 rounded-full">HOT</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center bg-white/80 text-[#2d5016] text-sm font-bold px-2.5 py-1 rounded-full">▲{city.rankChange}</span>
                </div>
              </div>
              <div className="flex-1 p-5 bg-white flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-[#3a3228]">{city.name}</h3>
                    <span className="text-sm text-[#7a7068]">{city.nameEn}</span>
                  </div>
                  <p className="text-sm text-[#7a7068] mt-1">"{city.description}"</p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm"><span className="font-semibold text-[#8b6f47]">{city.rating} / 5.0</span></span>
                  <span className="text-sm"><span className="font-semibold text-[#3a3228]">₩{city.monthlyCost.toLocaleString()}</span></span>
                  <span className="text-sm"><span className="font-semibold text-[#3a3228]">{city.internetSpeed}Mbps</span></span>
                  <span className="text-sm text-[#4a7c3f] font-semibold">+{city.newVisitors}명</span>
                </div>
                <div>
                  <button className="text-sm font-semibold text-[#2d5016] hover:text-[#4a7c3f] transition-colors">더 알아보기 →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
