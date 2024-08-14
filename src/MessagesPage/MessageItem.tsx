import React from 'react';

export interface MessageItemProps {
    name: string;
    message: string;
    time: string;
    unreadCount: number;
    imageSrc: string;
    isOnline: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ name, message, time, unreadCount, imageSrc, isOnline }) => {
    return (
        <article className="flex flex-wrap gap-10 max-md:max-w-full">
            <div className="flex-auto max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                        <div className="flex relative flex-col grow items-end px-7 pt-24 pb-3 rounded-full aspect-[1.091] w-[132px] max-md:pl-5 max-md:mt-8">
                            <img loading="lazy" src={imageSrc} alt={`Profile picture of ${name}`} className="object-cover absolute inset-0 size-full" />
                            <div className={`flex relative shrink-0 w-6 rounded-full border border-white border-solid h-[22px] ${isOnline ? 'bg-green-500' : 'bg-slate-300'}`} />
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-3 max-md:mt-10">
                            <h2 className="self-start text-2xl font-medium text-black">{name}</h2>
                            <p className="mt-3.5 text-xl text-gray-400">{message}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col self-start mt-4 whitespace-nowrap">
                <time className="text-xl text-slate-300">{time}</time>
                {unreadCount > 0 && (
                    <div className="self-end px-1.5 mt-4 w-5 h-5 text-xs text-white bg-cyan-400 rounded-full max-md:mr-2.5">
                        {unreadCount}
                    </div>
                )}
            </div>
        </article>
    );
};

export default MessageItem;