import React from 'react';

interface SocialButtonProps {
    provider: string;
    imageSrc: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ provider, imageSrc }) => (
    <div className="flex flex-1 gap-5 px-3.5 py-3.5 rounded-md border border-gray-200 border-solid">
        <img loading="lazy" src={imageSrc} className="object-contain shrink-0 w-9 aspect-[0.78]" alt={`${provider} logo`} />
        <div>Continue with {provider}</div>
    </div>
);

const SocialSignIn: React.FC = () => {
    const socialProviders = [
        { provider: 'Google', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/81f7cc3ba5ef7e088824fe458c09545bf2e3a3e53514e376f195ebc2cb101ea5?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87' },
        { provider: 'Facebook', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9e532ac2bbd3973603bb3cbea4a99d667e85ba7ff5237a8fb114ef46a64f03e0?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87' }
    ];

    return (
        <div className="flex flex-wrap gap-10 self-stretch mt-14 w-full text-base font-semibold max-md:mt-10 max-md:mr-2 max-md:max-w-full">
            {socialProviders.map((provider, index) => (
                <SocialButton key={index} {...provider} />
            ))}
        </div>
    );
};

export default SocialSignIn;