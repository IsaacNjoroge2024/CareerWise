import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <aside className="flex flex-col mt-7 w-full max-md:mt-10">
            <div className="flex flex-col items-center pr-14 pl-3 w-full font-bold max-md:pr-5">
                <div className="flex gap-4 self-start text-sm text-stone-300">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca49afec1a359e75011b09038763055456e39ba31e71d2edd602e50682f3296c?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 self-start mt-1 aspect-[1.18] w-[13px]" alt="" />
                    <div>Contact info</div>
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7414bbffbe8e2dcc741a6de6c9a5b85bfd6452a4d9cd1163a8cf83ee37f50bb8?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain mt-14 max-w-full rounded-full aspect-[1.04] w-[108px] max-md:mt-10" alt="Zilan's profile" />
                <h2 className="mt-4 text-2xl text-white">Zilan</h2>
                <div className="mt-4 text-xs font-medium text-stone-300">Online</div>
            </div>
            <div className="flex gap-1.5 mt-7 max-md:ml-2">
                <div className="flex flex-col items-start">
                    <div className="flex gap-2.5 self-end max-md:mr-2.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/415489878fa923e59021c36cdf29cc19097dfc32c5f9239d8340ab4634b277b3?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 rounded-full aspect-[1.05] w-[41px]" alt="Contact 1" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/468c0598930fff5d56d8a74c429bed8542354fe1ea420af71e10bcd88a4dfe63?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 rounded-full aspect-[1.05] w-[41px]" alt="Contact 2" />
                    </div>
                    <h3 className="mt-5 text-sm font-bold text-white">About</h3>
                    <p className="mt-4 text-sm text-neutral-400">Hello My name is Zilan ...</p>
                    <h3 className="mt-5 text-sm font-bold text-white">Media, links and doc</h3>
                    <div className="flex gap-1.5 self-stretch mt-4">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eb27ff5b4f5ad3fd6f17b2b3157bad04101bcc817e9889caa7c46ad32fd8592?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 w-16 rounded-md aspect-[1.03]" alt="Media 1" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/757d9be10bab934650a7be619b96eca4081fd857ab4eaca3f93d9a30cee327a4?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 rounded-md aspect-[1.05] w-[65px]" alt="Media 2" />
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26eb17862f7dc175a22c5c099020a7fd6a2eed899829ca49481d16f06fa5008?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 w-16 rounded-md aspect-[1.03]" alt="Media 3" />
                    </div>
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/703193e16bc2bb1807c24b18e0f3f214ee882d0d79c23489d95c1260956d6e3d?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 self-end mt-36 w-16 rounded-md aspect-[1.03] max-md:mt-10" alt="Additional media" />
            </div>
            <div className="flex gap-5 justify-between mt-11 max-md:mt-10">
                <div className="flex flex-col items-start text-sm font-bold">
                    <div className="flex flex-col items-start self-stretch pl-2">
                        <div className="text-white">Mute notifications</div>
                        <div className="self-stretch mt-6 text-neutral-500">Disappearing messages</div>
                        <div className="mt-4 text-neutral-400">Off</div>
                    </div>
                    <button className="flex gap-4 mt-11 text-pink-600 max-md:mt-10">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/030a4cf2da8d6ad3fc3286dcc833b3ce8d05e1cf42fd033f93fdba69a4bbb1f2?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 aspect-[1.04] w-[25px]" alt="" />
                        <span className="my-auto">Block Zilan</span>
                    </button>
                    <button className="flex gap-4 mt-3 text-pink-600">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d73d70c6e1519f6594890a59897695a1c2572f5f2679e9b2c62ccf7e3a55147?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 aspect-square w-[25px]" alt="" />
                        <span className="my-auto">Report Zilan</span>
                    </button>
                    <button className="flex gap-4 mt-3 text-pink-600">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a8cef9def53fa8d670395095fa6501be525f8e5ab4089d0cf5c763791ec678c?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 aspect-[1.04] w-[25px]" alt="" />
                        <span className="self-start">Delete chat</span>
                    </button>
                </div>
                <div className="flex flex-col items-start self-start bg-zinc-100 rounded-[32px]">
                    <div className="flex shrink-0 w-5 rounded-full bg-stone-300 h-[18px]" />
                </div>
            </div>
        </aside>
    );
}

export default ContactInfo;