import React from "react";
import Rating from "./Rating";
import Container from './Container'
import { Link } from "react-router-dom";


const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
 
  return (
   
      <Link to={`product-detail/${id}`} className="border border-black p-5 flex flex-col gap-5  items-start">
      <img src={image} alt="" className="h-40 " />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate}/>
      <div className="flex justify-between items-end w-full">
        <p>{price}</p>
        <button className="border border-black px-3 py-2 text-sm">
          Add Cart
        </button>
      </div>
    </Link>
  
  );
};


export default ProductCard;
