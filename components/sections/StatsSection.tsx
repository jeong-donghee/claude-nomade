import { stats } from "@/data/cities";

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#0e0e10]" style={{ backgroundImage: "linear-gradient(180deg, #141416 0%, #0e0e10 50%, #141416 100%)" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-[#e8e0d4] mb-10" style={{ letterSpacing: "0.02em" }}>숫자로 보는 한국 노마드 시티</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#141416] border border-[#2a2624] rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center gap-2 hover:border-[#d4af37] transition-colors duration-200" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
              <span className="text-3xl sm:text-4xl font-bold text-[#d4af37]" style={{ letterSpacing: "-0.02em" }}>{stat.value}</span>
              <span className="text-sm text-[#8a8279] font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
