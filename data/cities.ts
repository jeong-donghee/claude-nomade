// ============================================
// TypeScript 타입 정의
// ============================================

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

export interface CityDetail {
  id: number;
  description: string;
  pros: string[];
  cons: string[];
  recommendedPlaces: { name: string; location: string; feature: string }[];
  climate: string;
  transport: string;
}

// ============================================
// 상수 (카테고리 필터, 정렬 옵션)
// ============================================

export const cityCategories = ["전체", "대도시", "해변", "산", "IT허브"] as const;
export type CityCategory = typeof cityCategories[number];

export const citySortOptions = [
  { value: "popular", label: "인기순" },
  { value: "rating", label: "평점순" },
  { value: "cost", label: "생활비 낮은순" },
  { value: "likes", label: "좋아요순" },
  { value: "latest", label: "최신순" },
] as const;
