import React from 'react'

function AddService() {
  return (
    <div className='mx-6 pt-6'>
        <div className='border bg-white p-5 rounded-3xl capitalize'>
            <div className='flex gap-8'>
                <div className='w-full'> 
                    <div className='mb-3 flex flex-col gap-1'>
                        <label>service title</label>
                        <input className='input  focus:outline-none border border-slate-200' type="text " name="" id="" placeholder='Enter title'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label>descriptaion</label>
                        <textarea className='textarea focus:outline-none border border-slate-200' cols="30" rows="4" placeholder='Enter Description'></textarea>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <label>image</label>
                    <input type="file" name="" id="" />
                </div>
            </div>
        </div>
        <div className='w-full flex justify-end mt-2'>
            <button className='btn btn-warning btn-sm'>submit</button>
        </div>
    </div>
  )
}

export default AddService