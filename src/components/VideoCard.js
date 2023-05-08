import React, { useEffect } from "react";
import { convertViewsCount } from "../utils/helper";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { title, publishedAt, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-4 w-[360px]">
      <div className="rounded-xl overflow-hidden">
        <img
          className="w-full h-full bg-zinc-900"
          alt="fjehfj"
          src={thumbnails.medium.url}
          loading="lazy"
        />
      </div>
      <p className="text-white font-semibold text-md pt-2.5 pb-1">{title}</p>
      <p className="text-zinc-400 text-sm font-medium">{channelTitle}</p>
      <p className="text-zinc-400 text-sm font-medium py-0.5">
        {convertViewsCount(statistics.viewCount)} views
      </p>
    </div>
  );
};

export default VideoCard;
