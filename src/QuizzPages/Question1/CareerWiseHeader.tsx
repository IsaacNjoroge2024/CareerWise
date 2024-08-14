import React from 'react';

interface CareerWiseHeaderProps {
    logoSrc: string;
    searchIconSrc: string;
    profileIconSrc: string;
}

const CareerWiseHeader: React.FC<CareerWiseHeaderProps> = ({ logoSrc, searchIconSrc, profileIconSrc }) => {
    return (
        <header className="flex flex-col items-start pl-7 w-full max-md:pl-5 max-md:max-w-full">
            <nav className="flex flex-wrap gap-7 text-3xl text-black">
                <div className="flex gap-1.5 font-bold whitespace-nowrap">
                    <img loading="lazy" src={logoSrc} alt="CareerWise Logo" className="object-contain shrink-0 rounded-full aspect-[1.15] w-[71px]" />
                    <div className="self-start basis-auto">CareerWise</div>
                </div>
                <div className="flex flex-auto gap-5 self-start font-medium">
                    <a href="#home" className="my-auto">Home</a>
                    <a href="#courses" className="self-start mt-4 basis-auto">My Courses</a>
                    <a href="#messages" className="self-start mt-4 basis-auto">My Messages</a>
                    <a href="#contact" className="my-auto">Contact</a>
                    <form className="flex gap-10 self-start px-6 py-1.5 mt-2.5 text-xl text-center whitespace-nowrap bg-white border border-black border-solid rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <input type="text" id="search" placeholder="Search" className="bg-transparent border-none outline-none" />
                        <button type="submit" aria-label="Search">
                            <img loading="lazy" src={searchIconSrc} alt="" className="object-contain shrink-0 self-start aspect-square w-[18px]" />
                        </button>
                    </form>
                    <img loading="lazy" src={profileIconSrc} alt="User Profile" className="object-contain shrink-0 aspect-square w-[50px]" />
                </div>
            </nav>
        </header>
    );
};

export default CareerWiseHeader;