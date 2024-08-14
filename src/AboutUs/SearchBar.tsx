import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div className="flex gap-10 items-start px-6 pt-1.5 pb-3 my-auto bg-white border border-black border-solid rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5">
            <input type="text" placeholder="Search" className="bg-transparent border-none outline-none" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fab6c21cfff05359b04187aedc17658ae70b9fde8a25a636280a073c889fd206?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 mt-2 aspect-[1.5] w-[18px]" />
        </div>
    );
};

export default SearchBar;