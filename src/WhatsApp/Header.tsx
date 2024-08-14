import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex flex-col px-5 w-full max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-center w-full max-md:max-w-full">
                <div className="flex gap-1.5 self-stretch my-auto">
                    <div className="flex shrink-0 h-2.5 bg-red-400 rounded-full w-[11px]" />
                    <div className="flex shrink-0 w-2.5 h-2.5 bg-amber-300 rounded-full" />
                    <div className="flex shrink-0 w-2.5 h-2.5 bg-green-400 rounded-full" />
                </div>
                <div className="flex gap-10 self-stretch">
                    <div className="flex gap-3 my-auto">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/aee1a1a7e85ea059966dace7e6d347ba90f8c6d7cbefbbb85eaf6ce20d8bb1ce?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 aspect-square w-[21px]" alt="" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8ebae4818877520e54811d2176ee8af1534099a8685e161d22ac12d081a944b?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 aspect-square w-[21px]" alt="" />
                    </div>
                    <div className="flex gap-3 whitespace-nowrap">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e6c7d34b6ce10b35ca89f27977bc3da3a115e3065eb3258432574f47e3c8f7b?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 rounded-full aspect-[1.04] w-[54px]" alt="User profile" />
                        <div className="flex flex-col my-auto">
                            <div className="text-base font-bold text-white">Zilan</div>
                            <div className="mt-3.5 text-xs font-medium text-stone-300">Online</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 self-stretch my-auto">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac36dbf8399ca02d0e63948b2d8b9eedea6bb25414a22eb35e260042089d78d9?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 w-10 rounded-full aspect-[1.03]" alt="User 1" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/98e048605820c9fbd37df000e58a1b74d282abf72026244121664c7cfd5f0e68?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 rounded-full aspect-[1.05] w-[41px]" alt="User 2" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b8d453b5d93a23f295efe3ddaa23f07b1c5ea030cc0188e2380a7b32b6debab?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 w-10 rounded-full aspect-[1.03]" alt="User 3" />
                </div>
            </div>
            <div className="flex gap-2.5 self-start px-3 py-2.5 text-sm bg-black rounded-[70px] text-neutral-200">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8904237e22f42d8b13f0c045b2dd1b9d6331096af82bfc9be9d259bfc73b892e?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 aspect-[1.1] w-[22px]" alt="Search icon" />
                <div className="basis-auto">Search or start new chat</div>
            </div>
        </header>
    );
}

export default Header;