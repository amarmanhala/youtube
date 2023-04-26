import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./sidebarToggleSlice";

const store = configureStore({
reducer: {
  toggle: sidebarToggleSlice
}
});

export default store;