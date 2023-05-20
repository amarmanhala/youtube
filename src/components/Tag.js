import React from 'react'

const Tag = ({ tag }) => {
  return (
    <span className="text-blue-500">#{tag.replace(/\s/g, "")}&nbsp;</span>
  )
}

export default Tag