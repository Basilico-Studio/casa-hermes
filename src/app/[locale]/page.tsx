import HeroMain from "@/components/extensive/hero-main";
import IconsSection from "@/components/extensive/icons-section";
import MapSection from "@/components/extensive/map-section";
import PhotoGallery from "@/components/extensive/photo-gallery";
import ReviewsSection from "@/components/extensive/reviews-section";
import { Section } from "@/components/common/section";

export default async function Home({ params }: any) {
  return (
    <main>
      <HeroMain />
      <IconsSection params={params} />
      <PhotoGallery params={params} />
      <ReviewsSection />
      <MapSection params={params} />
      {/* Empty Section to allow some bottom space */}
      <Section className="lg:py-36 py-28" />
    </main>
  );
}
