import React from 'react';

interface JobListingProps {
    logo: string;
    title: string;
    description: string;
    viewMoreCount?: number;
}

const JobListing: React.FC<JobListingProps> = ({ logo, title, description, viewMoreCount }) => {
    return (
        <article className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                            <img loading="lazy" src={logo} alt={`${title} logo`} className="object-contain grow shrink-0 max-w-full aspect-[1.16] w-[147px] max-md:mt-6" />
                        </div>
                        <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-1 max-md:mt-7">
                                <h2 className="text-2xl font-medium text-black">{title}</h2>
                                <p className="self-start mt-3.5 text-xl text-gray-400">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                <div className="flex gap-5 justify-between self-stretch my-auto w-full text-white max-md:mt-10">
                    <button className="flex gap-4 px-7 py-3 bg-sky-400 rounded-3xl max-md:px-5">
                        <span className="text-xl">View More</span>
                        {viewMoreCount && <span className="self-start text-xs">{viewMoreCount}</span>}
                    </button>
                    <button className="px-8 py-3 text-xl bg-sky-400 rounded-3xl max-md:px-5">Apply Now</button>
                </div>
            </div>
        </article>
    );
};

export default JobListing;