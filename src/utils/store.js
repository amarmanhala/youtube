import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./sidebarToggleSlice";
import searchSlice from "./searchSlice";
import videosFilterByRegionSlice from "./videosFilterByRegionSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    toggle: sidebarToggleSlice,
    search: searchSlice,
    filters: videosFilterByRegionSlice,
    chat: chatSlice
  },
});

export default store;
