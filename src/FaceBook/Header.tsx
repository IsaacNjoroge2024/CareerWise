import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-2.5 text-3xl tracking-wider text-zinc-900 max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/14162d56123dfdf1b30f5e785929e33abb23ec1b1155b4686f3c22cbb26c33db?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="Facebook logo" className="object-contain w-full aspect-[2.84] max-md:mr-2.5 max-md:max-w-full" />
                <h1 className="mt-10 ml-9 max-md:max-w-full">
                    Connect with friends and the world around you on Facebook.
                </h1>
            </div>
        </header>
    );
};

export default Header;