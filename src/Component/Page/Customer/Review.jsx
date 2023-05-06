import React from 'react'

function Review() {
  const reaviewData =(e)=>{
    e.preventDefault()
    const item = e.target
    const name = item.name.value
    const companyName = item.companyName.value
    const description = item.description.value
    const reviewData = {
      name,
      companyName,
      description
    }
    fetch("http://localhost:5000/reviewPost",{
      method:"POST",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(reviewData)
    })
    .then((res) => res.json())
    .then((data)=> console.log(data))
  }
  return (
    <div className='w-6/12 pt-10 ml-8'>
        <div>
            <form onSubmit={(e)=>reaviewData(e)} className='flex flex-col gap-5'>
                <input placeholder='your name' className='input rounded-sm  focus:outline-none w-full ' type="text" name="name" id="" />
                <input placeholder='Company’s name, Designation' className='input rounded-sm focus:outline-none w-full ' type="text" name="companyName" id="" />
                <textarea placeholder='Description' className=' textarea rounded-sm h-32 focus:outline-none w-full' name="description" id="" cols="30" rows="10"></textarea>
                <input className='btn w-32' type="submit" value="submit" />
            </form>
        </div>
    </div>
  )
}

export default Review