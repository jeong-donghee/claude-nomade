import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PopularCitiesSection from "@/components/sections/PopularCitiesSection";

export default function CitiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PopularCitiesSection />
      </main>
      <Footer />
    </div>
  );
}
