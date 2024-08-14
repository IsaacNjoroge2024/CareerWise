import React from 'react';

interface FooterProps {
    companyName: string;
    address: string;
    phone: string;
    navItems: string[];
    socialIcons: string[];
}

const Footer: React.FC<FooterProps> = ({ companyName, address, phone, navItems, socialIcons }) => {
    return (
        <footer className="flex flex-col self-stretch py-4 pr-20 pl-10 mt-5 w-full bg-indigo-500 max-md:px-5 max-md:max-w-full">
            <div className="w-full max-w-[1084px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                        <div className="flex grow gap-5 justify-between text-xl font-bold text-white max-md:mt-10">
                            <div className="flex flex-col my-auto">
                                <div className="self-center text-black">{companyName}</div>
                                <address className="mt-6 not-italic">{address}</address>
                                <div className="self-start mt-3.5">Tel:{phone}</div>
                            </div>
                            <div className="shrink-0 w-px h-32 border border-white border-solid" />
                        </div>
                    </div>
                    <nav className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                        <div className="flex text-xl font-bold text-white max-md:mt-10">
                            <ul className="flex flex-col items-start list-none p-0">
                                {navItems.map((item, index) => (
                                    <li key={index} className={index === 3 ? "self-start mt-14 basis-auto max-md:mt-10" : "mt-4"}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                    <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                        <div className="flex gap-8 max-md:mt-10">
                            <div className="shrink-0 w-px border border-white border-solid h-[124px]" />
                            <div className="flex flex-col grow shrink-0 self-start mt-1.5 basis-0 w-fit">
                                <h2 className="text-2xl font-bold text-white">GET IN TOUCH WITH US</h2>
                                <div className="flex gap-5 justify-between self-center mt-8 max-w-full w-[152px]">
                                    {socialIcons.map((icon, index) => (
                                        <img key={index} loading="lazy" src={icon} alt={`Social media icon ${index + 1}`} className="object-contain shrink-0 self-start mt-1 aspect-[0.95] w-[38px]" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shrink-0 mt-2.5 h-px border border-white border-solid max-md:max-w-full" />
            <div className="self-center mt-3 text-xl font-bold text-white">
                © {companyName} {new Date().getFullYear()}. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;