import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchSuggestions: {},
    search: false,
    searchQuery: "",
    searchResults: {}
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
    },
    cacheSearchResults: (state, action) => {
      state.searchResults = Object.assign(state.searchResults, action.payload);
    }
  },
});

export default searchSlice.reducer;

export const { cacheSearchSuggestions, searchTrue, setSearchQuery, cacheSearchResults } = searchSlice.actions;
