import React from 'react';

interface ChatItemProps {
    imageSrc: string;
    name: string;
    lastMessage: string;
    unreadCount?: number;
    callEnded?: boolean;
}

const ChatItem: React.FC<ChatItemProps> = ({ imageSrc, name, lastMessage, unreadCount, callEnded }) => (
    <div className="flex relative gap-2.5 mt-5">
        <img loading="lazy" src={imageSrc} className="object-contain shrink-0 w-14 aspect-[1.08]" alt={`${name}'s profile`} />
        <div className="flex flex-col my-auto">
            <div className="self-start text-base font-bold text-zinc-400">{name}</div>
            <div className="mt-3 text-sm font-medium text-neutral-400">
                {callEnded ? (
                    <div className="flex gap-1.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1373b65911c2c09f1dbef8d776e6cd8341065b1f3bba28338c1b6f0e38def89a?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 self-start aspect-[1.08] w-[13px]" alt="Call ended icon" />
                        <div>Call ended</div>
                    </div>
                ) : (
                    lastMessage
                )}
            </div>
        </div>
        {unreadCount && (
            <div className="self-start p-1 text-xs font-medium text-white whitespace-nowrap rounded-[30px] bg-blue-500">
                {unreadCount}
            </div>
        )}
    </div>
);

const ChatList: React.FC = () => {
    const chatItems = [
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b0fe1c89560a53f37489e4e1b5259bff02e81eeee737581d2afd6e6272ce251?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", name: "Shehnaz", lastMessage: "What time are we there?", unreadCount: 13, callEnded: true },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc47d5eaf98cef0f62560537476e6d95c202e4d4f0af00f88b0744ea867e9a81?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", name: "Mueez", lastMessage: "You: I will send you the work file" },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e411b0ddf558ebdcadae4516fb2c3f1c7df6b95462385be476b76dbac78a7127?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", name: "Hasnain", lastMessage: "You: I will send you the work file" },
        { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/13600c133e052dd9647fbf3416b32ee467d419498699513a82c33ee95565c90b?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", name: "Saleem", lastMessage: "You: I will send you the work file" },
    ];

    return (
        <nav aria-label="Chat list">
            {chatItems.map((item, index) => (
                <ChatItem key={index} {...item} />
            ))}
        </nav>
    );
}

export default ChatList;