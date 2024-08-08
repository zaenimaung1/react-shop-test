import Container from './Container'
import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <Container>
      <footer className='mx-5 my-2 bg-black text-white text-center py-2 mt-auto'>
      @ {date.getFullYear()} MMS IT.All rights reserved.
    </footer>
    </Container>
  )
}

export default Footer