import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Page/Layout/Footer'
import Navbar from '../Page/Layout/Navbar'

function HomeMain() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default HomeMain