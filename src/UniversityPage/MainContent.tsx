import React from 'react';
import Hero from './Hero';
import SearchForm from './SearchForm';
import CategoryGrid from './CategoryGrid';
import ScholarshipCatalog from './ScholarshipCatalog';
import ScholarshipFilter from './SchorlashipFilter';
import ScholarshipCard from './ScholarshipCard';

const searchOptions = [
    { label: 'Field', options: ['Computer Science', 'Medicine', 'Law', 'Business'] },
    { label: 'Level', options: ['Undergraduate', 'Masters', 'PhD'] },
    { label: 'Location', options: ['USA', 'UK', 'Canada', 'Australia'] },
];

const categories = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7b54a0d19d28c3f3afefea918dfe92aa8635380ce5ee3c935f42c36c9e782183?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87', title: 'Fine Arts', count: 55 },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/17cc59b7e64b1a71caefcc82e717131289d62b8215f114f8c976f114942f5c1c?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87', title: 'Counselling', count: 50 },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/697b01a1c68127ef52e950e4472072bbc0abfa148346ddb4a67d8e3a4d4533a3?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87', title: 'Social Work', count: 45 },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05cc315359f60eedb33ccb954842cdfe32385b8428e842d12da768b1c71923db?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87', title: 'Law', count: 35 },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2b6c47fb636563e4358ee0504b64b7bcc673a738d076019824bdde7c02d6317b?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87', title: 'Economics', count: 55 },
];

const filterCategories = [
    { title: 'By Field', options: ['Computer Science', 'Medicine', 'Law', 'Business'] },
    { title: 'By Level', options: ['Undergraduate', 'Masters', 'P.H.D', 'Others'] },
    { title: 'By Category', options: ['100% of fees', '80-70% of fees', '70-60% of fees', 'Below 50%'] },
];

const scholarships = [
    {
        title: 'Lester B Pearson Scholarship, University of Toronto.',
        description: "This is U of T's most prestigious and competitive scholarship for international students. The Lester B. Pearson International Scholarships will cover tuition, books, incidental fees, and full residence support for four years.",
        location: 'Canada',
        coverage: '100% of fees',
    },
    {
        title: 'Rhodes Scholarship, University of Oxford.',
        description: 'The Rhodes Scholarships are one of the oldest and most prestigious international scholarships. They cover all university and college fees, including living expenses, for up to four years of study at Oxford.',
        location: 'U.K',
        coverage: '100% of fees',
    },
    {
        title: 'Mastercard Foundation Scholars Program.',
        description: "Provides full funding for undergraduate and master's degrees for talented but economically disadvantaged students from Africa. Covers tuition, living expenses, books, and travel.",
        location: 'Africa',
        coverage: '100% of fees',
    },
];

const MainContent: React.FC = () => {
    return (
        <main className="flex overflow-hidden flex-col items-center pt-10 bg-white">
            <Hero />
            <SearchForm options={searchOptions} />
            <CategoryGrid categories={categories} />
            <ScholarshipCatalog />
            <div className="mt-12 w-full max-w-[1009px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <ScholarshipFilter categories={filterCategories} />
                    <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-lg text-black max-md:mt-7 max-md:max-w-full">
                            {scholarships.map((scholarship, index) => (
                                <ScholarshipCard key={index} {...scholarship} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;