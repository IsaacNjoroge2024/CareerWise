import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import Footer from './Footer';

const MyComponent: React.FC = () => {
    return (
        <div className="flex overflow-hidden flex-col pt-8 bg-white">
            <Header />
            <main className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
                <h1 className="px-14 py-10 mt-16 text-7xl font-bold text-white rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    MY MESSAGES
                </h1>
                <div className="flex flex-wrap gap-5 justify-between self-center mt-20 w-full text-xl text-black whitespace-nowrap max-w-[1096px] max-md:mt-10 max-md:max-w-full">
                    <form className="flex flex-wrap gap-10 px-5 py-5 bg-white border border-black border-solid rounded-[48px] max-md:max-w-full">
                        <label htmlFor="searchInput" className="sr-only">Search</label>
                        <input
                            type="search"
                            id="searchInput"
                            placeholder="Search"
                            className="bg-transparent border-none outline-none"
                        />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f94f070b65239898b07c2ae6f974f1be1f5f425f46d8bfb1d9ae89f864ff3960?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start aspect-square w-[29px]" />
                    </form>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54c5c27a2174b35fed6575d38928c219dc86be1f0fd29545cc30e163d6ad6af3?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start aspect-[1.14] w-[75px]" />
                </div>
                <MessageList />
            </main>
            <Footer />
        </div>
    );
};

export default MyComponent;