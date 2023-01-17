import {
    createBrowserRouter
} from "react-router-dom";
import Login from "../authentication/Login";
import Singup from "../authentication/Singup";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import PizzaSlice from "../PizzaSlice/PizzaSlice";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
        ])
    }
])

export default router