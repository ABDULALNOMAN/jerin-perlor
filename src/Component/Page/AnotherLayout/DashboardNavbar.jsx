import React, { useContext } from 'react'
import { FiMenu } from 'react-icons/fi';
import { callContext } from '../../Contexting/Contexting';

function DashboardNavbar() {
    const {change,user} = useContext(callContext)
  return (
    <div>
        <div className="navbar w-11/12 mx-auto ">
            <div className="flex-1">
                <h3 className="text-xl font-semibold italic uppercase">{change}</h3>
            </div>
            <div className="">
                <h3 className='lg:block hidden text-xl cursor-pointer'>{user?.displayName}</h3>
                <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
                    <FiMenu className=" w-8 h-8"></FiMenu>
                </label>
            </div>
            </div>
    </div>
  )
}

export default DashboardNavbar