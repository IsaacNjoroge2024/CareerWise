import React from 'react';

interface SidebarItemProps {
    icon: string;
    text: string;
    isBold?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isBold = false }) => {
    return (
        <div className={`flex gap-5 items-start p-3 mt-1 w-full text-xl leading-tight text-gray-50 whitespace-nowrap rounded-[360px] ${isBold ? 'font-bold' : ''}`}>
            <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-6 aspect-square" />
            {text && <div>{text}</div>}
        </div>
    );
};

export default SidebarItem;