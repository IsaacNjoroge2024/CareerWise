import React from 'react';

interface Option {
    text: string;
}

interface QuestionCardProps {
    questionNumber: number;
    questionText: string;
    options: Option[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questionNumber, questionText, options }) => {
    return (
        <section className="flex flex-col grow shrink-0 pb-11 bg-indigo-500 basis-0 rounded-[41px] w-fit max-md:max-w-full">
            <div className="flex flex-col justify-center items-start px-16 py-6 w-full text-white bg-blue-950 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-4">
                    <div className="px-4 text-4xl font-bold leading-none whitespace-nowrap rounded-full bg-slate-700 h-[50px] w-[50px]">
                        {questionNumber}
                    </div>
                    <h2 className="flex-auto my-auto text-3xl leading-none max-md:max-w-full">
                        {questionText}
                    </h2>
                </div>
            </div>
            <div className="flex flex-col mt-14 ml-16 max-w-full min-h-[193px] w-[742px] max-md:mt-10">
                {options.map((option, index) => (
                    <div key={index} className="flex flex-wrap gap-2.5 items-center mt-5 w-full max-md:max-w-full">
                        <div className="flex flex-col self-stretch my-auto w-5">
                            <div className="flex shrink-0 h-5 rounded-full border-2 border-solid border-black border-opacity-30" />
                        </div>
                        <div className="flex-1 shrink self-stretch my-auto text-2xl leading-none basis-0 text-white text-opacity-80 max-md:max-w-full">
                            {option.text}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QuestionCard;