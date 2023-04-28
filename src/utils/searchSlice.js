import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchSuggestions: {},
    search: false
  },
  reducers: {
    cacheSearchSuggestions: (state, action) => {
      state.searchSuggestions = Object.assign(state.searchSuggestions, action.payload);
    },
    searchTrue: (state) => {
      state.search = true;
    }
  },
});

export default searchSlice.reducer;

export const { cacheSearchSuggestions, searchTrue } = searchSlice.actions;
