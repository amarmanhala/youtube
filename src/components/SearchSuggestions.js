import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const SearchSuggestions = ({ searchSuggestions, handleSearch }) => {
  return (
    <div className="bg-white border border-zinc-200 relative w-full rounded-xl mt-1 z-50">
      <div className="py-6">
        <ul className="text-lg font-medium">
          {searchSuggestions.map((suggestion, index) => {
            return (
              <li
                key={index}
                className="pb-2 hover:bg-zinc-100 px-4 cursor-pointer flex flex-row items-center"
                onClick={() => handleSearch(suggestion)}
              >
                <MdOutlineSearch />
                &nbsp; {suggestion}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchSuggestions;
