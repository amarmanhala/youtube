import React, { useEffect, useState } from "react";
import useGetVideosBySearch from "../utils/hooks/useGetVideosBySearch";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_BASE_SEARCH_URL } from "../utils/config";
import { Link } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";
import { cacheSearchResults } from "../utils/searchSlice";

const SearchVideosContainer = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((store) => store.search.searchQuery);
  const searchVideoResults = useSelector(store => store.search.searchResults);

  console.log(searchVideoResults);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if(searchVideoResults[searchQuery]) {
      setVideos(searchVideoResults[searchQuery])
    }
    else {
      getVideosBySearch(searchQuery);
    }
    
  }, [searchQuery]);

  const getVideosBySearch = async (searchQuery) => {
    const data = await fetch(
      `${YOUTUBE_BASE_SEARCH_URL}&q=${searchQuery}&maxResults=${25}`
    );
    const json = await data.json();
    setVideos(json.items);
    dispatch(cacheSearchResults({
      [searchQuery]: json.items
    }))
    console.log(json.items);
  };

  return videos.length === 0 ? (
    <div>Loading....</div>
  ) : (
    <div className="mt-14 pt-6 pl-20 border-t border-t-zinc-700">
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
