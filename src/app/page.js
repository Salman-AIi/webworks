import ContactUs from "@/components/ContactUs";
import GameAcquisition from "@/components/GameAcquisition";
import AboutUs from "@/components/AboutUs";
import OurTopHits from "@/components/OurTopHits";
import HeroSection from "@/components/HeroSection";

export const metadata = {
  title: "Home - SA Studios",
  description:
    "Discover cutting-edge Roblox games crafted by SA Studios. Join millions of players enjoying our creations worldwide.",
};

export default function HomePage() {
  return (
    <main>
      <div>
        <HeroSection />
      </div>
      <div>
        <OurTopHits />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <GameAcquisition />
      </div>
      <div>
        <ContactUs />
      </div>
    </main>
  );
}
