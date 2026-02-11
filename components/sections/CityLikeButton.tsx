"use client";

import { useEffect } from "react";
import { useCityLikes } from "@/hooks/useCityLikes";

interface CityLikeButtonProps {
  cityId: number;
  initialLikeCount?: number;
}

export default function CityLikeButton({ cityId, initialLikeCount }: CityLikeButtonProps) {
  const { toggleLike, isLiked, getLikeCount, setLikeCounts } = useCityLikes();
  const liked = isLiked(cityId);

  // 초기 좋아요 수 설정
  useEffect(() => {
    if (initialLikeCount !== undefined) {
      setLikeCounts((prev) => ({
        ...prev,
        [cityId]: initialLikeCount,
      }));
    }
  }, [cityId, initialLikeCount, setLikeCounts]);

  return (
    <button
      onClick={() => toggleLike(cityId)}
      className="inline-flex items-center gap-1.5 border border-[#ddd5c8] rounded-full px-3 py-1.5 hover:bg-[#faf7f2] transition-colors duration-200"
    >
      <span className={`text-base ${liked ? "text-red-500" : "text-[#7a7068]"}`}>
        {liked ? "♥" : "♡"}
      </span>
      <span className="text-sm font-medium text-[#5c5248]">{getLikeCount(cityId)}</span>
    </button>
  );
}
