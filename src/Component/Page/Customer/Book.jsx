import React, { useContext } from 'react'
import { BsCreditCardFill, BsPaypal } from 'react-icons/bs';
import { callContext } from '../../Contexting/Contexting';

function Book() {
   const {user} =useContext(callContext)
   console.log(user)
  return (
    <div >
      <div className='md:w-5/12 w-11/12 m-auto md:pt-10 pt-8 md:ml-10 capitalize '>
         <div className='flex flex-col gap-5'>
            <input className=' rounded-md focus:outline-none input w-full' type="text" name="" id="" readOnly placeholder={user?.displayName} />
            <input className=' rounded-md input w-full focus:outline-none' type="text" name="" id="" readOnly placeholder={user?.email} />
            <select className='input rounded-md focus:outline-none' name="service" id="">
               <option value="item" key="">Anti Age Face Treatment</option>
               <option value="item" key="">Skin Care Treatment</option>
            </select>
            <div className=''>
                  <h2 className='mb-4 font-semibold'>pay with</h2>
                  <div className='flex gap-7'>
                     <div className='flex gap-2 items-center'>
                        <input type="radio" name="sdfsdf" className='radio-sm radio' id="" />
                        <BsCreditCardFill className='text-xl text-sky-700'></BsCreditCardFill>
                        <p>Creadit Card</p>
                     </div>
                     <div className='flex gap-2 items-center'>
                        <input className='radio-sm radio' type="radio" name="sdfsdf" id="" />
                        <BsPaypal className='text-sky-700 text-xl'></BsPaypal>
                        <p>paypal</p>
                     </div>
                  </div>
            </div>
            <input placeholder='Card Number' className='border rounded-md input focus:outline-none' type="number" name="" id="" />
            <div className='flex gap-3'>
                  <input className=' rounded-md focus:outline-none input w-full' type="date" name="" id="" />
                  <input placeholder='CVC' className=' rounded-md  focus:outline-none  input w-full' type="text" name="" id="" />
            </div>
            <div className='flex items-center justify-between'>
               <p className='text-sm'>Your Service  charged will be $1000</p>
               <button className='btn-warning btn w-24'>pay</button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Book