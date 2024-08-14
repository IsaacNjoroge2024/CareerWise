import React from 'react';
import SidebarItem from './Sidebaritem';
import UserProfile from './UserProfile';

const sidebarItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c219c5874a055cfd44ab2141dfbf21e6edefd27971cd58ec301042d95c50f77?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18ee27027bf3555f602987b4e9df6a3f61ebad6d490ea32b90126e385fa678ac?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "Home" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f49849765790b6a7edf07df20472e3ebd23dfc43ac7be25c4159309fcf328ec9?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "Explore" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/15969b86054ccdb8d0841c41b9f2edbd5514a5b1a2bede711499c0d57abc5dd5?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "Notifications" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f40124a8ed52b25939e7822cdeb66ff2928b3e29f054a719d7269b669433f0f2?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "Messages" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e95429a01a41fcc9882abd29b7fc3a4ed2677d3a976a0e937a5f7a69637f53e?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "Lists" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfe982ba8bb1b7f19edda6089be5148fdf944e11a2ff5e85041dd622a2f3cc36?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "Bookmarks" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/73462356a4565bab8b28aac28f897c2dcc282913383d417f70e4416138811eea?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "Communities" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b19912b931f1b7d0cf915965105534753c47fae80a6dab028ba7d8f66b6f4fe?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "Verified Orgs" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bebff71055e312f5873180e45c2c5a625cfae3c4d36fcbb8c535ceb0a3ed9e6?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "Profile", isBold: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6780be9790c0a2ce2a77793c5f3108d280def341baf60deb1fb993bbfbe1b6f7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", text: "More" },
];

const Sidebar: React.FC = () => {
    return (
        <nav className="flex flex-col pr-8 pl-24 bg-black min-w-[240px] w-[362px] max-md:px-5">
            <div className="flex flex-col w-full">
                {sidebarItems.map((item, index) => (
                    <SidebarItem key={index} {...item} />
                ))}
            </div>
            <div className="flex flex-col flex-1 mt-3 w-full text-lg font-bold leading-none text-center text-gray-50 whitespace-nowrap">
                <button className="gap-5 px-3 py-4 w-full bg-sky-500 rounded-[360px]">
                    Post
                </button>
            </div>
            <UserProfile />
        </nav>
    );
};

export default Sidebar;