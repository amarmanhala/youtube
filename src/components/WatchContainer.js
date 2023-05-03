import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/sidebarToggleSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchContainer = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  

  useEffect(() => {
  dispatch(closeSideBar());
  }, []);

  return (
    <div className="p-8 flex flex-col justify-center w-full">
     
      <div className="my-0 flex justify-between"> <iframe width="800" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <LiveChat />
      </div>

     
     
      <CommentsContainer />
    </div>
  )
}

export default WatchContainer