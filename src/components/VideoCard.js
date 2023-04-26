import React, { useEffect } from "react";

const VideoCard = ({ data }) => {
  console.log(data);

  const { snippet, statistics } = data;
  const { title, publishedAt, thumbnails } = snippet;
  const { viewCount, likeCount } = statistics;

  return (
    <div>
      <img alt="fjehfj" src={thumbnails.medium.url} />
    </div>
  );
};

export default VideoCard;
