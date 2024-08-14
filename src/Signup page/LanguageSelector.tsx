import React from 'react';

const LanguageSelector: React.FC = () => {
    return (
        <div className="flex gap-4 self-end">
            <div className="basis-auto">English (UK)</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fdd469a2aecb9e7b182fc907017db723abd23870adf0de4ef04b18b42b8e257?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 self-start mt-3 aspect-[1.91] w-[21px]" alt="" />
        </div>
    );
};

export default LanguageSelector;