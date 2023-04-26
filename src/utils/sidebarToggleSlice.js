import { createSlice } from "@reduxjs/toolkit";

const sidebarToggle = createSlice({
  name: "sidebarToggle",
  initialState: {
    isSidebarOpen: true
  },
  reducers: {
    toggle: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    }
  }
})
export default sidebarToggle.reducer;

export const { toggle } = sidebarToggle.actions;