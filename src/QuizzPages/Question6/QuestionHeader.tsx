import React from 'react';

type QuestionHeaderProps = {
    questionText: string;
};

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ questionText }) => {
    return (
        <div className="flex flex-col justify-center items-start px-16 py-6 w-full text-white bg-blue-950 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-4">
                <div className="px-3.5 text-4xl font-bold leading-none whitespace-nowrap rounded-full bg-slate-700 h-[50px] w-[50px] flex items-center justify-center">
                    6
                </div>
                <div className="flex-auto my-auto text-3xl leading-none max-md:max-w-full">
                    {questionText}
                </div>
            </div>
        </div>
    );
};

export default QuestionHeader;