import React from 'react';
import MessageItem, { MessageItemProps } from './MessageItem';

const messages: MessageItemProps[] = [
    {
        name: "Dr Eric Kamau",
        message: "Hey, How is your day going?Is Everything Fine?",
        time: "20:30",
        unreadCount: 3,
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7dd9a25507ab6fc17596a79b35082ed701e555d0b5416cd718af50c9794d599f?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87",
        isOnline: true
    },
    {
        name: "Mary Kimani",
        message: "Hey! Have you tried to apply to the new Safaricom Engineer Job Post?",
        time: "10:45",
        unreadCount: 2,
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba6c18ff5a0f472256992149e17ad784bbdfaf6e9e28c9d390611c53b529a49e?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87",
        isOnline: true
    },
    {
        name: "Patrick Stanley",
        message: "Hey! Have you tried debugging the code you sent me.",
        time: "08:15",
        unreadCount: 1,
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5428f708806033f8726daf8e844bd978d0bf54cd30bda21f86128a35a7310f34?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87",
        isOnline: false
    }
];

const MessageList: React.FC = () => {
    return (
        <section className="flex flex-col gap-28 mt-16 ml-16 max-w-full w-[821px] max-md:mt-10">
            {messages.map((message, index) => (
                <MessageItem key={index} {...message} />
            ))}
        </section>
    );
};

export default MessageList;