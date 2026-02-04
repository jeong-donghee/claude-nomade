import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import MediaBadgeSection from "@/components/sections/MediaBadgeSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import PopularCitiesSection from "@/components/sections/PopularCitiesSection";
import TrendingCitySection from "@/components/sections/TrendingCitySection";
import MeetupSection from "@/components/sections/MeetupSection";
import CommunitySection from "@/components/sections/CommunitySection";
import StatsSection from "@/components/sections/StatsSection";
import CityQuizSection from "@/components/sections/CityQuizSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 네비게이션 */}
      <Navbar />

      {/* 메인 콘텐츠 */}
      <main className="flex-1">
        <HeroSection />
        <MediaBadgeSection />
        <ValuePropositionSection />
        <PopularCitiesSection />
        <TrendingCitySection />
        <MeetupSection />
        <CommunitySection />
        <StatsSection />
        <CityQuizSection />
        <FinalCTASection />
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
