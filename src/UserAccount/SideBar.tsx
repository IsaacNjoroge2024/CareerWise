import React from 'react';

interface MenuItem {
    icon: string;
    label: string;
    isActive?: boolean;
}

const menuItems: MenuItem[] = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/584d15c35c85d0b6cf131ed6aff7c52de9308652f530eedc3272a3f24dd8eeff?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", label: "Edit profile", isActive: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/780398ec59ec951931e67189c405dc993b3c85f1ab5b6af321b4ad0dba3b427d?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", label: "Notification" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/27ef434bc905050adfc45658b7f7087ec25f18f801fdc0c02235f8189e006b94?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", label: "Security" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0adf8fe9f68bf810e58454d34aad4456635541c24850da6670577fa80d35daba?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", label: "Appearance" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e814b0406b0f23f8dab47dadda981cbff5e266a8505f687222d5676f50ff45e2?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87", label: "Help" },
];

const Sidebar: React.FC = () => {
    return (
        <nav className="flex flex-col items-center px-4 pt-3.5 pb-9 bg-stone-300 max-md:pr-5">
            <div className="flex flex-col self-start w-full">
                <div className="flex gap-2.5 items-center p-2.5 min-h-[80px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef9feeb31f1aabc7bd333adfe2a4f8dde96c3abce4a18e630be4c01f2cbde07?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="User avatar" className="object-contain self-stretch my-auto aspect-square w-[60px]" />
                </div>
                {[4, 5, 6, 7, 8].map((num) => (
                    <img key={num} loading="lazy" src={`http://b.io/ext_${num}-`} alt="" className="object-contain mt-20 w-10 aspect-[1.03] max-md:mt-10" />
                ))}
            </div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/517e49990e1c86ab8bc5c6d97cfe007f1c2327c5a7524dfe882c9d0b91e730c0?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain self-start mt-80 aspect-square w-[65px] max-md:mt-10" />
            <div className="flex gap-2 text-3xl font-medium text-zinc-500">
                <div className="flex flex-col items-start self-start mt-9 w-full">
                    <h2 className="self-center text-3xl font-bold text-zinc-900">settings</h2>
                    {menuItems.map((item, index) => (
                        <div key={index} className={`flex gap-8 mt-20 whitespace-nowrap max-md:mt-10 ${item.isActive ? 'font-bold text-zinc-900' : ''}`}>
                            <img loading="lazy" src={item.icon} alt="" className="object-contain shrink-0 w-10 aspect-square" />
                            <div className={item.isActive ? 'basis-auto' : 'grow shrink'}>{item.label}</div>
                        </div>
                    ))}
                    <div className="flex gap-7 mt-20 ml-3 text-3xl text-black text-opacity-50 max-md:mt-10 max-md:ml-2.5">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2aa55e082b5c89271cf8825ca7b1f0525d544028e3598c1a85b5e2f8702b04c9?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-start aspect-square w-[30px]" />
                        <div>Log out</div>
                    </div>
                </div>
                <div className="shrink-0 w-px border border-solid border-zinc-500 h-[1117px]" />
            </div>
        </nav>
    );
};

export default Sidebar;