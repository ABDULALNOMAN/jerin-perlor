import React from 'react';

const Information = () => {
    return (
        <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
        </div>
    );
};

export default Information;