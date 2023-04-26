import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'


const Body = () => {
  return (
    <>
    <div className="flex flex-row w-full bg-zinc-950">
      <Sidebar />
      <MainContainer />
    </div>
    </>
  )
}

export default Body