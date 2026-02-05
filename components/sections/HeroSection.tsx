import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const avatarColors = [
  "bg-neutral-300", "bg-neutral-400", "bg-neutral-300", "bg-neutral-500",
  "bg-neutral-300", "bg-neutral-400", "bg-neutral-500", "bg-neutral-300",
  "bg-neutral-400", "bg-neutral-300", "bg-neutral-500", "bg-neutral-400",
];

const avatarInitials = [
  "K", "J", "M", "S", "H", "L", "P", "W", "A", "D", "C", "T",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[560px] flex items-center justify-center bg-white border-b border-neutral-100 overflow-hidden">
      {/* 콘텐츠 */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
        {/* 헤드라인 배지 */}
        <span className="inline-block bg-neutral-100 border border-neutral-200 text-neutral-600 text-sm font-medium px-4 py-1.5 rounded-full">
          한국 디지털 노마드 커뮤니티
        </span>

        {/* 메인 헤드라인 */}
        <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight tracking-tight">
          대한민국에서<br />
          <span className="text-neutral-500">일하며 살기 좋은 도시</span>
        </h1>

        {/* 서브 헤드라인 */}
        <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
          원격 근무자를 위한 완벽한 도시를 찾아보세요.<br />
          생활비, 인터넷, 카페까지 모든 정보를 한 곳에서.
        </p>

        {/* 이메일 입력 폼 */}
        <div className="w-full max-w-md flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 h-12 text-base bg-neutral-50 border border-neutral-200 placeholder-neutral-400 rounded-md"
          />
          <Button
            size="lg"
            className="h-12 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-md px-6 transition-colors duration-200"
          >
            시작하기
          </Button>
        </div>

        {/* 소셜 프루프 */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <div className="flex items-center">
            {avatarColors.map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-semibold -ml-2 first:ml-0`}
              >
                {avatarInitials[i]}
              </div>
            ))}
            <span className="ml-3 text-neutral-400 text-sm">+860</span>
          </div>
          <p className="text-neutral-400 text-sm">
            이미 <span className="font-semibold text-neutral-700">872명</span>의 노마드가 함께하고 있습니다
          </p>
        </div>
      </div>
    </section>
  );
}
