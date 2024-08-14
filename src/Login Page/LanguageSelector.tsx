import React from 'react';

const LanguageSelector: React.FC = () => {
    return (
        <div className="flex gap-7 self-end text-xl">
            <button className="basis-auto">English (UK)</button>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/de04d088983f2616f9819afa3532ee74c8cc99fc2c82d4b94937fef5d9aa99d2?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 my-auto aspect-[2.6] w-[13px]" />
        </div>
    );
};

export default LanguageSelector;