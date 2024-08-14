import React from 'react';
import SearchIcon from './SearchIcon';
import UserIcon from './UserIcon';

type HeaderProps = {
    logo: string;
    menuItems: string[];
};

const Header: React.FC<HeaderProps> = ({ logo, menuItems }) => {
    return (
        <header className="flex overflow-hidden flex-col items-center pt-10 bg-white">
            <div className="flex flex-wrap gap-7 items-start ml-4 w-full max-w-[1179px] max-md:max-w-full">
                <div className="flex gap-1.5 mt-1.5 text-3xl font-bold text-black whitespace-nowrap">
                    <img loading="lazy" src={logo} alt="CareerWise Logo" className="object-contain shrink-0 rounded-full aspect-[1.15] w-[71px]" />
                    <div className="self-start basis-auto">CareerWise</div>
                </div>
                <nav className="flex flex-wrap flex-auto gap-8 max-md:max-w-full">
                    {menuItems.map((item, index) => (
                        <a key={index} href="#" className="self-end mt-6 text-3xl font-medium text-black">
                            {item}
                        </a>
                    ))}
                    <button className="flex flex-col justify-center items-end self-start px-11 py-2.5 mt-2.5 bg-white border border-black border-solid rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5">
                        <SearchIcon />
                    </button>
                    <UserIcon />
                </nav>
            </div>
        </header>
    );
};

export default Header;