import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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

  return videos.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="flex flex-row flex-wrap">
      {videos.map(video => {
        return (<Link to={"/watch?v=" + video.id}><VideoCard data={video} /></Link>)
      })}
      
    </div>
  );
};

export default VideoCardContainer;
