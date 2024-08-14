import React from 'react';

type QuestionFooterProps = {
    currentQuestion: number;
    totalQuestions: number;
};

const QuestionFooter: React.FC<QuestionFooterProps> = ({ currentQuestion, totalQuestions }) => {
    return (
        <footer className="px-16 py-6 mt-9 w-full text-4xl leading-none text-white bg-stone-900 max-md:px-5 max-md:max-w-full">
            Question {currentQuestion} out of {totalQuestions}
        </footer>
    );
};

export default QuestionFooter;