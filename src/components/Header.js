import React from "react";
import { MdOutlineMenu, MdPerson2 } from "react-icons/md";
import logo from "../logo.png";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full h-14 py-4 px-6 bg-[#0f0f0f]">
      <div className="flex flex-row justify-between items-center">
        <div className="mr-4">
          <MdOutlineMenu size={24} color="#fff" />
        </div>
        <div>
          <img alt="youtube logo" src={logo} className="h-[20px] w-[90px]" />
        </div>
      </div>
      <div className="w-2/6">
        <Search />
      </div>
      <div>
        <MdPerson2 size={24} color="#fff" />
      </div>
    </header>
  );
};

export default Header;
