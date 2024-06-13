import { Container } from "@/components/common/container";
import {
  Car,
  Desk,
  FlowerTulip,
  ForkKnife,
  PawPrint,
  Siren,
  SwimmingPool,
  TelevisionSimple,
  WifiHigh,
} from "@phosphor-icons/react/dist/ssr";

import useServerTranslations from "@/lib/hooks/use-server-translations";

type IconsSectionProps = {
  params: any;
};

const IconsSection = async ({ params }: IconsSectionProps) => {
  const { t } = await useServerTranslations(params.locale);
  return (
    <div className="py-5 bg-primary">
      <Container className="space-y-10">
        <div className="flex gap-2 flex-wrap">
          <IconTextRow icon={FlowerTulip} text={t("iconFlowerText")} />
          <IconTextRow icon={WifiHigh} text={t("iconWifiText")} />
          <IconTextRow icon={Car} text={t("iconParkingText")} />
          <IconTextRow icon={PawPrint} text={t("iconAnimalsText")} />
          <IconTextRow icon={ForkKnife} text={t("iconKitchenText")} />
          <IconTextRow icon={Desk} text={t("iconDeskText")} />
          <IconTextRow icon={SwimmingPool} text={t("iconPoolText")} />
          <IconTextRow icon={TelevisionSimple} text={t("iconTvText")} />
          <IconTextRow icon={Siren} text={t("iconSirenText")} />
        </div>
      </Container>
    </div>
  );
};

export default IconsSection;

function IconTextRow(props: { icon: React.ElementType; text: string }) {
  const Icon = props.icon;
  return (
    <div className="flex items-center gap-2 bg-primary-foreground px-4 py-1 rounded-full">
      <Icon className="size-5" />
      <p className="text-xs">{props.text}</p>
    </div>
  );
}
