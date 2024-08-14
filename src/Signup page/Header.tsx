import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="flex gap-1.5 self-start text-4xl leading-none whitespace-nowrap text-white font-semibold">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58890864df38403ee0b2a66c2c2aadc7d768c914e37baf14443442b19c2270c3?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 aspect-square w-[89px]" alt="CareerWise logo" />
            <div className="my-auto basis-auto">CareerWise</div>
        </div>
    );
};

export default Header;