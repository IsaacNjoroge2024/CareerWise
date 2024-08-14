import React from 'react';
import FeatureCard from './FeatureCard';

type FeatureSectionProps = {
    title: string;
    subtitle: string;
    features: Array<{
        image: string;
        description: string;
    }>;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, subtitle, features }) => {
    return (
        <section className="mt-20 w-full max-w-[1084px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-indigo-950 max-md:mt-10">
                        <h2 className="self-start text-5xl font-bold leading-[80px] max-md:text-4xl max-md:leading-[74px]">{title}</h2>
                        <p className="mt-20 text-3xl max-md:mt-10">{subtitle}</p>
                    </div>
                </div>
                {features.map((feature, index) => (
                    <FeatureCard key={index} image={feature.image} description={feature.description} />
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;