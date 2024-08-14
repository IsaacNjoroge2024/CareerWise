import React from 'react';
import ThankYouMessage from './ThankYouMessage';

const CareerWiseThankYou: React.FC = () => {
    return (
        <main className="flex overflow-hidden flex-col justify-center px-16 py-16 text-3xl font-light text-black max-md:px-5">
            <ThankYouMessage
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b2dcda695ddac5b805204f0dbcc312d280d93494981d707f827a1ccf282f21a8?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87"
                altText="CareerWise thank you illustration"
                message="Thank you for choosing CareerWise"
            />
        </main>
    );
};

export default CareerWiseThankYou;