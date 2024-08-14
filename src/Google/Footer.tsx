import React from 'react';

const Footer: React.FC = () => {
    return (
        <nav className="flex gap-2 items-end whitespace-nowrap">
            <a href="#" className="gap-2 self-stretch px-2 py-1.5 rounded-lg">Help</a>
            <a href="#" className="gap-2 self-stretch px-2 py-1.5 rounded-lg">Privacy</a>
            <a href="#" className="gap-2 self-stretch px-2 py-1.5 rounded-lg">Terms</a>
        </nav>
    );
};

export default Footer;