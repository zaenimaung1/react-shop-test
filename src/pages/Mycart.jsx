import React from 'react'
import Container from '../component/Container'
import Breakcumb from '../component/Breakcumb'
import CartSection from '../component/CartSection'


const Mycart = () => {
  return (
    <Container className="flex-grow">
    <Breakcumb currentPageTitle="My Cart" />
    <CartSection />
  </Container>
  )
}

export default Mycart