import React from 'react'
import { useLoaderData } from 'react-router-dom'

function ServiceList() {
  const datas = useLoaderData()
  return (
    <div>
      <div className='flex items-center gap-8 pt-10 ml-5'>
          {datas.map((item )=>
             <div key={item?.index} className='w-96 '>
                <div className='border p-4 flex flex-col gap-4 rounded-2xl bg-white'>
                    <div className='flex items-start justify-between'>
                      <img className='w-12' src={item?.picture} alt="" />
                      <button className='btn btn-sm btn-warning'>pending</button>
                    </div>
                    <div>  
                      <h2 className='text-xl font-semibold'>{item?.heading}</h2>
                      <p className='text-md'>{item?.details}</p>
                    </div>
                </div>
             </div>
            )}
      </div>
    </div>
  )
}

export default ServiceList