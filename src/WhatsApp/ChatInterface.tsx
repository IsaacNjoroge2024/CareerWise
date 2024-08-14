import React from 'react';
import StatusSection from './StatusSection';
import ChatList from './ChatList';
import ContactInfo from './ContactInfo';
import Header from './Header';

const ChatInterface: React.FC = () => {
    return (
        <div className="flex overflow-hidden flex-col">
            <div className="pr-7 w-full rounded-xl bg-neutral-900 shadow-[0px_4px_30px_rgba(0,0,0,0.25)] max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-wrap grow max-md:mt-3.5">
                            <div className="flex flex-col grow shrink-0 mt-2.5 basis-0 w-fit max-md:max-w-full">
                                <Header />
                                <StatusSection />
                                <ChatList />
                            </div>
                        </div>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/43a19ce05e722a2e8583368667cc4e735219198c38f627084643fd22a4a64958?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" className="object-contain shrink-0 w-px aspect-[0]" alt="" />
                    </div>
                    <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatInterface;