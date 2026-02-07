"use client";

import { useCityLikes } from "@/hooks/useCityLikes";

export default function CityLikeButton({ cityId }: { cityId: number }) {
  const { toggleLike, isLiked, getLikeCount } = useCityLikes();
  const liked = isLiked(cityId);

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
