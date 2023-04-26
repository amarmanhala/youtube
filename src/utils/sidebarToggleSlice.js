import { createSlice } from "@reduxjs/toolkit";

const sidebarToggle = createSlice({
  name: "sidebarToggle",
  initialState: {
    isSidebarOpen: true
  },
  reducers: {
    toggleActionForSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSideBar: (state) => {
      state.isSidebarOpen = false;
    }
  }
})
export default sidebarToggle.reducer;

export const { toggleActionForSidebar, closeSideBar } = sidebarToggle.actions;