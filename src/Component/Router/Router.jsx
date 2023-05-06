import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../Main/AdminDashboard";
import DashboardCustomer from "../Main/DashboardCustomer";
import HomeMain from "../Main/HomeMain";
import Main from "../Main/Main";
import AddService from "../Page/Admin/AddService";
import MakeAdmin from "../Page/Admin/MakeAdmin";
import OrderList from "../Page/Admin/OrderList";
import Singup from "../Page/authentication/Singup";
import Book from "../Page/Customer/Book";
import Review from "../Page/Customer/Review";
import ServiceList from "../Page/Customer/ServiceList";
import Home from "../Page/Home/Home";
import Error from "../Page/Error";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>
    },
    {
        path:"/home",
        element:<HomeMain></HomeMain>,
        children:([
            {
                path:"/home",
                element:<Home></Home>,
            },
            {
                path:"/home/signup",
                element:<Singup></Singup>
            }
        ])
    },
    {
        path:"/customerdashboard",
        element:<DashboardCustomer></DashboardCustomer>,
        children:([
            {
                path:"/customerdashboard",
                element:<Book></Book>
            },
            {
                path:"/customerdashboard/servicelist",
                element:<ServiceList></ServiceList>,
                loader:(()=> fetch("http://localhost:5000/service"))
            },
            {
                path:"/customerdashboard/review",
                element:<Review></Review>
            }
        ])
    },
    {
        path:"/admindashborad",
        element:<AdminDashboard></AdminDashboard>,
        children:([
            {
                path:"/admindashborad",
                element:<OrderList></OrderList>
            },
            {
                path:"/admindashborad/addservice",
                element:<AddService></AddService>
            },
            {
                path:"/admindashborad/makeadmin",
                element:<MakeAdmin></MakeAdmin>
            }
        ])
    },
    {
        path:"*",
        element:<Error></Error>
    }

    
    
])
export default router