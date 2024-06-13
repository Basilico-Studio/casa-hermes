import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";
import { secondaryFont } from "@/lib/fonts";
import ContactForm from "../extensive/contact-form";
import { navItems } from "@/lib/nav-items";
import Link from "next/link";
import useServerTranslations from "@/lib/hooks/use-server-translations";

const Footer = async (props: { locale: string }) => {
  const { t } = await useServerTranslations(props.locale);
  return (
    <footer className="bg-primary relative lg:pb-6 pb-20">
      <Container className="flex lg:flex-row flex-col gap-10">
        <div className="text-primary-foreground gap-4 flex flex-col justify-center lg:order-1 order-2 lg:text-left text-center">
          <h2 className={cn(secondaryFont.className, "font-bold text-4xl")}>
            Casa Hermes
          </h2>
          <div className="text-sm">
            <p>58010 Loc. Palazzetto, 26</p>
            <p>Elmo (GR), Toscana, Italy</p>
          </div>
          <p className="text-xs">&copy; Copyright {new Date().getFullYear()}</p>
        </div>
        <div className="col-span-2 flex-1 flex justify-center lg:order-2 order-1">
          <ContactForm />
        </div>
        <div className="text-primary-foreground gap-4 flex flex-col justify-center order-3 lg:text-left text-center">
          <p>info@casavacanzehermes.it</p>
          <p>Tel. 338 5648407</p>
          <div className="text-sm">
            <p className="mb-1">Tutti i giorni </p>
            <p>dalle 9.00 alle 12.30</p>
            <p>e dalle 16.00-19.00</p>
          </div>
        </div>
      </Container>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-4 lg:mt-0 mt-6">
        {navItems.map((item) => (
          <Link
            key={item.tLabel}
            href={item.href}
            className="text-sm font-light text-primary-foreground"
          >
            {t(item.tLabel)}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
