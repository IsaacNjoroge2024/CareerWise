import React from 'react';
import SearchBar from './SearchBar';

type HeaderProps = {
    logoSrc: string;
    profileSrc: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc, profileSrc }) => {
    return (
        <header className="flex flex-wrap gap-9 items-start self-end text-3xl text-black max-md:mr-1.5">
            <div className="flex gap-1.5 font-bold whitespace-nowrap">
                <img loading="lazy" src={logoSrc} alt="CareerWise Logo" className="object-contain shrink-0 rounded-full aspect-[1.15] w-[71px]" />
                <div className="self-start basis-auto">CareerWise</div>
            </div>
            <nav className="flex gap-5 self-stretch my-auto font-medium max-md:max-w-full">
                <a href="#" className="my-auto">Home</a>
                <a href="#" className="basis-auto">My Courses</a>
                <a href="#" className="basis-auto">My Messages</a>
                <a href="#" className="basis-auto">Contact</a>
            </nav>
            <div className="flex gap-10 text-xl whitespace-nowrap">
                <SearchBar />
                <img loading="lazy" src={profileSrc} alt="User Profile" className="object-contain shrink-0 aspect-square w-[50px]" />
            </div>
        </header>
    );
};

export default Header;