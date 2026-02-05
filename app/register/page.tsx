"use client";

import { useState, useActionState } from "react";
import { signup } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import NavbarClient from "@/components/layout/NavbarClient";

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(signup, { error: "" });
  const [clientError, setClientError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // 클라이언트 검증: 실패 시 preventDefault로 Server Action 차단
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setClientError("");
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;

    if (password.length < 8) {
      e.preventDefault();
      setClientError("비밀번호는 8자리 이상이어야 합니다");
      return;
    }
    if (password !== confirmPassword) {
      e.preventDefault();
      setClientError("비밀번호가 일치하지 않습니다");
      return;
    }
    if (!agreeTerms) {
      e.preventDefault();
      setClientError("개인정보 수집 및 이용에 동의해주세요");
      return;
    }
    // 검증 통과 시 preventDefault 미호출 → Server Action 실행
  };

  // Server Action 에러와 클라이언트 검증 에러를 통합 표시
  const error = state.error || clientError;

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
            <h1 className="text-2xl font-bold text-[#3a3228] mt-5">새로운 여정을 시작하세요</h1>
            <p className="text-sm text-[#7a7068] mt-1.5">지금 가입하면 프리미엄 1개월 무료</p>
          </div>

          {/* 폼 카드 */}
          <div className="bg-white rounded-2xl border border-[#ddd5c8] shadow-sm p-6 sm:p-8">
            <form action={formAction} onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* 이름 */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name" className="text-sm font-semibold text-[#3a3228]">이름</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="예: 김노마드"
                  className="h-11 rounded-xl bg-white border-[#ddd5c8] text-[#3a3228] placeholder-[#7a7068] focus:ring-[#2d5016] focus:border-[#2d5016]"
                  required
                />
              </div>

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
                <Label htmlFor="password" className="text-sm font-semibold text-[#3a3228]">비밀번호</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="8자리 이상 입력"
                  className="h-11 rounded-xl bg-white border-[#ddd5c8] text-[#3a3228] placeholder-[#7a7068] focus:ring-[#2d5016] focus:border-[#2d5016]"
                  required
                />
                <p className="text-xs text-[#7a7068]">영문, 숫자, 특수문자를 포함하여 8자리 이상</p>
              </div>

              {/* 비밀번호 확인 — 클라이언트 검증용만, FormData에 전송하지 않음 */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="confirmPassword" className="text-sm font-semibold text-[#3a3228]">비밀번호 확인</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="비밀번호 다시 입력"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-11 rounded-xl bg-white border-[#ddd5c8] text-[#3a3228] placeholder-[#7a7068] focus:ring-[#2d5016] focus:border-[#2d5016]"
                  required
                />
              </div>

              {/* 약관 동의 */}
              <div className="flex items-start gap-2.5 pt-1">
                <Checkbox
                  id="agreeTerms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  className="mt-0.5"
                />
                <Label htmlFor="agreeTerms" className="text-sm text-[#5c5248] cursor-pointer leading-snug">
                  <a href="#" className="text-[#2d5016] font-semibold hover:underline">개인정보 수집 및 이용 약관</a>에 동의합니다
                </Label>
              </div>

              {/* 에러 메시지 */}
              {error && <p className="text-sm text-[#c0392b] -mt-2">{error}</p>}

              {/* 회원가입 버튼 */}
              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full h-11 bg-[#2d5016] hover:bg-[#3d6b22] text-white font-semibold rounded-xl text-sm mt-1"
              >
                {isPending ? "회원가입 중..." : "회원가입"}
              </Button>
            </form>
          </div>

          {/* 로그인 유도 */}
          <p className="text-center text-sm text-[#7a7068] mt-6">
            이미 회원이신가요?{" "}
            <a href="/login" className="text-[#2d5016] font-semibold hover:text-[#3d6b22] transition-colors">
              로그인
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
