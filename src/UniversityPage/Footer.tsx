import React from 'react';

type FooterProps = {
    logo: string;
    address: string;
    phone: string;
    menuItems: string[];
};

const Footer: React.FC<FooterProps> = ({ logo, address, phone, menuItems }) => {
    return (
        <footer className="flex flex-col self-stretch py-3.5 pr-20 pl-10 mt-14 w-full bg-indigo-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="w-full max-w-[1100px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-5 justify-between text-xl font-bold text-white max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col items-start my-auto">
                                <div className="flex gap-3 text-black whitespace-nowrap">
                                    <img loading="lazy" src={logo} alt="CareerWise Logo" className="object-contain shrink-0 w-8 aspect-[1.14]" />
                                    <div className="my-auto basis-auto">CareerWise</div>
                                </div>
                                <address className="mt-3 not-italic">{address}</address>
                                <div className="self-stretch mt-3">Tel: {phone}</div>
                            </div>
                            <div className="shrink-0 w-px border border-white border-solid h-[119px]" />
                            <nav className="flex flex-col items-start self-start">
                                {menuItems.map((item, index) => (
                                    <a key={index} href="#" className="mt-3.5 first:mt-0">
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                        <div className="flex gap-8 max-md:mt-10">
                            <div className="shrink-0 w-px border border-white border-solid h-[115px]" />
                            <div className="flex flex-col grow shrink-0 self-start mt-1.5 basis-0 w-fit">
                                <h2 className="text-2xl font-bold text-white">
                                    GET IN TOUCH WITH US
                                </h2>
                                <div className="flex gap-5 justify-between self-center mt-7 max-w-full w-[155px]">
                                    <a href="#" aria-label="Facebook">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/11f76c253c106b25bdddc1ea8c432ab1bc217b05d7086a1a60b169bb8d209f73?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start mt-1 aspect-[1.05] w-[39px]" />
                                    </a>
                                    <a href="#" aria-label="Twitter">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/48b6df143036ff784aabce6477869c6f1b73acf240202ece015b2a120ee38d41?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 w-12 aspect-[1.17]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shrink-0 mt-2 h-px border border-white border-solid max-md:max-w-full" />
            <div className="self-center mt-2.5 text-xl font-bold text-white">
                © CareerWise 2024. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;