import {
    createBrowserRouter
} from "react-router-dom";
import Login from "../authentication/Login";
import Singup from "../authentication/Singup";
import Home from "../Home/Home";
import Main from "../Layout/Main";

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
            {
                path: '/signup',
                element:<Singup></Singup>
            }
        ])
    }
])

export default router