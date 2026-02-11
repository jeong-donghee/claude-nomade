"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CityCard } from "@/data/cities";
import CityCardComponent from "@/components/sections/CityCard";
import { useCityLikes } from "@/hooks/useCityLikes";

interface PopularCitiesSectionProps {
  cities: CityCard[];
}

export default function PopularCitiesSection({ cities }: PopularCitiesSectionProps) {
  const { toggleLike, isLiked, getLikeCount, setLikeCounts } = useCityLikes();

  // 서버에서 전달받은 좋아요 수를 초기화
  useEffect(() => {
    const initialCounts: Record<number, number> = {};
    cities.forEach((city) => {
      initialCounts[city.id] = city.likes;
    });
    setLikeCounts(initialCounts);
  }, [cities, setLikeCounts]);

  return (
    <section id="cities" className="py-16 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
          <h2 className="text-3xl font-bold text-[#3a3228]">인기 도시 TOP 10</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {cities.map((city) => (
            <CityCardComponent key={city.id} city={city} likeCount={getLikeCount(city.id)} isLiked={isLiked(city.id)} onToggleLike={toggleLike} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/cities" className="inline-flex items-center gap-2 text-[#2d5016] font-semibold text-base border border-[#2d5016] rounded-xl px-6 py-3 hover:bg-[#2d5016] hover:text-white transition-colors duration-200">
            전체 도시 보기 (10개)
          </Link>
        </div>
      </div>
    </section>
  );
}
