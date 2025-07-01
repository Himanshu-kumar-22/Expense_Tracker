import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#b7c5e0] to-[ #dce3f4]">
            <div className="text-left p-6 max-w-md w-full">
                <h1 className="text-4xl font-bold text-[#1d3557]">SIGN IN</h1>
                <p className="mt-2 text-[#333]">
                    Don’t have an account ? <span className="font-bold text-[#1d3557]">Sign up</span>
                </p>

                <div className="mt-6 bg-[#5271ff45] rounded-2xl p-6 shadow-md backdrop-blur-sm">
                    <label className="block mb-3 text-white">Mobile Number</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-md bg-white outline-none text-black mb-4"
                        placeholder="Enter mobile number"
                    />

                    <div className="flex justify-between items-center mb-3">
                        <label className="text-white">Password</label>
                        <span className="text-white cursor-pointer">Forgot Password ?</span>
                    </div>
                    <div className="relative mb-6">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="w-full px-4 py-2 rounded-md bg-white outline-none text-black"
                            placeholder="Enter password"
                        />
                        <button
                            type="button"
                            className="absolute top-2.5 right-4 text-gray-700"
                            onClick={togglePassword}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button className="w-full bg-[#ceddfb] text-black border border-black rounded-full py-2 hover:bg-[#b4c8f2] transition">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
