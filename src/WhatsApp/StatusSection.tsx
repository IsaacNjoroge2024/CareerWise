import React from 'react';

interface StatusItemProps {
    imageSrc: string;
    name: string;
}

const StatusItem: React.FC<StatusItemProps> = ({ imageSrc, name }) => (
    <div className="flex flex-col justify-center p-1 rounded-full">
        <img loading="lazy" src={imageSrc} className="object-contain rounded-full aspect-[1.04] shadow-[0px_5px_15px_rgba(54,206,0,0.05)] w-[54px]" alt={`${name}'s status`} />
    </div>
);

const StatusSection: React.FC = () => {
    const statusItems = [
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c293ab0fab99b574fc684e3cd352097b88a5ee2aa4a01c7806394e7e52e6fa6?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", name: "Add" },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4e0dc696cdb921693ebb27ab46224175067468addab40a5085347308d3ea8d6?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", name: "Aliza" },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b95d8a07c39ead58d86d5e2e57abe5f088f696c19095ab2704af99a61fc2d09a?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", name: "Tahir" },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e535d9125145c78f181a23135b2188e9761fa67a1104a8df7a2b989462a2f98?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", name: "Shehnaz" },
    ];

    return (
        <section className="flex relative z-10 flex-col items-start pt-12 pr-20 pb-20 pl-5 -mt-6 w-full min-h-[736px] max-md:px-5 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f46cc94982de9514b783ed6d849b2ddbb9f6c666ea35ddcecfc4b8b043253309?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-cover absolute inset-0 size-full" alt="" />
            <h2 className="relative text-sm font-bold text-neutral-500">STATUS</h2>
            <div className="flex relative gap-2.5 mt-5">
                {statusItems.map((item, index) => (
                    <StatusItem key={index} imageSrc={item.imageSrc} name={item.name} />
                ))}
            </div>
            <div className="flex relative gap-7 mt-2 ml-3.5 text-sm font-bold whitespace-nowrap text-zinc-400 max-md:ml-2.5">
                {statusItems.map((item, index) => (
                    <div key={index}>{item.name}</div>
                ))}
            </div>
            <div className="flex relative gap-5 mt-10 text-sm font-bold">
                <div className="text-neutral-500">ALL CHATS</div>
                <div className="text-stone-300">PRIVATE</div>
            </div>
        </section>
    );
}

export default StatusSection;