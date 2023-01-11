import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { callContext } from '../../Contexting/Contexting';

const Navbar = () => {
    // const { user,logOut} = useContext(callContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch((error) => {
                console.log(error)
             })
    }
    const route = <>
            <li><a>Item 1</a></li>
            {/* {user?.email?<li onClick={handleLogOut}><Link>signOut</Link></li>:<><li><Link to={'/login'}>login</Link></li>
            <li><Link to={'/signup'}>singup</Link></li></>} */}
        </>
    
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {route}
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {route}
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Get started</a>
        </div>
    </div>
    );
};

export default Navbar;