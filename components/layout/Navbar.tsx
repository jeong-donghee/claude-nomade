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
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-neutral-900 tracking-tight">
              한국 노마드 시티
            </span>
          </a>

          {/* 데스크톱 네비 링크 */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 데스크톱 우측 액션 */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors">
              검색
            </button>
            <Button variant="ghost" size="sm" className="text-neutral-500">
              로그인
            </Button>
            <Button size="sm" className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-md">
              회원가입
            </Button>
          </div>

          {/* 모바일 햄버거 메뉴 토글 */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-600 hover:bg-neutral-100"
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
        <div className="md:hidden border-t border-neutral-100 bg-white px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
            <button className="text-sm text-neutral-400 text-left py-1">검색</button>
            <Button variant="ghost" size="sm" className="justify-start text-neutral-500">로그인</Button>
            <Button size="sm" className="bg-neutral-900 hover:bg-neutral-800 text-white">회원가입</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
