import React, { useEffect, useState } from "react";
import { MdOutlineMenu, MdPerson2 } from "react-icons/md";
import logo from "../logo_dark.png";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleActionForSidebar } from "../utils/sidebarToggleSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/config";
import {
  cacheSearchSuggestions,
  searchTrue,
  setSearchQuery,
} from "../utils/searchSlice";
import SearchSuggestions from "./SearchSuggestions";

const Header = () => {
  const [searchString, setSearchString] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search.searchSuggestions);

  //Cache looks like this - "iphone": []

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchString]) {
        setSearchSuggestions(searchCache[searchString]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchString]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchString);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(
      cacheSearchSuggestions({
        [searchString]: json[1],
      })
    );
  };

  const toggleSidebar = () => {
    dispatch(toggleActionForSidebar());
  };

  const handleSearch = (suggestion) => {
    console.log(suggestion);
    setSearchString(suggestion);
    dispatch(searchTrue());
    dispatch(setSearchQuery(suggestion));
    setShowSuggestions(false);
  };

  return (
    <header className="flex flex-row justify-between  w-full h-14 py-4 px-6 bg-zinc-950 sticky top-0 z-40">
      <div className="flex flex-row justify-between items-center">
        <div className="flex mr-4">
          <button onClick={() => toggleSidebar()} className="rounded-full">
            <MdOutlineMenu size={24} color="#fff" />
          </button>
        </div>
        <div>
          <a href="/">
            <img alt="youtube logo" src={logo} className="h-[20px] w-[90px]" />
          </a>
        </div>
      </div>
      <div className="flex flex-col w-[40%]">
        <div className="w-full">
          <Search
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(true)}
          />
        </div>
        {showSuggestions && searchSuggestions.length !== 0 && (
          <SearchSuggestions
            searchSuggestions={searchSuggestions}
            handleSearch={handleSearch}
          />
        )}
      </div>
      <div>
        <MdPerson2 size={24} color="#fff" />
      </div>
    </header>
  );
};

export default Header;
