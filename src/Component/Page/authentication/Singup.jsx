import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { callContext } from '../../Contexting/Contexting';
import { useNavigate } from 'react-router-dom';

const Singup = () => {
    const [error , setError] = useState("")
    const navigate = useNavigate()
    const { handleRegister,user } = useContext(callContext)
    const { register, handleSubmit ,formState:{errors},reset} = useForm()
    const onSubmit = data => {
        const item = data?.confirmPassword === data?.password
        if(item){
            handleRegister(data.email, data.password)
            .then((result) => {
                const user = result.user;
                if(user.uid){
                    navigate("/home")
                    reset()
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
        else{
            setError("pls correct your password")
        }
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
                                <input {...register('firstName',{required:{value:false, message:"pls add first name"}})} placeholder="First Name" className="input input-bordered w-full" />
                                <input {...register('lastName',{required:{value:false, message:'please add last name'}})} placeholder="Last Name" className="input input-bordered w-full" />
                                <input {...register('email',{required:{value:true, message:'please add email'}})} placeholder={errors?.email?.type === "required" && errors?.email?.message || "email"} className="input input-bordered w-full" />
                                <input {...register('password',{required:{value:true, message:'please add password'}})} placeholder={errors?.password?.type === "required" && errors?.password?.message || "password"}className="input input-bordered w-full" />
                                <input {...register('confirmPassword', {required:{value: true , message:"pls add confirm password"}})}placeholder={errors?.confirmPassword?.type === "required" && errors?.confirmPassword?.message || "confirm Password"} className="input input-bordered w-full" />
                                <small className='text-orange-600 font-semibold'>{error}</small>
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