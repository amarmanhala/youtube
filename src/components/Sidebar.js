import React from "react";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineWatch } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineHome, MdOutlineMovie, MdOndemandVideo } from "react-icons/md";
import { useSelector  } from "react-redux";

const data = [
  {
    label: "Home",
    icon: <MdOutlineHome size={24} />,
  },
  {
    label: "Shorts",
    icon: <MdOutlineMovie size={24} />,
  },
  {
    label: "Subscriptions",
    icon: <MdOutlineSubscriptions size={24} />,
  },
  {
    label: "Library",
    icon: <MdOutlineVideoLibrary size={24} />,
  },
  {
    label: "History",
    icon: <MdOutlineHistory size={24} />,
  },
  {
    label: "Your videos",
    icon: <MdOndemandVideo size={24} />,
  },
  {
    label: "Your movies",
    icon: <MdOutlineMovie size={24} />,
  },
  {
    label: "Watch later",
    icon: <MdOutlineWatchLater size={24} />,
  },
];

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.toggle.isSidebarOpen);

  return !isSidebarOpen ? null : (
    <div className="w-1/5 h-screen bg-zinc-950 p-6 ">
      <div>
        <ul className="text-white text-sm font-medium">
          {data.map((item) => {
            return (
              <li className="flex flex-row pb-6 items-center">
                <div className="mr-6">{item.icon}</div>
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
