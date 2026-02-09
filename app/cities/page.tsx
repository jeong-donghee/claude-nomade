import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CityFilterClient from "@/components/sections/CityFilterClient";
import { getCitiesWithLikes } from "@/lib/queries/cities";

export default async function CitiesPage() {
  // 서버에서 DB 데이터 fetch
  const cities = await getCitiesWithLikes();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 bg-[#faf7f2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
              <h2 className="text-3xl font-bold text-[#3a3228]">도시 찾기</h2>
            </div>
            <CityFilterClient initialCities={cities} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
