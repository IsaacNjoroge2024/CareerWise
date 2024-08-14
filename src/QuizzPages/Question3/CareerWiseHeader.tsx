import React from 'react';

interface CareerWiseHeaderProps {
    logoSrc: string;
    searchIconSrc: string;
    profileIconSrc: string;
}

const CareerWiseHeader: React.FC<CareerWiseHeaderProps> = ({ logoSrc, searchIconSrc, profileIconSrc }) => {
    return (
        <header className="flex gap-5 justify-between items-start w-full text-3xl text-black max-w-[1174px] max-md:max-w-full">
            <div className="flex gap-1.5 mt-1 font-bold whitespace-nowrap">
                <img loading="lazy" src={logoSrc} alt="CareerWise Logo" className="object-contain shrink-0 rounded-full aspect-[1.15] w-[71px]" />
                <div className="self-start basis-auto">CareerWise</div>
            </div>
            <nav className="flex gap-4 self-stretch my-auto font-medium max-md:max-w-full">
                <a href="#" className="my-auto">Home</a>
                <a href="#" className="basis-auto">My Courses</a>
                <a href="#" className="basis-auto">My Messages</a>
                <a href="#" className="my-auto">Contact</a>
                <form className="flex gap-10 px-6 py-1.5 text-xl text-center whitespace-nowrap bg-white border border-black border-solid rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <input type="text" id="search" placeholder="Search" className="bg-transparent border-none outline-none" />
                    <button type="submit" aria-label="Search">
                        <img loading="lazy" src={searchIconSrc} alt="" className="object-contain shrink-0 self-start aspect-square w-[18px]" />
                    </button>
                </form>
            </nav>
            <img loading="lazy" src={profileIconSrc} alt="User Profile" className="object-contain shrink-0 aspect-square w-[50px]" />
        </header>
    );
};

export default CareerWiseHeader;