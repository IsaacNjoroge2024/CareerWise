import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex gap-7 self-end text-3xl text-black max-md:mr-2.5">
            <div className="flex gap-1.5 font-bold whitespace-nowrap">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 rounded-full aspect-[1.15] w-[71px]" />
                <div className="self-start basis-auto">CareerWise</div>
            </div>
            <nav className="flex gap-4 my-auto font-medium max-md:max-w-full">
                <a href="#" className="my-auto">Home</a>
                <a href="#" className="basis-auto">My Courses</a>
                <a href="#" className="basis-auto">My Messages</a>
                <a href="#" className="my-auto">Contact</a>
                <div className="flex gap-10 px-6 py-1.5 text-xl text-center whitespace-nowrap bg-white border border-black border-solid rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5">
                    <span>Search</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/525b83c053f7713b504a3469151ba6a75975e0c1f77a5e12418da9d000f36ade?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start aspect-square w-[18px]" />
                </div>
            </nav>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/36cf4c0ddc88e0b9ecd451a06369aa00fae463d61197c379e7d9291bbc44835f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start aspect-square w-[50px]" />
        </header>
    );
};

export default Header;