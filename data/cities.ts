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

