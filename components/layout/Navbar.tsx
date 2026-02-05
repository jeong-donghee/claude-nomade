"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "홈", href: "/" },
  { label: "도시찾기", href: "#cities" },
  { label: "밋업", href: "#meetups" },
  { label: "커뮤니티", href: "#community" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0e0e10]/95 backdrop-blur-md border-b border-[#2a2624]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#d4af37]" style={{ letterSpacing: "0.08em" }}>한국 노마드 시티</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-[#8a8279] hover:text-[#d4af37] transition-colors duration-200">{link.label}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-[#8a8279] hover:text-[#d4af37] transition-colors">검색</button>
            <Button variant="ghost" size="sm" className="text-[#8a8279] hover:text-[#d4af37]">로그인</Button>
            <Button size="sm" className="bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0e0e10] transition-colors" style={{ letterSpacing: "0.04em" }}>회원가입</Button>
          </div>
          <button className="md:hidden p-2 rounded-md text-[#8a8279] hover:text-[#d4af37]" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 토글">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-[#2a2624] bg-[#0e0e10] px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-[#8a8279] hover:text-[#d4af37] py-1" onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <div className="pt-2 border-t border-[#2a2624] flex flex-col gap-2">
            <button className="text-sm text-[#8a8279] text-left py-1">검색</button>
            <Button variant="ghost" size="sm" className="justify-start text-[#8a8279] hover:text-[#d4af37]">로그인</Button>
            <Button size="sm" className="bg-transparent border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0e0e10]">회원가입</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
