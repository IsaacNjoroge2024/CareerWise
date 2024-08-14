import React from 'react';

interface QuestionOptionProps {
    text: string;
}

const QuestionOption: React.FC<QuestionOptionProps> = ({ text }) => {
    return (
        <div className="flex flex-wrap gap-2.5 items-center mt-5 w-full max-md:max-w-full">
            <div className="flex flex-col self-stretch my-auto w-5">
                <div className="flex shrink-0 h-5 rounded-full border-2 border-solid border-black border-opacity-30" />
            </div>
            <div className="flex-1 shrink self-stretch my-auto text-2xl leading-none basis-0 text-white text-opacity-80 max-md:max-w-full">
                {text}
            </div>
        </div>
    );
};

export default QuestionOption;