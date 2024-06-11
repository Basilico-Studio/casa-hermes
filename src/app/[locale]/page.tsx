import ContactForm from "../_components/contact-form";
import Footer from "../_components/footer";
import HeroMain from "../_components/hero-main";
import IconsSection from "../_components/icons-section";
import MapSection from "../_components/map-section";
import NavBar from "../_components/nav-bar";
import PdfDonwloadSection from "../_components/pdf-download-section";
import PhotoGallery from "../_components/photo-gallery";
import ReviewsSection from "../_components/reviews-section";

export default async function Home({ params }: any) {
  return (
    <main>
      <NavBar />
      <HeroMain />
      <PhotoGallery params={params} />
      <section className="container mx-auto">
        <IconsSection params={params} />
        <PdfDonwloadSection />
        <MapSection params={params} />
        <ReviewsSection />
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
