import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const avatarColors = [
  "bg-[#00f0ff]", "bg-[#ff2d95]", "bg-[#00c8d4]", "bg-[#d946ef]",
  "bg-[#00f0ff]", "bg-[#ff2d95]", "bg-[#7c3aed]", "bg-[#00c8d4]",
  "bg-[#ff2d95]", "bg-[#00f0ff]", "bg-[#d946ef]", "bg-[#7c3aed]",
];

const avatarInitials = [
  "K", "J", "M", "S", "H", "L", "P", "W", "A", "D", "C", "T",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[560px] flex items-center justify-center bg-[#0a0a0f] overflow-hidden">
      {/* 네온 글로우 배경 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00f0ff] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-[#ff2d95] opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-40 w-48 h-48 bg-[#7c3aed] opacity-15 rounded-full blur-2xl" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
        {/* 헤드라인 배지 */}
        <span className="inline-block bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-sm font-medium px-4 py-1.5 rounded-full" style={{ boxShadow: "0 0 12px rgba(0,240,255,0.2)" }}>
          한국 디지털 노마드 커뮤니티
        </span>

        {/* 메인 헤드라인 */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          대한민국에서<br />
          <span className="text-[#00f0ff]" style={{ textShadow: "0 0 20px rgba(0,240,255,0.5)" }}>일하며 살기 좋은 도시</span>
        </h1>

        {/* 서브 헤드라인 */}
        <p className="text-lg text-[#8888aa] max-w-xl mx-auto leading-relaxed">
          원격 근무자를 위한 완벽한 도시를 찾아보세요.<br />
          생활비, 인터넷, 카페까지 모든 정보를 한 곳에서.
        </p>

        {/* 이메일 입력 폼 */}
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 h-12 text-base bg-[#1a1a2e] border border-[#2a2a3e] text-white placeholder-[#8888aa] rounded-xl focus:border-[#00f0ff]"
          />
          <Button
            size="lg"
            className="h-12 bg-[#00f0ff] hover:bg-[#00d4e0] text-[#0a0a0f] font-semibold rounded-xl px-6 transition-all duration-200"
            style={{ boxShadow: "0 0 20px rgba(0,240,255,0.4)" }}
          >
            시작하기 →
          </Button>
        </div>

        {/* 소셜 프루프 */}
        <div className="flex flex-col items-center gap-3 pt-2">
          {/* 아바타 행 */}
          <div className="flex items-center">
            {avatarColors.map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full ${color} border-2 border-[#0a0a0f] flex items-center justify-center text-white text-xs font-semibold -ml-2 first:ml-0`}
              >
                {avatarInitials[i]}
              </div>
            ))}
            <span className="ml-3 text-[#00f0ff] text-sm font-medium">+860</span>
          </div>
          <p className="text-[#8888aa] text-sm">
            이미 <span className="font-semibold text-white">872명</span>의 노마드가 함께하고 있습니다
          </p>
        </div>
      </div>
    </section>
  );
}
