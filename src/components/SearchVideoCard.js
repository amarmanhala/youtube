import React, { useEffect } from "react";

const SearchVideoCard = ({ data }) => {
  const { snippet } = data;
  const { title, publishedAt, thumbnails, channelTitle, description } = snippet;

  return (
    <div className="w-[90%] flex flex-row pb-3" >
      <div className="rounded-xl overflow-hidden w-[360px]">
        <img className="object-cover w-full h-full" alt={thumbnails.title} src={thumbnails.high.url} />
      </div>
      <div className="pl-4">
        <p className="text-white font-semibold text-md pb-1">{title}</p>
        <p className="text-zinc-400 text-sm font-medium">{channelTitle}</p>
        <p className="text-zinc-400 text-xs font-medium pt-4">{description}</p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
