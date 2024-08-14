import React from 'react';

const LoginForm: React.FC = () => {
    return (
        <form className="flex flex-col items-start mt-24 max-w-full text-4xl font-semibold w-[565px] max-md:mt-10">
            <h2 className="text-neutral-600">Welcome Back!</h2>
            <div className="mt-36 font-medium max-md:mt-10">
                <label htmlFor="username" className="sr-only">Username</label>
                <input type="text" id="username" name="username" className="w-full bg-transparent border-b border-black pb-2 outline-none" placeholder="Username" />
            </div>
            <div className="mt-20 font-medium max-md:mt-10">
                <label htmlFor="password" className="sr-only">Password</label>
                <input type="password" id="password" name="password" className="w-full bg-transparent border-b border-black pb-2 outline-none" placeholder="Password" />
            </div>
            <button type="submit" className="px-16 py-1 mt-24 max-w-full text-2xl text-center text-white whitespace-nowrap rounded-md bg-slate-400 w-[468px] max-md:px-5 max-md:mt-10">
                LOGIN
            </button>
            <p className="mt-16 ml-2.5 text-2xl max-md:mt-10">
                Don't have an account? <a href="#" className="text-slate-400">Sign Up</a>
            </p>
        </form>
    );
};

export default LoginForm;