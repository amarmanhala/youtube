import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../videosSlice";

const useGetPopularVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos.videos);
  const filterByRegion = useSelector(store => store.filters.regionCode);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getVideos();
    setIsLoading(false);
  }, [filterByRegion]);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_POPULAR_VIDEO_LIST, {
        "maxResults": "10",
        "regionCode": filterByRegion
      });
      const json = await data.json();
      dispatch(setVideos(json.items));
    } catch (err) {
      console.log(err);
    }
  };

  return [videos, isLoading];
};

export default useGetPopularVideos;
