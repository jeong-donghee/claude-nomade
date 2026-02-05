"use client";

import { useState } from "react";
import { cityCategories, citySortOptions } from "@/data/cities";

export default function CityFilterClient() {
  const [activeCategory, setActiveCategory] = useState<string>("전체");
  const [sortBy, setSortBy] = useState<string>("popular");

  return (
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
  );
}
