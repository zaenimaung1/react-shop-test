import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router";
import router from "./routes/router";




// const Categories =[
//     "electronics",
//     "jewelery",
//     "men's clothing",
//     "women's clothing"
//   ]


const root = document.querySelector("#root");


//view - react node
// const app =createElement("div",{id:"category-section",className:"p-5"},
// createElement("p",null,"Product Categories"),
// createElement("div",null,...Categories.map((catagory)=>createElement("button",{
//   className:"border border-black px-4 py-3 me-2"
// },catagory)))
// );

//render
createRoot(root).render(<RouterProvider router={router}/>)


// const title = document.createElement("p");
// title.innerText = "Product Categories";
// title.classList.add("text-2xl","text-gray-500","mb-3");
// root.append(title);
// const catBtn = (cateName)=> {
//     const btn = document.createElement("button");
//     btn.innerText=cateName;
//     btn.classList.add("border","px-4","py-3" ,"me-2","border-black")
//     return btn;
// };
// Categories.forEach((catagory)=>{root.append(catBtn(catagory))})
