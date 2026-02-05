import { meetups } from "@/data/cities";

const avatarColors = ["bg-[#d4af37]", "bg-[#8a8279]", "bg-[#b87333]", "bg-[#c0c0c0]", "bg-[#8a7520]"];

export default function MeetupSection() {
  return (
    <section id="meetups" className="py-16 bg-[#0e0e10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <div>
            <h2 className="text-3xl font-bold text-[#e8e0d4]" style={{ letterSpacing: "0.02em" }}>다가오는 밋업</h2>
            <p className="text-sm text-[#8a8279] mt-1">이번 달: <span className="font-semibold text-[#e8e0d4]">12개</span>&nbsp;|&nbsp;총 참가자: <span className="font-semibold text-[#e8e0d4]">145명</span></p>
          </div>
          <button className="text-sm font-semibold text-[#d4af37] hover:text-[#b8952f] transition-colors">모두보기 →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {meetups.map((meetup) => (
            <div key={meetup.id} className="bg-[#141416] rounded-2xl border border-[#2a2624] hover:border-[#d4af37] transition-all duration-200 overflow-hidden flex flex-col" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.35)" }}>
              <div className="px-4 py-2 bg-[#1a1a1e]">
                <span className={`inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-full ${meetup.status === "확정" ? "text-[#d4af37]" : "text-[#8a8279]"}`} style={{ backgroundColor: meetup.status === "확정" ? "rgba(212,175,55,0.15)" : "rgba(138,130,121,0.12)" }}>
                  {meetup.status === "확정" ? "확정" : "대기중"}
                </span>
              </div>
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <div className="text-[#e8e0d4] rounded-lg w-12 h-12 flex flex-col items-center justify-center border border-[#d4af37]" style={{ backgroundColor: "#141416", boxShadow: "0 0 8px rgba(212,175,55,0.15)" }}>
                    <span className="text-xs leading-none opacity-70">{meetup.date.split("/")[1]}월</span>
                    <span className="text-lg font-bold leading-none text-[#d4af37]">{meetup.date.split("/")[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#e8e0d4]">{meetup.date}({meetup.dayOfWeek})</p>
                    <p className="text-xs text-[#8a8279]">{meetup.location}</p>
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#e8e0d4]">{meetup.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(meetup.avatarCount)].map((_, i) => (
                      <div key={i} className={`w-7 h-7 rounded-full ${avatarColors[i % avatarColors.length]} border-2 border-[#0e0e10] -ml-2 first:ml-0 flex items-center justify-center`}>
                        <span className="text-[#0e0e10] text-xs font-bold">{String.fromCharCode(65 + i)}</span>
                      </div>
                    ))}
                    {meetup.currentAttendees > meetup.avatarCount && <span className="ml-1 text-xs text-[#8a8279]">...</span>}
                  </div>
                  <span className="text-xs text-[#8a8279]">{meetup.currentAttendees}/{meetup.maxAttendees}명</span>
                </div>
                <div className="mt-auto pt-2">
                  <button className="w-full text-sm font-medium text-[#d4af37] border border-[#d4af37] rounded-lg py-2 hover:bg-[#d4af37] hover:text-[#0e0e10] transition-colors duration-200">참가하기</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-1 text-sm font-medium text-[#d4af37] border border-[#d4af37] rounded-xl px-5 py-2.5 hover:bg-[#d4af37] hover:text-[#0e0e10] transition-colors duration-200">밋업 만들기 +</button>
        </div>
      </div>
    </section>
  );
}
