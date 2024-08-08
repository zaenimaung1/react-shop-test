import React from "react";
import { useParams } from "react-router-dom";
import Product from "../data/ProductDetails";
import Container from "../component/Container";
import Rating from "../component/Rating";
import Breakcumb from "../component/Breakcumb";

function Product_detail() {
  const { productId } = useParams();

  const currentProduct = Product.find((product) => product.id == productId);

  return (
    <Container>
      <Breakcumb currentPageTitle={"Product-detail"}/>
      <div className=" border border-black p-20 ">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              alt=""
              className="w-3/4 block mx-auto"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-bold">{currentProduct.title}</h3>
            <p className="bg-gray-500 text-gray-200 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between w-full">
            <p>Price : {currentProduct.price}</p>
            <button className="border border-black px-3 py-2 text-sm">
          Add Cart
        </button>
          </div>
          </div>
          
        </div>
      </div>
    </Container>
  );
}

export default Product_detail;
