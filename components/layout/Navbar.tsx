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
    <nav className="sticky top-0 z-50 w-full bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#ddd5c8] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#2d5016]">한국 노마드 시티</span>
          </a>

          {/* 데스크톱 네비 링크 */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-[#7a7068] hover:text-[#2d5016] transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>

          {/* 데스크톱 우측 액션 */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-[#7a7068] hover:text-[#2d5016] transition-colors">검색</button>
            <Button variant="ghost" size="sm" className="text-[#7a7068]">로그인</Button>
            <Button size="sm" className="bg-[#2d5016] hover:bg-[#3d6b22] text-white">회원가입</Button>
          </div>

          {/* 모바일 햄버거 */}
          <button className="md:hidden p-2 rounded-md text-[#7a7068] hover:bg-[#f0ebe3]" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 토글">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#ddd5c8] bg-[#faf7f2] px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-[#7a7068] hover:text-[#2d5016] py-1" onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <div className="pt-2 border-t border-[#ddd5c8] flex flex-col gap-2">
            <button className="text-sm text-[#7a7068] text-left py-1">검색</button>
            <Button variant="ghost" size="sm" className="justify-start text-[#7a7068]">로그인</Button>
            <Button size="sm" className="bg-[#2d5016] hover:bg-[#3d6b22] text-white">회원가입</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
