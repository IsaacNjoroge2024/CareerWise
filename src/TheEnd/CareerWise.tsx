import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

const CareerWise: React.FC = () => {
    const navItems = ['Home', 'My Courses', 'My Messages', 'Contact'];

    return (
        <div className="flex overflow-hidden flex-col px-14 pt-4 pb-12 text-3xl text-black max-md:px-5">
            <Header navItems={navItems} />
            <MainContent />
        </div>
    );
};

export default CareerWise;