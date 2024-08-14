import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <form className="flex flex-wrap gap-5 justify-between px-5 py-5 mt-20 ml-16 max-w-full text-xl text-black whitespace-nowrap bg-white border border-black border-solid rounded-[48px] w-[918px] max-md:mt-10">
            <label htmlFor="mainSearch" className="sr-only">Search</label>
            <input type="text" id="mainSearch" placeholder="Search" className="bg-transparent border-none outline-none" />
            <button type="submit" aria-label="Search">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f94f070b65239898b07c2ae6f974f1be1f5f425f46d8bfb1d9ae89f864ff3960?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start aspect-square w-[29px]" />
            </button>
        </form>
    );
};

export default SearchBar;