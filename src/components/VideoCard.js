import React, { useEffect } from "react";
import { convertViewsCount, generateAvatarWithFirstSecondLetter } from "../utils/helper";
import AvatarInitials from "./AvatarInitials";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { title, publishedAt, thumbnails, channelTitle, channelId } = snippet;

  return (
    <div className="m-3 w-[360px]">
      <div className="rounded-xl overflow-hidden">
        <img
          className="w-full h-full bg-zinc-900"
          alt="fjehfj"
          src={thumbnails.medium.url}
          loading="lazy"
        />
      </div>
      <div className="flex pt-4 pb-2">
      <div className="w-[40px] mr-3"><AvatarInitials name={channelTitle} /></div>
     <div>
        <p className="text-white font-semibold text-md pb-1">{title}</p>
        <p className="text-zinc-400 text-sm font-medium">{channelTitle}</p>
        
        <p className="text-zinc-400 text-sm font-medium py-0.5">
          {convertViewsCount(statistics.viewCount)} views
        </p>
     </div>
      </div>
        
       
    </div>
  );
};

export default VideoCard;
