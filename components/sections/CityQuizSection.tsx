"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const budgetOptions = [
  { value: "under100", label: "100만원 이하" },
  { value: "100-150", label: "100~150만원" },
  { value: "150-200", label: "150~200만원" },
  { value: "over200", label: "200만원 이상" },
];

const atmosphereOptions = [
  { value: "vibrant", label: "활기찬 대도시" },
  { value: "relaxed", label: "여유로운 중소도시" },
  { value: "quiet", label: "조용한 자연 속" },
];

const importantFactors = [
  { value: "internet", label: "빠른 인터넷" },
  { value: "ocean", label: "바다 근처" },
  { value: "cafe", label: "카페가 많은 곳" },
  { value: "cheap", label: "저렴한 생활비" },
];

export default function CityQuizSection() {
  const [budget, setBudget] = useState<string>("");
  const [atmosphere, setAtmosphere] = useState<string>("");
  const [factors, setFactors] = useState<string[]>([]);

  // 체크박스 토글 핸들러
  const toggleFactor = (value: string) => {
    setFactors((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  // 제출 핸들러 (빈 핸들러 – 로직 미구현)
  const handleSubmit = () => {
    // TODO: 추천 알고리즈 로직 구현
  };

  const isValid = budget && atmosphere && factors.length > 0;

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 타이틀 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-neutral-800">
            🎯 당신에게 맞는 도시를 찾아보세요
          </h2>
          <p className="text-neutral-500 mt-2">3가지 질문에 답하면 맞춤 도시를 추천해드리겠습니다</p>
        </div>

        {/* 퀴즈 카드 */}
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6 sm:p-8 flex flex-col gap-8">

          {/* Q1: 예산 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-neutral-800">
              1️⃣ 월 예산은 얼마 정도인가요?
            </h3>
            <RadioGroup value={budget} onValueChange={setBudget} className="grid grid-cols-2 gap-2">
              {budgetOptions.map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`budget-${opt.value}`} />
                  <Label htmlFor={`budget-${opt.value}`} className="text-sm text-neutral-600 cursor-pointer">
                    {opt.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* 구분선 */}
          <div className="border-t border-neutral-100" />

          {/* Q2: 분위기 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-neutral-800">
              2️⃣ 어떤 분위기의 도시를 원하신가요?
            </h3>
            <RadioGroup value={atmosphere} onValueChange={setAtmosphere} className="grid grid-cols-3 gap-2">
              {atmosphereOptions.map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`atmo-${opt.value}`} />
                  <Label htmlFor={`atmo-${opt.value}`} className="text-sm text-neutral-600 cursor-pointer">
                    {opt.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* 구분선 */}
          <div className="border-t border-neutral-100" />

          {/* Q3: 중요 요소 (복수 선택) */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-neutral-800">
              3️⃣ 중요하게 생각하는 요소는? <span className="text-sm font-normal text-neutral-400">(복수 선택)</span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {importantFactors.map((factor) => (
                <div key={factor.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`factor-${factor.value}`}
                    checked={factors.includes(factor.value)}
                    onCheckedChange={() => toggleFactor(factor.value)}
                  />
                  <Label htmlFor={`factor-${factor.value}`} className="text-sm text-neutral-600 cursor-pointer">
                    {factor.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* 제출 버튼 */}
          <Button
            size="lg"
            className="w-full mt-2 bg-brand-green hover:bg-brand-green/90 text-white font-semibold rounded-xl h-12 text-base
                       disabled:opacity-40 disabled:cursor-not-allowed"
            disabled={!isValid}
            onClick={handleSubmit}
          >
            내 도시 찾기 →
          </Button>
        </div>
      </div>
    </section>
  );
}
