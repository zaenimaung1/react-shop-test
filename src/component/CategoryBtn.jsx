import React from 'react'

const CategoryBtn = ({name , current}) => {
  return (
    <button  className={`border ${current &&"bg-black text-white"} border-gray-800 me-3 px-3 py-4 rounded`}>{name}</button>
  )
}

export default CategoryBtn