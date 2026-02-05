import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-[#0a0a0f]" style={{ backgroundImage: "linear-gradient(135deg, rgba(0,240,255,0.06), rgba(255,45,149,0.04))" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
        {/* 혜택 배지 */}
        <span className="inline-flex items-center bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] text-sm font-semibold px-4 py-1.5 rounded-full" style={{ boxShadow: "0 0 12px rgba(0,240,255,0.2)" }}>
          한정 혜택
        </span>

        {/* 헤드라인 */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
          지금 시작하고<br />
          <span className="text-[#00f0ff]" style={{ textShadow: "0 0 16px rgba(0,240,255,0.4)" }}>혜택을 받으세요</span>
        </h2>

        {/* 혜택 설명 */}
        <p className="text-[#8888aa] text-lg max-w-lg leading-relaxed">
          지금 가입하고 첫 리뷰를 작성하면<br />
          <span className="font-bold text-white">프리미엄 1개월 무료!</span>
        </p>

        {/* 이메일 폼 */}
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-2 mt-2">
          <Input
            type="email"
            placeholder="이메일..."
            className="flex-1 h-12 text-base bg-[#1a1a2e] border border-[#2a2a3e] text-white placeholder-[#8888aa] rounded-xl focus:border-[#00f0ff]"
          />
          <Button
            size="lg"
            className="h-12 bg-[#00f0ff] hover:bg-[#00d4e0] text-[#0a0a0f] font-semibold rounded-xl px-6"
            style={{ boxShadow: "0 0 20px rgba(0,240,255,0.4)" }}
          >
            무료로 시작 →
          </Button>
        </div>

        {/* 안심 문구 */}
        <div className="flex items-center gap-4 mt-1">
          <span className="text-[#8888aa] text-sm flex items-center gap-1">
            <span className="text-[#00f0ff]">✓</span> 신용카드 불필요
          </span>
          <span className="text-[#8888aa] text-sm flex items-center gap-1">
            <span className="text-[#00f0ff]">✓</span> 언제든 해지 가능
          </span>
        </div>
      </div>
    </section>
  );
}
