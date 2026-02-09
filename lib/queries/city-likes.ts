import { createClient } from "@/utils/supabase/client";

/**
 * 사용자가 좋아요한 도시 ID 목록 조회
 */
export async function getUserLikedCities(
  userId: string
): Promise<number[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("city_likes")
    .select("city_id")
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetching user liked cities:", error);
    return [];
  }

  return data.map((item) => item.city_id);
}

/**
 * 좋아요 토글 (INSERT 또는 DELETE)
 * @returns { success: boolean, action: 'added' | 'removed' }
 */
export async function toggleCityLike(
  userId: string,
  cityId: number
): Promise<{ success: boolean; action: "added" | "removed"; error?: string }> {
  const supabase = createClient();

  // 1. 기존 좋아요 존재 여부 확인
  const { data: existing, error: checkError } = await supabase
    .from("city_likes")
    .select("id")
    .eq("user_id", userId)
    .eq("city_id", cityId)
    .maybeSingle();

  if (checkError) {
    console.error("Error checking city like:", checkError);
    return {
      success: false,
      action: "added",
      error: checkError.message,
    };
  }

  // 2. 좋아요가 이미 존재하면 DELETE, 없으면 INSERT
  if (existing) {
    const { error: deleteError } = await supabase
      .from("city_likes")
      .delete()
      .eq("user_id", userId)
      .eq("city_id", cityId);

    if (deleteError) {
      console.error("Error deleting city like:", deleteError);
      return {
        success: false,
        action: "removed",
        error: deleteError.message,
      };
    }

    return { success: true, action: "removed" };
  } else {
    const { error: insertError } = await supabase
      .from("city_likes")
      .insert({ user_id: userId, city_id: cityId });

    if (insertError) {
      console.error("Error inserting city like:", insertError);
      return {
        success: false,
        action: "added",
        error: insertError.message,
      };
    }

    return { success: true, action: "added" };
  }
}

/**
 * 특정 도시의 좋아요 수 조회 (클라이언트용)
 */
export async function getCityLikesCount(cityId: number): Promise<number> {
  const supabase = createClient();

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
