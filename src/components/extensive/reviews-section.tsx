import ReviewSwiper from "@/components/extensive/review-swiper";
import { Section } from "@/components/common/section";
import { Container } from "@/components/common/container";

const ReviewsSection = () => {
  return (
    <Section id="reviews">
      <Container>
        <ReviewSwiper />
      </Container>
    </Section>
  );
};

export default ReviewsSection;
