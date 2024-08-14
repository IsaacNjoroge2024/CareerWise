import React from 'react';

const ProfileHeader: React.FC = () => {
    return (
        <header className="flex flex-col w-full bg-black max-md:max-w-full">
            <div className="flex flex-col justify-center items-start px-4 py-1 w-full max-md:max-w-full">
                <div className="flex gap-9 items-center max-w-full w-[212px]">
                    <button aria-label="Go back">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/69b8a1365476c5aea5964b117d15153a78690ad0eff197f1853f79297200a34d?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                    </button>
                    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
                        <div className="flex gap-1 items-center self-start text-xl font-bold leading-tight text-gray-50 whitespace-nowrap">
                            <div className="self-stretch my-auto">CareerWise</div>
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/792eac79c27fd1d78587eda0c6d78a60399b98fdb0ce8799c15adcb44199328a?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                        </div>
                        <div className="mt-1 text-sm leading-none text-gray-400">
                            23 post
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex relative flex-col mt-1 w-full min-h-[200px] max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d2967acbf733ee7d79cc4e18d7add0d7c632278f3bf0d24c6c0628bd7c7aaf5?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="Profile banner" className="object-contain z-0 flex-1 py-8 w-full aspect-[3] max-md:max-w-full" />
                <div className="flex absolute left-4 z-0 flex-col max-w-full border-4 border-black border-solid bottom-[-66px] h-[132px] min-h-[132px] rounded-[360px] w-[132px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/90c8b4acf0556a47f2b060e238304acce579f3bcfa9a903c61468e910643c67f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="Profile picture" className="object-contain w-full aspect-square min-h-[132px] rounded-[360px]" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3 items-start px-4 py-3 mt-1 w-full max-md:max-w-full">
                <button aria-label="More options" className="flex justify-center items-center p-2 w-9 border border-gray-700 border-solid rounded-[360px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b95b2f2e957cee352d182622c116d66baf60e02af3c558da06ca2d80a93541?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain self-stretch my-auto w-5 aspect-square" />
                </button>
                <button aria-label="Notifications" className="flex justify-center items-center p-2 w-9 border border-gray-700 border-solid rounded-[360px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee01c8ec7fa30be67b6341827ddefb00ccfd303ed7d29a7176ad09b1e47ea3de?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain self-stretch my-auto w-5 aspect-square" />
                </button>
                <button className="self-stretch px-5 py-2 text-base font-bold leading-none text-center text-black whitespace-nowrap bg-gray-50 rounded-[360px]">
                    Follow
                </button>
            </div>
        </header>
    );
};

export default ProfileHeader;