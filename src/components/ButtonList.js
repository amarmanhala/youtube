import React from "react";
import FilterButton from "./FilterButton";

const data = ["All", "Gaming", "Songs", "Music", "Comedy", "Mixes", "Food"];

const ButtonList = () => {
  return (
    <div className="flex flex-row items-center w-full p-3 overflow-x-auto">
      {data.map((item) => {
        return (
          <div className="mr-4">
            <FilterButton label={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
