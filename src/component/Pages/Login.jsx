import React from 'react';
import log from '../../assets/sign-page-abstract-concept-illustration_335657-2242.avif'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="max-w-[1040px] mx-auto mt-14 rounded border p-9">
            <h1 className="text-center text-4xl font-bold">Login</h1>

            <div className="grid md:grid-cols-2 gap-10 items-center mt-8">
                <img className="rounded-md w-96" src={log} alt="" />
                <div className="border px-5 py-3 rounded-md">
                    <label className="text-lg font-semibold" htmlFor="">Email</label>
                    <input className='p-3 w-full rounded-md bg-none border mb-3 mt-1' type="email" name='email' placeholder='Enter your email'/> <br />
                    <label className="text-lg font-semibold" htmlFor="">Password</label>
                    <input className='p-3 w-full rounded-md bg-none border mt-1' type="password" name='password' placeholder='Enter your password' />
                    <p className="text-blue-600 underline my-4">Forget password</p>
                    <button className="bg-indigo-300 font-bold w-full p-3 rounded-md">Log In</button>
                    <p className="mt-4 text-center text-gray-800">Don't have account? <span className='text-blue-600 font-semibold'><Link to="/register">Register Now!</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;