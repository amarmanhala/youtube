import React from "react";
import {
  convertViewsCount
} from "../utils/helper";
import AvatarInitials from "./AvatarInitials";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="m-3 w-[300px] sm:w-[360px]">
      <div className="rounded-xl overflow-hidden">
        <img
          className="w-full h-full bg-zinc-900"
          alt="fjehfj"
          src={thumbnails.medium.url}
          loading="lazy"
        />
      </div>
      <div className="flex pt-2 sm:pt-4 pb-2">
        <div className="w-[40px] mr-1 sm:mr-3">
          <AvatarInitials name={channelTitle} />
        </div>
        <div>
          <p className="text-white font-medium sm:font-semibold text-sm sm:text-md pb-1">{title}</p>
          <p className="text-zinc-400 text-xs sm:text-sm font-medium">{channelTitle}</p>

          <p className="text-zinc-400 text-xs sm:text-sm font-medium py-0.5">
            {convertViewsCount(statistics.viewCount)} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
