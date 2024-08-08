import React from 'react'
import CategoryBtn from './CategoryBtn';
import Container from './Container';

const CatagorySection = () => {
const title = "Product Categories";
  const Categories =[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
    
  ];
  return (
    <section id="category-section" className="px-5">
        <Container>
        <p className="text-xl text-gray-500 mb-3">{title}</p>
        <div className='flex text-nowrap overflow-scroll btn-group'>
          <CategoryBtn name="all" current={true} />
          {Categories.map((catagory) => (

          <CategoryBtn key={catagory} name={catagory} current={false}/>
          )            
          )}
        </div>
        </Container>
      </section>
  )
}

export default CatagorySection