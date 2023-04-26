import React from "react";
import { MdOutlineMenu, MdPerson2 } from "react-icons/md";
import logo from "../logo_dark.png";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full h-14 py-4 px-6 bg-[#0f0f0f]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex mr-4">
          <button className="rounded-full"><MdOutlineMenu size={24} color="#fff" /></button>
        </div>
        <div>
          <img alt="youtube logo" src={logo} className="h-[20px] w-[90px]" />
        </div>
      </div>
      <div className="w-[40%]">
        <Search />
      </div>
      <div>
        <MdPerson2 size={24} color="#fff" />
      </div>
    </header>
  );
};

export default Header;
