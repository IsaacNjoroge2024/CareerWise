import React from 'react';
import SearchBar from './SearchBar';
import NavItem from './NavItem';

type HeaderProps = {
    navItems: string[];
};

const Header: React.FC<HeaderProps> = ({ navItems }) => {
    return (
        <header className="flex gap-5 justify-between w-full max-md:max-w-full">
            <div className="flex gap-1.5 font-bold whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="CareerWise logo" className="object-contain shrink-0 rounded-full aspect-[1.15] w-[71px]" />
                <h1 className="self-start basis-auto">CareerWise</h1>
            </div>
            <nav className="flex gap-4 my-auto font-medium max-md:max-w-full">
                {navItems.map((item, index) => (
                    <NavItem key={index} text={item} />
                ))}
                <SearchBar />
            </nav>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/36cf4c0ddc88e0b9ecd451a06369aa00fae463d61197c379e7d9291bbc44835f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="User profile" className="object-contain shrink-0 self-start aspect-square w-[50px]" />
        </header>
    );
};

export default Header;