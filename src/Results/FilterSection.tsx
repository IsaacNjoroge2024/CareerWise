import React from 'react';

interface FilterOption {
    label: string;
    icon: string;
}

interface FilterSectionProps {
    options: FilterOption[];
}

const FilterSection: React.FC<FilterSectionProps> = ({ options }) => {
    return (
        <section className="flex flex-wrap gap-10 ml-14 w-full text-xl text-black max-w-[910px] max-md:max-w-full">
            {options.map((option, index) => (
                <div key={index} className="flex flex-1 gap-5 items-center px-3 py-1 rounded-md border-2 border-black border-solid min-h-[38px]">
                    <div className="self-stretch my-auto">{option.label}</div>
                    <img loading="lazy" src={option.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square" />
                </div>
            ))}
        </section>
    );
};

export default FilterSection;