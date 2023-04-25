import React from 'react';
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full">
      <div><MdOutlineMenu /></div>
      <div>Logo</div>
      <div>user logo</div>
    </header>
  )
}

export default Header