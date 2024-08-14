import React from 'react';

interface TrendingTopic {
    category: string;
    title: string;
    posts: string;
}

const trendingTopics: TrendingTopic[] = [
    { category: "Trending", title: "Stripe", posts: "4,377 posts" },
    { category: "Business & finance · Trending", title: "S&P 500", posts: "4,555 posts" },
    { category: "Trending", title: "SaaS", posts: "4,486 posts" },
    { category: "Technology · Trending", title: "Tailwind", posts: "1,430 posts" },
    { category: "Trending", title: "Notion", posts: "23.7K posts" },
    { category: "Technology · Trending", title: "#figma", posts: "" },
];

const TrendingTopics: React.FC = () => {
    return (
        <div className="flex flex-col justify-center p-4 mt-4 max-w-full rounded-2xl bg-zinc-900 w-[356px]">
            <h2 className="self-start text-xl font-bold leading-tight text-center text-gray-50">
                Trends for you
            </h2>
            {trendingTopics.map((topic, index) => (
                <div key={index} className="flex gap-3 items-start mt-6 w-full text-sm leading-none text-gray-400">
                    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                        <div>{topic.category}</div>
                        <div className="self-start mt-1 text-base font-bold leading-none text-gray-50 whitespace-nowrap">
                            {topic.title}
                        </div>
                        {topic.posts && <div className="mt-1">{topic.posts}</div>}
                    </div>
                    <button aria-label="More options">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9994b53fb2e45088c5afdd5450c08da71f75a91fffee6541f2bc421227715c47?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 w-5 aspect-square" />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TrendingTopics;