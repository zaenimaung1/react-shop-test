import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Mycart from "../pages/Mycart";
import Product_detail from "../pages/Product_detail";
import MainLayout from "../component/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"my-cart",
                element:<Mycart/>
            },
            {
                path:"product-detail/:productId",
                element:<Product_detail/>
            },
        ]
    }
])
export default router;