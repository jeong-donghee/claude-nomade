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
                ? "bg-brand-green text-white shadow-sm"
                : "bg-white text-neutral-600 border border-neutral-200 hover:border-brand-green hover:text-brand-green"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 정렬 드롭다운 */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-neutral-400">정렬:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm font-medium text-neutral-600 border border-neutral-200 rounded-lg px-3 py-1.5 bg-white
                     focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent cursor-pointer"
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
