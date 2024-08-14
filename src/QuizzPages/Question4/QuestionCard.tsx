import React from 'react';
import QuestionOption from './QuestionOption';

type QuestionCardProps = {
    questionNumber: number;
    questionText: string;
    options: string[];
};

const QuestionCard: React.FC<QuestionCardProps> = ({ questionNumber, questionText, options }) => {
    return (
        <section className="flex flex-col grow shrink-0 pb-20 bg-indigo-500 basis-0 rounded-[41px] w-fit max-md:max-w-full">
            <div className="flex flex-wrap gap-3 px-16 py-6 text-white bg-blue-950 max-md:px-5">
                <div className="px-3 text-4xl font-bold leading-none whitespace-nowrap rounded-full bg-slate-700 h-[50px] w-[50px]">
                    {questionNumber}
                </div>
                <div className="flex-auto my-auto text-3xl leading-none w-[899px] max-md:max-w-full">
                    {questionText}
                </div>
            </div>
            <div className="flex flex-col mt-14 ml-16 max-w-full w-[742px] max-md:mt-10">
                {options.map((option, index) => (
                    <QuestionOption key={index} text={option} />
                ))}
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf0f544e246ee4a238a3140bd8665549a51423b02455f05881f332bc2d092a4?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start mt-32 max-w-full aspect-[0.89] w-[134px] max-md:mt-10" />
        </section>
    );
};

export default QuestionCard;