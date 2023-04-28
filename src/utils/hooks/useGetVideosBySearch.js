import { useSelector } from "react-redux";
import { GOOGLE_API_KEY, YOUTUBE_BASE_SEARCH_URL } from "../config";
import { useEffect, useState } from "react";

const useGetVideosBySearch = (searchQuery) => {
  const [videos, setVideos] = useState([]);
  console.log(searchQuery);

  useEffect(() => {
    getVideosBySearch(searchQuery);
    console.log(videos);
  }, []);

  const getVideosBySearch = async (searchQuery) => {
    const data = await fetch(
      `${YOUTUBE_BASE_SEARCH_URL}&q=${searchQuery}&maxResults=${25}`
    );
    const json = await data.json();
    setVideos(json);
  };
};

export default useGetVideosBySearch;
