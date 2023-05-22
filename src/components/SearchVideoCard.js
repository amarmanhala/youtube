import React, { useEffect } from "react";
import AvatarInitials from "./AvatarInitials";
import { formatDaysFromDate } from "../utils/helper";

const SearchVideoCard = ({ data }) => {
  const { snippet } = data;
  const { title, publishedAt, thumbnails, channelTitle, description } = snippet;

  return (
    <div className="w-full sm:w-[90%] flex flex-col items-center sm:flex-row pb-3">
      <div className="rounded-xl overflow-hidden w-[360px] h-[200px]">
        <img
          className="object-cover w-full h-full"
          alt={thumbnails.title}
          src={thumbnails.high.url}
        />
      </div>
      <div className="pl-4">
        <p className="text-white font-medium sm:font-semibold text-sm sm:text-md pb-1 pt-2 sm:pt-0">{title}</p>
        <p className="text-zinc-400 text-xs sm:text-sm font-medium sm:ml-3">
          {formatDaysFromDate(publishedAt)}
        </p>
        <div className="flex items-center pt-2 sm:pt-0">
          <AvatarInitials name={channelTitle} />
          <p className="text-zinc-400 text-xs sm:text-sm font-medium sm:ml-3 ml-1">
            {channelTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
