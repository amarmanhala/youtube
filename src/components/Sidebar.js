import React, { useState } from "react";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineHome, MdOutlineMovie, MdOndemandVideo } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
    console.log(index);
  };

  return !isSidebarOpen ? null : (
    <div className="w-1/6 h-screen bg-zinc-950 p-6">
      <div>
        <ul className="text-white text-sm font-medium">
          {data.map((item, index) => {
            return (
              <Link to="/">
                <li
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`${
                    active === index ? "bg-zinc-900" : "bg-transparent"
                  } flex flex-row h-12 items-center hover:bg-zinc-900 rounded-xl cursor-pointer pl-3`}
                >
                  <div className="mr-6">{item.icon}</div>
                  {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
