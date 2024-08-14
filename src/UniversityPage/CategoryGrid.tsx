import React from 'react';
import CategoryCard from './CategoryCard';

type Category = {
    icon: string;
    title: string;
    count: number;
};

type CategoryGridProps = {
    categories: Category[];
};

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
    return (
        <section className="mt-24 max-w-full w-[833px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d29d04670a61bc369a3434562965e987bbb8b3b9413ba21594b65f78b58d83?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="Category overview" className="object-contain grow w-full aspect-[3.82] max-md:mt-2.5 max-md:max-w-full" />
                </div>
                <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                    {categories.map((category, index) => (
                        <CategoryCard key={index} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;