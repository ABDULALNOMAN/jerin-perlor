import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { callContext } from '../../Contexting/Contexting';

const Singup = () => {
    const { handleRegister } = useContext(callContext)
    const { register, handleSubmit ,formState:{errors}} = useForm()
    const onSubmit = data => {
        console.log(data)
        handleRegister(data.email, data.password)
        .then((result) => {
            const user = result.user;
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register('email',{required:true, message:'please submit'})} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                                <input {...register('password', {required: true})}placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;