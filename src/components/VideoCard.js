import React, { useEffect } from "react";
import abbreviateNumber from "../utils/abbreviateNumber";

const VideoCard = ({ data }) => {
  console.log(data);

  const { snippet, statistics } = data;
  const { title, publishedAt, thumbnails, channelTitle } = snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div className="p-4 w-[360px]">
      <div className="rounded-xl overflow-hidden"><img alt="fjehfj" src={thumbnails.medium.url} /></div>
      <p className="text-white font-semibold text-md pt-2.5 pb-1">{title}</p>
      <p className="text-zinc-400 text-sm font-medium">{channelTitle}</p>
      <p  className="text-zinc-400 text-sm font-medium py-0.5">{abbreviateNumber(statistics.viewCount)} views</p>
    </div>
  );
};

export default VideoCard;
