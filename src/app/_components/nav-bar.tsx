"use client";
import React from "react";
import { Button } from "./elements/button";
import { stack as Menu } from "react-burger-menu";
import useClientTranslations from "@/lib/hooks/use-client-translations";

const NavBar = () => {
  const { t } = useClientTranslations();

  return (
    <>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex justify-around items-center px-20 py-3 gap-10 border-b border-slate-500">
        <img className="size-16" src="/images/logo.png" alt="logo" />
        <a href="#appartamento">
          <p className="hover:-translate-y-1 transition-all duration-300">{t("nav1")}</p>
        </a>
        <a href="#itinerari">
          <p className="hover:-translate-y-1 transition-all duration-300">{t("nav2")}</p>
        </a>
        <a href="#doveSiamo">
          <p className="hover:-translate-y-1 transition-all duration-300">{t("nav3")}</p>
        </a>
        <a href="#reviews">
          <p className="hover:-translate-y-1 transition-all duration-300">{t("nav4")}</p>
        </a>
        <a href="#form">
          <p className="hover:-translate-y-1 transition-all duration-300">{t("nav5")}</p>
        </a>
        <a href="#form">
          <Button className="bg-[#72a16b] text-white text-sm">{t("bookButton")}</Button>
        </a>
      </div>
      {/* MOBILE BURGER MENU */}
      <Menu className="z-50 md:hidden">
        <a href="#appartamento">
          <p className="hover:-translate-y-1 transition-all duration-300">{t("nav1")}</p>
        </a>
        <a href="#itinerari">
          <p className="hover:-translate-y-1 transition-all duration-300">{t("nav2")}</p>
        </a>
        <a href="#doveSiamo">
          <p className="hover:-translate-y-1 transition-all duration-300">{t("nav3")}</p>
        </a>
        <a href="#reviews">
          <p className="hover:-translate-y-1 transition-all duration-300">{t("nav4")}</p>
        </a>
        <a href="#form">
          <p className="hover:-translate-y-1 transition-all duration-300">{t("nav5")}</p>
        </a>
      </Menu>
    </>
  );
};

export default NavBar;
