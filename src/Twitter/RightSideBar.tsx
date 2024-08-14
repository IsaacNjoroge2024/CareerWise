import React from 'react';
import SearchBar from './SearchBar';
import SuggestedUsers from './SuggestedUsers';
import TrendingTopics from './TrendingTopics';

const RightSidebar: React.FC = () => {
    return (
        <aside className="flex flex-col flex-1 shrink items-start px-6 py-1 bg-black basis-20 min-w-[240px] max-md:px-5 max-md:max-w-full">
            <SearchBar />
            <SuggestedUsers />
            <TrendingTopics />
        </aside>
    );
};

export default RightSidebar;