import React from 'react';

const LanguageSelector: React.FC = () => {
    return (
        <div className="flex gap-2 items-center px-4 py-1.5 rounded-lg w-[204px]">
            <div className="flex-1 shrink self-stretch my-auto basis-0">English (United States)</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/df181aef3da0391fd50d195fd824901d5903825f6a8def784bec2f6ccfab1c87?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
        </div>
    );
};

export default LanguageSelector;