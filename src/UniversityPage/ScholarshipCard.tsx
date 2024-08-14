import React from 'react';

type ScholarshipCardProps = {
    title: string;
    description: string;
    location: string;
    coverage: string;
};

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ title, description, location, coverage }) => {
    return (
        <article className="flex flex-col items-start pt-6 pr-20 pb-3 pl-3.5 w-full bg-white border-blue-400 border-solid border-[5px] max-md:pr-5 max-md:mr-1 max-md:max-w-full">
            <h3 className="text-2xl font-bold text-blue-400 max-md:max-w-full">{title}</h3>
            <p className="mt-3 max-md:max-w-full">{description}</p>
            <div className="flex flex-wrap gap-5 justify-between mt-6 max-w-full w-[610px]">
                <div className="flex gap-2.5 whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc74ba7b2089441bb889352cff1f2294ecc559b2ce96f959c2fdd6e1041940c4?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 aspect-square w-[42px]" />
                    <div className="my-auto">{location}</div>
                </div>
                <div className="flex gap-7 my-auto">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/682012a66f5d243e4e41fa94a1cc176225879673cebdecec7ad8345a2e48fa2b?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 w-12 aspect-[1.5]" />
                    <div className="my-auto basis-auto">{coverage}</div>
                </div>
            </div>
        </article>
    );
};

export default ScholarshipCard;