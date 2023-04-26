import React from 'react'

const FilterButton = ({ label }) => {
  return (
    <button className="px-4 py-1.5 bg-white text-black text-sm font-medium rounded-xl">{label}</button>
  )
}

export default FilterButton