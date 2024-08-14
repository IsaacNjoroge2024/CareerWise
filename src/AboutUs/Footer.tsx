import React from 'react';

type FooterProps = {
    logoSrc: string;
    facebookSrc: string;
    twitterSrc: string;
};

const Footer: React.FC<FooterProps> = ({ logoSrc, facebookSrc, twitterSrc }) => {
    return (
        <footer className="flex flex-col py-3.5 pr-20 pl-10 mt-40 w-full bg-indigo-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="w-full max-w-[1100px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-5 justify-between text-xl font-bold text-white max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col items-start my-auto">
                                <div className="flex gap-3 text-black whitespace-nowrap">
                                    <img loading="lazy" src={logoSrc} alt="CareerWise Logo" className="object-contain shrink-0 w-8 aspect-[1.14]" />
                                    <div className="my-auto basis-auto">CareerWise</div>
                                </div>
                                <address className="mt-3 not-italic">210,Waiyaki Way</address>
                                <div className="self-stretch mt-3">Tel:+25470000011</div>
                            </div>
                            <div className="shrink-0 w-px border border-white border-solid h-[118px]" />
                            <nav className="flex flex-col items-start self-start">
                                <a href="#" className="text-white">Home</a>
                                <a href="#" className="mt-3.5 text-white">My Courses</a>
                                <a href="#" className="mt-2 text-white">My Messages</a>
                                <a href="#" className="mt-2.5 text-white">Contact</a>
                            </nav>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-8 max-md:mt-10">
                            <div className="shrink-0 w-px border border-white border-solid h-[115px]" />
                            <div className="flex flex-col grow shrink-0 self-start mt-1.5 basis-0 w-fit">
                                <h3 className="text-2xl font-bold text-white">GET IN TOUCH WITH US</h3>
                                <div className="flex gap-5 justify-between self-center mt-7 max-w-full w-[155px]">
                                    <a href="#" aria-label="Facebook">
                                        <img loading="lazy" src={facebookSrc} alt="" className="object-contain shrink-0 self-start aspect-[1.03] w-[39px]" />
                                    </a>
                                    <a href="#" aria-label="Twitter">
                                        <img loading="lazy" src={twitterSrc} alt="" className="object-contain shrink-0 w-12 aspect-[1.17]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shrink-0 mt-2.5 h-px border border-white border-solid max-md:max-w-full" />
            <div className="self-center mt-2.5 text-xl font-bold text-white">
                © CareerWise 2024. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;