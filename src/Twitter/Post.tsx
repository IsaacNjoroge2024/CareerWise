import React from 'react';

const Post: React.FC = () => {
    return (
        <article className="flex flex-col flex-1 w-full bg-black max-md:max-w-full">
            <div className="flex flex-wrap gap-3 items-center px-9 pt-2 w-full text-sm font-bold leading-none text-gray-400 max-md:px-5 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/37ac4a051ad539d24884981490e428d47d3c131f06e93c8712069a75b70c6bed?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                <div className="self-stretch my-auto">You reposted</div>
            </div>
            Continuing from where we left off:

            <div className="flex flex-wrap gap-3 items-start px-4 mt-1 w-full text-base max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd485383a8a05ce804ce299446da166cc97f3893b8d8f6e2caf8e5695679c8ea?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="Modest Mitkus profile picture" className="object-contain shrink-0 w-10 aspect-square min-h-[40px] rounded-[360px]" />
                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="flex flex-wrap gap-1 items-start w-full leading-none max-md:max-w-full">
                            <div className="flex gap-1 items-center font-bold text-gray-50">
                                <div className="self-stretch my-auto">Modest Mitkus</div>
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/792eac79c27fd1d78587eda0c6d78a60399b98fdb0ce8799c15adcb44199328a?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                            </div>
                            <div className="flex-1 shrink text-gray-400 basis-0">
                                @ModestMitkus · Nov 20, 2023
                            </div>
                            <button aria-label="More options">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9994b53fb2e45088c5afdd5450c08da71f75a91fffee6541f2bc421227715c47?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 w-5 aspect-square" />
                            </button>
                        </div>
                        <p className="mt-1 leading-5 text-gray-50 max-md:max-w-full">
                            You can learn new skills through that can help you earn
                            up to $10,000/month. Unfortunately, most people have no idea how…
                            Here's my tested blueprint to go from $0 → $10,000/month:
                        </p>
                    </div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad6fe81ae6e226c2dbf68d87b7d3ad8e015fc5961aa5833205f6597aaf1690d3?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="Blueprint infographic" className="object-contain mt-3 max-w-full rounded-2xl aspect-[0.8] w-[408px]" />
                </div>
            </div>
        </article>
    );
};

export default Post;