import React, { useEffect, useState } from "react";
import useGetVideosBySearch from "../utils/hooks/useGetVideosBySearch";
import { useSelector } from "react-redux";
import { YOUTUBE_BASE_SEARCH_URL } from "../utils/config";
import { Link } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";

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
    console.log(json.items);
  };

  return videos.length === 0 ? (
    <div>Loading....</div>
  ) : (
    <div className="pt-16 pl-20 border-t border-t-zinc-700">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <SearchVideoCard data={video} />s
          </Link>
        );
      })}
    </div>
  );
};

export default SearchVideosContainer;
