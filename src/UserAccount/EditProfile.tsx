import React from 'react';
import Sidebar from './SideBar';
import ProfileForm from './ProfileForm';

const EditProfile: React.FC = () => {
    return (
        <main className="flex overflow-hidden flex-col items-end pt-5 pr-6 pb-14 bg-white max-md:pr-5">
            <div className="flex flex-col max-w-full w-[809px]">
                <div className="flex gap-10 items-start self-end">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c52374121d791c177ee35cd97f89001487d044bc2490309ceb50cc06683bc70?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="User profile" className="object-contain shrink-0 self-end mt-10 max-w-full aspect-square rounded-[500px] w-[120px]" />
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2ff7c737b594157ded7fd5b0a7b4085de57c200041b5f0e708cd2ae9b66f97e?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="Logo" className="object-contain shrink-0 self-start max-w-full rounded-none aspect-[2.6] w-[104px]" />
                </div>
                <h1 className="z-10 self-start mt-0 text-5xl font-semibold text-black max-md:text-4xl">
                    Edit profile
                </h1>
                <div className="flex z-10 gap-4 self-start mt-0 max-w-full w-[367px] max-md:mt-0">
                    <Sidebar />
                    <ProfileForm />
                </div>
            </div>
        </main>
    );
};

export default EditProfile;