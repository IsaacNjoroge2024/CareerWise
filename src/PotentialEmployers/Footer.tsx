import React from 'react';

interface FooterProps {
    logo: string;
}

const Footer: React.FC<FooterProps> = ({ logo }) => {
    return (
        <footer className="flex flex-col py-2.5 pr-20 pl-10 mt-32 w-full bg-indigo-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="w-full max-w-[1100px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-5 justify-between text-xl font-bold text-white max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col items-start my-auto">
                                <div className="flex gap-3 text-black whitespace-nowrap">
                                    <img loading="lazy" src={logo} alt="CareerWise Logo" className="object-contain shrink-0 w-8 aspect-[1.03]" />
                                    <div className="my-auto basis-auto">CareerWise</div>
                                </div>
                                <address className="mt-3.5 not-italic">
                                    <p>210,Waiyaki Way</p>
                                    <p className="self-stretch mt-3.5">Tel:+25470000011</p>
                                </address>
                            </div>
                            <div className="shrink-0 w-px h-32 border border-white border-solid" />
                            <nav className="flex flex-col items-start self-start">
                                <a href="#" className="mb-4">Home</a>
                                <a href="#" className="mb-2.5">My Courses</a>
                                <a href="#" className="mb-3">My Messages</a>
                                <a href="#">Contact</a>
                            </nav>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                        <div className="flex gap-8 max-md:mt-10">
                            <div className="shrink-0 w-px border border-white border-solid h-[124px]" />
                            <div className="flex flex-col grow shrink-0 self-start mt-1.5 basis-0 w-fit">
                                <h2 className="text-2xl font-bold text-white">GET IN TOUCH WITH US</h2>
                                <div className="flex gap-5 justify-between self-center mt-8 max-w-full w-[155px]">
                                    <a href="#" aria-label="Facebook">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/188591e354488b9e4e8c964fec368f9cc5f5a35b56b2657fabddd7f160c773a5?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start mt-1 aspect-[0.97] w-[39px]" />
                                    </a>
                                    <a href="#" aria-label="Twitter">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5da1305061be9256ceb77e9bfb6ec96e4943d29f9ee1acf89898b1ade54636b8?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 w-12 aspect-[1.09]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shrink-0 mt-2.5 h-px border border-white border-solid max-md:max-w-full" />
            <p className="self-center mt-3 text-xl font-bold text-white">© CareerWise 2024. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;