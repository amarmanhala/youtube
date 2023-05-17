import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../videosSlice";
import { setNextPageToken } from "../nextPageTokenSlice";

const useGetPopularVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos.videos);
  const filterByRegion = useSelector((store) => store.filters.regionCode);
  

  useEffect(() => {
    getVideos();
  }, [filterByRegion]);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_POPULAR_VIDEO_LIST + "&regionCode=" + filterByRegion);
      const json = await data.json();
      dispatch(setVideos(json.items));
      dispatch(setNextPageToken(json.nextPageToken));
    } catch (err) {
      console.log(err);
    }
  };

  return videos;
};

export default useGetPopularVideos;
