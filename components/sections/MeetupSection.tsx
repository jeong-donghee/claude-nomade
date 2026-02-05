import { meetups } from "@/data/cities";

const avatarColors = [
  "bg-[#00f0ff]", "bg-[#ff2d95]", "bg-[#7c3aed]", "bg-[#d946ef]", "bg-[#00c8d4]",
];

export default function MeetupSection() {
  return (
    <section id="meetups" className="py-16 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 + 요약 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <div>
            <h2 className="text-3xl font-bold text-white">
              다가오는 노마드 밋업
            </h2>
            <p className="text-sm text-[#8888aa] mt-1">
              이번 달: <span className="font-semibold text-[#e8e8f0]">12개</span>
              &nbsp;|&nbsp;
              총 참가자: <span className="font-semibold text-[#e8e8f0]">145명</span>
            </p>
          </div>
          <button className="text-sm font-semibold text-[#00f0ff] hover:text-[#00d4e0] transition-colors">
            모두보기 →
          </button>
        </div>

        {/* 밋업 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {meetups.map((meetup) => (
            <div
              key={meetup.id}
              className="bg-[#0f0f1a] rounded-2xl border border-[#2a2a3e] hover:border-[#00f0ff]/40 transition-all duration-200 overflow-hidden flex flex-col"
            >
              {/* 상태 배지 바 */}
              <div className="px-4 py-2 bg-[#141425]">
                <span className={`inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-full
                  ${meetup.status === "확정" ? "bg-[#00f0ff]/15 text-[#00f0ff]" : "bg-[#ff2d95]/15 text-[#ff2d95]"}`}
                >
                  {meetup.status === "확정" ? "확정" : "대기중"}
                </span>
              </div>

              {/* 본문 */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                {/* 날짜 */}
                <div className="flex items-center gap-2">
                  <div className="bg-[#1a1a2e] border border-[#00f0ff]/40 text-[#00f0ff] rounded-lg w-12 h-12 flex flex-col items-center justify-center" style={{ boxShadow: "0 0 8px rgba(0,240,255,0.2)" }}>
                    <span className="text-xs leading-none opacity-70">{meetup.date.split("/")[1]}월</span>
                    <span className="text-lg font-bold leading-none">{meetup.date.split("/")[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#e8e8f0]">{meetup.date}({meetup.dayOfWeek})</p>
                    <p className="text-xs text-[#8888aa]">{meetup.location}</p>
                  </div>
                </div>

                {/* 밋업 제목 */}
                <h3 className="text-base font-bold text-white">{meetup.title}</h3>

                {/* 참가 인원 + 아바타 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(meetup.avatarCount)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-7 h-7 rounded-full ${avatarColors[i % avatarColors.length]} border-2 border-[#0a0a0f] -ml-2 first:ml-0 flex items-center justify-center`}
                      >
                        <span className="text-white text-xs font-bold">{String.fromCharCode(65 + i)}</span>
                      </div>
                    ))}
                    {meetup.currentAttendees > meetup.avatarCount && (
                      <span className="ml-1 text-xs text-[#8888aa]">...</span>
                    )}
                  </div>
                  <span className="text-xs text-[#8888aa]">
                    {meetup.currentAttendees}/{meetup.maxAttendees}명
                  </span>
                </div>

                {/* 참가 버튼 */}
                <div className="mt-auto pt-2">
                  <button className="w-full text-sm font-semibold text-[#00f0ff] border border-[#00f0ff]/40 rounded-lg py-2
                                     hover:bg-[#00f0ff] hover:text-[#0a0a0f] transition-colors duration-200">
                    참가하기 →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 밋업 만들기 CTA */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-1 text-sm font-semibold text-[#ff2d95]
                             border border-[#ff2d95]/40 rounded-xl px-5 py-2.5
                             hover:bg-[#ff2d95] hover:text-white transition-colors duration-200"
                  style={{ boxShadow: "0 0 12px rgba(255,45,149,0.15)" }}>
            내 도시에서 밋업 만들기 +
          </button>
        </div>
      </div>
    </section>
  );
}
