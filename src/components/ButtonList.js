import React, { useState } from "react";
import FilterButton from "./FilterButton";
import { useDispatch } from "react-redux";
import { setRegionCode } from "../utils/videosFilterByRegionSlice";

const data = [
  {
    name: "Norway",
    region_code: "NO",
  },
  {
    name: "Ireland",
    region_code: "IE",
  },
  {
    name: "Switzerland",
    region_code: "CH",
  },
  {
    name: "Iceland",
    region_code: "IS",
  },
  {
    name: "Germany",
    region_code: "DE",
  },
  {
    name: "Sweden",
    region_code: "SE",
  },
  {
    name: "Australia",
    region_code: "AU",
  },
  {
    name: "Netherlands",
    region_code: "NL",
  },
  {
    name: "Denmark",
    region_code: "DK",
  },
  {
    name: "Finland",
    region_code: "FI",
  },
  {
    name: "Canada",
    region_code: "CA",
  },
  {
    name: "Singapore",
    region_code: "SG",
  },
  {
    name: "Belgium",
    region_code: "BE",
  },
  {
    name: "Austria",
    region_code: "AT",
  },
  {
    name: "Luxembourg",
    region_code: "LU",
  },
  {
    name: "USA",
    region_code: "US",
  },
  {
    name: "Japan",
    region_code: "JP",
  },
];

const ButtonList = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  const handleFilterByRegion = (regionCode, index) => {
    
    setActive(index);
    dispatch(setRegionCode(regionCode));
  };
  return (
    <div className="flex flex-row items-center w-full py-1 sm:py-3 px-4 overflow-scroll sticky top-0">
      {data.map((item, index) => {
        return (
          <div className="mr-4">
            <FilterButton
              key={index}
              isActive={active}
              keyProps={index}
              label={item.name}
              regionCode={item.region_code}
              onClick={() => handleFilterByRegion(item.region_code, index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
