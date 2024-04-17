import HeroMain from "./components/hero-main";
import IconsSection from "./components/icons-section";
import MapSection from "./components/map-section";
import NavBar from "./components/nav-bar";
import PdfDonwloadSection from "./components/pdf-download-section";
import PhotoGallery from "./components/photo-gallery";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroMain />
      <section className="px-5 md:px-20">
        <PhotoGallery />
        <IconsSection />
        <PdfDonwloadSection />
        <MapSection />
      </section>
    </main>
  );
}
