import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SkeltonVideoCards from "./SkeltonVideoCards";
import useGetPopularVideos from "../utils/hooks/useGetPopularVideos";
import { setNextPageToken } from "../utils/nextPageTokenSlice";

const VideoCardContainer = () => {
  const movies =  useGetPopularVideos();

  return movies.length === 0 ? (
    <SkeltonVideoCards />
  ) : (
    <div className="flex flex-row flex-wrap justify-center">
      {movies.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoCardContainer;
