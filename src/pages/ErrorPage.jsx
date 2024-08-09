import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-3xl font-bold">404 Not Found</h1>
        <p className="w-[300px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi
          obcaecati molestias. Nesciunt omnis, magni et dolor corrupti incidunt
          a dolorum quod sint quasi ipsam iure sunt dolore enim natus?
        </p>
        <Link to={"/"} className="border w-full p-3 bg-gray-600 text-white">Return To Home</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
