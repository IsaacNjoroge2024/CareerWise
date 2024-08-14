import React from 'react';

interface ThankYouMessageProps {
    imageSrc: string;
    altText: string;
    message: string;
}

const ThankYouMessage: React.FC<ThankYouMessageProps> = ({ imageSrc, altText, message }) => {
    return (
        <section className="flex flex-col items-center px-20 pt-16 pb-10 bg-white rounded-[111px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[501px]">
                <img loading="lazy" src={imageSrc} alt={altText} className="object-contain w-full aspect-[0.92] max-md:max-w-full" />
                <p className="mt-2 max-md:mr-1 max-md:max-w-full">{message}</p>
            </div>
        </section>
    );
};

export default ThankYouMessage;