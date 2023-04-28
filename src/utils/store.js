import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./sidebarToggleSlice";
import searchSlice from "./searchSlice";
import videosFilterByRegionSlice from "./videosFilterByRegionSlice";

const store = configureStore({
  reducer: {
    toggle: sidebarToggleSlice,
    search: searchSlice,
    filters: videosFilterByRegionSlice,
  },
});

export default store;
