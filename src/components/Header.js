import React, { useEffect, useState } from "react";
import { MdOutlineMenu, MdPerson2 } from "react-icons/md";
import logo from "../logo_dark.png";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { toggleActionForSidebar } from "../utils/sidebarToggleSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/config";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  //console.log(searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("Call an api with", searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
  }

  const toggleSidebar = () => {
    dispatch(toggleActionForSidebar());
  };
  return (
    <header className="flex flex-row justify-between items-center w-full h-14 py-4 px-6 bg-zinc-950">
      <div className="flex flex-row justify-between items-center">
        <div className="flex mr-4">
          <button onClick={() => toggleSidebar()} className="rounded-full">
            <MdOutlineMenu size={24} color="#fff" />
          </button>
        </div>
        <div>
          <img alt="youtube logo" src={logo} className="h-[20px] w-[90px]" />
        </div>
      </div>
      <div className="w-[40%]">
        <Search value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div>
        <MdPerson2 size={24} color="#fff" />
      </div>
    </header>
  );
};

export default Header;
