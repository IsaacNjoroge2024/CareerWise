import React from 'react';

type HeroProps = {
    title: string;
    description: string;
    ctaText: string;
    heroImage: string;
};

const Hero: React.FC<HeroProps> = ({ title, description, ctaText, heroImage }) => {
    return (
        <section className="px-7 pb-24 mt-6 w-full max-w-[1186px] rounded-[48px_48px_300px_48px] max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex z-10 flex-col grow mt-24 font-bold text-white max-md:mt-10 max-md:-mr-0.5 max-md:max-w-full">
                        <h1 className="mr-3 text-7xl max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">{title}</h1>
                        <p className="mt-32 text-xl max-md:mt-10 max-md:max-w-full">{description}</p>
                        <button className="px-6 pt-3.5 pb-10 mt-28 max-w-full text-4xl bg-indigo-500 rounded-3xl w-[276px] max-md:px-5 max-md:mt-10">
                            {ctaText}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src={heroImage} alt="Hero illustration" className="object-contain mt-0 w-full aspect-[0.82] max-md:max-w-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;