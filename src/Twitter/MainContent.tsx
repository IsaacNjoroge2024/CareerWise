import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileTabs from './ProfileTabs';
import Post from './Post';

const MainContent: React.FC = () => {
    return (
        <main className="flex flex-col min-w-[240px] w-[600px] max-md:max-w-full">
            <ProfileHeader />
            <ProfileInfo />
            <ProfileTabs />
            <Post />
        </main>
    );
};

export default MainContent;