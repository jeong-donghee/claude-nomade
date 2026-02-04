import { recentReviews, popularQnAs } from "@/data/cities";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? "text-amber-400" : "text-neutral-200"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

const reviewAvatarColors = ["bg-emerald-400", "bg-blue-500", "bg-violet-500"];

export default function CommunitySection() {
  return (
    <section id="community" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <h2 className="text-3xl font-bold text-neutral-800 mb-8">
          💬 실시간 커뮤니티 활동
        </h2>

        {/* 2열 레이아웃 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ─── 좌측: 최근 리뷰 ─── */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden">
            {/* 리뷰 헤더 */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200 bg-white">
              <h3 className="text-base font-bold text-neutral-800">📝 최근 리뷰</h3>
              <button className="text-xs font-semibold text-brand-green hover:text-brand-green/70 transition-colors">
                더보기 →
              </button>
            </div>

            {/* 리뷰 리스트 */}
            <div className="divide-y divide-neutral-100">
              {recentReviews.map((review, i) => (
                <div key={review.id} className="p-4 flex gap-3">
                  {/* 아바타 */}
                  <div className={`${reviewAvatarColors[i]} rounded-full w-9 h-9 flex-shrink-0 flex items-center justify-center text-white text-sm font-bold`}>
                    {review.author[0]}
                  </div>
                  {/* 내용 */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-neutral-700">{review.author}</span>
                      <span className="text-xs bg-brand-green/10 text-brand-green font-medium px-1.5 py-0.5 rounded">{review.city}</span>
                    </div>
                    <StarRating rating={review.rating} />
                    <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">{review.content}</p>
                    {/* 좋음 / 답변 */}
                    <div className="flex items-center gap-3 pt-1">
                      <span className="text-xs text-neutral-400">👍 {review.likes}</span>
                      <span className="text-xs text-neutral-400">💬 {review.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── 우측: 인기 질문 ─── */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden">
            {/* Q&A 헤더 */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200 bg-white">
              <h3 className="text-base font-bold text-neutral-800">❓ 인기 질문</h3>
              <button className="text-xs font-semibold text-brand-blue hover:text-brand-blue/70 transition-colors">
                Q&A 게시판 →
              </button>
            </div>

            {/* Q&A 리스트 */}
            <div className="divide-y divide-neutral-100">
              {popularQnAs.map((qna, i) => (
                <div key={qna.id} className="p-4 flex gap-3 items-start">
                  {/* 번호 */}
                  <span className="bg-brand-blue/10 text-brand-blue text-xs font-bold w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center">
                    {i + 1}
                  </span>
                  {/* 질문 내용 */}
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <p className="text-sm font-semibold text-neutral-700 leading-snug">
                      Q. {qna.question}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-neutral-400">💬 {qna.answers}답</span>
                      <span className="text-xs text-neutral-400">👁️ {qna.views}조회</span>
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
