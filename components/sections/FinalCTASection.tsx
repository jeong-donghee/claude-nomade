import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-[#0e0e10]" style={{ backgroundImage: "linear-gradient(160deg, #141416 0%, #0e0e10 60%, #141416 100%)" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
        <span className="inline-flex items-center border text-sm font-semibold px-4 py-1.5 rounded-full text-[#d4af37]" style={{ backgroundColor: "rgba(212,175,55,0.1)", borderColor: "rgba(212,175,55,0.3)", letterSpacing: "0.06em" }}>한정 혜택</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#e8e0d4] leading-snug" style={{ letterSpacing: "0.01em" }}>지금 시작하고<br /><span className="text-[#d4af37]">혜택을 받으세요</span></h2>
        <p className="text-[#8a8279] text-lg max-w-lg leading-relaxed">지금 가입하고 첫 리뷰를 작성하면<br /><span className="font-bold text-[#e8e0d4]">프리미엄 1개월 무료!</span></p>
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-2 mt-2">
          <Input type="email" placeholder="이메일..." className="flex-1 h-12 text-base bg-[#141416] border-[#2a2624] placeholder-[#8a8279] rounded-xl text-[#e8e0d4] focus:ring-[#d4af37]" />
          <Button size="lg" className="h-12 text-[#0e0e10] font-semibold rounded-xl px-6" style={{ backgroundColor: "#d4af37" }}>무료로 시작 →</Button>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <span className="text-[#8a8279] text-sm flex items-center gap-1"><span className="text-[#d4af37]">✓</span> 신용카드 불필요</span>
          <span className="text-[#8a8279] text-sm flex items-center gap-1"><span className="text-[#d4af37]">✓</span> 언제든 해지 가능</span>
        </div>
      </div>
    </section>
  );
}
