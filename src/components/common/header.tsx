import Image from "next/image";
import { Container } from "./container";
import NavBar from "./nav-bar";
import LanguageSwitcher from "./language-switcher";

export function Header(props: { locale: string }) {
  return (
    <header className="justify-between items-center py-2 absolute top-0 left-0 w-full z-50 bg-primary-foreground">
      <Container className="flex justify-between items-center">
        <Image
          height={64}
          width={64}
          className="size-16"
          src="/images/logo.png"
          alt="logo"
        />
        <div className="flex gap-6 items-center">
          <NavBar />
          <LanguageSwitcher locale={props.locale} />
        </div>
      </Container>
    </header>
  );
}
