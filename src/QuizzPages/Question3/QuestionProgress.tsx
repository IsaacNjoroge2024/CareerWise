import React from 'react';

interface QuestionProgressProps {
    current: number;
    total: number;
}

const QuestionProgress: React.FC<QuestionProgressProps> = ({ current, total }) => {
    return (
        <div className="px-16 py-6 mt-11 w-full text-4xl leading-none text-white bg-stone-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            Question {current} out of {total}
        </div>
    );
};

export default QuestionProgress;