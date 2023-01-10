import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>login</h2>
            <button className='btn btn-primary'>login click</button>
            <p>dont have a account <Link className='text-blue-500' to={"/signup"}>create an account</Link></p>
        </div>
    );
};

export default Login;