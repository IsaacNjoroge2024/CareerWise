import React from 'react';

type HeaderProps = {
    logoSrc: string;
    profileSrc: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, profileSrc }) => {
    return (
        <header className="flex gap-5 justify-between items-start w-full text-3xl text-black max-w-[1177px] max-md:max-w-full">
            <div className="flex gap-1.5 mt-1 font-bold whitespace-nowrap">
                <img loading="lazy" src={logoSrc} alt="CareerWise Logo" className="object-contain shrink-0 rounded-full aspect-[1.15] w-[71px]" />
                <div className="self-start basis-auto">CareerWise</div>
            </div>
            <nav className="flex gap-4 self-stretch my-auto font-medium max-md:max-w-full">
                <a href="#" className="my-auto">Home</a>
                <a href="#" className="basis-auto">My Courses</a>
                <a href="#" className="basis-auto">My Messages</a>
                <a href="#" className="my-auto">Contact</a>
                <div className="flex gap-10 px-6 py-1.5 text-xl text-center whitespace-nowrap bg-white border border-black border-solid rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
                    <span>Search</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/525b83c053f7713b504a3469151ba6a75975e0c1f77a5e12418da9d000f36ade?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start aspect-square w-[18px]" />
                </div>
            </nav>
            <img loading="lazy" src={profileSrc} alt="User Profile" className="object-contain shrink-0 aspect-square w-[50px]" />
        </header>
    );
};

export default Header;