import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeatureSection from './FeatureSection';
import StatisticSection from './StatisticSection';
import Footer from './Footer';

const CareerWise: React.FC = () => {
    const headerProps = {
        logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87",
        menuItems: ["Home", "My Courses", "My Messages", "Contact"],
        profileImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/62dc0a01518ef07bd3a9d117da6dde03ef369a097ffcd02037a8ed126c7c0d75?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
    };

    const heroProps = {
        title: "Jumpstart your Career With Us.",
        description: "Our platform provides a chance to find one on one mentorship, career guidance, jobs on the market and University info.",
        ctaText: "Take a Test",
        heroImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/64e680435dc033b729df5715c934edb15328b3e1de1bbe1eb4f0cbd2f174d1cb?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
    };

    const featureSectionProps = {
        title: "Why we are better than others",
        subtitle: "We carefully consider the needs of the youth who are looking for jobs",
        features: [
            {
                image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ced9202238be32bdfbba826214cb9e561799152b1962aa51a43c77ca1d6aa02?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87",
                description: "Receive up to date career guidance."
            },
            {
                image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cddfd8d3dec4ec553ee5cc58534c94ecc993531524aeb6c16c474acbba7a28f3?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87",
                description: "Chat with seasoned Mentors."
            }
        ]
    };

    const statisticSectionProps = {
        title: "Did You Know?",
        percentage: "65%",
        description: "of High School Finishers in Africa lack Proper Career Guidance before starting their Jobs"
    };

    const footerProps = {
        logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/31e2b12df28beae49b9df731fd65dd908b8b0e59b68dd08171dca2b8be9bcad9?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87",
        address: "210,Waiyaki Way",
        phone: "Tel:+25470000011",
        menuItems: ["Home", "My Courses", "My Messages", "Contact"],
        socialIcons: ["https://cdn.builder.io/api/v1/image/assets/TEMP/d5213f82464fd7233844225b12ed0616d61a68f0ad09b425c68fe7e986c84882?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", "https://cdn.builder.io/api/v1/image/assets/TEMP/48b6df143036ff784aabce6477869c6f1b73acf240202ece015b2a120ee38d41?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"]
    };

    return (
        <div className="flex overflow-hidden flex-col items-center pt-11 bg-white">
            <Header {...headerProps} />
            <Hero {...heroProps} />
            <FeatureSection {...featureSectionProps} />
            <StatisticSection {...statisticSectionProps} />
            <Footer {...footerProps} />
        </div>
    );
};

export default CareerWise;