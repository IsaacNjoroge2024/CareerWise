import React from 'react';

interface QuestionProgressProps {
    currentQuestion: number;
    totalQuestions: number;
}

const QuestionProgress: React.FC<QuestionProgressProps> = ({ currentQuestion, totalQuestions }) => {
    return (
        <footer className="px-16 py-6 mt-7 w-full text-4xl leading-none text-white bg-stone-900 max-md:px-5 max-md:max-w-full">
            Question {currentQuestion} out of {totalQuestions}
        </footer>
    );
};

export default QuestionProgress;