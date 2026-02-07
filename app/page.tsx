import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PopularCitiesSection from "@/components/sections/PopularCitiesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 네비게이션 */}
      <Navbar />

      {/* 메인 콘텐츠 */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2d5016]">
            대한민국에서 일하며 살기 좋은 도시를 찾아보세요
          </h1>
        </section>
        <PopularCitiesSection previewCount={6} />
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
