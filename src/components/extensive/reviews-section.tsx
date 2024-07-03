"use client";
import { Section } from "@/components/common/section";
import { Container } from "@/components/common/container";
import ReviewCard, { ReviewCardProps } from "./review-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const reviews: ReviewCardProps[] = [
  {
    guestName: "Martina",
    rating: 5,
    text: "Abbiamo alloggiato con mio marito e il cane presso la casa vacanze. Siamo stati benissimo, abbiamo staccato dal caos della città e ci siamo presi un meritatissimo relax. Il parcheggio interno è stato fondamentale.",
  },
  {
    guestName: "Stefano",
    rating: 5,
    text: "Siamo venuti in gruppo, per un totale di sei persone. Avevamo la piscina, il wi-fi, un’intera casa tutta per noi! I barbecue all’esterno si sono sprecati con quel camino tattico all’entrata. La carne in Toscana costa il giusto e gioca un’altra campionato come gusto! Questa casa è perfetta per venire in gruppo!",
  },
  {
    guestName: "Ilaria",
    rating: 5,
    text: "I proprietari sono due persone squisite e disponibili, sempre pronti ad assisterti se ne hai bisogno! La casa sembra uscita da una favola ed è stata un punto perfetto per farci un giro nella maremma toscana ma anche nel viterbese. Ho alloggiato qui con una mia amica, siamo venute a preparare gli esami nel relax più totale.",
  },
  {
    guestName: "Matteo",
    rating: 4,
    text: "Ho alloggiato qui con la mia famiglia. Volevo portare mia moglie e la piccolina in un posto sano e rilassante, senza però avere problemi di connessione o altro. Questa casa ha accontentato tutti superando anche le aspettative. Da qui abbiamo raggiunto facilmente le terme di Saturnia e visto tantissime cose fantastiche come il borgo di Pitigliano o il lago di Bolsena, il più grande lago vulcanio più grande d’Europa.",
  },
];

const ReviewsSection = () => {
  return (
    <Section id="reviews">
      <Container>
        <Carousel>
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2">
                <ReviewCard {...review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 lg:-left-12" />
          <CarouselNext className="right-2 lg:-right-12" />
        </Carousel>
      </Container>
    </Section>
  );
};

export default ReviewsSection;
