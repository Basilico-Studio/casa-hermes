"use client";

import { stack as Menu } from "react-burger-menu";
import useClientTranslations from "@/lib/hooks/use-client-translations";
import { navItems } from "@/lib/nav-items";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { MobileNavbar } from "./mobile-navbar";

const NavBar = () => {
  const { t } = useClientTranslations();

  return (
    <>
      {/* DESKTOP MENU */}
      <nav className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <Link href={item.href} key={item.tLabel}>
            <p className="hover:-translate-y-1 transition-all duration-300 text-sm font-light">
              {t(item.tLabel)}
            </p>
          </Link>
        ))}
      </nav>
      {/* MOBILE BURGER MENU */}
      <MobileNavbar />
    </>
  );
};

export default NavBar;
