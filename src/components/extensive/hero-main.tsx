"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useClientTranslations from "@/lib/hooks/use-client-translations";
import { cn } from "@/lib/utils";
import { secondaryFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Container } from "@/components/common/container";

const HeroMain = () => {
  const { t } = useClientTranslations();

  return (
    <section className="relative h-screen w-full bg-center bg-cover bg-no-repeat bg-[url('/images/pic-3.jpg')]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex justify-start items-center">
        <Container>
          <div className="space-y-10">
            <div>
              <h1
                className={cn(
                  secondaryFont.className,
                  "lg:text-[90px] text-[50px] font-bold text-primary-foreground lg:leading-[100px]"
                )}
              >
                Casa Hermes
              </h1>
              <h2 className="text-xl font-light text-primary-foreground px-1">
                {t("bannerTitle")}
              </h2>
            </div>
            <div className="space-y-3">
              {/* <h3 className="font-light text-primary-foreground">{t("bannerSubTitle")}</h3> */}
              <Button asChild size={"lg"}>
                <Link href="#form">{t("bookButton")}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroMain;
