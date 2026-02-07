export interface CityCard {
  id: number;
  rank: number;
  name: string;
  nameEn: string;
  category: "대도시" | "해변" | "산" | "IT허브";
  rating: number; // /5.0
  recommendRate: number; // %
  monthlyCost: number; // 월 생활비 (원)
  internetSpeed: number; // Mbps
  monthlyRent: number; // 원룸 월세 (원)
  cafeDensity: number; // 500m 내 카페 수
  likes: number; // 좋아요 수
  bgColor: string; // placeholder 배경색
}


// ─── 도시 데이터 (TOP 10) ────────────────────────────────
export const cities: CityCard[] = [
  {
    id: 1, rank: 1, name: "서울", nameEn: "Seoul",
    category: "대도시", rating: 4.8, recommendRate: 96,
    monthlyCost: 2200000, internetSpeed: 950, monthlyRent: 800000,
    cafeDensity: 243, likes: 1240, bgColor: "from-emerald-700 to-emerald-900",
  },
  {
    id: 2, rank: 2, name: "부산", nameEn: "Busan",
    category: "해변", rating: 4.6, recommendRate: 91,
    monthlyCost: 1500000, internetSpeed: 880, monthlyRent: 500000,
    cafeDensity: 187, likes: 980, bgColor: "from-blue-600 to-blue-800",
  },
  {
    id: 3, rank: 3, name: "제주", nameEn: "Jeju",
    category: "해변", rating: 4.5, recommendRate: 88,
    monthlyCost: 1600000, internetSpeed: 750, monthlyRent: 550000,
    cafeDensity: 142, likes: 870, bgColor: "from-cyan-600 to-cyan-800",
  },
  {
    id: 4, rank: 4, name: "강릉", nameEn: "Gangneung",
    category: "해변", rating: 4.3, recommendRate: 82,
    monthlyCost: 1100000, internetSpeed: 700, monthlyRent: 380000,
    cafeDensity: 95, likes: 650, bgColor: "from-sky-500 to-sky-700",
  },
  {
    id: 5, rank: 5, name: "대전", nameEn: "Daejeon",
    category: "IT허브", rating: 4.2, recommendRate: 79,
    monthlyCost: 1200000, internetSpeed: 920, monthlyRent: 420000,
    cafeDensity: 108, likes: 540, bgColor: "from-violet-600 to-violet-800",
  },
  {
    id: 6, rank: 6, name: "속초", nameEn: "Sokcho",
    category: "산", rating: 4.0, recommendRate: 76,
    monthlyCost: 1100000, internetSpeed: 700, monthlyRent: 350000,
    cafeDensity: 62, likes: 430, bgColor: "from-green-600 to-green-800",
  },
  {
    id: 7, rank: 7, name: "대구", nameEn: "Daegu",
    category: "대도시", rating: 4.1, recommendRate: 74,
    monthlyCost: 1300000, internetSpeed: 850, monthlyRent: 460000,
    cafeDensity: 134, likes: 380, bgColor: "from-orange-500 to-orange-700",
  },
  {
    id: 8, rank: 8, name: "인천", nameEn: "Incheon",
    category: "해변", rating: 3.9, recommendRate: 71,
    monthlyCost: 1400000, internetSpeed: 900, monthlyRent: 520000,
    cafeDensity: 156, likes: 310, bgColor: "from-teal-500 to-teal-700",
  },
  {
    id: 9, rank: 9, name: "평주", nameEn: "Pyeongju",
    category: "산", rating: 3.8, recommendRate: 68,
    monthlyCost: 900000, internetSpeed: 600, monthlyRent: 280000,
    cafeDensity: 45, likes: 210, bgColor: "from-amber-600 to-amber-800",
  },
  {
    id: 10, rank: 10, name: "여수", nameEn: "Yeosu",
    category: "해변", rating: 4.0, recommendRate: 73,
    monthlyCost: 1050000, internetSpeed: 680, monthlyRent: 340000,
    cafeDensity: 78, likes: 290, bgColor: "from-rose-500 to-rose-700",
  },
];

// ─── 도시 상세 데이터 ────────────────────────────────────
export interface CityDetail {
  id: number;
  description: string;
  pros: string[];
  cons: string[];
  recommendedPlaces: { name: string; location: string; feature: string }[];
  climate: string;
  transport: string;
}

