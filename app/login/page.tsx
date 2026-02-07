"use client";

import { useActionState } from "react";
import { login } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import NavbarClient from "@/components/layout/NavbarClient";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, { error: "" });

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2]">
      <NavbarClient user={null} />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          {/* 브랜드 & 타이틀 */}
          <div className="text-center mb-8">
            <a href="/" className="inline-block">
              <span className="text-xl font-bold text-[#2d5016]">한국 노마드 시티</span>
            </a>
            <h1 className="text-2xl font-bold text-[#3a3228] mt-5">다시 환영합니다</h1>
            <p className="text-sm text-[#7a7068] mt-1.5">계정에 로그인하여 이어보세요</p>
          </div>

          {/* 폼 카드 */}
          <div className="bg-white rounded-2xl border border-[#ddd5c8] shadow-sm p-6 sm:p-8">
            <form action={formAction} className="flex flex-col gap-5">
              {/* 이메일 */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email" className="text-sm font-semibold text-[#3a3228]">이메일</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="예: nomad@example.com"
                  className="h-11 rounded-xl bg-white border-[#ddd5c8] text-[#3a3228] placeholder-[#7a7068] focus:ring-[#2d5016] focus:border-[#2d5016]"
                  required
                />
              </div>

              {/* 비밀번호 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-semibold text-[#3a3228]">비밀번호</Label>
                  <a href="#" className="text-xs text-[#2d5016] hover:text-[#3d6b22] transition-colors">비밀번호 잊으셨나요?</a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호 입력"
                  className="h-11 rounded-xl bg-white border-[#ddd5c8] text-[#3a3228] placeholder-[#7a7068] focus:ring-[#2d5016] focus:border-[#2d5016]"
                  required
                />
              </div>

              {/* 에러 메시지 */}
              {state.error && <p className="text-sm text-[#c0392b] -mt-2">{state.error}</p>}

              {/* 로그인 버튼 */}
              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full h-11 bg-[#2d5016] hover:bg-[#3d6b22] text-white font-semibold rounded-xl text-sm mt-1"
              >
                {isPending ? "로그인 중..." : "로그인"}
              </Button>
            </form>

            {/* 구분선 */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-[#ddd5c8]" />
              <span className="text-xs text-[#7a7068]">또는</span>
              <div className="flex-1 h-px bg-[#ddd5c8]" />
            </div>

            {/* 소셜 로그인 (placeholder) */}
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                className="w-full h-11 border border-[#ddd5c8] rounded-xl text-sm font-medium text-[#3a3228] bg-white hover:bg-[#f0ebe3] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none">
                  <path d="M16.273 12.845 7.376 0H0l7.085 11.691H15.9L16.273 12.845z" fill="#FFE812" />
                  <path d="M0 21.518l5.333-10.957L0 0h7.376l12.897 21.518z" fill="#FFE812" />
                </svg>
                카카오로 로그인
              </button>
              <button
                type="button"
                className="w-full h-11 border border-[#ddd5c8] rounded-xl text-sm font-medium text-[#3a3228] bg-white hover:bg-[#f0ebe3] transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                구글로 로그인
              </button>
            </div>
          </div>

          {/* 회원가입 유도 */}
          <p className="text-center text-sm text-[#7a7068] mt-6">
            계정이 없으신가요?{" "}
            <a href="/register" className="text-[#2d5016] font-semibold hover:text-[#3d6b22] transition-colors">
              회원가입
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
