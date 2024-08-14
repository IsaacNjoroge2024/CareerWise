import React from 'react';

const UserProfile: React.FC = () => {
    return (
        <div className="flex gap-3 items-center py-6 mt-3 w-full text-base leading-none whitespace-nowrap">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/50f4eccb7bb767985ec8424ab114ed869354e4494f31c2b21c2bc54a3a971e3c?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="User avatar" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square min-h-[40px] rounded-[360px]" />
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
                <div className="flex gap-1 items-start self-start font-bold text-gray-50">
                    <div>CareerWise</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/792eac79c27fd1d78587eda0c6d78a60399b98fdb0ce8799c15adcb44199328a?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 w-5 aspect-square" />
                </div>
                <div className="text-gray-400">@careerwise</div>
            </div>
            <button aria-label="More options">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b95b2f2e957cee352d182622c116d66baf60e02af3c558da06ca2d80a93541?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            </button>
        </div>
    );
};

export default UserProfile;