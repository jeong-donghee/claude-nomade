// Data removed for MVP — component unused
const recentReviews: { id: number; author: string; city: string; content: string; rating: number; likes: number; comments: number }[] = [];
const popularQnAs: { id: number; question: string; answers: number; views: number }[] = [];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? "text-[#8b6f47]" : "text-[#ddd5c8]"}`}>★</span>
      ))}
    </div>
  );
}

const reviewAvatarColors = ["bg-[#6b8f5e]", "bg-[#8b6f47]", "bg-[#4a7c3f]"];

export default function CommunitySection() {
  return (
    <section id="community" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#3a3228] mb-8">실시간 커뮤니티 활동</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#faf7f2] rounded-2xl border border-[#ddd5c8] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#ddd5c8] bg-white">
              <h3 className="text-base font-bold text-[#3a3228]">최근 리뷰</h3>
              <button className="text-xs font-semibold text-[#2d5016] hover:text-[#4a7c3f] transition-colors">더보기 →</button>
            </div>
            <div className="divide-y divide-[#eee8df]">
              {recentReviews.map((review, i) => (
                <div key={review.id} className="p-4 flex gap-3">
                  <div className={`${reviewAvatarColors[i]} rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center text-white text-sm font-bold`}>{review.author[0]}</div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[#3a3228]">{review.author}</span>
                      <span className="text-xs bg-[#eef5eb] text-[#2d5016] font-medium px-1.5 py-0.5 rounded">{review.city}</span>
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="text-xs text-[#7a7068] leading-relaxed line-clamp-2">{review.content}</p>
                    <div className="flex items-center gap-3 pt-1">
                      <span className="text-xs text-[#7a7068]">+{review.likes}</span>
                      <span className="text-xs text-[#7a7068]">{review.comments}답</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#faf7f2] rounded-2xl border border-[#ddd5c8] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#ddd5c8] bg-white">
              <h3 className="text-base font-bold text-[#3a3228]">인기 질문</h3>
              <button className="text-xs font-semibold text-[#8b6f47] hover:text-[#a07d55] transition-colors">Q&A 게시판 →</button>
            </div>
            <div className="divide-y divide-[#eee8df]">
              {popularQnAs.map((qna, i) => (
                <div key={qna.id} className="p-4 flex gap-3 items-start">
                  <span className="bg-[#f5f0e8] text-[#8b6f47] text-xs font-bold w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center">{i + 1}</span>
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <p className="text-sm font-semibold text-[#3a3228] leading-snug">Q. {qna.question}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#7a7068]">{qna.answers}답</span>
                      <span className="text-xs text-[#7a7068]">{qna.views}조회</span>
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
