import React from 'react';
import CareerWiseHeader from './CareerWiseHeader';
import QuestionnaireHeader from './QuestionnaireHeader';
import QuestionCard from './QuestionCard';
import QuestionProgress from './QuestionProgress';

const CareerWiseQuestionnaire: React.FC = () => {
    const options = [
        { text: "Solving puzzles and working on complex problems" },
        { text: "Helping others and working with people" },
        { text: "Creating art or working on design projects" },
        { text: "Organizing events and managing projects" }
    ];

    return (
        <main className="flex overflow-hidden flex-col pt-3.5">
            <CareerWiseHeader
                logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/64190692516fac83b6f501cc0d1abb4ca9a642c86a25eed37630a449d97e14e7?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
                searchIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/525b83c053f7713b504a3469151ba6a75975e0c1f77a5e12418da9d000f36ade?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
                profileIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/36cf4c0ddc88e0b9ecd451a06369aa00fae463d61197c379e7d9291bbc44835f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
            />
            <QuestionnaireHeader />
            <div className="flex self-end mt-24 max-md:mt-10">
                <QuestionCard
                    questionNumber={1}
                    questionText="What type of activities do you enjoy the most?"
                    options={options}
                />
            </div>
            <QuestionProgress currentQuestion={1} totalQuestions={10} />
        </main>
    );
};

export default CareerWiseQuestionnaire;