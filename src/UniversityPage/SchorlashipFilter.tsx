import React from 'react';

type FilterCategory = {
    title: string;
    options: string[];
};

type ScholarshipFilterProps = {
    categories: FilterCategory[];
};

const ScholarshipFilter: React.FC<ScholarshipFilterProps> = ({ categories }) => {
    return (
        <aside className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow mt-2 max-md:mt-9">
                <div className="flex flex-col px-9 pt-5 pb-11 bg-blue-400 rounded-3xl shadow-[10px_10px_2px_rgba(0,0,0,0.25)] max-md:pl-5">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col mt-14 max-md:mt-10">
                            <h3 className="self-center text-2xl font-bold text-black">{category.title}</h3>
                            <div className="flex flex-col mt-5 w-full">
                                {category.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className="flex gap-2.5 items-center mt-2 w-full">
                                        <input type="checkbox" id={`${category.title}-${optionIndex}`} className="sr-only" />
                                        <label htmlFor={`${category.title}-${optionIndex}`} className="flex gap-2.5 items-center w-full cursor-pointer">
                                            <div className="flex flex-col self-stretch my-auto w-5">
                                                <div className="flex shrink-0 h-5 rounded-full border-2 border-solid border-black border-opacity-30" />
                                            </div>
                                            <div className="flex-1 shrink self-stretch my-auto text-lg leading-none basis-0 text-white text-opacity-80">
                                                {option}
                                            </div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default ScholarshipFilter;