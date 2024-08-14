import React from 'react';

type FeatureCardProps = {
    image: string;
    description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ image, description }) => {
    return (
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-10 pb-20 w-full text-xl text-black bg-white rounded-[48px] shadow-[0px_10px_50px_rgba(238,154,229,0.15)] max-md:px-5 max-md:mt-10">
                <img loading="lazy" src={image} alt="" className="object-contain z-10 aspect-[0.9] w-[217px]" />
                <p className="mt-20 w-[254px] max-md:mt-10">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;