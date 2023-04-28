import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchSuggestions: {},
    search: false,
    searchQuery: ""
  },
  reducers: {
    cacheSearchSuggestions: (state, action) => {
      state.searchSuggestions = Object.assign(state.searchSuggestions, action.payload);
    },
    searchTrue: (state) => {
      state.search = true;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  },
});

export default searchSlice.reducer;

export const { cacheSearchSuggestions, searchTrue, setSearchQuery } = searchSlice.actions;
