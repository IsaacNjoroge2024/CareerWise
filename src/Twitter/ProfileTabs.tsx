import React from 'react';

const tabs = [
    { name: 'Posts', isActive: true },
    { name: 'Replies', isActive: false },
    { name: 'Highlights', isActive: false },
    { name: 'Media', isActive: false },
];

const ProfileTabs: React.FC = () => {
    return (
        <nav className="flex flex-wrap items-start px-5 pt-7 mt-1 w-full text-base font-bold leading-none text-center text-gray-400 whitespace-nowrap max-md:max-w-full">
            {tabs.map((tab, index) => (
                <div key={index} className="flex flex-col flex-1 shrink px-7 basis-0 max-md:px-5">
                    <div className={`self-center ${tab.isActive ? 'text-gray-50' : ''}`}>{tab.name}</div>
                    <div className={`flex mt-3 w-full min-h-[4px] rounded-[360px] ${tab.isActive ? 'bg-sky-500' : 'bg-black'}`} />
                </div>
            ))}
        </nav>
    );
};

export default ProfileTabs;