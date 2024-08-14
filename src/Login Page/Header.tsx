import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex flex-col mt-3 w-full text-white max-md:mt-8 max-md:max-w-full">
            <div className="flex gap-2.5 self-start text-4xl font-semibold leading-10 whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58890864df38403ee0b2a66c2c2aadc7d768c914e37baf14443442b19c2270c3?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="CareerWise logo" className="object-contain shrink-0 aspect-square w-[89px]" />
                <h1 className="my-auto w-full">
                    CareerWise
                </h1>
            </div>
            <p className="mt-12 text-2xl leading-9 max-md:mt-10 max-md:max-w-full">
                Welcome Back to CareerWise. A career-finder platform that aims to help high-school graduates find the most suitable career for them.
            </p>
        </header>
    );
};

export default Header;