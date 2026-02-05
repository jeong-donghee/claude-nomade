const cards = [
  { icon: "◆", title: "데이터 기반", description: "200개 이상의 객관적 지표로 도시를 비교하세요", points: ["200+ 비교 지표", "실제 리뷰 데이터", "정확한 비교 분석"], borderColor: "#d4af37", iconBg: "rgba(212,175,55,0.12)" },
  { icon: "◆", title: "커뮤니티 중심", description: "같은 라이프스타일의 사람들과 교류하세요", points: ["월 24회 밋업", "활발한 Q&A", "지역 커뮤니티"], borderColor: "#8a8279", iconBg: "rgba(138,130,121,0.12)" },
  { icon: "◆", title: "실시간 업데이트", description: "항상 최신 정보를 확인할 수 있습니다", points: ["최신 정보 갱신", "정확한 인터넷 속도", "실시간 날씨 정보"], borderColor: "#d4af37", iconBg: "rgba(212,175,55,0.12)" },
];

export default function ValuePropositionSection() {
  return (
    <section className="py-16 bg-[#0e0e10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#e8e0d4] mb-3" style={{ letterSpacing: "0.02em" }}>한국 노마드 시티가 특별한 이유</h2>
          <p className="text-[#8a8279] text-lg">다른 곳과는 달라요</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-[#141416] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 ease-out hover:-translate-y-1 cursor-default" style={{ border: `1px solid ${card.borderColor}`, boxShadow: `0 2px 20px rgba(0,0,0,0.3)` }}>
              <div className="flex items-start gap-3">
                <div className="rounded-xl w-12 h-12 flex items-center justify-center text-lg text-[#d4af37]" style={{ backgroundColor: card.iconBg }}>{card.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#e8e0d4]">{card.title}</h3>
                  <p className="text-sm text-[#8a8279] mt-0.5">{card.description}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-1.5 mt-1">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-[#b8b0a4]">
                    <span className="text-[#d4af37] font-bold">•</span>{point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
