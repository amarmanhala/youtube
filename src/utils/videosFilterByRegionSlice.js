import { createSlice } from "@reduxjs/toolkit";

const videosFilterByRegionSlice = createSlice({
  name: "filters",
  initialState: {
    regionCode: "CA" //Default region code
  },
  reducers: {
    setRegionCode: (state, action) => {
      state.regionCode = action.payload
    }
  }
})

export default videosFilterByRegionSlice.reducer;

export const { getVideos } = videosFilterByRegionSlice.actions;