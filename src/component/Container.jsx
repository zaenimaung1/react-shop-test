import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`xl:w-[1200px] w-full mx-auto`}>{children}
</div>
  )
}

export default Container