import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col pt-16 mt-16 w-full rounded-none max-w-[1223px] max-md:mt-10 max-md:max-w-full">
            <div className="self-center w-full max-w-[1109px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
                        <h1 className="text-5xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                            FIND THE BEST <br /> UNIVERSITY FOR YOU !<br />
                        </h1>
                    </div>
                    <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                        <p className="mt-12 text-xl text-white max-md:mt-10 max-md:max-w-full">
                            Browse and find the university that matches your career. <br />
                            You can also find more information about scholarships <br />
                            and financial aid that you can take benefit of.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;