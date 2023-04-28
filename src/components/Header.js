import React, { useEffect, useState } from "react";
import { MdOutlineMenu, MdPerson2 } from "react-icons/md";
import logo from "../logo_dark.png";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleActionForSidebar } from "../utils/sidebarToggleSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/config";
import { MdOutlineSearch } from "react-icons/md";
import store from "../utils/store";
import { cacheSearchSuggestions } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  //console.log(searchQuery);
  const dispatch = useDispatch();

  const searchCache = useSelector(store => store.search);
  //Cache looks like this - "iphone": []

  useEffect(() => {
    const timer = setTimeout(() =>  {
    if (searchCache[searchQuery]) {
      setSearchSuggestions(searchCache[searchQuery]);
    } else {
      getSearchSuggestions()
    }}, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("Call an api with", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(cacheSearchSuggestions({
      [searchQuery]: json[1]
    }))
    //console.log(json[1]);
  };

  const toggleSidebar = () => {
    dispatch(toggleActionForSidebar());
  };
  return (
    <header className="flex flex-row justify-between  w-full h-14 py-4 px-6 bg-zinc-950">
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
      <div className="flex flex-col w-[40%]">
        <div className="w-full">
          <Search
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
        </div>
        {showSuggestions && searchSuggestions.length !== 0 && (
          <div className="bg-white border border-zinc-200 relative w-full rounded-xl mt-1">
            <div className="py-6">
              <ul className="text-lg font-medium">
                {searchSuggestions.map((suggestion) => {
                  return (
                    <li
                      key={suggestion}
                      className="pb-2 hover:bg-zinc-100 px-4 cursor-pointer flex flex-row items-center"
                    >
                      <MdOutlineSearch />
                      &nbsp; {suggestion}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>

      <div>
        <MdPerson2 size={24} color="#fff" />
      </div>
    </header>
  );
};

export default Header;
