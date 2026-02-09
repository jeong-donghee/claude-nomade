"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { getUserLikedCities, toggleCityLike } from "@/lib/queries/city-likes";
import type { User } from "@supabase/supabase-js";

/**
 * 좋아요 기능 훅 (Supabase DB 기반)
 * - 로그인 사용자: DB에서 좋아요 상태 관리
 * - 비로그인 사용자: 로그인 안내 표시
 * - Optimistic UI 적용: 즉시 UI 반영 후 백그라운드 DB 반영
 */
export function useCityLikes() {
  const [user, setUser] = useState<User | null>(null);
  const [likedCityIds, setLikedCityIds] = useState<number[]>([]);
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({});
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(true);

  // 1. 인증 상태 확인 및 좋아요 목록 로드
  useEffect(() => {
    const supabase = createClient();

    // 현재 사용자 확인
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);

      // 로그인 상태면 DB에서 좋아요한 도시 목록 로드
      if (user) {
        getUserLikedCities(user.id).then((cityIds) => {
          setLikedCityIds(cityIds);
          setHydrated(true);
        });
      } else {
        setHydrated(true);
      }
    });

    // 인증 상태 변경 구독
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const newUser = session?.user ?? null;
      setUser(newUser);

      if (newUser) {
        // 로그인 시 DB에서 좋아요 목록 다시 로드
        getUserLikedCities(newUser.id).then((cityIds) => {
          setLikedCityIds(cityIds);
        });
      } else {
        // 로그아웃 시 초기화
        setLikedCityIds([]);
        setLikeCounts({});
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // 2. 좋아요 여부 확인
  const isLiked = useCallback(
    (cityId: number) => likedCityIds.includes(cityId),
    [likedCityIds]
  );

  // 3. 좋아요 수 반환 (서버에서 전달받은 카운트 또는 로컬 상태)
  const getLikeCount = useCallback(
    (cityId: number) => likeCounts[cityId] ?? 0,
    [likeCounts]
  );

  // 4. 좋아요 토글 (Optimistic UI + DB 반영)
  const toggleLike = useCallback(
    async (cityId: number) => {
      // 비로그인 사용자 처리
      if (!user) {
        alert("로그인이 필요한 기능입니다.");
        // 로그인 페이지로 리다이렉트 (선택)
        // window.location.href = "/login";
        return;
      }

      const wasLiked = likedCityIds.includes(cityId);
      const currentCount = likeCounts[cityId] ?? 0;

      // Optimistic UI: 즉시 UI 업데이트
      setLikedCityIds((prev) =>
        wasLiked ? prev.filter((id) => id !== cityId) : [...prev, cityId]
      );
      setLikeCounts((prev) => ({
        ...prev,
        [cityId]: wasLiked ? currentCount - 1 : currentCount + 1,
      }));

      // 백그라운드에서 DB 반영
      try {
        const result = await toggleCityLike(user.id, cityId);

        if (!result.success) {
          // 실패 시 롤백
          setLikedCityIds((prev) =>
            wasLiked ? [...prev, cityId] : prev.filter((id) => id !== cityId)
          );
          setLikeCounts((prev) => ({
            ...prev,
            [cityId]: currentCount,
          }));

          console.error("좋아요 처리 실패:", result.error);
          alert("좋아요 처리에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        // 네트워크 오류 등 예외 처리 시 롤백
        setLikedCityIds((prev) =>
          wasLiked ? [...prev, cityId] : prev.filter((id) => id !== cityId)
        );
        setLikeCounts((prev) => ({
          ...prev,
          [cityId]: currentCount,
        }));

        console.error("좋아요 처리 오류:", error);
        alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
      }
    },
    [user, likedCityIds, likeCounts]
  );

  return {
    user,
    likedCityIds,
    likeCounts,
    setLikeCounts, // 서버에서 초기 카운트를 설정하기 위해 노출
    toggleLike,
    isLiked,
    getLikeCount,
    hydrated,
    loading,
  };
}
