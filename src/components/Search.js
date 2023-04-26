import React from 'react'
import { MdOutlineSearch } from 'react-icons/md'

const Search = () => {
  return (
    <div className="flex flex-row justify-center w-full">
      <input type='text' placeholder='Search' className="w-full px-4 py-2 bg-transparent text-white placeholder:text-gray-500 border border-[#303030] border-r-0 rounded-l-full font-normal text-sm outline-offset-2 outline-1 outline-blue-400" />
      <button className="bg-[#ffffff14] px-4 border border-[#303030] rounded-r-full"><MdOutlineSearch size={24} color="#fff" /></button>
    </div>
  )
}

export default Search