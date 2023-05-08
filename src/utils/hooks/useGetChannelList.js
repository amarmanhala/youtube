import React, { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_LIST } from "../config";

const useGetChannelList = ({ channelID }) => {
  const [channel, setChannel] = useState();

  useEffect(() => {
    getChannelList(channelID);
  }, []);

  const getChannelList = async (channelID) => {
    const data = await fetch(YOUTUBE_CHANNEL_LIST + "&id=" + channelID);
    const json = await data.json();
    setChannel(json);
  };
  return channel;
};

export default useGetChannelList;
