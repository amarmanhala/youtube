import React, { useEffect } from "react";

const SearchVideoCard = ({ data }) => {
  const { snippet } = data;
  const { title, publishedAt, thumbnails, channelTitle } = snippet;
 

  return (
    <div className="p-4 w-full flex flex-row">
      <div className="rounded-xl overflow-hidden">
        <img alt="fjehfj" src={thumbnails.medium.url} />
      </div>
      <div>
        <p className="text-white font-semibold text-md pt-2.5 pb-1">{title}</p>
        <p className="text-zinc-400 text-sm font-medium">{channelTitle}</p>
      </div>
     
    </div>
  );
};

export default SearchVideoCard;
