import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../utils/config";
import VideoCard from "./VideoCard";

const VideoCardContainer = () => {

  const [videos, setVideos] = useState([]);

  //console.log("you are here");
  useEffect(() => {
    console.log("you are here");
   getPopularVideos();
    console.log("you are here");
  }, []);

  const getPopularVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_POPULAR_VIDEO_LIST);
      const json = await data.json();
      setVideos(json.items);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  return videos.length === 0 ? (<div>Loading...</div>) : (
    <div>
      <VideoCard data={videos[0]} />
    </div>
  );
};

export default VideoCardContainer;
