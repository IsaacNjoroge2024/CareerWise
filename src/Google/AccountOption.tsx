import React from 'react';

interface AccountOptionProps {
    name: string;
    email: string;
    image?: string;
    initial?: string;
}

const AccountOption: React.FC<AccountOptionProps> = ({ name, email, image, initial }) => {
    return (
        <>
            <div className="flex gap-3 items-center px-4 py-3 w-full rounded-2xl">
                {image ? (
                    <img loading="lazy" src={image} alt="" className="object-contain shrink-0 self-stretch my-auto w-7 rounded-full aspect-square" />
                ) : initial ? (
                    <div className="overflow-hidden self-stretch px-2.5 my-auto w-7 h-7 text-base leading-7 text-center text-white whitespace-nowrap bg-orange-600 rounded-full">
                        {initial}
                    </div>
                ) : null}
                <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
                    <div className="text-base text-stone-900">{name}</div>
                    {email && <div className="text-sm leading-none text-zinc-700">{email}</div>}
                </div>
            </div>
            <div className="flex flex-col px-4 w-full">
                <div className="w-full border border-solid border-stone-300 min-h-[1px]" />
            </div>
        </>
    );
};

export default AccountOption;