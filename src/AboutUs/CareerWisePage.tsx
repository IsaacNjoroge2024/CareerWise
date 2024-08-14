import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const CareerWisePage: React.FC = () => {
    return (
        <div className="flex overflow-hidden flex-col pt-10 bg-white">
            <div className="flex flex-col pr-14 pl-3.5 w-full max-md:pr-5 max-md:max-w-full">
                <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" profileSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/36cf4c0ddc88e0b9ecd451a06369aa00fae463d61197c379e7d9291bbc44835f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" />
                <MainContent />
            </div>
            <Footer logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/063311b7fc9bdb45de7b8f576505715c6489052769dba11c5eaf1b952eedd1e2?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" facebookSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/13b2ac4d2aa132fa67c13cdca35ab7dfd3b5cfa5230c8137fca01336484305aa?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" twitterSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/75a3e16c9b994a32c4dff43fbf72f3146a06203aebb9e0723f530b1a26caf198?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" />
        </div>
    );
};

export default CareerWisePage;