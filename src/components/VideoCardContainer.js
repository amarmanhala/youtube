import React, { useEffect } from 'react'
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../utils/config"

const VideoCardContainer = () => {
  useEffect(() => {
    getPopularVideos();
  }, []);

  const getPopularVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEO_LIST);
    const json = await data.json();
    console.log(json);
    return json;
  }

  return (
    <div>VideoCardContainer</div>
  )
}

export default VideoCardContainer