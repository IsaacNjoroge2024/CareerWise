import React from 'react';
import CareerWiseHeader from './CareerWiseHeader';
import QuestionHeader from './QuestionHeader';
import AnswerOption from './AnswerOption';
import QuestionProgress from './QuestionProgress';

const CareerWiseQuiz: React.FC = () => {
    const answerOptions = [
        "Working independently on technical projects",
        "Interacting with people and providing care",
        "A creative studio with flexible hours",
        "A corporate office with clear structure"
    ];

    return (
        <main className="flex overflow-hidden flex-col pt-4">
            <div className="flex flex-col items-start pl-6 w-full max-md:pl-5 max-md:max-w-full">
                <CareerWiseHeader
                    logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
                    searchIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/525b83c053f7713b504a3469151ba6a75975e0c1f77a5e12418da9d000f36ade?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
                    profileIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/36cf4c0ddc88e0b9ecd451a06369aa00fae463d61197c379e7d9291bbc44835f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
                />
                <h1 className="mt-28 ml-9 text-4xl leading-none text-white max-md:mt-10 max-md:max-w-full">
                    Please answer the following question.
                </h1>
                <div className="shrink-0 mt-10 ml-9 max-w-full border border-solid bg-slate-700 border-slate-700 h-[3px] w-[960px] max-md:mt-10" />
                <section className="flex self-end mt-20 max-md:mt-10">
                    <div className="flex flex-col grow shrink-0 pb-11 bg-indigo-500 basis-0 rounded-[41px] w-fit max-md:max-w-full">
                        <QuestionHeader
                            questionNumber={3}
                            questionText="What kind of work environment do you prefer?"
                        />
                        <div className="flex flex-col mt-14 ml-16 max-w-full min-h-[193px] w-[742px] max-md:mt-10">
                            {answerOptions.map((option, index) => (
                                <AnswerOption key={index} text={option} />
                            ))}
                        </div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7dd4a22035e51e787cbb7e39dc81d4b0fe97a399ba79ce893248b13279ea861?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start mt-36 max-w-full aspect-[0.9] w-[135px] max-md:mt-10" />
                    </div>
                </section>
                <QuestionProgress current={3} total={10} />
            </div>
        </main>
    );
};

export default CareerWiseQuiz;