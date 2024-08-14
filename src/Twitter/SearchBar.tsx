import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div className="flex gap-5 items-start p-3 max-w-full text-base leading-none text-center text-gray-400 whitespace-nowrap bg-zinc-900 rounded-[360px] w-[356px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6974e1264c227ff39050d80855bfffc90d4d8f54509bbd4606147bc44ab3e8bb?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 w-5 aspect-square" />
            <input type="text" placeholder="Search" className="bg-transparent outline-none text-gray-400" />
        </div>
    );
};

export default SearchBar;