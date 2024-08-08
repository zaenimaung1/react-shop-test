import React from 'react'
import { Link } from 'react-router-dom'

function Breakcumb({currentPageTitle}) {
  return (
        <div className='w-full gap-5 flex my-3'>
            <Link to={"/"} className='text-gray-400'>Home</Link>
            <span>/</span>
            <p>{currentPageTitle}</p>
        </div>
  )
}

export default Breakcumb