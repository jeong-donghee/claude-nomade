"use client";

import { useMemo, useState } from "react";
import { cities, cityCategories, citySortOptions, CityCard as CityCardType } from "@/data/cities";
import CityCardComponent from "@/components/sections/CityCard";

function searchCities(allCities: CityCardType[], query: string): CityCardType[] {
  if (!query) return allCities;
  const q = query.toLowerCase();
  return allCities.filter((city) => city.name.includes(q) || city.nameEn.toLowerCase().includes(q));
}

function filterCities(allCities: CityCardType[], category: string): CityCardType[] {
  if (category === "전체") return allCities;
  return allCities.filter((city) => city.category === category);
}

function sortCities(cityList: CityCardType[], sortBy: string): CityCardType[] {
  const sorted = [...cityList];
  switch (sortBy) {
    case "popular":
      return sorted.sort((a, b) => a.rank - b.rank);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "cost":
      return sorted.sort((a, b) => a.monthlyCost - b.monthlyCost);
    case "latest":
    default:
      return sorted;
  }
}

export default function CityFilterClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("전체");
  const [sortBy, setSortBy] = useState<string>("popular");

  const displayCities = useMemo(() => {
    const searched = searchCities(cities, searchQuery);
    const filtered = filterCities(searched, activeCategory);
    return sortCities(filtered, sortBy);
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <>
      <div className="relative mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7a7068] text-sm">&#x1F50D;</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="도시명 검색 (한글/영문)"
          className="w-full pl-9 pr-9 py-2.5 text-sm border border-[#ddd5c8] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#2d5016] focus:border-transparent placeholder:text-[#a0896e]"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a7068] hover:text-[#3a3228] text-sm"
          >
            ✕
          </button>
        )}
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          {cityCategories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200
                ${activeCategory === category ? "bg-[#2d5016] text-white" : "bg-white text-[#7a7068] border border-[#ddd5c8] hover:border-[#6b8f5e] hover:text-[#2d5016]"}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#7a7068]">정렬:</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
            className="text-sm font-medium text-[#5c5248] border border-[#ddd5c8] rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#2d5016] focus:border-transparent cursor-pointer">
            {citySortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </div>
      </div>

      {displayCities.length === 0 ? (
        <div className="mt-10 text-center py-12">
          <p className="text-[#7a7068] text-sm">{searchQuery ? "검색 결과가 없습니다" : "조건에 맞는 도시가 없습니다"}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {displayCities.map((city) => (
            <CityCardComponent key={city.id} city={city} />
          ))}
        </div>
      )}
    </>
  );
}
