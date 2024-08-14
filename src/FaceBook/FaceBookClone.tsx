import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import Footer from './Footer';

const FacebookClone: React.FC = () => {
    return (
        <div className="flex overflow-hidden flex-col pt-48 bg-gray-100 max-md:pt-24">
            <div className="ml-7 w-full max-w-[1125px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <Header />
                    <LoginForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FacebookClone;