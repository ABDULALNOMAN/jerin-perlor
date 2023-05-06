import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import DashboardNavbar from '../Page/AnotherLayout/DashboardNavbar'
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { CiHardDrive } from 'react-icons/ci';
import { RiMessage2Line } from 'react-icons/ri';
import logo from "../../assets/icons/logo.png"
import { callContext } from '../Contexting/Contexting';

function DashboardCustomer() {
    const {setChange} = useContext(callContext)
    useEffect(()=>{
        setChange("Book")
    },[])
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <DashboardNavbar></DashboardNavbar>
        <div className='bg-slate-200 h-full'>
          <Outlet></Outlet>
        </div>
      </div> 
         <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <div className='menu p-4 w-64  text-base-content bg-white gap-8'>
                <Link to={"/home"}><img className='w-32 h-fit' src={logo} alt=""/></Link>
                <ul className="">
                  <li onClick={()=>setChange("Book")}><Link to={"/customerdashboard"}><HiOutlineShoppingCart></HiOutlineShoppingCart>Book</Link></li>
                  <li onClick={()=>setChange("booking")}><Link to={"/customerdashboard/servicelist"}><CiHardDrive></CiHardDrive>Booking list</Link></li>
                  <li onClick={()=>setChange("Review")}><Link to={"/customerdashboard/review"}><RiMessage2Line></RiMessage2Line>Review</Link></li>
                </ul>
            </div>
         </div>
    </div>
  )
}

export default DashboardCustomer