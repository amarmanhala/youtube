import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: [],
  reducers: {
    getVideos: (state, action) => {
      state = action.payload
    }
  }
})

export default videosSlice.reducer;

export const { getVideos } = videosSlice.actions;