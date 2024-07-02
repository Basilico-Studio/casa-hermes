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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d541.7995854833853!2d11.685540875784246!3d42.69992213287287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13291867a608ea0b%3A0x503f6d27e4744f9d!2sCasa%20Vacanze%20Hermes!5e0!3m2!1sen!2sit!4v1719932525400!5m2!1sen!2sit"
            loading="lazy"
            className="h-full w-full rounded-md border-none"
          ></iframe>
        </div>
      </Container>
    </Section>
  );
};

export default MapSection;
