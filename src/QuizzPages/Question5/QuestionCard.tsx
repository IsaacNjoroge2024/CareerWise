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
        <section className="flex flex-col grow shrink-0 pb-14 bg-indigo-500 basis-0 rounded-[41px] w-fit max-md:max-w-full">
            <div className="flex flex-wrap gap-3 px-16 py-6 text-white bg-blue-950 max-md:px-5">
                <div className="px-3 pt-5 pb-1 text-4xl font-bold leading-4 whitespace-nowrap rounded-full bg-slate-700 h-[50px] w-[50px]">
                    {questionNumber}<br />
                </div>
                <div className="flex-auto my-auto text-3xl leading-none w-[899px] max-md:max-w-full">
                    {questionText}
                </div>
            </div>
            <div className="flex flex-col mt-14 ml-16 max-w-full w-[742px] max-md:mt-10">
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
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba47044ae40e765c1263525ce0edcc2cb3d0d186a5887dbd45ea553a03a9e4e0?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start mt-32 max-w-full aspect-[0.91] w-[136px] max-md:mt-10" />
        </section>
    );
};

export default QuestionCard;