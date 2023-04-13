import React from 'react';

const Information = () => {
    return (
        <div className='grid place-items-center pt-20 pb-12 bg-slate-400'>
            <div className='mb-16'>
                <h2 className='text-4xl font-bold
                 text-center'>Let us handle your <br /> project,professionally.</h2>
            </div>
            <div>
                <div className='flex gap-4'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className='flex gap-4 my-4'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
                <div className='text-center mt-4'>
                    <button className='btn btn-warning'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Information;