import React from 'react';
import Header from './Header';
import ResultsTitle from './ResultsTile';
import FilterSection from './FilterSection';
import ActionButton from './ActionButton';
import Footer from './Footer';

const MainContent: React.FC = () => {
    const headerNavItems = ['Home', 'My Courses', 'My Messages', 'Contact'];
    const filterOptions = [
        { label: 'Degrees most suitable for you', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c655c9390a8d3792829afbb903c48f3480d97d2dac8593c49f3fb24e4d4c451?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87' },
        { label: 'Universities most suitable for you', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73d24f9c45715664963edf43986388604fc3c790523fac7c41fc8e477c82f49d?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87' }
    ];
    const footerNavItems = ['Home', 'My Courses', 'Contact', 'My Messages'];
    const socialIcons = ['https://cdn.builder.io/api/v1/image/assets/TEMP/8077b666e1e1db58e73bb4c092bade39587fd20ee14e8ec1b2635fdd734ff463?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87', 'https://cdn.builder.io/api/v1/image/assets/TEMP/409ac61bf1b818174d18a55bebb0409b37b8723909fc38cfc25671afbb72612f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87'];

    return (
        <main className="flex overflow-hidden flex-col items-center pt-4">
            <Header logo="https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" navItems={headerNavItems} />
            <ResultsTitle />
            <section className="flex flex-col items-start pt-14 pl-4 mt-20 w-full bg-white bg-opacity-80 max-w-[1122px] rounded-[42px] max-md:mt-10 max-md:max-w-full">
                <FilterSection options={filterOptions} />
                <div className="z-10 mt-16 mr-0 mb-0 w-full max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
                            <ActionButton text="Click to chat with mentors" />
                        </div>
                        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
                            <div className="grow max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col">
                                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                        <ActionButton text="Click to chat with employers" />
                                    </div>
                                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c42793d3c5a3948c79c46d530c25fa4deab2b7f480610875edc343477d5a750?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="Chat illustration" className="object-contain grow w-full aspect-[0.98] max-md:max-w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer
                companyName="CareerWise"
                address="210 Street,Waiyaki Way"
                phone="+25470000011"
                navItems={footerNavItems}
                socialIcons={socialIcons}
            />
        </main>
    );
};

export default MainContent;