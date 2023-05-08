import React from 'react'

const FilterButton = ({ label, onClick, isActive, keyProps }) => {
  return (
    <button onClick={onClick} className={`${keyProps === isActive ? 'bg-white' : 'bg-zinc-800 text-white'} px-4 py-1.5 text-sm font-medium rounded-xl`}>{label}</button>
  )
}

export default FilterButton