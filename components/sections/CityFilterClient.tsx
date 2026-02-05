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
              ${activeCategory === category ? "text-[#0e0e10]" : "bg-[#141416] text-[#8a8279] border border-[#2a2624] hover:border-[#d4af37] hover:text-[#d4af37]"}`}
            style={activeCategory === category ? { backgroundColor: "#d4af37" } : {}}>
            {category}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#8a8279]">정렬:</span>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
          className="text-sm font-medium text-[#e8e0d4] border border-[#2a2624] rounded-lg px-3 py-1.5 bg-[#141416] focus:outline-none focus:ring-1 focus:ring-[#d4af37] focus:border-transparent cursor-pointer">
          {citySortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </div>
    </div>
  );
}
