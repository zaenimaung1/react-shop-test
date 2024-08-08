import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-5">
      <Container>
        <div className="flex justify-between items-center py-5">
          <Link to={"/"} className="text-3xl font-bold">Online Shop</Link>
          <Link to={"/my-cart"} className="border border-black px-4 py-2 relative">
            My Cart
            <span className="inline-block bg-red-600 text-white px-3 py-1 text-xs absolute top-0 right-1 translate-x-1/2 -translate-y-1/2">
              1
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
