import React from 'react'
import ProductCard from './ProductCard'
import Container from './Container'
import Product from '../data/ProductDetails'

const ProductSection = () => {
    
  return (
   
     <section className='px-5'>

    <Container>
    <p className="text-xl text-gray-500 m-3">Available Product Lists</p>
    <div className='lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid gap-5'>
       {
        Product.map((product)=> 
            <ProductCard key={product.id} product={product}/> 
       )
       }
    </div>
    </Container>
    
    </section>
 
  )
}

export default ProductSection