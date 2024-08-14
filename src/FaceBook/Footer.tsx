import React from 'react';

interface FooterLinkProps {
    text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text }) => (
    <a href="#" className="self-stretch my-auto">{text}</a>
);

const Footer: React.FC = () => {
    const languages = ["English (US)", "Ikinyarwanda", "Francais (France)", "Kiswahili", "Espagnol", "Deutsch", "Japanese", "Portugues (Brazil)", "Italiano", "Arabic"];
    const links = ["Facebook Lite", "Games", "Oculus", "Bulletin", "Services", "About", "Developers", "Log In", "Watch", "Marketplace", "Portal"];
    const additionalLinks = ["Sign Up", "Create Ad", "Local", "Places", "Messenger", "Careers", "Facebook Play", "Instagram", "Help", "Fundraisers", "Groups", "Create Page", "Privacy"];

    return (
        <footer className="flex flex-col py-9 mt-32 w-full text-base bg-white text-neutral-400 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col w-full max-md:mr-0.5 max-md:max-w-full">
                    <div className="flex gap-4 items-center self-start">
                        {languages.map((lang, index) => (
                            <FooterLink key={index} text={lang} />
                        ))}
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/35c394a488982413332c8e52cac1e53af353b1e40da5ff48aa803aba40959d8d?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch aspect-[1.27] w-[33px]" />
                    </div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7210c6b3d8111ade211efa6977ab521eb55acb9052c4ee984188082e2837ebd?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain mt-4 w-full aspect-[250] max-md:max-w-full" />
                </div>
                <nav className="flex z-10 flex-wrap gap-4 self-start mt-6 ml-20">
                    {links.map((link, index) => (
                        <FooterLink key={index} text={link} />
                    ))}
                </nav>
                <div className="flex z-10 flex-wrap gap-5 items-start self-end mt-0">
                    {additionalLinks.map((link, index) => (
                        <FooterLink key={index} text={link} />
                    ))}
                </div>
                <div className="flex z-10 flex-col mt-0 ml-16 max-w-full w-[435px]">
                    <div className="flex gap-6">
                        <FooterLink text="Voting Information Center" />
                        <FooterLink text="Cookies" />
                        <FooterLink text="Ad choices" />
                        <FooterLink text="Terms" />
                    </div>
                    <p className="self-start mt-11 font-bold max-md:mt-10">Meta © 2022</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;