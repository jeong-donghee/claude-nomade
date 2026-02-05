const cards = [
  { icon: "🌿", title: "데이터 기반", description: "200개 이상의 객관적 지표로 도시를 비교하세요", points: ["200+ 비교 지표", "실제 리뷰 데이터", "정확한 비교 분석"], bg: "bg-[#eef5eb]", border: "border-[#c8dfc0]", iconBg: "bg-[#d4e8cc]" },
  { icon: "🌾", title: "커뮤니티 중심", description: "같은 라이프스타일의 사람들과 교류하세요", points: ["월 24회 밋업", "활발한 Q&A", "지역 커뮤니티"], bg: "bg-[#f5f0e8]", border: "border-[#ddd5c8]", iconBg: "bg-[#ede4d4]" },
  { icon: "🍃", title: "실시간 업데이트", description: "항상 최신 정보를 확인할 수 있습니다", points: ["최신 정보 갱신", "정확한 인터넷 속도", "실시간 날씨 정보"], bg: "bg-[#eef5eb]", border: "border-[#c8dfc0]", iconBg: "bg-[#d4e8cc]" },
];

export default function ValuePropositionSection() {
  return (
    <section className="py-16 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3a3228] mb-3">한국 노마드 시티가 특별한 이유</h2>
          <p className="text-[#7a7068] text-lg">다른 곳과는 달라요</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className={`${card.bg} border ${card.border} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md cursor-default`}>
              <div className="flex items-start gap-3">
                <div className={`${card.iconBg} rounded-xl w-12 h-12 flex items-center justify-center text-2xl`}>{card.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#3a3228]">{card.title}</h3>
                  <p className="text-sm text-[#7a7068] mt-0.5">{card.description}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-1.5 mt-1">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-[#5c5248]">
                    <span className="text-[#4a7c3f] font-bold">•</span>{point}
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
