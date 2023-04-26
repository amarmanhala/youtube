import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'


const Body = () => {
  return (
    <>
    <div className="flex flex-row w-full">
      <Sidebar />
      <MainContainer />
    </div>
    </>
  )
}

export default Body