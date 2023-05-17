import { createSlice } from "@reduxjs/toolkit";

const nextPageTokenSlice = createSlice({
  name: 'nextPageToken',
  initialState: {
    pageToken: ""
  },
  reducers: {
    setNextPageToken: (state, action) => {
      state.pageToken = action.payload;
    }
  }
});

export default nextPageTokenSlice.reducer;

export const { setNextPageToken } = nextPageTokenSlice.actions;