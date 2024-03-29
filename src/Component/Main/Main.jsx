import React, { useContext } from 'react'
import logo from './../../assets/icons/logo.png'
import google from '../../assets/icons/Group 573.png'
import { Link, useNavigate } from 'react-router-dom'
import { callContext } from '../Contexting/Contexting'

function Main() {
    const {user} = useContext(callContext)
    const navigate = useNavigate()
    const {handleGoogleAuth} = useContext(callContext)
    const OnGoogleClick =()=>{
        handleGoogleAuth()
        .then((result )=>{
            const user = result.user
        })
        .catch(error=>console.log(error))
    }
    if(user?.uid){
        navigate("/home")
    }

  return (
    <div className='w-full min-h-screen grid place-items-center text-center'>
        <div className='h-80 flex flex-col justify-between items-center'>
            <div className=''>
                <img className='w-40 mx-auto' src={logo} alt="" />
            </div>
            <div className=' flex flex-col justify-center items-center h-full '>
                <h2 className='w-full text-3xl mx-auto font-bold
                '>logIn with</h2>
                <div onClick={()=>OnGoogleClick()} className='flex items-center justify-between border border-slate-700 rounded-full w-[457px] h-12 my-4'>
                    <img className='h-full' src={google} alt="" />
                    <h3 className='justify-self-center w-full font-semibold'>Continue with Google</h3>
                </div>
                <p className='font-semibold'>Don’t have an account?<Link to={"/home/signup"} className='text-pink-600 hover:underline'> Create an account</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Main