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
  bgColor: string; // placeholder 배경색
}

export interface TrendingCity {
  id: number;
  name: string;
  nameEn: string;
  description: string;
  rankChange: number; // 양수 = 상승
  rating: number;
  monthlyCost: number;
  internetSpeed: number;
  newVisitors: number;
  bgColor: string;
}

export interface Meetup {
  id: number;
  date: string;
  dayOfWeek: string;
  location: string;
  title: string;
  status: "확정" | "대기중";
  currentAttendees: number;
  maxAttendees: number;
  avatarCount: number;
}

export interface Review {
  id: number;
  author: string;
  city: string;
  content: string;
  rating: number;
  likes: number;
  comments: number;
}

export interface QnA {
  id: number;
  question: string;
  answers: number;
  views: number;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

// ─── 도시 데이터 (TOP 10) ────────────────────────────────
export const cities: CityCard[] = [
  {
    id: 1, rank: 1, name: "서울", nameEn: "Seoul",
    category: "대도시", rating: 4.8, recommendRate: 96,
    monthlyCost: 2200000, internetSpeed: 950, monthlyRent: 800000,
    cafeDensity: 243, bgColor: "from-emerald-700 to-emerald-900",
  },
  {
    id: 2, rank: 2, name: "부산", nameEn: "Busan",
    category: "해변", rating: 4.6, recommendRate: 91,
    monthlyCost: 1500000, internetSpeed: 880, monthlyRent: 500000,
    cafeDensity: 187, bgColor: "from-blue-600 to-blue-800",
  },
  {
    id: 3, rank: 3, name: "제주", nameEn: "Jeju",
    category: "해변", rating: 4.5, recommendRate: 88,
    monthlyCost: 1600000, internetSpeed: 750, monthlyRent: 550000,
    cafeDensity: 142, bgColor: "from-cyan-600 to-cyan-800",
  },
  {
    id: 4, rank: 4, name: "강릉", nameEn: "Gangneung",
    category: "해변", rating: 4.3, recommendRate: 82,
    monthlyCost: 1100000, internetSpeed: 700, monthlyRent: 380000,
    cafeDensity: 95, bgColor: "from-sky-500 to-sky-700",
  },
  {
    id: 5, rank: 5, name: "대전", nameEn: "Daejeon",
    category: "IT허브", rating: 4.2, recommendRate: 79,
    monthlyCost: 1200000, internetSpeed: 920, monthlyRent: 420000,
    cafeDensity: 108, bgColor: "from-violet-600 to-violet-800",
  },
  {
    id: 6, rank: 6, name: "속초", nameEn: "Sokcho",
    category: "산", rating: 4.0, recommendRate: 76,
    monthlyCost: 1100000, internetSpeed: 700, monthlyRent: 350000,
    cafeDensity: 62, bgColor: "from-green-600 to-green-800",
  },
  {
    id: 7, rank: 7, name: "대구", nameEn: "Daegu",
    category: "대도시", rating: 4.1, recommendRate: 74,
    monthlyCost: 1300000, internetSpeed: 850, monthlyRent: 460000,
    cafeDensity: 134, bgColor: "from-orange-500 to-orange-700",
  },
  {
    id: 8, rank: 8, name: "인천", nameEn: "Incheon",
    category: "해변", rating: 3.9, recommendRate: 71,
    monthlyCost: 1400000, internetSpeed: 900, monthlyRent: 520000,
    cafeDensity: 156, bgColor: "from-teal-500 to-teal-700",
  },
  {
    id: 9, rank: 9, name: "평주", nameEn: "Pyeongju",
    category: "산", rating: 3.8, recommendRate: 68,
    monthlyCost: 900000, internetSpeed: 600, monthlyRent: 280000,
    cafeDensity: 45, bgColor: "from-amber-600 to-amber-800",
  },
  {
    id: 10, rank: 10, name: "여수", nameEn: "Yeosu",
    category: "해변", rating: 4.0, recommendRate: 73,
    monthlyCost: 1050000, internetSpeed: 680, monthlyRent: 340000,
    cafeDensity: 78, bgColor: "from-rose-500 to-rose-700",
  },
];

// ─── 카테고리 필터 옵션 ─────────────────────────────────
export const cityCategories = ["전체", "대도시", "해변", "산", "IT허브"] as const;
export type CityCategory = typeof cityCategories[number];

// ─── 정렬 옵션 ───────────────────────────────────────────
export const citySortOptions = [
  { value: "popular", label: "인기순" },
  { value: "rating", label: "평점순" },
  { value: "cost", label: "생활비 낮은순" },
  { value: "latest", label: "최신순" },
] as const;

// ─── 트렌딩 도시 ─────────────────────────────────────────
export const trendingCities: TrendingCity[] = [
  {
    id: 1, name: "속초", nameEn: "Sokcho",
    description: "강원도 해변 도시로 떠오르는 신흥 노마드 핫플",
    rankChange: 7, rating: 4.0, monthlyCost: 1100000,
    internetSpeed: 700, newVisitors: 45,
    bgColor: "from-green-500 to-emerald-600",
  },
  {
    id: 2, name: "여수", nameEn: "Yeosu",
    description: "남해안의 아름다운 항구 도시, 카페와 공작물의 도시",
    rankChange: 5, rating: 4.0, monthlyCost: 1050000,
    internetSpeed: 680, newVisitors: 32,
    bgColor: "from-rose-500 to-pink-600",
  },
  {
    id: 3, name: "평주", nameEn: "Pyeongju",
    description: "자연 속 조용한 생활을 원하는 노마드의 최선택",
    rankChange: 3, rating: 3.8, monthlyCost: 900000,
    internetSpeed: 600, newVisitors: 21,
    bgColor: "from-amber-500 to-orange-600",
  },
];

// ─── 밋업 데이터 ──────────────────────────────────────────
export const meetups: Meetup[] = [
  {
    id: 1, date: "2/15", dayOfWeek: "토",
    location: "서울 강남", title: "코워킹 모임",
    status: "확정", currentAttendees: 12, maxAttendees: 20, avatarCount: 5,
  },
  {
    id: 2, date: "2/20", dayOfWeek: "목",
    location: "부산 해운대", title: "네트워킹",
    status: "확정", currentAttendees: 8, maxAttendees: 15, avatarCount: 4,
  },
  {
    id: 3, date: "2/25", dayOfWeek: "화",
    location: "제주", title: "카페 모임",
    status: "대기중", currentAttendees: 2, maxAttendees: 10, avatarCount: 2,
  },
];

// ─── 커뮤니티 리뷰 ───────────────────────────────────────
export const recentReviews: Review[] = [
  {
    id: 1, author: "노마드호스트", city: "부산",
    content: "부산 최고! 카페도 많고 날씨도 좋아요. 강남보다훨씬 여유로운 분위기입니다.",
    rating: 5, likes: 5, comments: 2,
  },
  {
    id: 2, author: "디자이너Kim", city: "제주",
    content: "제주 카페에서 작업하면 창밖으로 바다가 보여요. 집중력이 오히려 올라간다고.",
    rating: 4, likes: 8, comments: 3,
  },
  {
    id: 3, author: "개발자박씨", city: "강릉",
    content: "강릉은 인터넷 속도가 걱정됐는데 생각보다 빠르고, 평일이면 한가해요.",
    rating: 4, likes: 6, comments: 1,
  },
];

// ─── 인기 질문 ────────────────────────────────────────────
export const popularQnAs: QnA[] = [
  { id: 1, question: "부산에서 월세 50만원 이하로 원룸 잡을 수 있나요?", answers: 5, views: 45 },
  { id: 2, question: "제주 겨울나기 — 난방비가 얼마나 드나요?", answers: 3, views: 38 },
  { id: 3, question: "강릉과 속초 중 카페 더 많은 곳은?", answers: 7, views: 52 },
];

// ─── 통계 ─────────────────────────────────────────────────
export const stats: Stat[] = [
  { label: "활성 회원", value: "872", icon: "👥" },
  { label: "총 리뷰", value: "2,451", icon: "📝" },
  { label: "월간 밋업", value: "145", icon: "🤝" },
  { label: "등록 도시", value: "40", icon: "🏙️" },
  { label: "Q&A 답변", value: "89", icon: "💬" },
  { label: "평균 평점", value: "4.6/5", icon: "⭐" },
];

// ─── 언론사 배지 ──────────────────────────────────────────
export const mediaBadges = [
  { name: "조선일보", hoverColor: "hover:text-red-700" },
  { name: "중앙일보", hoverColor: "hover:text-blue-700" },
  { name: "한국경제", hoverColor: "hover:text-green-700" },
  { name: "매일경제", hoverColor: "hover:text-purple-700" },
  { name: "테크크런치", hoverColor: "hover:text-orange-600" },
  { name: "스타트업투데이", hoverColor: "hover:text-teal-600" },
];
