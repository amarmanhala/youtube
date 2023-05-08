import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchVideosContainer from "./SearchVideosContainer";
import SkeltonVideoCards from "./SkeltonVideoCards";

const VideoCardContainer = () => {
  const [videos, setVideos] = useState([]);

  const filterByRegion = useSelector((store) => store.filters.regionCode);


  useEffect(() => {
    getPopularVideos();
  }, [filterByRegion]);

  const getPopularVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_POPULAR_VIDEO_LIST + filterByRegion);
      const json = await data.json();
      setVideos(json.items);
      //console.log(json.items);
    } catch (err) {
      console.log(err);
    }
  };
  

  return videos.length === 0 ? (
    <SkeltonVideoCards />
  ) : (
    <div className="flex flex-row flex-wrap">
      { videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard data={video} />
          </Link>
        );
      }) }
    </div>
  );

  
};

export default VideoCardContainer;
