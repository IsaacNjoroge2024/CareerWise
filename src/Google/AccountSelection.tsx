import React from 'react';
import AccountOption from './AccountOption';
import LanguageSelector from './LanguageSelector';
import Footer from './Footer';

interface AccountSelectionProps {
    siteName: string;
}

const AccountSelection: React.FC<AccountSelectionProps> = ({ siteName }) => {
    const accounts = [
        { name: 'Isaac Njoroge', email: 'isaac.njoroge@gmail.com', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3ba8c401483213b7978f3a581ef66345ad219f7df1a1fe60275fa519e4b184f3?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87' },
        { name: 'Alvin Rwema', email: 'alvin.rwema@gmail.com', initial: 'A' },
        { name: 'Use Another account', email: '', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a1e1366cccd5b95563321147b9148f4c0f202ca7f80a38440a9d47f3207bf2c?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87' }
    ];

    return (
        <main className="flex overflow-hidden flex-col justify-center px-52 py-32 bg-slate-100 rounded-[40px] max-md:px-5 max-md:py-24">
            <section className="flex flex-col w-full max-md:max-w-full">
                <div className="flex flex-col w-full bg-white rounded-3xl max-md:max-w-full">
                    <header className="flex flex-wrap gap-3 items-center px-4 pt-2.5 pb-1.5 w-full text-sm leading-snug text-gray-600 border-b border-stone-300 max-md:max-w-full">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5073e8891f562dc64a918ddfa36a544bacde21bfd823983c477491ec38ab349e?placeholderIfAbsent=true&apiKey=3c8be96a4c1e410f8809634ba899bb87" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" />
                        <span className="self-stretch my-auto">Sign in with Google</span>
                    </header>
                    <div className="flex flex-wrap gap-6 items-start px-9 pt-20 pb-6 w-full max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                            <h1 className="text-4xl leading-none text-stone-900">Choose an account</h1>
                            <p className="flex items-start self-start mt-6 text-base">
                                <span className="text-stone-900">to continue to </span>
                                <span className="gap-2 self-stretch px-1.5 font-medium tracking-wide text-blue-700 whitespace-nowrap">{siteName}</span>
                            </p>
                        </div>
                        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
                            {accounts.map((account, index) => (
                                <AccountOption key={index} {...account} />
                            ))}
                            <p className="flex-1 shrink gap-2 self-stretch px-4 py-2 mt-8 w-full text-sm leading-5 text-zinc-700">
                                To continue, Google will share your name, email address, language preference, and profile picture with {siteName}. Before using this app, you can review {siteName}'s{' '}
                                <a href="https://www.kittl.com/privacy" className="font-medium text-blue-700" target="_blank" rel="noopener noreferrer">
                                    privacy policy
                                </a>{' '}
                                and{' '}
                                <a href="https://www.kittl.com/terms" className="font-medium text-blue-700" target="_blank" rel="noopener noreferrer">
                                    terms of service
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                    <footer className="flex flex-wrap gap-10 justify-between items-start py-4 w-full text-xs tracking-normal leading-loose text-zinc-700 max-md:max-w-full">
                        <LanguageSelector />
                        <Footer />
                    </footer>
                </div>
            </section>
        </main>
    );
};

export default AccountSelection;