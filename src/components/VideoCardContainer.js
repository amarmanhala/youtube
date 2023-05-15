import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SkeltonVideoCards from "./SkeltonVideoCards";
import useGetPopularVideos from "../utils/hooks/useGetPopularVideos";

const VideoCardContainer = () => {
  const [videos, setVideos] = useState([]);

  const movies = useGetPopularVideos();

  const [pageToken, setPageToken] = useState("");

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      getPopularVideosWithToken();
      console.log(videos);
    }
  };

  const getPopularVideosWithToken = async () => {
    try {
      console.log(pageToken);
      const data = await fetch(
        YOUTUBE_POPULAR_VIDEO_LIST +
          "&maxResults=6&pageToken=" +
          pageToken
      );
      const json = await data.json();
      setPageToken(json.nextPageToken);
      setVideos((prevVideos) => [...prevVideos, ...json.items]);

      console.log("Tokem next", json.nextPageToken);
    } catch (err) {
      console.log(err);
    }
  };

  return movies.length === 0 ? (
    <SkeltonVideoCards />
  ) : (
    <div className="flex flex-row flex-wrap justify-center">
      {movies.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoCardContainer;
