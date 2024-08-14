import React from 'react';
import QuestionOption from './QuestionOption';

interface QuestionCardProps {
    questionNumber: number;
    questionText: string;
    options: string[];
    nextButtonSrc: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questionNumber, questionText, options, nextButtonSrc }) => {
    return (
        <section className="flex flex-col grow shrink-0 pb-20 bg-indigo-500 basis-0 rounded-[41px] w-fit max-md:max-w-full">
            <div className="flex flex-col justify-center items-start px-16 py-6 w-full text-white bg-blue-950 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-4">
                    <div className="px-0.5 text-4xl font-bold leading-none whitespace-nowrap rounded-full bg-slate-700 h-[50px] w-[50px] flex items-center justify-center">
                        {questionNumber}
                    </div>
                    <h2 className="flex-auto my-auto text-3xl leading-none max-md:max-w-full">
                        {questionText}
                    </h2>
                </div>
            </div>
            <div className="flex flex-col mt-14 ml-16 max-w-full w-[742px] max-md:mt-10">
                {options.map((option, index) => (
                    <QuestionOption key={index} text={option} />
                ))}
            </div>
            <img loading="lazy" src={nextButtonSrc} alt="Next question" className="object-contain shrink-0 self-start mt-36 max-w-full aspect-[0.98] w-[147px] max-md:mt-10" />
        </section>
    );
};

export default QuestionCard;