import React from 'react';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import SignUpForm from './SignUpForm';

const CareerWiseComponent: React.FC = () => {
    return (
        <div className="overflow-hidden">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <Header />
                    <WelcomeSection />
                </div>
                <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
};

export default CareerWiseComponent;