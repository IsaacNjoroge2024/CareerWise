import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import LanguageSelector from './LanguageSelector';

const CareerWise: React.FC = () => {
    return (
        <div className="overflow-hidden">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                    <Header />
                </div>
                <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                    <main className="flex flex-col px-11 pt-5 pb-20 mx-auto w-full bg-white rounded-[30px_0px_0px_30px] text-neutral-400 max-md:px-5 max-md:mt-5 max-md:max-w-full">
                        <LanguageSelector />
                        <LoginForm />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CareerWise;