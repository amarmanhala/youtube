import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./sidebarToggleSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
reducer: {
  toggle: sidebarToggleSlice,
  search: searchSlice
}
});

export default store;