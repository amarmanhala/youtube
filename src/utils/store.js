import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./sidebarToggleSlice";
import searchSlice from "./searchSlice";
import videosFilterByRegionSlice from "./videosFilterByRegionSlice";
import chatSlice from "./chatSlice";
import videosSlice from "./videosSlice";
import nextPageTokenSlice from "./nextPageTokenSlice";

const store = configureStore({
  reducer: {
    toggle: sidebarToggleSlice,
    search: searchSlice,
    filters: videosFilterByRegionSlice,
    pageToken: nextPageTokenSlice,
    chat: chatSlice,
    videos: videosSlice
  },
});

export default store;
