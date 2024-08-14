import React from 'react';
import Header from './Header';
import PotentialEmployers from './PotentialEmployers';
import Footer from './Footer';

const CareerWisePage: React.FC = () => {
    return (
        <div className="flex overflow-hidden flex-col pt-8 bg-white">
            <div className="flex flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
                <Header logo="https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" />
                <PotentialEmployers />
            </div>
            <Footer logo="https://cdn.builder.io/api/v1/image/assets/TEMP/fd6007ffdb11d10cf9aa1b2b26d730673eefcf67486f2e1a1da7e8024db973f7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" />
        </div>
    );
};

export default CareerWisePage;