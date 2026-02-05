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
    <nav className="sticky top-0 z-50 w-full bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#2a2a3e]" style={{ boxShadow: "0 1px 12px rgba(0,240,255,0.12)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#00f0ff]" style={{ textShadow: "0 0 10px rgba(0,240,255,0.6)" }}>
              한국 노마드 시티
            </span>
          </a>

          {/* 데스크톱 네비 링크 */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#8888aa] hover:text-[#00f0ff] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 데스크톱 우측 액션 */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-[#8888aa] hover:text-[#00f0ff] transition-colors">
              검색
            </button>
            <Button variant="ghost" size="sm" className="text-[#8888aa] hover:text-[#00f0ff]">
              로그인
            </Button>
            <Button size="sm" className="bg-[#00f0ff] hover:bg-[#00d4e0] text-[#0a0a0f] font-semibold" style={{ boxShadow: "0 0 12px rgba(0,240,255,0.4)" }}>
              회원가입
            </Button>
          </div>

          {/* 모바일 햄버거 메뉴 토글 */}
          <button
            className="md:hidden p-2 rounded-md text-[#8888aa] hover:text-[#00f0ff]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 토글"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#2a2a3e] bg-[#0a0a0f] px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#8888aa] hover:text-[#00f0ff] py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#2a2a3e] flex flex-col gap-2">
            <button className="text-sm text-[#8888aa] text-left py-1">검색</button>
            <Button variant="ghost" size="sm" className="justify-start text-[#8888aa] hover:text-[#00f0ff]">로그인</Button>
            <Button size="sm" className="bg-[#00f0ff] hover:bg-[#00d4e0] text-[#0a0a0f] font-semibold" style={{ boxShadow: "0 0 12px rgba(0,240,255,0.4)" }}>회원가입</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
