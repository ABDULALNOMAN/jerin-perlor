import React from 'react'

function MakeAdmin() {
  return (
    <div className='capitalize p-10'>
        <div className='pt-10 px-10  rounded-3xl h-52 bg-white'>
            <label className='font-semibold'>email</label>
            <div className='flex gap-4 '>
                <input placeholder='jon@gamil.com' className='input focus:outline-none w-6/12 border border-slate-200' type="email" name="" id="" />
                <input className='btn btn-warning' type="submit" value="submit" />
            </div>
        </div>
    </div>
  )
}

export default MakeAdmin