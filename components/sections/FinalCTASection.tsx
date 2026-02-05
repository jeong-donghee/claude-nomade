import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-[#2d5016]" style={{ backgroundImage: "linear-gradient(160deg, #2d5016 0%, #3d6b22 60%, #2d5016 100%)" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
        <span className="inline-flex items-center bg-white/15 border border-white/25 text-white text-sm font-semibold px-4 py-1.5 rounded-full">한정 혜택</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">지금 시작하고<br /><span className="text-[#c8e6b8]">혜택을 받으세요</span></h2>
        <p className="text-[#d4e8cc] text-lg max-w-lg leading-relaxed">지금 가입하고 첫 리뷰를 작성하면<br /><span className="font-bold text-white">프리미엄 1개월 무료!</span></p>
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-2 mt-2">
          <Input type="email" placeholder="이메일..." className="flex-1 h-12 text-base bg-white border-0 placeholder-[#7a7068] rounded-xl text-[#3a3228]" />
          <Button size="lg" className="h-12 bg-[#8b6f47] hover:bg-[#a07d55] text-white font-semibold rounded-xl px-6 shadow-md">무료로 시작 →</Button>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <span className="text-[#c8e6b8] text-sm flex items-center gap-1"><span className="text-[#a8d49a]">✓</span> 신용카드 불필요</span>
          <span className="text-[#c8e6b8] text-sm flex items-center gap-1"><span className="text-[#a8d49a]">✓</span> 언제든 해지 가능</span>
        </div>
      </div>
    </section>
  );
}
