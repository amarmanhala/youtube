import { createSlice } from "@reduxjs/toolkit";

const nextPageTokenSlice = createSlice({
  name: 'nextPageToken',
  initialState: "",
  reducers: {
    setNextPageToken: (state, action) => {
      state = action.payload;
    }
  }
});

export default nextPageTokenSlice.reducer;

export const { setNextPageToken } = nextPageTokenSlice.actions;