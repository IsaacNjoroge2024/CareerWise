import React from 'react';
import JobListing from './JobListing';
import SearchBar from './SearchBar';

const jobListings = [
    {
        logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/f73286fe98d3d73c2c4ac834f8d48d6ce072790d0f779f981cdbd439bd55bb17?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87",
        title: "Junior Software Engineer, Full Time Job.",
        description: "Requires a Minimum 2 years experience in Java,Python,HTML,React and PHP",
        viewMoreCount: 3
    },
    {
        logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fe4f0fd48935b40b34522c10045594704c43ee9e36d160972d5402238540d1c?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87",
        title: "Network Engineer Intern, Part time.",
        description: "Requires a Minimum 1 years experience in Java,Python,HTML and database skills."
    },
    {
        logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/c938b2267c55ede9ea3907915f8058a08f1871a066c8c37e643f1824938f1bd1?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87",
        title: "Web Designer, Full time Job.",
        description: "Requires a Minimum 5 years experience in Java Script, HTML,CSS and Java."
    }
];

const PotentialEmployers: React.FC = () => {
    return (
        <section className="flex overflow-hidden flex-col pt-8 bg-white">
            <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
                <h1 className="px-14 py-10 mt-16 text-7xl font-bold text-white rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    Potential Employers
                </h1>
                <SearchBar />
                {jobListings.map((job, index) => (
                    <div key={index} className={`mt-${index === 0 ? '14' : '28'} ml-14 w-full max-w-[1049px] max-md:mt-10 max-md:max-w-full`}>
                        <JobListing {...job} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PotentialEmployers;