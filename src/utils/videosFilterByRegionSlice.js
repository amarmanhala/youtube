import { createSlice } from "@reduxjs/toolkit";

const videosFilterByRegionSlice = createSlice({
  name: "filters",
  initialState: {
    regionCode: "US", //Default region code
  },
  reducers: {
    setRegionCode: (state, action) => {
      state.regionCode = action.payload
    }
  }
})

export default videosFilterByRegionSlice.reducer;

export const { setRegionCode } = videosFilterByRegionSlice.actions;