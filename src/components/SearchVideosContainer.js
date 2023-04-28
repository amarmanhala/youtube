import React, { useEffect, useState } from 'react'
import useGetVideosBySearch from '../utils/hooks/useGetVideosBySearch';
import { useSelector } from 'react-redux';

const SearchVideosContainer = () => {
 const searchQuery = useSelector(store => store.search.searchQuery);
 console.log(searchQuery);
 const videos = useGetVideosBySearch(searchQuery);
  return (
    <div>SearchVideosContainer</div>  
  )
}

export default SearchVideosContainer;