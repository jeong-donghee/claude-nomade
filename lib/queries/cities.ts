import { createClient } from "@/utils/supabase/server";
import { CityCard, CityDetail } from "@/data/cities";

/**
 * DB snake_case를 프론트엔드 camelCase로 변환하는 유틸리티
 */
function mapDbCityToFrontend(dbCity: any): CityCard & CityDetail {
  return {
    id: dbCity.id,
    rank: dbCity.rank,
    name: dbCity.name,
    nameEn: dbCity.name_en,
    category: dbCity.category,
    rating: dbCity.rating,
    recommendRate: dbCity.recommend_rate,
    monthlyCost: dbCity.monthly_cost,
    internetSpeed: dbCity.internet_speed,
    monthlyRent: dbCity.monthly_rent,
    cafeDensity: dbCity.cafe_density,
    likes: 0, // 초기값, getCitiesWithLikes에서 실제 값으로 교체
    bgColor: dbCity.bg_color,
    description: dbCity.description,
    pros: dbCity.pros as string[],
    cons: dbCity.cons as string[],
    recommendedPlaces: dbCity.recommended_places as {
      name: string;
      location: string;
      feature: string;
    }[],
    climate: dbCity.climate,
    transport: dbCity.transport,
  };
}

/**
 * 전체 도시 목록 조회 (기본 정보만)
 */
export async function getCities(): Promise<CityCard[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cities")
    .select("*")
    .order("rank", { ascending: true });

  if (error) {
    console.error("Error fetching cities:", error);
    throw new Error("Failed to fetch cities");
  }

  return data.map((city) => mapDbCityToFrontend(city));
}

/**
 * 단일 도시 조회 (기본 + 상세 정보)
 */
export async function getCityById(
  id: number
): Promise<(CityCard & CityDetail) | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cities")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // Not found
      return null;
    }
    console.error("Error fetching city by id:", error);
    throw new Error("Failed to fetch city");
  }

  return mapDbCityToFrontend(data);
}

/**
 * 특정 도시의 좋아요 수 조회
 */
export async function getCityLikesCount(cityId: number): Promise<number> {
  const supabase = await createClient();

  const { count, error } = await supabase
    .from("city_likes")
    .select("*", { count: "exact", head: true })
    .eq("city_id", cityId);

  if (error) {
    console.error("Error fetching city likes count:", error);
    return 0;
  }

  return count ?? 0;
}

/**
 * 도시 목록 + 각 도시별 좋아요 수 조회
 */
export async function getCitiesWithLikes(): Promise<CityCard[]> {
  const supabase = await createClient();

  // cities 테이블과 city_likes 테이블을 JOIN하여 좋아요 수 집계
  const { data, error } = await supabase
    .from("cities")
    .select(
      `
      *,
      city_likes(count)
    `
    )
    .order("rank", { ascending: true });

  if (error) {
    console.error("Error fetching cities with likes:", error);
    throw new Error("Failed to fetch cities with likes");
  }

  return data.map((city: any) => {
    const mapped = mapDbCityToFrontend(city);
    // city_likes의 count를 likes 필드에 반영
    const likesCount =
      Array.isArray(city.city_likes) && city.city_likes.length > 0
        ? city.city_likes.length
        : 0;
    return {
      ...mapped,
      likes: likesCount,
    };
  });
}
