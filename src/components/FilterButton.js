import React from 'react'

const FilterButton = ({ label }) => {
  return (
    <button className="px-4 py-1.5 bg-zinc-800 text-white text-sm font-medium rounded-xl">{label}</button>
  )
}

export default FilterButton