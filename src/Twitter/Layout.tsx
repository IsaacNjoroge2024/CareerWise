import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSideBar';

const Layout: React.FC = () => {
    return (
        <div className="flex overflow-hidden flex-wrap gap-px bg-gray-700 rounded-[32px]">
            <Sidebar />
            <MainContent />
            <RightSidebar />
        </div>
    );
};

export default Layout;