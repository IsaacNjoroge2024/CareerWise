import React from 'react';

const WelcomeSection: React.FC = () => {
    return (
        <div className="flex flex-col mt-3 w-full font-semibold text-white max-md:mt-10">
            <div className="self-center mt-12 text-5xl leading-none max-md:mt-10 max-md:text-4xl">
                Welcome
            </div>
            <div className="mt-8 ml-9 text-2xl leading-9 max-md:ml-2.5">
                CareerWise is a platform for high-school graduates that helps in finding suitable career paths.
            </div>
        </div>
    );
};

export default WelcomeSection;