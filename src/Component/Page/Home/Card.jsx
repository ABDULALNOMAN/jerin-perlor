import React, { useEffect, useState } from 'react';

const Card = () => {
    const [cardItem ,useCardItem] = useState([])
    useEffect(()=>{
       async function cardItemFunc (){
            try{
                const res = await fetch("http://localhost:5000/carditem")
                const data = await res.json()
                useCardItem(data)
            }
            catch(error){
                console.log(error)
            }
        }
        cardItemFunc()
    },[])
    return (
        <div>
            <div className='text-center'>
                <div className='my-16'>
                    <h2 className='text-3xl'>Our Awesome Services</h2>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-8 place-items-center w-11/12 mx-auto'>
                    {cardItem.map(item=>(
                        <div className="card w-full bg-slate-200 shadow-xl h-full">
                            <div className="card-body justify-center items-center">
                                <img className='w-20 ' src={item?.picture}  alt="image" />
                                <h2 className="card-title">{item?.title}</h2>
                                <p>{item?.price}</p>
                                <p>{item?.data}</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Explore more</button>
                                </div>
                            </div>
                        </div>
                    ))}    
                </div>
                <div className='text-center my-12'>
                    <button className='btn btn-warning'>Explore more</button>
                </div>
            </div>
        </div>
    );
};

export default Card;