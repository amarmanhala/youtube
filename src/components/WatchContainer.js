import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeSideBar } from '../utils/sidebarToggleSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import AvatarInitials from './AvatarInitials';

const WatchContainer = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videos = useSelector(store => store.videos.videos);
  const currentVideo = videos.find(obj => obj?.id === searchParams.get("v"));



  console.log(currentVideo);

  

  useEffect(() => {
  dispatch(closeSideBar());
  }, []);

  return (
    <div className="p-8 flex flex-col justify-center w-full">
     
      <div className="my-0 flex justify-between"> 
      
      <div><iframe width="800" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div>
        <h1 className="text-white text-xl font-semibold">{currentVideo.snippet.title}</h1>
        <div className="flex py-3">
          <div className="flex items-center">
            <AvatarInitials name={currentVideo.snippet.channelTitle} />
            <p className="text-white font-extrabold leading-relaxed ml-2">{currentVideo.snippet.channelTitle}</p>
          </div>
          <button className="text-black font-semibold bg-zinc-100 rounded-full py-2 px-3 ml-6">Subscribe</button>
        </div>
      </div>
      </div>

      <LiveChat />
      </div>


     
     
      <CommentsContainer />
    </div>
  )
}

export default WatchContainer