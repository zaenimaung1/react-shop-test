import Container from './Container'
import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <Container>
      <footer className='mx-5 mt-auto bg-black text-white text-center py-2'>
      @ {date.getFullYear()} MMS IT.All rights reserved.
    </footer>
    </Container>
  )
}

export default Footer