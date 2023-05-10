import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchVideosContainer from "./SearchVideosContainer";
import SkeltonVideoCards from "./SkeltonVideoCards";

const VideoCardContainer = () => {
  const [videos, setVideos] = useState([]);

  const filterByRegion = useSelector((store) => store.filters.regionCode);

const [pageToken, setPageToken] = useState("");
  useEffect(() => {
    getPopularVideos();
  }, [filterByRegion]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= 
      document.documentElement.scrollHeight) {
         getPopularVideosWithToken();
         console.log(videos);
    }
    // console.log("Scroll Height  ", document.documentElement.scrollHeight);
    // console.log("Inner Height", window.innerHeight);
    // console.log("Scroll Top", document.documentElement.scrollTop);
  }

  const getPopularVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_POPULAR_VIDEO_LIST + filterByRegion + "&maxResults=15");
      const json = await data.json();
      ///console.log(json.nextPageToken);
     // const nextPageToken = json.nextPageToken;
      setVideos(json.items);
      console.log(json.nextPageToken);
      setPageToken(json.nextPageToken);
     // console.log(json);
      //console.log(videos);
    } catch (err) {
      console.log(err);
    }
  };

  const getPopularVideosWithToken = async () => {
    try {
      const data = await fetch(YOUTUBE_POPULAR_VIDEO_LIST + filterByRegion + "&maxResults=6&pageToken=" + pageToken);
      const json = await data.json();
      //console.log(json.nextPageToken);
     // const nextPageToken = json.nextPageToken;
      setVideos(prevVideos => [...prevVideos, ...json.items]);
      setPageToken(json.pageToken);
      
    } catch (err) {
      console.log(err);
    }
  };
  

  return videos.length === 0 ? (
    <SkeltonVideoCards />
  ) : (
    <div className="flex flex-row flex-wrap">
      { videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard data={video} />
          </Link>
        );
      }) }
    </div>
  );

  
};

export default VideoCardContainer;
