import React from 'react';

interface CareerWiseHeaderProps {
    logoSrc: string;
    searchIconSrc: string;
    profileIconSrc: string;
}

const CareerWiseHeader: React.FC<CareerWiseHeaderProps> = ({ logoSrc, searchIconSrc, profileIconSrc }) => {
    return (
        <header className="flex gap-5 justify-between w-full text-3xl text-black max-w-[1166px] max-md:max-w-full">
            <div className="flex gap-1.5 font-bold whitespace-nowrap">
                <img loading="lazy" src={logoSrc} alt="CareerWise Logo" className="object-contain shrink-0 rounded-full aspect-[1.15] w-[71px]" />
                <span className="self-start basis-auto">CareerWise</span>
            </div>
            <nav className="flex gap-4 my-auto font-medium max-md:max-w-full">
                <a href="#home" className="my-auto">Home</a>
                <a href="#courses" className="basis-auto">My Courses</a>
                <a href="#messages" className="basis-auto">My Messages</a>
                <a href="#contact" className="my-auto">Contact</a>
                <div className="flex gap-10 px-6 py-1.5 text-xl text-center whitespace-nowrap bg-white border border-black border-solid rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
                    <span>Search</span>
                    <img loading="lazy" src={searchIconSrc} alt="" className="object-contain shrink-0 self-start aspect-square w-[18px]" />
                </div>
            </nav>
            <img loading="lazy" src={profileIconSrc} alt="User Profile" className="object-contain shrink-0 self-start aspect-square w-[50px]" />
        </header>
    );
};

export default CareerWiseHeader;