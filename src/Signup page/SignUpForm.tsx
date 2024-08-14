import React from 'react';
import LanguageSelector from './LanguageSelector';
import SocialSignIn from './SocialSignIn';
import InputField from './InputField';

const SignUpForm: React.FC = () => {
    return (
        <form className="flex flex-col px-11 pt-6 pb-14 mx-auto w-full text-xl bg-white rounded-[30px_0px_0px_30px] text-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <LanguageSelector />
            <div className="flex flex-col items-start mt-8 max-w-full font-medium w-[578px]">
                <h2 className="text-4xl font-semibold text-neutral-600">Create Account</h2>
                <SocialSignIn />
                <div className="self-center mt-12 ml-5 text-5xl max-md:mt-10 max-md:text-4xl">- OR -</div>
                <InputField label="Full Name" />
                <InputField label="Email Address" />
                <InputField label="Password" type="password" />
                <button className="px-16 pt-2 pb-6 mt-10 max-w-full font-semibold text-center text-white rounded-md bg-slate-400 w-[468px] max-md:px-5">
                    Create Account
                </button>
                <p className="mt-9 max-md:ml-1">
                    Already have an account? <span className="text-slate-400">Login</span>
                </p>
            </div>
        </form>
    );
};

export default SignUpForm;