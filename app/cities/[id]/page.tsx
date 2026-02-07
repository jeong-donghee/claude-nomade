import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cities, cityDetails } from "@/data/cities";

interface CityDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CityDetailPage({ params }: CityDetailPageProps) {
  const { id } = await params;
  const cityId = Number(id);
  const city = cities.find((c) => c.id === cityId);
  const detail = cityDetails[cityId];

  if (!city || !detail) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-[#faf7f2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 뒤로가기 */}
          <Link href="/cities" className="inline-flex items-center text-sm text-[#7a7068] hover:text-[#2d5016] transition-colors mb-6">
            &larr; 목록으로
          </Link>

          {/* 상단: 도시명, 카테고리, 평점, 추천률 */}
          <div className="bg-white rounded-2xl border border-[#ddd5c8] p-6 mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h1 className="text-3xl font-bold text-[#3a3228]">{city.name}</h1>
              <span className="text-lg text-[#7a7068]">{city.nameEn}</span>
              <span className="bg-[#eef5eb] text-[#2d5016] text-xs font-semibold px-2.5 py-1 rounded-full">{city.category}</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-[#8b6f47] font-semibold">{city.rating}/5.0 ★</span>
              <span className="text-[#7a7068]">{city.recommendRate}% 추천</span>
            </div>
          </div>

          {/* 핵심 지표 카드 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { label: "월 생활비", value: `₩${city.monthlyCost.toLocaleString()}` },
              { label: "인터넷 속도", value: `${city.internetSpeed} Mbps` },
              { label: "원룸 월세", value: `₩${city.monthlyRent.toLocaleString()}` },
              { label: "카페 밀도", value: `${city.cafeDensity}개 / 500m` },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl border border-[#ddd5c8] p-4 text-center">
                <p className="text-xs text-[#7a7068] mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-[#3a3228]">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* 도시 소개 */}
          <div className="bg-white rounded-2xl border border-[#ddd5c8] p-6 mb-6">
            <h2 className="text-lg font-bold text-[#3a3228] mb-3">도시 소개</h2>
            <p className="text-sm text-[#5c5248] leading-relaxed">{detail.description}</p>
          </div>

          {/* 장점/단점 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl border border-[#ddd5c8] p-6">
              <h2 className="text-lg font-bold text-[#2d5016] mb-3">장점</h2>
              <ul className="flex flex-col gap-2">
                {detail.pros.map((pro) => (
                  <li key={pro} className="text-sm text-[#5c5248] flex items-start gap-2">
                    <span className="text-[#4a7c3f] mt-0.5">+</span> {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-[#ddd5c8] p-6">
              <h2 className="text-lg font-bold text-[#8b6f47] mb-3">단점</h2>
              <ul className="flex flex-col gap-2">
                {detail.cons.map((con) => (
                  <li key={con} className="text-sm text-[#5c5248] flex items-start gap-2">
                    <span className="text-[#8b6f47] mt-0.5">-</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 추천 장소 */}
          <div className="bg-white rounded-2xl border border-[#ddd5c8] p-6 mb-6">
            <h2 className="text-lg font-bold text-[#3a3228] mb-4">추천 카페 / 코워킹스페이스</h2>
            <div className="flex flex-col gap-3">
              {detail.recommendedPlaces.map((place) => (
                <div key={place.name} className="border border-[#f0ebe3] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[#3a3228]">{place.name}</p>
                  <p className="text-xs text-[#7a7068] mt-1">{place.location}</p>
                  <p className="text-xs text-[#5c5248] mt-1">{place.feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 기후 및 교통 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-[#ddd5c8] p-6">
              <h2 className="text-lg font-bold text-[#3a3228] mb-3">기후</h2>
              <p className="text-sm text-[#5c5248] leading-relaxed">{detail.climate}</p>
            </div>
            <div className="bg-white rounded-2xl border border-[#ddd5c8] p-6">
              <h2 className="text-lg font-bold text-[#3a3228] mb-3">교통</h2>
              <p className="text-sm text-[#5c5248] leading-relaxed">{detail.transport}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
