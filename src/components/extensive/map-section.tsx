import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { secondaryFont } from "@/lib/fonts";
import useServerTranslations from "@/lib/hooks/use-server-translations";
import { cn } from "@/lib/utils";
import React from "react";

type MapSectionProps = {
  params: any;
};

const MapSection = async ({ params }: MapSectionProps) => {
  const { t } = await useServerTranslations(params.locale);

  return (
    <Section id="doveSiamo" className="bg-primary-foreground">
      <Container className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="space-y-3">
          <h2
            className={cn(
              secondaryFont.className,
              "lg:text-4xl text-2xl font-bold"
            )}
          >
            {t("whereTitle")}
          </h2>
          <p className="font-light">{t("whereSubTitle")}</p>
        </div>
        <div className="h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9927982070412!2d12.384010076852515!3d41.89301197124015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5f76b4f009dd%3A0xe829599ac076cb74!2sVia.cornelia%20377!5e0!3m2!1sen!2sit!4v1713362150311!5m2!1sen!2sit"
            loading="lazy"
            className="h-full w-full rounded-md"
          ></iframe>
        </div>
      </Container>
    </Section>
  );
};

export default MapSection;
