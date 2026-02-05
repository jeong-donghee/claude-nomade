import { meetups } from "@/data/cities";

const avatarColors = ["bg-[#6b8f5e]", "bg-[#8b6f47]", "bg-[#4a7c3f]", "bg-[#a0896e]", "bg-[#5a9048]"];

export default function MeetupSection() {
  return (
    <section id="meetups" className="py-16 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <div>
            <h2 className="text-3xl font-bold text-[#3a3228]">다가오는 밋업</h2>
            <p className="text-sm text-[#7a7068] mt-1">이번 달: <span className="font-semibold text-[#3a3228]">12개</span>&nbsp;|&nbsp;총 참가자: <span className="font-semibold text-[#3a3228]">145명</span></p>
          </div>
          <button className="text-sm font-semibold text-[#2d5016] hover:text-[#4a7c3f] transition-colors">모두보기 →</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {meetups.map((meetup) => (
            <div key={meetup.id} className="bg-white rounded-2xl border border-[#ddd5c8] hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col">
              <div className="px-4 py-2 bg-[#f5f0e8]">
                <span className={`inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-full ${meetup.status === "확정" ? "bg-[#d4e8cc] text-[#2d5016]" : "bg-[#ede4d4] text-[#8b6f47]"}`}>
                  {meetup.status === "확정" ? "확정" : "대기중"}
                </span>
              </div>
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <div className="bg-[#2d5016] text-white rounded-lg w-12 h-12 flex flex-col items-center justify-center">
                    <span className="text-xs leading-none opacity-80">{meetup.date.split("/")[1]}월</span>
                    <span className="text-lg font-bold leading-none">{meetup.date.split("/")[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#3a3228]">{meetup.date}({meetup.dayOfWeek})</p>
                    <p className="text-xs text-[#7a7068]">{meetup.location}</p>
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#3a3228]">{meetup.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(meetup.avatarCount)].map((_, i) => (
                      <div key={i} className={`w-7 h-7 rounded-full ${avatarColors[i % avatarColors.length]} border-2 border-white -ml-2 first:ml-0 flex items-center justify-center`}>
                        <span className="text-white text-xs font-bold">{String.fromCharCode(65 + i)}</span>
                      </div>
                    ))}
                    {meetup.currentAttendees > meetup.avatarCount && <span className="ml-1 text-xs text-[#7a7068]">...</span>}
                  </div>
                  <span className="text-xs text-[#7a7068]">{meetup.currentAttendees}/{meetup.maxAttendees}명</span>
                </div>
                <div className="mt-auto pt-2">
                  <button className="w-full text-sm font-medium text-[#2d5016] border border-[#2d5016] rounded-lg py-2 hover:bg-[#2d5016] hover:text-white transition-colors duration-200">참가하기</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-1 text-sm font-medium text-[#8b6f47] border border-[#8b6f47] rounded-xl px-5 py-2.5 hover:bg-[#8b6f47] hover:text-white transition-colors duration-200">밋업 만들기 +</button>
        </div>
      </div>
    </section>
  );
}
