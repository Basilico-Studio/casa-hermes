import React from "react";
import { Button } from "./elements/button";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center px-20 gap-10 border-b border-slate-500">
      <img className="size-24" src="/images/umbrella-3d.png" alt="logo" />
      <a href="">
        <p className="hover:-translate-y-1 transition-all duration-300">L'appartamento</p>
      </a>
      <a href="">
        <p className="hover:-translate-y-1 transition-all duration-300">Itinerari</p>
      </a>
      <a href="">
        <p className="hover:-translate-y-1 transition-all duration-300">Dove siamo</p>
      </a>
      <a href="">
        <p className="hover:-translate-y-1 transition-all duration-300">Dicono di noi</p>
      </a>
      <a href="">
        <p className="hover:-translate-y-1 transition-all duration-300">Contatti</p>
      </a>
      <Button className="bg-slate-600 text-white">prenota</Button>
    </div>
  );
};

export default NavBar;
