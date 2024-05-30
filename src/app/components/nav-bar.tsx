"use client";
import React from "react";
import { Button } from "./elements/button";
import { stack as Menu } from "react-burger-menu";

const NavBar = () => {
  return (
    <>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex justify-around items-center px-20 gap-10 border-b border-slate-500">
        <img className="size-24" src="/images/umbrella-3d.png" alt="logo" />
        <a href="#appartamento">
          <p className="hover:-translate-y-1 transition-all duration-300">L'appartamento</p>
        </a>
        <a href="#itinerari">
          <p className="hover:-translate-y-1 transition-all duration-300">Itinerari</p>
        </a>
        <a href="#doveSiamo">
          <p className="hover:-translate-y-1 transition-all duration-300">Dove siamo</p>
        </a>
        <a href="#reviews">
          <p className="hover:-translate-y-1 transition-all duration-300">Dicono di noi</p>
        </a>
        <a href="#form">
          <p className="hover:-translate-y-1 transition-all duration-300">Contatti</p>
        </a>
        <Button className="bg-teal-900 text-white text-sm">prenota</Button>
      </div>
      {/* MOBILE BURGER MENU */}
      <Menu className="z-50 md:hidden">
        <a href="#appartamento">
          <p className="hover:-translate-y-1 transition-all duration-300">L'appartamento</p>
        </a>
        <a href="#itinerari">
          <p className="hover:-translate-y-1 transition-all duration-300">Itinerari</p>
        </a>
        <a href="#doveSiamo">
          <p className="hover:-translate-y-1 transition-all duration-300">Dove siamo</p>
        </a>
        <a href="#reviews">
          <p className="hover:-translate-y-1 transition-all duration-300">Dicono di noi</p>
        </a>
        <a href="#form">
          <p className="hover:-translate-y-1 transition-all duration-300">Contatti</p>
        </a>
      </Menu>
    </>
  );
};

export default NavBar;
