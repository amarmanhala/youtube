import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { useSelector } from "react-redux";

const data = [
  {
    label: "Home",
    icon: <MdOutlineHome />,
  },
  {
    label: "HomShortse",
    icon: <MdOutlineHome />,
  },
  {
    label: "Subscriptions",
    icon: <MdOutlineHome />,
  },
  {
    label: "Library",
    icon: <MdOutlineHome />,
  },
  {
    label: "History",
    icon: <MdOutlineHome />,
  },
  {
    label: "Your videos",
    icon: <MdOutlineHome />,
  },
  {
    label: "Your movies",
    icon: <MdOutlineHome />,
  },
  {
    label: "Watch later",
    icon: <MdOutlineHome />,
  },
];

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.toggle.isSidebarOpen);

  return !isSidebarOpen ? null : (
    <div className="w-[250px] h-screen bg-zinc-950 p-6">
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
