import { recentReviews, popularQnAs } from "@/data/cities";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? "text-[#d4af37]" : "text-[#2a2624]"}`}>★</span>
      ))}
    </div>
  );
}

const reviewAvatarColors = ["bg-[#d4af37]", "bg-[#8a8279]", "bg-[#b87333]"];

export default function CommunitySection() {
  return (
    <section id="community" className="py-16 bg-[#141416]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#e8e0d4] mb-8" style={{ letterSpacing: "0.02em" }}>실시간 커뮤니티 활동</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0e0e10] rounded-2xl border border-[#2a2624] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#252220] bg-[#141416]">
              <h3 className="text-base font-bold text-[#e8e0d4]">최근 리뷰</h3>
              <button className="text-xs font-semibold text-[#d4af37] hover:text-[#b8952f] transition-colors">더보기 →</button>
            </div>
            <div className="divide-y divide-[#252220]">
              {recentReviews.map((review, i) => (
                <div key={review.id} className="p-4 flex gap-3">
                  <div className={`${reviewAvatarColors[i % reviewAvatarColors.length]} rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center text-[#0e0e10] text-sm font-bold`}>{review.author[0]}</div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#e8e0d4]">{review.author}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded text-[#d4af37]" style={{ backgroundColor: "rgba(212,175,55,0.12)" }}>{review.city}</span>
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="text-xs text-[#8a8279] leading-relaxed line-clamp-2">{review.content}</p>
                    <div className="flex items-center gap-3 pt-1">
                      <span className="text-xs text-[#8a8279]">+{review.likes}</span>
                      <span className="text-xs text-[#8a8279]">{review.comments}답</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0e0e10] rounded-2xl border border-[#2a2624] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#252220] bg-[#141416]">
              <h3 className="text-base font-bold text-[#e8e0d4]">인기 질문</h3>
              <button className="text-xs font-semibold text-[#8a8279] hover:text-[#d4af37] transition-colors">Q&A 게시판 →</button>
            </div>
            <div className="divide-y divide-[#252220]">
              {popularQnAs.map((qna, i) => (
                <div key={qna.id} className="p-4 flex gap-3 items-start">
                  <span className="text-[#d4af37] text-xs font-bold w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: "rgba(212,175,55,0.12)" }}>{i + 1}</span>
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <p className="text-sm font-semibold text-[#e8e0d4] leading-snug">Q. {qna.question}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#8a8279]">{qna.answers}답</span>
                      <span className="text-xs text-[#8a8279]">{qna.views}조회</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
