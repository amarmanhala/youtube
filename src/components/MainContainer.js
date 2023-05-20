import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoCardContainer from "./VideoCardContainer";
import { useSelector } from "react-redux";
import SearchVideosContainer from "./SearchVideosContainer";

const MainContainer = () => {
  const search = useSelector((store) => store.search.search);

  return (
    <div className="w-5/6">
      {!search ? (
        <>
          <ButtonList />
          <VideoCardContainer />
        </>
      ) : (
        <SearchVideosContainer />
      )}
    </div>
  );
};

export default MainContainer;
