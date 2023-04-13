import React from 'react'
import { AiFillStar } from 'react-icons/ai';

function TestimonialItem({data}) {
    const item = []
    for(let i = 0; i<= 5;i++ ){
        item.push(<AiFillStar/>)
    }
  return (
    <div>
        <div className='h-full flex flex-col gap-3 p-5 shadow-md shadow-slate-500'>
            <div className='flex items-center justify-start gap-3'>
                <img className='w-10 h-10 rounded-full' src={data?.picture} alt="picture" />
                <div>
                    <h4 className='font-semibold'>{data?.name}</h4>
                    <div className='flex items-center justify-start gap-2'>
                        <h6>{data?.position}</h6>
                        <h6>{data?.company}</h6>
                    </div>
                </div>
            </div>
            <p>{data?.comment}</p>
            <div className='flex items-center justify-start text-amber-600'>{item}</div>
        </div>
    </div> 
  )
}

export default TestimonialItem