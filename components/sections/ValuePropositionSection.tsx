const cards = [
  {
    icon: "◆",
    title: "데이터 기반",
    description: "200개 이상의 객관적 지표로 도시를 비교하세요",
    points: ["200+ 비교 지표", "실제 리뷰 데이터", "정확한 비교 분석"],
    glowColor: "rgba(0,240,255,0.15)",
    borderColor: "rgba(0,240,255,0.3)",
    iconColor: "#00f0ff",
  },
  {
    icon: "◆",
    title: "커뮤니티 중심",
    description: "같은 라이프스타일의 사람들과 교류하세요",
    points: ["월 24회 밋업", "활발한 Q&A", "지역 커뮤니티"],
    glowColor: "rgba(255,45,149,0.15)",
    borderColor: "rgba(255,45,149,0.3)",
    iconColor: "#ff2d95",
  },
  {
    icon: "◆",
    title: "실시간 업데이트",
    description: "항상 최신 정보를 확인할 수 있습니다",
    points: ["최신 정보 갱신", "정확한 인터넷 속도", "실시간 날씨 정보"],
    glowColor: "rgba(124,58,237,0.15)",
    borderColor: "rgba(124,58,237,0.3)",
    iconColor: "#7c3aed",
  },
];

export default function ValuePropositionSection() {
  return (
    <section className="py-16 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            한국 노마드 시티가 특별한 이유
          </h2>
          <p className="text-[#8888aa] text-lg">
            다른 곳과는 달라요
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#0f0f1a] rounded-2xl p-6 flex flex-col gap-4
                          transition-all duration-300 ease-out
                          hover:-translate-y-2 cursor-default"
              style={{ border: `1px solid ${card.borderColor}`, boxShadow: `0 0 20px ${card.glowColor}` }}
            >
              {/* 아이콘 + 제목 */}
              <div className="flex items-start gap-3">
                <div className="rounded-xl w-12 h-12 flex items-center justify-center text-xl" style={{ color: card.iconColor, backgroundColor: `${card.glowColor}` }}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  <p className="text-sm text-[#8888aa] mt-0.5">{card.description}</p>
                </div>
              </div>

              {/* 포인트 리스트 */}
              <ul className="flex flex-col gap-1.5 mt-1">
                {card.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-[#8888aa]">
                    <span className="font-bold" style={{ color: card.iconColor }}>›</span>
                    {point}
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
