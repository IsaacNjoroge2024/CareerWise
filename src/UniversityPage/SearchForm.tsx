import React from 'react';

type SearchOption = {
    label: string;
    options: string[];
};

type SearchFormProps = {
    options: SearchOption[];
};

const SearchForm: React.FC<SearchFormProps> = ({ options }) => {
    return (
        <form className="z-10 px-20 pt-12 pb-28 mt-24 mr-0 mb-0 w-full bg-white max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                {options.map((option, index) => (
                    <div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <label htmlFor={`search-${option.label.toLowerCase()}`} className="sr-only">{option.label}</label>
                        <select
                            id={`search-${option.label.toLowerCase()}`}
                            className="flex grow gap-10 justify-between items-center px-3.5 py-4 text-2xl font-medium text-blue-400 border-2 border-black border-solid min-h-[66px] max-md:mt-10"
                        >
                            <option value="">{option.label}</option>
                            {option.options.map((opt, optIndex) => (
                                <option key={optIndex} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>
                ))}
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <button type="submit" className="grow px-16 py-4 w-full text-2xl font-medium text-blue-400 whitespace-nowrap bg-white border-2 border-black border-solid max-md:px-5 max-md:mt-10">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;