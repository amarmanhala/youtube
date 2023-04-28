import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./sidebarToggleSlice";
import searchSlice from "./searchSlice";
import videosSlice from "./videosSlice";

const store = configureStore({
reducer: {
  toggle: sidebarToggleSlice,
  search: searchSlice,
  videos: videosSlice
}
});

export default store;