import React from 'react'
import ButtonList from './ButtonList'
import VideoCardContainer from './VideoCardContainer'
import { useSelector } from 'react-redux'
import SearchVideosContainer from './SearchVideosContainer'

const MainContainer = () => {
  const search = useSelector(store => store.search.search);
  return (
    <div className="w-4/5">
      {!search ? <><ButtonList /><VideoCardContainer /></> : <SearchVideosContainer />} 
    </div>
  )
}

export default MainContainer