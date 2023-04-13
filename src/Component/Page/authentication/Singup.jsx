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
            <div className="w-full">
                <div className="w-4/12 mx-auto">
                    <div className='px-10 bg-slate-400'>
                        <div className='py-6'>
                            <h2 className='text-2xl'>Create an account</h2>
                        </div>
                        <div className="w-full">
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                                <input {...register('email',{required:true, message:'please submit'})} placeholder="email" className="input input-bordered w-full" />
                                <input {...register('email',{required:true, message:'please submit'})} placeholder="email" className="input input-bordered w-full" />
                                <input {...register('email',{required:true, message:'please submit'})} placeholder="email" className="input input-bordered w-full" />
                                <input {...register('email',{required:true, message:'please submit'})} placeholder="email" className="input input-bordered w-full" />
                                <input {...register('password', {required: true})}placeholder="password" className="input input-bordered w-full" />
                                <div className="">
                                    <button type='submit' className="btn btn-primary w-full">Login</button>
                                </div>
                                <p>Already have an account? Login</p>
                            </form>
                        </div>
                    </div>
                    <div className="divider">OR</div>
                    <div>
                        <div className='border rounded-full flex '>
                            <p>icon</p>
                            <p>Continue with Facebook</p>
                        </div>
                        <div>
                            <p>icon</p>
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singup;