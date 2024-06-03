import ContactForm from "./components/contact-form";
import Footer from "./components/footer";
import HeroMain from "./components/hero-main";
import IconsSection from "./components/icons-section";
import MapSection from "./components/map-section";
import NavBar from "./components/nav-bar";
import PdfDonwloadSection from "./components/pdf-download-section";
import PhotoGallery from "./components/photo-gallery";
import ReviewsSection from "./components/reviews-section";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroMain />
      <PhotoGallery />
      <section className="container mx-auto">
        <IconsSection />
        <PdfDonwloadSection />
        <MapSection />
        <ReviewsSection />
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
