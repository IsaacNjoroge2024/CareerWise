import React from 'react';
import SearchBar from './SearchBar';

type HeaderProps = {
    logo: string;
    menuItems: string[];
    profileImage: string;
};

const Header: React.FC<HeaderProps> = ({ logo, menuItems, profileImage }) => {
    return (
        <header className="flex flex-wrap gap-5 justify-between ml-3.5 w-full text-3xl text-black max-w-[1175px] max-md:max-w-full">
            <div className="flex gap-1.5 font-bold whitespace-nowrap">
                <img loading="lazy" src={logo} alt="CareerWise Logo" className="object-contain shrink-0 rounded-full aspect-[1.15] w-[71px]" />
                <div className="self-start basis-auto">CareerWise</div>
            </div>
            <nav className="flex gap-5 my-auto font-medium max-md:max-w-full">
                {menuItems.map((item, index) => (
                    <a href="#" key={index} className="my-auto">{item}</a>
                ))}
            </nav>
            <div className="flex gap-10 self-start text-xl text-center whitespace-nowrap">
                <SearchBar />
                <img loading="lazy" src={profileImage} alt="User Profile" className="object-contain shrink-0 aspect-square w-[50px]" />
            </div>
        </header>
    );
};

export default Header;