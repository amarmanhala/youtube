import { YOUTUBE_BASE_SEARCH_URL } from "../config";
import { useEffect, useState } from "react";

const useGetVideosBySearch = (searchQuery) => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    getVideosBySearch(searchQuery);
  }, []);

  const getVideosBySearch = async (searchQuery) => {
    const data = await fetch(
      `${YOUTUBE_BASE_SEARCH_URL}&part=snippet%2CcontentDetails%2Cstatistics&q=${searchQuery}&maxResults=${25}`
    );
    const json = await data.json();

    setVideos(json.items);
  };

  return videos;
};

export default useGetVideosBySearch;
