import React from 'react';

type AboutSectionProps = {
    title: string;
    content: string;
};

const AboutSection: React.FC<AboutSectionProps> = ({ title, content }) => {
    return (
        <section className="self-center mt-32 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                    <h2 className="self-stretch my-auto text-4xl font-bold text-black max-md:mt-10">{title}</h2>
                </div>
                <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                    <div className="grow px-16 py-11 w-full text-4xl text-black bg-zinc-300 rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        {content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;