import React from 'react';
import Header from './Header';
import QuestionCard from './QuestionCard';

const CareerWiseApp: React.FC = () => {
    const questionOptions = [
        "Leading a tech startup or developing new technologies",
        "Working in a hospital or a healthcare facility",
        "Creating art that is recognized globally",
        "Running a successful business or managing a large team"
    ];

    return (
        <main className="flex overflow-hidden flex-col pt-4">
            <div className="flex flex-col items-start pl-6 w-full max-md:pl-5 max-md:max-w-full">
                <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" profileSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/36cf4c0ddc88e0b9ecd451a06369aa00fae463d61197c379e7d9291bbc44835f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" />
                <h1 className="mt-36 ml-9 text-4xl leading-none text-white max-md:mt-10 max-md:max-w-full">
                    Please answer the following question.
                </h1>
                <div className="shrink-0 mt-12 ml-9 max-w-full border border-solid bg-slate-700 border-slate-700 h-[3px] w-[960px] max-md:mt-10" />
                <div className="flex self-end mt-16 max-md:mt-10">
                    <QuestionCard
                        questionNumber={7}
                        questionText="What do you see yourself doing in 10 years?"
                        options={questionOptions}
                    />
                </div>
                <footer className="px-16 py-6 mt-4 w-full text-4xl leading-none text-white bg-stone-900 max-md:px-5 max-md:max-w-full">
                    Question 7 out of 10
                </footer>
            </div>
        </main>
    );
};

export default CareerWiseApp;