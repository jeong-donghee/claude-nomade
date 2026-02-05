import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const avatarColors = [
  "bg-[#2a2624]", "bg-[#1a1a1e]", "bg-[#2a2624]", "bg-[#1a1a1e]",
  "bg-[#2a2624]", "bg-[#1a1a1e]", "bg-[#2a2624]", "bg-[#1a1a1e]",
  "bg-[#2a2624]", "bg-[#1a1a1e]", "bg-[#2a2624]", "bg-[#1a1a1e]",
];

const avatarInitials = ["K", "J", "M", "S", "H", "L", "P", "W", "A", "D", "C", "T"];

export default function HeroSection() {
  return (
    <section className="relative min-h-[560px] flex items-center justify-center bg-[#0e0e10] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: "linear-gradient(160deg, #0e0e10 0%, #141416 50%, #0e0e10 100%)" }} />
        <div className="absolute top-16 right-20 w-72 h-72 bg-[#d4af37] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-16 w-56 h-56 bg-[#d4af37] opacity-4 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
        <span className="inline-block bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-sm font-medium px-4 py-1.5 rounded-full" style={{ letterSpacing: "0.06em" }}>
          한국 디지털 노마드 커뮤니티
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight" style={{ letterSpacing: "-0.02em" }}>
          대한민국에서<br />
          <span className="text-[#d4af37]">일하며 살기 좋은 도시</span>
        </h1>
        <p className="text-lg text-[#8a8279] max-w-xl mx-auto leading-relaxed">
          원격 근무자를 위한 완벽한 도시를 찾아보세요.<br />
          생활비, 인터넷, 카페까지 모든 정보를 한 곳에서.
        </p>
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-2">
          <Input type="email" placeholder="이메일 주소를 입력하세요" className="flex-1 h-12 text-base bg-[#141416] border border-[#2a2624] text-white placeholder-[#8a8279] rounded-xl focus:border-[#d4af37]" />
          <Button size="lg" className="h-12 bg-[#d4af37] hover:bg-[#c4a030] text-[#0e0e10] font-semibold rounded-xl px-6 transition-all duration-200" style={{ letterSpacing: "0.04em" }}>
            시작하기 →
          </Button>
        </div>
        <div className="flex flex-col items-center gap-3 pt-2">
          <div className="flex items-center">
            {avatarColors.map((color, i) => (
              <div key={i} className={`w-8 h-8 rounded-full ${color} border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] text-xs font-semibold -ml-2 first:ml-0`}>
                {avatarInitials[i]}
              </div>
            ))}
            <span className="ml-3 text-[#d4af37] text-sm font-medium">+860</span>
          </div>
          <p className="text-[#8a8279] text-sm">
            이미 <span className="font-semibold text-white">872명</span>의 노마드가 함께하고 있습니다
          </p>
        </div>
      </div>
    </section>
  );
}
