import React from 'react';
import sin from '../../assets/login-concept-illustration_114360-739.avif'
import { Link } from 'react-router-dom';

const Registar = () => {
    return (
        <div className="max-w-[1040px] mx-auto mt-14 p-9 border">
            <h1 className="text-4xl font-bold text-center my-6">Register Now!</h1>
            <div className="grid md:grid-cols-2 mt-4 items-center gap-6">
                <img className="rounded-md w-96"  src={sin} alt="" />

                <div className="border px-5 py-3 rounded-md">
                    <label className="text-lg font-semibold" htmlFor="">Name</label>
                    <input className='p-3 w-full rounded-md bg-none border mb-3 mt-1' type="text" name='name' placeholder='Full Name' />
                    <label className="text-lg font-semibold" htmlFor="">Email</label>
                    <input className='p-3 w-full rounded-md bg-none border mb-3 mt-1' type="email" name='email' placeholder='Enter your email' /> <br />
                    <label className="text-lg font-semibold" htmlFor="">Password</label>
                    <input className='p-3 w-full rounded-md bg-none border mt-1 mb-6' type="password" name='password' placeholder='Enter your password' />
                    <button className="bg-indigo-300 font-bold w-full p-3 rounded-md">Register</button>
                    <p className="mt-4 text-center text-gray-800">Already have an account? <span className='text-blue-600 font-semibold'><Link to="/login">Login</Link></span></p>
                </div>

            </div>
        </div>
    );
};

export default Registar;