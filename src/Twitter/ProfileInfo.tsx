import React from 'react';

const ProfileInfo: React.FC = () => {
    return (
        <section className="flex flex-col items-start px-4 mt-1 w-full max-md:max-w-full">
            <div className="flex flex-col items-start pt-5 pb-4 w-full whitespace-nowrap max-md:max-w-full">
                <div className="flex gap-9 items-center max-w-full w-[212px]">
                    <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0">
                        <div className="flex gap-1 items-center self-start text-xl font-bold leading-tight text-gray-50">
                            <div className="self-stretch my-auto">CareerWise</div>
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/792eac79c27fd1d78587eda0c6d78a60399b98fdb0ce8799c15adcb44199328a?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                        </div>
                        <div className="mt-1 text-sm leading-none text-gray-400">
                            @careerwise
                        </div>
                    </div>
                </div>
            </div>
            <p className="px-4 mt-1 w-full text-base leading-none text-gray-50 max-md:max-w-full">
                Helping students find their path.
            </p>
            <div className="flex flex-wrap gap-3 items-start px-4 py-2 mt-1 w-full text-base leading-none text-gray-400 max-md:max-w-full">
                <div className="flex gap-1 items-center whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/850ffa52a9eb08f786a682c694ec4d70ab0b848f2a04b1c97b969c03468019cc?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                    <div className="self-stretch my-auto">Company</div>
                </div>
                <div className="flex gap-1 items-center whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/92c30d875754fb898ac45f3144f53edb03d8cf023a844130a4c00bc4cd6ee629?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                    <div className="self-stretch my-auto">Earth</div>
                </div>
                <div className="flex gap-1 items-center text-sky-500 whitespace-nowrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7bf46d17bc50a58904b1e2939d43b6f9f97828e165ec6d6417a9ab8c561dda?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                    <a href="https://careerwise.com" className="self-stretch my-auto">careerwise.com</a>
                </div>
                <div className="flex gap-1 items-center">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b9e0eb810bc8957f0c21d1a7f0e45b0893d2cac5d9cd7c9fe8385e4609b245a?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                    <div className="self-stretch my-auto">Born August 8, 2024</div>
                </div>
                <div className="flex gap-1 items-center">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7921b38a66c737406c79ba6d9f3269a1fe55b870007fef6860ffc86ade472ede?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                    <div className="self-stretch my-auto">Joined August 2024</div>
                </div>
            </div>
            <div className="flex flex-wrap gap-3 items-start px-5 mt-1 w-full text-base leading-none whitespace-nowrap max-md:max-w-full">
                <div className="flex gap-1 items-start">
                    <div className="font-bold text-gray-50">143</div>
                    <div className="text-gray-400">Following</div>
                </div>
                <div className="flex gap-1 items-start">
                    <div className="font-bold text-gray-50">150K</div>
                    <div className="text-gray-400">Followers</div>
                </div>
            </div>
        </section>
    );
};

export default ProfileInfo;