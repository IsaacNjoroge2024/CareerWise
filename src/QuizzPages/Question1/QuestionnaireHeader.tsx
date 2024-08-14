import React from 'react';

const QuestionnaireHeader: React.FC = () => {
    return (
        <section className="mt-28 ml-7 text-4xl leading-none text-white max-md:mt-10 max-md:max-w-full">
            <h1>Welcome! Please answer the following questions.</h1>
            <div className="shrink-0 mt-12 ml-6 max-w-full border border-solid bg-slate-700 border-slate-700 h-[3px] w-[960px] max-md:mt-10" />
        </section>
    );
};

export default QuestionnaireHeader;