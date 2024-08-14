import React from 'react';
import Header from './Header';
import QuestionHeader from './QuestionHeader';
import AnswerOption from './AnswerOption';
import QuestionFooter from './QuestionFooter';

const answerOptions = [
    "Science fiction or technology-based",
    "Medical dramas or health documentaries",
    "Art films or design magazines",
    "Business success stories or management guides"
];

const CareerWiseQuiz: React.FC = () => {
    return (
        <main className="flex overflow-hidden flex-col pt-2.5">
            <div className="flex flex-col items-start pl-9 w-full max-md:pl-5 max-md:max-w-full">
                <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" profileSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/36cf4c0ddc88e0b9ecd451a06369aa00fae463d61197c379e7d9291bbc44835f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" />
                <h1 className="mt-28 ml-8 text-4xl leading-none text-white max-md:mt-10 max-md:max-w-full">
                    Please answer the following question.
                </h1>
                <div className="shrink-0 mt-9 ml-8 max-w-full border border-solid bg-slate-700 border-slate-700 h-[3px] w-[960px]" />
                <section className="flex self-end mt-24 max-md:mt-10">
                    <div className="flex flex-col grow shrink-0 pb-11 bg-indigo-500 basis-0 rounded-[41px] w-fit max-md:max-w-full">
                        <QuestionHeader questionText="What is your favorite type of book or movie?" />
                        <div className="flex flex-col mt-14 ml-16 max-w-full min-h-[193px] w-[742px] max-md:mt-10">
                            {answerOptions.map((option, index) => (
                                <AnswerOption key={index} text={option} />
                            ))}
                        </div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/749eb771779dc55dbad87fe599ddb69413e20d111220767a0a14129f458a8447?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start mt-32 max-w-full aspect-[0.87] w-[130px] max-md:mt-10" />
                    </div>
                </section>
                <QuestionFooter currentQuestion={6} totalQuestions={10} />
            </div>
        </main>
    );
};

export default CareerWiseQuiz;