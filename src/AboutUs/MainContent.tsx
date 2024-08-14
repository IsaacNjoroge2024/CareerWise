import React from 'react';
import AboutSection from './AboutSection';

const MainContent: React.FC = () => {
    const sections = [
        {
            title: "ABOUT US",
            content: "We are a leading Career Solutions Provider who offer up-to date career guidance practices,Mentorship and also University Preparation."
        },
        {
            title: "OUR VISION",
            content: "We envision that we will be able to impact the lives of the youth who cant afford proper career guidance and Job preparation. In the Future, we plan to partner with leading universities to cater for these same youth"
        },
        {
            title: "OUR LOCATION",
            content: "Our headquarters are located on 210 Street,Waiyaki Way just 500m from Safaricom Headquarters."
        }
    ];

    return (
        <main>
            {sections.map((section, index) => (
                <AboutSection key={index} title={section.title} content={section.content} />
            ))}
        </main>
    );
};

export default MainContent;