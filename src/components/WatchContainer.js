import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/sidebarToggleSlice';
import { useSearchParams } from 'react-router-dom';

const WatchContainer = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));

  useEffect(() => {
  dispatch(closeSideBar());
  }, []);

  return (
    <div className="p-8 flex flex-row justify-center w-full">
      <iframe width="1200" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default WatchContainer