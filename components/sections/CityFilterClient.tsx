"use client";

import { useState } from "react";
import { cityCategories, citySortOptions } from "@/data/cities";

export default function CityFilterClient() {
  const [activeCategory, setActiveCategory] = useState<string>("전체");
  const [sortBy, setSortBy] = useState<string>("popular");

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      {/* 카테고리 필터 탭 */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {cityCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200
              ${activeCategory === category
                ? "bg-[#00f0ff] text-[#0a0a0f] font-semibold"
                : "bg-[#0f0f1a] text-[#8888aa] border border-[#2a2a3e] hover:border-[#00f0ff] hover:text-[#00f0ff]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 정렬 드롭다운 */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#8888aa]">정렬:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm font-medium text-[#e8e8f0] border border-[#2a2a3e] rounded-lg px-3 py-1.5 bg-[#0f0f1a]
                     focus:outline-none focus:ring-2 focus:ring-[#00f0ff] focus:border-transparent cursor-pointer"
        >
          {citySortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
