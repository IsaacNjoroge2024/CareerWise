import React from 'react';

type CategoryCardProps = {
    icon: string;
    title: string;
    count: number;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, count }) => {
    return (
        <div className="flex flex-col grow px-9 pt-10 pb-5 w-full text-xl text-center text-black border border-indigo-500 border-solid bg-zinc-300 max-md:px-5 max-md:mt-2.5">
            <img loading="lazy" src={icon} alt={`${title} icon`} className="object-contain self-center aspect-square w-[51px]" />
            <div className="mt-2.5">
                <span className="font-semibold">{title}</span>
                <br />
                <span className="text-lg">{count}+ Universities</span>
            </div>
        </div>
    );
};

export default CategoryCard;