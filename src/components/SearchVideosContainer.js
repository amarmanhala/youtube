import React, { useEffect, useState } from "react";
import useGetVideosBySearch from "../utils/hooks/useGetVideosBySearch";
import { useSelector } from "react-redux";
import { YOUTUBE_BASE_SEARCH_URL } from "../utils/config";

const SearchVideosContainer = () => {
  const searchQuery = useSelector((store) => store.search.searchQuery);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideosBySearch(searchQuery);
  }, []);

  const getVideosBySearch = async (searchQuery) => {
    const data = await fetch(
      `${YOUTUBE_BASE_SEARCH_URL}&q=${searchQuery}&maxResults=${25}`
    );
    const json = await data.json();
    setVideos(json.items);
  };

  return videos.length === 0 ? (
    <div>Loading....</div>
  ) : (
    <div>
      {videos.map((video) => {
        return (
          <div>
            <h1 className="text-white">Hello</h1>
          </div>
        );
      })}
    </div>
  );
};

export default SearchVideosContainer;
