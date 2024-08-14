import React from 'react';

const ScholarshipCatalog: React.FC = () => {
    return (
        <section className="mt-16 w-full max-w-[1056px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                    <h2 className="text-5xl font-bold text-center text-indigo-950 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                        Browse Our Popular Scholarship Catalog.
                    </h2>
                </div>
                <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                    <form className="flex grow gap-5 justify-between px-6 py-1.5 mt-20 w-full text-lg font-bold text-black whitespace-nowrap bg-white border border-black border-solid rounded-[200px] max-md:pl-5 max-md:mt-10">
                        <label htmlFor="scholarshipSearch" className="sr-only">Search scholarships</label>
                        <input type="text" id="scholarshipSearch" placeholder="Search" className="grow bg-transparent outline-none" />
                        <button type="submit" aria-label="Search">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/822605785cd35f258f4411cbc1f5d83d3969b7ef12fa4cb9d6c0011004b35c70?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 aspect-square w-[50px]" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ScholarshipCatalog;