import React from 'react';

interface SuggestedUser {
    name: string;
    username: string;
    avatar: string;
    verified: boolean;
}

const suggestedUsers: SuggestedUser[] = [
    { name: "Typeface", username: "@typefaceai", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cc98bee39daa80dec7eeb9fcb50690ec7cabfb1b6b6fe517e0c685839b3a260?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", verified: true },
    { name: "Paul Mit", username: "@pmitu", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/df6226cc486c0a97513ae1fa89dcc2c5759e168143694db593ab390fb77fe1be?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", verified: true },
    { name: "Sam Altman", username: "@sama", avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4a8e984daf82ff99fb6bccbe0424a87788083aaf3dbd5ad91f4a019aee659a1?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", verified: true },
];

const SuggestedUsers: React.FC = () => {
    return (
        <div className="flex flex-col justify-center p-4 mt-4 max-w-full text-base leading-none rounded-2xl bg-zinc-900 w-[356px]">
            <h2 className="self-start text-xl font-bold leading-tight text-center text-gray-50">
                You might like
            </h2>
            {suggestedUsers.map((user, index) => (
                <div key={index} className="flex gap-3 items-center mt-6 w-full whitespace-nowrap">
                    <img loading="lazy" src={user.avatar} alt={`${user.name}'s avatar`} className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square min-h-[40px] rounded-[360px]" />
                    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-10">
                        <div className="flex gap-1 items-start self-start font-bold text-gray-50">
                            <div>{user.name}</div>
                            {user.verified && <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bff7d7016b9ba39659dde88f8130f38b4a79b6cc4be8502b63bdb5738d95b86?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="Verified" className="object-contain shrink-0 w-5 aspect-square" />}
                        </div>
                        <div className="text-gray-400">{user.username}</div>
                    </div>
                    <button className="self-stretch px-5 py-2 my-auto font-bold text-center text-black bg-gray-50 rounded-[360px]">
                        Follow
                    </button>
                </div>
            ))}
            <button className="self-start mt-6 text-center text-sky-500">
                Show more
            </button>
        </div>
    );
};

export default SuggestedUsers;