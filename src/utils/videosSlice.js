import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
  },

  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export default videosSlice.reducer;
export const { setVideos } = videosSlice.actions;
