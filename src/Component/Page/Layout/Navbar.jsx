import React, { useContext } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.png'

const Navbar = () => {
    const handleLogOut = () => {
        logOut()
            .then(() => {
            })
            .catch((error) => {
                console.log(error)
             })
    }
    const route = <>
            <li><a>Home</a></li>
            <li><a>Our Portfolio</a></li>
            <li><a>Our Team</a></li>
            <li><a>Contact Us</a></li>
            <li><Link to={"/customerdashboard"}>customer</Link></li>
            <li><Link to={"/admindashborad"}>admin</Link></li>
            <li><Link className='btn-style w-28'>login</Link></li>
        </>
    
    return (
        <div className="navbar bg-white px-6">
            <div className="navbar-start">
                <a className=" normal-case text-xl">
                    <img className='w-36 h-fit' src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-end">
                <div className='hidden lg:flex'>
                    <ul className="menu menu-horizontal p-0">
                        {route}
                    </ul>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FiMenu className='text-3xl'></FiMenu>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0">
                        {route}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;