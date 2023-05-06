import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import DashboardNavbar from '../Page/AnotherLayout/DashboardNavbar'
import logo from '../../assets/icons/logo.png'
import { CiGrid41, CiHardDrive } from 'react-icons/ci';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsPersonPlus } from 'react-icons/bs';
import { callContext } from '../Contexting/Contexting'


function AdminDashboard() {
  const {setChange} = useContext(callContext)
  useEffect(()=>{
    setChange("order list")
  },[])
  return (
    <div className="drawer drawer-mobile capitalize">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <DashboardNavbar></DashboardNavbar>
        <div className='bg-slate-200 h-screen'>
          <Outlet></Outlet>
        </div>
      </div> 
         <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <div className='menu text-base-content p-4 w-64 bg-white gap-8'>
                <Link to={"/home"}><img className='w-32 ml-3' src={logo} alt="" /></Link>
                <ul className="flex flex-col gap-1">
                  <li onClick={()=>setChange("order list")}><Link className='py-3 px-4 rounded-md' to={"/admindashborad"}><CiHardDrive></CiHardDrive>order list</Link></li>
                  <li onClick={()=>setChange("add service")}><Link className='py-3 px-4  rounded-md' to={"/admindashborad/addservice"}><AiOutlinePlus></AiOutlinePlus>add service</Link></li>
                  <li onClick={()=>setChange("make admin")}><Link className='py-3 px-4  rounded-md' to={"/admindashborad/makeadmin"}><BsPersonPlus></BsPersonPlus>make admin</Link></li>
                  <li><Link className='py-3 px-4  rounded-md' to={""}><CiGrid41></CiGrid41>manage service</Link></li>
                </ul>
            </div>
         </div>
    </div>
  )
}

export default AdminDashboard