export const cityDetails: Record<number, CityDetail> = {
  1: {
    id: 1,
    description: "대한민국의 수도이자 최대 도시. 코워킹 스페이스와 카페가 밀집해 있어 디지털 노마드에게 최적의 환경을 제공합니다. 빠른 인터넷과 편리한 대중교통이 강점입니다.",
    pros: ["초고속 인터넷 인프라", "풍부한 코워킹 스페이스", "편리한 대중교통"],
    cons: ["높은 생활비와 월세", "혼잡한 출퇴근 시간", "공기질 변동"],
    recommendedPlaces: [
      { name: "위워크 강남", location: "강남구 테헤란로", feature: "24시간 운영, 회의실 완비" },
      { name: "투썸플레이스 삼성점", location: "강남구 삼성동", feature: "넓은 좌석, 콘센트 충분" },
      { name: "스파크플러스 종로", location: "종로구 종로3가", feature: "합리적 가격, 자유석 제공" },
    ],
    climate: "사계절이 뚜렷하며 여름 고온다습, 겨울 건조하고 추움. 봄·가을이 작업하기 가장 쾌적합니다.",
    transport: "지하철 9개 노선, 버스 노선 다수. 택시·따릉이 이용 편리. KTX로 전국 연결.",
  },
  2: {
    id: 2,
    description: "해운대, 광안리 등 해변을 끼고 있는 대한민국 제2의 도시. 서울 대비 저렴한 생활비로 바다를 보며 작업할 수 있어 인기가 높습니다.",
    pros: ["서울 대비 저렴한 생활비", "해변 접근성", "활발한 노마드 커뮤니티"],
    cons: ["서울 대비 코워킹 스페이스 부족", "여름 태풍 영향", "일부 지역 인터넷 불안정"],
    recommendedPlaces: [
      { name: "탐앤탐스 해운대점", location: "해운대구 해운대해변로", feature: "오션뷰, 넓은 좌석" },
      { name: "코워크 부산", location: "부산진구 서면", feature: "월 이용권 합리적, 프린터 제공" },
      { name: "모모스커피 전포점", location: "부산진구 전포동", feature: "스페셜티 커피, 조용한 분위기" },
    ],
    climate: "해양성 기후로 서울보다 온화. 여름 장마·태풍 주의. 겨울에도 비교적 따뜻합니다.",
    transport: "지하철 4개 노선, 시내버스 촘촘. KTX 2시간 30분 서울 연결. 김해공항 접근 편리.",
  },
  3: {
    id: 3,
    description: "아름다운 자연환경과 독특한 문화가 공존하는 섬. 카페 문화가 발달해 있으며 영감을 주는 환경에서 작업하기 좋습니다.",
    pros: ["아름다운 자연환경", "발달한 카페 문화", "독특한 라이프스타일"],
    cons: ["본토 대비 높은 물가", "태풍 시즌 영향", "대중교통 불편"],
    recommendedPlaces: [
      { name: "카페 델문도", location: "제주시 애월읍", feature: "바다 전망, 넓은 테라스" },
      { name: "제주창조경제혁신센터", location: "제주시 연동", feature: "무료 코워킹, 네트워킹 행사" },
      { name: "올레커피", location: "서귀포시 중문", feature: "한라산 뷰, 조용한 환경" },
    ],
    climate: "온난 습윤 기후. 바람이 강하고 겨울에도 영하로 잘 내려가지 않음. 여름 장마와 태풍 주의.",
    transport: "렌터카 필수. 시내버스 운행하나 배차 간격 김. 제주공항에서 서울까지 비행기 1시간.",
  },
  4: {
    id: 4,
    description: "동해안의 대표 관광 도시. 커피 거리로 유명하며 바다와 산을 동시에 즐길 수 있는 노마드 핫플레이스입니다.",
    pros: ["커피 도시답게 카페 풍부", "바다·산 동시 접근", "저렴한 생활비"],
    cons: ["겨울 강추위", "코워킹 스페이스 부족", "대중교통 제한적"],
    recommendedPlaces: [
      { name: "보헤미안 로스터즈", location: "강릉시 안목해변", feature: "강릉 커피 거리 명소" },
      { name: "테라로사 본점", location: "강릉시 구정면", feature: "넓은 공간, 로스터리 카페" },
    ],
    climate: "겨울 한파와 폭설 잦음. 여름은 시원한 편. 봄·가을 쾌적하여 작업 최적기.",
    transport: "KTX 강릉역에서 서울까지 2시간. 시내버스 운행. 자차 있으면 편리.",
  },
  5: {
    id: 5,
    description: "대덕연구단지가 위치한 과학기술 도시. IT 인프라가 우수하고 생활비가 저렴하여 개발자 노마드에게 인기 있습니다.",
    pros: ["초고속 인터넷 인프라", "저렴한 생활비", "IT·연구 커뮤니티"],
    cons: ["관광·문화 인프라 부족", "여름 무더위", "노마드 커뮤니티 소규모"],
    recommendedPlaces: [
      { name: "성심당 대전역점", location: "대전시 동구 대전역", feature: "대전 명물 빵집, 넓은 카페" },
      { name: "탄방동 카페거리", location: "대전시 서구 탄방동", feature: "다양한 카페 밀집" },
    ],
    climate: "내륙 기후로 여름 더위와 겨울 추위가 뚜렷. 봄·가을이 짧지만 쾌적.",
    transport: "KTX 대전역에서 서울까지 50분. 시내버스·지하철 1호선 운행.",
  },
  6: {
    id: 6,
    description: "설악산과 동해를 품은 강원도의 해변 도시. 자연 속에서 여유롭게 작업하고 싶은 노마드에게 떠오르는 핫플입니다.",
    pros: ["설악산·동해 접근성", "조용하고 여유로운 환경", "저렴한 생활비"],
    cons: ["인터넷 속도 불안정", "겨울 강추위·폭설", "카페·코워킹 선택지 적음"],
    recommendedPlaces: [
      { name: "칠성조선소 카페", location: "속초시 청호동", feature: "바다 전망, 레트로 분위기" },
      { name: "속초 관광수산시장 카페", location: "속초시 중앙동", feature: "시장 구경 후 작업 가능" },
    ],
    climate: "겨울 폭설과 강추위. 여름은 서늘한 편. 봄·가을 설악산 단풍·벚꽃 시즌 최고.",
    transport: "서울에서 고속버스 2시간 30분. 시내버스 운행하나 배차 간격 있음.",
  },
  7: {
    id: 7,
    description: "대한민국 제3의 도시. 서울·부산 대비 저렴한 생활비와 빠른 인터넷을 갖추고 있으며 먹거리가 풍부합니다.",
    pros: ["저렴한 생활비", "빠른 인터넷", "풍부한 먹거리"],
    cons: ["여름 폭염", "관광 인프라 부족", "노마드 커뮤니티 소규모"],
    recommendedPlaces: [
      { name: "동성로 카페거리", location: "대구시 중구 동성로", feature: "다양한 카페 밀집 지역" },
      { name: "팔공산 자락 카페", location: "대구시 동구 팔공산로", feature: "자연 속 조용한 작업" },
    ],
    climate: "분지 지형으로 여름 폭염 심함. 겨울은 비교적 온화. 봄·가을이 가장 쾌적.",
    transport: "지하철 3개 노선, 시내버스. KTX 동대구역에서 서울까지 1시간 40분.",
  },
  8: {
    id: 8,
    description: "서울과 인접한 해안 도시. 인천국제공항이 위치해 해외 이동이 편리하며 송도 신도시의 현대적 인프라가 강점입니다.",
    pros: ["공항 접근성 최고", "송도 현대적 인프라", "서울 접근 편리"],
    cons: ["해안 지역 바람 강함", "구도심 노후화", "독자적 문화 약함"],
    recommendedPlaces: [
      { name: "G타워 카페", location: "인천시 연수구 송도", feature: "송도 전경 조망" },
      { name: "스타벅스 송도 센트럴파크점", location: "인천시 연수구", feature: "공원뷰, 넓은 좌석" },
    ],
    climate: "해양성 기후로 바람이 강함. 여름 습하고 겨울 추움. 봄·가을 작업 최적.",
    transport: "지하철 1·2호선, 서울 지하철 연결. 인천공항 철도 직통. 버스 노선 다수.",
  },
  9: {
    id: 9,
    description: "자연 속 조용한 생활을 원하는 노마드에게 최적의 도시. 가장 저렴한 생활비와 스트레스 없는 환경이 매력입니다.",
    pros: ["최저 수준 생활비", "자연 환경 최고", "스트레스 없는 조용한 환경"],
    cons: ["인터넷 속도 낮음", "편의시설 부족", "카페·코워킹 매우 적음"],
    recommendedPlaces: [
      { name: "산골 카페", location: "평주시 중앙로", feature: "자연 속 힐링 카페" },
      { name: "평주 도서관", location: "평주시 문화로", feature: "무료 Wi-Fi, 조용한 열람실" },
    ],
    climate: "산간 지역으로 여름 시원하고 겨울 매우 추움. 사계절 자연 풍경이 아름다움.",
    transport: "시외버스 위주. 자차 필수. 서울에서 버스 3시간 소요.",
  },
  10: {
    id: 10,
    description: "남해안의 아름다운 항구 도시. 밤바다와 해상케이블카로 유명하며 영감을 주는 풍경 속에서 작업할 수 있습니다.",
    pros: ["아름다운 해안 풍경", "저렴한 생활비", "해산물 등 먹거리 풍부"],
    cons: ["대중교통 불편", "겨울 해풍 강함", "코워킹 스페이스 부족"],
    recommendedPlaces: [
      { name: "여수 해양공원 카페", location: "여수시 돌산읍", feature: "바다 전망 카페" },
      { name: "이순신광장 카페거리", location: "여수시 중앙동", feature: "야경 명소, 다양한 카페" },
    ],
    climate: "남해안 해양성 기후로 비교적 온화. 여름 장마 있으나 겨울도 따뜻한 편.",
    transport: "KTX 여수엑스포역에서 서울까지 2시간 40분. 시내버스 운행. 자차 권장.",
  },
};

// ─── 카테고리 필터 옵션 ─────────────────────────────────
export const cityCategories = ["전체", "대도시", "해변", "산", "IT허브"] as const;
export type CityCategory = typeof cityCategories[number];

// ─── 정렬 옵션 ───────────────────────────────────────────
export const citySortOptions = [
  { value: "popular", label: "인기순" },
  { value: "rating", label: "평점순" },
  { value: "cost", label: "생활비 낮은순" },
  { value: "likes", label: "좋아요순" },
  { value: "latest", label: "최신순" },
] as const;

