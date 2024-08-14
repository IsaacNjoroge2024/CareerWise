import React from 'react';

type StatisticSectionProps = {
    title: string;
    percentage: string;
    description: string;
};

const StatisticSection: React.FC<StatisticSectionProps> = ({ title, percentage, description }) => {
    return (
        <section className="mt-11 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-7xl text-indigo-950 max-md:max-w-full max-md:text-4xl">{title}</h2>
            <div className="flex gap-10 items-center px-20 pt-2 mt-9 w-full text-black max-w-[1106px] rounded-[45px] max-md:px-5 max-md:max-w-full">
                <div className="self-stretch my-auto text-7xl font-bold max-md:text-4xl">{percentage}</div>
                <div className="shrink-0 self-start border-white border-dashed border-[5px] h-[284px] w-[5px]" />
                <p className="grow shrink self-stretch my-auto text-2xl font-medium w-[666px] max-md:max-w-full">{description}</p>
            </div>
        </section>
    );
};

export default StatisticSection;