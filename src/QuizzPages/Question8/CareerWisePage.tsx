import React from 'react';
import CareerWiseHeader from './CareerWiseHeader';
import QuestionCard from './QuestionCard';
import QuestionProgress from './QuestionProgress';

const CareerWisePage: React.FC = () => {
    const options = [
        { text: "Building or fixing things" },
        { text: "Volunteering or helping others" },
        { text: "Drawing, painting, or designing" },
        { text: "Organizing events or leading groups" }
    ];

    return (
        <main className="flex overflow-hidden flex-col pt-5">
            <div className="flex flex-col items-start pl-8 w-full max-md:pl-5 max-md:max-w-full">
                <CareerWiseHeader
                    logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
                    searchIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/525b83c053f7713b504a3469151ba6a75975e0c1f77a5e12418da9d000f36ade?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
                    profileIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/36cf4c0ddc88e0b9ecd451a06369aa00fae463d61197c379e7d9291bbc44835f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
                />
                <h1 className="mt-28 ml-6 text-4xl leading-none text-white max-md:mt-10 max-md:max-w-full">
                    Please answer the following question.
                </h1>
                <div className="shrink-0 mt-8 ml-6 max-w-full border border-solid bg-slate-700 border-slate-700 h-[3px] w-[960px]" />
                <div className="flex self-end mt-24 max-md:mt-10">
                    <QuestionCard
                        questionNumber={8}
                        questionText="How do you prefer to spend your free time?"
                        options={options}
                    />
                </div>
                <QuestionProgress currentQuestion={8} totalQuestions={10} />
            </div>
        </main>
    );
};

export default CareerWisePage;