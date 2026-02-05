import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
        {/* 혜택 배지 */}
        <span className="inline-flex items-center bg-neutral-800 border border-neutral-700 text-neutral-300 text-sm font-medium px-4 py-1.5 rounded">
          한정 혜택
        </span>

        {/* 헤드라인 */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug tracking-tight">
          지금 시작하고<br />
          <span className="text-neutral-400">혜택을 받으세요</span>
        </h2>

        {/* 혜택 설명 */}
        <p className="text-neutral-400 text-lg max-w-lg leading-relaxed">
          지금 가입하고 첫 리뷰를 작성하면<br />
          <span className="font-bold text-white">프리미엄 1개월 무료!</span>
        </p>

        {/* 이메일 폼 */}
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-2 mt-2">
          <Input
            type="email"
            placeholder="이메일..."
            className="flex-1 h-12 text-base bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 rounded-md"
          />
          <Button
            size="lg"
            className="h-12 bg-white hover:bg-neutral-100 text-neutral-900 font-medium rounded-md px-6"
          >
            무료로 시작
          </Button>
        </div>

        {/* 안심 문구 */}
        <div className="flex items-center gap-4 mt-1">
          <span className="text-neutral-500 text-sm flex items-center gap-1">
            <span className="text-neutral-400">✓</span> 신용카드 불필요
          </span>
          <span className="text-neutral-500 text-sm flex items-center gap-1">
            <span className="text-neutral-400">✓</span> 언제든 해지 가능
          </span>
        </div>
      </div>
    </section>
  );
}
