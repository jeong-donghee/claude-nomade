"use client";

import { useCallback, useEffect, useState } from "react";
import { cities } from "@/data/cities";

const LIKED_IDS_KEY = "nomade-liked-city-ids";
const LIKE_COUNTS_KEY = "nomade-city-like-counts";

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function buildInitialCounts(): Record<number, number> {
  const counts: Record<number, number> = {};
  for (const city of cities) {
    counts[city.id] = city.likes;
  }
  return counts;
}

export function useCityLikes() {
  const [likedCityIds, setLikedCityIds] = useState<number[]>([]);
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({});
  const [hydrated, setHydrated] = useState(false);

  // 클라이언트에서만 localStorage 복원
  useEffect(() => {
    const storedIds = loadFromStorage<number[]>(LIKED_IDS_KEY, []);
    const storedCounts = loadFromStorage<Record<number, number>>(
      LIKE_COUNTS_KEY,
      buildInitialCounts(),
    );
    setLikedCityIds(storedIds);
    setLikeCounts(storedCounts);
    setHydrated(true);
  }, []);

  // 상태 변경 시 localStorage 동기화
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(LIKED_IDS_KEY, JSON.stringify(likedCityIds));
  }, [likedCityIds, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(LIKE_COUNTS_KEY, JSON.stringify(likeCounts));
  }, [likeCounts, hydrated]);

  const isLiked = useCallback(
    (cityId: number) => likedCityIds.includes(cityId),
    [likedCityIds],
  );

  const getLikeCount = useCallback(
    (cityId: number) => likeCounts[cityId] ?? 0,
    [likeCounts],
  );

  const toggleLike = useCallback(
    (cityId: number) => {
      setLikedCityIds((prev) => {
        if (prev.includes(cityId)) {
          return prev.filter((id) => id !== cityId);
        }
        return [...prev, cityId];
      });
      setLikeCounts((prev) => {
        const current = prev[cityId] ?? 0;
        const liked = likedCityIds.includes(cityId);
        return { ...prev, [cityId]: liked ? current - 1 : current + 1 };
      });
    },
    [likedCityIds],
  );

  return { likedCityIds, likeCounts, toggleLike, isLiked, getLikeCount };
}
