import React from 'react';

const LoginForm: React.FC = () => {
    return (
        <main className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <form className="flex flex-col px-12 pt-7 pb-11 text-base font-medium bg-white rounded-xl shadow-lg text-neutral-400 max-md:px-5 max-md:max-w-full">
                    <label htmlFor="emailOrPhone" className="sr-only">Email or phone number</label>
                    <input
                        id="emailOrPhone"
                        type="text"
                        placeholder="Email or phone number"
                        className="px-6 py-4 bg-white rounded-xl border border-solid border-neutral-400 max-md:px-5"
                    />
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="px-6 py-4 mt-3 whitespace-nowrap bg-white rounded-xl border border-solid border-neutral-400 max-md:px-5"
                    />
                    <button type="submit" className="px-16 pt-3.5 pb-5 mt-9 font-bold text-center text-white whitespace-nowrap bg-blue-600 rounded-xl max-md:px-5">
                        Login
                    </button>
                    <a href="#" className="self-center mt-6 tracking-wider text-blue-600">Forgot Password?</a>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c56fbcebd5d8847b7cfd35255b707fecff5bc4c13bd4ab92c2b4343183675e1?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain mt-9 w-full aspect-[333.33]" />
                    <button type="button" className="px-16 pt-3.5 pb-6 mt-5 font-bold text-center text-white bg-lime-600 rounded-xl max-md:px-5">
                        Create new account
                    </button>
                </form>
                <p className="mt-6 text-3xl tracking-wider text-zinc-900 max-md:mr-2.5 max-md:max-w-full">
                    <span className="text-2xl font-bold leading-7">Create a Page</span>{" "}
                    <span className="text-xl leading-6">for a celebrity, brand or business.</span>
                </p>
            </div>
        </main>
    );
};

export default LoginForm;