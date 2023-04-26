import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store.toggle.isSidebarOpen);

  return !isSidebarOpen ? null : (
    <div className="w-[240px] bg-zinc-950">Sidebar</div>
  );
};

export default Sidebar;
